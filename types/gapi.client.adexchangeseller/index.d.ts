// Type definitions for Google Ad Exchange Seller API v2.0 2.0
// Project: https://developers.google.com/ad-exchange/seller-rest/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// IMPORTANT
// This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
// Generated from: https://www.googleapis.com/discovery/v1/apis/adexchangeseller/v2.0/rest

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Ad Exchange Seller API v2.0 */
    function load(name: "adexchangeseller", version: "v2.0"): PromiseLike<void>;
    function load(name: "adexchangeseller", version: "v2.0", callback: () => any): void;

    namespace adexchangeseller {
        interface Account {
            /** Unique identifier of this account. */
            id?: string;
            /** Kind of resource this is, in this case adexchangeseller#account. */
            kind?: string;
            /** Name of this account. */
            name?: string;
        }
        interface Accounts {
            /** ETag of this response for caching purposes. */
            etag?: string;
            /** The accounts returned in this list response. */
            items?: Account[];
            /** Kind of list this is, in this case adexchangeseller#accounts. */
            kind?: string;
            /** Continuation token used to page through accounts. To retrieve the next page of results, set the next request's "pageToken" value to this. */
            nextPageToken?: string;
        }
        interface AdClient {
            /** Whether this ad client is opted in to ARC. */
            arcOptIn?: boolean;
            /** Unique identifier of this ad client. */
            id?: string;
            /** Kind of resource this is, in this case adexchangeseller#adClient. */
            kind?: string;
            /** This ad client's product code, which corresponds to the PRODUCT_CODE report dimension. */
            productCode?: string;
            /** Whether this ad client supports being reported on. */
            supportsReporting?: boolean;
        }
        interface AdClients {
            /** ETag of this response for caching purposes. */
            etag?: string;
            /** The ad clients returned in this list response. */
            items?: AdClient[];
            /** Kind of list this is, in this case adexchangeseller#adClients. */
            kind?: string;
            /** Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this. */
            nextPageToken?: string;
        }
        interface Alert {
            /** Unique identifier of this alert. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
            id?: string;
            /** Kind of resource this is, in this case adexchangeseller#alert. */
            kind?: string;
            /** The localized alert message. */
            message?: string;
            /** Severity of this alert. Possible values: INFO, WARNING, SEVERE. */
            severity?: string;
            /**
             * Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3, ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY,
             * GRAYLISTED_PUBLISHER, API_HOLD.
             */
            type?: string;
        }
        interface Alerts {
            /** The alerts returned in this list response. */
            items?: Alert[];
            /** Kind of list this is, in this case adexchangeseller#alerts. */
            kind?: string;
        }
        interface CustomChannel {
            /** Code of this custom channel, not necessarily unique across ad clients. */
            code?: string;
            /** Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
            id?: string;
            /** Kind of resource this is, in this case adexchangeseller#customChannel. */
            kind?: string;
            /** Name of this custom channel. */
            name?: string;
            /** The targeting information of this custom channel, if activated. */
            targetingInfo?: {
                /** The name used to describe this channel externally. */
                adsAppearOn?: string;
                /** The external description of the channel. */
                description?: string;
                /**
                 * The locations in which ads appear. (Only valid for content and mobile content ads). Acceptable values for content ads are: TOP_LEFT, TOP_CENTER,
                 * TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT, MULTIPLE_LOCATIONS. Acceptable values for mobile content
                 * ads are: TOP, MIDDLE, BOTTOM, MULTIPLE_LOCATIONS.
                 */
                location?: string;
                /** The language of the sites ads will be displayed on. */
                siteLanguage?: string;
            };
        }
        interface CustomChannels {
            /** ETag of this response for caching purposes. */
            etag?: string;
            /** The custom channels returned in this list response. */
            items?: CustomChannel[];
            /** Kind of list this is, in this case adexchangeseller#customChannels. */
            kind?: string;
            /** Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this. */
            nextPageToken?: string;
        }
        interface Metadata {
            items?: ReportingMetadataEntry[];
            /** Kind of list this is, in this case adexchangeseller#metadata. */
            kind?: string;
        }
        interface PreferredDeal {
            /** The name of the advertiser this deal is for. */
            advertiserName?: string;
            /** The name of the buyer network this deal is for. */
            buyerNetworkName?: string;
            /** The currency code that applies to the fixed_cpm value. If not set then assumed to be USD. */
            currencyCode?: string;
            /** Time when this deal stops being active in seconds since the epoch (GMT). If not set then this deal is valid until manually disabled by the publisher. */
            endTime?: string;
            /**
             * The fixed price for this preferred deal. In cpm micros of currency according to currencyCode. If set, then this preferred deal is eligible for the
             * fixed price tier of buying (highest priority, pay exactly the configured fixed price).
             */
            fixedCpm?: string;
            /** Unique identifier of this preferred deal. */
            id?: string;
            /** Kind of resource this is, in this case adexchangeseller#preferredDeal. */
            kind?: string;
            /** Time when this deal becomes active in seconds since the epoch (GMT). If not set then this deal is active immediately upon creation. */
            startTime?: string;
        }
        interface PreferredDeals {
            /** The preferred deals returned in this list response. */
            items?: PreferredDeal[];
            /** Kind of list this is, in this case adexchangeseller#preferredDeals. */
            kind?: string;
        }
        interface Report {
            /** The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty. */
            averages?: string[];
            /**
             * The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for
             * each metric in the request.
             */
            headers?: Array<{
                /** The currency of this column. Only present if the header type is METRIC_CURRENCY. */
                currency?: string;
                /** The name of the header. */
                name?: string;
                /** The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY. */
                type?: string;
            }>;
            /** Kind this is, in this case adexchangeseller#report. */
            kind?: string;
            /**
             * The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The
             * dimension cells contain strings, and the metric cells contain numbers.
             */
            rows?: string[][];
            /**
             * The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or
             * the report row limit.
             */
            totalMatchedRows?: string;
            /** The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty. */
            totals?: string[];
            /** Any warnings associated with generation of the report. */
            warnings?: string[];
        }
        interface ReportingMetadataEntry {
            /**
             * For metrics this is a list of dimension IDs which the metric is compatible with, for dimensions it is a list of compatibility groups the dimension
             * belongs to.
             */
            compatibleDimensions?: string[];
            /** The names of the metrics the dimension or metric this reporting metadata entry describes is compatible with. */
            compatibleMetrics?: string[];
            /** Unique identifier of this reporting metadata entry, corresponding to the name of the appropriate dimension or metric. */
            id?: string;
            /** Kind of resource this is, in this case adexchangeseller#reportingMetadataEntry. */
            kind?: string;
            /**
             * The names of the dimensions which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report
             * to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.
             */
            requiredDimensions?: string[];
            /**
             * The names of the metrics which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to
             * be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.
             */
            requiredMetrics?: string[];
            /** The codes of the projects supported by the dimension or metric this reporting metadata entry describes. */
            supportedProducts?: string[];
        }
        interface SavedReport {
            /** Unique identifier of this saved report. */
            id?: string;
            /** Kind of resource this is, in this case adexchangeseller#savedReport. */
            kind?: string;
            /** This saved report's name. */
            name?: string;
        }
        interface SavedReports {
            /** ETag of this response for caching purposes. */
            etag?: string;
            /** The saved reports returned in this list response. */
            items?: SavedReport[];
            /** Kind of list this is, in this case adexchangeseller#savedReports. */
            kind?: string;
            /** Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's "pageToken" value to this. */
            nextPageToken?: string;
        }
        interface UrlChannel {
            /** Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
            id?: string;
            /** Kind of resource this is, in this case adexchangeseller#urlChannel. */
            kind?: string;
            /** URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home */
            urlPattern?: string;
        }
        interface UrlChannels {
            /** ETag of this response for caching purposes. */
            etag?: string;
            /** The URL channels returned in this list response. */
            items?: UrlChannel[];
            /** Kind of list this is, in this case adexchangeseller#urlChannels. */
            kind?: string;
            /** Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this. */
            nextPageToken?: string;
        }
        interface AdclientsResource {
            /** List all ad clients in this Ad Exchange account. */
            list(request: {
                /** Account to which the ad client belongs. */
                accountId: string;
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The maximum number of ad clients to include in the response, used for paging. */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous
                 * response.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<AdClients>;
        }
        interface AlertsResource {
            /** List the alerts for this Ad Exchange account. */
            list(request: {
                /** Account owning the alerts. */
                accountId: string;
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used
                 * if the supplied locale is invalid or unsupported.
                 */
                locale?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<Alerts>;
        }
        interface CustomchannelsResource {
            /** Get the specified custom channel from the specified ad client. */
            get(request: {
                /** Account to which the ad client belongs. */
                accountId: string;
                /** Ad client which contains the custom channel. */
                adClientId: string;
                /** Data format for the response. */
                alt?: string;
                /** Custom channel to retrieve. */
                customChannelId: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<CustomChannel>;
            /** List all custom channels in the specified ad client for this Ad Exchange account. */
            list(request: {
                /** Account to which the ad client belongs. */
                accountId: string;
                /** Ad client for which to list custom channels. */
                adClientId: string;
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The maximum number of custom channels to include in the response, used for paging. */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
                 * previous response.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<CustomChannels>;
        }
        interface DimensionsResource {
            /** List the metadata for the dimensions available to this AdExchange account. */
            list(request: {
                /** Account with visibility to the dimensions. */
                accountId: string;
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
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<Metadata>;
        }
        interface MetricsResource {
            /** List the metadata for the metrics available to this AdExchange account. */
            list(request: {
                /** Account with visibility to the metrics. */
                accountId: string;
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
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<Metadata>;
        }
        interface MetadataResource {
            dimensions: DimensionsResource;
            metrics: MetricsResource;
        }
        interface PreferreddealsResource {
            /** Get information about the selected Ad Exchange Preferred Deal. */
            get(request: {
                /** Account owning the deal. */
                accountId: string;
                /** Data format for the response. */
                alt?: string;
                /** Preferred deal to get information about. */
                dealId: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<PreferredDeal>;
            /** List the preferred deals for this Ad Exchange account. */
            list(request: {
                /** Account owning the deals. */
                accountId: string;
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
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<PreferredDeals>;
        }
        interface SavedResource {
            /** Generate an Ad Exchange report based on the saved report ID sent in the query parameters. */
            generate(request: {
                /** Account owning the saved report. */
                accountId: string;
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified. */
                locale?: string;
                /** The maximum number of rows of report data to return. */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** The saved report to retrieve. */
                savedReportId: string;
                /** Index of the first row of report data to return. */
                startIndex?: number;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<Report>;
            /** List all saved reports in this Ad Exchange account. */
            list(request: {
                /** Account owning the saved reports. */
                accountId: string;
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The maximum number of saved reports to include in the response, used for paging. */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
                 * previous response.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<SavedReports>;
        }
        interface ReportsResource {
            /**
             * Generate an Ad Exchange report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format
             * specify "alt=csv" as a query parameter.
             */
            generate(request: {
                /** Account which owns the generated report. */
                accountId: string;
                /** Data format for the response. */
                alt?: string;
                /** Dimensions to base the report on. */
                dimension?: string;
                /** End of the date range to report on in "YYYY-MM-DD" format, inclusive. */
                endDate: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** Filters to be run on the report. */
                filter?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified. */
                locale?: string;
                /** The maximum number of rows of report data to return. */
                maxResults?: number;
                /** Numeric columns to include in the report. */
                metric?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /**
                 * The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no
                 * prefix is specified, the column is sorted ascending.
                 */
                sort?: string;
                /** Start of the date range to report on in "YYYY-MM-DD" format, inclusive. */
                startDate: string;
                /** Index of the first row of report data to return. */
                startIndex?: number;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<Report>;
            saved: SavedResource;
        }
        interface UrlchannelsResource {
            /** List all URL channels in the specified ad client for this Ad Exchange account. */
            list(request: {
                /** Account to which the ad client belongs. */
                accountId: string;
                /** Ad client for which to list URL channels. */
                adClientId: string;
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The maximum number of URL channels to include in the response, used for paging. */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
                 * previous response.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<UrlChannels>;
        }
        interface AccountsResource {
            /** Get information about the selected Ad Exchange account. */
            get(request: {
                /** Account to get information about. Tip: 'myaccount' is a valid ID. */
                accountId: string;
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
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<Account>;
            /** List all accounts available to this Ad Exchange account. */
            list(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The maximum number of accounts to include in the response, used for paging. */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous
                 * response.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<Accounts>;
            adclients: AdclientsResource;
            alerts: AlertsResource;
            customchannels: CustomchannelsResource;
            metadata: MetadataResource;
            preferreddeals: PreferreddealsResource;
            reports: ReportsResource;
            urlchannels: UrlchannelsResource;
        }

        const accounts: adexchangeseller.AccountsResource;
    }
}
