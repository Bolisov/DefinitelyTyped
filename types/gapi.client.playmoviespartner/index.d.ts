// Type definitions for Google Google Play Movies Partner API v1 1.0
// Project: https://developers.google.com/playmoviespartner/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/** IMPORTANT.  */
/** This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually. */
/** In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator */
/** Generated from: https://playmoviespartner.googleapis.com/$discovery/rest?version=v1 */

/// <reference types="gapi.client" />

declare namespace gapi.client.playmoviespartner {
    
    interface Order {
        /** YouTube Channel Name that should be used to fulfill the Order. */
        /** Example: "Google_channel". */
        channelName?: string;
        /** Timestamp when the Order was approved. */
        approvedTime?: string;
        /** Default Show name, */
        /** usually in the language of the country of origin. */
        /** Only available for TV Edits */
        /** Example: "Googlers, The". */
        showName?: string;
        /** A simpler representation of the priority. */
        normalizedPriority?: string;
        /** ID internally generated by Google to uniquely identify an Order. */
        /** Example: 'abcde12_x' */
        orderId?: string;
        /** Type of the Edit linked to the Order. */
        type?: string;
        /** Field explaining why an Order has been rejected. */
        /** Example: "Trailer audio is 2ch mono, please re-deliver in stereo". */
        rejectionNote?: string;
        /** YouTube Channel ID that should be used to fulfill the Order. */
        /** Example: "UCRG64darCZhb". */
        channelId?: string;
        /** Legacy Order priority, as defined by Google. */
        /** Example: 'P0' */
        legacyPriority?: string;
        /** Name of the post-production house that manages the Edit ordered. */
        pphName?: string;
        /** Timestamp when the Order was created. */
        orderedTime?: string;
        /** Order priority, as defined by Google. */
        /** The higher the value, the higher the priority. */
        /** Example: 90 */
        priority?: number;
        /** Google-generated ID identifying the video linked to this Order, once */
        /** delivered. */
        /** Example: 'gtry456_xc'. */
        videoId?: string;
        /** Default Episode name, */
        /** usually in the language of the country of origin. */
        /** Only available for TV Edits */
        /** Example: "Googlers, The - Pilot". */
        episodeName?: string;
        /** Countries where the Order is available, */
        /** using the "ISO 3166-1 alpha-2" format (example: "US"). */
        countries?: string[];
        /** Detailed status of the order */
        statusDetail?: string;
        /** High-level status of the order. */
        status?: string;
        /** Timestamp of the earliest start date of the Avails */
        /** linked to this Order. */
        earliestAvailStartTime?: string;
        /** Default Edit name, */
        /** usually in the language of the country of origin. */
        /** Example: "Googlers, The". */
        name?: string;
        /** Name of the studio that owns the Edit ordered. */
        studioName?: string;
        /** Timestamp when the Order was fulfilled. */
        receivedTime?: string;
        /** Default Season name, */
        /** usually in the language of the country of origin. */
        /** Only available for TV Edits */
        /** Example: "Googlers, The - A Brave New World". */
        seasonName?: string;
        /** ID that can be used to externally identify an Order. */
        /** This ID is provided by partners when submitting the Avails. */
        /** Example: 'GOOGLER_2006' */
        customId?: string;
    }
    
    interface ListStoreInfosResponse {
        /** See 'List methods rules' for info about this field. */
        nextPageToken?: string;
        /** See _List methods rules_ for more information about this field. */
        totalSize?: number;
        /** List of StoreInfos that match the request criteria. */
        storeInfos?: StoreInfo[];
    }
    
    interface ListAvailsResponse {
        /** List of Avails that match the request criteria. */
        avails?: Avail[];
        /** See _List methods rules_ for info about this field. */
        nextPageToken?: string;
        /** See _List methods rules_ for more information about this field. */
        totalSize?: number;
    }
    
