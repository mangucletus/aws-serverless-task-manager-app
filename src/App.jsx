import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Loader } from "./components/common/Loader";
import { ToastContainer } from "react-toastify";
import "@aws-amplify/ui-react/styles.css";
import "react-toastify/dist/ReactToastify.css";
import outputs from "../amplify_outputs.json";

// Lazy loaded components
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const TeamDashboard = lazy(() => import("./pages/team/TeamDashboard"));
const TaskDetails = lazy(() => import("./pages/tasks/TaskDetails"));
const CreateTask = lazy(() => import("./pages/tasks/CreateTask"));
const EditTask = lazy(() => import("./pages/tasks/EditTask"));
const EditProfile = lazy(() => import("./pages/profile/EditProfile"));
const ViewProfile = lazy(() => import("./pages/profile/ViewProfile"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Layout = lazy(() => import("./components/layout/Layout"));

Amplify.configure(outputs);

function RequireAuth({ children }) {
  const { route } = useAuthenticator((context) => [context.route]);
  if (route !== 'authenticated') {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const { user } = useAuthenticator((context) => [context.user]);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check user role on mount and set redirect
    const checkUserRole = async () => {
      try {
        // Logic to fetch user profile and check role will be implemented here
        // For now, setting a mock value
        setUserRole("TEAM_MEMBER");
      } catch (error) {
        console.error("Error fetching user role:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      checkUserRole();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/login" element={<Authenticator />} />
          
          <Route
            path="/"
            element={
              <RequireAuth>
                <Layout />
              </RequireAuth>
            }
          >
            <Route
              index
              element={
                userRole === "ADMIN" ? (
                  <Navigate to="/admin/dashboard" replace />
                ) : (
                  <Navigate to="/team/dashboard" replace />
                )
              }
            />
            
            <Route path="admin">
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="create-task" element={<CreateTask />} />
            </Route>
            
            <Route path="team">
              <Route path="dashboard" element={<TeamDashboard />} />
            </Route>
            
            <Route path="tasks">
              <Route path="view/:id" element={<TaskDetails />} />
              <Route path="edit/:id" element={<EditTask />} />
            </Route>
            
            <Route path="profile">
              <Route path="view" element={<ViewProfile />} />
              <Route path="edit" element={<EditProfile />} />
            </Route>
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;