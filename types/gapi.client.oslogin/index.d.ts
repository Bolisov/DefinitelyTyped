// Type definitions for Google Google Cloud OS Login API v1alpha 1.0
// Project: https://cloud.google.com/compute/docs/oslogin/rest/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// IMPORTANT
// This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
// Generated from: https://oslogin.googleapis.com/$discovery/rest?version=v1alpha

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Google Cloud OS Login API v1alpha */
    function load(name: "oslogin", version: "v1alpha"): PromiseLike<void>;    
    function load(name: "oslogin", version: "v1alpha", callback: () => any): void;    
    
    const users: oslogin.UsersResource; 
    
    namespace oslogin {
        
        interface ImportSshPublicKeyResponse {
            /** The login profile information for the user. */
            loginProfile?: LoginProfile;
        }
        
        interface LoginProfile {
            /** A unique user ID for identifying the user. */
            name?: string;
            /** The list of POSIX accounts associated with the Directory API user. */
            posixAccounts?: PosixAccount[];
            /** A map from SSH public key fingerprint to the associated key object. */
            sshPublicKeys?: Record<string, SshPublicKey>;            
            /** Indicates if the user is suspended. */
            suspended?: boolean;
        }
        
        interface PosixAccount {
            /** The GECOS (user information) entry for this account. */
            gecos?: string;
            /** The default group ID. */
            gid?: number;
            /** The path to the home directory for this account. */
            homeDirectory?: string;
            /** Only one POSIX account can be marked as primary. */
            primary?: boolean;
            /** The path to the logic shell for this account. */
            shell?: string;
            /**
             * System identifier for which account the username or uid applies to.
             * By default, the empty value is used.
             */
            systemId?: string;
            /** The user ID. */
            uid?: number;
            /** The username of the POSIX account. */
            username?: string;
        }
        
        interface SshPublicKey {
            /** An expiration time in microseconds since epoch. */
            expirationTimeUsec?: string;
            /** [Output Only] The SHA-256 fingerprint of the SSH public key. */
            fingerprint?: string;
            /**
             * Public key text in SSH format, defined by
             * <a href="https://www.ietf.org/rfc/rfc4253.txt" target="_blank">RFC4253</a>
             * section 6.6.
             */
            key?: string;
        }
        
        interface SshPublicKeysResource {
            /** Deletes an SSH public key. */
            delete(request: {            
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * The fingerprint of the public key to update. Public keys are identified by
                 * their SHA-256 fingerprint. The fingerprint of the public key is in format
                 * `users/{user}/sshPublicKeys/{fingerprint}`.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<{}>;            
            
            /** Retrieves an SSH public key. */
            get(request: {            
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * The fingerprint of the public key to retrieve. Public keys are identified
                 * by their SHA-256 fingerprint. The fingerprint of the public key is in
                 * format `users/{user}/sshPublicKeys/{fingerprint}`.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<SshPublicKey>;            
            
            /**
             * Updates an SSH public key and returns the profile information. This method
             * supports patch semantics.
             */
            patch(request: {            
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * The fingerprint of the public key to update. Public keys are identified by
                 * their SHA-256 fingerprint. The fingerprint of the public key is in format
                 * `users/{user}/sshPublicKeys/{fingerprint}`.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Mask to control which fields get updated. Updates all if not present. */
                updateMask?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<SshPublicKey>;            
            
        }
        
        interface UsersResource {
            /**
             * Retrieves the profile information used for logging in to a virtual machine
             * on Google Compute Engine.
             */
            getLoginProfile(request: {            
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The unique ID for the user in format `users/{user}`. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<LoginProfile>;            
            
            /**
             * Adds an SSH public key and returns the profile information. Default POSIX
             * account information is set when no username and UID exist as part of the
             * login profile.
             */
            importSshPublicKey(request: {            
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** The unique ID for the user in format `users/{user}`. */
                parent: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<ImportSshPublicKeyResponse>;            
            
            sshPublicKeys: SshPublicKeysResource;
        }
    }
}
