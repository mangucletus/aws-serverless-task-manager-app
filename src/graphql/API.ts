/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Notification = {
  __typename: "Notification",
  createdAt: string,
  id: string,
  isRead?: boolean | null,
  message: string,
  task?: Task | null,
  taskId?: string | null,
  type?: NotificationType | null,
  updatedAt: string,
  user?: UserProfile | null,
  userId: string,
};

export type Task = {
  __typename: "Task",
  assignedTo?: UserProfile | null,
  assignedToId: string,
  createdAt: string,
  createdBy?: UserProfile | null,
  createdById: string,
  deadline: string,
  description: string,
  id: string,
  isNotified?: boolean | null,
  location?: string | null,
  notes?: string | null,
  notifications?: ModelNotificationConnection | null,
  priority?: TaskPriority | null,
  status?: TaskStatus | null,
  title: string,
  updatedAt: string,
};

export type UserProfile = {
  __typename: "UserProfile",
  assignedTasks?: ModelTaskConnection | null,
  avatar?: string | null,
  createdAt: string,
  createdTasks?: ModelTaskConnection | null,
  email?: string | null,
  id: string,
  name: string,
  notifications?: ModelNotificationConnection | null,
  position?: string | null,
  profileOwner?: string | null,
  role?: UserProfileRole | null,
  updatedAt: string,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export enum UserProfileRole {
  ADMIN = "ADMIN",
  TEAM_MEMBER = "TEAM_MEMBER",
}


export enum TaskPriority {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}


export enum TaskStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
}


export enum NotificationType {
  ASSIGNMENT = "ASSIGNMENT",
  DEADLINE = "DEADLINE",
  GENERAL = "GENERAL",
  STATUS_CHANGE = "STATUS_CHANGE",
}


