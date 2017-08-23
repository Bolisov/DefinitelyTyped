// Type definitions for Google Google Play Custom App Publishing API v1 1.0
// Project: https://developers.google.com/android/work/play/custom-app-api
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// IMPORTANT
// This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
// Generated from: https://www.googleapis.com/discovery/v1/apis/playcustomapp/v1/rest

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Google Play Custom App Publishing API v1 */
    function load(name: "playcustomapp", version: "v1"): PromiseLike<void>;    
    function load(name: "playcustomapp", version: "v1", callback: () => any): void;    
    
    const accounts: playcustomapp.AccountsResource; 
    
    namespace playcustomapp {
        
        interface CustomApp {
            /** Default listing language in BCP 47 format. */
            languageCode?: string;
            /** Title for the Android app. */
            title?: string;
        }
        
        interface CustomAppsResource {
            /** Create and publish a new custom app. */
            create(request: {            
                /** Developer account ID. */
                account: string;
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<CustomApp>;            
            
        }
        
        interface AccountsResource {
            customApps: CustomAppsResource;
        }
    }
}
