/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const getTask = /* GraphQL */ `query GetTask($id: ID!) {
  getTask(id: $id) {
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
` as GeneratedQuery<APITypes.GetTaskQueryVariables, APITypes.GetTaskQuery>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      isRead
      message
      taskId
      type
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
export const listTasks = /* GraphQL */ `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTasksQueryVariables, APITypes.ListTasksQuery>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