    interface ListOrdersResponse {
        /** List of Orders that match the request criteria. */
        orders?: Order[];
        /** See _List methods rules_ for info about this field. */
        nextPageToken?: string;
        /** See _List methods rules_ for more information about this field. */
        totalSize?: number;
    }
    
    interface StoreInfo {
        /** Default Edit name, usually in the language of the country of */
        /** origin. */
        /** Example: "Googlers, The". */
        name?: string;
        /** Google-generated ID identifying the season linked to the Edit. */
        /** Only available for TV Edits. */
        /** Example: 'ster23ex' */
        seasonId?: string;
        /** Title-level EIDR ID. */
        /** Example: "10.5240/1489-49A2-3956-4B2D-FE16-5". */
        titleLevelEidr?: string;
        /** Default Season name, usually in the language of the country of */
        /** origin. */
        /** Only available for TV Edits */
        /** Example: "Googlers, The - A Brave New World". */
        seasonName?: string;
        /** The number assigned to the season within a show. */
        /** Only available on TV Edits. */
        /** Example: "1". */
        seasonNumber?: string;
        /** Edit-level EIDR ID. */
        /** Example: "10.5240/1489-49A2-3956-4B2D-FE16-6". */
        editLevelEidr?: string;
        /** Whether the Edit has a EST offer. */
        hasEstOffer?: boolean;
        /** Whether the Edit has a SD offer. */
        hasSdOffer?: boolean;
        /** Timestamp when the Edit went live on the Store. */
        liveTime?: string;
        /** Google-generated ID identifying the video linked to the Edit. */
        /** Example: 'gtry456_xc' */
        videoId?: string;
        /** Whether the Edit has info cards. */
        hasInfoCards?: boolean;
        /** Whether the Edit has a VOD offer. */
        hasVodOffer?: boolean;
        /** Name of the post-production houses that manage the Edit. */
        pphNames?: string[];
        /** The number assigned to the episode within a season. */
        /** Only available on TV Edits. */
        /** Example: "1". */
        episodeNumber?: string;
        /** Name of the studio that owns the Edit ordered. */
        studioName?: string;
        /** Subtitles available for this Edit. */
        subtitles?: string[];
        /** Audio tracks available for this Edit. */
        audioTracks?: string[];
        /** Default Show name, usually in the language of the country of */
        /** origin. */
        /** Only available for TV Edits */
        /** Example: "Googlers, The". */
        showName?: string;
        /** Country where Edit is available in ISO 3166-1 alpha-2 country */
        /** code. */
        /** Example: "US". */
        country?: string;
        /** Google-generated ID identifying the show linked to the Edit. */
        /** Only available for TV Edits. */
        /** Example: 'et2hsue_x' */
        showId?: string;
        /** Edit type, like Movie, Episode or Season. */
        type?: string;
        /** Google-generated ID identifying the trailer linked to the Edit. */
        /** Example: 'bhd_4e_cx' */
        trailerId?: string;
        /** Whether the Edit has a HD offer. */
        hasHdOffer?: boolean;
        /** Knowledge Graph ID associated to this Edit, if available. */
        /** This ID links the Edit to its knowledge entity, externally accessible */
        /** at http://freebase.com. */
        /** In the absense of Title EIDR or Edit EIDR, this ID helps link together */
        /** multiple Edits across countries. */
        /** Example: '/m/0ffx29' */
        mid?: string;
        /** Whether the Edit has a 5.1 channel audio track. */
        hasAudio51?: boolean;
    }
    
