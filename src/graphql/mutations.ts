/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createNotification = /* GraphQL */ `mutation CreateNotification(
  $condition: ModelNotificationConditionInput
  $input: CreateNotificationInput!
) {
  createNotification(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const createTask = /* GraphQL */ `mutation CreateTask(
  $condition: ModelTaskConditionInput
  $input: CreateTaskInput!
) {
  createTask(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTaskMutationVariables,
  APITypes.CreateTaskMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification(
  $condition: ModelNotificationConditionInput
  $input: DeleteNotificationInput!
) {
  deleteNotification(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
export const deleteTask = /* GraphQL */ `mutation DeleteTask(
  $condition: ModelTaskConditionInput
  $input: DeleteTaskInput!
) {
  deleteTask(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTaskMutationVariables,
  APITypes.DeleteTaskMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification(
  $condition: ModelNotificationConditionInput
  $input: UpdateNotificationInput!
) {
  updateNotification(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const updateTask = /* GraphQL */ `mutation UpdateTask(
  $condition: ModelTaskConditionInput
  $input: UpdateTaskInput!
) {
  updateTask(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTaskMutationVariables,
  APITypes.UpdateTaskMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
