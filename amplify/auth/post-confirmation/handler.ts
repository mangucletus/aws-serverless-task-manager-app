import type { PostConfirmationTriggerHandler } from "aws-lambda";
import type { Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/post-confirmation";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>({
  authMode: "iam",
});

export const handler: PostConfirmationTriggerHandler = async (event) => {
  const email = event.request.userAttributes.email;
  const isFirstUser = await isFirstUserSignUp();
  const role = isFirstUser ? "ADMIN" : "TEAM_MEMBER";
  
  try {
    // Use the generated client models instead of raw GraphQL
    await client.models.UserProfile.create({
      email: email,
      profileOwner: `${event.request.userAttributes.sub}::${event.userName}`,
      name: email.split('@')[0], // Default name from email
      role: role,
      position: role === "ADMIN" ? "Administrator" : "Team Member",
    });
    
    console.log(`UserProfile created successfully for ${email}`);
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }

  return event;
};

// Check if this is the first user to sign up (will be admin)
async function isFirstUserSignUp() {
  try {
    const result = await client.models.UserProfile.list();
    return result.data.length === 0;
  } catch (error) {
    console.error("Error checking if first user:", error);
    return false;
  }
}