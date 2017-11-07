/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('mirror', 'v1', () => {
        /** now we can use gapi.client.mirror */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View your location */
            'https://www.googleapis.com/auth/glass.location',
            /** View and manage your Glass timeline */
            'https://www.googleapis.com/auth/glass.timeline',
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
        /** Inserts a new account for a user */
        await gapi.client.mirror.accounts.insert({
            accountName: "accountName",
            accountType: "accountType",
            userToken: "userToken",
        });
        /** Deletes a contact. */
        await gapi.client.mirror.contacts.delete({
            id: "id",
        });
        /** Gets a single contact by ID. */
        await gapi.client.mirror.contacts.get({
            id: "id",
        });
        /** Inserts a new contact. */
        await gapi.client.mirror.contacts.insert({
        });
        /** Retrieves a list of contacts for the authenticated user. */
        await gapi.client.mirror.contacts.list({
        });
        /** Updates a contact in place. This method supports patch semantics. */
        await gapi.client.mirror.contacts.patch({
            id: "id",
        });
        /** Updates a contact in place. */
        await gapi.client.mirror.contacts.update({
            id: "id",
        });
        /** Gets a single location by ID. */
        await gapi.client.mirror.locations.get({
            id: "id",
        });
        /** Retrieves a list of locations for the user. */
        await gapi.client.mirror.locations.list({
        });
        /** Gets a single setting by ID. */
        await gapi.client.mirror.settings.get({
            id: "id",
        });
        /** Deletes a subscription. */
        await gapi.client.mirror.subscriptions.delete({
            id: "id",
        });
        /** Creates a new subscription. */
        await gapi.client.mirror.subscriptions.insert({
        });
        /** Retrieves a list of subscriptions for the authenticated user and service. */
        await gapi.client.mirror.subscriptions.list({
        });
        /** Updates an existing subscription in place. */
        await gapi.client.mirror.subscriptions.update({
            id: "id",
        });
        /** Deletes a timeline item. */
        await gapi.client.mirror.timeline.delete({
            id: "id",
        });
        /** Gets a single timeline item by ID. */
        await gapi.client.mirror.timeline.get({
            id: "id",
        });
        /** Inserts a new item into the timeline. */
        await gapi.client.mirror.timeline.insert({
        });
        /** Retrieves a list of timeline items for the authenticated user. */
        await gapi.client.mirror.timeline.list({
            bundleId: "bundleId",
            includeDeleted: true,
            maxResults: 3,
            orderBy: "orderBy",
            pageToken: "pageToken",
            pinnedOnly: true,
            sourceItemId: "sourceItemId",
        });
        /** Updates a timeline item in place. This method supports patch semantics. */
        await gapi.client.mirror.timeline.patch({
            id: "id",
        });
        /** Updates a timeline item in place. */
        await gapi.client.mirror.timeline.update({
            id: "id",
        });
    }
});