    interface Avail {
        /** Type of transaction. */
        licenseType?: string;
        /** The number assigned to the season within a series. */
        /** Only available on TV Avails. */
        /** Example: "1". */
        seasonNumber?: string;
        /** Release date of the Title in earliest released territory. */
        /** Typically it is just the year, but it is free-form as per EMA spec. */
        /** Examples: "1979", "Oct 2014" */
        releaseDate?: string;
        /** End of term in YYYY-MM-DD format in the timezone of the country */
        /** of the Avail. */
        /** "Open" if no end date is available. */
        /** Example: "2019-02-17" */
        end?: string;
        /** Google-generated ID identifying the video linked to this Avail, once */
        /** delivered. */
        /** Not part of EMA Specs. */
        /** Example: 'gtry456_xc' */
        videoId?: string;
        /** Start of term in YYYY-MM-DD format in the timezone of the */
        /** country of the Avail. */
        /** Example: "2013-05-14". */
        start?: string;
        /** Name of the post-production houses that manage the Avail. */
        /** Not part of EMA Specs. */
        pphNames?: string[];
        /** Rating system applied to the version of title within territory */
        /** of Avail. */
        /** Rating systems should be formatted as per */
        /** [EMA ratings spec](http://www.movielabs.com/md/ratings/) */
        /** Example: "MPAA" */
        ratingSystem?: string;
        /** Other identifier referring to the series, as defined by partner. */
        /** Only available on TV avails. */
        /** Example: "rs_googlers". */
        seriesAltId?: string;
        /** Other identifier referring to the Edit, as defined by partner. */
        /** Example: "GOOGLER_2006" */
        altId?: string;
        /** The number assigned to the episode within a season. */
        /** Only available on TV Avails. */
        /** Example: "3". */
        episodeNumber?: string;
        /** Title used by involved parties to refer to this series. */
        /** Only available on TV Avails. */
        /** Example: "Googlers, The". */
        seriesTitleInternalAlias?: string;
        /** Indicates the format profile covered by the transaction. */
        formatProfile?: string;
        /** Value representing the rating. */
        /** Ratings should be formatted as per http://www.movielabs.com/md/ratings/ */
        /** Example: "PG" */
        ratingValue?: string;
        /** Title used by involved parties to refer to this content. */
        /** Example: "Googlers, The". */
        /** Only available on Movie Avails. */
        titleInternalAlias?: string;
        /** Title Identifier. This should be the Title Level EIDR. */
        /** Example: "10.5240/1489-49A2-3956-4B2D-FE16-5". */
        contentId?: string;
        /** Spoken language of the intended audience. */
        /** Language shall be encoded in accordance with RFC 5646. */
        /** Example: "fr". */
        storeLanguage?: string;
        /** Communicating an exempt category as defined by FCC regulations. */
        /** It is not required for non-US Avails. */
        /** Example: "1" */
        captionExemption?: string;
        /** The name of the studio that owns the Edit referred in the Avail. */
        /** This is the equivalent of `studio_name` in other resources, but it follows */
        /** the EMA nomenclature. */
        /** Example: "Google Films". */
        displayName?: string;
        /** Edit Identifier. This should be the Edit Level EIDR. */
        /** Example: "10.2340/1489-49A2-3956-4B2D-FE16-6" */
        productId?: string;
        /** Title used by involved parties to refer to this season. */
        /** Only available on TV Avails. */
        /** Example: "Googlers, The". */
        seasonTitleInternalAlias?: string;
        /** Other identifier referring to the episode, as defined by partner. */
        /** Only available on TV avails. */
        /** Example: "rs_googlers_s1_3". */
        episodeAltId?: string;
        /** Value to be applied to the pricing type. */
        /** Example: "4" or "2.99" */
        priceValue?: string;
        /** ISO 3166-1 alpha-2 country code for the country or territory */
        /** of this Avail. */
        /** For Avails, we use Territory in lieu of Country to comply with */
        /** EMA specifications. */
        /** But please note that Territory and Country identify the same thing. */
        /** Example: "US". */
        territory?: string;
        /** Value representing the rating reason. */
        /** Rating reasons should be formatted as per */
        /** [EMA ratings spec](http://www.movielabs.com/md/ratings/) */
        /** and comma-separated for inclusion of multiple reasons. */
        /** Example: "L, S, V" */
        ratingReason?: string;
        /** ID internally generated by Google to uniquely identify an Avail. */
        /** Not part of EMA Specs. */
        availId?: string;
        /** Work type as enumerated in EMA. */
        workType?: string;
        /** OPTIONAL.TV Only. Title used by involved parties to refer to this episode. */
        /** Only available on TV Avails. */
        /** Example: "Coding at Google". */
        episodeTitleInternalAlias?: string;
        /** First date an Edit could be publically announced as becoming */
        /** available at a specific future date in territory of Avail. */
        /** &#42;Not&#42; the Avail start date or pre-order start date. */
        /** Format is YYYY-MM-DD. */
        /** Only available for pre-orders. */
        /** Example: "2012-12-10" */
        suppressionLiftDate?: string;
        /** Other identifier referring to the season, as defined by partner. */
        /** Only available on TV avails. */
        /** Example: "rs_googlers_s1". */
        seasonAltId?: string;
        /** Manifestation Identifier. This should be the Manifestation */
        /** Level EIDR. */
        /** Example: "10.2340/1489-49A2-3956-4B2D-FE16-7" */
        encodeId?: string;
        /** Type of pricing that should be applied to this Avail */
        /** based on how the partner classify them. */
        /** Example: "Tier", "WSP", "SRP", or "Category". */
        priceType?: string;
        /** Communicating if caption file will be delivered. */
        captionIncluded?: boolean;
    }
    
