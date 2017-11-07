/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('identitytoolkit', 'v3', () => {
        /** now we can use gapi.client.identitytoolkit */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View and administer all your Firebase data and settings */
            'https://www.googleapis.com/auth/firebase',
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
        /** Creates the URI used by the IdP to authenticate the user. */
        await gapi.client.identitytoolkit.relyingparty.createAuthUri({
        });
        /** Delete user account. */
        await gapi.client.identitytoolkit.relyingparty.deleteAccount({
        });
        /** Batch download user accounts. */
        await gapi.client.identitytoolkit.relyingparty.downloadAccount({
        });
        /** Reset password for a user. */
        await gapi.client.identitytoolkit.relyingparty.emailLinkSignin({
        });
        /** Returns the account info. */
        await gapi.client.identitytoolkit.relyingparty.getAccountInfo({
        });
        /** Get a code for user action confirmation. */
        await gapi.client.identitytoolkit.relyingparty.getOobConfirmationCode({
        });
        /** Get project configuration. */
        await gapi.client.identitytoolkit.relyingparty.getProjectConfig({
            delegatedProjectNumber: "delegatedProjectNumber",
            projectNumber: "projectNumber",
        });
        /** Get token signing public key. */
        await gapi.client.identitytoolkit.relyingparty.getPublicKeys({
        });
        /** Get recaptcha secure param. */
        await gapi.client.identitytoolkit.relyingparty.getRecaptchaParam({
        });
        /** Reset password for a user. */
        await gapi.client.identitytoolkit.relyingparty.resetPassword({
        });
        /** Send SMS verification code. */
        await gapi.client.identitytoolkit.relyingparty.sendVerificationCode({
        });
        /** Set account info for a user. */
        await gapi.client.identitytoolkit.relyingparty.setAccountInfo({
        });
        /** Set project configuration. */
        await gapi.client.identitytoolkit.relyingparty.setProjectConfig({
        });
        /** Sign out user. */
        await gapi.client.identitytoolkit.relyingparty.signOutUser({
        });
        /** Signup new user. */
        await gapi.client.identitytoolkit.relyingparty.signupNewUser({
        });
        /** Batch upload existing user accounts. */
        await gapi.client.identitytoolkit.relyingparty.uploadAccount({
        });
        /** Verifies the assertion returned by the IdP. */
        await gapi.client.identitytoolkit.relyingparty.verifyAssertion({
        });
        /** Verifies the developer asserted ID token. */
        await gapi.client.identitytoolkit.relyingparty.verifyCustomToken({
        });
        /** Verifies the user entered password. */
        await gapi.client.identitytoolkit.relyingparty.verifyPassword({
        });
        /** Verifies ownership of a phone number and creates/updates the user account accordingly. */
        await gapi.client.identitytoolkit.relyingparty.verifyPhoneNumber({
        });
    }
});
