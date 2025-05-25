/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
  $userId: String
) {
  onCreateNotification(filter: $filter, userId: $userId) {
    createdAt
    id
    isRead
    message
    task {
      assignedToId
      createdAt
      createdById
      deadline
      description
      id
      isNotified
      location
      notes
      priority
      status
      title
      updatedAt
      __typename
    }
    taskId
    type
    updatedAt
    user {
      avatar
      createdAt
      email
      id
      name
      position
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onCreateTask = /* GraphQL */ `subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
  onCreateTask(filter: $filter) {
    assignedTo {
      avatar
      createdAt
      email
      id
      name
      position
      profileOwner
      role
      updatedAt
      __typename
    }
    assignedToId
    createdAt
    createdBy {
      avatar
      createdAt
      email
      id
      name
      position
      profileOwner
      role
      updatedAt
      __typename
    }
    createdById
    deadline
    description
    id
    isNotified
    location
    notes
    notifications {
      nextToken
      __typename
    }
    priority
    status
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTaskSubscriptionVariables,
  APITypes.OnCreateTaskSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
    assignedTasks {
      nextToken
      __typename
    }
    avatar
    createdAt
    createdTasks {
      nextToken
      __typename
    }
    email
    id
    name
    notifications {
      nextToken
      __typename
    }
    position
    profileOwner
    role
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
  $userId: String
) {
  onDeleteNotification(filter: $filter, userId: $userId) {
    createdAt
    id
    isRead
    message
    task {
      assignedToId
      createdAt
      createdById
      deadline
      description
      id
      isNotified
      location
      notes
      priority
      status
      title
      updatedAt
      __typename
    }
    taskId
    type
    updatedAt
    user {
      avatar
      createdAt
      email
      id
      name
      position
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
export const onDeleteTask = /* GraphQL */ `subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
  onDeleteTask(filter: $filter) {
    assignedTo {
      avatar
      createdAt
      email
      id
      name
      position
      profileOwner
      role
      updatedAt
      __typename
    }
    assignedToId
    createdAt
    createdBy {
      avatar
      createdAt
      email
      id
      name
      position
      profileOwner
      role
      updatedAt
      __typename
    }
    createdById
    deadline
    description
    id
    isNotified
    location
    notes
    notifications {
      nextToken
      __typename
    }
    priority
    status
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTaskSubscriptionVariables,
  APITypes.OnDeleteTaskSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
    assignedTasks {
      nextToken
      __typename
    }
    avatar
    createdAt
    createdTasks {
      nextToken
      __typename
    }
    email
    id
    name
    notifications {
      nextToken
      __typename
    }
    position
    profileOwner
    role
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
  $userId: String
) {
  onUpdateNotification(filter: $filter, userId: $userId) {
    createdAt
    id
    isRead
    message
    task {
      assignedToId
      createdAt
      createdById
      deadline
      description
      id
      isNotified
      location
      notes
      priority
      status
      title
      updatedAt
      __typename
    }
    taskId
    type
    updatedAt
    user {
      avatar
      createdAt
      email
      id
      name
      position
      profileOwner
      role
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onUpdateTask = /* GraphQL */ `subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
  onUpdateTask(filter: $filter) {
    assignedTo {
      avatar
      createdAt
      email
      id
      name
      position
      profileOwner
      role
      updatedAt
      __typename
    }
    assignedToId
    createdAt
    createdBy {
      avatar
      createdAt
      email
      id
      name
      position
      profileOwner
      role
      updatedAt
      __typename
    }
    createdById
    deadline
    description
    id
    isNotified
    location
    notes
    notifications {
      nextToken
      __typename
    }
    priority
    status
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTaskSubscriptionVariables,
  APITypes.OnUpdateTaskSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
    assignedTasks {
      nextToken
      __typename
    }
    avatar
    createdAt
    createdTasks {
      nextToken
      __typename
    }
    email
    id
    name
    notifications {
      nextToken
      __typename
    }
    position
    profileOwner
    role
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
