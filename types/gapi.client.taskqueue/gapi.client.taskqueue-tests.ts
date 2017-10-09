/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('taskqueue', 'v1beta2', () => {
        /** now we can use gapi.client.taskqueue */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Manage your Tasks and Taskqueues */
            'https://www.googleapis.com/auth/taskqueue',
            /** Consume Tasks from your Taskqueues */
            'https://www.googleapis.com/auth/taskqueue.consumer',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /** Get detailed information about a TaskQueue. */
        await gapi.client.taskqueues.get( {
            getStats: true,
            project: "project",
            taskqueue: "taskqueue",
        });
        /** Delete a task from a TaskQueue. */
        await gapi.client.tasks.delete( {
            project: "project",
            task: "task",
            taskqueue: "taskqueue",
        });
        /** Get a particular task from a TaskQueue. */
        await gapi.client.tasks.get( {
            project: "project",
            task: "task",
            taskqueue: "taskqueue",
        });
        /** Insert a new task in a TaskQueue */
        await gapi.client.tasks.insert( {
            project: "project",
            taskqueue: "taskqueue",
        });
        /** Lease 1 or more tasks from a TaskQueue. */
        await gapi.client.tasks.lease( {
            groupByTag: true,
            leaseSecs: 2,
            numTasks: 3,
            project: "project",
            tag: "tag",
            taskqueue: "taskqueue",
        });
        /** List Tasks in a TaskQueue */
        await gapi.client.tasks.list( {
            project: "project",
            taskqueue: "taskqueue",
        });
        /** Update tasks that are leased out of a TaskQueue. This method supports patch semantics. */
        await gapi.client.tasks.patch( {
            newLeaseSeconds: 1,
            project: "project",
            task: "task",
            taskqueue: "taskqueue",
        });
        /** Update tasks that are leased out of a TaskQueue. */
        await gapi.client.tasks.update( {
            newLeaseSeconds: 1,
            project: "project",
            task: "task",
            taskqueue: "taskqueue",
        });
    }
});
