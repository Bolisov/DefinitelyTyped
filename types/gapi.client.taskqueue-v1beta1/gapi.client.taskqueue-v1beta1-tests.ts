/* This is stub file for gapi.client.taskqueue definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('taskqueue', 'v1beta1', () => {
        // now we can use gapi.client.taskqueue
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // Manage your Tasks and Taskqueues
                'https://www.googleapis.com/auth/taskqueue',
            
                // Consume Tasks from your Taskqueues
                'https://www.googleapis.com/auth/taskqueue.consumer',
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
        
        // Get detailed information about a TaskQueue.
        await gapi.client.taskqueues.get({ project: "project", taskqueue: "taskqueue",  }); 
        
        // Delete a task from a TaskQueue.
        await gapi.client.tasks.delete({ project: "project", task: "task", taskqueue: "taskqueue",  }); 
        
        // Get a particular task from a TaskQueue.
        await gapi.client.tasks.get({ project: "project", task: "task", taskqueue: "taskqueue",  }); 
        
        // Lease 1 or more tasks from a TaskQueue.
        await gapi.client.tasks.lease({ leaseSecs: 1, numTasks: 1, project: "project", taskqueue: "taskqueue",  }); 
        
        // List Tasks in a TaskQueue
        await gapi.client.tasks.list({ project: "project", taskqueue: "taskqueue",  });
    }
});
