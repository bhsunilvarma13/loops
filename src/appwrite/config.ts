import conf from "@/conf/config";
import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

const account = new Account(client);

export { account, ID };
