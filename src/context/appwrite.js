import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
    .setEndpoint(process.env.REACT_APP_APPWRITE_URL)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID); // Replace with your project ID

    
export const account = new Account(client);
export const databases = new Databases(client);

