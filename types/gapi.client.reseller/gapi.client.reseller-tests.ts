/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('reseller', 'v1', () => {
        /** now we can use gapi.client.reseller */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Manage users on your domain */
            'https://www.googleapis.com/auth/apps.order',
            /** Manage users on your domain */
            'https://www.googleapis.com/auth/apps.order.readonly',
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
        /** Get a customer account. */
        await gapi.client.reseller.customers.get({
            customerId: "customerId",
        });
        /** Order a new customer's account. */
        await gapi.client.reseller.customers.insert({
            customerAuthToken: "customerAuthToken",
        });
        /** Update a customer account's settings. This method supports patch semantics. */
        await gapi.client.reseller.customers.patch({
            customerId: "customerId",
        });
        /** Update a customer account's settings. */
        await gapi.client.reseller.customers.update({
            customerId: "customerId",
        });
        /** Returns all the details of the watch corresponding to the reseller. */
        await gapi.client.reseller.resellernotify.getwatchdetails({
        });
        /** Registers a Reseller for receiving notifications. */
        await gapi.client.reseller.resellernotify.register({
            serviceAccountEmailAddress: "serviceAccountEmailAddress",
        });
        /** Unregisters a Reseller for receiving notifications. */
        await gapi.client.reseller.resellernotify.unregister({
            serviceAccountEmailAddress: "serviceAccountEmailAddress",
        });
        /** Activates a subscription previously suspended by the reseller */
        await gapi.client.reseller.subscriptions.activate({
            customerId: "customerId",
            subscriptionId: "subscriptionId",
        });
        /**
         * Update a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with
         * monthly or yearly payments.
         */
        await gapi.client.reseller.subscriptions.changePlan({
            customerId: "customerId",
            subscriptionId: "subscriptionId",
        });
        /** Update a user license's renewal settings. This is applicable for accounts with annual commitment plans only. */
        await gapi.client.reseller.subscriptions.changeRenewalSettings({
            customerId: "customerId",
            subscriptionId: "subscriptionId",
        });
        /** Update a subscription's user license settings. */
        await gapi.client.reseller.subscriptions.changeSeats({
            customerId: "customerId",
            subscriptionId: "subscriptionId",
        });
        /** Cancel, suspend or transfer a subscription to direct. */
        await gapi.client.reseller.subscriptions.delete({
            customerId: "customerId",
            deletionType: "deletionType",
            subscriptionId: "subscriptionId",
        });
        /** Get a specific subscription. */
        await gapi.client.reseller.subscriptions.get({
            customerId: "customerId",
            subscriptionId: "subscriptionId",
        });
        /** Create or transfer a subscription. */
        await gapi.client.reseller.subscriptions.insert({
            customerAuthToken: "customerAuthToken",
            customerId: "customerId",
        });
        /**
         * List of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's
         * transferable subscriptions.
         */
        await gapi.client.reseller.subscriptions.list({
            customerAuthToken: "customerAuthToken",
            customerId: "customerId",
            customerNamePrefix: "customerNamePrefix",
            maxResults: 4,
            pageToken: "pageToken",
        });
        /** Immediately move a 30-day free trial subscription to a paid service subscription. */
        await gapi.client.reseller.subscriptions.startPaidService({
            customerId: "customerId",
            subscriptionId: "subscriptionId",
        });
        /** Suspends an active subscription. */
        await gapi.client.reseller.subscriptions.suspend({
            customerId: "customerId",
            subscriptionId: "subscriptionId",
        });
    }
});
