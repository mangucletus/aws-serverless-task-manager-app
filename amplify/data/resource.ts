import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

const schema = a
  .schema({
    UserProfile: a
      .model({
        email: a.string(),
        profileOwner: a.string(),
        name: a.string().required(),
        role: a.enum(["ADMIN", "TEAM_MEMBER"]),
        position: a.string(),
        avatar: a.string(),
        assignedTasks: a.hasMany("Task", "assignedToId"),
        createdTasks: a.hasMany("Task", "createdById"),
        notifications: a.hasMany("Notification", "userId"),
      })
      .authorization((allow) => [
        allow.ownerDefinedIn("profileOwner"),
      ]),

    Task: a
      .model({
        title: a.string().required(),
        description: a.string().required(),
        status: a.enum(["PENDING", "IN_PROGRESS", "COMPLETED", "CANCELLED"]),
        priority: a.enum(["HIGH", "MEDIUM", "LOW"]),
        deadline: a.datetime().required(),
        location: a.string(),
        notes: a.string(),
        assignedToId: a.id().required(),
        assignedTo: a.belongsTo("UserProfile", "assignedToId"),
        createdById: a.id().required(),
        createdBy: a.belongsTo("UserProfile", "createdById"),
        isNotified: a.boolean().default(false),
        notifications: a.hasMany("Notification", "taskId"),
      })
      .authorization((allow) => [
        allow.authenticated().to(["read"]),
        allow.ownerDefinedIn("createdById").to(["create", "update", "delete"]),
        allow.ownerDefinedIn("assignedToId").to(["update"]),
      ]),

    Notification: a
      .model({
        message: a.string().required(),
        type: a.enum(["ASSIGNMENT", "DEADLINE", "STATUS_CHANGE", "GENERAL"]),
        isRead: a.boolean().default(false),
        taskId: a.id(),
        task: a.belongsTo("Task", "taskId"),
        userId: a.id().required(),
        user: a.belongsTo("UserProfile", "userId"),
      })
      .authorization((allow) => [
        allow.ownerDefinedIn("userId"),
      ]),
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
