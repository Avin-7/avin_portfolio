const conf = {
  appWriteUrl: import.meta.env.VITE_APPWRITE_URL,
  appWriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appWriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appWriteProjectsCollectionId: import.meta.env
    .VITE_APPWRITE_PROJECTS_COLLECTION_ID,
  cloudinaryCloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
};
export default conf;
