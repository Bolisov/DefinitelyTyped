/* This is stub file for gapi.client.servicemanagement definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('servicemanagement', 'v1', () => {
        // now we can use gapi.client.servicemanagement
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // Manage your Google API service configuration
                'https://www.googleapis.com/auth/service.management',
            
                // View your Google API service configuration
                'https://www.googleapis.com/auth/service.management.readonly',
            
                // View your data across Google Cloud Platform services
                'https://www.googleapis.com/auth/cloud-platform.read-only',
            
                // View and manage your data across Google Cloud Platform services
                'https://www.googleapis.com/auth/cloud-platform',
            ];
        const immediate = true;

        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /* handle succesfull authorization */
                run();
            } else {
                /* handle authorization error */
            }
        }); 
    });

    async function run() {  
        
        // Gets a service configuration (version) for a managed service.
        await gapi.client.services.getConfig({ serviceName: "serviceName",  }); 
        
        // Deletes a managed service. This method will change the service to the
        // `Soft-Delete` state for 30 days. Within this period, service producers may
        // call UndeleteService to restore the service.
        // After 30 days, the service will be permanently deleted.
        // 
        // Operation<response: google.protobuf.Empty>
        await gapi.client.services.delete({ serviceName: "serviceName",  }); 
        
        // Enables a service for a project, so it can be used
        // for the project. See
        // [Cloud Auth Guide](https://cloud.google.com/docs/authentication) for
        // more information.
        // 
        // Operation<response: EnableServiceResponse>
        await gapi.client.services.enable({ serviceName: "serviceName",  }); 
        
        // Sets the access control policy on the specified resource. Replaces any
        // existing policy.
        await gapi.client.services.setIamPolicy({ resource: "resource",  }); 
        
        // Disables a service for a project, so it can no longer be
        // be used for the project. It prevents accidental usage that may cause
        // unexpected billing charges or security leaks.
        // 
        // Operation<response: DisableServiceResponse>
        await gapi.client.services.disable({ serviceName: "serviceName",  }); 
        
        // Gets the access control policy for a resource.
        // Returns an empty policy if the resource exists and does not have a policy
        // set.
        await gapi.client.services.getIamPolicy({ resource: "resource",  }); 
        
        // Revives a previously deleted managed service. The method restores the
        // service using the configuration at the time the service was deleted.
        // The target service must exist and must have been deleted within the
        // last 30 days.
        // 
        // Operation<response: UndeleteServiceResponse>
        await gapi.client.services.undelete({ serviceName: "serviceName",  }); 
        
        // Lists managed services.
        // 
        // Returns all public services. For authenticated users, also returns all
        // services the calling user has "servicemanagement.services.get" permission
        // for.
        // 
        // **BETA:** If the caller specifies the `consumer_id`, it returns only the
        // services enabled on the consumer. The `consumer_id` must have the format
        // of "project:{PROJECT-ID}".
        await gapi.client.services.list({  }); 
        
        // Creates a new managed service.
        // Please note one producer project can own no more than 20 services.
        // 
        // Operation<response: ManagedService>
        await gapi.client.services.create({  }); 
        
        // Generates and returns a report (errors, warnings and changes from
        // existing configurations) associated with
        // GenerateConfigReportRequest.new_value
        // 
        // If GenerateConfigReportRequest.old_value is specified,
        // GenerateConfigReportRequest will contain a single ChangeReport based on the
        // comparison between GenerateConfigReportRequest.new_value and
        // GenerateConfigReportRequest.old_value.
        // If GenerateConfigReportRequest.old_value is not specified, this method
        // will compare GenerateConfigReportRequest.new_value with the last pushed
        // service configuration.
        await gapi.client.services.generateConfigReport({  }); 
        
        // Gets a managed service. Authentication is required unless the service is
        // public.
        await gapi.client.services.get({ serviceName: "serviceName",  }); 
        
        // Returns permissions that a caller has on the specified resource.
        // If the resource does not exist, this will return an empty set of
        // permissions, not a NOT_FOUND error.
        // 
        // Note: This operation is designed to be used for building permission-aware
        // UIs and command-line tools, not for authorization checking. This operation
        // may "fail open" without warning.
        await gapi.client.services.testIamPermissions({ resource: "resource",  }); 
        
        // Gets the latest state of a long-running operation.  Clients can use this
        // method to poll the operation result at intervals as recommended by the API
        // service.
        await gapi.client.operations.get({ name: "name",  }); 
        
        // Lists service operations that match the specified filter in the request.
        await gapi.client.operations.list({  });
    }
});