export type ModelNotificationFilterInput = {
  and?: Array< ModelNotificationFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isRead?: ModelBooleanInput | null,
  message?: ModelStringInput | null,
  not?: ModelNotificationFilterInput | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  taskId?: ModelIDInput | null,
  type?: ModelNotificationTypeInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelNotificationTypeInput = {
  eq?: NotificationType | null,
  ne?: NotificationType | null,
};

export type ModelTaskFilterInput = {
  and?: Array< ModelTaskFilterInput | null > | null,
  assignedToId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  createdById?: ModelIDInput | null,
  deadline?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isNotified?: ModelBooleanInput | null,
  location?: ModelStringInput | null,
  not?: ModelTaskFilterInput | null,
  notes?: ModelStringInput | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  priority?: ModelTaskPriorityInput | null,
  status?: ModelTaskStatusInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTaskPriorityInput = {
  eq?: TaskPriority | null,
  ne?: TaskPriority | null,
};

export type ModelTaskStatusInput = {
  eq?: TaskStatus | null,
  ne?: TaskStatus | null,
};

export type ModelUserProfileFilterInput = {
  and?: Array< ModelUserProfileFilterInput | null > | null,
  avatar?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  position?: ModelStringInput | null,
  profileOwner?: ModelStringInput | null,
  role?: ModelUserProfileRoleInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserProfileRoleInput = {
  eq?: UserProfileRole | null,
  ne?: UserProfileRole | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelNotificationConditionInput = {
  and?: Array< ModelNotificationConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  isRead?: ModelBooleanInput | null,
  message?: ModelStringInput | null,
  not?: ModelNotificationConditionInput | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  taskId?: ModelIDInput | null,
  type?: ModelNotificationTypeInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateNotificationInput = {
  id?: string | null,
  isRead?: boolean | null,
  message: string,
  taskId?: string | null,
  type?: NotificationType | null,
  userId: string,
};

export type ModelTaskConditionInput = {
  and?: Array< ModelTaskConditionInput | null > | null,
  assignedToId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  createdById?: ModelIDInput | null,
  deadline?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isNotified?: ModelBooleanInput | null,
  location?: ModelStringInput | null,
  not?: ModelTaskConditionInput | null,
  notes?: ModelStringInput | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  priority?: ModelTaskPriorityInput | null,
  status?: ModelTaskStatusInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTaskInput = {
  assignedToId: string,
  createdById: string,
  deadline: string,
  description: string,
  id?: string | null,
  isNotified?: boolean | null,
  location?: string | null,
  notes?: string | null,
  priority?: TaskPriority | null,
  status?: TaskStatus | null,
  title: string,
};

export type ModelUserProfileConditionInput = {
  and?: Array< ModelUserProfileConditionInput | null > | null,
  avatar?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  position?: ModelStringInput | null,
  profileOwner?: ModelStringInput | null,
  role?: ModelUserProfileRoleInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  avatar?: string | null,
  email?: string | null,
  id?: string | null,
  name: string,
  position?: string | null,
  profileOwner?: string | null,
  role?: UserProfileRole | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type DeleteTaskInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type UpdateNotificationInput = {
  id: string,
  isRead?: boolean | null,
  message?: string | null,
  taskId?: string | null,
  type?: NotificationType | null,
  userId?: string | null,
};

export type UpdateTaskInput = {
  assignedToId?: string | null,
  createdById?: string | null,
  deadline?: string | null,
  description?: string | null,
  id: string,
  isNotified?: boolean | null,
  location?: string | null,
  notes?: string | null,
  priority?: TaskPriority | null,
  status?: TaskStatus | null,
  title?: string | null,
};

export type UpdateUserProfileInput = {
  avatar?: string | null,
  email?: string | null,
  id: string,
  name?: string | null,
  position?: string | null,
  profileOwner?: string | null,
  role?: UserProfileRole | null,
};

export type ModelSubscriptionNotificationFilterInput = {
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isRead?: ModelSubscriptionBooleanInput | null,
  message?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  taskId?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionTaskFilterInput = {
  and?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  assignedToId?: ModelStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdById?: ModelStringInput | null,
  deadline?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isNotified?: ModelSubscriptionBooleanInput | null,
  location?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  priority?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  avatar?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  position?: ModelSubscriptionStringInput | null,
  profileOwner?: ModelStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    createdAt: string,
    id: string,
    isRead?: boolean | null,
    message: string,
    task?:  {
      __typename: "Task",
      assignedToId: string,
      createdAt: string,
      createdById: string,
      deadline: string,
      description: string,
      id: string,
      isNotified?: boolean | null,
      location?: string | null,
      notes?: string | null,
      priority?: TaskPriority | null,
      status?: TaskStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    taskId?: string | null,
    type?: NotificationType | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    assignedTo?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    assignedToId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    createdById: string,
    deadline: string,
    description: string,
    id: string,
    isNotified?: boolean | null,
    location?: string | null,
    notes?: string | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    priority?: TaskPriority | null,
    status?: TaskStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    assignedTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    createdAt: string,
    createdTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    id: string,
    name: string,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    position?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      createdAt: string,
      id: string,
      isRead?: boolean | null,
      message: string,
      taskId?: string | null,
      type?: NotificationType | null,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      assignedToId: string,
      createdAt: string,
      createdById: string,
      deadline: string,
      description: string,
      id: string,
      isNotified?: boolean | null,
      location?: string | null,
      notes?: string | null,
      priority?: TaskPriority | null,
      status?: TaskStatus | null,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateNotificationMutationVariables = {
  condition?: ModelNotificationConditionInput | null,
  input: CreateNotificationInput,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    createdAt: string,
    id: string,
    isRead?: boolean | null,
    message: string,
    task?:  {
      __typename: "Task",
      assignedToId: string,
      createdAt: string,
      createdById: string,
      deadline: string,
      description: string,
      id: string,
      isNotified?: boolean | null,
      location?: string | null,
      notes?: string | null,
      priority?: TaskPriority | null,
      status?: TaskStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    taskId?: string | null,
    type?: NotificationType | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type CreateTaskMutationVariables = {
  condition?: ModelTaskConditionInput | null,
  input: CreateTaskInput,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    assignedTo?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    assignedToId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    createdById: string,
    deadline: string,
    description: string,
    id: string,
    isNotified?: boolean | null,
    location?: string | null,
    notes?: string | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    priority?: TaskPriority | null,
    status?: TaskStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    assignedTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    createdAt: string,
    createdTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    id: string,
    name: string,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    position?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  condition?: ModelNotificationConditionInput | null,
  input: DeleteNotificationInput,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    createdAt: string,
    id: string,
    isRead?: boolean | null,
    message: string,
    task?:  {
      __typename: "Task",
      assignedToId: string,
      createdAt: string,
      createdById: string,
      deadline: string,
      description: string,
      id: string,
      isNotified?: boolean | null,
      location?: string | null,
      notes?: string | null,
      priority?: TaskPriority | null,
      status?: TaskStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    taskId?: string | null,
    type?: NotificationType | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type DeleteTaskMutationVariables = {
  condition?: ModelTaskConditionInput | null,
  input: DeleteTaskInput,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    assignedTo?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    assignedToId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    createdById: string,
    deadline: string,
    description: string,
    id: string,
    isNotified?: boolean | null,
    location?: string | null,
    notes?: string | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    priority?: TaskPriority | null,
    status?: TaskStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    assignedTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    createdAt: string,
    createdTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    id: string,
    name: string,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    position?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  condition?: ModelNotificationConditionInput | null,
  input: UpdateNotificationInput,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    createdAt: string,
    id: string,
    isRead?: boolean | null,
    message: string,
    task?:  {
      __typename: "Task",
      assignedToId: string,
      createdAt: string,
      createdById: string,
      deadline: string,
      description: string,
      id: string,
      isNotified?: boolean | null,
      location?: string | null,
      notes?: string | null,
      priority?: TaskPriority | null,
      status?: TaskStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    taskId?: string | null,
    type?: NotificationType | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type UpdateTaskMutationVariables = {
  condition?: ModelTaskConditionInput | null,
  input: UpdateTaskInput,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    assignedTo?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    assignedToId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    createdById: string,
    deadline: string,
    description: string,
    id: string,
    isNotified?: boolean | null,
    location?: string | null,
    notes?: string | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    priority?: TaskPriority | null,
    status?: TaskStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    assignedTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    createdAt: string,
    createdTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    id: string,
    name: string,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    position?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
  userId?: string | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    createdAt: string,
    id: string,
    isRead?: boolean | null,
    message: string,
    task?:  {
      __typename: "Task",
      assignedToId: string,
      createdAt: string,
      createdById: string,
      deadline: string,
      description: string,
      id: string,
      isNotified?: boolean | null,
      location?: string | null,
      notes?: string | null,
      priority?: TaskPriority | null,
      status?: TaskStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    taskId?: string | null,
    type?: NotificationType | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    assignedTo?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    assignedToId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    createdById: string,
    deadline: string,
    description: string,
    id: string,
    isNotified?: boolean | null,
    location?: string | null,
    notes?: string | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    priority?: TaskPriority | null,
    status?: TaskStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    assignedTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    createdAt: string,
    createdTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    id: string,
    name: string,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    position?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
  userId?: string | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    createdAt: string,
    id: string,
    isRead?: boolean | null,
    message: string,
    task?:  {
      __typename: "Task",
      assignedToId: string,
      createdAt: string,
      createdById: string,
      deadline: string,
      description: string,
      id: string,
      isNotified?: boolean | null,
      location?: string | null,
      notes?: string | null,
      priority?: TaskPriority | null,
      status?: TaskStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    taskId?: string | null,
    type?: NotificationType | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    assignedTo?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    assignedToId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    createdById: string,
    deadline: string,
    description: string,
    id: string,
    isNotified?: boolean | null,
    location?: string | null,
    notes?: string | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    priority?: TaskPriority | null,
    status?: TaskStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    assignedTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    createdAt: string,
    createdTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    id: string,
    name: string,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    position?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
  userId?: string | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    createdAt: string,
    id: string,
    isRead?: boolean | null,
    message: string,
    task?:  {
      __typename: "Task",
      assignedToId: string,
      createdAt: string,
      createdById: string,
      deadline: string,
      description: string,
      id: string,
      isNotified?: boolean | null,
      location?: string | null,
      notes?: string | null,
      priority?: TaskPriority | null,
      status?: TaskStatus | null,
      title: string,
      updatedAt: string,
    } | null,
    taskId?: string | null,
    type?: NotificationType | null,
    updatedAt: string,
    user?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    assignedTo?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    assignedToId: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserProfile",
      avatar?: string | null,
      createdAt: string,
      email?: string | null,
      id: string,
      name: string,
      position?: string | null,
      profileOwner?: string | null,
      role?: UserProfileRole | null,
      updatedAt: string,
    } | null,
    createdById: string,
    deadline: string,
    description: string,
    id: string,
    isNotified?: boolean | null,
    location?: string | null,
    notes?: string | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    priority?: TaskPriority | null,
    status?: TaskStatus | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    assignedTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    avatar?: string | null,
    createdAt: string,
    createdTasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    email?: string | null,
    id: string,
    name: string,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    position?: string | null,
    profileOwner?: string | null,
    role?: UserProfileRole | null,
    updatedAt: string,
  } | null,
};