    interface CountryResource {
        /** Get a StoreInfo given its video id and country. */
        /**  */
        /** See _Authentication and Authorization rules_ and */
        /** _Get methods rules_ for more information about this method. */
        get(request: {        
            /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
            key?: string;
            /** OAuth access token. */
            access_token?: string;
            /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
            quotaUser?: string;
            /** Pretty-print response. */
            pp?: boolean;
            /** OAuth 2.0 token for the current user. */
            oauth_token?: string;
            /** OAuth bearer token. */
            bearer_token?: string;
            /** Upload protocol for media (e.g. "raw", "multipart"). */
            upload_protocol?: string;
            /** Returns response with indentations and line breaks. */
            prettyPrint?: boolean;
            /** Selector specifying which fields to include in a partial response. */
            fields?: string;
            /** Legacy upload protocol for media (e.g. "media", "multipart"). */
            uploadType?: string;
            /** JSONP */
            callback?: string;
            /** V1 error format. */
            "$.xgafv"?: string;
            /** Data format for response. */
            alt?: string;
            /** REQUIRED. Edit country. */
            country: string;
            /** REQUIRED. Video ID. */
            videoId: string;
            /** REQUIRED. See _General rules_ for more information about this field. */
            accountId: string;
        }): gapi.client.Request<StoreInfo>;        
        
    }
    
    interface StoreInfosResource {
        /** List StoreInfos owned or managed by the partner. */
        /**  */
        /** See _Authentication and Authorization rules_ and */
        /** _List methods rules_ for more information about this method. */
        list(request: {        
            /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
            key?: string;
            /** OAuth access token. */
            access_token?: string;
            /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
            quotaUser?: string;
            /** Pretty-print response. */
            pp?: boolean;
            /** OAuth 2.0 token for the current user. */
            oauth_token?: string;
            /** OAuth bearer token. */
            bearer_token?: string;
            /** Upload protocol for media (e.g. "raw", "multipart"). */
            upload_protocol?: string;
            /** Returns response with indentations and line breaks. */
            prettyPrint?: boolean;
            /** Selector specifying which fields to include in a partial response. */
            fields?: string;
            /** Legacy upload protocol for media (e.g. "media", "multipart"). */
            uploadType?: string;
            /** JSONP */
            callback?: string;
            /** V1 error format. */
            "$.xgafv"?: string;
            /** Data format for response. */
            alt?: string;
            /** Filter StoreInfos that match any of the given `mid`s. */
            mids?: string;
            /** See _List methods rules_ for info about this field. */
            pphNames?: string;
            /** Filter StoreInfos that match (case-insensitive) any of the given country */
            /** codes, using the "ISO 3166-1 alpha-2" format (examples: "US", "us", "Us"). */
            countries?: string;
            /** See _List methods rules_ for info about this field. */
            studioNames?: string;
            /** Filter that matches StoreInfos with a `name` or `show_name` */
            /** that contains the given case-insensitive name. */
            name?: string;
            /** REQUIRED. See _General rules_ for more information about this field. */
            accountId: string;
            /** Filter StoreInfos that match any of the given `season_id`s. */
            seasonIds?: string;
            /** Filter StoreInfos that match any of the given `video_id`s. */
            videoIds?: string;
            /** Filter StoreInfos that match a given `video_id`. */
            /** NOTE: this field is deprecated and will be removed on V2; `video_ids` */
            /** should be used instead. */
            videoId?: string;
            /** See _List methods rules_ for info about this field. */
            pageToken?: string;
            /** See _List methods rules_ for info about this field. */
            pageSize?: number;
        }): gapi.client.Request<ListStoreInfosResponse>;        
        
