/* This is stub file for gapi.client.toolresults definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('toolresults', 'v1beta3firstparty', () => {
        // now we can use gapi.client.toolresults
  
        run();

    });

    async function run() {  
        
        // Gets the Tool Results settings for a project.
        // 
        // May return any of the following canonical error codes:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to read from project
        await gapi.client.projects.getSettings({ projectId: "projectId",  }); 
        
        // Creates resources for settings which have not yet been set.
        // 
        // Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days.
        // 
        // The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details.
        // 
        // If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created.
        // 
        // May return any canonical error codes, including the following:
        // 
        // - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage
        await gapi.client.projects.initializeSettings({ projectId: "projectId",  });
    }
});
