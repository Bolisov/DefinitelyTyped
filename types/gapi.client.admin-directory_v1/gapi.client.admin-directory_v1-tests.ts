/* This is stub file for gapi.client.admin definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('admin', 'directory_v1', () => {
        // now we can use gapi.client.admin
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View and manage customer related information
                'https://www.googleapis.com/auth/admin.directory.customer',
            
                // View customer related information
                'https://www.googleapis.com/auth/admin.directory.customer.readonly',
            
                // View and manage your Chrome OS devices' metadata
                'https://www.googleapis.com/auth/admin.directory.device.chromeos',
            
                // View your Chrome OS devices' metadata
                'https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly',
            
                // View and manage your mobile devices' metadata
                'https://www.googleapis.com/auth/admin.directory.device.mobile',
            
                // Manage your mobile devices by performing administrative tasks
                'https://www.googleapis.com/auth/admin.directory.device.mobile.action',
            
                // View your mobile devices' metadata
                'https://www.googleapis.com/auth/admin.directory.device.mobile.readonly',
            
                // View and manage the provisioning of domains for your customers
                'https://www.googleapis.com/auth/admin.directory.domain',
            
                // View domains related to your customers
                'https://www.googleapis.com/auth/admin.directory.domain.readonly',
            
                // View and manage the provisioning of groups on your domain
                'https://www.googleapis.com/auth/admin.directory.group',
            
                // View and manage group subscriptions on your domain
                'https://www.googleapis.com/auth/admin.directory.group.member',
            
                // View group subscriptions on your domain
                'https://www.googleapis.com/auth/admin.directory.group.member.readonly',
            
                // View groups on your domain
                'https://www.googleapis.com/auth/admin.directory.group.readonly',
            
                // View and manage notifications received on your domain
                'https://www.googleapis.com/auth/admin.directory.notifications',
            
                // View and manage organization units on your domain
                'https://www.googleapis.com/auth/admin.directory.orgunit',
            
                // View organization units on your domain
                'https://www.googleapis.com/auth/admin.directory.orgunit.readonly',
            
                // View and manage the provisioning of calendar resources on your domain
                'https://www.googleapis.com/auth/admin.directory.resource.calendar',
            
                // View calendar resources on your domain
                'https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly',
            
                // Manage delegated admin roles for your domain
                'https://www.googleapis.com/auth/admin.directory.rolemanagement',
            
                // View delegated admin roles for your domain
                'https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly',
            
                // View and manage the provisioning of users on your domain
                'https://www.googleapis.com/auth/admin.directory.user',
            
                // View and manage user aliases on your domain
                'https://www.googleapis.com/auth/admin.directory.user.alias',
            
                // View user aliases on your domain
                'https://www.googleapis.com/auth/admin.directory.user.alias.readonly',
            
                // View users on your domain
                'https://www.googleapis.com/auth/admin.directory.user.readonly',
            
                // Manage data access permissions for users on your domain
                'https://www.googleapis.com/auth/admin.directory.user.security',
            
                // View and manage the provisioning of user schemas on your domain
                'https://www.googleapis.com/auth/admin.directory.userschema',
            
                // View user schemas on your domain
                'https://www.googleapis.com/auth/admin.directory.userschema.readonly',
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
        
        // Delete an ASP issued by a user.
        await gapi.client.asps.delete({ codeId: 1, userKey: "userKey",  }); 
        
        // Get information about an ASP issued by a user.
        await gapi.client.asps.get({ codeId: 1, userKey: "userKey",  }); 
        
        // List the ASPs issued by a user.
        await gapi.client.asps.list({ userKey: "userKey",  }); 
        
        // Stop watching resources through this channel
        await gapi.client.channels.stop({  }); 
        
        // Take action on Chrome OS Device
        await gapi.client.chromeosdevices.action({ customerId: "customerId", resourceId: "resourceId",  }); 
        
        // Retrieve Chrome OS Device
        await gapi.client.chromeosdevices.get({ customerId: "customerId", deviceId: "deviceId",  }); 
        
        // Retrieve all Chrome OS Devices of a customer (paginated)
        await gapi.client.chromeosdevices.list({ customerId: "customerId",  }); 
        
        // Move or insert multiple Chrome OS Devices to Organization Unit
        await gapi.client.chromeosdevices.moveDevicesToOu({ customerId: "customerId", orgUnitPath: "orgUnitPath",  }); 
        
        // Update Chrome OS Device. This method supports patch semantics.
        await gapi.client.chromeosdevices.patch({ customerId: "customerId", deviceId: "deviceId",  }); 
        
        // Update Chrome OS Device
        await gapi.client.chromeosdevices.update({ customerId: "customerId", deviceId: "deviceId",  }); 
        
        // Retrieves a customer.
        await gapi.client.customers.get({ customerKey: "customerKey",  }); 
        
        // Updates a customer. This method supports patch semantics.
        await gapi.client.customers.patch({ customerKey: "customerKey",  }); 
        
        // Updates a customer.
        await gapi.client.customers.update({ customerKey: "customerKey",  }); 
        
        // Deletes a Domain Alias of the customer.
        await gapi.client.domainAliases.delete({ customer: "customer", domainAliasName: "domainAliasName",  }); 
        
        // Retrieves a domain alias of the customer.
        await gapi.client.domainAliases.get({ customer: "customer", domainAliasName: "domainAliasName",  }); 
        
        // Inserts a Domain alias of the customer.
        await gapi.client.domainAliases.insert({ customer: "customer",  }); 
        
        // Lists the domain aliases of the customer.
        await gapi.client.domainAliases.list({ customer: "customer",  }); 
        
        // Deletes a domain of the customer.
        await gapi.client.domains.delete({ customer: "customer", domainName: "domainName",  }); 
        
        // Retrieves a domain of the customer.
        await gapi.client.domains.get({ customer: "customer", domainName: "domainName",  }); 
        
        // Inserts a domain of the customer.
        await gapi.client.domains.insert({ customer: "customer",  }); 
        
        // Lists the domains of the customer.
        await gapi.client.domains.list({ customer: "customer",  }); 
        
        // Delete Group
        await gapi.client.groups.delete({ groupKey: "groupKey",  }); 
        
        // Retrieve Group
        await gapi.client.groups.get({ groupKey: "groupKey",  }); 
        
        // Create Group
        await gapi.client.groups.insert({  }); 
        
        // Retrieve all groups in a domain (paginated)
        await gapi.client.groups.list({  }); 
        
        // Update Group. This method supports patch semantics.
        await gapi.client.groups.patch({ groupKey: "groupKey",  }); 
        
        // Update Group
        await gapi.client.groups.update({ groupKey: "groupKey",  }); 
        
        // Remove membership.
        await gapi.client.members.delete({ groupKey: "groupKey", memberKey: "memberKey",  }); 
        
        // Retrieve Group Member
        await gapi.client.members.get({ groupKey: "groupKey", memberKey: "memberKey",  }); 
        
        // Add user to the specified group.
        await gapi.client.members.insert({ groupKey: "groupKey",  }); 
        
        // Retrieve all members in a group (paginated)
        await gapi.client.members.list({ groupKey: "groupKey",  }); 
        
        // Update membership of a user in the specified group. This method supports patch semantics.
        await gapi.client.members.patch({ groupKey: "groupKey", memberKey: "memberKey",  }); 
        
        // Update membership of a user in the specified group.
        await gapi.client.members.update({ groupKey: "groupKey", memberKey: "memberKey",  }); 
        
        // Take action on Mobile Device
        await gapi.client.mobiledevices.action({ customerId: "customerId", resourceId: "resourceId",  }); 
        
        // Delete Mobile Device
        await gapi.client.mobiledevices.delete({ customerId: "customerId", resourceId: "resourceId",  }); 
        
        // Retrieve Mobile Device
        await gapi.client.mobiledevices.get({ customerId: "customerId", resourceId: "resourceId",  }); 
        
        // Retrieve all Mobile Devices of a customer (paginated)
        await gapi.client.mobiledevices.list({ customerId: "customerId",  }); 
        
        // Deletes a notification
        await gapi.client.notifications.delete({ customer: "customer", notificationId: "notificationId",  }); 
        
        // Retrieves a notification.
        await gapi.client.notifications.get({ customer: "customer", notificationId: "notificationId",  }); 
        
        // Retrieves a list of notifications.
        await gapi.client.notifications.list({ customer: "customer",  }); 
        
        // Updates a notification. This method supports patch semantics.
        await gapi.client.notifications.patch({ customer: "customer", notificationId: "notificationId",  }); 
        
        // Updates a notification.
        await gapi.client.notifications.update({ customer: "customer", notificationId: "notificationId",  }); 
        
        // Remove Organization Unit
        await gapi.client.orgunits.delete({ customerId: "customerId", orgUnitPath: "orgUnitPath",  }); 
        
        // Retrieve Organization Unit
        await gapi.client.orgunits.get({ customerId: "customerId", orgUnitPath: "orgUnitPath",  }); 
        
        // Add Organization Unit
        await gapi.client.orgunits.insert({ customerId: "customerId",  }); 
        
        // Retrieve all Organization Units
        await gapi.client.orgunits.list({ customerId: "customerId",  }); 
        
        // Update Organization Unit. This method supports patch semantics.
        await gapi.client.orgunits.patch({ customerId: "customerId", orgUnitPath: "orgUnitPath",  }); 
        
        // Update Organization Unit
        await gapi.client.orgunits.update({ customerId: "customerId", orgUnitPath: "orgUnitPath",  }); 
        
        // Retrieves a paginated list of all privileges for a customer.
        await gapi.client.privileges.list({ customer: "customer",  }); 
        
        // Deletes a role assignment.
        await gapi.client.roleAssignments.delete({ customer: "customer", roleAssignmentId: "roleAssignmentId",  }); 
        
        // Retrieve a role assignment.
        await gapi.client.roleAssignments.get({ customer: "customer", roleAssignmentId: "roleAssignmentId",  }); 
        
        // Creates a role assignment.
        await gapi.client.roleAssignments.insert({ customer: "customer",  }); 
        
        // Retrieves a paginated list of all roleAssignments.
        await gapi.client.roleAssignments.list({ customer: "customer",  }); 
        
        // Deletes a role.
        await gapi.client.roles.delete({ customer: "customer", roleId: "roleId",  }); 
        
        // Retrieves a role.
        await gapi.client.roles.get({ customer: "customer", roleId: "roleId",  }); 
        
        // Creates a role.
        await gapi.client.roles.insert({ customer: "customer",  }); 
        
        // Retrieves a paginated list of all the roles in a domain.
        await gapi.client.roles.list({ customer: "customer",  }); 
        
        // Updates a role. This method supports patch semantics.
        await gapi.client.roles.patch({ customer: "customer", roleId: "roleId",  }); 
        
        // Updates a role.
        await gapi.client.roles.update({ customer: "customer", roleId: "roleId",  }); 
        
        // Delete schema
        await gapi.client.schemas.delete({ customerId: "customerId", schemaKey: "schemaKey",  }); 
        
        // Retrieve schema
        await gapi.client.schemas.get({ customerId: "customerId", schemaKey: "schemaKey",  }); 
        
        // Create schema.
        await gapi.client.schemas.insert({ customerId: "customerId",  }); 
        
        // Retrieve all schemas for a customer
        await gapi.client.schemas.list({ customerId: "customerId",  }); 
        
        // Update schema. This method supports patch semantics.
        await gapi.client.schemas.patch({ customerId: "customerId", schemaKey: "schemaKey",  }); 
        
        // Update schema
        await gapi.client.schemas.update({ customerId: "customerId", schemaKey: "schemaKey",  }); 
        
        // Delete all access tokens issued by a user for an application.
        await gapi.client.tokens.delete({ clientId: "clientId", userKey: "userKey",  }); 
        
        // Get information about an access token issued by a user.
        await gapi.client.tokens.get({ clientId: "clientId", userKey: "userKey",  }); 
        
        // Returns the set of tokens specified user has issued to 3rd party applications.
        await gapi.client.tokens.list({ userKey: "userKey",  }); 
        
        // Delete user
        await gapi.client.users.delete({ userKey: "userKey",  }); 
        
        // retrieve user
        await gapi.client.users.get({ userKey: "userKey",  }); 
        
        // create user.
        await gapi.client.users.insert({  }); 
        
        // Retrieve either deleted users or all users in a domain (paginated)
        await gapi.client.users.list({  }); 
        
        // change admin status of a user
        await gapi.client.users.makeAdmin({ userKey: "userKey",  }); 
        
        // update user. This method supports patch semantics.
        await gapi.client.users.patch({ userKey: "userKey",  }); 
        
        // Undelete a deleted user
        await gapi.client.users.undelete({ userKey: "userKey",  }); 
        
        // update user
        await gapi.client.users.update({ userKey: "userKey",  }); 
        
        // Watch for changes in users list
        await gapi.client.users.watch({  }); 
        
        // Generate new backup verification codes for the user.
        await gapi.client.verificationCodes.generate({ userKey: "userKey",  }); 
        
        // Invalidate the current backup verification codes for the user.
        await gapi.client.verificationCodes.invalidate({ userKey: "userKey",  }); 
        
        // Returns the current set of valid backup verification codes for the specified user.
        await gapi.client.verificationCodes.list({ userKey: "userKey",  });
    }
});
