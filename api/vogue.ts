import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  FancySettingsType: any;
};

/** A connection to a list of items. */
export type AllBrandConnection = {
  __typename?: "AllBrandConnection";
  /** The Brand items within each infinite scroll set or page. */
  Brand?: Maybe<Array<Maybe<Brand>>>;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AllBrandEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Number of "Brand" items returned in this connection following a search action */
  totalSearchResults?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type AllBrandEdge = {
  __typename?: "AllBrandEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Brand>;
};

/** A connection to a list of items. */
export type AllContentConnection = {
  __typename?: "AllContentConnection";
  /** The Content items within each infinite scroll set or page. */
  Content?: Maybe<Array<Maybe<Content>>>;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AllContentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Number of "Content" items returned in this connection following a search action */
  totalSearchResults?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type AllContentEdge = {
  __typename?: "AllContentEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Content>;
};

/** A connection to a list of items. */
export type AllMediaConnection = {
  __typename?: "AllMediaConnection";
  /** The Media items within each infinite scroll set or page. */
  Media?: Maybe<Array<Maybe<Media>>>;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AllMediaEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Number of "Media" items returned in this connection following a search action */
  totalSearchResults?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type AllMediaEdge = {
  __typename?: "AllMediaEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Media>;
};

/** A connection to a list of items. */
export type AllSeasonConnection = {
  __typename?: "AllSeasonConnection";
  /** The Season items within each infinite scroll set or page. */
  Season?: Maybe<Array<Maybe<Season>>>;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AllSeasonEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Number of "Season" items returned in this connection following a search action */
  totalSearchResults?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type AllSeasonEdge = {
  __typename?: "AllSeasonEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Season>;
};

/** A single item of the Article WP Post Type */
export type Article = Content & {
  __typename?: "Article";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The embedded content in the body of the item. */
  bodyEmbeds?: Maybe<Array<Maybe<EmbedUnion>>>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** An article's featured gallery. */
  featuredGallery?: Maybe<Gallery>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /**
   * Sponsor of the post
   * @deprecated Deprecated in favor of the "ContentFlags.sponsored" field
   */
  postSponsor?: Maybe<PostSponsor>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A single item of the Article WP Post Type */
export type ArticleBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A single article from Copilot */
export type ArticleCopilot = Content & {
  __typename?: "ArticleCopilot";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** Embedded items for this copilot article */
  bodyEmbeds?: Maybe<Array<Maybe<EmbedUnion>>>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The uri of the main (lede) image of an article. */
  lede?: Maybe<MediaUnion>;
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /**
   * Content considered "related" to this articleCopilot
   * @deprecated This is replaced with a new union based field (relatedContent), which handles a broader range of related content types (including new curatedLists).
   */
  related?: Maybe<Array<Maybe<Content>>>;
  /** Content from `related content` section of articles or galleries in Copilot. */
  relatedContent?: Maybe<Array<Maybe<RelatedUnion>>>;
  /** The SEO description for this copilot article */
  seoDescription?: Maybe<Scalars["String"]>;
  /** The SEO title for this copilot article */
  seoTitle?: Maybe<Scalars["String"]>;
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** The social media description for this copilot article */
  socialDescription?: Maybe<Scalars["String"]>;
  /** The social media title for this copilot article */
  socialTitle?: Maybe<Scalars["String"]>;
  /** The sub-channel for this copilot article */
  subChannel?: Maybe<Term>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A single article from Copilot */
export type ArticleCopilotBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** An single brand */
export type Brand = {
  __typename?: "Brand";
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in an alpha-sort connection view of this brand */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The description of the brand (markdown) */
  description?: Maybe<Scalars["String"]>;
  /** The list of current designers */
  designers?: Maybe<Array<Maybe<Person>>>;
  fashionShows?: Maybe<FashionShowsConnection>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The name of the entity */
  name: Scalars["String"];
  /** The photosTout for the brand */
  photosTout?: Maybe<Image>;
  /** The list of previous designers */
  previousDesigners?: Maybe<Array<Maybe<Person>>>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The slug of the entity */
  slug: Scalars["String"];
  /** The url of the entity */
  url: Scalars["String"];
};

/** An single brand */
export type BrandFashionShowsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A single Breaker */
export type Breaker = {
  __typename?: "Breaker";
  /** Text for "Best Dressed" breakers */
  body?: Maybe<Scalars["String"]>;
  /** The WordPress type of the breaker */
  breakerType: Scalars["String"];
  /** CTA Text */
  ctaText?: Maybe<Scalars["String"]>;
  /** CTA Title */
  ctaTitle?: Maybe<Scalars["String"]>;
  /** CTA URL */
  ctaURL?: Maybe<Scalars["String"]>;
  /** Copilot gallery for "Best Dressed" breakers */
  galleryCopilot?: Maybe<GalleryCopilot>;
  /** The WordPress type of the breaker */
  promotedItem?: Maybe<Array<PromotedItemUnion>>;
  /** Season Slug on Runway Season breaker only */
  seasonSlug?: Maybe<Scalars["String"]>;
  /** Breaker Title */
  title?: Maybe<Scalars["String"]>;
};

/** A single Breaker */
export type BreakerGalleryCopilotArgs = {
  first?: InputMaybe<Scalars["Int"]>;
};

/** The List of Heroes and Breakers */
export type Breakers = {
  __typename?: "Breakers";
  /** List of Breakers in the Breaker position */
  feed?: Maybe<Array<Maybe<Breaker>>>;
  /** List of Breakers in the Hero position */
  hero?: Maybe<Array<Maybe<Breaker>>>;
};

/** A Copilot Bundle */
export type Bundle = Content & {
  __typename?: "Bundle";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The bundle type */
  bundleType?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /** All bundle containers */
  containers?: Maybe<Array<Maybe<Container>>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A Copilot Bundle */
export type BundleBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

export type BundleItemUnion =
  | ArticleCopilot
  | CneVideoV2
  | CuratedList
  | CuratedSearch
  | ExternalLinkCopilot
  | FashionShowV2
  | GalleryCopilot;

/** A single item of the CNE Video Post Type */
export type CneVideo = Content & {
  __typename?: "CNEVideo";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /** The CNE ID. */
  cneID?: Maybe<Scalars["ID"]>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** Mobile photosTout */
  photosToutMobile?: Maybe<Image>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A single item of the CNE Video Post Type */
export type CneVideoBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A single CNE video from Copilot */
export type CneVideoV2 = Content & {
  __typename?: "CNEVideoV2";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The list of categories for the video */
  categories?: Maybe<Array<Maybe<Term>>>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /** The CNE id for the video */
  cneId: Scalars["String"];
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A single CNE video from Copilot */
export type CneVideoV2BodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

export type CategoryFilter = {
  /** The hierarchy of the category to filter by */
  hierarchy?: InputMaybe<Scalars["String"]>;
  /** The ID of the category */
  id?: InputMaybe<Scalars["ID"]>;
};

/** A city */
export type City = {
  __typename?: "City";
  /** The code for the city */
  code: Scalars["String"];
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The name of the entity */
  name: Scalars["String"];
};

/** A copilot clip */
export type Clip = Media & {
  __typename?: "Clip";
  /** The altText of the media item. */
  altText: Scalars["String"];
  /** Aspect ratios for this clip */
  aspectRatios?: Maybe<ClipCollections>;
  /** The caption of the media item */
  caption?: Maybe<Scalars["String"]>;
  /** Various content flags for this media item, including legal disclaimer */
  contentFlags?: Maybe<ContentFlags>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The credit of the media item */
  credit?: Maybe<Scalars["String"]>;
  /** The original type of the media item */
  format?: Maybe<Scalars["String"]>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The original height of the media item */
  height?: Maybe<Scalars["Int"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The photosTout/poster for this clip, derived from the first thumbnail image */
  photosTout?: Maybe<MediaUnion>;
  /**
   * The publish datetime of the media item.
   * @deprecated Copilot media entities are unpublishable
   */
  pubDate?: Maybe<Scalars["String"]>;
  /** Quote for fancy images */
  quote?: Maybe<Scalars["String"]>;
  /** All renditions for this clip */
  renditions?: Maybe<ClipCollections>;
  resizedUrl?: Maybe<Scalars["String"]>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the media item */
  title: Scalars["String"];
  transformedUrl?: Maybe<Scalars["String"]>;
  /** The url src of the media item */
  url?: Maybe<Scalars["String"]>;
  /** The original width of the media item */
  width?: Maybe<Scalars["Int"]>;
};

/** A copilot clip */
export type ClipCaptionArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A copilot clip */
export type ClipCreditArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A copilot clip */
export type ClipResizedUrlArgs = {
  h?: InputMaybe<Scalars["Int"]>;
  w?: InputMaybe<Scalars["Int"]>;
};

/** A copilot clip */
export type ClipTransformedUrlArgs = {
  format?: InputMaybe<Scalars["String"]>;
  h?: InputMaybe<Scalars["Int"]>;
  w?: InputMaybe<Scalars["Int"]>;
};

/** All possible collections for a copilot clip */
export type ClipCollections = {
  __typename?: "ClipCollections";
  /** All .gif renditions for this clip */
  gif?: Maybe<Array<Maybe<ClipRendition>>>;
  /** Master collection for this clip */
  master?: Maybe<ClipRendition>;
  /** All .mp4 renditions for this clip */
  mp4?: Maybe<Array<Maybe<ClipRendition>>>;
  /** All .webm renditions for this clip */
  webm?: Maybe<Array<Maybe<ClipRendition>>>;
};

/** Resolution settings for a clip */
export type ClipRendition = {
  __typename?: "ClipRendition";
  /** Duration (in seconds) for this rendition */
  duration?: Maybe<Scalars["Int"]>;
  /** Format for this rendition (MP4, WEBM, GIF) */
  format?: Maybe<Scalars["String"]>;
  /** Height value for this rendition */
  height?: Maybe<Scalars["Int"]>;
  /** Resolution label for this rendition (master, 1080p, 720p, 360p) */
  resolution?: Maybe<Scalars["String"]>;
  /** Url for this rendition - should be Vulcan */
  url?: Maybe<Scalars["String"]>;
  /** Width value for this rendition */
  width?: Maybe<Scalars["Int"]>;
};

/** A slide item for a fashion show collection */
export type CollectionSlide = SlideInterface & {
  __typename?: "CollectionSlide";
  /** The caption of the slide */
  caption?: Maybe<Scalars["String"]>;
  /** The clip associated with this slide */
  clip?: Maybe<Clip>;
  /** Various content flags for this slide, including legal disclaimer */
  contentFlags: ContentFlags;
  /** The credit of the slide */
  credit?: Maybe<Scalars["String"]>;
  /** The description of the slide */
  description?: Maybe<Scalars["String"]>;
  /** The details slides associated with the collection slide */
  details?: Maybe<Array<Maybe<Slide>>>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The Moda Operandi ecommerce link associated with the collection slide */
  modaLink?: Maybe<Scalars["String"]>;
  /** The move-it video Clip associated with the collection slide */
  moveItClip?: Maybe<Clip>;
  /** The link to the move it video associated with the collection slide */
  moveItVideo?: Maybe<Scalars["String"]>;
  /** The people associated with the slide */
  people?: Maybe<Array<Maybe<Person>>>;
  /** The media associated with the slide */
  photosTout?: Maybe<MediaUnion>;
  /** The product associated with this slide */
  product?: Maybe<Product>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the slide */
  title?: Maybe<Scalars["String"]>;
  /** The image type of the slide -- "bow" or "look". */
  type?: Maybe<Scalars["String"]>;
};

/** A slide item for a fashion show collection */
export type CollectionSlideCaptionArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A slide item for a fashion show collection */
export type CollectionSlideCreditArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A bundle container object */
export type Container = {
  __typename?: "Container";
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The container type */
  curationContainerType?: Maybe<Scalars["String"]>;
  /** The dek for this entity */
  dek?: Maybe<Scalars["String"]>;
  /** The hed for this entity */
  hed?: Maybe<Scalars["String"]>;
  /** All content items for this container */
  items?: Maybe<Array<Maybe<BundleItemUnion>>>;
};

export type Content = {
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

export type ContentBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

export type ContentFilter = {
  /** Takes a _cursor_, basically identical to the root-level "after" argument. Used as a hacky workaround to the Relay custom cursor issue: https://github.com/facebook/relay/issues/1312 */
  after?: InputMaybe<Scalars["String"]>;
  /** See `filter.after` description for more information */
  before?: InputMaybe<Scalars["String"]>;
  /** Brand to apply as filter to the content (Copilot only) */
  brand?: InputMaybe<ContentFilterItem>;
  /** Multiple Copilot categories to apply as a filter. */
  categories?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  /** The Copilot category to apply as filter (translated for WordPress) */
  category?: InputMaybe<CategoryFilter>;
  /** Channel to apply as filter to the content (Wordpress only) */
  channel?: InputMaybe<ContentFilterItem>;
  /** Contributor to apply as filter to the content (Wordpress and Copilot) */
  contributor?: InputMaybe<ContentFilterItem>;
  /** Season to apply as filter to the content (Copilot only) */
  season?: InputMaybe<ContentFilterItem>;
};

export type ContentFilterItem = {
  /** The ID of the filter */
  id?: InputMaybe<Scalars["ID"]>;
  /** The slug of the filter */
  slug?: InputMaybe<Scalars["String"]>;
};

/** Various content flags */
export type ContentFlags = {
  __typename?: "ContentFlags";
  /** Whether the legal disclaimer should be displayed for this content */
  hasLegalDisclaimer?: Maybe<Scalars["Boolean"]>;
  /** Whether this content should be hidden from the feed */
  hideFromFeed?: Maybe<Scalars["Boolean"]>;
  /** Whether this content is promoted in the feed */
  isPromoted?: Maybe<Scalars["Boolean"]>;
  /** Whether this content is sponsored */
  isSponsored?: Maybe<Scalars["Boolean"]>;
};

export enum ContentStatusEnum {
  Draft = "DRAFT",
  Published = "PUBLISHED",
}

/** A single contributor */
export type Contributor = {
  __typename?: "Contributor";
  /** The description for the contributor */
  bio?: Maybe<Scalars["String"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The name of the entity */
  name: Scalars["String"];
  /** The uri of the avatar image of the contributor */
  photosTout?: Maybe<MediaUnion>;
  /** Social media links for the contributor */
  socialMediaHandles?: Maybe<SocialMedia>;
  /** The url of the contributor */
  url?: Maybe<Scalars["String"]>;
};

/** Possible Contributors to a content item. */
export type ContributorRoles = {
  __typename?: "ContributorRoles";
  /** List of artists */
  artist?: Maybe<Array<Maybe<Contributor>>>;
  /** List of authors */
  author?: Maybe<Array<Maybe<Contributor>>>;
  /** List of editors */
  editor?: Maybe<Array<Maybe<Contributor>>>;
  /** List of photographers */
  photographer?: Maybe<Array<Maybe<Photographer>>>;
  /** List of videographers */
  videographer?: Maybe<Array<Maybe<Contributor>>>;
};

/** A curatedlist content type */
export type CuratedList = Content & {
  __typename?: "CuratedList";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** Content from `curated list` section of articles or galleries in Copilot. */
  items?: Maybe<Array<Maybe<CuratedListUnion>>>;
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A curatedlist content type */
export type CuratedListBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

export type CuratedListUnion =
  | ArticleCopilot
  | CneVideoV2
  | CuratedList
  | ExternalLinkCopilot
  | GalleryCopilot
  | Image;

/** A curatedsearch content type */
export type CuratedSearch = Content & {
  __typename?: "CuratedSearch";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** Content from `curated search` section of articles or galleries in Copilot. */
  items?: Maybe<Array<Maybe<CuratedListUnion>>>;
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A curatedsearch content type */
export type CuratedSearchBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

export type EmbedUnion =
  | CneVideo
  | Clip
  | ExternalLinkCopilot
  | Gallery
  | GalleryCopilot
  | Image
  | MixedMedia
  | Product
  | PromotedContent;

/** An event */
export type Event = {
  __typename?: "Event";
  /**
   * The address of the event
   * @deprecated "address" field has been deprecated, as it is private data
   */
  address?: Maybe<Scalars["String"]>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The date of the event */
  eventDate?: Maybe<Scalars["String"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** Whether an instant show is expected */
  instantShow?: Maybe<Scalars["Boolean"]>;
  /** Whether a livestream is expected */
  livestream?: Maybe<Scalars["Boolean"]>;
};

export type ExcludeContentFlagsType = {
  /** Exclude content that is set to "hideFromFeed". */
  hideFromFeed?: InputMaybe<Scalars["Boolean"]>;
};

export type ExcludeFilter = {
  /** Exclude content based on a list of Copilot categories */
  categories?: InputMaybe<Array<InputMaybe<ExcludeCategoryType>>>;
  /** Exclude content based on a list of Copilot categories */
  category?: InputMaybe<Array<InputMaybe<ExcludeCategoryType>>>;
  /** Exclude content based on various contentFlags, including "hideFromFeed". */
  contentFlags?: InputMaybe<ExcludeContentFlagsType>;
};

/** A external link embed type */
export type ExternalLinkCopilot = {
  __typename?: "ExternalLinkCopilot";
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** Also used as Country field for `Vogue 100 Influencers` story */
  dek?: Maybe<Scalars["String"]>;
  /** The url of the external link. */
  href?: Maybe<Scalars["String"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The uri of the main (featured) image of the external link. */
  photosTout?: Maybe<MediaUnion>;
  /** Also used as Age field for `Vogue 100 Influencers` story */
  rubric?: Maybe<Scalars["String"]>;
  /** The source of the external link. */
  source?: Maybe<Scalars["String"]>;
  /** The title of the external link. */
  title: Scalars["String"];
};

/** List of valid fancy templates */
export enum FancyTemplateType {
  FancyClimate = "fancyClimate",
  FancyDenim = "fancyDenim",
  FancyDrought = "fancyDrought",
  FancyGunControl = "fancyGunControl",
  FancyHairloss = "fancyHairloss",
  FancyLesbianNation = "fancyLesbianNation",
  FancyLesbianNationHome = "fancyLesbianNationHome",
  FancyLesbianNationNoGrid = "fancyLesbianNationNoGrid",
  FancyVideoGrid = "fancyVideoGrid",
  FancyWomen = "fancyWomen",
  FancyWomenHomepage = "fancyWomenHomepage",
  SilhouetteDefault = "silhouetteDefault",
  SilhouetteJamaica = "silhouetteJamaica",
}

/** List of valid types of fashion galleries */
export enum FashionGalleryTypeEnum {
  Atmosphere = "atmosphere",
  Beauty = "beauty",
  Collection = "collection",
  Detail = "detail",
  FrontRow = "frontRow",
}

/** The aggregate of all gallery types */
export type FashionShowGalleries = {
  __typename?: "FashionShowGalleries";
  /** A(n) atmosphere gallery for the fashionshow. */
  atmosphere?: Maybe<FashionShowGallery>;
  /** A(n) beauty gallery for the fashionshow. */
  beauty?: Maybe<FashionShowGallery>;
  /** A(n) collection gallery for the fashionshow. */
  collection?: Maybe<FashionShowGallery>;
  /** A(n) detail gallery for the fashionshow. */
  detail?: Maybe<FashionShowGallery>;
  /** A(n) frontRow gallery for the fashionshow. */
  frontRow?: Maybe<FashionShowGallery>;
};

/** A single fashionshow gallery */
export type FashionShowGallery = Content & {
  __typename?: "FashionShowGallery";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /**
   * Content considered "related" to this articleCopilot
   * @deprecated This is replaced with a new union based field (relatedContent), which handles a broader range of related content types (including new curatedLists).
   */
  related?: Maybe<Array<Maybe<Content>>>;
  /** Content from `related content` section of articles or galleries in Copilot. */
  relatedContent?: Maybe<Array<Maybe<RelatedUnion>>>;
  /** The number of slides the gallery */
  slideCount: Scalars["Int"];
  /** @deprecated Prefer slidesV2, which is a connection to a type with richer data structure */
  slides?: Maybe<GalleryItemsConnection>;
  slidesV2?: Maybe<GallerySlidesConnection>;
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** Slides sorted from a VotingResults query */
  sortedSlides?: Maybe<GallerySlidesConnection>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the fashionshow gallery */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
  /**
   * Whether this is a votable Gallery
   * @deprecated This will now be available under the functionalTags field, but no longer as a boolean
   */
  voteable?: Maybe<Scalars["Boolean"]>;
  /** Voting tags associated with this gallery */
  votingTags?: Maybe<Array<Maybe<Term>>>;
};

/** A single fashionshow gallery */
export type FashionShowGalleryBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A single fashionshow gallery */
export type FashionShowGallerySlidesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A single fashionshow gallery */
export type FashionShowGallerySlidesV2Args = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A single fashionshow gallery */
export type FashionShowGallerySortedSlidesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A single item of the Fashion Show Type (V2, using Copilot API) */
export type FashionShowV2 = Content & {
  __typename?: "FashionShowV2";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The brand for the fashionshow */
  brand?: Maybe<Brand>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /** The city for the fashionshow */
  city?: Maybe<City>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The coverage article for the fashionshow */
  coverage?: Maybe<ArticleCopilot>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** An event for the fashionshow */
  event?: Maybe<Event>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** All galleries for the fashionshow */
  galleries?: Maybe<FashionShowGalleries>;
  /** Whether the fashion show is happening now */
  happeningNow?: Maybe<Scalars["Boolean"]>;
  /** Whether the fashionshow is displayed as highlighted */
  highlighted?: Maybe<Scalars["Boolean"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** Whether the fashionshow has instant status */
  instantShow?: Maybe<Scalars["Boolean"]>;
  /** Text associated with the link to the legacy review for this fashionshow */
  legacyReviewLinkText?: Maybe<Scalars["String"]>;
  /** Link to the legacy review for this fashionshow */
  legacyReviewUrl?: Maybe<Scalars["String"]>;
  /** Livestream embed for the fashionshow */
  livestream?: Maybe<Scalars["String"]>;
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The link to Moda Operandi link */
  modaLink?: Maybe<Scalars["String"]>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** Whether the Moda Operandi link in presale mode */
  presale?: Maybe<Scalars["Boolean"]>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The review for the fashionshow */
  review?: Maybe<Review>;
  /** The season for the fashionshow */
  season?: Maybe<Season>;
  /** Whether to show the fashionshow in the feed */
  showInFeed?: Maybe<Scalars["Boolean"]>;
  /** Whether to show the livestream for the fashionshow */
  showLivestream?: Maybe<Scalars["Boolean"]>;
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
  /** A video for this fashionshow */
  video?: Maybe<CneVideoV2>;
  /** The videosLede for the fashionshow */
  videosLede?: Maybe<CneVideoV2>;
};

/** A single item of the Fashion Show Type (V2, using Copilot API) */
export type FashionShowV2BodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A single item of the Fashion Show Type (V2, using Copilot API) */
export type FashionShowV2ReviewArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A connection to a list of items. */
export type FashionShowsConnection = {
  __typename?: "FashionShowsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FashionShowsEdge>>>;
  /** An individual fashionshow of this brand. */
  fashionShow?: Maybe<Array<Maybe<FashionShowV2>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FashionShowsEdge = {
  __typename?: "FashionShowsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<FashionShowV2>;
};

/** A single item of the Gallery WP Post Type */
export type Gallery = Content & {
  __typename?: "Gallery";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /**
   * Sponsor of the post
   * @deprecated Deprecated in favor of the "ContentFlags.sponsored" field
   */
  postSponsor?: Maybe<PostSponsor>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The number of slides the gallery */
  slideCount: Scalars["Int"];
  /** The gallery slides. */
  slides?: Maybe<Array<Maybe<MediaUnion>>>;
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A single item of the Gallery WP Post Type */
export type GalleryBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A Copilot Gallery */
export type GalleryCopilot = Content & {
  __typename?: "GalleryCopilot";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /**
   * Content considered "related" to this articleCopilot
   * @deprecated This is replaced with a new union based field (relatedContent), which handles a broader range of related content types (including new curatedLists).
   */
  related?: Maybe<Array<Maybe<Content>>>;
  /** Content from `related content` section of articles or galleries in Copilot. */
  relatedContent?: Maybe<Array<Maybe<RelatedUnion>>>;
  /** The number of slides the gallery */
  slideCount: Scalars["Int"];
  /** @deprecated Prefer slidesV2, which is a connection to a type with richer data structure */
  slides?: Maybe<GalleryItemsConnection>;
  slidesV2?: Maybe<GallerySlidesConnection>;
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** Slides sorted from a VotingResults query */
  sortedSlides?: Maybe<GallerySlidesConnection>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
  /**
   * Whether this is a votable Gallery
   * @deprecated This will now be available under the functionalTags field, but no longer as a boolean
   */
  voteable?: Maybe<Scalars["Boolean"]>;
  /** Voting tags associated with this gallery */
  votingTags?: Maybe<Array<Maybe<Term>>>;
};

/** A Copilot Gallery */
export type GalleryCopilotBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A Copilot Gallery */
export type GalleryCopilotSlidesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A Copilot Gallery */
export type GalleryCopilotSlidesV2Args = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A Copilot Gallery */
export type GalleryCopilotSortedSlidesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A connection to a list of items. */
export type GalleryItemsConnection = {
  __typename?: "GalleryItemsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GalleryItemsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** An individual media item on a fashionshow gallery. */
  slide?: Maybe<Array<Maybe<MediaUnion>>>;
};

/** An edge in a connection. */
export type GalleryItemsEdge = {
  __typename?: "GalleryItemsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<MediaUnion>;
};

/** A connection to a list of items. */
export type GallerySlidesConnection = {
  __typename?: "GallerySlidesConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GallerySlidesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** An individual slide on a fashionshow gallery. */
  slide?: Maybe<Array<Maybe<SlideUnion>>>;
};

/** An edge in a connection. */
export type GallerySlidesEdge = {
  __typename?: "GallerySlidesEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<SlideUnion>;
};

/** A Gallery V2 Post Type (with slides connection) */
export type GalleryV2 = Content & {
  __typename?: "GalleryV2";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /**
   * Sponsor of the post
   * @deprecated Deprecated in favor of the "ContentFlags.sponsored" field
   */
  postSponsor?: Maybe<PostSponsor>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The number of slides the gallery */
  slideCount: Scalars["Int"];
  slidesV2?: Maybe<GallerySlidesConnection>;
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A Gallery V2 Post Type (with slides connection) */
export type GalleryV2BodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A Gallery V2 Post Type (with slides connection) */
export type GalleryV2SlidesV2Args = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** An image asset from WP or Copilot */
export type Image = Media & {
  __typename?: "Image";
  /** The altText of the media item. */
  altText: Scalars["String"];
  /** The caption of the media item */
  caption?: Maybe<Scalars["String"]>;
  /** Various content flags for this media item, including legal disclaimer */
  contentFlags?: Maybe<ContentFlags>;
  /** The credit of the media item */
  credit?: Maybe<Scalars["String"]>;
  /** The original type of the media item */
  format?: Maybe<Scalars["String"]>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The original height of the media item */
  height?: Maybe<Scalars["Int"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /**
   * The publish datetime of the media item.
   * @deprecated Copilot media entities are unpublishable
   */
  pubDate?: Maybe<Scalars["String"]>;
  /** Quote for fancy images */
  quote?: Maybe<Scalars["String"]>;
  resizedUrl?: Maybe<Scalars["String"]>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the media item */
  title: Scalars["String"];
  transformedUrl?: Maybe<Scalars["String"]>;
  /** The url src of the media item */
  url?: Maybe<Scalars["String"]>;
  /** The original width of the media item */
  width?: Maybe<Scalars["Int"]>;
};

/** An image asset from WP or Copilot */
export type ImageCaptionArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** An image asset from WP or Copilot */
export type ImageCreditArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** An image asset from WP or Copilot */
export type ImageResizedUrlArgs = {
  h?: InputMaybe<Scalars["Int"]>;
  w?: InputMaybe<Scalars["Int"]>;
};

/** An image asset from WP or Copilot */
export type ImageTransformedUrlArgs = {
  format?: InputMaybe<Scalars["String"]>;
  h?: InputMaybe<Scalars["Int"]>;
  w?: InputMaybe<Scalars["Int"]>;
};

/** A single item of the City Directory Itinerary WP Post Type */
export type Itinerary = Content & {
  __typename?: "Itinerary";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A single item of the City Directory Itinerary WP Post Type */
export type ItineraryBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A single item of the City Directory Listing WP Post Type */
export type Listing = Content & {
  __typename?: "Listing";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A single item of the City Directory Listing WP Post Type */
export type ListingBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

export type Media = {
  /** The altText of the media item. */
  altText: Scalars["String"];
  /** The caption of the media item */
  caption?: Maybe<Scalars["String"]>;
  /** Various content flags for this media item, including legal disclaimer */
  contentFlags?: Maybe<ContentFlags>;
  /** The credit of the media item */
  credit?: Maybe<Scalars["String"]>;
  /** The original type of the media item */
  format?: Maybe<Scalars["String"]>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The original height of the media item */
  height?: Maybe<Scalars["Int"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /**
   * The publish datetime of the media item.
   * @deprecated Copilot media entities are unpublishable
   */
  pubDate?: Maybe<Scalars["String"]>;
  /** Quote for fancy images */
  quote?: Maybe<Scalars["String"]>;
  resizedUrl?: Maybe<Scalars["String"]>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the media item */
  title: Scalars["String"];
  transformedUrl?: Maybe<Scalars["String"]>;
  /** The url src of the media item */
  url?: Maybe<Scalars["String"]>;
  /** The original width of the media item */
  width?: Maybe<Scalars["Int"]>;
};

export type MediaCaptionArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

export type MediaCreditArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

export type MediaResizedUrlArgs = {
  h?: InputMaybe<Scalars["Int"]>;
  w?: InputMaybe<Scalars["Int"]>;
};

export type MediaTransformedUrlArgs = {
  format?: InputMaybe<Scalars["String"]>;
  h?: InputMaybe<Scalars["Int"]>;
  w?: InputMaybe<Scalars["Int"]>;
};

export type MediaUnion = Clip | Image | MixedMedia | Video;

/** Meta data associated with the item */
export type Meta = {
  __typename?: "Meta";
  /** The Facebook social data for the item */
  facebook?: Maybe<SocialFields>;
  /** The SEO data for the item */
  seo?: Maybe<Seo>;
  /** The Twitter social data for the item */
  twitter?: Maybe<SocialFields>;
};

/** A mixed media asset from WP */
export type MixedMedia = {
  __typename?: "MixedMedia";
  /** Base asset type -- if you don't know what you want, ask for this */
  default?: Maybe<Media>;
  /** lg breakpoint asset */
  lg?: Maybe<Media>;
  /** md breakpoint asset */
  md?: Maybe<Media>;
  /** sm breakpoint asset */
  sm?: Maybe<Media>;
  /** xl breakpoint asset */
  xl?: Maybe<Media>;
  /** xs breakpoint asset */
  xs?: Maybe<Media>;
  /** xxl breakpoint asset */
  xxl?: Maybe<Media>;
};

/** A single native article from Copilot */
export type NativeArticle = Content & {
  __typename?: "NativeArticle";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** Embedded items for this copilot article */
  bodyEmbeds?: Maybe<Array<Maybe<EmbedUnion>>>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The uri of the main (lede) image of an article. */
  lede?: Maybe<MediaUnion>;
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /**
   * Content considered "related" to this articleCopilot
   * @deprecated This is replaced with a new union based field (relatedContent), which handles a broader range of related content types (including new curatedLists).
   */
  related?: Maybe<Array<Maybe<Content>>>;
  /** Content from `related content` section of articles or galleries in Copilot. */
  relatedContent?: Maybe<Array<Maybe<RelatedUnion>>>;
  /** The SEO description for this copilot article */
  seoDescription?: Maybe<Scalars["String"]>;
  /** The SEO title for this copilot article */
  seoTitle?: Maybe<Scalars["String"]>;
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** The social media description for this copilot article */
  socialDescription?: Maybe<Scalars["String"]>;
  /** The social media title for this copilot article */
  socialTitle?: Maybe<Scalars["String"]>;
  /** The sub-channel for this copilot article */
  subChannel?: Maybe<Term>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A single native article from Copilot */
export type NativeArticleBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A Native Gallery */
export type NativeGallery = Content & {
  __typename?: "NativeGallery";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /**
   * Content considered "related" to this articleCopilot
   * @deprecated This is replaced with a new union based field (relatedContent), which handles a broader range of related content types (including new curatedLists).
   */
  related?: Maybe<Array<Maybe<Content>>>;
  /** Content from `related content` section of articles or galleries in Copilot. */
  relatedContent?: Maybe<Array<Maybe<RelatedUnion>>>;
  /** The number of slides the gallery */
  slideCount: Scalars["Int"];
  /** @deprecated Prefer slidesV2, which is a connection to a type with richer data structure */
  slides?: Maybe<GalleryItemsConnection>;
  slidesV2?: Maybe<GallerySlidesConnection>;
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** Slides sorted from a VotingResults query */
  sortedSlides?: Maybe<GallerySlidesConnection>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
  /**
   * Whether this is a votable Gallery
   * @deprecated This will now be available under the functionalTags field, but no longer as a boolean
   */
  voteable?: Maybe<Scalars["Boolean"]>;
  /** Voting tags associated with this gallery */
  votingTags?: Maybe<Array<Maybe<Term>>>;
};

/** A Native Gallery */
export type NativeGalleryBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A Native Gallery */
export type NativeGallerySlidesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A Native Gallery */
export type NativeGallerySlidesV2Args = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A Native Gallery */
export type NativeGallerySortedSlidesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Settings for the newsletter subscription modal */
export type NewsletterModal = {
  __typename?: "NewsletterModal";
  /** Image */
  backgroundImage?: Maybe<MediaUnion>;
  /** The interval at which an unsubscribed user should see the newsletter modal */
  frequency?: Maybe<Scalars["Int"]>;
  /** Whether the newsletter modal should display on the site */
  newsletterEnabled?: Maybe<Scalars["Boolean"]>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"];
};

/** A single offer */
export type Offer = {
  __typename?: "Offer";
  /** The type of offer ("purchase" or "trial") */
  offerType: OfferTypeEnum;
  /** The price of this offer */
  price?: Maybe<Scalars["Float"]>;
  /** The url for this offer */
  purchaseUri?: Maybe<Scalars["String"]>;
  /** The name of the seller for this offer */
  sellerName: Scalars["String"];
};

/** A single offer */
export type OfferPurchaseUriArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

export enum OfferTypeEnum {
  Purchase = "purchase",
  Trial = "trial",
}

/** Information about the header of a feed page */
export type PageHeader = {
  __typename?: "PageHeader";
  /** The hero image/term banner for home page and canonical categories */
  bannerImage?: Maybe<Scalars["String"]>;
  /** The mixed media version of the hero image/term banner for home page and canonical categories */
  bannerImageMixedMedia?: Maybe<MixedMedia>;
  /** Link of the home header background image */
  bannerLink?: Maybe<Scalars["String"]>;
  /** Home header background hover title */
  bannerLinkTitle?: Maybe<Scalars["String"]>;
  /** Dark/light theme changes color of logo and social icons in the home header */
  colorScheme?: Maybe<Scalars["String"]>;
  /** Whether the banner is large/expanded */
  largeBanner?: Maybe<Scalars["Boolean"]>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

/** A single person */
export type Person = {
  __typename?: "Person";
  /** The bio of the person */
  bio?: Maybe<Scalars["String"]>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The year a person ended their role */
  endYear?: Maybe<Scalars["String"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The name of the entity */
  name: Scalars["String"];
  /** A list of the roles for the person */
  roles?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Social media links for the person */
  socialMediaHandles?: Maybe<SocialMedia>;
  /** The year a person started their role */
  startYear?: Maybe<Scalars["String"]>;
  /** The title of the person as defined by a brand */
  title?: Maybe<Scalars["String"]>;
};

/** A single photographer */
export type Photographer = {
  __typename?: "Photographer";
  /** The ID of an object */
  id: Scalars["ID"];
  /** The name of the entity */
  name: Scalars["String"];
  /** The uri of the avatar image of the contributor */
  photosTout?: Maybe<MediaUnion>;
  /** The url of the contributor */
  url?: Maybe<Scalars["String"]>;
};

/** A single product */
export type Product = {
  __typename?: "Product";
  /** The brand of this product */
  brand?: Maybe<Brand>;
  /** The color of the product */
  color?: Maybe<Scalars["String"]>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** Description of the product */
  description?: Maybe<Scalars["String"]>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The Global Trade Identification Number (defined at www.gtin.info) */
  gtin?: Maybe<Scalars["String"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The Manufacturer Part Number */
  mpn?: Maybe<Scalars["String"]>;
  /** The name of the entity */
  name: Scalars["String"];
  /** The url of the manufacturer */
  oemLink?: Maybe<Scalars["String"]>;
  /** List of offers associated with this product */
  offers?: Maybe<Array<Maybe<Offer>>>;
  /** The promotional photo associated with this product */
  photosTout?: Maybe<MediaUnion>;
  /** The general type of product (e.g. Blazer/Jacket) */
  productType?: Maybe<Scalars["String"]>;
};

/** A single Promoted Content Item */
export type PromotedContent = {
  __typename?: "PromotedContent";
  /** Term */
  channel?: Maybe<Term>;
  /** cneID */
  cneID?: Maybe<Scalars["ID"]>;
  /** Represents a video post type */
  isVideo?: Maybe<Scalars["Boolean"]>;
  /** Image */
  photosTout?: Maybe<MediaUnion>;
  /** Post sponsor of a promoted content item */
  postSponsor?: Maybe<PostSponsor>;
  /** Sub title of a promoted content item */
  subTitle?: Maybe<Scalars["String"]>;
  /** Title */
  title: Scalars["String"];
  /** Link */
  url?: Maybe<Scalars["String"]>;
};

export type PromotedItemUnion = CneVideo | PromotedContent;

export type RelatedUnion =
  | ArticleCopilot
  | CneVideoV2
  | CuratedList
  | ExternalLinkCopilot
  | GalleryCopilot;

/** A review */
export type Review = {
  __typename?: "Review";
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** The body of the review */
  body: Scalars["String"];
  /** Embedded items for this copilot review */
  bodyEmbeds?: Maybe<Array<Maybe<EmbedUnion>>>;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** The title of the review */
  title?: Maybe<Scalars["String"]>;
};

export type Root = {
  __typename?: "Root";
  CNEvideo?: Maybe<CneVideo>;
  allBrands?: Maybe<AllBrandConnection>;
  allBreakers?: Maybe<Breakers>;
  allCategories?: Maybe<Array<Maybe<Term>>>;
  allContent?: Maybe<AllContentConnection>;
  allMedia?: Maybe<AllMediaConnection>;
  allSeasons?: Maybe<AllSeasonConnection>;
  /** @deprecated "Article" type has been deprecated in favor of "ArticleCopilot" */
  article?: Maybe<Article>;
  articleCopilot?: Maybe<ArticleCopilot>;
  brand?: Maybe<Brand>;
  bundle?: Maybe<Bundle>;
  content?: Maybe<Content>;
  contributor?: Maybe<Contributor>;
  fashionGallery?: Maybe<FashionShowGallery>;
  fashionGalleryByType?: Maybe<FashionShowGallery>;
  fashionShowV2?: Maybe<FashionShowV2>;
  /** @deprecated "Gallery" type has been deprecated in favor of "GalleryCopilot" */
  gallery?: Maybe<Gallery>;
  galleryCopilot?: Maybe<GalleryCopilot>;
  /** @deprecated "GalleryV2" type has been deprecated in favor of "GalleryCopilot" */
  galleryV2?: Maybe<GalleryV2>;
  /** @deprecated "Itinerary" type has been removed. */
  itinerary?: Maybe<Itinerary>;
  /** @deprecated "Listing" type has been removed. Content will be visiable in "ArticleCopilot" */
  listing?: Maybe<Listing>;
  media?: Maybe<MediaUnion>;
  /** A native article sub-type */
  nativeArticle?: Maybe<NativeArticle>;
  /** A native gallery sub-type */
  nativeGallery?: Maybe<NativeGallery>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  root: Root;
  season?: Maybe<Season>;
  /** The site settings */
  settings?: Maybe<Settings>;
  specialProjects?: Maybe<SpecialProjects>;
  /** A special project article sub-type */
  specialProjectsCopilot?: Maybe<SpecialProjectsCopilot>;
  term?: Maybe<Term>;
  votingResults?: Maybe<Array<Maybe<GalleryCopilot>>>;
};

export type RootCnEvideoArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootAllBrandsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  hierarchy?: InputMaybe<Scalars["String"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchTerm?: InputMaybe<Scalars["String"]>;
  taxSlug?: InputMaybe<Scalars["String"]>;
  termSlug?: InputMaybe<Scalars["String"]>;
};

export type RootAllBreakersArgs = {
  taxSlug?: InputMaybe<Scalars["String"]>;
  termSlug?: InputMaybe<Scalars["String"]>;
};

export type RootAllCategoriesArgs = {
  hierarchy?: InputMaybe<Scalars["String"]>;
};

export type RootAllContentArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  exclude?: InputMaybe<ExcludeFilter>;
  filter?: InputMaybe<ContentFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  hierarchy?: InputMaybe<Scalars["String"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchTerm?: InputMaybe<Scalars["String"]>;
  taxSlug?: InputMaybe<Scalars["String"]>;
  termSlug?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RootAllMediaArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  hierarchy?: InputMaybe<Scalars["String"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchTerm?: InputMaybe<Scalars["String"]>;
  taxSlug?: InputMaybe<Scalars["String"]>;
  termSlug?: InputMaybe<Scalars["String"]>;
};

export type RootAllSeasonsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  hierarchy?: InputMaybe<Scalars["String"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchTerm?: InputMaybe<Scalars["String"]>;
  taxSlug?: InputMaybe<Scalars["String"]>;
  termSlug?: InputMaybe<Scalars["String"]>;
};

export type RootArticleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootArticleCopilotArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootBrandArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootBundleArgs = {
  identifier?: InputMaybe<Scalars["String"]>;
};

export type RootContentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootContributorArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type RootFashionGalleryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootFashionGalleryByTypeArgs = {
  brandSlug: Scalars["String"];
  galleryType: FashionGalleryTypeEnum;
  seasonSlug: Scalars["String"];
};

export type RootFashionShowV2Args = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootGalleryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootGalleryCopilotArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootGalleryV2Args = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootItineraryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootListingArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootMediaArgs = {
  id: Scalars["ID"];
};

export type RootNativeArticleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
};

export type RootNativeGalleryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
};

export type RootNodeArgs = {
  id: Scalars["ID"];
};

export type RootSeasonArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootSpecialProjectsArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
  url?: InputMaybe<Scalars["String"]>;
};

export type RootSpecialProjectsCopilotArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ContentStatusEnum>;
};

export type RootTermArgs = {
  hierarchy?: InputMaybe<Scalars["String"]>;
};

export type RootVotingResultsArgs = {
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  first: Scalars["Int"];
  galleryId: Scalars["String"];
};

/** The SEO values for the item */
export type Seo = {
  __typename?: "SEO";
  /** The SEO description for the item */
  description?: Maybe<Scalars["String"]>;
  /** The list of SEO keywords for the item */
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The SEO title for the item */
  title?: Maybe<Scalars["String"]>;
};

/** An single season */
export type Season = {
  __typename?: "Season";
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this season */
  _cursor_?: Maybe<Scalars["String"]>;
  /** Whether the season is active or not */
  active?: Maybe<Scalars["Boolean"]>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** Whether the season is featured or not */
  featured: Scalars["Boolean"];
  /** The ID of an object */
  id: Scalars["ID"];
  /** Whether the season is considered a "major" (i.e. couture, menswear, pre-fall, ready-to-wear, resort) */
  major: Scalars["Boolean"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The name of the entity */
  name: Scalars["String"];
  /** The photosTout for the season */
  photosTout?: Maybe<Image>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** Whether to show the calendar for this season */
  showCalendar?: Maybe<Scalars["Boolean"]>;
  /** The slug of the entity */
  slug: Scalars["String"];
  /** The type of the season */
  type: Scalars["String"];
  /** The url of the entity */
  url: Scalars["String"];
  /** The year of the season */
  year: Scalars["Int"];
};

/** The settings for the site */
export type Settings = {
  __typename?: "Settings";
  /** The expanded background for the site */
  expandedBackground?: Maybe<Scalars["Boolean"]>;
  /** The global interstitial interval */
  globalInterval?: Maybe<Scalars["Int"]>;
  /** The header scheme for the site */
  headerScheme?: Maybe<Scalars["String"]>;
  /** Whether to show the mobile app banner */
  mobileAppBanner?: Maybe<Scalars["Boolean"]>;
  /** The mobile interstitial interval */
  mobileInterstitialInterval?: Maybe<Scalars["Int"]>;
  /** The newsletter modal settings for the site */
  newsletterModal?: Maybe<NewsletterModal>;
  /** The tablet interstitial interval */
  tabletInterstitialInterval?: Maybe<Scalars["Int"]>;
};

/** A slide item */
export type Slide = SlideInterface & {
  __typename?: "Slide";
  /** The caption of the slide */
  caption?: Maybe<Scalars["String"]>;
  /** The clip associated with this slide */
  clip?: Maybe<Clip>;
  /** Various content flags for this slide, including legal disclaimer */
  contentFlags: ContentFlags;
  /** The credit of the slide */
  credit?: Maybe<Scalars["String"]>;
  /** The description of the slide */
  description?: Maybe<Scalars["String"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The people associated with the slide */
  people?: Maybe<Array<Maybe<Person>>>;
  /** The media associated with the slide */
  photosTout?: Maybe<MediaUnion>;
  /** The product associated with this slide */
  product?: Maybe<Product>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the slide */
  title?: Maybe<Scalars["String"]>;
};

/** A slide item */
export type SlideCaptionArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A slide item */
export type SlideCreditArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

export type SlideInterface = {
  /** The caption of the slide */
  caption?: Maybe<Scalars["String"]>;
  /** The clip associated with this slide */
  clip?: Maybe<Clip>;
  /** Various content flags for this slide, including legal disclaimer */
  contentFlags: ContentFlags;
  /** The credit of the slide */
  credit?: Maybe<Scalars["String"]>;
  /** The description of the slide */
  description?: Maybe<Scalars["String"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The people associated with the slide */
  people?: Maybe<Array<Maybe<Person>>>;
  /** The media associated with the slide */
  photosTout?: Maybe<MediaUnion>;
  /** The product associated with this slide */
  product?: Maybe<Product>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the slide */
  title?: Maybe<Scalars["String"]>;
};

export type SlideInterfaceCaptionArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

export type SlideInterfaceCreditArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

export type SlideUnion = CollectionSlide | Slide;

/** Custom Social Fields */
export type SocialFields = {
  __typename?: "SocialFields";
  /** Share text of the item */
  description?: Maybe<Scalars["String"]>;
  /** Share Image of the item */
  imageURL?: Maybe<Scalars["String"]>;
  /** Share title of the item */
  title?: Maybe<Scalars["String"]>;
};

/** Social Media Fields */
export type SocialMedia = {
  __typename?: "SocialMedia";
  /** Person's google handle or link */
  google?: Maybe<Scalars["String"]>;
  /** Person's instagram handle or link */
  instagram?: Maybe<Scalars["String"]>;
  /** Person's linkedin handle or link */
  linkedin?: Maybe<Scalars["String"]>;
  /** Person's pinterest handle or link */
  pinterest?: Maybe<Scalars["String"]>;
  /** Person's tumblr handle or link */
  tumblr?: Maybe<Scalars["String"]>;
  /** Person's twitter handle or link */
  twitter?: Maybe<Scalars["String"]>;
  /** Person's vogue handle or link */
  vogue?: Maybe<Scalars["String"]>;
  /** Person's wordpress handle or link */
  wordpress?: Maybe<Scalars["String"]>;
};

/** Possible Social Networks with custom share data */
export type SocialProviders = {
  __typename?: "SocialProviders";
  /** Facebook fields */
  facebook?: Maybe<SocialFields>;
  /** Twitter fields */
  twitter?: Maybe<SocialFields>;
};

/** An single item of the Special Project WP Post Type */
export type SpecialProjects = Content & {
  __typename?: "SpecialProjects";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The embedded content in the body of the item. */
  bodyEmbeds?: Maybe<Array<Maybe<EmbedUnion>>>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** List of fancy settings */
  displaySettings?: Maybe<
    Array<Maybe<Array<Maybe<Scalars["FancySettingsType"]>>>>
  >;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** Hero media */
  heroMedia?: Maybe<Array<Maybe<MixedMedia>>>;
  /** Subtitle for a hero in a fancy */
  heroSubtitle?: Maybe<Scalars["String"]>;
  /** Title for a hero in a fancy */
  heroTitle?: Maybe<Scalars["String"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** List of photos */
  photoGrid?: Maybe<Array<Maybe<Image>>>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /**
   * Sponsor of the post
   * @deprecated Deprecated in favor of the "ContentFlags.sponsored" field
   */
  postSponsor?: Maybe<PostSponsor>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** Related story IDs */
  relatedStories?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** Custom post template for a fancy */
  template?: Maybe<FancyTemplateType>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
  /** Video media */
  videoMedia?: Maybe<MediaUnion>;
};

/** An single item of the Special Project WP Post Type */
export type SpecialProjectsBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A single "projects" article from Copilot */
export type SpecialProjectsCopilot = Content & {
  __typename?: "SpecialProjectsCopilot";
  /** The UTC/GMT modification datetime of the item in ISO 8601 format. */
  GMTModDate?: Maybe<Scalars["String"]>;
  /** The UTC/GMT publish datetime of the item in ISO 8601 format. */
  GMTPubDate: Scalars["String"];
  /** A similar cursor to what you might find in a connection view of this single content */
  _cursor_?: Maybe<Scalars["String"]>;
  /** The body (article) of the item. */
  body?: Maybe<Scalars["String"]>;
  /** The channel (fashion, lifestyle, etc.) of the item */
  channel?: Maybe<Term>;
  /** List of channels for the item */
  channels: Array<Maybe<Term>>;
  /**
   * Various content flags for the item
   * @deprecated These fields have been deprecated in favor of using functional-tags
   */
  contentFlags: ContentFlags;
  /** The contributors of the item. */
  contributor?: Maybe<ContributorRoles>;
  /** The Copilot ID of this entity. */
  copilotId?: Maybe<Scalars["String"]>;
  /** The dek of the item. */
  dek?: Maybe<Scalars["String"]>;
  /** The type of Feedcard view. */
  feedcardRepresentation?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The uri of the secondary (story) image of the item. */
  photosLede?: Maybe<MediaUnion>;
  /** The uri of the main (featured) image of the item. */
  photosTout?: Maybe<MediaUnion>;
  /** The promotional dek of the item. */
  promoDek?: Maybe<Scalars["String"]>;
  /** The promotional hed (title) of the item. */
  promoTitle?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the item.
   * @deprecated This field resolves to different formats/timezones depending on Wordpress vs. Copilot origin and has been deprecated in favor of "GMTPubDate".
   */
  pubDate: Scalars["String"];
  /** Content from `related content` section of articles or galleries in Copilot. */
  relatedContent?: Maybe<Array<Maybe<RelatedUnion>>>;
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * The supported various providers of socialism.
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the item. */
  title: Scalars["String"];
  /** The publish url of the item. */
  url?: Maybe<Scalars["String"]>;
};

/** A single "projects" article from Copilot */
export type SpecialProjectsCopilotBodyArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** A single taxonomy */
export type Taxonomy = {
  __typename?: "Taxonomy";
  /** The slug of the entity */
  slug: Scalars["String"];
};

/** A single term */
export type Term = {
  __typename?: "Term";
  /** The excerpt describing the term */
  description?: Maybe<Scalars["String"]>;
  /** Whether this term has at least 3 images associated with it */
  hasDynamicGallery?: Maybe<Scalars["Boolean"]>;
  /** The full hierarchy for this term (Copilot categories only). For example: "channels/culture/movies" */
  hierarchy?: Maybe<Scalars["String"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** The name of the entity */
  name: Scalars["String"];
  /** Information about styles and customizations in the page header */
  pageHeader?: Maybe<PageHeader>;
  /** Possible parent term */
  parent?: Maybe<Term>;
  /** Show hub label on Feedcard */
  promotedHub?: Maybe<Scalars["Boolean"]>;
  /** The slug of the entity */
  slug: Scalars["String"];
  /**
   * Social meta data for this term
   * @deprecated Legacy WP fields for content-level social fields which have moved to a better organization on meta
   */
  socialData?: Maybe<SocialProviders>;
  /**
   * The taxonomy
   * @deprecated This field has been deprecated in favor of the term hierarchy.
   */
  taxonomy?: Maybe<Taxonomy>;
  /** The url of the entity */
  url: Scalars["String"];
};

/** An video asset from WP */
export type Video = Media & {
  __typename?: "Video";
  /** The altText of the media item. */
  altText: Scalars["String"];
  /** CMS autoplay flag */
  autoplay?: Maybe<Scalars["Boolean"]>;
  /** The caption of the media item */
  caption?: Maybe<Scalars["String"]>;
  /** Various content flags for this media item, including legal disclaimer */
  contentFlags?: Maybe<ContentFlags>;
  /** The credit of the media item */
  credit?: Maybe<Scalars["String"]>;
  /** The original duration video in seconds */
  duration?: Maybe<Scalars["Int"]>;
  /** The original type of the media item */
  format?: Maybe<Scalars["String"]>;
  /** List of functional tags */
  functionalTags: Array<Term>;
  /** The original height of the media item */
  height?: Maybe<Scalars["Int"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** SEO & social metadata */
  meta?: Maybe<Meta>;
  /** CMS mute flag */
  mute?: Maybe<Scalars["Boolean"]>;
  /** Still holding image for video */
  poster?: Maybe<Scalars["String"]>;
  /**
   * The publish datetime of the media item.
   * @deprecated Copilot media entities are unpublishable
   */
  pubDate?: Maybe<Scalars["String"]>;
  /** Quote for fancy images */
  quote?: Maybe<Scalars["String"]>;
  resizedUrl?: Maybe<Scalars["String"]>;
  /** List of tags */
  tags: Array<Term>;
  /** The title of the media item */
  title: Scalars["String"];
  transformedUrl?: Maybe<Scalars["String"]>;
  /** The url src of the media item */
  url?: Maybe<Scalars["String"]>;
  /** The original width of the media item */
  width?: Maybe<Scalars["Int"]>;
};

/** An video asset from WP */
export type VideoCaptionArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** An video asset from WP */
export type VideoCreditArgs = {
  enableEnhancedLinks?: InputMaybe<Scalars["Boolean"]>;
  enhancedLinks?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
};

/** An video asset from WP */
export type VideoResizedUrlArgs = {
  h?: InputMaybe<Scalars["Int"]>;
  w?: InputMaybe<Scalars["Int"]>;
};

/** An video asset from WP */
export type VideoTransformedUrlArgs = {
  format?: InputMaybe<Scalars["String"]>;
  h?: InputMaybe<Scalars["Int"]>;
  w?: InputMaybe<Scalars["Int"]>;
};

export type ExcludeCategoryType = {
  /** Exclude content based on a category hierarchy path */
  hierarchy?: InputMaybe<Scalars["String"]>;
};

/** Post Sponsor Fields */
export type PostSponsor = {
  __typename?: "postSponsor";
  /** Hide label option */
  hideLabel?: Maybe<Scalars["Boolean"]>;
  /** Label prefix of the sponsor */
  label: Scalars["String"];
  /** URL of the sponsor logo */
  logo?: Maybe<Scalars["String"]>;
  /** The name of the entity */
  name: Scalars["String"];
  /** The url of the entity */
  url: Scalars["String"];
};

export type GetFashionShowCollectionQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type GetFashionShowCollectionQuery = {
  __typename?: "Root";
  fashionShowV2?: {
    __typename?: "FashionShowV2";
    title: string;
    galleries?: {
      __typename?: "FashionShowGalleries";
      collection?: {
        __typename?: "FashionShowGallery";
        title: string;
        slidesV2?: {
          __typename?: "GallerySlidesConnection";
          slide?: Array<
            | {
                __typename?: "CollectionSlide";
                photosTout?:
                  | { __typename?: "Clip" }
                  | { __typename?: "Image"; url?: string | null }
                  | { __typename?: "MixedMedia" }
                  | { __typename?: "Video" }
                  | null;
              }
            | {
                __typename?: "Slide";
                photosTout?:
                  | { __typename?: "Clip" }
                  | { __typename?: "Image"; url?: string | null }
                  | { __typename?: "MixedMedia" }
                  | { __typename?: "Video" }
                  | null;
              }
            | null
          > | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GalleryFragmentFragment = {
  __typename?: "FashionShowGallery";
  title: string;
  slidesV2?: {
    __typename?: "GallerySlidesConnection";
    slide?: Array<
      | {
          __typename?: "CollectionSlide";
          photosTout?:
            | { __typename?: "Clip" }
            | { __typename?: "Image"; url?: string | null }
            | { __typename?: "MixedMedia" }
            | { __typename?: "Video" }
            | null;
        }
      | {
          __typename?: "Slide";
          photosTout?:
            | { __typename?: "Clip" }
            | { __typename?: "Image"; url?: string | null }
            | { __typename?: "MixedMedia" }
            | { __typename?: "Video" }
            | null;
        }
      | null
    > | null;
  } | null;
};

export type ImageFieldsFragment = { __typename?: "Image"; url?: string | null };

export type GetSeasonShowsQueryVariables = Exact<{
  season: Scalars["String"];
}>;

export type GetSeasonShowsQuery = {
  __typename?: "Root";
  allContent?: {
    __typename?: "AllContentConnection";
    Content?: Array<
      | {
          __typename?: "Article";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "ArticleCopilot";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "Bundle";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "CNEVideo";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "CNEVideoV2";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "CuratedList";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "CuratedSearch";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "FashionShowGallery";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "FashionShowV2";
          instantShow?: boolean | null;
          id: string;
          url?: string | null;
          title: string;
          slug: string;
          brand?: { __typename?: "Brand"; name: string } | null;
          photosTout?:
            | { __typename?: "Clip" }
            | { __typename?: "Image"; url?: string | null }
            | { __typename?: "MixedMedia" }
            | { __typename?: "Video" }
            | null;
        }
      | {
          __typename?: "Gallery";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "GalleryCopilot";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "GalleryV2";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "Itinerary";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "Listing";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "NativeArticle";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "NativeGallery";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "SpecialProjects";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | {
          __typename?: "SpecialProjectsCopilot";
          id: string;
          url?: string | null;
          title: string;
          slug: string;
        }
      | null
    > | null;
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: string | null;
      endCursor?: string | null;
    };
  } | null;
};

export type GetSeasonsQueryVariables = Exact<{ [key: string]: never }>;

export type GetSeasonsQuery = {
  __typename?: "Root";
  allSeasons?: {
    __typename?: "AllSeasonConnection";
    Season?: { __typename?: "Season"; slug: string };
  };
};

export const ImageFieldsFragmentDoc = gql`
  fragment imageFields on Image {
    url
  }
`;
export const GalleryFragmentFragmentDoc = gql`
  fragment GalleryFragment on FashionShowGallery {
    title
    slidesV2 {
      ... on GallerySlidesConnection {
        slide {
          ... on Slide {
            photosTout {
              ...imageFields
            }
          }
          ... on CollectionSlide {
            photosTout {
              ...imageFields
            }
          }
        }
      }
    }
  }
  ${ImageFieldsFragmentDoc}
`;
export const GetFashionShowCollectionDocument = gql`
  query getFashionShowCollection($slug: String!) {
    fashionShowV2(slug: "$slug") {
      title
      galleries {
        collection {
          ...GalleryFragment
        }
      }
    }
  }
  ${GalleryFragmentFragmentDoc}
`;
export const GetSeasonShowsDocument = gql`
  query getSeasonShows($season: String!) {
    allContent(
      type: ["FashionShowV2"]
      first: 1000
      filter: { season: { slug: $season } }
    ) {
      Content {
        id
        url
        title
        slug
        ... on FashionShowV2 {
          instantShow
          brand {
            name
          }
          photosTout {
            ... on Image {
              url
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
export const GetSeasonsDocument = gql`
  query getSeasons {
    allSeasons {
      Season {
        slug
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    getFashionShowCollection(
      variables: GetFashionShowCollectionQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetFashionShowCollectionQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetFashionShowCollectionQuery>(
            GetFashionShowCollectionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getFashionShowCollection",
        "query"
      );
    },
    getSeasonShows(
      variables: GetSeasonShowsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetSeasonShowsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSeasonShowsQuery>(
            GetSeasonShowsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getSeasonShows",
        "query"
      );
    },
    getSeasons(
      variables?: GetSeasonsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetSeasonsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSeasonsQuery>(GetSeasonsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getSeasons",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
