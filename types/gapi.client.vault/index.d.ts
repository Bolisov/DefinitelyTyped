// Type definitions for Google Google Vault API v1 1.0
// Project: https://apps.google.com/products/vault/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/** IMPORTANT.  */
/** This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually. */
/** In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator */
/** Generated from: https://vault.googleapis.com/$discovery/rest?version=v1 */

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Google Vault API v1 */
    function load(name: "vault", version: "v1"): PromiseLike<void>;    
    function load(name: "vault", version: "v1", callback: () => any): void;    
    
    const matters: vault.MattersResource; 
    
    namespace vault {
        
        interface ListHeldAccountsResponse {
            /** The held accounts on a hold. */
            accounts?: HeldAccount[];
        }
        
        interface RemoveMatterPermissionsRequest {
            /** The account ID. */
            accountId?: string;
        }
        
        interface MatterPermission {
            /** The user's role in this matter. */
            role?: string;
            /** The account id, as provided by <a href="https://developers.google.com/admin-sdk/">Admin SDK</a>. */
            accountId?: string;
        }
        
        interface ListMattersResponse {
            /** Page token to retrieve the next page of results in the list. */
            nextPageToken?: string;
            /** List of matters. */
            matters?: Matter[];
        }
        
        interface HeldMailQuery {
            /** The start date range for the search query. These timestamps are in GMT and */
            /** rounded down to the start of the given date. */
            startTime?: string;
            /** The search terms for the hold. */
            terms?: string;
            /** The end date range for the search query. These timestamps are in GMT and */
            /** rounded down to the start of the given date. */
            endTime?: string;
        }
        
        interface CloseMatterResponse {
            /** The updated matter, with state CLOSED. */
            matter?: Matter;
        }
        
        interface HeldGroupsQuery {
            /** The end date range for the search query. These timestamps are in GMT and */
            /** rounded down to the start of the given date. */
            endTime?: string;
            /** The start date range for the search query. These timestamps are in GMT and */
            /** rounded down to the start of the given date. */
            startTime?: string;
            /** The search terms for the hold. */
            terms?: string;
        }
        
        interface HeldDriveQuery {
            /** If true, include files in Team Drives in the hold. */
            includeTeamDriveFiles?: boolean;
        }
        
        interface HeldOrgUnit {
            /** When the org unit was put on hold. This property is immutable. */
            holdTime?: string;
            /** The org unit's immutable ID as provided by the admin SDK. */
            orgUnitId?: string;
        }
        
        interface AddMatterPermissionsRequest {
            /** The MatterPermission to add. */
            matterPermission?: MatterPermission;
            /** Only relevant if send_emails is true. */
            /** True to CC requestor in the email message. */
            /** False to not CC requestor. */
            ccMe?: boolean;
            /** True to send notification email to the added account. */
            /** False to not send notification email. */
            sendEmails?: boolean;
        }
        
        interface Matter {
            /** The matter ID which is generated by the server. */
            /** Should be blank when creating a new matter. */
            matterId?: string;
            /** The state of the matter. */
            state?: string;
            /** List of users and access to the matter. Currently there is no programmer */
            /** defined limit on the number of permissions a matter can have. */
            matterPermissions?: MatterPermission[];
            /** The name of the matter. */
            name?: string;
            /** The description of the matter. */
            description?: string;
        }
        
        interface HeldAccount {
            /** The account's ID as provided by the */
            /** <a href="https://developers.google.com/admin-sdk/">Admin SDK</a>. */
            accountId?: string;
            /** When the account was put on hold. */
            holdTime?: string;
        }
        
        interface ReopenMatterResponse {
            /** The updated matter, with state OPEN. */
            matter?: Matter;
        }
        
        interface CorpusQuery {
            /** Details pertaining to Groups holds. If set, corpus must be Groups. */
            groupsQuery?: HeldGroupsQuery;
            /** Details pertaining to mail holds. If set, corpus must be mail. */
            mailQuery?: HeldMailQuery;
            /** Details pertaining to Drive holds. If set, corpus must be Drive. */
            driveQuery?: HeldDriveQuery;
        }
        
        interface Hold {
            /** The corpus to be searched. */
            corpus?: string;
            /** The last time this hold was modified. */
            updateTime?: string;
            /** The unique immutable ID of the hold. Assigned during creation. */
            holdId?: string;
            /** The name of the hold. */
            name?: string;
            /** If set, the hold applies to the enumerated accounts and org_unit must be */
            /** empty. */
            accounts?: HeldAccount[];
            /** The corpus-specific query. If set, the corpusQuery must match corpus */
            /** type. */
            query?: CorpusQuery;
            /** If set, the hold applies to all members of the organizational unit and */
            /** accounts must be empty. This property is mutable. For groups holds, */
            /** set the accounts field. */
            orgUnit?: HeldOrgUnit;
        }
        
        interface ListHoldsResponse {
            /** Page token to retrieve the next page of results in the list. */
            /** If this is empty, then there are no more holds to list. */
            nextPageToken?: string;
            /** The list of holds. */
            holds?: Hold[];
        }
        
        interface AccountsResource {
            /** Adds a HeldAccount to a hold. Accounts can only be added to a hold that */
            /** has no held_org_unit set. Attempting to add an account to an OU-based */
            /** hold will result in an error. */
            create(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
                /** The hold ID. */
                holdId: string;
            }): Request<HeldAccount>;            
            
            /** Removes a HeldAccount from a hold. If this request leaves the hold with */
            /** no held accounts, the hold will not apply to any accounts. */
            delete(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
                /** The hold ID. */
                holdId: string;
                /** The ID of the account to remove from the hold. */
                accountId: string;
            }): Request<{}>;            
            
            /** Lists HeldAccounts for a hold. This will only list individually specified */
            /** held accounts. If the hold is on an OU, then use */
            /** <a href="https://developers.google.com/admin-sdk/">Admin SDK</a> */
            /** to enumerate its members. */
            list(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
                /** The hold ID. */
                holdId: string;
            }): Request<ListHeldAccountsResponse>;            
            
        }
        
        interface HoldsResource {
            /** Removes a hold by ID. This will release any HeldAccounts on this Hold. */
            delete(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The hold ID. */
                holdId: string;
                /** The matter ID. */
                matterId: string;
            }): Request<{}>;            
            
            /** Lists holds within a matter. An empty page token in ListHoldsResponse */
            /** denotes no more holds to list. */
            list(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
                /** The pagination token as returned in the response. */
                /** An empty token means start from the beginning. */
                pageToken?: string;
                /** The number of holds to return in the response, between 0 and 100 inclusive. */
                /** Leaving this empty, or as 0, is the same as page_size = 100. */
                pageSize?: number;
            }): Request<ListHoldsResponse>;            
            
            /** Gets a hold by ID. */
            get(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
                /** The hold ID. */
                holdId: string;
            }): Request<Hold>;            
            
            /** Updates the OU and/or query parameters of a hold. You cannot add accounts */
            /** to a hold that covers an OU, nor can you add OUs to a hold that covers */
            /** individual accounts. Accounts listed in the hold will be ignored. */
            update(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
                /** The ID of the hold. */
                holdId: string;
            }): Request<Hold>;            
            
            /** Creates a hold in the given matter. */
            create(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
            }): Request<Hold>;            
            
            accounts: AccountsResource;
        }
        
        interface MattersResource {
            /** Creates a new matter. Returns created matter with default view. */
            create(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
            }): Request<Matter>;            
            
            /** Removes an account as a matter collaborator. */
            removePermissions(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
            }): Request<{}>;            
            
            /** Reopens the specified matter. Returns matter with updated state. */
            reopen(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
            }): Request<ReopenMatterResponse>;            
            
            /** Gets the specified matter. */
            get(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
                /** Specifies which parts of the Matter to return in the response. */
                view?: string;
            }): Request<Matter>;            
            
            /** Undeletes the specified matter. Returns matter with updated state. */
            undelete(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
            }): Request<Matter>;            
            
            /** Closes the specified matter. Returns matter with updated state. */
            close(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
            }): Request<CloseMatterResponse>;            
            
            /** Updates the specified matter. */
            /** This updates only the name and description of the matter, identified by */
            /** matter id. Changes to any other fields are ignored. */
            /** Returns the default view of the matter. */
            update(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
            }): Request<Matter>;            
            
            /** Deletes the specified matter. Returns matter with updated state. */
            delete(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID */
                matterId: string;
            }): Request<Matter>;            
            
            /** Adds an account as a matter collaborator. */
            addPermissions(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The matter ID. */
                matterId: string;
            }): Request<MatterPermission>;            
            
            /** Lists matters the user has access to. */
            list(request: {            
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** The pagination token as returned in the response. */
                pageToken?: string;
                /** The number of matters to return in the response. */
                /** Default and maximum are 100. */
                pageSize?: number;
                /** Specifies which parts of the matter to return in response. */
                view?: string;
            }): Request<ListMattersResponse>;            
            
            holds: HoldsResource;
        }
    }
}