        country: CountryResource;
    }
    
    interface OrdersResource {
        /** List Orders owned or managed by the partner. */
        /**  */
        /** See _Authentication and Authorization rules_ and */
        /** _List methods rules_ for more information about this method. */
        list(request: {        
            /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
            key?: string;
            /** OAuth access token. */
            access_token?: string;
            /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
            quotaUser?: string;
            /** Pretty-print response. */
            pp?: boolean;
            /** OAuth 2.0 token for the current user. */
            oauth_token?: string;
            /** OAuth bearer token. */
            bearer_token?: string;
            /** Upload protocol for media (e.g. "raw", "multipart"). */
            upload_protocol?: string;
            /** Returns response with indentations and line breaks. */
            prettyPrint?: boolean;
            /** Selector specifying which fields to include in a partial response. */
            fields?: string;
            /** Legacy upload protocol for media (e.g. "media", "multipart"). */
            uploadType?: string;
            /** JSONP */
            callback?: string;
            /** V1 error format. */
            "$.xgafv"?: string;
            /** Data format for response. */
            alt?: string;
            /** See _List methods rules_ for info about this field. */
            pageToken?: string;
            /** Filter Orders that match a case-insensitive, partner-specific custom id. */
            customId?: string;
            /** Filter Orders that match any of the given `video_id`s. */
            videoIds?: string;
            /** See _List methods rules_ for info about this field. */
            pageSize?: number;
            /** See _List methods rules_ for info about this field. */
            pphNames?: string;
            /** Filter Orders that match one of the given status. */
            status?: string;
            /** See _List methods rules_ for info about this field. */
            studioNames?: string;
            /** Filter that matches Orders with a `name`, `show`, `season` or `episode` */
            /** that contains the given case-insensitive name. */
            name?: string;
            /** REQUIRED. See _General rules_ for more information about this field. */
            accountId: string;
        }): gapi.client.Request<ListOrdersResponse>;        
        
        /** Get an Order given its id. */
        /**  */
        /** See _Authentication and Authorization rules_ and */
        /** _Get methods rules_ for more information about this method. */
        get(request: {        
            /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
            key?: string;
            /** OAuth access token. */
            access_token?: string;
            /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
            quotaUser?: string;
            /** Pretty-print response. */
            pp?: boolean;
            /** OAuth 2.0 token for the current user. */
            oauth_token?: string;
            /** OAuth bearer token. */
            bearer_token?: string;
            /** Upload protocol for media (e.g. "raw", "multipart"). */
            upload_protocol?: string;
            /** Returns response with indentations and line breaks. */
            prettyPrint?: boolean;
            /** Selector specifying which fields to include in a partial response. */
            fields?: string;
            /** Legacy upload protocol for media (e.g. "media", "multipart"). */
            uploadType?: string;
            /** JSONP */
            callback?: string;
            /** V1 error format. */
            "$.xgafv"?: string;
            /** Data format for response. */
            alt?: string;
            /** REQUIRED. Order ID. */
            orderId: string;
            /** REQUIRED. See _General rules_ for more information about this field. */
            accountId: string;
        }): gapi.client.Request<Order>;        
        
    }
    
