/* eslint-disable no-useless-catch */
import { Client, Databases, Storage } from "appwrite";
import conf from "../conf/conf.js";

export class Service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appWriteUrl);
    this.client.setProject(conf.appWriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getMyProjects() {
    try {
      return await this.database.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteProjectsCollectionId
      );
    } catch (error) {
      console.log("Appwrite service :: getMyProjects :: error " + error);
      return false;
    }
  }
}

const service = new Service();
export default service;
