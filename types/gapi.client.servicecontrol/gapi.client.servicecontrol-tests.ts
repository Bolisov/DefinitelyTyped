/* This is stub file for gapi.client.servicecontrol definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('servicecontrol', 'v1', () => {
        // now we can use gapi.client.servicecontrol
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View and manage your data across Google Cloud Platform services
                'https://www.googleapis.com/auth/cloud-platform',
            
                // Manage your Google Service Control data
                'https://www.googleapis.com/auth/servicecontrol',
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
        
        // Attempts to allocate quota for the specified consumer. It should be called
        // before the operation is executed.
        // 
        // This method requires the `servicemanagement.services.quota`
        // permission on the specified service. For more information, see
        // [Google Cloud IAM](https://cloud.google.com/iam).
        // 
        // **NOTE:** the client code **must** fail-open if the server returns one
        // of the following quota errors:
        // -   `PROJECT_STATUS_UNAVAILABLE`
        // -   `SERVICE_STATUS_UNAVAILABLE`
        // -   `BILLING_STATUS_UNAVAILABLE`
        // -   `QUOTA_SYSTEM_UNAVAILABLE`
        // 
        // The server may inject above errors to prohibit any hard dependency
        // on the quota system.
        await gapi.client.services.allocateQuota({ serviceName: "serviceName",  }); 
        
        // Checks an operation with Google Service Control to decide whether
        // the given operation should proceed. It should be called before the
        // operation is executed.
        // 
        // If feasible, the client should cache the check results and reuse them for
        // 60 seconds. In case of server errors, the client can rely on the cached
        // results for longer time.
        // 
        // NOTE: the `CheckRequest` has the size limit of 64KB.
        // 
        // This method requires the `servicemanagement.services.check` permission
        // on the specified service. For more information, see
        // [Google Cloud IAM](https://cloud.google.com/iam).
        await gapi.client.services.check({ serviceName: "serviceName",  }); 
        
        // Signals the quota controller that service ends the ongoing usage
        // reconciliation.
        // 
        // This method requires the `servicemanagement.services.quota`
        // permission on the specified service. For more information, see
        // [Google Cloud IAM](https://cloud.google.com/iam).
        await gapi.client.services.endReconciliation({ serviceName: "serviceName",  }); 
        
        // Releases previously allocated quota done through AllocateQuota method.
        // 
        // This method requires the `servicemanagement.services.quota`
        // permission on the specified service. For more information, see
        // [Google Cloud IAM](https://cloud.google.com/iam).
        // 
        // **NOTE:** the client code **must** fail-open if the server returns one
        // of the following quota errors:
        // -   `PROJECT_STATUS_UNAVAILABLE`
        // -   `SERVICE_STATUS_UNAVAILABLE`
        // -   `BILLING_STATUS_UNAVAILABLE`
        // -   `QUOTA_SYSTEM_UNAVAILABLE`
        // 
        // The server may inject above errors to prohibit any hard dependency
        // on the quota system.
        await gapi.client.services.releaseQuota({ serviceName: "serviceName",  }); 
        
        // Reports operation results to Google Service Control, such as logs and
        // metrics. It should be called after an operation is completed.
        // 
        // If feasible, the client should aggregate reporting data for up to 5
        // seconds to reduce API traffic. Limiting aggregation to 5 seconds is to
        // reduce data loss during client crashes. Clients should carefully choose
        // the aggregation time window to avoid data loss risk more than 0.01%
        // for business and compliance reasons.
        // 
        // NOTE: the `ReportRequest` has the size limit of 1MB.
        // 
        // This method requires the `servicemanagement.services.report` permission
        // on the specified service. For more information, see
        // [Google Cloud IAM](https://cloud.google.com/iam).
        await gapi.client.services.report({ serviceName: "serviceName",  }); 
        
        // Unlike rate quota, allocation quota does not get refilled periodically.
        // So, it is possible that the quota usage as seen by the service differs from
        // what the One Platform considers the usage is. This is expected to happen
        // only rarely, but over time this can accumulate. Services can invoke
        // StartReconciliation and EndReconciliation to correct this usage drift, as
        // described below:
        // 1. Service sends StartReconciliation with a timestamp in future for each
        //    metric that needs to be reconciled. The timestamp being in future allows
        //    to account for in-flight AllocateQuota and ReleaseQuota requests for the
        //    same metric.
        // 2. One Platform records this timestamp and starts tracking subsequent
        //    AllocateQuota and ReleaseQuota requests until EndReconciliation is
        //    called.
        // 3. At or after the time specified in the StartReconciliation, service
        //    sends EndReconciliation with the usage that needs to be reconciled to.
        // 4. One Platform adjusts its own record of usage for that metric to the
        //    value specified in EndReconciliation by taking in to account any
        //    allocation or release between StartReconciliation and EndReconciliation.
        // 
        // Signals the quota controller that the service wants to perform a usage
        // reconciliation as specified in the request.
        // 
        // This method requires the `servicemanagement.services.quota`
        // permission on the specified service. For more information, see
        // [Google Cloud IAM](https://cloud.google.com/iam).
        await gapi.client.services.startReconciliation({ serviceName: "serviceName",  });
    }
});