    interface AvailsResource {
        /** List Avails owned or managed by the partner. */
        /**  */
        /** See _Authentication and Authorization rules_ and */
        /** _List methods rules_ for more information about this method. */
        list(request: {        
            /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
            key?: string;
            /** OAuth access token. */
            access_token?: string;
            /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
            quotaUser?: string;
            /** Pretty-print response. */
            pp?: boolean;
            /** OAuth 2.0 token for the current user. */
            oauth_token?: string;
            /** OAuth bearer token. */
            bearer_token?: string;
            /** Upload protocol for media (e.g. "raw", "multipart"). */
            upload_protocol?: string;
            /** Returns response with indentations and line breaks. */
            prettyPrint?: boolean;
            /** Selector specifying which fields to include in a partial response. */
            fields?: string;
            /** Legacy upload protocol for media (e.g. "media", "multipart"). */
            uploadType?: string;
            /** JSONP */
            callback?: string;
            /** V1 error format. */
            "$.xgafv"?: string;
            /** Data format for response. */
            alt?: string;
            /** See _List methods rules_ for info about this field. */
            pageToken?: string;
            /** Filter Avails that match any of the given `video_id`s. */
            videoIds?: string;
            /** See _List methods rules_ for info about this field. */
            pageSize?: number;
            /** Filter Avails that match (case-insensitive) any of the given partner-specific custom ids. */
            altIds?: string;
            /** See _List methods rules_ for info about this field. */
            pphNames?: string;
            /** Filter Avails that match a case-insensitive, partner-specific custom id. */
            /** NOTE: this field is deprecated and will be removed on V2; `alt_ids` */
            /** should be used instead. */
            altId?: string;
            /** See _List methods rules_ for info about this field. */
            studioNames?: string;
            /** REQUIRED. See _General rules_ for more information about this field. */
            accountId: string;
            /** Filter Avails that match (case-insensitive) any of the given country codes, */
            /** using the "ISO 3166-1 alpha-2" format (examples: "US", "us", "Us"). */
            territories?: string;
            /** Filter that matches Avails with a `title_internal_alias`, */
            /** `series_title_internal_alias`, `season_title_internal_alias`, */
            /** or `episode_title_internal_alias` that contains the given */
            /** case-insensitive title. */
            title?: string;
        }): gapi.client.Request<ListAvailsResponse>;        
        
        /** Get an Avail given its avail group id and avail id. */
        get(request: {        
            /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
            key?: string;
            /** OAuth access token. */
            access_token?: string;
            /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
            quotaUser?: string;
            /** Pretty-print response. */
            pp?: boolean;
            /** OAuth 2.0 token for the current user. */
            oauth_token?: string;
            /** OAuth bearer token. */
            bearer_token?: string;
            /** Upload protocol for media (e.g. "raw", "multipart"). */
            upload_protocol?: string;
            /** Returns response with indentations and line breaks. */
            prettyPrint?: boolean;
            /** Selector specifying which fields to include in a partial response. */
            fields?: string;
            /** Legacy upload protocol for media (e.g. "media", "multipart"). */
            uploadType?: string;
            /** JSONP */
            callback?: string;
            /** V1 error format. */
            "$.xgafv"?: string;
            /** Data format for response. */
            alt?: string;
            /** REQUIRED. Avail ID. */
            availId: string;
            /** REQUIRED. See _General rules_ for more information about this field. */
            accountId: string;
        }): gapi.client.Request<Avail>;        
        
    }
    
    interface AccountsResource {
        storeInfos: StoreInfosResource;
        orders: OrdersResource;
        avails: AvailsResource;
    }
}

declare namespace gapi.client {
    /** Load Google Play Movies Partner API v1 */
    function load(name: "playmoviespartner", version: "v1"): PromiseLike<void>;    
    function load(name: "playmoviespartner", version: "v1", callback: () => any): void;    
    
    const accounts: gapi.client.playmoviespartner.AccountsResource; 
    
}
