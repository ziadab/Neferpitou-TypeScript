import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  /** Represents untyped JSON */
  JSON: any;
  Upload: any;
};

export type Accommodation = {
  __typename?: 'Accommodation';
  accommodation_availabilities?: Maybe<AccommodationAvailabilityConnection>;
  accommodation_availability_status?: Maybe<Scalars['JSON']>;
  address_detail?: Maybe<AddressInfo>;
  assigned_applications?: Maybe<OpportunityApplicationConnection>;
  benefits?: Maybe<Array<Maybe<ConstantMap>>>;
  contact_number?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  host_image?: Maybe<ImageType>;
  host_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<ImageType>>>;
  lc?: Maybe<Office>;
  number_of_rooms?: Maybe<Scalars['String']>;
  occupants?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  todo_type?: Maybe<TodoType>;
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type AccommodationAccommodation_AvailabilitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type AccommodationAssigned_ApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type AccommodationAssignment = {
  __typename?: 'AccommodationAssignment';
  accommodation?: Maybe<Accommodation>;
  end_date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  opportunity_application?: Maybe<OpportunityApplication>;
  start_date?: Maybe<Scalars['Date']>;
};

/** The connection type for AccommodationAssignment. */
export type AccommodationAssignmentConnection = {
  __typename?: 'AccommodationAssignmentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AccommodationAssignmentEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AccommodationAssignment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type AccommodationAssignmentEdge = {
  __typename?: 'AccommodationAssignmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AccommodationAssignment>;
};

export type AccommodationAssignmentFilter = {
  accommodation_end_date?: InputMaybe<DateInput>;
  accommodation_id?: InputMaybe<Scalars['Int']>;
  accommodation_start_date?: InputMaybe<DateInput>;
  q?: InputMaybe<Scalars['String']>;
};

export type AccommodationAssignmentInput = {
  accommodation_id?: InputMaybe<Scalars['Int']>;
  end_date?: InputMaybe<Scalars['Date']>;
  opportunity_application_id?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['Date']>;
};

export type AccommodationAssignmentList = {
  __typename?: 'AccommodationAssignmentList';
  data?: Maybe<Array<Maybe<AccommodationAssignment>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type AccommodationAssignmentMutationQuery = {
  /** Create Accommodation Assignment */
  createAccommodationAssignment?: Maybe<AccommodationAssignment>;
  /** Delete Accommodation Assignment */
  deleteAccommodationAssignment?: Maybe<AccommodationAssignment>;
  /** Update Accommodation Assignment */
  updateAccommodationAssignment?: Maybe<AccommodationAssignment>;
};


export type AccommodationAssignmentMutationQueryCreateAccommodationAssignmentArgs = {
  accommodation_assignment?: InputMaybe<AccommodationAssignmentInput>;
};


export type AccommodationAssignmentMutationQueryDeleteAccommodationAssignmentArgs = {
  id: Scalars['ID'];
};


export type AccommodationAssignmentMutationQueryUpdateAccommodationAssignmentArgs = {
  accommodation_assignment?: InputMaybe<AccommodationAssignmentInput>;
  id: Scalars['ID'];
};

export type AccommodationAssignmentQuery = {
  accommodationScheduleList?: Maybe<Array<Maybe<AccommodationAssignment>>>;
  assignedApplications?: Maybe<AccommodationAssignmentList>;
};


export type AccommodationAssignmentQueryAccommodationScheduleListArgs = {
  accommodation_id?: InputMaybe<Scalars['Int']>;
  end_date?: InputMaybe<Scalars['Date']>;
  start_date?: InputMaybe<Scalars['Date']>;
};


export type AccommodationAssignmentQueryAssignedApplicationsArgs = {
  filters?: InputMaybe<AccommodationAssignmentFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
};

export type AccommodationAvailability = {
  __typename?: 'AccommodationAvailability';
  created_at?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  start_date?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** The connection type for AccommodationAvailability. */
export type AccommodationAvailabilityConnection = {
  __typename?: 'AccommodationAvailabilityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AccommodationAvailabilityEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AccommodationAvailability>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type AccommodationAvailabilityEdge = {
  __typename?: 'AccommodationAvailabilityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AccommodationAvailability>;
};

export type AccommodationAvailabilityInput = {
  accommodation_id: Scalars['ID'];
  end_date?: InputMaybe<Scalars['Date']>;
  start_date?: InputMaybe<Scalars['Date']>;
};

export type AccommodationAvailabilityMutationQuery = {
  /** Create Accommodation Availability */
  createAccommodationAvailability?: Maybe<AccommodationAvailability>;
  deleteAccommodationAvailability?: Maybe<AccommodationAvailability>;
  /** Update Accommodation Availability */
  updateAccommodationAvailability?: Maybe<AccommodationAvailability>;
};


export type AccommodationAvailabilityMutationQueryCreateAccommodationAvailabilityArgs = {
  accommodation_availability?: InputMaybe<AccommodationAvailabilityInput>;
};


export type AccommodationAvailabilityMutationQueryDeleteAccommodationAvailabilityArgs = {
  id: Scalars['ID'];
};


export type AccommodationAvailabilityMutationQueryUpdateAccommodationAvailabilityArgs = {
  accommodation_availability?: InputMaybe<AccommodationAvailabilityInput>;
  id: Scalars['ID'];
};

export type AccommodationFilter = {
  end_date?: InputMaybe<Scalars['Date']>;
  lc_id?: InputMaybe<Scalars['Int']>;
  number_of_rooms?: InputMaybe<RangeInput>;
  occupants?: InputMaybe<RangeInput>;
  q?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['Date']>;
};

export type AccommodationInput = {
  address_detail_attributes?: InputMaybe<AddressInput>;
  benefits?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  contact_number?: InputMaybe<Scalars['String']>;
  country_code?: InputMaybe<Scalars['String']>;
  host_image_file?: InputMaybe<ImageInput>;
  host_name?: InputMaybe<Scalars['String']>;
  images_file?: InputMaybe<Array<InputMaybe<ImageInput>>>;
  lc_id?: InputMaybe<Scalars['Int']>;
  number_of_rooms?: InputMaybe<Scalars['Int']>;
  occupants?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AccommodationList = {
  __typename?: 'AccommodationList';
  data?: Maybe<Array<Maybe<Accommodation>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type AccommodationMutationQuery = {
  /** Create Picture for Accommodation */
  addPictureToAccommodation?: Maybe<Picture>;
  /** Create Accommodation */
  createAccommodation?: Maybe<Accommodation>;
  deleteAccommodation?: Maybe<Accommodation>;
  /** Create Picture for Accommodation */
  removePictureFromAccommodation?: Maybe<Picture>;
  /** Update Accommodation */
  updateAccommodation?: Maybe<Accommodation>;
};


export type AccommodationMutationQueryAddPictureToAccommodationArgs = {
  id: Scalars['ID'];
  picture?: InputMaybe<PictureInput>;
};


export type AccommodationMutationQueryCreateAccommodationArgs = {
  accommodation?: InputMaybe<AccommodationInput>;
};


export type AccommodationMutationQueryDeleteAccommodationArgs = {
  id: Scalars['ID'];
};


export type AccommodationMutationQueryRemovePictureFromAccommodationArgs = {
  id: Scalars['ID'];
};


export type AccommodationMutationQueryUpdateAccommodationArgs = {
  accommodation?: InputMaybe<AccommodationInput>;
  id: Scalars['ID'];
};

export type AccommodationQuery = {
  accommodations?: Maybe<AccommodationList>;
  getAccommodation?: Maybe<Accommodation>;
};


export type AccommodationQueryAccommodationsArgs = {
  end_date?: InputMaybe<Scalars['Date']>;
  filters?: InputMaybe<AccommodationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['Date']>;
};


export type AccommodationQueryGetAccommodationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type AddressInfo = {
  __typename?: 'AddressInfo';
  address_1?: Maybe<Scalars['String']>;
  address_2?: Maybe<Scalars['String']>;
  address_city?: Maybe<City>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  country_name?: Maybe<Scalars['String']>;
  google_place_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  postcode?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  address_1?: InputMaybe<Scalars['String']>;
  address_2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  city_id?: InputMaybe<Scalars['Int']>;
  country?: InputMaybe<Scalars['String']>;
  google_place_id?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Int']>;
  lng?: InputMaybe<Scalars['Int']>;
  postcode?: InputMaybe<Scalars['String']>;
};

export enum AlignmentTypes {
  Exchange = 'exchange',
  Recruitment = 'recruitment'
}

export type ApplicationFilter = {
  backgrounds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  branch?: InputMaybe<Scalars['Int']>;
  campaign_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_at?: InputMaybe<DateInput>;
  custom_status_exist?: InputMaybe<Scalars['Boolean']>;
  /** Removed. Use custom_status_ids instead */
  custom_status_id?: InputMaybe<Scalars['Int']>;
  custom_status_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  date_an_signed?: InputMaybe<DateInput>;
  date_approved?: InputMaybe<DateInput>;
  date_matched?: InputMaybe<DateInput>;
  date_realized?: InputMaybe<DateInput>;
  date_remote_realized?: InputMaybe<DateInput>;
  /** Available types - short, medium, long */
  duration_type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  earliest_start_date?: InputMaybe<DateInput>;
  experience_end_date?: InputMaybe<DateInput>;
  experience_start_date?: InputMaybe<DateInput>;
  favourite?: InputMaybe<Scalars['Boolean']>;
  for?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  graduation_date?: InputMaybe<DateInput>;
  has_managers?: InputMaybe<Scalars['Boolean']>;
  has_profile_photo?: InputMaybe<Scalars['Boolean']>;
  has_started_standards_survey?: InputMaybe<Scalars['Boolean']>;
  has_stories?: InputMaybe<Scalars['Boolean']>;
  is_aiesecer?: InputMaybe<Scalars['Boolean']>;
  is_ge?: InputMaybe<Scalars['Boolean']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  last_interaction?: InputMaybe<DateInput>;
  my?: InputMaybe<Scalars['String']>;
  nationalities?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nps_grade_value?: InputMaybe<RangeInput>;
  opportunities?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  opportunity_committee?: InputMaybe<Scalars['Int']>;
  opportunity_home_lc?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  opportunity_home_mc?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  opportunity_home_region?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  opportunity_id?: InputMaybe<Scalars['Int']>;
  organisation?: InputMaybe<Scalars['Int']>;
  partner_type?: InputMaybe<Array<PartnerTypes>>;
  person_committee?: InputMaybe<Scalars['Int']>;
  person_home_lc?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  person_home_mc?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  person_home_region?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  person_id?: InputMaybe<Scalars['Int']>;
  programmes?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  q?: InputMaybe<Scalars['String']>;
  rejection_reasons?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  remote_opportunity?: InputMaybe<Scalars['Boolean']>;
  remote_start_date?: InputMaybe<DateInput>;
  scheduled_interview?: InputMaybe<DateInput>;
  sdg_goals?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sdg_targets?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  share_stories_on_blog?: InputMaybe<Scalars['Boolean']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  slots?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sort?: InputMaybe<ApplicationSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  standards?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  status?: InputMaybe<Scalars['String']>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  study_levels?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sub_products?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  testimonial_filled_at?: InputMaybe<DateInput>;
  work_types?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ApplicationMetaType = {
  __typename?: 'ApplicationMetaType';
  answers?: Maybe<Scalars['String']>;
  approved_by?: Maybe<Person>;
  date_approval_broken?: Maybe<Scalars['DateTime']>;
  date_approved?: Maybe<Scalars['DateTime']>;
  date_completed?: Maybe<Scalars['DateTime']>;
  date_ep_approved?: Maybe<Scalars['DateTime']>;
  date_ldm_completed?: Maybe<Scalars['DateTime']>;
  date_matched?: Maybe<Scalars['DateTime']>;
  date_nps_completed?: Maybe<Scalars['DateTime']>;
  date_pay_by_cash?: Maybe<Scalars['String']>;
  date_realisation_broke?: Maybe<Scalars['DateTime']>;
  date_realized?: Maybe<Scalars['DateTime']>;
  date_rejected?: Maybe<Scalars['DateTime']>;
  date_remote_realization_broken_at?: Maybe<Scalars['DateTime']>;
  date_tn_approved?: Maybe<Scalars['DateTime']>;
  date_withdrawn?: Maybe<Scalars['String']>;
  ep_approved_by?: Maybe<Person>;
  gip_answer?: Maybe<Scalars['String']>;
  host_name?: Maybe<Scalars['String']>;
  host_number?: Maybe<Scalars['String']>;
  manager_name?: Maybe<Scalars['String']>;
  manager_number?: Maybe<Scalars['String']>;
  matched_by?: Maybe<Person>;
  pay_by_cash?: Maybe<Scalars['Boolean']>;
  realized_by?: Maybe<Person>;
  rejected_by?: Maybe<Person>;
  rejected_on_version?: Maybe<Scalars['Int']>;
  remote_end_date?: Maybe<Scalars['DateTime']>;
  remote_realization_broken_by?: Maybe<Person>;
  remote_realized_at?: Maybe<Scalars['DateTime']>;
  remote_realized_by?: Maybe<Person>;
  remote_start_date?: Maybe<Scalars['DateTime']>;
  reopened?: Maybe<Scalars['String']>;
  system_comments?: Maybe<Scalars['String']>;
  system_rated_at?: Maybe<Scalars['DateTime']>;
  system_rating?: Maybe<Scalars['String']>;
  testimonial?: Maybe<Scalars['String']>;
  testimonial_filled_at?: Maybe<Scalars['DateTime']>;
  tn_approved_by?: Maybe<Person>;
  vd_blog_url?: Maybe<Scalars['String']>;
};

export type ApplicationQuestionnaire = {
  __typename?: 'ApplicationQuestionnaire';
  answered_at?: Maybe<Scalars['Date']>;
  answers?: Maybe<Scalars['JSON']>;
  attachments?: Maybe<Attachment>;
  deadline?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  questionnaire?: Maybe<Questionnaire>;
};

/** The connection type for ApplicationQuestionnaire. */
export type ApplicationQuestionnaireConnection = {
  __typename?: 'ApplicationQuestionnaireConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ApplicationQuestionnaireEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ApplicationQuestionnaire>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type ApplicationQuestionnaireEdge = {
  __typename?: 'ApplicationQuestionnaireEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ApplicationQuestionnaire>;
};

export type ApplicationQuestionnaireInput = {
  /** Answers in the format {2: 'This is an answer', 3: {content: 'file content', filename: 'name of file'}} */
  answers?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ApplicationRemoteRealizeInput = {
  remote_end_date?: InputMaybe<Scalars['Date']>;
  remote_start_date?: InputMaybe<Scalars['Date']>;
};

export type ApplicationScorecard = {
  __typename?: 'ApplicationScorecard';
  application_scorecard_attributes?: Maybe<Array<Maybe<ApplicationScorecardAttributeType>>>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  person?: Maybe<Person>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ApplicationScorecardAttributeType = {
  __typename?: 'ApplicationScorecardAttributeType';
  id?: Maybe<Scalars['ID']>;
  score?: Maybe<Scalars['Int']>;
  scorecard_attribute?: Maybe<ScorecardAttributeType>;
};

export enum ApplicationSortOption {
  ApplicantName = 'applicant_name',
  AverageScore = 'average_score',
  CreatedAt = 'created_at',
  DateAnSigned = 'date_an_signed',
  DateApproved = 'date_approved',
  DateMatched = 'date_matched',
  DateRealized = 'date_realized',
  DurationType = 'duration_type',
  ExperienceEndDate = 'experience_end_date',
  ExperienceStartDate = 'experience_start_date',
  Favourite = 'favourite',
  FlightDate = 'flight_date',
  GraduationDate = 'graduation_date',
  HasStartedStandardsSurvey = 'has_started_standards_survey',
  HomeLcName = 'home_lc_name',
  HomeMcName = 'home_mc_name',
  HostLcName = 'host_lc_name',
  HostMcName = 'host_mc_name',
  IsGep = 'is_gep',
  LastActive = 'last_active',
  LdmGrade = 'ldm_grade',
  NpsGrade = 'nps_grade',
  OpportunityId = 'opportunity_id',
  OpportunityTitle = 'opportunity_title',
  OrganisationName = 'organisation_name',
  PaidAt = 'paid_at',
  PartnerType = 'partner_type',
  Product = 'product',
  RequiredBackgroundsPercentage = 'required_backgrounds_percentage',
  RequiredSkillsPercentage = 'required_skills_percentage',
  ScheduledInterview = 'scheduled_interview',
  SdgGoal = 'sdg_goal',
  SdgTarget = 'sdg_target',
  Slot = 'slot',
  Status = 'status',
  SubProduct = 'sub_product',
  UpdatedAt = 'updated_at'
}

export type Attachment = {
  __typename?: 'Attachment';
  attachable_id?: Maybe<Scalars['ID']>;
  attachable_type?: Maybe<Scalars['String']>;
  attached_by?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  file_content_type?: Maybe<Scalars['String']>;
  file_file_name?: Maybe<Scalars['String']>;
  file_file_size?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  tag?: Maybe<Scalars['String']>;
  /** url */
  url?: Maybe<Scalars['String']>;
};


export type AttachmentUrlArgs = {
  size?: InputMaybe<Scalars['String']>;
};

export type AttachmentInput = {
  attached_by?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['String']>;
  model_name?: InputMaybe<Scalars['String']>;
  record_id?: InputMaybe<Scalars['ID']>;
  tag?: InputMaybe<Scalars['String']>;
};

export type AttachmentMutationQuery = {
  /** Create attachment */
  createAttachment?: Maybe<Attachment>;
  deleteAttachment?: Maybe<Attachment>;
  /** Destroy Active storage attachment */
  deleteImage?: Maybe<ImageType>;
  /** Update attachment */
  updateAttachment?: Maybe<Attachment>;
};


export type AttachmentMutationQueryCreateAttachmentArgs = {
  attachment?: InputMaybe<AttachmentInput>;
};


export type AttachmentMutationQueryDeleteAttachmentArgs = {
  id: Scalars['ID'];
};


export type AttachmentMutationQueryDeleteImageArgs = {
  attachment_id?: InputMaybe<Scalars['Int']>;
};


export type AttachmentMutationQueryUpdateAttachmentArgs = {
  attachment?: InputMaybe<AttachmentInput>;
  id: Scalars['ID'];
};

export type AttachmentQuery = {
  currentPersonAttachment?: Maybe<Array<Maybe<Attachment>>>;
  getAttachment?: Maybe<Attachment>;
};


export type AttachmentQueryGetAttachmentArgs = {
  id: Scalars['ID'];
};

export type Attendee = {
  __typename?: 'Attendee';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type AutoAssignmentInput = {
  person_id: Scalars['Int'];
  position: Scalars['Int'];
};

export type AxpSettingsInput = {
  allow_push_notifications?: InputMaybe<Scalars['Boolean']>;
  share_contact_details?: InputMaybe<Scalars['Boolean']>;
  share_stories_on_blog?: InputMaybe<Scalars['Boolean']>;
};

export type BaseFilter = {
  q?: InputMaybe<Scalars['String']>;
};

export enum BaseSortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Branch = {
  __typename?: 'Branch';
  account_manager?: Maybe<Person>;
  address_detail?: Maybe<AddressInfo>;
  approved?: Maybe<Scalars['Boolean']>;
  billing_address?: Maybe<AddressInfo>;
  branch_employees?: Maybe<BranchEmployeeConnection>;
  branch_type?: Maybe<Scalars['String']>;
  company?: Maybe<Organisation>;
  contact_people?: Maybe<Array<Maybe<ContactPeopleType>>>;
  description?: Maybe<Scalars['String']>;
  home_lc?: Maybe<Office>;
  id: Scalars['ID'];
  invoices?: Maybe<InvoiceTypeConnection>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Branch>;
  permissions?: Maybe<BranchPermissionType>;
  programme_manager?: Maybe<Person>;
  scope?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['ID']>;
  status_string?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  vat_number?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};


export type BranchBranch_EmployeesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type BranchInvoicesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Branch. */
export type BranchConnection = {
  __typename?: 'BranchConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BranchEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Branch>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type BranchEdge = {
  __typename?: 'BranchEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Branch>;
};

export type BranchEmployee = {
  __typename?: 'BranchEmployee';
  access_type?: Maybe<Scalars['String']>;
  approved?: Maybe<Scalars['Boolean']>;
  branch?: Maybe<Branch>;
  id: Scalars['ID'];
  invitation_accepted?: Maybe<Scalars['Boolean']>;
  person?: Maybe<Person>;
  status?: Maybe<Scalars['String']>;
};

/** The connection type for BranchEmployee. */
export type BranchEmployeeConnection = {
  __typename?: 'BranchEmployeeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BranchEmployeeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<BranchEmployee>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type BranchEmployeeEdge = {
  __typename?: 'BranchEmployeeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<BranchEmployee>;
};

export type BranchEmployeeInput = {
  access_type?: InputMaybe<Scalars['String']>;
  approved?: InputMaybe<Scalars['Boolean']>;
};

export type BranchEmployeeMutationQuery = {
  /** Approve Branch Employee */
  approveBranchEmployee?: Maybe<BranchEmployee>;
  /**
   * Approve Branch Employee
   * @deprecated Use "approveBranchEmployee" field instead.
   */
  branchEmployeeApprove?: Maybe<BranchEmployee>;
  /**
   * Create Branch Employee
   * @deprecated Use "createBranchEmployee" field instead.
   */
  branchEmployeeCreate?: Maybe<BranchEmployee>;
  /**
   * Delete Branch Employee
   * @deprecated Use "deleteBranchEmployee" field instead.
   */
  branchEmployeeDelete?: Maybe<BranchEmployee>;
  /**
   * Reject Branch Employee
   * @deprecated Use "rejectBranchEmployee" field instead.
   */
  branchEmployeeReject?: Maybe<BranchEmployee>;
  /**
   * Update Branch Employee
   * @deprecated Use "updateBranchEmployee" field instead.
   */
  branchEmployeeUpdate?: Maybe<BranchEmployee>;
  /** Create Branch Employee */
  createBranchEmployee?: Maybe<BranchEmployee>;
  /** Delete Branch Employee */
  deleteBranchEmployee?: Maybe<BranchEmployee>;
  /** Reject Branch Employee */
  rejectBranchEmployee?: Maybe<BranchEmployee>;
  /** Update Branch Employee */
  updateBranchEmployee?: Maybe<BranchEmployee>;
};


export type BranchEmployeeMutationQueryApproveBranchEmployeeArgs = {
  id: Scalars['ID'];
};


export type BranchEmployeeMutationQueryBranchEmployeeApproveArgs = {
  id: Scalars['ID'];
};


export type BranchEmployeeMutationQueryBranchEmployeeCreateArgs = {
  branch_id?: InputMaybe<Scalars['Int']>;
  person_id?: InputMaybe<Scalars['Int']>;
};


export type BranchEmployeeMutationQueryBranchEmployeeDeleteArgs = {
  id: Scalars['ID'];
};


export type BranchEmployeeMutationQueryBranchEmployeeRejectArgs = {
  id: Scalars['ID'];
};


export type BranchEmployeeMutationQueryBranchEmployeeUpdateArgs = {
  branch_employee?: InputMaybe<BranchEmployeeInput>;
  id: Scalars['ID'];
};


export type BranchEmployeeMutationQueryCreateBranchEmployeeArgs = {
  branch_id: Scalars['Int'];
  person_id: Scalars['Int'];
};


export type BranchEmployeeMutationQueryDeleteBranchEmployeeArgs = {
  id: Scalars['ID'];
};


export type BranchEmployeeMutationQueryRejectBranchEmployeeArgs = {
  id: Scalars['ID'];
};


export type BranchEmployeeMutationQueryUpdateBranchEmployeeArgs = {
  branch_employee?: InputMaybe<BranchEmployeeInput>;
  id: Scalars['ID'];
};

export type BranchEmployeeQuery = {
  getBranchEmployee?: Maybe<BranchEmployee>;
  organisationEmployees?: Maybe<Array<Maybe<BranchEmployee>>>;
};


export type BranchEmployeeQueryGetBranchEmployeeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type BranchEmployeeQueryOrganisationEmployeesArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
};

export enum BranchEmployeeStatus {
  Approved = 'approved',
  Pending = 'pending',
  Rejected = 'rejected'
}

export type BranchInput = {
  address_detail_attributes?: InputMaybe<AddressInput>;
  billing_address_attributes?: InputMaybe<AddressInput>;
  contact_detail_attributes?: InputMaybe<ContactInput>;
  contact_people?: InputMaybe<Array<InputMaybe<ContactPeopleInput>>>;
  description?: InputMaybe<Scalars['String']>;
  home_lc_id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  scope?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  vat_number?: InputMaybe<Scalars['String']>;
};

export type BranchMutationQuery = {
  /** Approve Branch */
  approveBranch?: Maybe<Branch>;
  /**
   * Approve Branch
   * @deprecated Use "approveBranch" field instead.
   */
  branchApprove?: Maybe<Branch>;
  branchContracts?: Maybe<Contract>;
  /**
   * Deny Branch
   * @deprecated Use "denyBranch" field instead.
   */
  branchDeny?: Maybe<Branch>;
  /** Create Branch */
  createBranch?: Maybe<Branch>;
  /** Deny Branch */
  denyBranch?: Maybe<Branch>;
  /** Update Branch */
  inviteMember?: Maybe<Branch>;
  /** Update Branch */
  updateBranch?: Maybe<Branch>;
};


export type BranchMutationQueryApproveBranchArgs = {
  id: Scalars['ID'];
};


export type BranchMutationQueryBranchApproveArgs = {
  id: Scalars['ID'];
};


export type BranchMutationQueryBranchContractsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  programme_id?: InputMaybe<Scalars['ID']>;
};


export type BranchMutationQueryBranchDenyArgs = {
  id: Scalars['ID'];
};


export type BranchMutationQueryCreateBranchArgs = {
  branch?: InputMaybe<BranchInput>;
  organisation_id?: InputMaybe<Scalars['Int']>;
};


export type BranchMutationQueryDenyBranchArgs = {
  id: Scalars['ID'];
};


export type BranchMutationQueryInviteMemberArgs = {
  access_type?: InputMaybe<Scalars['String']>;
  country_code?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  follow_up_id?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  last_name?: InputMaybe<Scalars['String']>;
  linkedin_url?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  referral_type?: InputMaybe<Scalars['String']>;
};


export type BranchMutationQueryUpdateBranchArgs = {
  branch?: InputMaybe<BranchInput>;
  id: Scalars['ID'];
};

export type BranchPermissionType = {
  __typename?: 'BranchPermissionType';
  can_invite_employee?: Maybe<Scalars['Boolean']>;
  can_manage_branch_employees?: Maybe<Scalars['Boolean']>;
};

export type BranchQuery = {
  branch?: Maybe<Branch>;
  branchAutocomplete?: Maybe<Array<Maybe<Branch>>>;
  branchContracts?: Maybe<Array<Maybe<Contract>>>;
  /** List all the branch's employees */
  branchEmployees?: Maybe<Array<Maybe<BranchEmployee>>>;
  branches?: Maybe<Array<Maybe<Branch>>>;
  /** @deprecated Use "branch" field instead. */
  getBranch?: Maybe<Branch>;
  /** @deprecated Use "branches" field with "my" boolean argument as true instead. */
  myBranch?: Maybe<Array<Maybe<Branch>>>;
};


export type BranchQueryBranchArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type BranchQueryBranchAutocompleteArgs = {
  company_id?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type BranchQueryBranchContractsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type BranchQueryBranchEmployeesArgs = {
  id: Scalars['ID'];
  status?: InputMaybe<Array<BranchEmployeeStatus>>;
};


export type BranchQueryBranchesArgs = {
  my?: InputMaybe<Scalars['Boolean']>;
  organisation_id?: InputMaybe<Scalars['ID']>;
};


export type BranchQueryGetBranchArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type BranchQueryMyBranchArgs = {
  organisation_id?: InputMaybe<Scalars['ID']>;
};

export type Cv = {
  __typename?: 'CV';
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
};

export type Campaign = {
  __typename?: 'Campaign';
  active?: Maybe<Scalars['String']>;
  campaign_content?: Maybe<Constant>;
  campaign_medium?: Maybe<Constant>;
  campaign_source?: Maybe<Constant>;
  campaign_tag?: Maybe<Scalars['String']>;
  campaign_term?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  office?: Maybe<Office>;
  people_count?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CampaignInput = {
  campaign_content_id?: InputMaybe<Scalars['Int']>;
  campaign_medium_id?: InputMaybe<Scalars['Int']>;
  campaign_source_id?: InputMaybe<Scalars['Int']>;
  campaign_tag?: InputMaybe<Scalars['String']>;
  campaign_term?: InputMaybe<Scalars['String']>;
  deadline?: InputMaybe<Scalars['Date']>;
  start_date?: InputMaybe<Scalars['Date']>;
};

export type CampaignMutationQuery = {
  /** Set campaign as activate */
  activateCampaign?: Maybe<Campaign>;
  /**
   * Set campaign as activate
   * @deprecated Use "activateCampaign" field instead.
   */
  campaignActivate?: Maybe<Campaign>;
  /**
   * Create a Campaign
   * @deprecated Use "createCampaign" field instead.
   */
  campaignCreate?: Maybe<Campaign>;
  /**
   * Set campaign as inactivate
   * @deprecated Use "deactivateCampaign" field instead.
   */
  campaignDeactivate?: Maybe<Campaign>;
  /**
   * Update a Campaign
   * @deprecated Use "updateCampaign" field instead.
   */
  campaignUpdate?: Maybe<Campaign>;
  /** Create a Campaign */
  createCampaign?: Maybe<Campaign>;
  /** Set campaign as inactivate */
  deactivateCampaign?: Maybe<Campaign>;
  /** Update a Campaign */
  updateCampaign?: Maybe<Campaign>;
};


export type CampaignMutationQueryActivateCampaignArgs = {
  id: Scalars['ID'];
};


export type CampaignMutationQueryCampaignActivateArgs = {
  id: Scalars['ID'];
};


export type CampaignMutationQueryCampaignCreateArgs = {
  campaign?: InputMaybe<CampaignInput>;
  office_id?: InputMaybe<Scalars['Int']>;
};


export type CampaignMutationQueryCampaignDeactivateArgs = {
  campaign?: InputMaybe<CampaignInput>;
  id: Scalars['ID'];
};


export type CampaignMutationQueryCampaignUpdateArgs = {
  campaign?: InputMaybe<CampaignInput>;
  id: Scalars['ID'];
};


export type CampaignMutationQueryCreateCampaignArgs = {
  campaign?: InputMaybe<CampaignInput>;
  office_id: Scalars['Int'];
};


export type CampaignMutationQueryDeactivateCampaignArgs = {
  id: Scalars['ID'];
};


export type CampaignMutationQueryUpdateCampaignArgs = {
  campaign?: InputMaybe<CampaignInput>;
  id: Scalars['ID'];
};

export type CampaignQuery = {
  campaignAutocomplete?: Maybe<Array<Maybe<Campaign>>>;
  getCampaign?: Maybe<Campaign>;
};


export type CampaignQueryCampaignAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};


export type CampaignQueryGetCampaignArgs = {
  id: Scalars['ID'];
};

export type ChecklistInput = {
  description: Scalars['String'];
  question_text: Scalars['String'];
};

export type ChecklistResponse = {
  __typename?: 'ChecklistResponse';
  answers?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['ID']>;
  survey?: Maybe<Survey>;
};

export type City = {
  __typename?: 'City';
  city_details?: Maybe<Scalars['String']>;
  city_lcs?: Maybe<Array<Maybe<CityLc>>>;
  country?: Maybe<Scalars['String']>;
  google_place_id?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lat?: Maybe<Scalars['Float']>;
  lcs?: Maybe<Array<Maybe<Office>>>;
  lng?: Maybe<Scalars['Float']>;
  mc?: Maybe<Office>;
  name?: Maybe<Scalars['String']>;
};

export type CityFilter = {
  mc_id?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<CitySortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
};

export type CityInput = {
  country?: InputMaybe<Scalars['String']>;
  google_place_id?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  mc_id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CityLc = {
  __typename?: 'CityLc';
  city?: Maybe<City>;
  id?: Maybe<Scalars['ID']>;
  lc?: Maybe<Office>;
};

export type CityLcInput = {
  city_id?: InputMaybe<Scalars['Int']>;
  lc_id?: InputMaybe<Scalars['Int']>;
};

export type CityLcMutationQuery = {
  /** Create CityLC */
  createCityLc?: Maybe<CityLc>;
  /** Delete CityLC */
  deleteCityLc?: Maybe<CityLc>;
  /** Update CityLC */
  updateCityLc?: Maybe<CityLc>;
};


export type CityLcMutationQueryCreateCityLcArgs = {
  city_lc?: InputMaybe<CityLcInput>;
};


export type CityLcMutationQueryDeleteCityLcArgs = {
  id: Scalars['ID'];
};


export type CityLcMutationQueryUpdateCityLcArgs = {
  city_lc?: InputMaybe<CityLcInput>;
  id: Scalars['ID'];
};

export type CityLcQuery = {
  getCityLc?: Maybe<CityLc>;
};


export type CityLcQueryGetCityLcArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CityList = {
  __typename?: 'CityList';
  data?: Maybe<Array<Maybe<City>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type CityMutationQuery = {
  /** Create City */
  createCity?: Maybe<City>;
  deleteCity?: Maybe<City>;
  /** Update City */
  updateCity?: Maybe<City>;
};


export type CityMutationQueryCreateCityArgs = {
  city?: InputMaybe<CityInput>;
};


export type CityMutationQueryDeleteCityArgs = {
  id: Scalars['ID'];
};


export type CityMutationQueryUpdateCityArgs = {
  city?: InputMaybe<CityInput>;
  id: Scalars['ID'];
};

export type CityQuery = {
  allCity?: Maybe<CityList>;
  cityAutocomplete?: Maybe<Array<Maybe<City>>>;
  cityByMc?: Maybe<Array<Maybe<City>>>;
  getCity?: Maybe<City>;
};


export type CityQueryAllCityArgs = {
  filters?: InputMaybe<CityFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type CityQueryCityAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  mc_scope?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
};


export type CityQueryCityByMcArgs = {
  allocated_to_lc: Scalars['Boolean'];
  mc_id: Scalars['Int'];
};


export type CityQueryGetCityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum CitySortOption {
  CreatedAt = 'created_at',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type ClientData = {
  __typename?: 'ClientData';
  data_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** The connection type for ClientData. */
export type ClientDataConnection = {
  __typename?: 'ClientDataConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ClientDataEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ClientData>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type ClientDataEdge = {
  __typename?: 'ClientDataEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ClientData>;
};

export type ClientDataInput = {
  applicable_id: Scalars['ID'];
  /** Person, OpportunityApplication are the currently permitted types. */
  applicable_type: Scalars['String'];
  data_type: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ClientDataMutationQuery = {
  /** Create or update a client data */
  clientDataPut?: Maybe<ClientData>;
  /** Update a client data */
  clientDataUpdate?: Maybe<ClientData>;
};


export type ClientDataMutationQueryClientDataPutArgs = {
  client_data?: InputMaybe<ClientDataInput>;
};


export type ClientDataMutationQueryClientDataUpdateArgs = {
  client_data?: InputMaybe<ClientDataInput>;
  id: Scalars['ID'];
};

export type ClientDataQuery = {
  clientData?: Maybe<ClientData>;
  clientDataByNameAndApplicable?: Maybe<ClientData>;
  /** @deprecated Use "clientData" field instead. */
  clientDataGet?: Maybe<ClientData>;
  /** @deprecated Use "clientDataByNameAndApplicable" field instead. */
  clientDataGetByNameAndApplicable?: Maybe<ClientData>;
};


export type ClientDataQueryClientDataArgs = {
  id: Scalars['ID'];
};


export type ClientDataQueryClientDataByNameAndApplicableArgs = {
  applicable_id: Scalars['ID'];
  applicable_type: Scalars['String'];
  name: Scalars['String'];
};


export type ClientDataQueryClientDataGetArgs = {
  id: Scalars['ID'];
};


export type ClientDataQueryClientDataGetByNameAndApplicableArgs = {
  applicable_id: Scalars['ID'];
  applicable_type: Scalars['String'];
  name: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  can_be_deleted?: Maybe<Scalars['Boolean']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  field_for?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  meta?: Maybe<CommentMetaType>;
  person?: Maybe<Person>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** The connection type for Comment. */
export type CommentConnection = {
  __typename?: 'CommentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommentEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Comment>;
};

export type CommentInput = {
  comment?: InputMaybe<Scalars['String']>;
  field_for?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['String']>;
  model_name?: InputMaybe<Scalars['String']>;
  person_id?: InputMaybe<Scalars['Int']>;
  record_id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Scalars['String']>;
};

/** CommentMetaType records */
export type CommentMetaType = {
  __typename?: 'CommentMetaType';
  resolved?: Maybe<Scalars['String']>;
  resolved_at?: Maybe<Scalars['String']>;
  resolved_by?: Maybe<Scalars['String']>;
};

export type CommentMutationQuery = {
  /** Create comment */
  createComment?: Maybe<Comment>;
  deleteComment?: Maybe<Person>;
  /** Update comment */
  updateComment?: Maybe<Comment>;
};


export type CommentMutationQueryCreateCommentArgs = {
  comment?: InputMaybe<CommentInput>;
};


export type CommentMutationQueryDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type CommentMutationQueryUpdateCommentArgs = {
  comment?: InputMaybe<CommentInput>;
  id: Scalars['ID'];
};

export type CommentQuery = {
  currentPersonComment?: Maybe<Array<Maybe<Comment>>>;
  getComment?: Maybe<Comment>;
};


export type CommentQueryGetCommentArgs = {
  id: Scalars['ID'];
};

export type CommitteeAggregation = {
  __typename?: 'CommitteeAggregation';
  accepted?: Maybe<Scalars['Int']>;
  applied?: Maybe<Scalars['Int']>;
  approved?: Maybe<Scalars['Int']>;
  committee_target?: Maybe<CommitteeTarget>;
  completed?: Maybe<Scalars['Int']>;
  exchange_type?: Maybe<Scalars['String']>;
  finished?: Maybe<Scalars['Int']>;
  growth_percentage_accepted?: Maybe<Scalars['Int']>;
  growth_percentage_applied?: Maybe<Scalars['Int']>;
  growth_percentage_approved?: Maybe<Scalars['Int']>;
  growth_percentage_completed?: Maybe<Scalars['Int']>;
  growth_percentage_finished?: Maybe<Scalars['Int']>;
  growth_percentage_realized?: Maybe<Scalars['Int']>;
  percentage_accepted?: Maybe<Scalars['Int']>;
  percentage_applied?: Maybe<Scalars['Int']>;
  percentage_approved?: Maybe<Scalars['Int']>;
  percentage_completed?: Maybe<Scalars['Int']>;
  percentage_finished?: Maybe<Scalars['Int']>;
  percentage_realized?: Maybe<Scalars['Int']>;
  programme?: Maybe<Programme>;
  realized?: Maybe<Scalars['Int']>;
  term?: Maybe<Term>;
};

/** The connection type for CommitteeAggregation. */
export type CommitteeAggregationConnection = {
  __typename?: 'CommitteeAggregationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommitteeAggregationEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CommitteeAggregation>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type CommitteeAggregationEdge = {
  __typename?: 'CommitteeAggregationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CommitteeAggregation>;
};

export type CommitteeCityInput = {
  country?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CommitteeDepartmentInput = {
  name: Scalars['String'];
  term_id: Scalars['Int'];
};

export type CommitteeDepartmentMutationQuery = {
  createCommitteeDepartment?: Maybe<CommitteeDepartmentType>;
};


export type CommitteeDepartmentMutationQueryCreateCommitteeDepartmentArgs = {
  committee_department: CommitteeDepartmentInput;
  office_id: Scalars['ID'];
};

export type CommitteeDepartmentType = {
  __typename?: 'CommitteeDepartmentType';
  facets?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  member_positions?: Maybe<MemberPositionConnection>;
  name: Scalars['String'];
};


export type CommitteeDepartmentTypeMember_PositionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for CommitteeDepartmentType. */
export type CommitteeDepartmentTypeConnection = {
  __typename?: 'CommitteeDepartmentTypeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommitteeDepartmentTypeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CommitteeDepartmentType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type CommitteeDepartmentTypeEdge = {
  __typename?: 'CommitteeDepartmentTypeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CommitteeDepartmentType>;
};

export type CommitteeMutationQuery = {
  /** Create Committee */
  createCommittee?: Maybe<Office>;
  /** Create committee city */
  createCommitteeCity?: Maybe<Office>;
  deleteCommittee?: Maybe<Office>;
  freezeUnfreezeCommittee?: Maybe<Office>;
  /** Update checklist for committee */
  memberLeadChecklistQuestionBulkCreate?: Maybe<Array<Maybe<SurveyQuestion>>>;
  /** Propagate terms committee */
  propagateTermsCommittee?: Maybe<Array<Maybe<Office>>>;
  /** Update Committee */
  updateCommittee?: Maybe<Office>;
};


export type CommitteeMutationQueryCreateCommitteeArgs = {
  committee?: InputMaybe<OfficeInput>;
};


export type CommitteeMutationQueryCreateCommitteeCityArgs = {
  committee?: InputMaybe<OfficeInput>;
  id: Scalars['ID'];
};


export type CommitteeMutationQueryDeleteCommitteeArgs = {
  id: Scalars['ID'];
};


export type CommitteeMutationQueryFreezeUnfreezeCommitteeArgs = {
  action?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  remarks?: InputMaybe<Scalars['String']>;
};


export type CommitteeMutationQueryMemberLeadChecklistQuestionBulkCreateArgs = {
  checklist: Array<InputMaybe<ChecklistInput>>;
  id: Scalars['ID'];
};


export type CommitteeMutationQueryPropagateTermsCommitteeArgs = {
  committee?: InputMaybe<OfficeInput>;
};


export type CommitteeMutationQueryUpdateCommitteeArgs = {
  committee?: InputMaybe<OfficeInput>;
  id: Scalars['ID'];
};

export type CommitteePayment = {
  __typename?: 'CommitteePayment';
  allow_online_payments?: Maybe<Scalars['Boolean']>;
  apply?: Maybe<Scalars['String']>;
  match?: Maybe<Scalars['String']>;
  other_payment_option?: Maybe<Scalars['String']>;
  realize?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CommitteePaymentInput = {
  allow_online_payments?: InputMaybe<Scalars['Boolean']>;
  apply?: InputMaybe<Scalars['String']>;
  match?: InputMaybe<Scalars['String']>;
  other_payment_option?: InputMaybe<Scalars['String']>;
  realize?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CommitteeQuery = {
  committee?: Maybe<Office>;
  committeeAutocomplete?: Maybe<Array<Maybe<Office>>>;
  committeeBasicDetails?: Maybe<OfficeBasicDetails>;
  committeeTerm?: Maybe<CommitteeTermType>;
  committeeTerms?: Maybe<Array<Maybe<TermDate>>>;
  committeeTermsWithDepartments?: Maybe<Array<Maybe<CommitteeTermType>>>;
  committees?: Maybe<OfficeList>;
  committeesDownload?: Maybe<Scalars['String']>;
  committeesListBasic?: Maybe<OfficeBasicList>;
  entityGoalSetting?: Maybe<Array<Maybe<EntityGoal>>>;
  geoCodedCommittee?: Maybe<OfficeBasicDetails>;
  /** @deprecated Use "committee" field instead. */
  getCommittee?: Maybe<Office>;
  /** @deprecated Use "committeeBasicDetails" field instead. */
  getCommitteeBasicDetails?: Maybe<OfficeBasicDetails>;
  /** @deprecated Use "committeeTerm" field instead. */
  getCommitteeTerm?: Maybe<TermDate>;
  mcsAlignments?: Maybe<Array<Maybe<OfficeMcAlignment>>>;
  /** @deprecated Use "my_committee_autocomplete" boolean argument in "committeeAutocomplete" field instead. */
  myCommitteeAutocomplete?: Maybe<Array<Maybe<Office>>>;
};


export type CommitteeQueryCommitteeArgs = {
  id: Scalars['ID'];
};


export type CommitteeQueryCommitteeAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  my_committee_autocomplete?: InputMaybe<Scalars['Boolean']>;
  office_scope?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
};


export type CommitteeQueryCommitteeBasicDetailsArgs = {
  id: Scalars['ID'];
};


export type CommitteeQueryCommitteeTermArgs = {
  id: Scalars['ID'];
  term_id: Scalars['ID'];
};


export type CommitteeQueryCommitteeTermsArgs = {
  id: Scalars['ID'];
};


export type CommitteeQueryCommitteeTermsWithDepartmentsArgs = {
  id: Scalars['ID'];
};


export type CommitteeQueryCommitteesArgs = {
  filters?: InputMaybe<OfficeFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type CommitteeQueryCommitteesDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<OfficeFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type CommitteeQueryCommitteesListBasicArgs = {
  filters?: InputMaybe<OfficeFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type CommitteeQueryEntityGoalSettingArgs = {
  filters?: InputMaybe<GoalSettingFilter>;
};


export type CommitteeQueryGetCommitteeArgs = {
  id: Scalars['ID'];
};


export type CommitteeQueryGetCommitteeBasicDetailsArgs = {
  id: Scalars['ID'];
};


export type CommitteeQueryGetCommitteeTermArgs = {
  id: Scalars['ID'];
};


export type CommitteeQueryMcsAlignmentsArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  mc_id?: InputMaybe<Scalars['Int']>;
  mc_name?: InputMaybe<Scalars['String']>;
};


export type CommitteeQueryMyCommitteeAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
};

export type CommitteeTarget = {
  __typename?: 'CommitteeTarget';
  accepted?: Maybe<Scalars['Int']>;
  applied?: Maybe<Scalars['Int']>;
  approved?: Maybe<Scalars['Int']>;
  completed?: Maybe<Scalars['Int']>;
  exchange_type?: Maybe<Scalars['String']>;
  finished?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  programme?: Maybe<Programme>;
  realized?: Maybe<Scalars['Int']>;
  term?: Maybe<Term>;
};

/** The connection type for CommitteeTarget. */
export type CommitteeTargetConnection = {
  __typename?: 'CommitteeTargetConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommitteeTargetEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CommitteeTarget>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type CommitteeTargetEdge = {
  __typename?: 'CommitteeTargetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CommitteeTarget>;
};

export type CommitteeTargetInput = {
  accepted?: InputMaybe<Scalars['Int']>;
  applied?: InputMaybe<Scalars['Int']>;
  approved?: InputMaybe<Scalars['Int']>;
  completed?: InputMaybe<Scalars['Int']>;
  finished?: InputMaybe<Scalars['Int']>;
  realized?: InputMaybe<Scalars['Int']>;
};

export type CommitteeTargetMutationQuery = {
  /** Bulk update committee targets for committee */
  committeeTargetBulkUpdate?: Maybe<Array<Maybe<CommitteeTarget>>>;
};


export type CommitteeTargetMutationQueryCommitteeTargetBulkUpdateArgs = {
  committee_targets: Array<InputMaybe<UpdateCommitteeTargetInput>>;
};

export type CommitteeTermInput = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  office_id?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  tag?: InputMaybe<Scalars['String']>;
  term_id?: InputMaybe<Scalars['String']>;
};

export type CommitteeTermType = {
  __typename?: 'CommitteeTermType';
  committee_departments?: Maybe<CommitteeDepartmentTypeConnection>;
  id: Scalars['ID'];
  member_position?: Maybe<MemberPosition>;
  name?: Maybe<Scalars['String']>;
};


export type CommitteeTermTypeCommittee_DepartmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CompanyFilter = {
  committee?: InputMaybe<Scalars['Int']>;
  company_sizes?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  company_types?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  has_active_opportunities?: InputMaybe<Scalars['Boolean']>;
  has_employee?: InputMaybe<Scalars['Boolean']>;
  has_opportunities?: InputMaybe<Scalars['Boolean']>;
  has_pop_account?: InputMaybe<Scalars['Boolean']>;
  industries?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  last_interaction?: InputMaybe<DateInput>;
  managers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  partner_type?: InputMaybe<Array<PartnerTypes>>;
  pop_first_sign_up?: InputMaybe<DateInput>;
  programmes?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  q?: InputMaybe<Scalars['String']>;
  registered?: InputMaybe<DateInput>;
  sort?: InputMaybe<CompanySortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  status?: InputMaybe<Scalars['String']>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tag_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type CompanyInput = {
  address_detail_attributes?: InputMaybe<AddressInput>;
  backgrounds?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  company_stats?: InputMaybe<Scalars['JSON']>;
  contact_detail_attributes?: InputMaybe<ContactInput>;
  /** The base64 encoded version of the cover picture to upload. */
  cover_photo?: InputMaybe<ImageInput>;
  employee_count?: InputMaybe<Scalars['String']>;
  home_lc_id?: InputMaybe<Scalars['Int']>;
  industries?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  is_gep?: InputMaybe<Scalars['Boolean']>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  name?: InputMaybe<Scalars['String']>;
  office_count?: InputMaybe<Scalars['String']>;
  organisation_size?: InputMaybe<Scalars['Int']>;
  organisation_type?: InputMaybe<Scalars['Int']>;
  /** The base64 encoded version of the profile picture to upload. */
  profile_photo?: InputMaybe<ImageInput>;
  registration_no?: InputMaybe<Scalars['String']>;
  retention_rate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  video_url_id?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  year_of_creation?: InputMaybe<Scalars['Int']>;
};

export type CompanyList = {
  __typename?: 'CompanyList';
  data?: Maybe<Array<Maybe<Organisation>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

/** CompanyMetaType records */
export type CompanyMetaType = {
  __typename?: 'CompanyMetaType';
  approved_at?: Maybe<Scalars['DateTime']>;
  approved_by?: Maybe<Person>;
  archived_at?: Maybe<Scalars['DateTime']>;
  archived_by?: Maybe<Person>;
  archived_method?: Maybe<Scalars['String']>;
  employee_count?: Maybe<Scalars['String']>;
  experience_count?: Maybe<Scalars['String']>;
  office_count?: Maybe<Scalars['String']>;
  opportunity_count?: Maybe<Scalars['String']>;
  rejected_at?: Maybe<Scalars['DateTime']>;
  rejected_by?: Maybe<Person>;
  retention_rate?: Maybe<Scalars['String']>;
  video_url_id?: Maybe<Scalars['String']>;
};

export enum CompanySortOption {
  ActiveOpportunities = 'active_opportunities',
  CompanySize = 'company_size',
  CompanyType = 'company_type',
  CreatedAt = 'created_at',
  EmployeesCount = 'employees_count',
  HomeLc = 'home_lc',
  HomeMc = 'home_mc',
  IsGep = 'is_gep',
  Name = 'name',
  Openings = 'openings',
  OpportunityCount = 'opportunity_count',
  PartnerType = 'partner_type',
  PhoneNumber = 'phone_number',
  PopFirstSignUp = 'pop_first_sign_up',
  Status = 'status',
  UpdatedAt = 'updated_at'
}

export type Constant = {
  __typename?: 'Constant';
  alias_name?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Constant>>>;
  has_focus_products?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_active?: Maybe<Scalars['Boolean']>;
  /** check if the constant exists with another type. */
  matches_with?: Maybe<Scalars['Boolean']>;
  /** Matching with opportunity */
  matching_with_opportunity?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  option?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  sdg_goal_hex_code?: Maybe<Scalars['String']>;
  sdg_goal_no?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  standard_category?: Maybe<Scalars['String']>;
  standard_type?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['String']>;
  type_name?: Maybe<Scalars['String']>;
};


export type ConstantMatches_WithArgs = {
  type?: InputMaybe<Scalars['String']>;
  type_id?: InputMaybe<Scalars['Int']>;
};

export type ConstantMap = {
  __typename?: 'ConstantMap';
  constant?: Maybe<Constant>;
  /** constant id */
  constant_id?: Maybe<Scalars['Int']>;
  /** constant name */
  constant_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  level?: Maybe<Scalars['Int']>;
  /** check if the constant exists with another type. */
  matches_with?: Maybe<Scalars['Boolean']>;
  /** Matching with opportunity */
  matching_with_opportunity?: Maybe<Scalars['Boolean']>;
  /** Constant meta name */
  meta?: Maybe<Scalars['JSON']>;
  option?: Maybe<Scalars['String']>;
  /** Constant parent_name */
  parent_name?: Maybe<Scalars['String']>;
  /** Constant position name */
  position?: Maybe<Scalars['String']>;
  standard_option?: Maybe<Constant>;
};


export type ConstantMapMatches_WithArgs = {
  type?: InputMaybe<Scalars['String']>;
  type_id?: InputMaybe<Scalars['Int']>;
};

export type ConstantMapInput = {
  id?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  option?: InputMaybe<Scalars['String']>;
};

export enum ConstantSortOption {
  Name = 'name',
  Position = 'position'
}

export type Constants = {
  /** @deprecated Use "constants" field instead. */
  allConstants?: Maybe<Array<Maybe<Constant>>>;
  constantAutocomplete: Array<Maybe<Constant>>;
  constants: Array<Maybe<Constant>>;
  sdgGoals: Array<Maybe<Constant>>;
  sdgTargets: Array<Maybe<SdgTarget>>;
};


export type ConstantsAllConstantsArgs = {
  filters?: InputMaybe<ConstantsSortOption>;
  parent_id?: InputMaybe<Scalars['ID']>;
  type_id?: InputMaybe<Scalars['String']>;
  type_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ConstantsConstantAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type ConstantsConstantsArgs = {
  filters?: InputMaybe<ConstantsSortOption>;
  parent_id?: InputMaybe<Scalars['ID']>;
  type_id?: InputMaybe<Scalars['String']>;
  type_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ConstantsSdgGoalsArgs = {
  active_opportunities?: InputMaybe<Scalars['Boolean']>;
};


export type ConstantsSdgTargetsArgs = {
  sdg_goal?: InputMaybe<Scalars['String']>;
};

export type ConstantsSortOption = {
  /** Sort the result based on name or position. By default it will order by name */
  sort?: InputMaybe<ConstantSortOption>;
  /** Return the result in ascending or descending order. By default it will be in ascending order */
  sort_direction?: InputMaybe<BaseSortDirection>;
};

export type ContactInfo = {
  __typename?: 'ContactInfo';
  country_code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type ContactInput = {
  country_code?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ContactPeopleInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
};

/** ContactPeopleType records */
export type ContactPeopleType = {
  __typename?: 'ContactPeopleType';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
};

export type Contract = {
  __typename?: 'Contract';
  contract?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  programme?: Maybe<Programme>;
  signee?: Maybe<Person>;
};

export type Conversation = {
  __typename?: 'Conversation';
  contextable?: Maybe<PersonApplicationUnion>;
  conversation_participants?: Maybe<Array<Maybe<ConversationParticipant>>>;
  conversation_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  messages?: Maybe<MessageConnection>;
  meta_data?: Maybe<Scalars['JSON']>;
  subject?: Maybe<Scalars['String']>;
};


export type ConversationMessagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
};

/** The connection type for Conversation. */
export type ConversationConnection = {
  __typename?: 'ConversationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ConversationEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Conversation>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type ConversationEdge = {
  __typename?: 'ConversationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Conversation>;
};

export type ConversationParticipant = {
  __typename?: 'ConversationParticipant';
  id?: Maybe<Scalars['ID']>;
  last_read_at?: Maybe<Scalars['DateTime']>;
  participant?: Maybe<ConversationParticipantPerson>;
  title?: Maybe<Scalars['String']>;
  unread_count?: Maybe<Scalars['Int']>;
};

export type ConversationParticipantPerson = {
  __typename?: 'ConversationParticipantPerson';
  aiesec_email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  profile_photo?: Maybe<Scalars['String']>;
};


export type ConversationParticipantPersonProfile_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars['Boolean']>;
  cdn_region?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};

export type ConversationQuery = {
  getConversation?: Maybe<Conversation>;
};


export type ConversationQueryGetConversationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CounterData = {
  __typename?: 'CounterData';
  count?: Maybe<Scalars['String']>;
};

export type Currency = {
  __typename?: 'Currency';
  alphabetic_code?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  minor_unit?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  numeric_code?: Maybe<Scalars['Int']>;
  programme_fees?: Maybe<Array<Maybe<ProgrammeFee>>>;
  symbol?: Maybe<Scalars['String']>;
};

export type CurrentPerson = {
  __typename?: 'CurrentPerson';
  academic_experiences?: Maybe<Array<Maybe<PreviousExperience>>>;
  accepted_reason?: Maybe<Scalars['String']>;
  account_manager?: Maybe<Scalars['String']>;
  aiesec_email?: Maybe<Scalars['String']>;
  client_datas?: Maybe<ClientDataConnection>;
  contact_detail?: Maybe<ContactInfo>;
  conversations?: Maybe<ConversationConnection>;
  /** @deprecated Removed. Use contact_detail field */
  country_code?: Maybe<Scalars['String']>;
  cover_photo?: Maybe<Scalars['String']>;
  creatable_offices_for_opportunities?: Maybe<OfficeConnection>;
  creatable_offices_for_pages?: Maybe<Array<Maybe<Office>>>;
  created_at?: Maybe<Scalars['DateTime']>;
  current_office?: Maybe<Office>;
  current_offices?: Maybe<Array<Maybe<Office>>>;
  current_positions?: Maybe<Array<Maybe<Position>>>;
  current_status?: Maybe<Scalars['String']>;
  current_teams?: Maybe<Array<Maybe<Team>>>;
  cv_url?: Maybe<Scalars['String']>;
  cvs?: Maybe<Array<Maybe<Cv>>>;
  dob?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  expa_registered_device_id?: Maybe<Scalars['String']>;
  expa_settings?: Maybe<ExpaSettings>;
  favourite_events?: Maybe<Array<Maybe<Event>>>;
  favourite_events_count?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  has_completed_onboarding?: Maybe<Scalars['Boolean']>;
  has_current_position?: Maybe<Scalars['Boolean']>;
  home_lc?: Maybe<Office>;
  id: Scalars['ID'];
  instant_message_unread_count?: Maybe<Scalars['Int']>;
  interviewed?: Maybe<Scalars['Boolean']>;
  is_ai_eb_member?: Maybe<Scalars['Boolean']>;
  is_ai_member?: Maybe<Scalars['Boolean']>;
  is_pop_user?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  linkedin_url?: Maybe<Scalars['String']>;
  managed_branches?: Maybe<Array<Maybe<Branch>>>;
  managed_companies?: Maybe<Array<Maybe<Organisation>>>;
  managed_sub_branch_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  managers?: Maybe<Array<Maybe<Manager>>>;
  member_positions?: Maybe<Array<MemberPosition>>;
  meta?: Maybe<PersonMetaType>;
  middle_names?: Maybe<Scalars['String']>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  notification_settings?: Maybe<Scalars['JSON']>;
  /** current person's notifications */
  notifications?: Maybe<Array<Maybe<Notification>>>;
  nps_score?: Maybe<Scalars['String']>;
  opportunity_applications_count?: Maybe<Scalars['Int']>;
  organisation_type_id?: Maybe<Scalars['Int']>;
  pending_tasks?: Maybe<TodoType>;
  /** permissions */
  permissions?: Maybe<PersonPermissionType>;
  permissions_for?: Maybe<Scalars['String']>;
  person_profile?: Maybe<PersonProfile>;
  /** @deprecated Removed. Use contact_detail field */
  phone?: Maybe<Scalars['String']>;
  professional_experiences?: Maybe<Array<Maybe<ProfessionalExperience>>>;
  profile_completeness?: Maybe<Scalars['JSON']>;
  profile_photo?: Maybe<Scalars['String']>;
  recommended_incoming_programme?: Maybe<Scalars['Int']>;
  referral_type?: Maybe<Scalars['String']>;
  saved_filters?: Maybe<SavedFilterConnection>;
  secure_identity?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};


export type CurrentPersonClient_DatasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CurrentPersonConversationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  conversation_type?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CurrentPersonCover_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars['Boolean']>;
  cdn_region?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};


export type CurrentPersonCreatable_Offices_For_OpportunitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type CurrentPersonNodeArgs = {
  id: Scalars['ID'];
};


export type CurrentPersonNotificationsArgs = {
  count?: InputMaybe<Scalars['Int']>;
};


export type CurrentPersonProfile_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars['Boolean']>;
  cdn_region?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};


export type CurrentPersonSaved_FiltersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
};

/** An input object representing arguments for a Current Person */
export type CurrentPersonInput = {
  address_detail_attributes?: InputMaybe<AddressInput>;
  axp_settings?: InputMaybe<AxpSettingsInput>;
  contact_detail_attributes?: InputMaybe<ContactInput>;
  cover_image_name?: InputMaybe<Scalars['String']>;
  /** The base64 encoded version of the cover image to upload. */
  cover_photo?: InputMaybe<ImageInput>;
  dob?: InputMaybe<Scalars['Date']>;
  expa_registered_device_id?: InputMaybe<Scalars['String']>;
  expa_settings?: InputMaybe<ExpaSettingsInput>;
  first_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  has_completed_onboarding?: InputMaybe<Scalars['Boolean']>;
  home_lc_id?: InputMaybe<Scalars['ID']>;
  introduction?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  linkedin_url?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<PersonMetaInput>;
  middle_names?: InputMaybe<Scalars['String']>;
  notification_settings?: InputMaybe<NotificationSettingsInput>;
  person_profile_attributes?: InputMaybe<ProfileInput>;
  /** The base64 encoded version of the profile photo to upload. */
  profile_photo?: InputMaybe<ImageInput>;
  referral_type?: InputMaybe<Scalars['String']>;
  registered_device_id?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type CurrentPersonMutationQuery = {
  /** Add a cv to user */
  addCurrentPersonCv?: Maybe<CurrentPerson>;
  currentPersonAnonymize?: Maybe<CurrentPerson>;
  currentPersonEfResult?: Maybe<CurrentPerson>;
  currentPersonSavedFiltersCreate?: Maybe<SavedFilter>;
  currentPersonSavedFiltersDelete?: Maybe<SavedFilter>;
  currentPersonSavedFiltersUpdate?: Maybe<SavedFilter>;
  /** Update Current Person */
  currentPersonUpdate?: Maybe<CurrentPerson>;
  /** Update Current Person */
  currentPersonUpdateHomeLc?: Maybe<CurrentPerson>;
  /** Delete a cv of current person */
  deleteCurrentPersonCv?: Maybe<CurrentPerson>;
};


export type CurrentPersonMutationQueryAddCurrentPersonCvArgs = {
  cv?: InputMaybe<ImageInput>;
};


export type CurrentPersonMutationQueryCurrentPersonSavedFiltersCreateArgs = {
  saved_filter?: InputMaybe<SavedFilterInput>;
};


export type CurrentPersonMutationQueryCurrentPersonSavedFiltersDeleteArgs = {
  saved_filter_id?: InputMaybe<Scalars['ID']>;
};


export type CurrentPersonMutationQueryCurrentPersonSavedFiltersUpdateArgs = {
  id?: InputMaybe<Scalars['ID']>;
  saved_filter?: InputMaybe<SavedFilterInput>;
};


export type CurrentPersonMutationQueryCurrentPersonUpdateArgs = {
  person?: InputMaybe<CurrentPersonInput>;
};


export type CurrentPersonMutationQueryCurrentPersonUpdateHomeLcArgs = {
  home_lc_id?: InputMaybe<Scalars['ID']>;
};


export type CurrentPersonMutationQueryDeleteCurrentPersonCvArgs = {
  cv_id?: InputMaybe<Scalars['ID']>;
};

export type CurrentPersonQuery = {
  currentPerson?: Maybe<CurrentPerson>;
  currentPersonDump?: Maybe<CurrentPerson>;
  currentPersonEfResult?: Maybe<CurrentPerson>;
  currentPersonManagers?: Maybe<Array<Maybe<Person>>>;
  currentPersonProgrammeFees?: Maybe<Array<Maybe<ProgrammeFee>>>;
  currentPersonSavedFilters?: Maybe<Array<Maybe<SavedFilter>>>;
  currentPersonSavedFiltersShow?: Maybe<SavedFilter>;
};


export type CurrentPersonQueryCurrentPersonArgs = {
  model?: InputMaybe<Scalars['String']>;
};


export type CurrentPersonQueryCurrentPersonProgrammeFeesArgs = {
  managed_companies?: InputMaybe<Scalars['Boolean']>;
};


export type CurrentPersonQueryCurrentPersonSavedFiltersArgs = {
  model?: InputMaybe<Scalars['String']>;
};


export type CurrentPersonQueryCurrentPersonSavedFiltersShowArgs = {
  saved_filter_id?: InputMaybe<Scalars['ID']>;
};

export type CustomStatusInput = {
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

export type CustomStatusType = {
  __typename?: 'CustomStatusType';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
};

/** The connection type for CustomStatusType. */
export type CustomStatusTypeConnection = {
  __typename?: 'CustomStatusTypeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CustomStatusTypeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CustomStatusType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type CustomStatusTypeEdge = {
  __typename?: 'CustomStatusTypeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CustomStatusType>;
};

export type DateInput = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  from?: InputMaybe<Scalars['DateTime']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  to?: InputMaybe<Scalars['DateTime']>;
};

export type DeliverablesInput = {
  delivered_by?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
};

/** EmployeeDetailsType records */
export type EmployeeDetailsType = {
  __typename?: 'EmployeeDetailsType';
  organisation_type_id?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type EmployeeLead = {
  __typename?: 'EmployeeLead';
  authority?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['String']>;
  /** city */
  city?: Maybe<City>;
  comments?: Maybe<CommentConnection>;
  comments_count?: Maybe<Scalars['Int']>;
  company?: Maybe<Organisation>;
  contact_detail?: Maybe<ContactInfo>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_via?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  engagements?: Maybe<EngagementConnection>;
  full_name?: Maybe<Scalars['String']>;
  home_lc?: Maybe<Office>;
  id: Scalars['ID'];
  /** Industry */
  industry?: Maybe<Constant>;
  invitation_sent?: Maybe<Scalars['Boolean']>;
  job_role?: Maybe<Scalars['String']>;
  lead_attachments?: Maybe<Array<Maybe<ImageType>>>;
  managers?: Maybe<Array<Maybe<Person>>>;
  need?: Maybe<Scalars['String']>;
  /** organisation type */
  organisation_type?: Maybe<Constant>;
  organization_name?: Maybe<Scalars['String']>;
  /** permissions */
  permissions?: Maybe<EmployeeLeadPermissionType>;
  person?: Maybe<Person>;
  person_last_active_at?: Maybe<Scalars['DateTime']>;
  product_interest?: Maybe<Scalars['Int']>;
  qualification_score?: Maybe<Scalars['Int']>;
  referral_type?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  status_last_updated_at?: Maybe<Scalars['DateTime']>;
  timing?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type EmployeeLeadCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EmployeeLeadEngagementsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type EmployeeLeadFilter = {
  authority?: InputMaybe<Scalars['Boolean']>;
  budget?: InputMaybe<Scalars['Boolean']>;
  committee_scope?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_at?: InputMaybe<DateInput>;
  created_via?: InputMaybe<Scalars['String']>;
  has_managers?: InputMaybe<Scalars['Boolean']>;
  home_committee?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  last_active?: InputMaybe<DateInput>;
  managers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  need?: InputMaybe<Scalars['Boolean']>;
  organisation_type?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  product_interest?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  q?: InputMaybe<Scalars['String']>;
  referral_type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sort?: InputMaybe<EmployeeLeadSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  status_last_updated_at?: InputMaybe<DateInput>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timing?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<DateInput>;
};

export type EmployeeLeadInput = {
  authority?: InputMaybe<Scalars['Boolean']>;
  budget?: InputMaybe<Scalars['Boolean']>;
  contact_detail_attributes?: InputMaybe<ContactInput>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  home_lc_id?: InputMaybe<Scalars['Int']>;
  industry_id?: InputMaybe<Scalars['Int']>;
  invitation_sent?: InputMaybe<Scalars['Boolean']>;
  job_role?: InputMaybe<Scalars['String']>;
  lead_attachments_file?: InputMaybe<Array<InputMaybe<ImageInput>>>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  need?: InputMaybe<Scalars['Boolean']>;
  organisation_type_id?: InputMaybe<Scalars['Int']>;
  organization_name?: InputMaybe<Scalars['String']>;
  product_interest?: InputMaybe<Scalars['Int']>;
  referral_type?: InputMaybe<Scalars['String']>;
  timing?: InputMaybe<Scalars['Boolean']>;
};

export type EmployeeLeadList = {
  __typename?: 'EmployeeLeadList';
  data?: Maybe<Array<Maybe<EmployeeLead>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type EmployeeLeadMutationQuery = {
  /** update employee_lead for the given manager ids */
  bulkAssignManagersForEmployeeLead?: Maybe<Array<Maybe<EmployeeLead>>>;
  /** update employee_lead for the given manager ids */
  bulkUnassignManagersForEmployeeLead?: Maybe<Array<Maybe<EmployeeLead>>>;
  /** Create Employee Lead */
  createEmployeeLead?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to attempted to contact
   * @deprecated Use "moveEmployeeLeadToAttemptedToContact" field instead.
   */
  employeeLeadAttemptedToContact?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to Connected
   * @deprecated Use "moveEmployeeLeadToConnected" field instead.
   */
  employeeLeadConnected?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to Contract Sent
   * @deprecated Use "moveEmployeeLeadToContractSent" field instead.
   */
  employeeLeadContractSent?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to Contract Signed
   * @deprecated Use "moveEmployeeLeadToContractSigned" field instead.
   */
  employeeLeadContractSigned?: Maybe<EmployeeLead>;
  /**
   * Create Employee Lead
   * @deprecated Use "createEmployeeLead" field instead.
   */
  employeeLeadCreate?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to Deal lost
   * @deprecated Use "moveEmployeeLeadToDealLost" field instead.
   */
  employeeLeadDealLost?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to Future pipeline
   * @deprecated Use "moveEmployeeLeadToFuturePipeline" field instead.
   */
  employeeLeadFuturePipeline?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to new lead
   * @deprecated Use "moveEmployeeLeadToNewLead" field instead.
   */
  employeeLeadNewLead?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to Proposal Sent
   * @deprecated Use "moveEmployeeLeadToProposalSent" field instead.
   */
  employeeLeadProposalSent?: Maybe<EmployeeLead>;
  /**
   * Send invite to Lead
   * @deprecated Use "sendInviteToEmployeeLead" field instead.
   */
  employeeLeadSendInvite?: Maybe<EmployeeLead>;
  /**
   * Update Employee Lead
   * @deprecated Use "updateEmployeeLead" field instead.
   */
  employeeLeadUpdate?: Maybe<EmployeeLead>;
  /** Move Employee Lead to attempted to contact */
  moveEmployeeLeadToAttemptedToContact?: Maybe<EmployeeLead>;
  /** Move Employee Lead to Connected */
  moveEmployeeLeadToConnected?: Maybe<EmployeeLead>;
  /** Move Employee Lead to Contract Sent */
  moveEmployeeLeadToContractSent?: Maybe<EmployeeLead>;
  /** Move Employee Lead to Contract Signed */
  moveEmployeeLeadToContractSigned?: Maybe<EmployeeLead>;
  /** Move Employee Lead to Deal lost */
  moveEmployeeLeadToDealLost?: Maybe<EmployeeLead>;
  /** Move Employee Lead to Future pipeline */
  moveEmployeeLeadToFuturePipeline?: Maybe<EmployeeLead>;
  /** Move Employee Lead to new lead */
  moveEmployeeLeadToNewLead?: Maybe<EmployeeLead>;
  /** Move Employee Lead to Proposal Sent */
  moveEmployeeLeadToProposalSent?: Maybe<EmployeeLead>;
  /** Send invite to Lead */
  sendInviteToEmployeeLead?: Maybe<EmployeeLead>;
  /** Update Employee Lead */
  updateEmployeeLead?: Maybe<EmployeeLead>;
};


export type EmployeeLeadMutationQueryBulkAssignManagersForEmployeeLeadArgs = {
  employee_lead_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type EmployeeLeadMutationQueryBulkUnassignManagersForEmployeeLeadArgs = {
  employee_lead_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type EmployeeLeadMutationQueryCreateEmployeeLeadArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
};


export type EmployeeLeadMutationQueryEmployeeLeadAttemptedToContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryEmployeeLeadConnectedArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryEmployeeLeadContractSentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryEmployeeLeadContractSignedArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryEmployeeLeadCreateArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
};


export type EmployeeLeadMutationQueryEmployeeLeadDealLostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryEmployeeLeadFuturePipelineArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryEmployeeLeadNewLeadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryEmployeeLeadProposalSentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryEmployeeLeadSendInviteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryEmployeeLeadUpdateArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryMoveEmployeeLeadToAttemptedToContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryMoveEmployeeLeadToConnectedArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryMoveEmployeeLeadToContractSentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryMoveEmployeeLeadToContractSignedArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryMoveEmployeeLeadToDealLostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryMoveEmployeeLeadToFuturePipelineArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryMoveEmployeeLeadToNewLeadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryMoveEmployeeLeadToProposalSentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQuerySendInviteToEmployeeLeadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadMutationQueryUpdateEmployeeLeadArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EmployeeLeadPermissionType = {
  __typename?: 'EmployeeLeadPermissionType';
  can_add_engagement?: Maybe<Scalars['Boolean']>;
  can_move_to_attempted_to_contact?: Maybe<Scalars['Boolean']>;
  can_move_to_connected?: Maybe<Scalars['Boolean']>;
  can_move_to_contract_sent?: Maybe<Scalars['Boolean']>;
  can_move_to_contract_signed?: Maybe<Scalars['Boolean']>;
  can_move_to_deal_lost?: Maybe<Scalars['Boolean']>;
  can_move_to_future_pipeline?: Maybe<Scalars['Boolean']>;
  can_move_to_new_lead?: Maybe<Scalars['Boolean']>;
  can_move_to_proposal_sent?: Maybe<Scalars['Boolean']>;
  can_update?: Maybe<Scalars['Boolean']>;
};

export type EmployeeLeadQuery = {
  employeeLead?: Maybe<EmployeeLead>;
  /** @deprecated Use "employeeLead" field instead. */
  employeeLeadGet?: Maybe<EmployeeLead>;
  employeeLeads?: Maybe<EmployeeLeadList>;
};


export type EmployeeLeadQueryEmployeeLeadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadQueryEmployeeLeadGetArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type EmployeeLeadQueryEmployeeLeadsArgs = {
  filters?: InputMaybe<EmployeeLeadFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export enum EmployeeLeadSortOption {
  CreatedAt = 'created_at',
  CreatedVia = 'created_via',
  Email = 'email',
  FullName = 'full_name',
  HomeLcName = 'home_lc_name',
  HomeMcName = 'home_mc_name',
  LastActive = 'last_active',
  OrganizationName = 'organization_name',
  PhoneNumber = 'phone_number',
  ProductInterest = 'product_interest',
  Qualification = 'qualification',
  ReferralType = 'referral_type',
  Status = 'status',
  UpdatedAt = 'updated_at'
}

export type Engagement = {
  __typename?: 'Engagement';
  created_at?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<Person>;
  engagement_date?: Maybe<Scalars['DateTime']>;
  engagement_type?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
  /** permissions */
  permissions?: Maybe<EngagementPermissionType>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** The connection type for Engagement. */
export type EngagementConnection = {
  __typename?: 'EngagementConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EngagementEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Engagement>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type EngagementEdge = {
  __typename?: 'EngagementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Engagement>;
};

export type EngagementInput = {
  engagement_date?: InputMaybe<Scalars['DateTime']>;
  engagement_type?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EngagementMutationQuery = {
  /** Create Engagement */
  engagementCreate?: Maybe<Engagement>;
  /** Delete Engagement */
  engagementDelete?: Maybe<Engagement>;
  /** Update Engagement */
  engagementUpdate?: Maybe<Engagement>;
};


export type EngagementMutationQueryEngagementCreateArgs = {
  employee_lead_id: Scalars['Int'];
  engagement?: InputMaybe<EngagementInput>;
};


export type EngagementMutationQueryEngagementDeleteArgs = {
  id: Scalars['ID'];
};


export type EngagementMutationQueryEngagementUpdateArgs = {
  engagement?: InputMaybe<EngagementInput>;
  id: Scalars['ID'];
};

export type EngagementPermissionType = {
  __typename?: 'EngagementPermissionType';
  can_delete?: Maybe<Scalars['Boolean']>;
  can_update?: Maybe<Scalars['Boolean']>;
};

export type EntityGoal = {
  __typename?: 'EntityGoal';
  achieved?: Maybe<Scalars['Int']>;
  exchange_type?: Maybe<Scalars['String']>;
  goal?: Maybe<Scalars['Int']>;
  goal_type?: Maybe<Scalars['String']>;
  office?: Maybe<Office>;
  opportunity_duration_type?: Maybe<OpportunityDurationType>;
  programme?: Maybe<Programme>;
  sub_product_group?: Maybe<Scalars['String']>;
};

export type EntityPlan = {
  __typename?: 'EntityPlan';
  deadline?: Maybe<Scalars['Date']>;
  file_import?: Maybe<File>;
  office?: Maybe<Office>;
  plan?: Maybe<Plan>;
};

export type EntityPlanQuery = {
  entityPlans?: Maybe<Array<Maybe<EntityPlan>>>;
};


export type EntityPlanQueryEntityPlansArgs = {
  office_id: Scalars['ID'];
  upcoming?: InputMaybe<Scalars['Boolean']>;
};

export type Event = {
  __typename?: 'Event';
  active_registrations_count?: Maybe<Scalars['Int']>;
  address_detail?: Maybe<AddressInfo>;
  agenda_image?: Maybe<Scalars['String']>;
  allow_online_payment?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<CommentConnection>;
  completeness?: Maybe<Scalars['Float']>;
  confirmed_registration_count?: Maybe<Scalars['Int']>;
  cover_image?: Maybe<Scalars['String']>;
  date_published?: Maybe<Scalars['DateTime']>;
  event_date?: Maybe<Scalars['DateTime']>;
  favourite?: Maybe<Favourite>;
  id: Scalars['ID'];
  managers?: Maybe<Array<Maybe<Person>>>;
  missing_fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  office?: Maybe<Office>;
  overview?: Maybe<Scalars['String']>;
  permissions?: Maybe<EventPermissionType>;
  published_by?: Maybe<Person>;
  registration?: Maybe<EventRegistration>;
  sdg_goals?: Maybe<Array<Maybe<Constant>>>;
  speakers?: Maybe<EventSpeakerConnection>;
  status?: Maybe<Scalars['String']>;
  success_message?: Maybe<Scalars['String']>;
  tag_lists?: Maybe<TagListConnection>;
  tickets?: Maybe<EventTicketConnection>;
  tickets_available?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  todo_type?: Maybe<TodoType>;
  total_ticket_count?: Maybe<Scalars['Int']>;
  unpublished_by?: Maybe<Person>;
};


export type EventCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EventSpeakersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EventTag_ListsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EventTicketsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type EventFilter = {
  committee_scope?: InputMaybe<Scalars['Int']>;
  event_date?: InputMaybe<DateInput>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  q?: InputMaybe<Scalars['String']>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventInput = {
  address_detail_attributes?: InputMaybe<AddressInput>;
  agenda_image_content?: InputMaybe<Scalars['String']>;
  agenda_image_filename?: InputMaybe<Scalars['String']>;
  allow_online_payment?: InputMaybe<Scalars['Boolean']>;
  cover_image_content?: InputMaybe<Scalars['String']>;
  cover_image_filename?: InputMaybe<Scalars['String']>;
  event_date?: InputMaybe<Scalars['DateTime']>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  office_id?: InputMaybe<Scalars['Int']>;
  overview?: InputMaybe<Scalars['String']>;
  sdg_goals?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  success_message?: InputMaybe<Scalars['String']>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type EventList = {
  __typename?: 'EventList';
  data?: Maybe<Array<Maybe<Event>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type EventMutationQueryType = {
  archiveEvent?: Maybe<Event>;
  eventCreate?: Maybe<Event>;
  eventUpdate?: Maybe<Event>;
  favouriteEvent?: Maybe<Event>;
  publishEvent?: Maybe<Event>;
  unfavouriteEvent?: Maybe<Event>;
  unpublishEvent?: Maybe<Event>;
};


export type EventMutationQueryTypeArchiveEventArgs = {
  id: Scalars['ID'];
};


export type EventMutationQueryTypeEventCreateArgs = {
  event?: InputMaybe<EventInput>;
};


export type EventMutationQueryTypeEventUpdateArgs = {
  event?: InputMaybe<EventInput>;
  id: Scalars['ID'];
};


export type EventMutationQueryTypeFavouriteEventArgs = {
  id: Scalars['ID'];
};


export type EventMutationQueryTypePublishEventArgs = {
  id: Scalars['ID'];
};


export type EventMutationQueryTypeUnfavouriteEventArgs = {
  id: Scalars['ID'];
};


export type EventMutationQueryTypeUnpublishEventArgs = {
  id: Scalars['ID'];
};

export type EventPermissionType = {
  __typename?: 'EventPermissionType';
  can_publish?: Maybe<Scalars['Boolean']>;
  can_unpublish?: Maybe<Scalars['Boolean']>;
  can_update?: Maybe<Scalars['Boolean']>;
};

export type EventQuery = {
  eventGet?: Maybe<Event>;
  eventList?: Maybe<EventList>;
  similarEvents?: Maybe<EventList>;
};


export type EventQueryEventGetArgs = {
  id: Scalars['ID'];
};


export type EventQueryEventListArgs = {
  filters?: InputMaybe<EventFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
};


export type EventQuerySimilarEventsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
};

export type EventRegistration = {
  __typename?: 'EventRegistration';
  cancelled_at?: Maybe<Scalars['DateTime']>;
  cancelled_by?: Maybe<Person>;
  confirmed_at?: Maybe<Scalars['DateTime']>;
  confirmed_by?: Maybe<Person>;
  created_at?: Maybe<Scalars['DateTime']>;
  event?: Maybe<Event>;
  /** @deprecated Removed. Use event object instead */
  event_id?: Maybe<Scalars['ID']>;
  event_ticket?: Maybe<EventTicket>;
  follow_up?: Maybe<Constant>;
  followed_up_by?: Maybe<Person>;
  followed_up_date?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  paid_at?: Maybe<Scalars['DateTime']>;
  paid_by?: Maybe<Person>;
  payment_mode?: Maybe<Scalars['String']>;
  permissions?: Maybe<EventRegistrationPermissionType>;
  person?: Maybe<Person>;
  status?: Maybe<Scalars['String']>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type EventRegistrationFilter = {
  committee_scope?: InputMaybe<Scalars['Int']>;
  event_id?: InputMaybe<Scalars['Int']>;
  follow_ups?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  person_id?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  registered?: InputMaybe<DateInput>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventRegistrationInput = {
  engagement_event_id?: InputMaybe<Scalars['Int']>;
  engagement_event_ticket_id?: InputMaybe<Scalars['Int']>;
};

export type EventRegistrationList = {
  __typename?: 'EventRegistrationList';
  data?: Maybe<Array<Maybe<EventRegistration>>>;
  paging?: Maybe<Paging>;
};

export type EventRegistrationMutationQueryType = {
  eventRegistrationCancel?: Maybe<EventRegistration>;
  eventRegistrationConfirm?: Maybe<EventRegistration>;
  eventRegistrationCreate?: Maybe<EventRegistration>;
  eventRegistrationFollowUp?: Maybe<EventRegistration>;
  eventRegistrationMakeTransaction?: Maybe<Transaction>;
  eventRegistrationPayByCash?: Maybe<EventRegistration>;
};


export type EventRegistrationMutationQueryTypeEventRegistrationCancelArgs = {
  id: Scalars['ID'];
};


export type EventRegistrationMutationQueryTypeEventRegistrationConfirmArgs = {
  id: Scalars['ID'];
};


export type EventRegistrationMutationQueryTypeEventRegistrationCreateArgs = {
  event_registration?: InputMaybe<EventRegistrationInput>;
};


export type EventRegistrationMutationQueryTypeEventRegistrationFollowUpArgs = {
  follow_up_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};


export type EventRegistrationMutationQueryTypeEventRegistrationMakeTransactionArgs = {
  id: Scalars['ID'];
};


export type EventRegistrationMutationQueryTypeEventRegistrationPayByCashArgs = {
  id: Scalars['ID'];
};

export type EventRegistrationPermissionType = {
  __typename?: 'EventRegistrationPermissionType';
  can_cancel?: Maybe<Scalars['Boolean']>;
  can_confirm?: Maybe<Scalars['Boolean']>;
  can_followup?: Maybe<Scalars['Boolean']>;
};

export type EventRegistrationQuery = {
  eventRegistrationGet?: Maybe<EventRegistration>;
  eventRegistrationList?: Maybe<EventRegistrationList>;
};


export type EventRegistrationQueryEventRegistrationGetArgs = {
  id: Scalars['ID'];
};


export type EventRegistrationQueryEventRegistrationListArgs = {
  filters?: InputMaybe<EventRegistrationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
};

export type EventSpeaker = {
  __typename?: 'EventSpeaker';
  avatar?: Maybe<Scalars['String']>;
  cover_image?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  linkedin_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** The connection type for EventSpeaker. */
export type EventSpeakerConnection = {
  __typename?: 'EventSpeakerConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EventSpeakerEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<EventSpeaker>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type EventSpeakerEdge = {
  __typename?: 'EventSpeakerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<EventSpeaker>;
};

export type EventSpeakerInput = {
  avatar_content?: InputMaybe<Scalars['String']>;
  avatar_filename?: InputMaybe<Scalars['String']>;
  designation?: InputMaybe<Scalars['String']>;
  engagement_event_id?: InputMaybe<Scalars['Int']>;
  linkedin_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EventSpeakerMutationQueryType = {
  eventSpeakerCreate?: Maybe<EventSpeaker>;
  eventSpeakerDelete?: Maybe<EventSpeaker>;
  eventSpeakerUpdate?: Maybe<EventSpeaker>;
};


export type EventSpeakerMutationQueryTypeEventSpeakerCreateArgs = {
  event_speaker?: InputMaybe<EventSpeakerInput>;
};


export type EventSpeakerMutationQueryTypeEventSpeakerDeleteArgs = {
  id: Scalars['ID'];
};


export type EventSpeakerMutationQueryTypeEventSpeakerUpdateArgs = {
  event_speaker?: InputMaybe<EventSpeakerInput>;
  id: Scalars['ID'];
};

export type EventTicket = {
  __typename?: 'EventTicket';
  created_at?: Maybe<Scalars['DateTime']>;
  engagement_event_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  sale_end_date?: Maybe<Scalars['DateTime']>;
  sale_start_date?: Maybe<Scalars['DateTime']>;
  ticket_currency?: Maybe<Currency>;
  ticket_fee?: Maybe<Scalars['Int']>;
  ticket_total_count?: Maybe<Scalars['Int']>;
  tickets_available?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** The connection type for EventTicket. */
export type EventTicketConnection = {
  __typename?: 'EventTicketConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EventTicketEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<EventTicket>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type EventTicketEdge = {
  __typename?: 'EventTicketEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<EventTicket>;
};

export type EventTicketInput = {
  engagement_event_id?: InputMaybe<Scalars['Int']>;
  sale_end_date?: InputMaybe<Scalars['DateTime']>;
  sale_start_date?: InputMaybe<Scalars['DateTime']>;
  ticket_currency_id?: InputMaybe<Scalars['Int']>;
  ticket_fee_cents?: InputMaybe<Scalars['Int']>;
  ticket_total_count?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EventTicketMutationQueryType = {
  eventTicketCreate?: Maybe<EventTicket>;
  eventTicketDelete?: Maybe<EventTicket>;
  eventTicketUpdate?: Maybe<EventTicket>;
};


export type EventTicketMutationQueryTypeEventTicketCreateArgs = {
  event_ticket?: InputMaybe<EventTicketInput>;
};


export type EventTicketMutationQueryTypeEventTicketDeleteArgs = {
  id: Scalars['ID'];
};


export type EventTicketMutationQueryTypeEventTicketUpdateArgs = {
  event_ticket?: InputMaybe<EventTicketInput>;
  id: Scalars['ID'];
};

export enum ExchangeType {
  Incoming = 'incoming',
  Outgoing = 'outgoing'
}

export type ExpaSettings = {
  __typename?: 'ExpaSettings';
  email_notifications?: Maybe<Scalars['Boolean']>;
  instant_notifications?: Maybe<Scalars['Boolean']>;
  notification_summaries?: Maybe<Scalars['Boolean']>;
  notification_time?: Maybe<Scalars['Int']>;
  notify_on_assignment?: Maybe<Scalars['Boolean']>;
  notify_on_managed_opportunity_applications?: Maybe<Scalars['Boolean']>;
  notify_on_managed_person_applications?: Maybe<Scalars['Boolean']>;
  send_to_aiesec_email?: Maybe<Scalars['Boolean']>;
};

export type ExpaSettingsInput = {
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  instant_notifications?: InputMaybe<Scalars['Boolean']>;
  notification_summaries?: InputMaybe<Scalars['Boolean']>;
  notification_time?: InputMaybe<Scalars['Int']>;
  notify_on_assignment?: InputMaybe<Scalars['Boolean']>;
  notify_on_managed_opportunity_applications?: InputMaybe<Scalars['Boolean']>;
  notify_on_managed_person_applications?: InputMaybe<Scalars['Boolean']>;
  send_to_aiesec_email?: InputMaybe<Scalars['Boolean']>;
};

export type Facets = {
  __typename?: 'Facets';
  name?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type Favourite = {
  __typename?: 'Favourite';
  created_at?: Maybe<Scalars['DateTime']>;
  favourable_id?: Maybe<Scalars['Int']>;
  favourable_type?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  person?: Maybe<Person>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Feature = {
  __typename?: 'Feature';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type FieldInput = {
  field?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  created_at?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<Person>;
  filename?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FileImportMutationQuery = {
  /** Upload csv/excel file */
  fileImport?: Maybe<Scalars['String']>;
};


export type FileImportMutationQueryFileImportArgs = {
  file_input?: InputMaybe<FileInput>;
};

export enum FileImportType {
  EmployeeLead = 'employee_lead',
  EntityGoal = 'entity_goal'
}

export type FileInput = {
  /** The base64 encoded version of the FileImport attachment to upload or external url. */
  import_file?: InputMaybe<ImageInput>;
  import_type: FileImportType;
  meta?: InputMaybe<Scalars['JSON']>;
};

export type FindLcQuery = {
  findLc?: Maybe<Office>;
};


export type FindLcQueryFindLcArgs = {
  city_id?: InputMaybe<Scalars['ID']>;
  city_name?: InputMaybe<Scalars['String']>;
};

export type FlightDetailsInput = {
  /** Flight booking reminder date */
  flight_booking_reminder_date?: InputMaybe<Scalars['Date']>;
  /** Onward arrival airport */
  onward_arrival_airport?: InputMaybe<Scalars['String']>;
  /** Onward time */
  onward_time?: InputMaybe<Scalars['DateTime']>;
  /** Return departure airport */
  return_departure_airport?: InputMaybe<Scalars['String']>;
  /** Return time */
  return_time?: InputMaybe<Scalars['DateTime']>;
};

export type GenerateEmail = {
  __typename?: 'GenerateEmail';
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type GlobalPartnerRequestInput = {
  company?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  no_of_opportunities?: InputMaybe<Scalars['Int']>;
};

export type GlobalPartnerRequestMutationQueryType = {
  /** Create GlobalPartnerRequest */
  createGlobalPartnerRequest?: Maybe<GlobalPartnerRequestType>;
};


export type GlobalPartnerRequestMutationQueryTypeCreateGlobalPartnerRequestArgs = {
  global_partner_request?: InputMaybe<GlobalPartnerRequestInput>;
};

export type GlobalPartnerRequestQuery = {
  /** Get all GlobalPartnerRequests */
  allGlobalPartnerRequests?: Maybe<Array<Maybe<GlobalPartnerRequestType>>>;
};

export type GlobalPartnerRequestType = {
  __typename?: 'GlobalPartnerRequestType';
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  no_of_opportunities?: Maybe<Scalars['Int']>;
};

export type GoalSettingFilter = {
  exchange_type?: InputMaybe<ExchangeType>;
  goal_types?: InputMaybe<Array<GoalType>>;
  office_id?: InputMaybe<Scalars['Int']>;
  opportunity_duration_type_id?: InputMaybe<Scalars['Int']>;
  programme_id?: InputMaybe<Scalars['Int']>;
  sub_product_group?: InputMaybe<SubProductGroup>;
  /** Should be 1st of month to last of month */
  time_period?: InputMaybe<DateInput>;
};

export enum GoalType {
  Accepted = 'accepted',
  Applicants = 'applicants',
  Approved = 'approved',
  Completed = 'completed',
  Finished = 'finished',
  Realized = 'realized',
  SignUps = 'sign_ups'
}

export type Image = {
  getImage?: Maybe<ImageType>;
};


export type ImageGetImageArgs = {
  id: Scalars['ID'];
};

export type ImageInput = {
  content?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ImageType = {
  __typename?: 'ImageType';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  /** Image sizes can be like 100x100, 500x500> */
  url?: Maybe<Scalars['String']>;
};


export type ImageTypeUrlArgs = {
  size?: InputMaybe<Scalars['String']>;
};

export type InboundEmailInput = {
  content?: InputMaybe<Scalars['String']>;
};

export type InboundEmailType = {
  __typename?: 'InboundEmailType';
  content?: Maybe<Scalars['String']>;
  from?: Maybe<Person>;
  id?: Maybe<Scalars['ID']>;
  inboundable_id?: Maybe<Scalars['Int']>;
  inboundable_type?: Maybe<Scalars['String']>;
  to?: Maybe<Person>;
};

export type IncomingProgrammeFeeInput = {
  programme_fee_max?: InputMaybe<Scalars['Int']>;
  programme_fee_min?: InputMaybe<Scalars['Int']>;
};

/** InterviewDetailsType records */
export type InterviewDetailsType = {
  __typename?: 'InterviewDetailsType';
  aiesec_to_conduct_interview?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  interview_platform_url?: Maybe<Scalars['String']>;
  maximum_video_duration?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  video_assessment_answer?: Maybe<Scalars['String']>;
};

export type InterviewSlot = {
  __typename?: 'InterviewSlot';
  accepted?: Maybe<Scalars['Boolean']>;
  /** Attendee Emails */
  attendee_emails?: Maybe<Array<Maybe<Attendee>>>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  opportunity_application_id?: Maybe<Scalars['Int']>;
  opportunity_id?: Maybe<Scalars['Int']>;
  /** Person details */
  person?: Maybe<Person>;
  timeslot?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type InterviewSlotInput = {
  timeslot?: InputMaybe<Scalars['Date']>;
};

export type Invitation = {
  __typename?: 'Invitation';
  id: Scalars['ID'];
  person?: Maybe<Person>;
};

/** An input object representing arguments for a Person */
export type InvitePersonInput = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  home_lc_id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
};

export type InvoiceInput = {
  branch_id?: InputMaybe<Scalars['Int']>;
  due_date?: InputMaybe<Scalars['Date']>;
  opportunity_application_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  payee_name?: InputMaybe<Scalars['String']>;
  payment_method?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type InvoiceMutationQuery = {
  /** Create Invoice */
  createInvoice?: Maybe<InvoiceType>;
  /** Delete Invoice */
  deleteInvoice?: Maybe<InvoiceType>;
  invoiceApproveCashPayment?: Maybe<InvoiceType>;
  invoicePayByCash?: Maybe<InvoiceType>;
  invoiceTransactionCreate?: Maybe<Transaction>;
  /** Update Invoice */
  updateInvoice?: Maybe<InvoiceType>;
  /** Mark as Paid */
  updatePaymentInvoice?: Maybe<InvoiceType>;
};


export type InvoiceMutationQueryCreateInvoiceArgs = {
  invoice?: InputMaybe<InvoiceInput>;
};


export type InvoiceMutationQueryDeleteInvoiceArgs = {
  id: Scalars['ID'];
};


export type InvoiceMutationQueryInvoiceApproveCashPaymentArgs = {
  id: Scalars['ID'];
};


export type InvoiceMutationQueryInvoicePayByCashArgs = {
  id: Scalars['ID'];
};


export type InvoiceMutationQueryInvoiceTransactionCreateArgs = {
  id: Scalars['ID'];
};


export type InvoiceMutationQueryUpdateInvoiceArgs = {
  id: Scalars['ID'];
  invoice?: InputMaybe<InvoiceInput>;
};


export type InvoiceMutationQueryUpdatePaymentInvoiceArgs = {
  id: Scalars['ID'];
  invoice?: InputMaybe<InvoiceInput>;
};

export type InvoiceQuery = {
  /** Mark as Paid */
  getInvoice?: Maybe<InvoiceType>;
};


export type InvoiceQueryGetInvoiceArgs = {
  id: Scalars['ID'];
};

export type InvoiceType = {
  __typename?: 'InvoiceType';
  attachment_file_name?: Maybe<Scalars['String']>;
  branch?: Maybe<Branch>;
  cash_payment_approved_at?: Maybe<Scalars['DateTime']>;
  cash_payment_approved_by?: Maybe<Person>;
  created_at?: Maybe<Scalars['DateTime']>;
  due_date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  opportunity_applications?: Maybe<Array<Maybe<OpportunityApplication>>>;
  paid_at?: Maybe<Scalars['DateTime']>;
  paid_by?: Maybe<Person>;
  payee_name?: Maybe<Scalars['String']>;
  payment_details?: Maybe<Scalars['JSON']>;
  payment_method?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  updated_at?: Maybe<Scalars['DateTime']>;
  /** url */
  url?: Maybe<Scalars['String']>;
};


export type InvoiceTypeUrlArgs = {
  size?: InputMaybe<Scalars['String']>;
};

/** The connection type for InvoiceType. */
export type InvoiceTypeConnection = {
  __typename?: 'InvoiceTypeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InvoiceTypeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<InvoiceType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type InvoiceTypeEdge = {
  __typename?: 'InvoiceTypeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<InvoiceType>;
};

export type LcAlignment = {
  __typename?: 'LcAlignment';
  alignment_type?: Maybe<AlignmentTypes>;
  auto_assignments?: Maybe<PersonConnection>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  lc?: Maybe<Office>;
  mc?: Maybe<Office>;
};


export type LcAlignmentAuto_AssignmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type LcAlignmentInput = {
  keywords?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  lc_id?: InputMaybe<Scalars['String']>;
};

export type LcAlignmentsMutationQueryType = {
  addAutoAssignment?: Maybe<LcAlignment>;
  addLcAlignment?: Maybe<LcAlignment>;
  addSignupQuestions?: Maybe<Office>;
  deleteLcAlignment?: Maybe<LcAlignment>;
  updateLcAlignment?: Maybe<LcAlignment>;
  updateLcAlignmentLabel?: Maybe<Array<Maybe<LcAlignment>>>;
};


export type LcAlignmentsMutationQueryTypeAddAutoAssignmentArgs = {
  auto_assignment?: InputMaybe<Array<InputMaybe<AutoAssignmentInput>>>;
  id: Scalars['ID'];
};


export type LcAlignmentsMutationQueryTypeAddLcAlignmentArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  lc_alignment?: InputMaybe<LcAlignmentInput>;
  office_id: Scalars['ID'];
};


export type LcAlignmentsMutationQueryTypeAddSignupQuestionsArgs = {
  id: Scalars['ID'];
  questions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type LcAlignmentsMutationQueryTypeDeleteLcAlignmentArgs = {
  id: Scalars['ID'];
};


export type LcAlignmentsMutationQueryTypeUpdateLcAlignmentArgs = {
  id: Scalars['ID'];
  lc_alignment?: InputMaybe<LcAlignmentInput>;
};


export type LcAlignmentsMutationQueryTypeUpdateLcAlignmentLabelArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  label: Scalars['String'];
  office_id: Scalars['ID'];
};

export type LcAlignmentsQueryType = {
  /** @deprecated Use "lcAlignment" field instead. */
  getLcAlignment?: Maybe<LcAlignment>;
  lcAlignment?: Maybe<LcAlignment>;
  lcAlignments?: Maybe<Array<Maybe<LcAlignment>>>;
  lcAlignmentsList?: Maybe<Array<Maybe<LcAlignment>>>;
  signupQuestions?: Maybe<Office>;
};


export type LcAlignmentsQueryTypeGetLcAlignmentArgs = {
  id: Scalars['ID'];
};


export type LcAlignmentsQueryTypeLcAlignmentArgs = {
  id: Scalars['ID'];
};


export type LcAlignmentsQueryTypeLcAlignmentsArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  id: Scalars['ID'];
};


export type LcAlignmentsQueryTypeLcAlignmentsListArgs = {
  q: Scalars['String'];
};


export type LcAlignmentsQueryTypeSignupQuestionsArgs = {
  id: Scalars['ID'];
};

export type LdaQuery = {
  /** Return randomized LDA survey */
  ldaSurvey?: Maybe<LdaResponse>;
};


export type LdaQueryLdaSurveyArgs = {
  lda_survey_id: Scalars['String'];
};

export type LdaResponse = {
  __typename?: 'LdaResponse';
  created_at?: Maybe<Scalars['DateTime']>;
  lda_survey_id?: Maybe<Scalars['String']>;
  ldm_type?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<SurveyQuestion>>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type LdaResponseInput = {
  /** Answer value for the question. Must be between 1 and 8 */
  answer: Scalars['Int'];
  /** Question id */
  question_id: Scalars['ID'];
};

export type LdaResponseMutationQuery = {
  /** Post responses to LDA questions */
  ldaResponse?: Maybe<LdaResponse>;
};


export type LdaResponseMutationQueryLdaResponseArgs = {
  aiesec_contribution?: InputMaybe<Scalars['Int']>;
  lda_survey_id: Scalars['ID'];
  responses: Array<InputMaybe<LdaResponseInput>>;
};

export type LdmQuery = {
  allSurvey?: Maybe<Array<Maybe<Survey>>>;
  ldmReport?: Maybe<Scalars['JSON']>;
  ldmSurvey?: Maybe<Array<Maybe<SurveyQuestion>>>;
};


export type LdmQueryLdmReportArgs = {
  opportunity_id?: InputMaybe<Scalars['ID']>;
  person_id?: InputMaybe<Scalars['ID']>;
};


export type LdmQueryLdmSurveyArgs = {
  opportunity_application_id?: InputMaybe<Scalars['ID']>;
  position_id?: InputMaybe<Scalars['ID']>;
};

export type LdmResponse = {
  __typename?: 'LdmResponse';
  available_from?: Maybe<Scalars['String']>;
  available_until?: Maybe<Scalars['String']>;
  branch_id?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lda_survey_id?: Maybe<Scalars['String']>;
  ldm_report?: Maybe<Scalars['JSON']>;
  ldm_type?: Maybe<Scalars['String']>;
  office_id?: Maybe<Scalars['ID']>;
  opportunity?: Maybe<Opportunity>;
  opportunity_application_id?: Maybe<Scalars['ID']>;
  opportunity_id?: Maybe<Scalars['ID']>;
  person_id?: Maybe<Scalars['ID']>;
  programme_id?: Maybe<Scalars['ID']>;
};

export type LdmResponseInput = {
  answer?: InputMaybe<Scalars['String']>;
  question_id?: InputMaybe<Scalars['Int']>;
};

export type LdmResponseMutationQueryType = {
  /** Create Ldm Response */
  ldmResponse?: Maybe<LdmResponse>;
};


export type LdmResponseMutationQueryTypeLdmResponseArgs = {
  aiesec_contribution?: InputMaybe<Scalars['Int']>;
  opportunity_application_id?: InputMaybe<Scalars['Int']>;
  position_id?: InputMaybe<Scalars['Int']>;
  responses?: InputMaybe<Array<InputMaybe<LdmResponseInput>>>;
};

export type LegalInfoInput = {
  general_info?: InputMaybe<Scalars['String']>;
  health_insurance_info?: InputMaybe<Scalars['String']>;
  visa_duration?: InputMaybe<Scalars['String']>;
  visa_link?: InputMaybe<Scalars['String']>;
  visa_type?: InputMaybe<Scalars['String']>;
  visa_work_permit_info?: InputMaybe<Scalars['String']>;
};

export type LegalInfoType = {
  __typename?: 'LegalInfoType';
  general_info?: Maybe<Scalars['String']>;
  health_insurance_info?: Maybe<Scalars['String']>;
  visa_duration?: Maybe<Scalars['String']>;
  visa_link?: Maybe<Scalars['String']>;
  visa_type?: Maybe<Scalars['String']>;
  visa_work_permit_info?: Maybe<Scalars['String']>;
};

export type List = {
  allCurrencies: Array<Maybe<Currency>>;
  allSdgTargets?: Maybe<Array<Maybe<SdgTarget>>>;
  measureOfImpacts?: Maybe<Array<Maybe<Constant>>>;
};


export type ListAllSdgTargetsArgs = {
  sdg_goal_id?: InputMaybe<Scalars['ID']>;
};


export type ListMeasureOfImpactsArgs = {
  sdg_goal_id: Scalars['ID'];
};

/** LogisticInfoType records */
export type LogisticInfoType = {
  __typename?: 'LogisticInfoType';
  accommodation?: Maybe<Scalars['String']>;
  accommodation_additional_info?: Maybe<Scalars['String']>;
  accommodation_covered?: Maybe<Scalars['String']>;
  accommodation_provided?: Maybe<Scalars['String']>;
  computer_provided?: Maybe<Scalars['String']>;
  food?: Maybe<Scalars['String']>;
  food_covered?: Maybe<Scalars['String']>;
  food_provided?: Maybe<Scalars['String']>;
  food_weekends?: Maybe<Scalars['String']>;
  no_of_meals?: Maybe<Scalars['String']>;
  transportation?: Maybe<Scalars['String']>;
  transportation_additional_info?: Maybe<Scalars['String']>;
  transportation_covered?: Maybe<Scalars['String']>;
  transportation_provided?: Maybe<Scalars['String']>;
  transportation_weekends?: Maybe<Scalars['String']>;
};

export type LogisticsInfoInput = {
  accommodation?: InputMaybe<Scalars['Boolean']>;
  accommodation_additional_info?: InputMaybe<Scalars['String']>;
  accommodation_covered?: InputMaybe<Scalars['String']>;
  accommodation_provided?: InputMaybe<Scalars['String']>;
  computer_provided?: InputMaybe<Scalars['String']>;
  food?: InputMaybe<Scalars['Boolean']>;
  food_covered?: InputMaybe<Scalars['String']>;
  food_provided?: InputMaybe<Scalars['String']>;
  food_weekends?: InputMaybe<Scalars['Boolean']>;
  no_of_meals?: InputMaybe<Scalars['Int']>;
  transportation?: InputMaybe<Scalars['Boolean']>;
  transportation_additional_info?: InputMaybe<Scalars['String']>;
  transportation_covered?: InputMaybe<Scalars['String']>;
  transportation_provided?: InputMaybe<Scalars['String']>;
  transportation_weekends?: InputMaybe<Scalars['Boolean']>;
};

export type MailTemplate = {
  __typename?: 'MailTemplate';
  body?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mail_template_type?: Maybe<Constant>;
  name?: Maybe<Scalars['String']>;
  office?: Maybe<Office>;
  programme?: Maybe<Programme>;
  status?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
};

export type MailTemplateDeliverabilityReport = {
  __typename?: 'MailTemplateDeliverabilityReport';
  /** report */
  report?: Maybe<Scalars['JSON']>;
};

export type MailTemplateInput = {
  mail_template_type_id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  office_id: Scalars['ID'];
  programme_id?: InputMaybe<Scalars['ID']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type MailTemplateMutationQueryType = {
  /** Create Mail Template */
  createMailTemplate?: Maybe<MailTemplate>;
  deleteMailTemplate?: Maybe<MailTemplate>;
  /** Publish Mail Template */
  publishMailTemplate?: Maybe<MailTemplate>;
  /** Send a test email for the mail template */
  sendTestMailTemplate?: Maybe<MailTemplate>;
  /** Update Mail Template */
  updateMailTemplate?: Maybe<MailTemplate>;
};


export type MailTemplateMutationQueryTypeCreateMailTemplateArgs = {
  content?: InputMaybe<Scalars['String']>;
  mail_template?: InputMaybe<MailTemplateInput>;
};


export type MailTemplateMutationQueryTypeDeleteMailTemplateArgs = {
  id: Scalars['ID'];
};


export type MailTemplateMutationQueryTypePublishMailTemplateArgs = {
  id: Scalars['ID'];
};


export type MailTemplateMutationQueryTypeSendTestMailTemplateArgs = {
  id: Scalars['ID'];
};


export type MailTemplateMutationQueryTypeUpdateMailTemplateArgs = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  mail_template?: InputMaybe<MailTemplateInput>;
};

export type MailTemplateQueryType = {
  deliverabilityReport?: Maybe<MailTemplateDeliverabilityReport>;
  getMailTemplate?: Maybe<MailTemplate>;
  mailTemplates?: Maybe<Array<Maybe<MailTemplate>>>;
};


export type MailTemplateQueryTypeDeliverabilityReportArgs = {
  mail_template_type_name: Scalars['String'];
  office_id?: InputMaybe<Scalars['ID']>;
  programme_id?: InputMaybe<Scalars['ID']>;
};


export type MailTemplateQueryTypeGetMailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MailTemplateQueryTypeMailTemplatesArgs = {
  mail_template_type_filter?: InputMaybe<Scalars['ID']>;
  office_filter?: InputMaybe<Scalars['ID']>;
  programme_filter?: InputMaybe<Scalars['ID']>;
  status_filter?: InputMaybe<Scalars['String']>;
};

export type Manager = {
  __typename?: 'Manager';
  accepted?: Maybe<Scalars['Boolean']>;
  accepted_reason?: Maybe<Scalars['String']>;
  aiesec_email?: Maybe<Scalars['String']>;
  contacted_at?: Maybe<Scalars['String']>;
  contacted_by?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  cover_photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  interviewed?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  nps_score?: Maybe<Scalars['String']>;
  /** permissions */
  permissions?: Maybe<PersonPermissionType>;
  phone?: Maybe<Scalars['String']>;
  profile_photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type McFeature = {
  __typename?: 'McFeature';
  active?: Maybe<Scalars['Boolean']>;
  feature?: Maybe<Feature>;
  id?: Maybe<Scalars['ID']>;
  option?: Maybe<Scalars['String']>;
};

export type McFeatureQuery = {
  /** List all Features for the geocoded location */
  mcFeatures?: Maybe<Array<Maybe<McFeature>>>;
};


export type McFeatureQueryMcFeaturesArgs = {
  mc_id?: InputMaybe<Scalars['ID']>;
};

export type MemberLead = {
  __typename?: 'MemberLead';
  academic_level?: Maybe<Constant>;
  backgrounds?: Maybe<Array<ConstantMap>>;
  checklist_response?: Maybe<ChecklistResponse>;
  comments?: Maybe<CommentConnection>;
  comments_count?: Maybe<Scalars['Int']>;
  country_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_via?: Maybe<Scalars['String']>;
  creator?: Maybe<Person>;
  date_moved_to_accepted?: Maybe<Scalars['DateTime']>;
  date_moved_to_contacted?: Maybe<Scalars['DateTime']>;
  date_moved_to_in_process?: Maybe<Scalars['DateTime']>;
  date_moved_to_rejected?: Maybe<Scalars['DateTime']>;
  date_of_birth?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  employment_status?: Maybe<Constant>;
  home_lc?: Maybe<Office>;
  id: Scalars['ID'];
  lc_alignment?: Maybe<LcAlignment>;
  lead_name?: Maybe<Scalars['String']>;
  managers?: Maybe<Array<Person>>;
  motivation_reason?: Maybe<Constant>;
  moved_to_accepted_by?: Maybe<Person>;
  moved_to_contacted_by?: Maybe<Person>;
  moved_to_in_process_by?: Maybe<Person>;
  moved_to_rejected_by?: Maybe<Person>;
  /** permissions */
  permissions?: Maybe<MemberLeadPermissionType>;
  person?: Maybe<Person>;
  phone?: Maybe<Scalars['String']>;
  preferred_mode_of_contact?: Maybe<Constant>;
  referral_type?: Maybe<Constant>;
  status?: Maybe<Scalars['String']>;
  status_last_updated_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type MemberLeadCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type MemberLeadFilter = {
  academic_level_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  backgrounds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_at?: InputMaybe<DateInput>;
  created_via?: InputMaybe<Scalars['String']>;
  date_of_birth?: InputMaybe<DateInput>;
  employment_status_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  has_managers?: InputMaybe<Scalars['Boolean']>;
  home_committee?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lc_alignment_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lead_name?: InputMaybe<Scalars['String']>;
  managers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  motivation_reason_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  preferred_mode_of_contact_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  q?: InputMaybe<Scalars['String']>;
  referral_type_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sort?: InputMaybe<MemberLeadSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  status_last_updated_at?: InputMaybe<DateInput>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<DateInput>;
};

export type MemberLeadInput = {
  academic_level_id?: InputMaybe<Scalars['Int']>;
  alignment_id?: InputMaybe<Scalars['Int']>;
  backgrounds?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  country_code?: InputMaybe<Scalars['String']>;
  date_of_birth?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  employment_status_id?: InputMaybe<Scalars['Int']>;
  home_lc_id?: InputMaybe<Scalars['Int']>;
  lead_name?: InputMaybe<Scalars['String']>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  motivation_reason_id?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  preferred_mode_of_contact_id?: InputMaybe<Scalars['Int']>;
  referral_type_id?: InputMaybe<Scalars['Int']>;
};

export type MemberLeadList = {
  __typename?: 'MemberLeadList';
  data?: Maybe<Array<Maybe<MemberLead>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type MemberLeadMutationQuery = {
  /** Move member Lead to Accept */
  acceptMemberLead?: Maybe<MemberLead>;
  /** Move Member Lead to contact */
  contactMemberLead?: Maybe<MemberLead>;
  /** Create checklist response */
  createChecklistResponseMemberLead?: Maybe<ChecklistResponse>;
  /** Create Member Lead */
  createMemberLead?: Maybe<MemberLead>;
  /**
   * Move member Lead to Accept
   * @deprecated Use "acceptMemberLead" field instead.
   */
  memberLeadAccept?: Maybe<MemberLead>;
  /**
   * Create checklist response
   * @deprecated Use "createChecklistResponseMemberLead" field instead.
   */
  memberLeadChecklistResponseCreate?: Maybe<ChecklistResponse>;
  /**
   * Move Member Lead to contact
   * @deprecated Use "contactMemberLead" field instead.
   */
  memberLeadContact?: Maybe<MemberLead>;
  /**
   * Create Member Lead
   * @deprecated Use "createMemberLead" field instead.
   */
  memberLeadCreate?: Maybe<MemberLead>;
  /**
   * Move member Lead to Process
   * @deprecated Use "processMemberLead" field instead.
   */
  memberLeadProcess?: Maybe<MemberLead>;
  /**
   * Move member Lead to Reject
   * @deprecated Use "rejectMemberLead" field instead.
   */
  memberLeadReject?: Maybe<MemberLead>;
  /**
   * Update Member Lead
   * @deprecated Use "updateMemberLead" field instead.
   */
  memberLeadUpdate?: Maybe<MemberLead>;
  /** Move member Lead to Process */
  processMemberLead?: Maybe<MemberLead>;
  /** Move member Lead to Reject */
  rejectMemberLead?: Maybe<MemberLead>;
  /** Update Member Lead */
  updateMemberLead?: Maybe<MemberLead>;
};


export type MemberLeadMutationQueryAcceptMemberLeadArgs = {
  id: Scalars['ID'];
};


export type MemberLeadMutationQueryContactMemberLeadArgs = {
  id: Scalars['ID'];
};


export type MemberLeadMutationQueryCreateChecklistResponseMemberLeadArgs = {
  answers: Array<InputMaybe<Scalars['JSON']>>;
  id: Scalars['ID'];
  survey_id: Scalars['ID'];
};


export type MemberLeadMutationQueryCreateMemberLeadArgs = {
  member_lead?: InputMaybe<MemberLeadInput>;
};


export type MemberLeadMutationQueryMemberLeadAcceptArgs = {
  id: Scalars['ID'];
};


export type MemberLeadMutationQueryMemberLeadChecklistResponseCreateArgs = {
  answers: Array<InputMaybe<Scalars['JSON']>>;
  id: Scalars['ID'];
  survey_id: Scalars['ID'];
};


export type MemberLeadMutationQueryMemberLeadContactArgs = {
  id: Scalars['ID'];
};


export type MemberLeadMutationQueryMemberLeadCreateArgs = {
  member_lead?: InputMaybe<MemberLeadInput>;
};


export type MemberLeadMutationQueryMemberLeadProcessArgs = {
  id: Scalars['ID'];
};


export type MemberLeadMutationQueryMemberLeadRejectArgs = {
  id: Scalars['ID'];
};


export type MemberLeadMutationQueryMemberLeadUpdateArgs = {
  id: Scalars['ID'];
  member_lead?: InputMaybe<MemberLeadInput>;
};


export type MemberLeadMutationQueryProcessMemberLeadArgs = {
  id: Scalars['ID'];
};


export type MemberLeadMutationQueryRejectMemberLeadArgs = {
  id: Scalars['ID'];
};


export type MemberLeadMutationQueryUpdateMemberLeadArgs = {
  id: Scalars['ID'];
  member_lead?: InputMaybe<MemberLeadInput>;
};

export type MemberLeadPermissionType = {
  __typename?: 'MemberLeadPermissionType';
  can_fill_checklist?: Maybe<Scalars['Boolean']>;
  can_move_to_accept?: Maybe<Scalars['Boolean']>;
  can_move_to_contact?: Maybe<Scalars['Boolean']>;
  can_move_to_in_process?: Maybe<Scalars['Boolean']>;
  can_move_to_reject?: Maybe<Scalars['Boolean']>;
};

export type MemberLeadQuery = {
  /** Check if Member lead exists */
  checkIfMemberLeadExists?: Maybe<Scalars['String']>;
  memberLead?: Maybe<MemberLead>;
  /**
   * Check if Member lead exists
   * @deprecated Use "checkIfMemberLeadExists" field instead.
   */
  memberLeadCheckIfExists?: Maybe<Scalars['String']>;
  /** @deprecated Use "memberLead" field instead. */
  memberLeadGet?: Maybe<MemberLead>;
  memberLeads?: Maybe<MemberLeadList>;
};


export type MemberLeadQueryCheckIfMemberLeadExistsArgs = {
  email: Scalars['String'];
};


export type MemberLeadQueryMemberLeadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MemberLeadQueryMemberLeadCheckIfExistsArgs = {
  email: Scalars['String'];
};


export type MemberLeadQueryMemberLeadGetArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MemberLeadQueryMemberLeadsArgs = {
  filters?: InputMaybe<MemberLeadFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export enum MemberLeadSortOption {
  AcademicLevelName = 'academic_level_name',
  CreatedAt = 'created_at',
  CreatedVia = 'created_via',
  DateOfBirth = 'date_of_birth',
  EmploymentStatusName = 'employment_status_name',
  HomeMcName = 'home_mc_name',
  LcAlignmentName = 'lc_alignment_name',
  LeadName = 'lead_name',
  PreferredModeOfContactName = 'preferred_mode_of_contact_name',
  ReferralTypeName = 'referral_type_name',
  Status = 'status',
  UpdatedAt = 'updated_at'
}

export type MemberPosition = {
  __typename?: 'MemberPosition';
  committee_department?: Maybe<CommitteeDepartmentType>;
  created_at?: Maybe<Scalars['DateTime']>;
  duration?: Maybe<Constant>;
  end_date?: Maybe<Scalars['Date']>;
  exit_reason?: Maybe<Constant>;
  focus_products?: Maybe<Array<Maybe<Scalars['Int']>>>;
  function?: Maybe<Constant>;
  id?: Maybe<Scalars['Int']>;
  is_ixp?: Maybe<Scalars['Boolean']>;
  ixp_products?: Maybe<Array<Programme>>;
  lda_links?: Maybe<Scalars['JSON']>;
  ldm_report?: Maybe<Scalars['JSON']>;
  membership_lps?: Maybe<SurveyResponse>;
  no_of_ixps?: Maybe<Scalars['Int']>;
  office?: Maybe<Office>;
  other_exit_reason?: Maybe<Scalars['String']>;
  permissions?: Maybe<MemberPositionPermission>;
  person?: Maybe<Person>;
  reporters?: Maybe<Array<MemberPosition>>;
  reports_to?: Maybe<Person>;
  reports_to_position_id?: Maybe<Scalars['Int']>;
  role?: Maybe<Constant>;
  start_date?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['Int']>;
  term?: Maybe<Constant>;
  terminated_at?: Maybe<Scalars['DateTime']>;
  terminated_by?: Maybe<Person>;
  title?: Maybe<Scalars['String']>;
  vp_id?: Maybe<Scalars['Int']>;
};

/** The connection type for MemberPosition. */
export type MemberPositionConnection = {
  __typename?: 'MemberPositionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MemberPositionEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MemberPosition>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type MemberPositionEdge = {
  __typename?: 'MemberPositionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<MemberPosition>;
};

export type MemberPositionFilter = {
  age?: InputMaybe<RangeInput>;
  background_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  department_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  duration_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  end_date?: InputMaybe<DateInput>;
  exit_reason_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  function_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  gender?: InputMaybe<Scalars['String']>;
  is_ixp?: InputMaybe<Scalars['Boolean']>;
  ixp_products?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  language_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  no_of_ixps?: InputMaybe<RangeInput>;
  office_id?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  /** id of the person to be filtered */
  reports_to?: InputMaybe<Scalars['Int']>;
  role_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  skill_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  start_date?: InputMaybe<DateInput>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  study_level_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type MemberPositionInput = {
  committee_department_id?: InputMaybe<Scalars['Int']>;
  committee_department_name?: InputMaybe<Scalars['String']>;
  duration_id?: InputMaybe<Scalars['Int']>;
  end_date?: InputMaybe<Scalars['Date']>;
  focus_products?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  function_id?: InputMaybe<Scalars['Int']>;
  invite_person?: InputMaybe<InvitePersonInput>;
  office_id?: InputMaybe<Scalars['Int']>;
  person_email?: InputMaybe<Scalars['String']>;
  reports_to_position_id?: InputMaybe<Scalars['Int']>;
  role_id?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['Date']>;
  team_id?: InputMaybe<Scalars['Int']>;
  term_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  vp_id?: InputMaybe<Scalars['Int']>;
};

export type MemberPositionList = {
  __typename?: 'MemberPositionList';
  data?: Maybe<Array<Maybe<MemberPosition>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type MemberPositionMutationQuery = {
  createMemberPosition?: Maybe<MemberPosition>;
  /** @deprecated Use "createMemberPosition" field instead. */
  memberPositionCreate?: Maybe<MemberPosition>;
  /** @deprecated Use "terminateMemberPosition" field instead. */
  memberPositionTerminate?: Maybe<MemberPosition>;
  /** @deprecated Use "updateMemberPosition" field instead. */
  memberPositionUpdate?: Maybe<MemberPosition>;
  terminateMemberPosition?: Maybe<MemberPosition>;
  updateMemberPosition?: Maybe<MemberPosition>;
};


export type MemberPositionMutationQueryCreateMemberPositionArgs = {
  member_position: MemberPositionInput;
};


export type MemberPositionMutationQueryMemberPositionCreateArgs = {
  member_position: MemberPositionInput;
};


export type MemberPositionMutationQueryMemberPositionTerminateArgs = {
  exit_reason_id: Scalars['Int'];
  id: Scalars['Int'];
  other_exit_reason?: InputMaybe<Scalars['String']>;
};


export type MemberPositionMutationQueryMemberPositionUpdateArgs = {
  id: Scalars['Int'];
  member_position: MemberPositionInput;
};


export type MemberPositionMutationQueryTerminateMemberPositionArgs = {
  exit_reason_id: Scalars['Int'];
  id: Scalars['Int'];
  other_exit_reason?: InputMaybe<Scalars['String']>;
};


export type MemberPositionMutationQueryUpdateMemberPositionArgs = {
  id: Scalars['Int'];
  member_position: MemberPositionInput;
};

export type MemberPositionPermission = {
  __typename?: 'MemberPositionPermission';
  can_terminate?: Maybe<Scalars['Boolean']>;
  can_update?: Maybe<Scalars['Boolean']>;
  can_view_lda?: Maybe<Scalars['Boolean']>;
};

export type MemberPositionQuery = {
  downloadMemberPositions?: Maybe<Scalars['String']>;
  memberPosition?: Maybe<MemberPosition>;
  memberPositions?: Maybe<MemberPositionList>;
  /** @deprecated Use "downloadMemberPosition" field instead. */
  memberPositionsDownload?: Maybe<Scalars['String']>;
};


export type MemberPositionQueryDownloadMemberPositionsArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<MemberPositionFilter>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type MemberPositionQueryMemberPositionArgs = {
  id: Scalars['Int'];
};


export type MemberPositionQueryMemberPositionsArgs = {
  filters?: InputMaybe<MemberPositionFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type MemberPositionQueryMemberPositionsDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<MemberPositionFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  delivered_at?: Maybe<Scalars['DateTime']>;
  from?: Maybe<ConversationParticipantPerson>;
  id?: Maybe<Scalars['ID']>;
  opened_at?: Maybe<Scalars['DateTime']>;
};

/** The connection type for Message. */
export type MessageConnection = {
  __typename?: 'MessageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MessageEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Message>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type MessageEdge = {
  __typename?: 'MessageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Message>;
};

export type MutationType = AccommodationAssignmentMutationQuery & AccommodationAvailabilityMutationQuery & AccommodationMutationQuery & AttachmentMutationQuery & BranchEmployeeMutationQuery & BranchMutationQuery & CampaignMutationQuery & CityLcMutationQuery & CityMutationQuery & ClientDataMutationQuery & CommentMutationQuery & CommitteeDepartmentMutationQuery & CommitteeMutationQuery & CommitteeTargetMutationQuery & CurrentPersonMutationQuery & EmployeeLeadMutationQuery & EngagementMutationQuery & EventMutationQueryType & EventRegistrationMutationQueryType & EventSpeakerMutationQueryType & EventTicketMutationQueryType & FileImportMutationQuery & GlobalPartnerRequestMutationQueryType & InvoiceMutationQuery & LcAlignmentsMutationQueryType & LdaResponseMutationQuery & LdmResponseMutationQueryType & MailTemplateMutationQueryType & MemberLeadMutationQuery & MemberPositionMutationQuery & NationalPartnerMutationQuery & NotificationMutationQuery & OpportunityApplicationMutationQuery & OpportunityMutationQuery & OpportunityPotentialCandidateQueryType & OrganisationMutationQuery & OrganizationDevelopmentMutationQuery & PageComponentMutationQuery & PageMutationQuery & PartnerSignupMutationQuery & PersonMutationQuery & PlanMutationQuery & PlatformNpsResponseMutationQueryType & PositionMutationQuery & ProgrammeFeeMutationQuery & ProgrammeManagerMutationQuery & QuestionnaireMutationQuery & SlotMutationQuery & StandardsSurveyMutationQuery & SuggestedCountryMutationQuery & SurveyMutationQuery & TagListMutationQueryType & TeamMutationQuery & TermMutationQuery & TimelineMutationQuery & TodoMutationQuery & {
  __typename?: 'MutationType';
  /** Move member Lead to Accept */
  acceptMemberLead?: Maybe<MemberLead>;
  /** Set campaign as activate */
  activateCampaign?: Maybe<Campaign>;
  addAutoAssignment?: Maybe<LcAlignment>;
  addContractProgrammeFee?: Maybe<ProgrammeFee>;
  /** Add a cv to user */
  addCurrentPersonCv?: Maybe<CurrentPerson>;
  addLcAlignment?: Maybe<LcAlignment>;
  /** Create opportunity question */
  addOpportunityQuestion?: Maybe<OpportunityQuestion>;
  /** Create Picture for Accommodation */
  addPictureToAccommodation?: Maybe<Picture>;
  /** Create opportunity question */
  addQuestion?: Maybe<Question>;
  /** Create Selection Process for opportunity */
  addSelectionProcess?: Maybe<SelectionProcess>;
  addSignupQuestions?: Maybe<Office>;
  /** Add todo to goal */
  addTodoToGoal?: Maybe<Todo>;
  /** An Opportunity Application */
  anApplication?: Maybe<OpportunityApplication>;
  /** Send a message to the application IDs. */
  applicationBulkMessage?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** Extend application experience duration */
  applicationExtendExperience?: Maybe<OpportunityApplication>;
  /** Extend Remote application experience duration */
  applicationExtendRemoteExperience?: Maybe<OpportunityApplication>;
  /** Update application questionnaire of opportunity application */
  applicationQuestionnaireUpdate?: Maybe<OpportunityApplication>;
  /** Delete application scorecard attribute */
  applicationScorecardAttributeDelete?: Maybe<OpportunityApplication>;
  /** Approve Opportunity Application */
  approveApplication?: Maybe<OpportunityApplication>;
  /** Approve Branch */
  approveBranch?: Maybe<Branch>;
  /** Approve Branch Employee */
  approveBranchEmployee?: Maybe<BranchEmployee>;
  /** Organisation Approve */
  approveOrganisation?: Maybe<Organisation>;
  archiveEvent?: Maybe<Event>;
  /** Organisation Archived */
  archiveOrganisation?: Maybe<Organisation>;
  /** Archive Person */
  archivePerson?: Maybe<Person>;
  assignProgrammeManager?: Maybe<ProgrammeManager>;
  /** Delete opportunity question */
  assignQuestionnaire?: Maybe<Opportunity>;
  /**
   * Approve Branch
   * @deprecated Use "approveBranch" field instead.
   */
  branchApprove?: Maybe<Branch>;
  branchContracts?: Maybe<Contract>;
  /**
   * Deny Branch
   * @deprecated Use "denyBranch" field instead.
   */
  branchDeny?: Maybe<Branch>;
  /**
   * Approve Branch Employee
   * @deprecated Use "approveBranchEmployee" field instead.
   */
  branchEmployeeApprove?: Maybe<BranchEmployee>;
  /**
   * Create Branch Employee
   * @deprecated Use "createBranchEmployee" field instead.
   */
  branchEmployeeCreate?: Maybe<BranchEmployee>;
  /**
   * Delete Branch Employee
   * @deprecated Use "deleteBranchEmployee" field instead.
   */
  branchEmployeeDelete?: Maybe<BranchEmployee>;
  /**
   * Reject Branch Employee
   * @deprecated Use "rejectBranchEmployee" field instead.
   */
  branchEmployeeReject?: Maybe<BranchEmployee>;
  /**
   * Update Branch Employee
   * @deprecated Use "updateBranchEmployee" field instead.
   */
  branchEmployeeUpdate?: Maybe<BranchEmployee>;
  /** Break Approved Opportunity Application */
  breakApprovedApplication?: Maybe<OpportunityApplication>;
  /** Break Realization Opportunity Application */
  breakRealizationApplication?: Maybe<OpportunityApplication>;
  /** Break Remote Realization of Opportunity Application */
  breakRemoteRealization?: Maybe<OpportunityApplication>;
  /** update employee_lead for the given manager ids */
  bulkAssignManagersForEmployeeLead?: Maybe<Array<Maybe<EmployeeLead>>>;
  /** update followups for the given ids */
  bulkAssignManagersForOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  /** update followups for the given ids */
  bulkAssignManagersForPeople?: Maybe<Array<Maybe<Person>>>;
  /** Bulk Create questionnaire question */
  bulkCreateQuestion?: Maybe<Array<Maybe<Question>>>;
  /** Bulk Delete Questionnaire questions */
  bulkDeleteQuestion?: Maybe<Array<Maybe<Question>>>;
  /** update followups for the given ids */
  bulkFollowup?: Maybe<Array<Maybe<Person>>>;
  /** Match Opportunity Application */
  bulkMatchApplications?: Maybe<Array<Maybe<OpportunityApplication>>>;
  bulkOpenOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  /** Bulk reject applications */
  bulkRejectApplications?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** Delete list of opportunity questions */
  bulkRemoveOpportunityQuestions?: Maybe<Array<Maybe<OpportunityQuestion>>>;
  /** Add tags for the given ids */
  bulkTagUpdateForApplications?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** Add tags for the given ids */
  bulkTagUpdateForOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  /** update followups for the given ids */
  bulkTagUpdateForPeople?: Maybe<Array<Maybe<Person>>>;
  /** update employee_lead for the given manager ids */
  bulkUnassignManagersForEmployeeLead?: Maybe<Array<Maybe<EmployeeLead>>>;
  /** update followups for the given ids */
  bulkUnassignManagersForOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  /** update followups for the given ids */
  bulkUnassignManagersForPeople?: Maybe<Array<Maybe<Person>>>;
  /** Bulk update questions for Questionnaire */
  bulkUpdateQuestion?: Maybe<Array<Maybe<Question>>>;
  /**
   * Set campaign as activate
   * @deprecated Use "activateCampaign" field instead.
   */
  campaignActivate?: Maybe<Campaign>;
  /**
   * Create a Campaign
   * @deprecated Use "createCampaign" field instead.
   */
  campaignCreate?: Maybe<Campaign>;
  /**
   * Set campaign as inactivate
   * @deprecated Use "deactivateCampaign" field instead.
   */
  campaignDeactivate?: Maybe<Campaign>;
  /**
   * Update a Campaign
   * @deprecated Use "updateCampaign" field instead.
   */
  campaignUpdate?: Maybe<Campaign>;
  /** Change custom status for Opportunity Application */
  changeCustomStatusApplication?: Maybe<OpportunityApplication>;
  /** Mark all notifications for the current user as read */
  clearNotifications?: Maybe<Array<Maybe<Notification>>>;
  /** Create or update a client data */
  clientDataPut?: Maybe<ClientData>;
  /** Update a client data */
  clientDataUpdate?: Maybe<ClientData>;
  /** Bulk update committee targets for committee */
  committeeTargetBulkUpdate?: Maybe<Array<Maybe<CommitteeTarget>>>;
  /** Complete Opportunity Application */
  completeApplication?: Maybe<OpportunityApplication>;
  /** complete todo */
  completeTodo?: Maybe<Todo>;
  /** Move Member Lead to contact */
  contactMemberLead?: Maybe<MemberLead>;
  /** Create Accommodation */
  createAccommodation?: Maybe<Accommodation>;
  /** Create Accommodation Assignment */
  createAccommodationAssignment?: Maybe<AccommodationAssignment>;
  /** Create Accommodation Availability */
  createAccommodationAvailability?: Maybe<AccommodationAvailability>;
  /** Create Opportunity Application */
  createApplication?: Maybe<OpportunityApplication>;
  /** Create attachment */
  createAttachment?: Maybe<Attachment>;
  /** Create Branch */
  createBranch?: Maybe<Branch>;
  /** Create Branch Employee */
  createBranchEmployee?: Maybe<BranchEmployee>;
  /** Create a Campaign */
  createCampaign?: Maybe<Campaign>;
  /** Create checklist response */
  createChecklistResponseMemberLead?: Maybe<ChecklistResponse>;
  /** Create City */
  createCity?: Maybe<City>;
  /** Create CityLC */
  createCityLc?: Maybe<CityLc>;
  /** Create comment */
  createComment?: Maybe<Comment>;
  /** Create comment for the opportunity */
  createCommentForOpportunity?: Maybe<Comment>;
  /** Create Committee */
  createCommittee?: Maybe<Office>;
  /** Create committee city */
  createCommitteeCity?: Maybe<Office>;
  createCommitteeDepartment?: Maybe<CommitteeDepartmentType>;
  /** Create Opportunity Custom Status */
  createCustomStatusOpportunity?: Maybe<CustomStatusType>;
  /** Create Employee Lead */
  createEmployeeLead?: Maybe<EmployeeLead>;
  /** Create GlobalPartnerRequest */
  createGlobalPartnerRequest?: Maybe<GlobalPartnerRequestType>;
  /** Create goal */
  createGoal?: Maybe<Todo>;
  /** Create Invoice */
  createInvoice?: Maybe<InvoiceType>;
  /** Opportunity ID */
  createLocalVolunteerOpportunity?: Maybe<Opportunity>;
  /** Create Mail Template */
  createMailTemplate?: Maybe<MailTemplate>;
  /** Create Member Lead */
  createMemberLead?: Maybe<MemberLead>;
  createMemberPosition?: Maybe<MemberPosition>;
  /** Create National Partner */
  createNationalPartner?: Maybe<NationalPartnerType>;
  /** Create Opportunity */
  createOpportunity?: Maybe<Opportunity>;
  /** Create Organisation */
  createOrganisation?: Maybe<Organisation>;
  /** Create scorecard for Organisation */
  createOrganisationScorecard?: Maybe<Scorecard>;
  /** create Organisation Scorecard Attribute */
  createOrganisationScorecardAttribute?: Maybe<Scorecard>;
  /** Create page */
  createPage?: Maybe<PageType>;
  /** Create page component */
  createPageComponent?: Maybe<PageComponentDraftType>;
  /** Create Person */
  createPerson?: Maybe<Person>;
  createPersonAcademicExperience?: Maybe<PreviousExperience>;
  createPersonProfessionalExperience?: Maybe<ProfessionalExperience>;
  createPlatformNps?: Maybe<Survey>;
  /** Create Project */
  createProject?: Maybe<Opportunity>;
  /** Create Questionnaire for Organisation */
  createQuestionnaire?: Maybe<Questionnaire>;
  /** Create scorecards for Opportunity Application */
  createScorecardsApplication?: Maybe<OpportunityApplication>;
  /** Create Slot */
  createSlot?: Maybe<Slot>;
  /** Create Suggested Country */
  createSuggestedCountry?: Maybe<SuggestedCountry>;
  createTagList?: Maybe<TagList>;
  /** Create team */
  createTeam?: Maybe<Team>;
  /** Create position for the team */
  createTeamPosition?: Maybe<Position>;
  /** Create Term */
  createTerm?: Maybe<Term>;
  /** Create timeline for the application */
  createTimeline?: Maybe<Timeline>;
  /** Create todo for the person */
  createTodo?: Maybe<Todo>;
  /** Create Opportunity Potential Candidate */
  createWatchlist?: Maybe<OpportunityPotentialCandidateType>;
  currentPersonAnonymize?: Maybe<CurrentPerson>;
  currentPersonEfResult?: Maybe<CurrentPerson>;
  currentPersonSavedFiltersCreate?: Maybe<SavedFilter>;
  currentPersonSavedFiltersDelete?: Maybe<SavedFilter>;
  currentPersonSavedFiltersUpdate?: Maybe<SavedFilter>;
  /** Update Current Person */
  currentPersonUpdate?: Maybe<CurrentPerson>;
  /** Update Current Person */
  currentPersonUpdateHomeLc?: Maybe<CurrentPerson>;
  /** Set campaign as inactivate */
  deactivateCampaign?: Maybe<Campaign>;
  deleteAcademicExperienceShow?: Maybe<Person>;
  deleteAccommodation?: Maybe<Accommodation>;
  /** Delete Accommodation Assignment */
  deleteAccommodationAssignment?: Maybe<AccommodationAssignment>;
  deleteAccommodationAvailability?: Maybe<AccommodationAvailability>;
  deleteAttachment?: Maybe<Attachment>;
  /** Delete Branch Employee */
  deleteBranchEmployee?: Maybe<BranchEmployee>;
  deleteCity?: Maybe<City>;
  /** Delete CityLC */
  deleteCityLc?: Maybe<CityLc>;
  deleteComment?: Maybe<Person>;
  deleteCommittee?: Maybe<Office>;
  /** Delete a cv of current person */
  deleteCurrentPersonCv?: Maybe<CurrentPerson>;
  /** Delete Opportunity Custom Status */
  deleteCustomStatusOpportunity?: Maybe<CustomStatusType>;
  /** Destroy Active storage attachment */
  deleteImage?: Maybe<ImageType>;
  /** Delete Invoice */
  deleteInvoice?: Maybe<InvoiceType>;
  deleteLcAlignment?: Maybe<LcAlignment>;
  deleteMailTemplate?: Maybe<MailTemplate>;
  /** Delete National Partner */
  deleteNationalPartner?: Maybe<NationalPartnerType>;
  /** Delete organisation scorecard */
  deleteOrganisationScorecard?: Maybe<Scorecard>;
  /** Delete organisation scorecard attribute */
  deleteOrganisationScorecardAttribute?: Maybe<ScorecardAttributeType>;
  deletePage?: Maybe<PageType>;
  deletePageComponent?: Maybe<PageComponentType>;
  deletePosition?: Maybe<Position>;
  deleteProfessionalExperience?: Maybe<Person>;
  /** Delete Questionnaire */
  deleteQuestionnaire?: Maybe<Questionnaire>;
  /** Delete Slot */
  deleteSlot?: Maybe<Slot>;
  /** Delete Suggested Country */
  deleteSuggestedCountry?: Maybe<SuggestedCountry>;
  deleteTeam?: Maybe<Team>;
  deleteTerm?: Maybe<Term>;
  deleteTimeline?: Maybe<Timeline>;
  deleteTodo?: Maybe<Todo>;
  /** Update Opportunity Potential Candidate */
  deleteWatchlist?: Maybe<OpportunityPotentialCandidateType>;
  /** Deny Branch */
  denyBranch?: Maybe<Branch>;
  /** Opportunity ID */
  duplicateOpportunity?: Maybe<Opportunity>;
  duplicatePageComponent?: Maybe<PageComponentType>;
  /** Questionnaire ID */
  duplicateQuestionnaire?: Maybe<Questionnaire>;
  /**
   * Move Employee Lead to attempted to contact
   * @deprecated Use "moveEmployeeLeadToAttemptedToContact" field instead.
   */
  employeeLeadAttemptedToContact?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to Connected
   * @deprecated Use "moveEmployeeLeadToConnected" field instead.
   */
  employeeLeadConnected?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to Contract Sent
   * @deprecated Use "moveEmployeeLeadToContractSent" field instead.
   */
  employeeLeadContractSent?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to Contract Signed
   * @deprecated Use "moveEmployeeLeadToContractSigned" field instead.
   */
  employeeLeadContractSigned?: Maybe<EmployeeLead>;
  /**
   * Create Employee Lead
   * @deprecated Use "createEmployeeLead" field instead.
   */
  employeeLeadCreate?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to Deal lost
   * @deprecated Use "moveEmployeeLeadToDealLost" field instead.
   */
  employeeLeadDealLost?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to Future pipeline
   * @deprecated Use "moveEmployeeLeadToFuturePipeline" field instead.
   */
  employeeLeadFuturePipeline?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to new lead
   * @deprecated Use "moveEmployeeLeadToNewLead" field instead.
   */
  employeeLeadNewLead?: Maybe<EmployeeLead>;
  /**
   * Move Employee Lead to Proposal Sent
   * @deprecated Use "moveEmployeeLeadToProposalSent" field instead.
   */
  employeeLeadProposalSent?: Maybe<EmployeeLead>;
  /**
   * Send invite to Lead
   * @deprecated Use "sendInviteToEmployeeLead" field instead.
   */
  employeeLeadSendInvite?: Maybe<EmployeeLead>;
  /**
   * Update Employee Lead
   * @deprecated Use "updateEmployeeLead" field instead.
   */
  employeeLeadUpdate?: Maybe<EmployeeLead>;
  /** Create Engagement */
  engagementCreate?: Maybe<Engagement>;
  /** Delete Engagement */
  engagementDelete?: Maybe<Engagement>;
  /** Update Engagement */
  engagementUpdate?: Maybe<Engagement>;
  eventCreate?: Maybe<Event>;
  eventRegistrationCancel?: Maybe<EventRegistration>;
  eventRegistrationConfirm?: Maybe<EventRegistration>;
  eventRegistrationCreate?: Maybe<EventRegistration>;
  eventRegistrationFollowUp?: Maybe<EventRegistration>;
  eventRegistrationMakeTransaction?: Maybe<Transaction>;
  eventRegistrationPayByCash?: Maybe<EventRegistration>;
  eventSpeakerCreate?: Maybe<EventSpeaker>;
  eventSpeakerDelete?: Maybe<EventSpeaker>;
  eventSpeakerUpdate?: Maybe<EventSpeaker>;
  eventTicketCreate?: Maybe<EventTicket>;
  eventTicketDelete?: Maybe<EventTicket>;
  eventTicketUpdate?: Maybe<EventTicket>;
  eventUpdate?: Maybe<Event>;
  favouriteEvent?: Maybe<Event>;
  favouriteOpportunity?: Maybe<Opportunity>;
  favouritePage?: Maybe<PageType>;
  /** Upload csv/excel file */
  fileImport?: Maybe<Scalars['String']>;
  /** Update application Nps Response */
  fillNpsResponse?: Maybe<SurveyResponse>;
  /** Update Organisation */
  followupOrganisation?: Maybe<Organisation>;
  freezeUnfreezeCommittee?: Maybe<Office>;
  generateCv?: Maybe<Person>;
  /** Generate email */
  generateEmail?: Maybe<Person>;
  generateMosCertificate?: Maybe<OpportunityApplication>;
  /** complete todo */
  inCompleteTodo?: Maybe<Todo>;
  incomingProgrammeFeeUpdate?: Maybe<ProgrammeFee>;
  interviewPerson?: Maybe<Person>;
  interviewSlotApplication?: Maybe<Array<Maybe<InterviewSlot>>>;
  /** Update Branch */
  inviteMember?: Maybe<Branch>;
  invitePersonTerm?: Maybe<Person>;
  invoiceApproveCashPayment?: Maybe<InvoiceType>;
  invoicePayByCash?: Maybe<InvoiceType>;
  invoiceTransactionCreate?: Maybe<Transaction>;
  /** Post responses to LDA questions */
  ldaResponse?: Maybe<LdaResponse>;
  /** Create Ldm Response */
  ldmResponse?: Maybe<LdmResponse>;
  markOpportunityRemote?: Maybe<Opportunity>;
  /** Match Opportunity Application */
  matchApplication?: Maybe<OpportunityApplication>;
  /**
   * Move member Lead to Accept
   * @deprecated Use "acceptMemberLead" field instead.
   */
  memberLeadAccept?: Maybe<MemberLead>;
  /** Update checklist for committee */
  memberLeadChecklistQuestionBulkCreate?: Maybe<Array<Maybe<SurveyQuestion>>>;
  /**
   * Create checklist response
   * @deprecated Use "createChecklistResponseMemberLead" field instead.
   */
  memberLeadChecklistResponseCreate?: Maybe<ChecklistResponse>;
  /**
   * Move Member Lead to contact
   * @deprecated Use "contactMemberLead" field instead.
   */
  memberLeadContact?: Maybe<MemberLead>;
  /**
   * Create Member Lead
   * @deprecated Use "createMemberLead" field instead.
   */
  memberLeadCreate?: Maybe<MemberLead>;
  /**
   * Move member Lead to Process
   * @deprecated Use "processMemberLead" field instead.
   */
  memberLeadProcess?: Maybe<MemberLead>;
  /**
   * Move member Lead to Reject
   * @deprecated Use "rejectMemberLead" field instead.
   */
  memberLeadReject?: Maybe<MemberLead>;
  /**
   * Update Member Lead
   * @deprecated Use "updateMemberLead" field instead.
   */
  memberLeadUpdate?: Maybe<MemberLead>;
  /** @deprecated Use "createMemberPosition" field instead. */
  memberPositionCreate?: Maybe<MemberPosition>;
  /** @deprecated Use "terminateMemberPosition" field instead. */
  memberPositionTerminate?: Maybe<MemberPosition>;
  /** @deprecated Use "updateMemberPosition" field instead. */
  memberPositionUpdate?: Maybe<MemberPosition>;
  /** Move Employee Lead to attempted to contact */
  moveEmployeeLeadToAttemptedToContact?: Maybe<EmployeeLead>;
  /** Move Employee Lead to Connected */
  moveEmployeeLeadToConnected?: Maybe<EmployeeLead>;
  /** Move Employee Lead to Contract Sent */
  moveEmployeeLeadToContractSent?: Maybe<EmployeeLead>;
  /** Move Employee Lead to Contract Signed */
  moveEmployeeLeadToContractSigned?: Maybe<EmployeeLead>;
  /** Move Employee Lead to Deal lost */
  moveEmployeeLeadToDealLost?: Maybe<EmployeeLead>;
  /** Move Employee Lead to Future pipeline */
  moveEmployeeLeadToFuturePipeline?: Maybe<EmployeeLead>;
  /** Move Employee Lead to new lead */
  moveEmployeeLeadToNewLead?: Maybe<EmployeeLead>;
  /** Move Employee Lead to Proposal Sent */
  moveEmployeeLeadToProposalSent?: Maybe<EmployeeLead>;
  /** Page move to draft */
  movePageToDraft?: Maybe<PageType>;
  /** Move to Active */
  moveSlotToActive?: Maybe<Slot>;
  /** Move to Inactive */
  moveSlotToInactive?: Maybe<Slot>;
  /** Mark a notification as read */
  notificationRead?: Maybe<Notification>;
  offlineAssessmentApplication?: Maybe<Array<Maybe<OfflineAssessment>>>;
  offlineAssessmentOpportunity?: Maybe<Array<Maybe<OfflineAssessment>>>;
  openOpportunity?: Maybe<Opportunity>;
  opportunityIncrementViews?: Maybe<Opportunity>;
  /** @deprecated Use "markOpportunityRemote" field instead. */
  opportunityMarkRemote?: Maybe<Opportunity>;
  /** @deprecated Use "removeOpportunityCoverPhoto" field instead. */
  opportunityRemoveCoverPhoto?: Maybe<Opportunity>;
  /**
   * Report opportunity
   * @deprecated Use "reportOpportunity" field instead.
   */
  opportunityReport?: Maybe<Opportunity>;
  /** @deprecated Use "submitOpportunityForReview" field instead. */
  opportunitySubmitForReview?: Maybe<Opportunity>;
  /**
   * Unarchive an opportunity
   * @deprecated Use "unarchiveOpportunity" field instead.
   */
  opportunityUnarchive?: Maybe<Opportunity>;
  /** @deprecated Use "unmarkOpportunityRemote" field instead. */
  opportunityUnmarkRemote?: Maybe<Opportunity>;
  /** @deprecated Use "unpublishOpportunity" field instead. */
  opportunityUnpublish?: Maybe<Opportunity>;
  /**
   * Organisation Approve
   * @deprecated Use "approveOrganisation" field instead.
   */
  organisationApprove?: Maybe<Organisation>;
  /**
   * Organisation Archived
   * @deprecated Use "archiveOrganisation" field instead.
   */
  organisationArchive?: Maybe<Organisation>;
  /**
   * Update Organisation
   * @deprecated Use "followupOrganisation" field instead.
   */
  organisationFollowup?: Maybe<Organisation>;
  /**
   * Organisation Reject
   * @deprecated Use "rejectOrganisation" field instead.
   */
  organisationReject?: Maybe<Organisation>;
  /** @deprecated Use "removeOrganisationPartnerType" field instead. */
  organisationRemovePartnerType?: Maybe<Organisation>;
  /**
   * create Organisation Scorecard Attribute
   * @deprecated Use "createOrganisationScorecardAttribute" field instead.
   */
  organisationScorecardAttributeCreate?: Maybe<Scorecard>;
  /**
   * Delete organisation scorecard attribute
   * @deprecated Use "deleteOrganisationScorecardAttribute" field instead.
   */
  organisationScorecardAttributeDelete?: Maybe<ScorecardAttributeType>;
  /**
   * Update Organisation Scorecard Attribute
   * @deprecated Use "updateOrganisationScorecardAttribute" field instead.
   */
  organisationScorecardAttributeUpdate?: Maybe<ScorecardAttributeType>;
  /**
   * Create scorecard for Organisation
   * @deprecated Use "createOrganisationScorecard" field instead.
   */
  organisationScorecardCreate?: Maybe<Scorecard>;
  /**
   * Delete organisation scorecard
   * @deprecated Use "deleteOrganisationScorecard" field instead.
   */
  organisationScorecardDelete?: Maybe<Scorecard>;
  /**
   * Update Organisation Scorecard
   * @deprecated Use "updateOrganisationScorecard" field instead.
   */
  organisationScorecardUpdate?: Maybe<Scorecard>;
  /** @deprecated Use "setOrganisationPartnerType" field instead. */
  organisationSetPartnerType?: Maybe<Organisation>;
  /**
   * Create page component
   * @deprecated Use "createPageComponent" field instead.
   */
  pageComponentCreate?: Maybe<PageComponentDraftType>;
  /** @deprecated Use "deletePageComponent" field instead. */
  pageComponentDelete?: Maybe<PageComponentType>;
  /** @deprecated Use "duplicatePageComponent" field instead. */
  pageComponentDuplicate?: Maybe<PageComponentType>;
  /**
   * Update page component
   * @deprecated Use "updatePageComponent" field instead.
   */
  pageComponentUpdate?: Maybe<PageComponentDraftType>;
  /**
   * Create page
   * @deprecated Use "createPage" field instead.
   */
  pageCreate?: Maybe<PageType>;
  /** @deprecated Use "deletePage" field instead. */
  pageDelete?: Maybe<PageType>;
  /** @deprecated Use "favouritePage" field instead. */
  pageFavourite?: Maybe<PageType>;
  /**
   * Page move to draft
   * @deprecated Use "movePageToDraft" field instead.
   */
  pageMoveToDraft?: Maybe<PageType>;
  /** @deprecated Use "publishPage" field instead. */
  pagePublish?: Maybe<PageType>;
  /** @deprecated Use "unfavouritePage" field instead. */
  pageUnfavourite?: Maybe<PageType>;
  /**
   * Update page
   * @deprecated Use "updatePage" field instead.
   */
  pageUpdate?: Maybe<PageType>;
  /** Create a partners signup. */
  partnerSignupCreate?: Maybe<PartnerSignup>;
  /** Pay by cash Opportunity Application */
  payByCashApplication?: Maybe<OpportunityApplication>;
  /** Payment Opportunity Application */
  paymentApplication?: Maybe<OpportunityApplication>;
  planCreate?: Maybe<Plan>;
  planSetDeadline?: Maybe<Plan>;
  planUpdate?: Maybe<Plan>;
  /** Move member Lead to Process */
  processMemberLead?: Maybe<MemberLead>;
  /** Propagate terms committee */
  propagateTermsCommittee?: Maybe<Array<Maybe<Office>>>;
  publishEvent?: Maybe<Event>;
  /** Publish Mail Template */
  publishMailTemplate?: Maybe<MailTemplate>;
  publishPage?: Maybe<PageType>;
  /**
   * Bulk Create questionnaire question
   * @deprecated Use "bulkCreateQuestion" field instead.
   */
  questionBulkCreate?: Maybe<Array<Maybe<Question>>>;
  /**
   * Bulk Delete Questionnaire questions
   * @deprecated Use "bulkDeleteQuestion" field instead.
   */
  questionBulkDelete?: Maybe<Array<Maybe<Question>>>;
  /**
   * Bulk update questions for Questionnaire
   * @deprecated Use "bulkUpdateQuestion" field instead.
   */
  questionBulkUpdate?: Maybe<Array<Maybe<Question>>>;
  /** Realize Opportunity Application */
  realizeApplication?: Maybe<OpportunityApplication>;
  /** Reject Opportunity Application */
  rejectApplication?: Maybe<OpportunityApplication>;
  /** Reject Branch Employee */
  rejectBranchEmployee?: Maybe<BranchEmployee>;
  /** Move member Lead to Reject */
  rejectMemberLead?: Maybe<MemberLead>;
  /** Organisation Reject */
  rejectOrganisation?: Maybe<Organisation>;
  /** Remote Realize Opportunity Application */
  remoteRealizeApplication?: Maybe<OpportunityApplication>;
  removeOpportunity?: Maybe<Opportunity>;
  removeOpportunityCoverPhoto?: Maybe<Opportunity>;
  /** Delete opportunity question */
  removeOpportunityQuestion?: Maybe<OpportunityQuestion>;
  removeOrganisationPartnerType?: Maybe<Organisation>;
  /** Create Picture for Accommodation */
  removePictureFromAccommodation?: Maybe<Picture>;
  removeProgrammeManager?: Maybe<ProgrammeManager>;
  /** Delete opportunity question */
  removeQuestion?: Maybe<Question>;
  /** Delete Selection Process */
  removeSelectionProcess?: Maybe<SelectionProcess>;
  /** Reopen Opportunity Application */
  reopenApplication?: Maybe<OpportunityApplication>;
  /** Report opportunity */
  reportOpportunity?: Maybe<Opportunity>;
  /** Resolve comment for an opportunity */
  resolveComment?: Maybe<Comment>;
  /** Delete application scorecard */
  scorecardApplicationDelete?: Maybe<OpportunityApplication>;
  /** Bulk Create Selection Process for opportunity */
  selectionProcessBulkCreate?: Maybe<Array<Maybe<SelectionProcess>>>;
  /** Bulk Delete Selection Process */
  selectionProcessBulkDelete?: Maybe<Array<Maybe<SelectionProcess>>>;
  /** Bulk update Selection Process for opportunity */
  selectionProcessBulkUpdate?: Maybe<Array<Maybe<SelectionProcess>>>;
  /** Send invite to Lead */
  sendInviteToEmployeeLead?: Maybe<EmployeeLead>;
  /** Send a test email for the mail template */
  sendTestMailTemplate?: Maybe<MailTemplate>;
  setOrganisationPartnerType?: Maybe<Organisation>;
  /**
   * Create Slot
   * @deprecated Use "createSlot" field instead.
   */
  slotCreate?: Maybe<Slot>;
  /**
   * Delete Slot
   * @deprecated Use "deleteSlot" field instead.
   */
  slotDelete?: Maybe<Slot>;
  /**
   * Move to Active
   * @deprecated Use "moveSlotToActive" field instead.
   */
  slotMoveToActive?: Maybe<Slot>;
  /**
   * Move to Inactive
   * @deprecated Use "moveSlotToInactive" field instead.
   */
  slotMoveToInactive?: Maybe<Slot>;
  /**
   * Update Slot
   * @deprecated Use "updateSlot" field instead.
   */
  slotUpdate?: Maybe<Slot>;
  submitOpportunityForReview?: Maybe<Opportunity>;
  /** Update LPS/NPS survey reponse */
  surveyAnswer?: Maybe<Scalars['JSON']>;
  tagListUpdate?: Maybe<TagList>;
  terminateMemberPosition?: Maybe<MemberPosition>;
  /** Testimonial Opportunity Application */
  testimonialApplication?: Maybe<OpportunityApplication>;
  /** Unarchive an opportunity */
  unarchiveOpportunity?: Maybe<Opportunity>;
  unfavouriteEvent?: Maybe<Event>;
  unfavouriteOpportunity?: Maybe<Opportunity>;
  unfavouritePage?: Maybe<PageType>;
  unmarkOpportunityRemote?: Maybe<Opportunity>;
  unpublishEvent?: Maybe<Event>;
  unpublishOpportunity?: Maybe<Opportunity>;
  /** Unreject Opportunity Application */
  unrejectApplication?: Maybe<OpportunityApplication>;
  /** Update Accommodation */
  updateAccommodation?: Maybe<Accommodation>;
  /** Update Accommodation Assignment */
  updateAccommodationAssignment?: Maybe<AccommodationAssignment>;
  /** Update Accommodation Availability */
  updateAccommodationAvailability?: Maybe<AccommodationAvailability>;
  /** Update Opportunity Application */
  updateApplication?: Maybe<OpportunityApplication>;
  /** Update Opportunity Application */
  updateApplicationFlightDetails?: Maybe<OpportunityApplication>;
  /** Update scorecards attribute */
  updateApplicationScorecardAttribute?: Maybe<OpportunityApplication>;
  /** Update attachment */
  updateAttachment?: Maybe<Attachment>;
  /** Update Branch */
  updateBranch?: Maybe<Branch>;
  /** Update Branch Employee */
  updateBranchEmployee?: Maybe<BranchEmployee>;
  /** Update a Campaign */
  updateCampaign?: Maybe<Campaign>;
  /** Update City */
  updateCity?: Maybe<City>;
  /** Update CityLC */
  updateCityLc?: Maybe<CityLc>;
  /** Update comment */
  updateComment?: Maybe<Comment>;
  /** Update Committee */
  updateCommittee?: Maybe<Office>;
  /** Update Opportunity Custom Status */
  updateCustomStatusOpportunity?: Maybe<CustomStatusType>;
  /** Update Employee Lead */
  updateEmployeeLead?: Maybe<EmployeeLead>;
  /** Update Application flight details */
  updateFlightDetails?: Maybe<OpportunityApplication>;
  /** Update Opportunity Application */
  updateInterviewDetailsApplication?: Maybe<OpportunityApplication>;
  /** Update Invoice */
  updateInvoice?: Maybe<InvoiceType>;
  updateLcAlignment?: Maybe<LcAlignment>;
  updateLcAlignmentLabel?: Maybe<Array<Maybe<LcAlignment>>>;
  /** Update Mail Template */
  updateMailTemplate?: Maybe<MailTemplate>;
  /** Update Member Lead */
  updateMemberLead?: Maybe<MemberLead>;
  updateMemberPosition?: Maybe<MemberPosition>;
  /** Update National Partner */
  updateNationalPartner?: Maybe<NationalPartnerType>;
  /** Update Opportunity */
  updateOpportunity?: Maybe<Opportunity>;
  /** Update opportunity question */
  updateOpportunityQuestion?: Maybe<OpportunityQuestion>;
  /** Update Organisation */
  updateOrganisation?: Maybe<Organisation>;
  /** Update Organisation Scorecard */
  updateOrganisationScorecard?: Maybe<Scorecard>;
  /** Update Organisation Scorecard Attribute */
  updateOrganisationScorecardAttribute?: Maybe<ScorecardAttributeType>;
  /** Update OrganizationDevelopment */
  updateOrganizationDevelopment?: Maybe<OrganizationDevelopment>;
  /** Update OrganizationDevelopmentTarget */
  updateOrganizationDevelopmentTarget?: Maybe<OrganizationDevelopmentTarget>;
  /** Update page */
  updatePage?: Maybe<PageType>;
  /** Update page component */
  updatePageComponent?: Maybe<PageComponentDraftType>;
  /** Update partner standards survey reponse */
  updatePartnerStandardsSurvey?: Maybe<StandardsSurvey>;
  /** Mark as Paid */
  updatePaymentInvoice?: Maybe<InvoiceType>;
  /** Update Person */
  updatePerson?: Maybe<Person>;
  updatePersonAcademicExperience?: Maybe<PreviousExperience>;
  updatePersonProfessionalExperience?: Maybe<ProfessionalExperience>;
  /** Update programme fee */
  updateProgrammeFee?: Maybe<ProgrammeFee>;
  /** Update Project */
  updateProject?: Maybe<Opportunity>;
  /** Update opportunity question */
  updateQuestion?: Maybe<Question>;
  /** Update Questionnaire */
  updateQuestionnaire?: Maybe<Questionnaire>;
  /** Create Selection Process for opportunity */
  updateSelectionProcess?: Maybe<SelectionProcess>;
  /** Update Slot */
  updateSlot?: Maybe<Slot>;
  /** Update EP standards survey reponse */
  updateStandardsSurvey?: Maybe<StandardsSurvey>;
  /** Update Suggested Country */
  updateSuggestedCountry?: Maybe<SuggestedCountry>;
  /** Update team */
  updateTeam?: Maybe<Team>;
  /** Update position */
  updateTeamPosition?: Maybe<Position>;
  /** Update timeline */
  updateTimeline?: Maybe<Timeline>;
  /** Update todo */
  updateTodo?: Maybe<Todo>;
  /** Bulk Create Weekly Activity for opportunity */
  weeklyActivitiesBulkCreate?: Maybe<Array<Maybe<WeeklyActivity>>>;
  /** Bulk Delete Weekly Activity */
  weeklyActivitiesBulkDelete?: Maybe<Array<Maybe<WeeklyActivity>>>;
  /** Withdraw Opportunity Application */
  withdrawApplication?: Maybe<OpportunityApplication>;
};


export type MutationTypeAcceptMemberLeadArgs = {
  id: Scalars['ID'];
};


export type MutationTypeActivateCampaignArgs = {
  id: Scalars['ID'];
};


export type MutationTypeAddAutoAssignmentArgs = {
  auto_assignment?: InputMaybe<Array<InputMaybe<AutoAssignmentInput>>>;
  id: Scalars['ID'];
};


export type MutationTypeAddContractProgrammeFeeArgs = {
  id: Scalars['ID'];
  programme_fee?: InputMaybe<ProgrammeFeeInput>;
};


export type MutationTypeAddCurrentPersonCvArgs = {
  cv?: InputMaybe<ImageInput>;
};


export type MutationTypeAddLcAlignmentArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  lc_alignment?: InputMaybe<LcAlignmentInput>;
  office_id: Scalars['ID'];
};


export type MutationTypeAddOpportunityQuestionArgs = {
  opportunity_id?: InputMaybe<Scalars['ID']>;
  opportunity_question?: InputMaybe<OpportunityQuestionInput>;
};


export type MutationTypeAddPictureToAccommodationArgs = {
  id: Scalars['ID'];
  picture?: InputMaybe<PictureInput>;
};


export type MutationTypeAddQuestionArgs = {
  question?: InputMaybe<QuestionInput>;
  questionnaire_id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeAddSelectionProcessArgs = {
  opportunity_id: Scalars['ID'];
  selection_process?: InputMaybe<SelectionProcessInput>;
};


export type MutationTypeAddSignupQuestionsArgs = {
  id: Scalars['ID'];
  questions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationTypeAddTodoToGoalArgs = {
  goal_id: Scalars['ID'];
  todo?: InputMaybe<TodoInput>;
};


export type MutationTypeAnApplicationArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type MutationTypeApplicationBulkMessageArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  text?: InputMaybe<Scalars['String']>;
};


export type MutationTypeApplicationExtendExperienceArgs = {
  experience_end_date: Scalars['DateTime'];
  id: Scalars['ID'];
};


export type MutationTypeApplicationExtendRemoteExperienceArgs = {
  id: Scalars['ID'];
  remote_end_date: Scalars['DateTime'];
};


export type MutationTypeApplicationQuestionnaireUpdateArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationQuestionnaireInput>;
};


export type MutationTypeApplicationScorecardAttributeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeApproveApplicationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeApproveBranchArgs = {
  id: Scalars['ID'];
};


export type MutationTypeApproveBranchEmployeeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeApproveOrganisationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeArchiveEventArgs = {
  id: Scalars['ID'];
};


export type MutationTypeArchiveOrganisationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeArchivePersonArgs = {
  id: Scalars['ID'];
};


export type MutationTypeAssignProgrammeManagerArgs = {
  id: Scalars['ID'];
  person_id?: InputMaybe<Scalars['Int']>;
};


export type MutationTypeAssignQuestionnaireArgs = {
  id: Scalars['ID'];
  questionnaire_id: Scalars['ID'];
};


export type MutationTypeBranchApproveArgs = {
  id: Scalars['ID'];
};


export type MutationTypeBranchContractsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  programme_id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeBranchDenyArgs = {
  id: Scalars['ID'];
};


export type MutationTypeBranchEmployeeApproveArgs = {
  id: Scalars['ID'];
};


export type MutationTypeBranchEmployeeCreateArgs = {
  branch_id?: InputMaybe<Scalars['Int']>;
  person_id?: InputMaybe<Scalars['Int']>;
};


export type MutationTypeBranchEmployeeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeBranchEmployeeRejectArgs = {
  id: Scalars['ID'];
};


export type MutationTypeBranchEmployeeUpdateArgs = {
  branch_employee?: InputMaybe<BranchEmployeeInput>;
  id: Scalars['ID'];
};


export type MutationTypeBreakApprovedApplicationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeBreakRealizationApplicationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeBreakRemoteRealizationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeBulkAssignManagersForEmployeeLeadArgs = {
  employee_lead_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeBulkAssignManagersForOpportunitiesArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeBulkAssignManagersForPeopleArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  person_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeBulkCreateQuestionArgs = {
  questionnaire_id?: InputMaybe<Scalars['ID']>;
  questions?: InputMaybe<Array<InputMaybe<QuestionInput>>>;
};


export type MutationTypeBulkDeleteQuestionArgs = {
  question_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationTypeBulkFollowupArgs = {
  follow_up_id: Scalars['Int'];
  person_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeBulkMatchApplicationsArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeBulkOpenOpportunitiesArgs = {
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeBulkRejectApplicationsArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rejection_reason_id?: InputMaybe<Scalars['Int']>;
};


export type MutationTypeBulkRemoveOpportunityQuestionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationTypeBulkTagUpdateForApplicationsArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeBulkTagUpdateForOpportunitiesArgs = {
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeBulkTagUpdateForPeopleArgs = {
  person_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeBulkUnassignManagersForEmployeeLeadArgs = {
  employee_lead_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeBulkUnassignManagersForOpportunitiesArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeBulkUnassignManagersForPeopleArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  person_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeBulkUpdateQuestionArgs = {
  questions?: InputMaybe<Array<InputMaybe<UpdateQuestionInput>>>;
};


export type MutationTypeCampaignActivateArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCampaignCreateArgs = {
  campaign?: InputMaybe<CampaignInput>;
  office_id?: InputMaybe<Scalars['Int']>;
};


export type MutationTypeCampaignDeactivateArgs = {
  campaign?: InputMaybe<CampaignInput>;
  id: Scalars['ID'];
};


export type MutationTypeCampaignUpdateArgs = {
  campaign?: InputMaybe<CampaignInput>;
  id: Scalars['ID'];
};


export type MutationTypeChangeCustomStatusApplicationArgs = {
  id: Scalars['ID'];
  new_status_id?: InputMaybe<Scalars['Int']>;
};


export type MutationTypeClientDataPutArgs = {
  client_data?: InputMaybe<ClientDataInput>;
};


export type MutationTypeClientDataUpdateArgs = {
  client_data?: InputMaybe<ClientDataInput>;
  id: Scalars['ID'];
};


export type MutationTypeCommitteeTargetBulkUpdateArgs = {
  committee_targets: Array<InputMaybe<UpdateCommitteeTargetInput>>;
};


export type MutationTypeCompleteApplicationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCompleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationTypeContactMemberLeadArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateAccommodationArgs = {
  accommodation?: InputMaybe<AccommodationInput>;
};


export type MutationTypeCreateAccommodationAssignmentArgs = {
  accommodation_assignment?: InputMaybe<AccommodationAssignmentInput>;
};


export type MutationTypeCreateAccommodationAvailabilityArgs = {
  accommodation_availability?: InputMaybe<AccommodationAvailabilityInput>;
};


export type MutationTypeCreateApplicationArgs = {
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type MutationTypeCreateAttachmentArgs = {
  attachment?: InputMaybe<AttachmentInput>;
};


export type MutationTypeCreateBranchArgs = {
  branch?: InputMaybe<BranchInput>;
  organisation_id?: InputMaybe<Scalars['Int']>;
};


export type MutationTypeCreateBranchEmployeeArgs = {
  branch_id: Scalars['Int'];
  person_id: Scalars['Int'];
};


export type MutationTypeCreateCampaignArgs = {
  campaign?: InputMaybe<CampaignInput>;
  office_id: Scalars['Int'];
};


export type MutationTypeCreateChecklistResponseMemberLeadArgs = {
  answers: Array<InputMaybe<Scalars['JSON']>>;
  id: Scalars['ID'];
  survey_id: Scalars['ID'];
};


export type MutationTypeCreateCityArgs = {
  city?: InputMaybe<CityInput>;
};


export type MutationTypeCreateCityLcArgs = {
  city_lc?: InputMaybe<CityLcInput>;
};


export type MutationTypeCreateCommentArgs = {
  comment?: InputMaybe<CommentInput>;
};


export type MutationTypeCreateCommentForOpportunityArgs = {
  comment?: InputMaybe<CommentInput>;
  opportunity_id: Scalars['ID'];
};


export type MutationTypeCreateCommitteeArgs = {
  committee?: InputMaybe<OfficeInput>;
};


export type MutationTypeCreateCommitteeCityArgs = {
  committee?: InputMaybe<OfficeInput>;
  id: Scalars['ID'];
};


export type MutationTypeCreateCommitteeDepartmentArgs = {
  committee_department: CommitteeDepartmentInput;
  office_id: Scalars['ID'];
};


export type MutationTypeCreateCustomStatusOpportunityArgs = {
  custom_status?: InputMaybe<CustomStatusInput>;
  opportunity_id: Scalars['ID'];
};


export type MutationTypeCreateEmployeeLeadArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
};


export type MutationTypeCreateGlobalPartnerRequestArgs = {
  global_partner_request?: InputMaybe<GlobalPartnerRequestInput>;
};


export type MutationTypeCreateGoalArgs = {
  goal?: InputMaybe<TodoInput>;
};


export type MutationTypeCreateInvoiceArgs = {
  invoice?: InputMaybe<InvoiceInput>;
};


export type MutationTypeCreateLocalVolunteerOpportunityArgs = {
  applications_close_date: Scalars['DateTime'];
  id: Scalars['ID'];
  openings: Scalars['Int'];
};


export type MutationTypeCreateMailTemplateArgs = {
  content?: InputMaybe<Scalars['String']>;
  mail_template?: InputMaybe<MailTemplateInput>;
};


export type MutationTypeCreateMemberLeadArgs = {
  member_lead?: InputMaybe<MemberLeadInput>;
};


export type MutationTypeCreateMemberPositionArgs = {
  member_position: MemberPositionInput;
};


export type MutationTypeCreateNationalPartnerArgs = {
  national_partner?: InputMaybe<NationalPartnerInput>;
};


export type MutationTypeCreateOpportunityArgs = {
  opportunity?: InputMaybe<OpportunityInput>;
};


export type MutationTypeCreateOrganisationArgs = {
  organisation?: InputMaybe<CompanyInput>;
};


export type MutationTypeCreateOrganisationScorecardArgs = {
  company_id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organisation_scorecard_attribute?: InputMaybe<Array<InputMaybe<ScorecardAttributeInput>>>;
};


export type MutationTypeCreateOrganisationScorecardAttributeArgs = {
  organisation_scorecard_attribute?: InputMaybe<Array<InputMaybe<ScorecardAttributeInput>>>;
  scorecard_id: Scalars['ID'];
};


export type MutationTypeCreatePageArgs = {
  page?: InputMaybe<PageInput>;
};


export type MutationTypeCreatePageComponentArgs = {
  page_component?: InputMaybe<PageComponentInput>;
  page_id: Scalars['ID'];
};


export type MutationTypeCreatePersonArgs = {
  person?: InputMaybe<PersonInput>;
};


export type MutationTypeCreatePersonAcademicExperienceArgs = {
  academic_experience?: InputMaybe<PersonAcademicInput>;
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeCreatePersonProfessionalExperienceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  professional_experience?: InputMaybe<PersonProfessionalInput>;
};


export type MutationTypeCreatePlatformNpsArgs = {
  path?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<Array<InputMaybe<PlatformNpsInput>>>;
};


export type MutationTypeCreateProjectArgs = {
  opportunity?: InputMaybe<ProjectInput>;
};


export type MutationTypeCreateQuestionnaireArgs = {
  company_id: Scalars['ID'];
  questionnaire?: InputMaybe<QuestionnaireInput>;
};


export type MutationTypeCreateScorecardsApplicationArgs = {
  application_scorecard?: InputMaybe<Array<InputMaybe<ScorecardInput>>>;
  id: Scalars['ID'];
};


export type MutationTypeCreateSlotArgs = {
  opportunity_id: Scalars['ID'];
  slot?: InputMaybe<SlotInput>;
};


export type MutationTypeCreateSuggestedCountryArgs = {
  suggested_country?: InputMaybe<SuggestedCountryInput>;
};


export type MutationTypeCreateTagListArgs = {
  tag_list?: InputMaybe<TagListInput>;
};


export type MutationTypeCreateTeamArgs = {
  office_id: Scalars['ID'];
  team?: InputMaybe<TeamInput>;
  term_id: Scalars['ID'];
};


export type MutationTypeCreateTeamPositionArgs = {
  position?: InputMaybe<PositionInput>;
};


export type MutationTypeCreateTermArgs = {
  term?: InputMaybe<TermInput>;
};


export type MutationTypeCreateTimelineArgs = {
  timeline?: InputMaybe<TimelineInput>;
};


export type MutationTypeCreateTodoArgs = {
  todo?: InputMaybe<TodoInput>;
};


export type MutationTypeCreateWatchlistArgs = {
  potential_candidate?: InputMaybe<OpportunityPotentialCandidate>;
};


export type MutationTypeCurrentPersonSavedFiltersCreateArgs = {
  saved_filter?: InputMaybe<SavedFilterInput>;
};


export type MutationTypeCurrentPersonSavedFiltersDeleteArgs = {
  saved_filter_id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeCurrentPersonSavedFiltersUpdateArgs = {
  id?: InputMaybe<Scalars['ID']>;
  saved_filter?: InputMaybe<SavedFilterInput>;
};


export type MutationTypeCurrentPersonUpdateArgs = {
  person?: InputMaybe<CurrentPersonInput>;
};


export type MutationTypeCurrentPersonUpdateHomeLcArgs = {
  home_lc_id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeDeactivateCampaignArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteAcademicExperienceShowArgs = {
  academic_exp_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeDeleteAccommodationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteAccommodationAssignmentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteAccommodationAvailabilityArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteAttachmentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteBranchEmployeeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteCityArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteCityLcArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteCommitteeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteCurrentPersonCvArgs = {
  cv_id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeDeleteCustomStatusOpportunityArgs = {
  id: Scalars['ID'];
  opportunity_id: Scalars['ID'];
};


export type MutationTypeDeleteImageArgs = {
  attachment_id?: InputMaybe<Scalars['Int']>;
};


export type MutationTypeDeleteInvoiceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteLcAlignmentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteMailTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteNationalPartnerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOrganisationScorecardArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOrganisationScorecardAttributeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeletePageArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeletePageComponentArgs = {
  client_reference_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeDeletePositionArgs = {
  id: Scalars['ID'];
  position?: InputMaybe<PositionInput>;
};


export type MutationTypeDeleteProfessionalExperienceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  professional_exp_id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeDeleteQuestionnaireArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteSlotArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteSuggestedCountryArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteTeamArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteTermArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteTimelineArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteWatchlistArgs = {
  opportunity_id: Scalars['Int'];
  person_id: Scalars['ID'];
};


export type MutationTypeDenyBranchArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDuplicateOpportunityArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDuplicatePageComponentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDuplicateQuestionnaireArgs = {
  id: Scalars['ID'];
};


export type MutationTypeEmployeeLeadAttemptedToContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeEmployeeLeadConnectedArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeEmployeeLeadContractSentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeEmployeeLeadContractSignedArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeEmployeeLeadCreateArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
};


export type MutationTypeEmployeeLeadDealLostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeEmployeeLeadFuturePipelineArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeEmployeeLeadNewLeadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeEmployeeLeadProposalSentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeEmployeeLeadSendInviteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeEmployeeLeadUpdateArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeEngagementCreateArgs = {
  employee_lead_id: Scalars['Int'];
  engagement?: InputMaybe<EngagementInput>;
};


export type MutationTypeEngagementDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeEngagementUpdateArgs = {
  engagement?: InputMaybe<EngagementInput>;
  id: Scalars['ID'];
};


export type MutationTypeEventCreateArgs = {
  event?: InputMaybe<EventInput>;
};


export type MutationTypeEventRegistrationCancelArgs = {
  id: Scalars['ID'];
};


export type MutationTypeEventRegistrationConfirmArgs = {
  id: Scalars['ID'];
};


export type MutationTypeEventRegistrationCreateArgs = {
  event_registration?: InputMaybe<EventRegistrationInput>;
};


export type MutationTypeEventRegistrationFollowUpArgs = {
  follow_up_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};


export type MutationTypeEventRegistrationMakeTransactionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeEventRegistrationPayByCashArgs = {
  id: Scalars['ID'];
};


export type MutationTypeEventSpeakerCreateArgs = {
  event_speaker?: InputMaybe<EventSpeakerInput>;
};


export type MutationTypeEventSpeakerDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeEventSpeakerUpdateArgs = {
  event_speaker?: InputMaybe<EventSpeakerInput>;
  id: Scalars['ID'];
};


export type MutationTypeEventTicketCreateArgs = {
  event_ticket?: InputMaybe<EventTicketInput>;
};


export type MutationTypeEventTicketDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeEventTicketUpdateArgs = {
  event_ticket?: InputMaybe<EventTicketInput>;
  id: Scalars['ID'];
};


export type MutationTypeEventUpdateArgs = {
  event?: InputMaybe<EventInput>;
  id: Scalars['ID'];
};


export type MutationTypeFavouriteEventArgs = {
  id: Scalars['ID'];
};


export type MutationTypeFavouriteOpportunityArgs = {
  id: Scalars['ID'];
};


export type MutationTypeFavouritePageArgs = {
  id: Scalars['ID'];
};


export type MutationTypeFileImportArgs = {
  file_input?: InputMaybe<FileInput>;
};


export type MutationTypeFillNpsResponseArgs = {
  answer?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['ID'];
  question_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationTypeFollowupOrganisationArgs = {
  follow_up_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};


export type MutationTypeFreezeUnfreezeCommitteeArgs = {
  action?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  remarks?: InputMaybe<Scalars['String']>;
};


export type MutationTypeGenerateCvArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeGenerateEmailArgs = {
  id: Scalars['ID'];
  person?: InputMaybe<PersonInput>;
};


export type MutationTypeGenerateMosCertificateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeInCompleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationTypeIncomingProgrammeFeeUpdateArgs = {
  id: Scalars['ID'];
  programme_fee?: InputMaybe<IncomingProgrammeFeeInput>;
};


export type MutationTypeInterviewPersonArgs = {
  accepted?: InputMaybe<Scalars['Boolean']>;
  accepted_reason?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  interviewed?: InputMaybe<Scalars['Boolean']>;
};


export type MutationTypeInterviewSlotApplicationArgs = {
  id: Scalars['ID'];
  interview_slots?: InputMaybe<Array<InputMaybe<InterviewSlotInput>>>;
};


export type MutationTypeInviteMemberArgs = {
  access_type?: InputMaybe<Scalars['String']>;
  country_code?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  follow_up_id?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  last_name?: InputMaybe<Scalars['String']>;
  linkedin_url?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  referral_type?: InputMaybe<Scalars['String']>;
};


export type MutationTypeInvitePersonTermArgs = {
  office_id: Scalars['ID'];
  person_id?: InputMaybe<Scalars['ID']>;
  person_input?: InputMaybe<InvitePersonInput>;
  term_id: Scalars['ID'];
};


export type MutationTypeInvoiceApproveCashPaymentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeInvoicePayByCashArgs = {
  id: Scalars['ID'];
};


export type MutationTypeInvoiceTransactionCreateArgs = {
  id: Scalars['ID'];
};


export type MutationTypeLdaResponseArgs = {
  aiesec_contribution?: InputMaybe<Scalars['Int']>;
  lda_survey_id: Scalars['ID'];
  responses: Array<InputMaybe<LdaResponseInput>>;
};


export type MutationTypeLdmResponseArgs = {
  aiesec_contribution?: InputMaybe<Scalars['Int']>;
  opportunity_application_id?: InputMaybe<Scalars['Int']>;
  position_id?: InputMaybe<Scalars['Int']>;
  responses?: InputMaybe<Array<InputMaybe<LdmResponseInput>>>;
};


export type MutationTypeMarkOpportunityRemoteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMatchApplicationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMemberLeadAcceptArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMemberLeadChecklistQuestionBulkCreateArgs = {
  checklist: Array<InputMaybe<ChecklistInput>>;
  id: Scalars['ID'];
};


export type MutationTypeMemberLeadChecklistResponseCreateArgs = {
  answers: Array<InputMaybe<Scalars['JSON']>>;
  id: Scalars['ID'];
  survey_id: Scalars['ID'];
};


export type MutationTypeMemberLeadContactArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMemberLeadCreateArgs = {
  member_lead?: InputMaybe<MemberLeadInput>;
};


export type MutationTypeMemberLeadProcessArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMemberLeadRejectArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMemberLeadUpdateArgs = {
  id: Scalars['ID'];
  member_lead?: InputMaybe<MemberLeadInput>;
};


export type MutationTypeMemberPositionCreateArgs = {
  member_position: MemberPositionInput;
};


export type MutationTypeMemberPositionTerminateArgs = {
  exit_reason_id: Scalars['Int'];
  id: Scalars['Int'];
  other_exit_reason?: InputMaybe<Scalars['String']>;
};


export type MutationTypeMemberPositionUpdateArgs = {
  id: Scalars['Int'];
  member_position: MemberPositionInput;
};


export type MutationTypeMoveEmployeeLeadToAttemptedToContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeMoveEmployeeLeadToConnectedArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeMoveEmployeeLeadToContractSentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeMoveEmployeeLeadToContractSignedArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeMoveEmployeeLeadToDealLostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeMoveEmployeeLeadToFuturePipelineArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeMoveEmployeeLeadToNewLeadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeMoveEmployeeLeadToProposalSentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeMovePageToDraftArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMoveSlotToActiveArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMoveSlotToInactiveArgs = {
  id: Scalars['ID'];
};


export type MutationTypeNotificationReadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeOfflineAssessmentApplicationArgs = {
  id: Scalars['ID'];
  offline_assessments?: InputMaybe<Array<InputMaybe<OfflineAssessmentInput>>>;
};


export type MutationTypeOfflineAssessmentOpportunityArgs = {
  id: Scalars['ID'];
  offline_assessments?: InputMaybe<Array<InputMaybe<OfflineAssessmentInput>>>;
};


export type MutationTypeOpenOpportunityArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOpportunityIncrementViewsArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOpportunityMarkRemoteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOpportunityRemoveCoverPhotoArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOpportunityReportArgs = {
  additional_information?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  remark?: InputMaybe<Scalars['String']>;
};


export type MutationTypeOpportunitySubmitForReviewArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOpportunityUnarchiveArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOpportunityUnmarkRemoteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOpportunityUnpublishArgs = {
  id: Scalars['ID'];
  reason_id?: InputMaybe<Scalars['Int']>;
  remarks?: InputMaybe<Scalars['String']>;
};


export type MutationTypeOrganisationApproveArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOrganisationArchiveArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOrganisationFollowupArgs = {
  follow_up_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};


export type MutationTypeOrganisationRejectArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOrganisationRemovePartnerTypeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOrganisationScorecardAttributeCreateArgs = {
  organisation_scorecard_attribute?: InputMaybe<Array<InputMaybe<ScorecardAttributeInput>>>;
  scorecard_id: Scalars['ID'];
};


export type MutationTypeOrganisationScorecardAttributeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOrganisationScorecardAttributeUpdateArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationTypeOrganisationScorecardCreateArgs = {
  company_id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organisation_scorecard_attribute?: InputMaybe<Array<InputMaybe<ScorecardAttributeInput>>>;
};


export type MutationTypeOrganisationScorecardDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeOrganisationScorecardUpdateArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationTypeOrganisationSetPartnerTypeArgs = {
  id: Scalars['ID'];
  partner_type: PartnerTypes;
};


export type MutationTypePageComponentCreateArgs = {
  page_component?: InputMaybe<PageComponentInput>;
  page_id: Scalars['ID'];
};


export type MutationTypePageComponentDeleteArgs = {
  client_reference_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypePageComponentDuplicateArgs = {
  id: Scalars['ID'];
};


export type MutationTypePageComponentUpdateArgs = {
  client_reference_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  page_component?: InputMaybe<PageComponentInput>;
};


export type MutationTypePageCreateArgs = {
  page?: InputMaybe<PageInput>;
};


export type MutationTypePageDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTypePageFavouriteArgs = {
  id: Scalars['ID'];
};


export type MutationTypePageMoveToDraftArgs = {
  id: Scalars['ID'];
};


export type MutationTypePagePublishArgs = {
  id: Scalars['ID'];
};


export type MutationTypePageUnfavouriteArgs = {
  id: Scalars['ID'];
};


export type MutationTypePageUpdateArgs = {
  id: Scalars['ID'];
  page?: InputMaybe<PageInput>;
};


export type MutationTypePartnerSignupCreateArgs = {
  partners_signup?: InputMaybe<PartnerSignupInput>;
};


export type MutationTypePayByCashApplicationArgs = {
  id: Scalars['ID'];
};


export type MutationTypePaymentApplicationArgs = {
  id: Scalars['ID'];
};


export type MutationTypePlanCreateArgs = {
  plan: PlanInput;
};


export type MutationTypePlanSetDeadlineArgs = {
  deadline: Scalars['Date'];
  office_id: Scalars['ID'];
  plan_id: Scalars['ID'];
};


export type MutationTypePlanUpdateArgs = {
  id: Scalars['ID'];
  plan?: InputMaybe<PlanInput>;
};


export type MutationTypeProcessMemberLeadArgs = {
  id: Scalars['ID'];
};


export type MutationTypePropagateTermsCommitteeArgs = {
  committee?: InputMaybe<OfficeInput>;
};


export type MutationTypePublishEventArgs = {
  id: Scalars['ID'];
};


export type MutationTypePublishMailTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationTypePublishPageArgs = {
  id: Scalars['ID'];
};


export type MutationTypeQuestionBulkCreateArgs = {
  questionnaire_id?: InputMaybe<Scalars['ID']>;
  questions?: InputMaybe<Array<InputMaybe<QuestionInput>>>;
};


export type MutationTypeQuestionBulkDeleteArgs = {
  question_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationTypeQuestionBulkUpdateArgs = {
  questions?: InputMaybe<Array<InputMaybe<UpdateQuestionInput>>>;
};


export type MutationTypeRealizeApplicationArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type MutationTypeRejectApplicationArgs = {
  id: Scalars['ID'];
  rejection_reason_id?: InputMaybe<Scalars['Int']>;
};


export type MutationTypeRejectBranchEmployeeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeRejectMemberLeadArgs = {
  id: Scalars['ID'];
};


export type MutationTypeRejectOrganisationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeRemoteRealizeApplicationArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<ApplicationRemoteRealizeInput>;
};


export type MutationTypeRemoveOpportunityArgs = {
  id: Scalars['ID'];
};


export type MutationTypeRemoveOpportunityCoverPhotoArgs = {
  id: Scalars['ID'];
};


export type MutationTypeRemoveOpportunityQuestionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeRemoveOrganisationPartnerTypeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeRemovePictureFromAccommodationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeRemoveProgrammeManagerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeRemoveQuestionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeRemoveSelectionProcessArgs = {
  id: Scalars['ID'];
};


export type MutationTypeReopenApplicationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeReportOpportunityArgs = {
  additional_information?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  remark?: InputMaybe<Scalars['String']>;
};


export type MutationTypeResolveCommentArgs = {
  comment_id: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationTypeScorecardApplicationDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeSelectionProcessBulkCreateArgs = {
  opportunity_id: Scalars['ID'];
  selection_processes?: InputMaybe<Array<InputMaybe<SelectionProcessInput>>>;
};


export type MutationTypeSelectionProcessBulkDeleteArgs = {
  opportunity_id: Scalars['ID'];
  selection_process_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationTypeSelectionProcessBulkUpdateArgs = {
  opportunity_id: Scalars['ID'];
  selection_processes?: InputMaybe<Array<InputMaybe<UpdateSelectionProcessInput>>>;
};


export type MutationTypeSendInviteToEmployeeLeadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeSendTestMailTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationTypeSetOrganisationPartnerTypeArgs = {
  id: Scalars['ID'];
  partner_type: PartnerTypes;
};


export type MutationTypeSlotCreateArgs = {
  opportunity_id: Scalars['ID'];
  slot?: InputMaybe<SlotInput>;
};


export type MutationTypeSlotDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeSlotMoveToActiveArgs = {
  id: Scalars['ID'];
};


export type MutationTypeSlotMoveToInactiveArgs = {
  id: Scalars['ID'];
};


export type MutationTypeSlotUpdateArgs = {
  id: Scalars['ID'];
  slot: UpdateSlotInput;
};


export type MutationTypeSubmitOpportunityForReviewArgs = {
  id: Scalars['ID'];
};


export type MutationTypeSurveyAnswerArgs = {
  responses: Array<SurveyResponseInput>;
  survey_uuid: Scalars['String'];
};


export type MutationTypeTagListUpdateArgs = {
  id?: InputMaybe<Scalars['ID']>;
  tag_list?: InputMaybe<TagListInput>;
};


export type MutationTypeTerminateMemberPositionArgs = {
  exit_reason_id: Scalars['Int'];
  id: Scalars['Int'];
  other_exit_reason?: InputMaybe<Scalars['String']>;
};


export type MutationTypeTestimonialApplicationArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type MutationTypeUnarchiveOpportunityArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUnfavouriteEventArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUnfavouriteOpportunityArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUnfavouritePageArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUnmarkOpportunityRemoteArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUnpublishEventArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUnpublishOpportunityArgs = {
  id: Scalars['ID'];
  reason_id?: InputMaybe<Scalars['Int']>;
  remarks?: InputMaybe<Scalars['String']>;
};


export type MutationTypeUnrejectApplicationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateAccommodationArgs = {
  accommodation?: InputMaybe<AccommodationInput>;
  id: Scalars['ID'];
};


export type MutationTypeUpdateAccommodationAssignmentArgs = {
  accommodation_assignment?: InputMaybe<AccommodationAssignmentInput>;
  id: Scalars['ID'];
};


export type MutationTypeUpdateAccommodationAvailabilityArgs = {
  accommodation_availability?: InputMaybe<AccommodationAvailabilityInput>;
  id: Scalars['ID'];
};


export type MutationTypeUpdateApplicationArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type MutationTypeUpdateApplicationFlightDetailsArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type MutationTypeUpdateApplicationScorecardAttributeArgs = {
  application_scorecard?: InputMaybe<ScorecardInput>;
  id: Scalars['ID'];
};


export type MutationTypeUpdateAttachmentArgs = {
  attachment?: InputMaybe<AttachmentInput>;
  id: Scalars['ID'];
};


export type MutationTypeUpdateBranchArgs = {
  branch?: InputMaybe<BranchInput>;
  id: Scalars['ID'];
};


export type MutationTypeUpdateBranchEmployeeArgs = {
  branch_employee?: InputMaybe<BranchEmployeeInput>;
  id: Scalars['ID'];
};


export type MutationTypeUpdateCampaignArgs = {
  campaign?: InputMaybe<CampaignInput>;
  id: Scalars['ID'];
};


export type MutationTypeUpdateCityArgs = {
  city?: InputMaybe<CityInput>;
  id: Scalars['ID'];
};


export type MutationTypeUpdateCityLcArgs = {
  city_lc?: InputMaybe<CityLcInput>;
  id: Scalars['ID'];
};


export type MutationTypeUpdateCommentArgs = {
  comment?: InputMaybe<CommentInput>;
  id: Scalars['ID'];
};


export type MutationTypeUpdateCommitteeArgs = {
  committee?: InputMaybe<OfficeInput>;
  id: Scalars['ID'];
};


export type MutationTypeUpdateCustomStatusOpportunityArgs = {
  custom_status?: InputMaybe<CustomStatusInput>;
  id: Scalars['ID'];
  opportunity_id: Scalars['ID'];
};


export type MutationTypeUpdateEmployeeLeadArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeUpdateFlightDetailsArgs = {
  application_flight_token: Scalars['String'];
  flight_details: FlightDetailsInput;
};


export type MutationTypeUpdateInterviewDetailsApplicationArgs = {
  attendee_emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type MutationTypeUpdateInvoiceArgs = {
  id: Scalars['ID'];
  invoice?: InputMaybe<InvoiceInput>;
};


export type MutationTypeUpdateLcAlignmentArgs = {
  id: Scalars['ID'];
  lc_alignment?: InputMaybe<LcAlignmentInput>;
};


export type MutationTypeUpdateLcAlignmentLabelArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  label: Scalars['String'];
  office_id: Scalars['ID'];
};


export type MutationTypeUpdateMailTemplateArgs = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  mail_template?: InputMaybe<MailTemplateInput>;
};


export type MutationTypeUpdateMemberLeadArgs = {
  id: Scalars['ID'];
  member_lead?: InputMaybe<MemberLeadInput>;
};


export type MutationTypeUpdateMemberPositionArgs = {
  id: Scalars['Int'];
  member_position: MemberPositionInput;
};


export type MutationTypeUpdateNationalPartnerArgs = {
  id: Scalars['ID'];
  national_partner?: InputMaybe<NationalPartnerInput>;
};


export type MutationTypeUpdateOpportunityArgs = {
  id: Scalars['ID'];
  opportunity?: InputMaybe<OpportunityInput>;
};


export type MutationTypeUpdateOpportunityQuestionArgs = {
  id: Scalars['ID'];
  opportunity_question?: InputMaybe<OpportunityQuestionInput>;
};


export type MutationTypeUpdateOrganisationArgs = {
  id: Scalars['ID'];
  organisation?: InputMaybe<CompanyInput>;
};


export type MutationTypeUpdateOrganisationScorecardArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationTypeUpdateOrganisationScorecardAttributeArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationTypeUpdateOrganizationDevelopmentArgs = {
  id: Scalars['ID'];
  organization_development?: InputMaybe<OrganizationDevelopmentInput>;
};


export type MutationTypeUpdateOrganizationDevelopmentTargetArgs = {
  id: Scalars['ID'];
  organization_development_target?: InputMaybe<OrganizationDevelopmentTargetInput>;
};


export type MutationTypeUpdatePageArgs = {
  id: Scalars['ID'];
  page?: InputMaybe<PageInput>;
};


export type MutationTypeUpdatePageComponentArgs = {
  client_reference_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  page_component?: InputMaybe<PageComponentInput>;
};


export type MutationTypeUpdatePartnerStandardsSurveyArgs = {
  partner_standard_survey_id: Scalars['String'];
  responses: Array<ResponseInput>;
};


export type MutationTypeUpdatePaymentInvoiceArgs = {
  id: Scalars['ID'];
  invoice?: InputMaybe<InvoiceInput>;
};


export type MutationTypeUpdatePersonArgs = {
  id: Scalars['ID'];
  person?: InputMaybe<PersonInput>;
};


export type MutationTypeUpdatePersonAcademicExperienceArgs = {
  academic_exp_id?: InputMaybe<Scalars['ID']>;
  academic_experience?: InputMaybe<PersonAcademicInput>;
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTypeUpdatePersonProfessionalExperienceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  professional_exp_id?: InputMaybe<Scalars['ID']>;
  professional_experience?: InputMaybe<PersonProfessionalInput>;
};


export type MutationTypeUpdateProgrammeFeeArgs = {
  id: Scalars['ID'];
  programme_fee?: InputMaybe<ProgrammeFeeInput>;
};


export type MutationTypeUpdateProjectArgs = {
  id: Scalars['ID'];
  opportunity?: InputMaybe<ProjectInput>;
};


export type MutationTypeUpdateQuestionArgs = {
  id: Scalars['ID'];
  question?: InputMaybe<QuestionInput>;
};


export type MutationTypeUpdateQuestionnaireArgs = {
  id: Scalars['ID'];
  questionnaire?: InputMaybe<QuestionnaireInput>;
};


export type MutationTypeUpdateSelectionProcessArgs = {
  id: Scalars['ID'];
  selection_process?: InputMaybe<SelectionProcessInput>;
};


export type MutationTypeUpdateSlotArgs = {
  id: Scalars['ID'];
  slot: UpdateSlotInput;
};


export type MutationTypeUpdateStandardsSurveyArgs = {
  response: ResponseInput;
  standard_survey_id: Scalars['String'];
};


export type MutationTypeUpdateSuggestedCountryArgs = {
  id: Scalars['ID'];
  suggested_country?: InputMaybe<SuggestedCountryInput>;
};


export type MutationTypeUpdateTeamArgs = {
  id: Scalars['ID'];
  team?: InputMaybe<TeamInput>;
};


export type MutationTypeUpdateTeamPositionArgs = {
  id: Scalars['ID'];
  position?: InputMaybe<PositionInput>;
};


export type MutationTypeUpdateTimelineArgs = {
  id: Scalars['ID'];
  timeline?: InputMaybe<TimelineInput>;
};


export type MutationTypeUpdateTodoArgs = {
  id: Scalars['ID'];
  todo?: InputMaybe<TodoInput>;
};


export type MutationTypeWeeklyActivitiesBulkCreateArgs = {
  opportunity_id: Scalars['ID'];
  weekly_activities?: InputMaybe<Array<InputMaybe<WeeklyActivityInput>>>;
};


export type MutationTypeWeeklyActivitiesBulkDeleteArgs = {
  opportunity_id: Scalars['ID'];
  weekly_activities_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationTypeWithdrawApplicationArgs = {
  id: Scalars['ID'];
};

export type NationalPartnerInput = {
  company_id: Scalars['Int'];
  mc_id: Scalars['Int'];
  position?: InputMaybe<Scalars['Int']>;
};

export type NationalPartnerMutationQuery = {
  /** Create National Partner */
  createNationalPartner?: Maybe<NationalPartnerType>;
  /** Delete National Partner */
  deleteNationalPartner?: Maybe<NationalPartnerType>;
  /** Update National Partner */
  updateNationalPartner?: Maybe<NationalPartnerType>;
};


export type NationalPartnerMutationQueryCreateNationalPartnerArgs = {
  national_partner?: InputMaybe<NationalPartnerInput>;
};


export type NationalPartnerMutationQueryDeleteNationalPartnerArgs = {
  id: Scalars['ID'];
};


export type NationalPartnerMutationQueryUpdateNationalPartnerArgs = {
  id: Scalars['ID'];
  national_partner?: InputMaybe<NationalPartnerInput>;
};

export type NationalPartnerQuery = {
  allNationalPartners?: Maybe<Array<Maybe<NationalPartnerType>>>;
  getNationalPartner?: Maybe<NationalPartnerType>;
  listNationalPartners?: Maybe<Array<Maybe<Organisation>>>;
};


export type NationalPartnerQueryAllNationalPartnersArgs = {
  mc_id?: InputMaybe<Scalars['ID']>;
};


export type NationalPartnerQueryGetNationalPartnerArgs = {
  id: Scalars['ID'];
};


export type NationalPartnerQueryListNationalPartnersArgs = {
  mc_id: Scalars['ID'];
};

export type NationalPartnerType = {
  __typename?: 'NationalPartnerType';
  company?: Maybe<Organisation>;
  id: Scalars['ID'];
  mc?: Maybe<Office>;
  position?: Maybe<Scalars['Int']>;
};

export type NewApplicationQuestionnaire = {
  deadline?: InputMaybe<Scalars['Date']>;
  questionnaire_id: Scalars['ID'];
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

export type Notification = Node & {
  __typename?: 'Notification';
  created_at?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  notifiable?: Maybe<PersonApplicationUnion>;
  notifiable_id?: Maybe<Scalars['ID']>;
  notifiable_type?: Maybe<Scalars['String']>;
  person_id?: Maybe<Scalars['ID']>;
  read?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type NotificationFilter = {
  platform_type?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationList = {
  __typename?: 'NotificationList';
  data?: Maybe<Array<Maybe<Notification>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type NotificationMutationQuery = {
  /** Mark all notifications for the current user as read */
  clearNotifications?: Maybe<Array<Maybe<Notification>>>;
  /** Mark a notification as read */
  notificationRead?: Maybe<Notification>;
};


export type NotificationMutationQueryNotificationReadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type NotificationSettingsInput = {
  rejection_updates?: InputMaybe<RejectionUpdatesInput>;
  status_updates?: InputMaybe<StatusUpdatesInput>;
  suggested_opportunities?: InputMaybe<SuggestedOpportunitiesInput>;
};

export type NotificationsQuery = {
  notification?: Maybe<Notification>;
  /** @deprecated Use "notification" field instead. */
  notificationGet?: Maybe<Notification>;
  /** @deprecated Use "notifications" field instead. */
  notificationList?: Maybe<NotificationList>;
  /** List of notifications based on the selected filter value(s) */
  notifications?: Maybe<NotificationList>;
};


export type NotificationsQueryNotificationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type NotificationsQueryNotificationGetArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type NotificationsQueryNotificationListArgs = {
  filters?: InputMaybe<NotificationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
};


export type NotificationsQueryNotificationsArgs = {
  filters?: InputMaybe<NotificationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
};

export type NpsResponseType = {
  __typename?: 'NpsResponseType';
  /** Comment */
  comment?: Maybe<Scalars['String']>;
  /** LDM score - How likely would you recommend AIESEC as a leadership development organization? */
  ldm_score?: Maybe<Scalars['String']>;
  /** NPS score - How likely would you recommend the experience you lived through AIESEC to a friend or colleague? */
  nps_score?: Maybe<Scalars['String']>;
  /** Person name */
  person_name?: Maybe<Scalars['String']>;
  /** Profile picture */
  profile_picture?: Maybe<Scalars['String']>;
};


export type NpsResponseTypeProfile_PictureArgs = {
  size?: InputMaybe<Scalars['String']>;
};

export type Office = {
  __typename?: 'Office';
  address_detail?: Maybe<AddressInfo>;
  allow_online_payments?: Maybe<Scalars['String']>;
  campaigns?: Maybe<Array<Maybe<Campaign>>>;
  checklist_survey?: Maybe<Survey>;
  cities?: Maybe<Array<Maybe<City>>>;
  color_code?: Maybe<Scalars['String']>;
  comments?: Maybe<CommentConnection>;
  committee_aggregations?: Maybe<CommitteeAggregationConnection>;
  committee_targets?: Maybe<CommitteeTargetConnection>;
  companies?: Maybe<Array<Maybe<Organisation>>>;
  contact_detail?: Maybe<ContactInfo>;
  /** @deprecated Removed. recommend to get country from address_detail field */
  country?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  cover_photo?: Maybe<Scalars['String']>;
  custom_payment_url?: Maybe<Scalars['String']>;
  default_currency?: Maybe<Currency>;
  default_project_fee?: Maybe<Scalars['Int']>;
  default_project_fee_cents?: Maybe<Scalars['Int']>;
  eligible_for_online_payment?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  hdi?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id: Scalars['ID'];
  igv_fee_ep_percentage?: Maybe<Scalars['Float']>;
  igv_fee_partner_percentage?: Maybe<Scalars['Float']>;
  is_expansion?: Maybe<Scalars['String']>;
  is_frozen?: Maybe<Scalars['Boolean']>;
  is_od_model_eligible?: Maybe<Scalars['String']>;
  member_position?: Maybe<MemberPosition>;
  name?: Maybe<Scalars['String']>;
  name_sort?: Maybe<Scalars['String']>;
  od_data?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Office>;
  payments?: Maybe<CommitteePayment>;
  pdi?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** permissions */
  permissions?: Maybe<OfficePermissionType>;
  profile_photo?: Maybe<Scalars['String']>;
  programme_fees?: Maybe<ProgrammeFeeConnection>;
  programme_managers?: Maybe<Array<Maybe<ProgrammeManager>>>;
  project_fee_limit?: Maybe<Scalars['Int']>;
  project_fee_limit_cents?: Maybe<Scalars['Int']>;
  short_code?: Maybe<Scalars['String']>;
  signup_link?: Maybe<Scalars['String']>;
  signup_questions?: Maybe<Scalars['String']>;
  sub_office_count?: Maybe<Scalars['Int']>;
  /** suboffices details */
  suboffices?: Maybe<Array<Maybe<Office>>>;
  tag?: Maybe<Scalars['String']>;
  tag_lists?: Maybe<Array<Maybe<TagList>>>;
  todo_type?: Maybe<TodoType>;
  visa_requirements?: Maybe<Scalars['JSON']>;
};


export type OfficeCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type OfficeCommittee_AggregationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  term_id?: InputMaybe<Scalars['ID']>;
};


export type OfficeCommittee_TargetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  term_id?: InputMaybe<Scalars['ID']>;
};


export type OfficeHdiArgs = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};


export type OfficeMember_PositionArgs = {
  term_id: Scalars['Int'];
};


export type OfficeOd_DataArgs = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};


export type OfficePdiArgs = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  exchange_type?: InputMaybe<Scalars['String']>;
  programme_id?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
};


export type OfficeProgramme_FeesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type OfficeBasic = {
  __typename?: 'OfficeBasic';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  sub_office_count?: Maybe<Scalars['Int']>;
};

export type OfficeBasicDetails = {
  __typename?: 'OfficeBasicDetails';
  full_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Office>;
  programme_fees?: Maybe<ProgrammeFeeBasicConnection>;
  programme_managers?: Maybe<Array<Maybe<ProgrammeManager>>>;
  signup_link?: Maybe<Scalars['String']>;
  /** suboffices details */
  suboffices?: Maybe<Array<Maybe<OfficeId>>>;
};


export type OfficeBasicDetailsProgramme_FeesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type OfficeBasicList = {
  __typename?: 'OfficeBasicList';
  data?: Maybe<Array<Maybe<OfficeBasic>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

/** The connection type for Office. */
export type OfficeConnection = {
  __typename?: 'OfficeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OfficeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Office>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type OfficeEdge = {
  __typename?: 'OfficeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Office>;
};

export type OfficeFilter = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  is_od_model_eligible?: InputMaybe<Scalars['String']>;
  office_tag?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<OfficeSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  tag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tag_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type OfficeId = {
  __typename?: 'OfficeId';
  id: Scalars['ID'];
};

export type OfficeInput = {
  address_detail_attributes?: InputMaybe<AddressInput>;
  allow_online_payments?: InputMaybe<Scalars['String']>;
  cities?: InputMaybe<Array<InputMaybe<CommitteeCityInput>>>;
  contact_detail_attributes?: InputMaybe<ContactInput>;
  cover_photo?: InputMaybe<Scalars['String']>;
  custom_payment_url?: InputMaybe<Scalars['String']>;
  default_currency_id?: InputMaybe<Scalars['Int']>;
  default_project_fee_cents?: InputMaybe<Scalars['Int']>;
  igv_fee_ep_percentage?: InputMaybe<Scalars['Float']>;
  igv_fee_partner_percentage?: InputMaybe<Scalars['Float']>;
  is_expansion?: InputMaybe<Scalars['Boolean']>;
  is_od_model_eligible?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  payments?: InputMaybe<CommitteePaymentInput>;
  profile_photo?: InputMaybe<Scalars['String']>;
  project_fee_limit_cents?: InputMaybe<Scalars['Int']>;
  short_code?: InputMaybe<Scalars['String']>;
  signup_link?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  term?: InputMaybe<CommitteeTermInput>;
  visa_requirements?: InputMaybe<Scalars['JSON']>;
};

export type OfficeList = {
  __typename?: 'OfficeList';
  data?: Maybe<Array<Maybe<Office>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type OfficeMcAlignment = {
  __typename?: 'OfficeMcAlignment';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  mc_alignments?: Maybe<Array<LcAlignment>>;
  name?: Maybe<Scalars['String']>;
};

export type OfficePermissionType = {
  __typename?: 'OfficePermissionType';
  can_add_lc?: Maybe<Scalars['Boolean']>;
  can_delete?: Maybe<Scalars['Boolean']>;
  can_read?: Maybe<Scalars['Boolean']>;
  can_update?: Maybe<Scalars['Boolean']>;
  invite_people?: Maybe<Scalars['Boolean']>;
};

export enum OfficeSortOption {
  CreatedAt = 'created_at',
  Name = 'name',
  ParentName = 'parent_name',
  Tag = 'tag',
  UpdatedAt = 'updated_at'
}

export type OfflineAssessment = {
  __typename?: 'OfflineAssessment';
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  question?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type OfflineAssessmentInput = {
  question?: InputMaybe<Scalars['String']>;
};

export type Opportunity = {
  __typename?: 'Opportunity';
  accepted_count?: Maybe<Scalars['Int']>;
  all_slots?: Maybe<SlotConnection>;
  /** OpportunityApplications count */
  applicants_count?: Maybe<Scalars['Int']>;
  application_processing_time?: Maybe<Scalars['Int']>;
  applications_close_date?: Maybe<Scalars['DateTime']>;
  applications_status_facets?: Maybe<Scalars['JSON']>;
  /** Opportunity applied to */
  applied_to?: Maybe<Scalars['Boolean']>;
  /** Opportunity applied to with */
  applied_to_with?: Maybe<Scalars['Int']>;
  available_openings?: Maybe<Scalars['Int']>;
  available_slots?: Maybe<Array<Maybe<Slot>>>;
  average_nps_score?: Maybe<Scalars['Int']>;
  backgrounds?: Maybe<Array<Maybe<ConstantMap>>>;
  branch?: Maybe<Branch>;
  city?: Maybe<City>;
  comments?: Maybe<CommentConnection>;
  company_description?: Maybe<Scalars['String']>;
  completeness?: Maybe<Scalars['JSON']>;
  cover_photo?: Maybe<Scalars['JSON']>;
  created_at?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Currency>;
  current_status?: Maybe<Scalars['String']>;
  custom_statuses?: Maybe<CustomStatusTypeConnection>;
  date_opened?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  earliest_start_date?: Maybe<Scalars['DateTime']>;
  external_opportunity_id?: Maybe<Scalars['String']>;
  external_opportunity_link?: Maybe<Scalars['String']>;
  fee_and_health_insurance?: Maybe<Scalars['JSON']>;
  google_place_id?: Maybe<Scalars['String']>;
  has_opportunity_applications?: Maybe<Scalars['Boolean']>;
  /** Check Opportunity questions present */
  has_opportunity_questions?: Maybe<Scalars['Boolean']>;
  home_lc?: Maybe<Office>;
  /** home_mc */
  home_mc?: Maybe<Office>;
  host_lc?: Maybe<Office>;
  id: Scalars['ID'];
  /** Opportunity favourited */
  is_favourited?: Maybe<Scalars['Boolean']>;
  /** @deprecated Removed. Use partner_type field which will support different partner_type(global, regional). */
  is_gep?: Maybe<Scalars['Boolean']>;
  is_global_project?: Maybe<Scalars['String']>;
  is_project_enabled?: Maybe<Scalars['Boolean']>;
  languages?: Maybe<Array<Maybe<ConstantMap>>>;
  lat?: Maybe<Scalars['String']>;
  latest_end_date?: Maybe<Scalars['DateTime']>;
  /** Opportunity latest_reviews */
  latest_reviews?: Maybe<NpsResponseType>;
  legal_info?: Maybe<LegalInfoType>;
  lng?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  logistics_info?: Maybe<LogisticInfoType>;
  managers?: Maybe<Array<Maybe<Person>>>;
  mandatory_fields_check?: Maybe<Scalars['JSON']>;
  measure_of_impacts?: Maybe<Array<Maybe<ConstantMap>>>;
  meta?: Maybe<OpportunityMetaType>;
  nationalities?: Maybe<Array<Maybe<ConstantMap>>>;
  /** @deprecated Removed. Use average_nps_score field instead. */
  nps_score?: Maybe<Scalars['Int']>;
  /** Opportunity office_footfall_for_exchange */
  office_footfall_for_exchange?: Maybe<Scalars['String']>;
  offline_assessments?: Maybe<Array<Maybe<OfflineAssessment>>>;
  openings?: Maybe<Scalars['Int']>;
  opportunity_cost?: Maybe<Scalars['JSON']>;
  opportunity_duration_type?: Maybe<OpportunityDurationType>;
  opportunity_questions?: Maybe<OpportunityQuestionConnection>;
  /** Organisation details */
  organisation?: Maybe<Organisation>;
  parent_opportunity?: Maybe<Opportunity>;
  partner_type?: Maybe<PartnerTypes>;
  percentage_of_fulfillment?: Maybe<Scalars['Float']>;
  /** permissions */
  permissions?: Maybe<OpportunityPermissionType>;
  person?: Maybe<Person>;
  preferred_locations_info?: Maybe<Office>;
  profile_photo?: Maybe<Scalars['String']>;
  programme?: Maybe<Programme>;
  /** Programme fees */
  programme_fees?: Maybe<Scalars['Int']>;
  programmes?: Maybe<Array<Maybe<Programme>>>;
  progress_percentage_for_standards?: Maybe<Scalars['JSON']>;
  project?: Maybe<Opportunity>;
  project_description?: Maybe<Scalars['String']>;
  project_duration?: Maybe<Scalars['Int']>;
  project_fee?: Maybe<Scalars['JSON']>;
  project_id?: Maybe<Scalars['Int']>;
  project_name?: Maybe<Scalars['String']>;
  questionnaire?: Maybe<Questionnaire>;
  redirect_to_external_opportunity?: Maybe<Scalars['Boolean']>;
  rejected_count?: Maybe<Scalars['Int']>;
  /** Opportunity remark */
  remark?: Maybe<Scalars['String']>;
  remote_experience_additional_details?: Maybe<Scalars['String']>;
  remote_experience_duration?: Maybe<Scalars['String']>;
  remote_experience_salary?: Maybe<Scalars['String']>;
  remote_opportunity?: Maybe<Scalars['String']>;
  /** Opportunity reviews */
  reviews?: Maybe<Scalars['JSON']>;
  role_info?: Maybe<RoleInfoType>;
  scorecard?: Maybe<Scorecard>;
  /** Organisation details */
  sdg_info?: Maybe<Sdg>;
  selection_processes?: Maybe<SelectionProcessConnection>;
  skills?: Maybe<Array<Maybe<ConstantMap>>>;
  /** @deprecated Use all_slots field instead. */
  slots?: Maybe<Array<Maybe<Slot>>>;
  specifics_info?: Maybe<SpecificInfoType>;
  status?: Maybe<Scalars['String']>;
  study_levels?: Maybe<Array<Maybe<Constant>>>;
  sub_product?: Maybe<SubProduct>;
  tag_lists?: Maybe<Array<Maybe<TagList>>>;
  template_opportunities_locations?: Maybe<Array<Maybe<Scalars['Int']>>>;
  title?: Maybe<Scalars['String']>;
  tm_details?: Maybe<TmDetailType>;
  todo_type?: Maybe<TodoType>;
  transparent_fee_details?: Maybe<OpportunityTransparentFeeDetailsType>;
  updated_at?: Maybe<Scalars['DateTime']>;
  video_url?: Maybe<Scalars['String']>;
  view_count?: Maybe<Scalars['Int']>;
  weekly_activities?: Maybe<Array<Maybe<WeeklyActivity>>>;
  work_hours?: Maybe<Scalars['JSON']>;
};


export type OpportunityAll_SlotsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SlotSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  start_date?: InputMaybe<Scalars['Date']>;
};


export type OpportunityCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type OpportunityCover_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars['Boolean']>;
  cdn_region?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};


export type OpportunityCustom_StatusesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type OpportunityFee_And_Health_InsuranceArgs = {
  mc_id?: InputMaybe<Scalars['Int']>;
};


export type OpportunityOpportunity_CostArgs = {
  mc_id?: InputMaybe<Scalars['Int']>;
};


export type OpportunityOpportunity_QuestionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type OpportunityProfile_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars['Boolean']>;
  cdn_region?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};


export type OpportunitySelection_ProcessesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type OpportunityApplication = {
  __typename?: 'OpportunityApplication';
  acceptance_note_pdf_url?: Maybe<Scalars['String']>;
  accommodation_assignments?: Maybe<AccommodationAssignmentConnection>;
  aiesec_contribution?: Maybe<Scalars['Int']>;
  /** allow_online_payments */
  allow_online_payments?: Maybe<Scalars['Boolean']>;
  an_signed_at?: Maybe<Scalars['DateTime']>;
  an_status?: Maybe<Scalars['String']>;
  application_flight_token?: Maybe<Scalars['String']>;
  application_questionnaires?: Maybe<ApplicationQuestionnaireConnection>;
  application_scorecard?: Maybe<ApplicationScorecard>;
  attendees?: Maybe<Array<Maybe<Attendee>>>;
  average_score?: Maybe<Scalars['Float']>;
  /** branch */
  branch?: Maybe<Branch>;
  client_datas?: Maybe<ClientDataConnection>;
  comments?: Maybe<CommentConnection>;
  conversation?: Maybe<Conversation>;
  created_at?: Maybe<Scalars['DateTime']>;
  current_status?: Maybe<Scalars['String']>;
  custom_status?: Maybe<CustomStatusType>;
  cv?: Maybe<Cv>;
  date_approval_broken?: Maybe<Scalars['DateTime']>;
  date_approved?: Maybe<Scalars['DateTime']>;
  date_matched?: Maybe<Scalars['DateTime']>;
  date_pay_by_cash?: Maybe<Scalars['DateTime']>;
  date_realized?: Maybe<Scalars['DateTime']>;
  experience_end_date?: Maybe<Scalars['DateTime']>;
  experience_start_date?: Maybe<Scalars['DateTime']>;
  favourite?: Maybe<Scalars['Boolean']>;
  first_followed_up_date?: Maybe<Scalars['DateTime']>;
  flight_booking_reminder_date?: Maybe<Scalars['DateTime']>;
  follow_up?: Maybe<Constant>;
  followed_up_by?: Maybe<Person>;
  followed_up_date?: Maybe<Scalars['DateTime']>;
  gt_answer?: Maybe<Scalars['String']>;
  has_started_standards_survey?: Maybe<Scalars['Boolean']>;
  /** home_mc */
  home_mc?: Maybe<Office>;
  /** host_lc */
  host_lc?: Maybe<Office>;
  host_lc_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inbound_emails?: Maybe<Array<Maybe<InboundEmailType>>>;
  interview_details?: Maybe<InterviewDetailsType>;
  interview_slots?: Maybe<Array<Maybe<InterviewSlot>>>;
  interviewed?: Maybe<Scalars['Boolean']>;
  lda_links?: Maybe<Scalars['JSON']>;
  ldm_grade?: Maybe<Scalars['Int']>;
  ldm_report?: Maybe<Scalars['JSON']>;
  managers?: Maybe<Array<Maybe<Person>>>;
  matchability?: Maybe<Scalars['String']>;
  matched_or_rejected_at?: Maybe<Scalars['DateTime']>;
  measure_of_impacts?: Maybe<Array<Maybe<ConstantMap>>>;
  meta?: Maybe<ApplicationMetaType>;
  mos_certificate?: Maybe<Attachment>;
  nps_grade?: Maybe<Scalars['Int']>;
  nps_response?: Maybe<SurveyResponse>;
  /** NPS reponse completed date */
  nps_response_completed_at?: Maybe<Scalars['DateTime']>;
  offline_assessments?: Maybe<Array<Maybe<OfflineAssessment>>>;
  onward_arrival_airport?: Maybe<Scalars['String']>;
  onward_time?: Maybe<Scalars['DateTime']>;
  opportunity?: Maybe<Opportunity>;
  /** paid */
  paid?: Maybe<Scalars['Boolean']>;
  paid_at?: Maybe<Scalars['DateTime']>;
  paid_by?: Maybe<Person>;
  /** standards */
  partner_standards?: Maybe<Array<Maybe<ConstantMap>>>;
  /** payments */
  payments?: Maybe<ProgrammeFee>;
  /** permissions */
  permissions?: Maybe<OpportunityApplicationPermissionType>;
  person?: Maybe<Person>;
  questionnaire_answers?: Maybe<Scalars['JSON']>;
  questionnaire_attachment?: Maybe<ImageType>;
  rejection_reason?: Maybe<Constant>;
  required_backgrounds_percentage?: Maybe<Scalars['Int']>;
  required_languages_percentage?: Maybe<Scalars['Int']>;
  required_skills_percentage?: Maybe<Scalars['Int']>;
  return_departure_airport?: Maybe<Scalars['String']>;
  return_time?: Maybe<Scalars['DateTime']>;
  scheduled_interview?: Maybe<Scalars['DateTime']>;
  signed_contract_pdf_url?: Maybe<Scalars['String']>;
  slot?: Maybe<Slot>;
  standard_survey_id?: Maybe<Scalars['String']>;
  /** standards */
  standards?: Maybe<Array<Maybe<ConstantMap>>>;
  status?: Maybe<Scalars['String']>;
  tag_lists?: Maybe<Array<Maybe<TagList>>>;
  testimonial?: Maybe<Scalars['String']>;
  testimonial_filled_at?: Maybe<Scalars['DateTime']>;
  /** tn_manager */
  tn_manager?: Maybe<Person>;
  todo_type?: Maybe<TodoType>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  unsigned_contract_pdf_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type OpportunityApplicationAccommodation_AssignmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type OpportunityApplicationApplication_QuestionnairesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type OpportunityApplicationClient_DatasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type OpportunityApplicationCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for OpportunityApplication. */
export type OpportunityApplicationConnection = {
  __typename?: 'OpportunityApplicationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OpportunityApplicationEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type OpportunityApplicationEdge = {
  __typename?: 'OpportunityApplicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<OpportunityApplication>;
};

export type OpportunityApplicationInput = {
  accepted?: InputMaybe<Scalars['Boolean']>;
  aiesec_to_conduct_interview?: InputMaybe<Scalars['Boolean']>;
  application_questionnaires?: InputMaybe<Array<InputMaybe<ApplicationQuestionnaireInput>>>;
  custom_status_id?: InputMaybe<Scalars['ID']>;
  cv?: InputMaybe<ImageInput>;
  cv_id?: InputMaybe<Scalars['ID']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  experience?: InputMaybe<DateInput>;
  favourite?: InputMaybe<Scalars['Boolean']>;
  fields?: InputMaybe<Array<InputMaybe<FieldInput>>>;
  flight_booking_reminder_date?: InputMaybe<Scalars['DateTime']>;
  follow_up_id?: InputMaybe<Scalars['Int']>;
  gt_answer?: InputMaybe<Scalars['String']>;
  inbound_email?: InputMaybe<InboundEmailInput>;
  interview_platform_url?: InputMaybe<Scalars['String']>;
  interviewed?: InputMaybe<Scalars['Boolean']>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  maximum_video_duration?: InputMaybe<Scalars['Int']>;
  measure_of_impacts?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  mode?: InputMaybe<Scalars['String']>;
  onward_arrival_airport?: InputMaybe<Scalars['String']>;
  onward_time?: InputMaybe<Scalars['DateTime']>;
  opportunity_id?: InputMaybe<Scalars['ID']>;
  paid?: InputMaybe<Scalars['Boolean']>;
  person_id?: InputMaybe<Scalars['ID']>;
  questionnaire_answers?: InputMaybe<Scalars['JSON']>;
  /** The base64 encoded version of the questionnaire attachment to upload. */
  questionnaire_attachment?: InputMaybe<ImageInput>;
  /** Array of new questionnaires to be assigned with deadline */
  questionnaires_to_add?: InputMaybe<Array<InputMaybe<NewApplicationQuestionnaire>>>;
  /** Array of questionnaire ids to be removed */
  questionnaires_to_remove?: InputMaybe<Scalars['JSON']>;
  return_departure_airport?: InputMaybe<Scalars['String']>;
  return_time?: InputMaybe<Scalars['DateTime']>;
  slot_id?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  testimonial?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  video_assessment_answer?: InputMaybe<Scalars['String']>;
};

export type OpportunityApplicationList = {
  __typename?: 'OpportunityApplicationList';
  data?: Maybe<Array<Maybe<OpportunityApplication>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type OpportunityApplicationMutationQuery = {
  /** An Opportunity Application */
  anApplication?: Maybe<OpportunityApplication>;
  /** Send a message to the application IDs. */
  applicationBulkMessage?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** Extend application experience duration */
  applicationExtendExperience?: Maybe<OpportunityApplication>;
  /** Extend Remote application experience duration */
  applicationExtendRemoteExperience?: Maybe<OpportunityApplication>;
  /** Update application questionnaire of opportunity application */
  applicationQuestionnaireUpdate?: Maybe<OpportunityApplication>;
  /** Delete application scorecard attribute */
  applicationScorecardAttributeDelete?: Maybe<OpportunityApplication>;
  /** Approve Opportunity Application */
  approveApplication?: Maybe<OpportunityApplication>;
  /** Break Approved Opportunity Application */
  breakApprovedApplication?: Maybe<OpportunityApplication>;
  /** Break Realization Opportunity Application */
  breakRealizationApplication?: Maybe<OpportunityApplication>;
  /** Break Remote Realization of Opportunity Application */
  breakRemoteRealization?: Maybe<OpportunityApplication>;
  /** Match Opportunity Application */
  bulkMatchApplications?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** Bulk reject applications */
  bulkRejectApplications?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** Add tags for the given ids */
  bulkTagUpdateForApplications?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** Change custom status for Opportunity Application */
  changeCustomStatusApplication?: Maybe<OpportunityApplication>;
  /** Complete Opportunity Application */
  completeApplication?: Maybe<OpportunityApplication>;
  /** Create Opportunity Application */
  createApplication?: Maybe<OpportunityApplication>;
  /** Create scorecards for Opportunity Application */
  createScorecardsApplication?: Maybe<OpportunityApplication>;
  /** Update application Nps Response */
  fillNpsResponse?: Maybe<SurveyResponse>;
  generateMosCertificate?: Maybe<OpportunityApplication>;
  interviewSlotApplication?: Maybe<Array<Maybe<InterviewSlot>>>;
  /** Match Opportunity Application */
  matchApplication?: Maybe<OpportunityApplication>;
  offlineAssessmentApplication?: Maybe<Array<Maybe<OfflineAssessment>>>;
  /** Pay by cash Opportunity Application */
  payByCashApplication?: Maybe<OpportunityApplication>;
  /** Payment Opportunity Application */
  paymentApplication?: Maybe<OpportunityApplication>;
  /** Realize Opportunity Application */
  realizeApplication?: Maybe<OpportunityApplication>;
  /** Reject Opportunity Application */
  rejectApplication?: Maybe<OpportunityApplication>;
  /** Remote Realize Opportunity Application */
  remoteRealizeApplication?: Maybe<OpportunityApplication>;
  /** Reopen Opportunity Application */
  reopenApplication?: Maybe<OpportunityApplication>;
  /** Delete application scorecard */
  scorecardApplicationDelete?: Maybe<OpportunityApplication>;
  /** Testimonial Opportunity Application */
  testimonialApplication?: Maybe<OpportunityApplication>;
  /** Unreject Opportunity Application */
  unrejectApplication?: Maybe<OpportunityApplication>;
  /** Update Opportunity Application */
  updateApplication?: Maybe<OpportunityApplication>;
  /** Update Opportunity Application */
  updateApplicationFlightDetails?: Maybe<OpportunityApplication>;
  /** Update scorecards attribute */
  updateApplicationScorecardAttribute?: Maybe<OpportunityApplication>;
  /** Update Application flight details */
  updateFlightDetails?: Maybe<OpportunityApplication>;
  /** Update Opportunity Application */
  updateInterviewDetailsApplication?: Maybe<OpportunityApplication>;
  /** Withdraw Opportunity Application */
  withdrawApplication?: Maybe<OpportunityApplication>;
};


export type OpportunityApplicationMutationQueryAnApplicationArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type OpportunityApplicationMutationQueryApplicationBulkMessageArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  text?: InputMaybe<Scalars['String']>;
};


export type OpportunityApplicationMutationQueryApplicationExtendExperienceArgs = {
  experience_end_date: Scalars['DateTime'];
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryApplicationExtendRemoteExperienceArgs = {
  id: Scalars['ID'];
  remote_end_date: Scalars['DateTime'];
};


export type OpportunityApplicationMutationQueryApplicationQuestionnaireUpdateArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationQuestionnaireInput>;
};


export type OpportunityApplicationMutationQueryApplicationScorecardAttributeDeleteArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryApproveApplicationArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryBreakApprovedApplicationArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryBreakRealizationApplicationArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryBreakRemoteRealizationArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryBulkMatchApplicationsArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type OpportunityApplicationMutationQueryBulkRejectApplicationsArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rejection_reason_id?: InputMaybe<Scalars['Int']>;
};


export type OpportunityApplicationMutationQueryBulkTagUpdateForApplicationsArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type OpportunityApplicationMutationQueryChangeCustomStatusApplicationArgs = {
  id: Scalars['ID'];
  new_status_id?: InputMaybe<Scalars['Int']>;
};


export type OpportunityApplicationMutationQueryCompleteApplicationArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryCreateApplicationArgs = {
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type OpportunityApplicationMutationQueryCreateScorecardsApplicationArgs = {
  application_scorecard?: InputMaybe<Array<InputMaybe<ScorecardInput>>>;
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryFillNpsResponseArgs = {
  answer?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['ID'];
  question_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type OpportunityApplicationMutationQueryGenerateMosCertificateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type OpportunityApplicationMutationQueryInterviewSlotApplicationArgs = {
  id: Scalars['ID'];
  interview_slots?: InputMaybe<Array<InputMaybe<InterviewSlotInput>>>;
};


export type OpportunityApplicationMutationQueryMatchApplicationArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryOfflineAssessmentApplicationArgs = {
  id: Scalars['ID'];
  offline_assessments?: InputMaybe<Array<InputMaybe<OfflineAssessmentInput>>>;
};


export type OpportunityApplicationMutationQueryPayByCashApplicationArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryPaymentApplicationArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryRealizeApplicationArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type OpportunityApplicationMutationQueryRejectApplicationArgs = {
  id: Scalars['ID'];
  rejection_reason_id?: InputMaybe<Scalars['Int']>;
};


export type OpportunityApplicationMutationQueryRemoteRealizeApplicationArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<ApplicationRemoteRealizeInput>;
};


export type OpportunityApplicationMutationQueryReopenApplicationArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryScorecardApplicationDeleteArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryTestimonialApplicationArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type OpportunityApplicationMutationQueryUnrejectApplicationArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryUpdateApplicationArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type OpportunityApplicationMutationQueryUpdateApplicationFlightDetailsArgs = {
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type OpportunityApplicationMutationQueryUpdateApplicationScorecardAttributeArgs = {
  application_scorecard?: InputMaybe<ScorecardInput>;
  id: Scalars['ID'];
};


export type OpportunityApplicationMutationQueryUpdateFlightDetailsArgs = {
  application_flight_token: Scalars['String'];
  flight_details: FlightDetailsInput;
};


export type OpportunityApplicationMutationQueryUpdateInterviewDetailsApplicationArgs = {
  attendee_emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['ID'];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};


export type OpportunityApplicationMutationQueryWithdrawApplicationArgs = {
  id: Scalars['ID'];
};

export type OpportunityApplicationPermissionType = {
  __typename?: 'OpportunityApplicationPermissionType';
  can_access_ep_contract?: Maybe<Scalars['Boolean']>;
  can_be_approval_broken?: Maybe<Scalars['Boolean']>;
  can_be_approved_ep?: Maybe<Scalars['Boolean']>;
  can_be_approved_tn?: Maybe<Scalars['Boolean']>;
  can_be_completed?: Maybe<Scalars['Boolean']>;
  can_be_favourited?: Maybe<Scalars['Boolean']>;
  can_be_matched?: Maybe<Scalars['Boolean']>;
  can_be_realize_broken?: Maybe<Scalars['Boolean']>;
  can_be_realized?: Maybe<Scalars['Boolean']>;
  can_be_rejected?: Maybe<Scalars['Boolean']>;
  can_be_remote_realized?: Maybe<Scalars['Boolean']>;
  can_be_reopened?: Maybe<Scalars['Boolean']>;
  can_be_unrejected?: Maybe<Scalars['Boolean']>;
  can_be_withdrawn?: Maybe<Scalars['Boolean']>;
  can_break_remote_realization?: Maybe<Scalars['Boolean']>;
  can_edit_managers?: Maybe<Scalars['Boolean']>;
  can_extend_experience?: Maybe<Scalars['Boolean']>;
  can_extend_remote_experience?: Maybe<Scalars['Boolean']>;
  can_fill_complete_ldm?: Maybe<Scalars['Boolean']>;
  can_fill_standards?: Maybe<Scalars['Boolean']>;
  can_generate_mos_certificate?: Maybe<Scalars['Boolean']>;
  can_mark_match_paid?: Maybe<Scalars['Boolean']>;
  can_mark_realize_paid?: Maybe<Scalars['Boolean']>;
  can_sign_an?: Maybe<Scalars['Boolean']>;
  can_update?: Maybe<Scalars['Boolean']>;
  can_view_mos_certificate?: Maybe<Scalars['Boolean']>;
  has_completed_ldm?: Maybe<Scalars['Boolean']>;
  has_completed_nps?: Maybe<Scalars['Boolean']>;
  has_filled_acceptance_note?: Maybe<Scalars['Boolean']>;
  has_filled_all_standards?: Maybe<Scalars['Boolean']>;
  has_filled_complete_ldm?: Maybe<Scalars['Boolean']>;
  has_paid_for_match?: Maybe<Scalars['Boolean']>;
  has_paid_for_realize?: Maybe<Scalars['Boolean']>;
  should_complete_ldm?: Maybe<Scalars['Boolean']>;
  should_complete_nps?: Maybe<Scalars['Boolean']>;
  should_pay_at_match?: Maybe<Scalars['Boolean']>;
  should_pay_at_realize?: Maybe<Scalars['Boolean']>;
};

export type OpportunityApplicationQuery = {
  allOpportunityApplication?: Maybe<OpportunityApplicationList>;
  allOpportunityApplicationDownload?: Maybe<Scalars['String']>;
  applicationCsv?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** List all the interview slots for an opportunity application */
  applicationInterviewSlots?: Maybe<Array<Maybe<InterviewSlot>>>;
  /** List all the offline assessments for an opportunity application */
  applicationOfflineAssessments?: Maybe<Array<Maybe<OfflineAssessment>>>;
  applicationTestimonials?: Maybe<OpportunityApplicationList>;
  bulkCvDownload?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** Get Application flight details */
  flightDetails?: Maybe<OpportunityApplication>;
  getApplication?: Maybe<OpportunityApplication>;
  getInboundEmailApplication?: Maybe<Array<Maybe<InboundEmailType>>>;
  unbilledApplications?: Maybe<OpportunityApplicationList>;
};


export type OpportunityApplicationQueryAllOpportunityApplicationArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type OpportunityApplicationQueryAllOpportunityApplicationDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<ApplicationFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type OpportunityApplicationQueryApplicationCsvArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type OpportunityApplicationQueryApplicationInterviewSlotsArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationQueryApplicationOfflineAssessmentsArgs = {
  id: Scalars['ID'];
};


export type OpportunityApplicationQueryApplicationTestimonialsArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type OpportunityApplicationQueryBulkCvDownloadArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type OpportunityApplicationQueryFlightDetailsArgs = {
  application_flight_token: Scalars['String'];
};


export type OpportunityApplicationQueryGetApplicationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type OpportunityApplicationQueryGetInboundEmailApplicationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type OpportunityApplicationQueryUnbilledApplicationsArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  id: Scalars['ID'];
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};

export type OpportunityApplicationQuestionnaireInput = {
  application_questionnaires?: InputMaybe<Array<InputMaybe<ApplicationQuestionnaireInput>>>;
};

/** The connection type for Opportunity. */
export type OpportunityConnection = {
  __typename?: 'OpportunityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OpportunityEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Opportunity>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

export type OpportunityDurationType = {
  __typename?: 'OpportunityDurationType';
  accommodation?: Maybe<Scalars['String']>;
  duration_max?: Maybe<Scalars['Int']>;
  duration_min?: Maybe<Scalars['Int']>;
  duration_type?: Maybe<Scalars['String']>;
  either_of_salary_or_accommodation?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  programme?: Maybe<Programme>;
  salary?: Maybe<Scalars['String']>;
};

export type OpportunityDurationTypeQuery = {
  opportunityDurationTypes?: Maybe<Array<Maybe<OpportunityDurationType>>>;
};

/** An edge in a connection. */
export type OpportunityEdge = {
  __typename?: 'OpportunityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Opportunity>;
};

export type OpportunityFilter = {
  /** Available types - covered, not_covered */
  accommodation_covered?: InputMaybe<Scalars['String']>;
  /** Available types - provided, not_provided */
  accommodation_provided?: InputMaybe<Scalars['String']>;
  applications_closing?: InputMaybe<WorkScheduleInput>;
  background_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  backgrounds?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  branches?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  committee?: InputMaybe<Scalars['Int']>;
  committee_scope?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  company_size?: InputMaybe<Scalars['Int']>;
  company_type?: InputMaybe<Scalars['Int']>;
  converted_project_fee?: InputMaybe<RangeInput>;
  created?: InputMaybe<WorkScheduleInput>;
  created_from?: InputMaybe<Scalars['String']>;
  created_via?: InputMaybe<Scalars['String']>;
  date_opened?: InputMaybe<DateInput>;
  date_submitted_for_review?: InputMaybe<Scalars['DateTime']>;
  departments?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  duration?: InputMaybe<RangeInput>;
  /** Available types - short, medium, long */
  duration_type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  earliest_start_date?: InputMaybe<DateInput>;
  exclude_home_mcs?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  exclude_regions?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Available types - covered, not_covered */
  food_covered?: InputMaybe<Scalars['String']>;
  /** Available types - provided, not_provided */
  food_provided?: InputMaybe<Scalars['String']>;
  global_projects?: InputMaybe<Scalars['Boolean']>;
  has_managers?: InputMaybe<Scalars['Boolean']>;
  has_opportunity_applications?: InputMaybe<Scalars['Boolean']>;
  home_mcs?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  industries?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  is_favourited?: InputMaybe<Scalars['Boolean']>;
  is_project_enabled?: InputMaybe<Scalars['Boolean']>;
  issues?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  language_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  languages?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  last_interaction?: InputMaybe<DateInput>;
  latest_end_date?: InputMaybe<DateInput>;
  managers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nationalities?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  open_to?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  organisation?: InputMaybe<Scalars['Int']>;
  organisation_size?: InputMaybe<Scalars['Int']>;
  organisation_type?: InputMaybe<Scalars['Int']>;
  organisations?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  partner_type?: InputMaybe<Array<PartnerTypes>>;
  programmes?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  project_id?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  regions?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  remote_opportunity?: InputMaybe<Scalars['Boolean']>;
  sdg_goals?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sdg_targets?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  skill_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  skills?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  sort?: InputMaybe<OpportunitySortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  status?: InputMaybe<Scalars['String']>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  study_level_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  study_levels?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  sub_products?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Available types - covered, not_covered */
  transportation_covered?: InputMaybe<Scalars['String']>;
  /** Available types - provided, not_provided */
  transportation_provided?: InputMaybe<Scalars['String']>;
  work_fields?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type OpportunityInput = {
  applications_close_date?: InputMaybe<Scalars['DateTime']>;
  backgrounds?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  branch_id?: InputMaybe<Scalars['Int']>;
  company_description?: InputMaybe<Scalars['String']>;
  /** The base64 encoded version of the cover image to upload. */
  cover_photo?: InputMaybe<ImageInput>;
  currency_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  duration_max?: InputMaybe<Scalars['Int']>;
  duration_min?: InputMaybe<Scalars['Int']>;
  earliest_start_date?: InputMaybe<Scalars['DateTime']>;
  external_opportunity_id?: InputMaybe<Scalars['String']>;
  external_opportunity_link?: InputMaybe<Scalars['String']>;
  google_place_id?: InputMaybe<Scalars['String']>;
  home_lc_id?: InputMaybe<Scalars['Int']>;
  host_lc_id?: InputMaybe<Scalars['Int']>;
  is_global_project?: InputMaybe<Scalars['String']>;
  languages?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  lat?: InputMaybe<Scalars['Float']>;
  latest_end_date?: InputMaybe<Scalars['DateTime']>;
  legal_info?: InputMaybe<LegalInfoInput>;
  lng?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  logistics_info?: InputMaybe<LogisticsInfoInput>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  measure_of_impacts?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  meta?: InputMaybe<OpportunityMetaInput>;
  nationalities?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  openings?: InputMaybe<Scalars['Int']>;
  opportunity_duration_type_id?: InputMaybe<Scalars['Int']>;
  preferred_locations?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The base64 encoded version of the profile photo to upload. */
  profile_photo?: InputMaybe<ImageInput>;
  programme_id?: InputMaybe<Scalars['Int']>;
  project_description?: InputMaybe<Scalars['String']>;
  project_duration?: InputMaybe<Scalars['Int']>;
  project_fee_cents?: InputMaybe<Scalars['Int']>;
  project_id?: InputMaybe<Scalars['Int']>;
  project_name?: InputMaybe<Scalars['String']>;
  questionnaire_id?: InputMaybe<Scalars['Int']>;
  redirect_to_external_opportunity?: InputMaybe<Scalars['Boolean']>;
  remote_experience_details?: InputMaybe<RemoteExperienceInput>;
  role_info?: InputMaybe<RoleInfoInput>;
  scorecard_id?: InputMaybe<Scalars['Int']>;
  sdg_attributes?: InputMaybe<SdgInfoInput>;
  skills?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  specifics_info?: InputMaybe<SpecificsInfoInput>;
  study_levels?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sub_product_id?: InputMaybe<Scalars['Int']>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  team_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  tm_details?: InputMaybe<TmDetailsInput>;
  tn_manager_id?: InputMaybe<Scalars['Int']>;
  transparent_fee_details?: InputMaybe<OpportunityTransparentFeeDetailsInput>;
  work_hours?: InputMaybe<Scalars['JSON']>;
};

export type OpportunityList = {
  __typename?: 'OpportunityList';
  data?: Maybe<Array<Maybe<Opportunity>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type OpportunityMetaInput = {
  video_url?: InputMaybe<Scalars['String']>;
};

/** OpportunityMetaType records */
export type OpportunityMetaType = {
  __typename?: 'OpportunityMetaType';
  created_from?: Maybe<Scalars['String']>;
  created_via?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
};

export type OpportunityMutationQuery = {
  /** Create opportunity question */
  addOpportunityQuestion?: Maybe<OpportunityQuestion>;
  /** Create Selection Process for opportunity */
  addSelectionProcess?: Maybe<SelectionProcess>;
  /** Delete opportunity question */
  assignQuestionnaire?: Maybe<Opportunity>;
  /** update followups for the given ids */
  bulkAssignManagersForOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  bulkOpenOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  /** Delete list of opportunity questions */
  bulkRemoveOpportunityQuestions?: Maybe<Array<Maybe<OpportunityQuestion>>>;
  /** Add tags for the given ids */
  bulkTagUpdateForOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  /** update followups for the given ids */
  bulkUnassignManagersForOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  /** Create comment for the opportunity */
  createCommentForOpportunity?: Maybe<Comment>;
  /** Create Opportunity Custom Status */
  createCustomStatusOpportunity?: Maybe<CustomStatusType>;
  /** Opportunity ID */
  createLocalVolunteerOpportunity?: Maybe<Opportunity>;
  /** Create Opportunity */
  createOpportunity?: Maybe<Opportunity>;
  /** Create Project */
  createProject?: Maybe<Opportunity>;
  /** Delete Opportunity Custom Status */
  deleteCustomStatusOpportunity?: Maybe<CustomStatusType>;
  /** Opportunity ID */
  duplicateOpportunity?: Maybe<Opportunity>;
  favouriteOpportunity?: Maybe<Opportunity>;
  markOpportunityRemote?: Maybe<Opportunity>;
  offlineAssessmentOpportunity?: Maybe<Array<Maybe<OfflineAssessment>>>;
  openOpportunity?: Maybe<Opportunity>;
  opportunityIncrementViews?: Maybe<Opportunity>;
  /** @deprecated Use "markOpportunityRemote" field instead. */
  opportunityMarkRemote?: Maybe<Opportunity>;
  /** @deprecated Use "removeOpportunityCoverPhoto" field instead. */
  opportunityRemoveCoverPhoto?: Maybe<Opportunity>;
  /**
   * Report opportunity
   * @deprecated Use "reportOpportunity" field instead.
   */
  opportunityReport?: Maybe<Opportunity>;
  /** @deprecated Use "submitOpportunityForReview" field instead. */
  opportunitySubmitForReview?: Maybe<Opportunity>;
  /**
   * Unarchive an opportunity
   * @deprecated Use "unarchiveOpportunity" field instead.
   */
  opportunityUnarchive?: Maybe<Opportunity>;
  /** @deprecated Use "unmarkOpportunityRemote" field instead. */
  opportunityUnmarkRemote?: Maybe<Opportunity>;
  /** @deprecated Use "unpublishOpportunity" field instead. */
  opportunityUnpublish?: Maybe<Opportunity>;
  removeOpportunity?: Maybe<Opportunity>;
  removeOpportunityCoverPhoto?: Maybe<Opportunity>;
  /** Delete opportunity question */
  removeOpportunityQuestion?: Maybe<OpportunityQuestion>;
  /** Delete Selection Process */
  removeSelectionProcess?: Maybe<SelectionProcess>;
  /** Report opportunity */
  reportOpportunity?: Maybe<Opportunity>;
  /** Resolve comment for an opportunity */
  resolveComment?: Maybe<Comment>;
  /** Bulk Create Selection Process for opportunity */
  selectionProcessBulkCreate?: Maybe<Array<Maybe<SelectionProcess>>>;
  /** Bulk Delete Selection Process */
  selectionProcessBulkDelete?: Maybe<Array<Maybe<SelectionProcess>>>;
  /** Bulk update Selection Process for opportunity */
  selectionProcessBulkUpdate?: Maybe<Array<Maybe<SelectionProcess>>>;
  submitOpportunityForReview?: Maybe<Opportunity>;
  /** Unarchive an opportunity */
  unarchiveOpportunity?: Maybe<Opportunity>;
  unfavouriteOpportunity?: Maybe<Opportunity>;
  unmarkOpportunityRemote?: Maybe<Opportunity>;
  unpublishOpportunity?: Maybe<Opportunity>;
  /** Update Opportunity Custom Status */
  updateCustomStatusOpportunity?: Maybe<CustomStatusType>;
  /** Update Opportunity */
  updateOpportunity?: Maybe<Opportunity>;
  /** Update opportunity question */
  updateOpportunityQuestion?: Maybe<OpportunityQuestion>;
  /** Update Project */
  updateProject?: Maybe<Opportunity>;
  /** Create Selection Process for opportunity */
  updateSelectionProcess?: Maybe<SelectionProcess>;
  /** Bulk Create Weekly Activity for opportunity */
  weeklyActivitiesBulkCreate?: Maybe<Array<Maybe<WeeklyActivity>>>;
  /** Bulk Delete Weekly Activity */
  weeklyActivitiesBulkDelete?: Maybe<Array<Maybe<WeeklyActivity>>>;
};


export type OpportunityMutationQueryAddOpportunityQuestionArgs = {
  opportunity_id?: InputMaybe<Scalars['ID']>;
  opportunity_question?: InputMaybe<OpportunityQuestionInput>;
};


export type OpportunityMutationQueryAddSelectionProcessArgs = {
  opportunity_id: Scalars['ID'];
  selection_process?: InputMaybe<SelectionProcessInput>;
};


export type OpportunityMutationQueryAssignQuestionnaireArgs = {
  id: Scalars['ID'];
  questionnaire_id: Scalars['ID'];
};


export type OpportunityMutationQueryBulkAssignManagersForOpportunitiesArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type OpportunityMutationQueryBulkOpenOpportunitiesArgs = {
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type OpportunityMutationQueryBulkRemoveOpportunityQuestionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type OpportunityMutationQueryBulkTagUpdateForOpportunitiesArgs = {
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type OpportunityMutationQueryBulkUnassignManagersForOpportunitiesArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type OpportunityMutationQueryCreateCommentForOpportunityArgs = {
  comment?: InputMaybe<CommentInput>;
  opportunity_id: Scalars['ID'];
};


export type OpportunityMutationQueryCreateCustomStatusOpportunityArgs = {
  custom_status?: InputMaybe<CustomStatusInput>;
  opportunity_id: Scalars['ID'];
};


export type OpportunityMutationQueryCreateLocalVolunteerOpportunityArgs = {
  applications_close_date: Scalars['DateTime'];
  id: Scalars['ID'];
  openings: Scalars['Int'];
};


export type OpportunityMutationQueryCreateOpportunityArgs = {
  opportunity?: InputMaybe<OpportunityInput>;
};


export type OpportunityMutationQueryCreateProjectArgs = {
  opportunity?: InputMaybe<ProjectInput>;
};


export type OpportunityMutationQueryDeleteCustomStatusOpportunityArgs = {
  id: Scalars['ID'];
  opportunity_id: Scalars['ID'];
};


export type OpportunityMutationQueryDuplicateOpportunityArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryFavouriteOpportunityArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryMarkOpportunityRemoteArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryOfflineAssessmentOpportunityArgs = {
  id: Scalars['ID'];
  offline_assessments?: InputMaybe<Array<InputMaybe<OfflineAssessmentInput>>>;
};


export type OpportunityMutationQueryOpenOpportunityArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryOpportunityIncrementViewsArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryOpportunityMarkRemoteArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryOpportunityRemoveCoverPhotoArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryOpportunityReportArgs = {
  additional_information?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  remark?: InputMaybe<Scalars['String']>;
};


export type OpportunityMutationQueryOpportunitySubmitForReviewArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryOpportunityUnarchiveArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryOpportunityUnmarkRemoteArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryOpportunityUnpublishArgs = {
  id: Scalars['ID'];
  reason_id?: InputMaybe<Scalars['Int']>;
  remarks?: InputMaybe<Scalars['String']>;
};


export type OpportunityMutationQueryRemoveOpportunityArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryRemoveOpportunityCoverPhotoArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryRemoveOpportunityQuestionArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryRemoveSelectionProcessArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryReportOpportunityArgs = {
  additional_information?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  remark?: InputMaybe<Scalars['String']>;
};


export type OpportunityMutationQueryResolveCommentArgs = {
  comment_id: Scalars['ID'];
  id: Scalars['ID'];
};


export type OpportunityMutationQuerySelectionProcessBulkCreateArgs = {
  opportunity_id: Scalars['ID'];
  selection_processes?: InputMaybe<Array<InputMaybe<SelectionProcessInput>>>;
};


export type OpportunityMutationQuerySelectionProcessBulkDeleteArgs = {
  opportunity_id: Scalars['ID'];
  selection_process_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type OpportunityMutationQuerySelectionProcessBulkUpdateArgs = {
  opportunity_id: Scalars['ID'];
  selection_processes?: InputMaybe<Array<InputMaybe<UpdateSelectionProcessInput>>>;
};


export type OpportunityMutationQuerySubmitOpportunityForReviewArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryUnarchiveOpportunityArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryUnfavouriteOpportunityArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryUnmarkOpportunityRemoteArgs = {
  id: Scalars['ID'];
};


export type OpportunityMutationQueryUnpublishOpportunityArgs = {
  id: Scalars['ID'];
  reason_id?: InputMaybe<Scalars['Int']>;
  remarks?: InputMaybe<Scalars['String']>;
};


export type OpportunityMutationQueryUpdateCustomStatusOpportunityArgs = {
  custom_status?: InputMaybe<CustomStatusInput>;
  id: Scalars['ID'];
  opportunity_id: Scalars['ID'];
};


export type OpportunityMutationQueryUpdateOpportunityArgs = {
  id: Scalars['ID'];
  opportunity?: InputMaybe<OpportunityInput>;
};


export type OpportunityMutationQueryUpdateOpportunityQuestionArgs = {
  id: Scalars['ID'];
  opportunity_question?: InputMaybe<OpportunityQuestionInput>;
};


export type OpportunityMutationQueryUpdateProjectArgs = {
  id: Scalars['ID'];
  opportunity?: InputMaybe<ProjectInput>;
};


export type OpportunityMutationQueryUpdateSelectionProcessArgs = {
  id: Scalars['ID'];
  selection_process?: InputMaybe<SelectionProcessInput>;
};


export type OpportunityMutationQueryWeeklyActivitiesBulkCreateArgs = {
  opportunity_id: Scalars['ID'];
  weekly_activities?: InputMaybe<Array<InputMaybe<WeeklyActivityInput>>>;
};


export type OpportunityMutationQueryWeeklyActivitiesBulkDeleteArgs = {
  opportunity_id: Scalars['ID'];
  weekly_activities_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type OpportunityPermissionType = {
  __typename?: 'OpportunityPermissionType';
  can_apply_to_local_volunteer?: Maybe<Scalars['Boolean']>;
  can_be_applied_to?: Maybe<Scalars['Boolean']>;
  can_create_local_volunteer?: Maybe<Scalars['Boolean']>;
  can_create_slot?: Maybe<Scalars['Boolean']>;
  can_edit_managers?: Maybe<Scalars['Boolean']>;
  can_mark_gep?: Maybe<Scalars['Boolean']>;
  can_mark_remote_opportunity?: Maybe<Scalars['Boolean']>;
  can_mark_unremote_opportunity?: Maybe<Scalars['Boolean']>;
  can_open?: Maybe<Scalars['Boolean']>;
  can_un_publish?: Maybe<Scalars['Boolean']>;
  can_update?: Maybe<Scalars['Boolean']>;
  view_applications?: Maybe<Scalars['Boolean']>;
};

export type OpportunityPotentialCandidate = {
  comments?: InputMaybe<Scalars['String']>;
  opportunity_id?: InputMaybe<Scalars['Int']>;
  person_id?: InputMaybe<Scalars['Int']>;
};

export type OpportunityPotentialCandidateQuery = {
  getWatchlist?: Maybe<Array<Maybe<Person>>>;
};


export type OpportunityPotentialCandidateQueryGetWatchlistArgs = {
  opportunity_id?: InputMaybe<Scalars['Int']>;
};

export type OpportunityPotentialCandidateQueryType = {
  /** Create Opportunity Potential Candidate */
  createWatchlist?: Maybe<OpportunityPotentialCandidateType>;
  /** Update Opportunity Potential Candidate */
  deleteWatchlist?: Maybe<OpportunityPotentialCandidateType>;
};


export type OpportunityPotentialCandidateQueryTypeCreateWatchlistArgs = {
  potential_candidate?: InputMaybe<OpportunityPotentialCandidate>;
};


export type OpportunityPotentialCandidateQueryTypeDeleteWatchlistArgs = {
  opportunity_id: Scalars['Int'];
  person_id: Scalars['ID'];
};

export type OpportunityPotentialCandidateType = {
  __typename?: 'OpportunityPotentialCandidateType';
  comments?: Maybe<Array<Maybe<Comment>>>;
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  opportunity?: Maybe<Opportunity>;
  person?: Maybe<Person>;
  required_backgrounds_percentage?: Maybe<Scalars['Int']>;
  required_languages_percentage?: Maybe<Scalars['Int']>;
  required_skills_percentage?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type OpportunityQuery = {
  /** @deprecated Use "opportunities" field instead. */
  allOpportunity?: Maybe<OpportunityList>;
  /** @deprecated Use "downloadOpportunities" field instead. */
  allOpportunityDownload?: Maybe<Scalars['String']>;
  /** @deprecated Use "opportunities" field with "is_v2" boolean argument as true instead. */
  allOpportunityV2?: Maybe<OpportunityList>;
  downloadOpportunities?: Maybe<Scalars['String']>;
  favouriteOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  featuredOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  /** @deprecated Use "opportunity" field instead. */
  getOpportunity?: Maybe<Opportunity>;
  /** @deprecated Use "opportunityQuestions" field instead. */
  getOpportunityQuestions?: Maybe<Array<Maybe<OpportunityQuestion>>>;
  /** @deprecated Use "opportunityTestimonials" field instead. */
  getOpportunityTestimonials?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** @deprecated Use "opportunityTranslations" field instead. */
  getOpportunityTranslations?: Maybe<Scalars['JSON']>;
  myOpportunities?: Maybe<OpportunityList>;
  opportunities?: Maybe<OpportunityList>;
  opportunity?: Maybe<Opportunity>;
  /** List all the custom statuses for an opportunity */
  opportunityCustomStatuses?: Maybe<Array<Maybe<CustomStatusType>>>;
  opportunityDiversification?: Maybe<Array<Maybe<Office>>>;
  opportunityQuestions?: Maybe<Array<Maybe<OpportunityQuestion>>>;
  opportunityTestimonials?: Maybe<Array<Maybe<OpportunityApplication>>>;
  opportunityTranslations?: Maybe<Scalars['JSON']>;
  projects?: Maybe<OpportunityList>;
  projectsList?: Maybe<Array<Maybe<Opportunity>>>;
  /** @deprecated Use "searchOpportunities" field instead. */
  searchAllOpportunity?: Maybe<OpportunityList>;
  searchOpportunities?: Maybe<OpportunityList>;
  similarOpportunities?: Maybe<OpportunityList>;
  stats2?: Maybe<Scalars['JSON']>;
};


export type OpportunityQueryAllOpportunityArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  smart_search?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type OpportunityQueryAllOpportunityDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type OpportunityQueryAllOpportunityV2Args = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type OpportunityQueryDownloadOpportunitiesArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type OpportunityQueryFeaturedOpportunitiesArgs = {
  type?: InputMaybe<Scalars['String']>;
};


export type OpportunityQueryGetOpportunityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type OpportunityQueryGetOpportunityQuestionsArgs = {
  opportunity_id: Scalars['ID'];
};


export type OpportunityQueryGetOpportunityTestimonialsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type OpportunityQueryGetOpportunityTranslationsArgs = {
  id: Scalars['ID'];
  language_code: Scalars['String'];
};


export type OpportunityQueryMyOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  manager_id?: InputMaybe<Scalars['Int']>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type OpportunityQueryOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  is_v2?: InputMaybe<Scalars['Boolean']>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  smart_search?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type OpportunityQueryOpportunityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type OpportunityQueryOpportunityCustomStatusesArgs = {
  id: Scalars['ID'];
};


export type OpportunityQueryOpportunityDiversificationArgs = {
  filtered_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  mc_id: Scalars['Int'];
  programme_id: Scalars['Int'];
  start_date: Scalars['DateTime'];
};


export type OpportunityQueryOpportunityQuestionsArgs = {
  opportunity_id: Scalars['ID'];
};


export type OpportunityQueryOpportunityTestimonialsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type OpportunityQueryOpportunityTranslationsArgs = {
  id: Scalars['ID'];
  language_code: Scalars['String'];
};


export type OpportunityQueryProjectsArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<Pagination>;
  q?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type OpportunityQuerySearchAllOpportunityArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type OpportunityQuerySearchOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type OpportunityQuerySimilarOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  id?: InputMaybe<Scalars['ID']>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};

export type OpportunityQuestion = {
  __typename?: 'OpportunityQuestion';
  id?: Maybe<Scalars['ID']>;
  is_mandatory?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<OpportunityQuestion>;
  position?: Maybe<Scalars['Int']>;
  question_text?: Maybe<Scalars['String']>;
  question_type?: Maybe<Scalars['String']>;
  sub_questions?: Maybe<OpportunityQuestionConnection>;
};


export type OpportunityQuestionSub_QuestionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for OpportunityQuestion. */
export type OpportunityQuestionConnection = {
  __typename?: 'OpportunityQuestionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OpportunityQuestionEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<OpportunityQuestion>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type OpportunityQuestionEdge = {
  __typename?: 'OpportunityQuestionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<OpportunityQuestion>;
};

export type OpportunityQuestionInput = {
  is_mandatory?: InputMaybe<Scalars['Boolean']>;
  parent_id?: InputMaybe<Scalars['ID']>;
  position?: InputMaybe<Scalars['Int']>;
  question_text?: InputMaybe<Scalars['String']>;
  /** Options - [:text, :paragraph, :dichotomous, :attachment, :checkbox, :multiple_choice] */
  question_type?: InputMaybe<Scalars['String']>;
};

export enum OpportunitySortOption {
  Application = 'application',
  ApplicationCount = 'application_count',
  ApplicationsClosing = 'applications_closing',
  AverageNpsScore = 'average_nps_score',
  BranchName = 'branch_name',
  Branches = 'branches',
  Committee = 'committee',
  Company = 'company',
  CompanySize = 'company_size',
  CompanyType = 'company_type',
  CreatedAt = 'created_at',
  CreatedVia = 'created_via',
  DateOpened = 'date_opened',
  Departments = 'departments',
  DurationMax = 'duration_max',
  DurationMin = 'duration_min',
  DurationType = 'duration_type',
  EarliestStartDate = 'earliest_start_date',
  HomeMcs = 'home_mcs',
  HostLcName = 'host_lc_name',
  HostMcName = 'host_mc_name',
  Industries = 'industries',
  IsGe = 'is_ge',
  IsGep = 'is_gep',
  Issues = 'issues',
  LatestEndDate = 'latest_end_date',
  NpsScore = 'nps_score',
  OpenTo = 'open_to',
  OrganisationName = 'organisation_name',
  Price = 'price',
  Programmes = 'programmes',
  Regions = 'regions',
  Relevance = 'relevance',
  SdgGoal = 'sdg_goal',
  SdgTarget = 'sdg_target',
  Status = 'status',
  SubProduct = 'sub_product',
  Title = 'title',
  UpdatedAt = 'updated_at',
  ViewCount = 'view_count',
  WorkFields = 'work_fields'
}

export type OpportunityTransparentFeeDetailsInput = {
  covers_accomodation?: InputMaybe<Scalars['Boolean']>;
  covers_administrative_costs?: InputMaybe<Scalars['Boolean']>;
  covers_leadership_spaces?: InputMaybe<Scalars['Boolean']>;
  covers_pickup?: InputMaybe<Scalars['Boolean']>;
  sponsored_by?: InputMaybe<Scalars['String']>;
};

/** OpportunityTransparentFeeDetailsType records */
export type OpportunityTransparentFeeDetailsType = {
  __typename?: 'OpportunityTransparentFeeDetailsType';
  covers_accomodation?: Maybe<Scalars['Boolean']>;
  covers_administrative_costs?: Maybe<Scalars['Boolean']>;
  covers_leadership_spaces?: Maybe<Scalars['Boolean']>;
  covers_pickup?: Maybe<Scalars['Boolean']>;
  sponsored_by?: Maybe<Scalars['String']>;
};

export type Organisation = {
  __typename?: 'Organisation';
  active_opportunities_count?: Maybe<Scalars['Int']>;
  address_detail?: Maybe<AddressInfo>;
  backgrounds?: Maybe<Array<Maybe<ConstantMap>>>;
  branches?: Maybe<BranchConnection>;
  branches_count?: Maybe<Scalars['Int']>;
  comments?: Maybe<CommentConnection>;
  company_stats?: Maybe<Scalars['JSON']>;
  completeness?: Maybe<Scalars['JSON']>;
  contact_detail?: Maybe<ContactInfo>;
  contact_people?: Maybe<Scalars['String']>;
  cover_photo?: Maybe<Scalars['String']>;
  employees_count?: Maybe<Scalars['Int']>;
  experience_count?: Maybe<Scalars['String']>;
  follow_up?: Maybe<Constant>;
  has_employee?: Maybe<Scalars['Boolean']>;
  has_employees?: Maybe<Scalars['Boolean']>;
  has_opportunities?: Maybe<Scalars['Boolean']>;
  home_lc?: Maybe<Office>;
  id: Scalars['ID'];
  industries?: Maybe<Array<Maybe<Constant>>>;
  /** @deprecated Removed. Use partner_type field which will support different partner_type(global, regional). */
  is_gep?: Maybe<Scalars['Boolean']>;
  managers?: Maybe<Array<Maybe<Person>>>;
  meta?: Maybe<CompanyMetaType>;
  name?: Maybe<Scalars['String']>;
  open_opportunities_count?: Maybe<Scalars['Int']>;
  open_positions?: Maybe<Scalars['Int']>;
  opportunity_count?: Maybe<Scalars['Int']>;
  organisation_size?: Maybe<Constant>;
  organisation_type?: Maybe<Constant>;
  partner_type?: Maybe<PartnerTypes>;
  permissions?: Maybe<OrganisationPermissionType>;
  pop_first_sign_up?: Maybe<Scalars['DateTime']>;
  profile_photo?: Maybe<Scalars['String']>;
  programmes?: Maybe<Programme>;
  questionnaires?: Maybe<QuestionnaireConnection>;
  registration_no?: Maybe<Scalars['String']>;
  scorecards?: Maybe<ScorecardConnection>;
  stats?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  tag_lists?: Maybe<Array<Maybe<TagList>>>;
  testimonials?: Maybe<Array<Maybe<Testimonial>>>;
  todo_type?: Maybe<TodoType>;
  website?: Maybe<Scalars['String']>;
  year_of_creation?: Maybe<Scalars['Int']>;
};


export type OrganisationBranchesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type OrganisationCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type OrganisationCover_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars['Boolean']>;
  cdn_region?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};


export type OrganisationProfile_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars['Boolean']>;
  cdn_region?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};


export type OrganisationQuestionnairesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type OrganisationScorecardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type OrganisationStatsArgs = {
  end_date: Scalars['DateTime'];
  start_date: Scalars['DateTime'];
};

export type OrganisationMutationQuery = {
  /** Organisation Approve */
  approveOrganisation?: Maybe<Organisation>;
  /** Organisation Archived */
  archiveOrganisation?: Maybe<Organisation>;
  /** Create Organisation */
  createOrganisation?: Maybe<Organisation>;
  /** Create scorecard for Organisation */
  createOrganisationScorecard?: Maybe<Scorecard>;
  /** create Organisation Scorecard Attribute */
  createOrganisationScorecardAttribute?: Maybe<Scorecard>;
  /** Delete organisation scorecard */
  deleteOrganisationScorecard?: Maybe<Scorecard>;
  /** Delete organisation scorecard attribute */
  deleteOrganisationScorecardAttribute?: Maybe<ScorecardAttributeType>;
  /** Update Organisation */
  followupOrganisation?: Maybe<Organisation>;
  /**
   * Organisation Approve
   * @deprecated Use "approveOrganisation" field instead.
   */
  organisationApprove?: Maybe<Organisation>;
  /**
   * Organisation Archived
   * @deprecated Use "archiveOrganisation" field instead.
   */
  organisationArchive?: Maybe<Organisation>;
  /**
   * Update Organisation
   * @deprecated Use "followupOrganisation" field instead.
   */
  organisationFollowup?: Maybe<Organisation>;
  /**
   * Organisation Reject
   * @deprecated Use "rejectOrganisation" field instead.
   */
  organisationReject?: Maybe<Organisation>;
  /** @deprecated Use "removeOrganisationPartnerType" field instead. */
  organisationRemovePartnerType?: Maybe<Organisation>;
  /**
   * create Organisation Scorecard Attribute
   * @deprecated Use "createOrganisationScorecardAttribute" field instead.
   */
  organisationScorecardAttributeCreate?: Maybe<Scorecard>;
  /**
   * Delete organisation scorecard attribute
   * @deprecated Use "deleteOrganisationScorecardAttribute" field instead.
   */
  organisationScorecardAttributeDelete?: Maybe<ScorecardAttributeType>;
  /**
   * Update Organisation Scorecard Attribute
   * @deprecated Use "updateOrganisationScorecardAttribute" field instead.
   */
  organisationScorecardAttributeUpdate?: Maybe<ScorecardAttributeType>;
  /**
   * Create scorecard for Organisation
   * @deprecated Use "createOrganisationScorecard" field instead.
   */
  organisationScorecardCreate?: Maybe<Scorecard>;
  /**
   * Delete organisation scorecard
   * @deprecated Use "deleteOrganisationScorecard" field instead.
   */
  organisationScorecardDelete?: Maybe<Scorecard>;
  /**
   * Update Organisation Scorecard
   * @deprecated Use "updateOrganisationScorecard" field instead.
   */
  organisationScorecardUpdate?: Maybe<Scorecard>;
  /** @deprecated Use "setOrganisationPartnerType" field instead. */
  organisationSetPartnerType?: Maybe<Organisation>;
  /** Organisation Reject */
  rejectOrganisation?: Maybe<Organisation>;
  removeOrganisationPartnerType?: Maybe<Organisation>;
  setOrganisationPartnerType?: Maybe<Organisation>;
  /** Update Organisation */
  updateOrganisation?: Maybe<Organisation>;
  /** Update Organisation Scorecard */
  updateOrganisationScorecard?: Maybe<Scorecard>;
  /** Update Organisation Scorecard Attribute */
  updateOrganisationScorecardAttribute?: Maybe<ScorecardAttributeType>;
};


export type OrganisationMutationQueryApproveOrganisationArgs = {
  id: Scalars['ID'];
};


export type OrganisationMutationQueryArchiveOrganisationArgs = {
  id: Scalars['ID'];
};


export type OrganisationMutationQueryCreateOrganisationArgs = {
  organisation?: InputMaybe<CompanyInput>;
};


export type OrganisationMutationQueryCreateOrganisationScorecardArgs = {
  company_id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organisation_scorecard_attribute?: InputMaybe<Array<InputMaybe<ScorecardAttributeInput>>>;
};


export type OrganisationMutationQueryCreateOrganisationScorecardAttributeArgs = {
  organisation_scorecard_attribute?: InputMaybe<Array<InputMaybe<ScorecardAttributeInput>>>;
  scorecard_id: Scalars['ID'];
};


export type OrganisationMutationQueryDeleteOrganisationScorecardArgs = {
  id: Scalars['ID'];
};


export type OrganisationMutationQueryDeleteOrganisationScorecardAttributeArgs = {
  id: Scalars['ID'];
};


export type OrganisationMutationQueryFollowupOrganisationArgs = {
  follow_up_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};


export type OrganisationMutationQueryOrganisationApproveArgs = {
  id: Scalars['ID'];
};


export type OrganisationMutationQueryOrganisationArchiveArgs = {
  id: Scalars['ID'];
};


export type OrganisationMutationQueryOrganisationFollowupArgs = {
  follow_up_id?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};


export type OrganisationMutationQueryOrganisationRejectArgs = {
  id: Scalars['ID'];
};


export type OrganisationMutationQueryOrganisationRemovePartnerTypeArgs = {
  id: Scalars['ID'];
};


export type OrganisationMutationQueryOrganisationScorecardAttributeCreateArgs = {
  organisation_scorecard_attribute?: InputMaybe<Array<InputMaybe<ScorecardAttributeInput>>>;
  scorecard_id: Scalars['ID'];
};


export type OrganisationMutationQueryOrganisationScorecardAttributeDeleteArgs = {
  id: Scalars['ID'];
};


export type OrganisationMutationQueryOrganisationScorecardAttributeUpdateArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type OrganisationMutationQueryOrganisationScorecardCreateArgs = {
  company_id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organisation_scorecard_attribute?: InputMaybe<Array<InputMaybe<ScorecardAttributeInput>>>;
};


export type OrganisationMutationQueryOrganisationScorecardDeleteArgs = {
  id: Scalars['ID'];
};


export type OrganisationMutationQueryOrganisationScorecardUpdateArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type OrganisationMutationQueryOrganisationSetPartnerTypeArgs = {
  id: Scalars['ID'];
  partner_type: PartnerTypes;
};


export type OrganisationMutationQueryRejectOrganisationArgs = {
  id: Scalars['ID'];
};


export type OrganisationMutationQueryRemoveOrganisationPartnerTypeArgs = {
  id: Scalars['ID'];
};


export type OrganisationMutationQuerySetOrganisationPartnerTypeArgs = {
  id: Scalars['ID'];
  partner_type: PartnerTypes;
};


export type OrganisationMutationQueryUpdateOrganisationArgs = {
  id: Scalars['ID'];
  organisation?: InputMaybe<CompanyInput>;
};


export type OrganisationMutationQueryUpdateOrganisationScorecardArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type OrganisationMutationQueryUpdateOrganisationScorecardAttributeArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type OrganisationPermissionType = {
  __typename?: 'OrganisationPermissionType';
  can_approve?: Maybe<Scalars['Boolean']>;
  can_archive?: Maybe<Scalars['Boolean']>;
  can_reject?: Maybe<Scalars['Boolean']>;
  can_remove_partner_type?: Maybe<Scalars['Boolean']>;
  can_update?: Maybe<Scalars['Boolean']>;
  can_update_partner_type?: Maybe<Scalars['Boolean']>;
};

export type OrganisationQuery = {
  /** @deprecated Use "organisations" field instead. */
  allOrganisation?: Maybe<CompanyList>;
  /** @deprecated Use "organisationDownload" field instead. */
  allOrganisationDownload?: Maybe<Scalars['String']>;
  geoPartners?: Maybe<Array<Maybe<Organisation>>>;
  /** @deprecated Use "organisation" field instead. */
  getOrganisation?: Maybe<Organisation>;
  /** @deprecated Use "my" boolean argument in "organisations" field instead. */
  myOrganisation?: Maybe<CompanyList>;
  openOpportunity?: Maybe<Array<Maybe<Opportunity>>>;
  organisation?: Maybe<Organisation>;
  organisationAutocomplete?: Maybe<Array<Maybe<Organisation>>>;
  /** @deprecated Use "my" boolean argument in "organisation_autocomplete" field instead. */
  organisationAutocompleteMy?: Maybe<Array<Maybe<Organisation>>>;
  organisationDownload?: Maybe<Scalars['String']>;
  organisations?: Maybe<CompanyList>;
};


export type OrganisationQueryAllOrganisationArgs = {
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type OrganisationQueryAllOrganisationDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type OrganisationQueryGetOrganisationArgs = {
  id: Scalars['ID'];
};


export type OrganisationQueryMyOrganisationArgs = {
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type OrganisationQueryOpenOpportunityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type OrganisationQueryOrganisationArgs = {
  id: Scalars['ID'];
};


export type OrganisationQueryOrganisationAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  my?: InputMaybe<Scalars['Boolean']>;
  q?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type OrganisationQueryOrganisationAutocompleteMyArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type OrganisationQueryOrganisationDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type OrganisationQueryOrganisationsArgs = {
  filters?: InputMaybe<CompanyFilter>;
  my?: InputMaybe<Scalars['Boolean']>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type OrganizationDevelopment = {
  __typename?: 'OrganizationDevelopment';
  exchange_type?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  index?: Maybe<Scalars['String']>;
  mc?: Maybe<Office>;
  month?: Maybe<Scalars['DateTime']>;
  programme?: Maybe<Programme>;
  score?: Maybe<Scalars['Float']>;
};

export type OrganizationDevelopmentInput = {
  score?: InputMaybe<Scalars['Float']>;
};

export type OrganizationDevelopmentMutationQuery = {
  /** Update OrganizationDevelopment */
  updateOrganizationDevelopment?: Maybe<OrganizationDevelopment>;
  /** Update OrganizationDevelopmentTarget */
  updateOrganizationDevelopmentTarget?: Maybe<OrganizationDevelopmentTarget>;
};


export type OrganizationDevelopmentMutationQueryUpdateOrganizationDevelopmentArgs = {
  id: Scalars['ID'];
  organization_development?: InputMaybe<OrganizationDevelopmentInput>;
};


export type OrganizationDevelopmentMutationQueryUpdateOrganizationDevelopmentTargetArgs = {
  id: Scalars['ID'];
  organization_development_target?: InputMaybe<OrganizationDevelopmentTargetInput>;
};

export type OrganizationDevelopmentQuery = {
  organizationDevelopmentGet?: Maybe<OrganizationDevelopment>;
  organizationDevelopmentList: Array<Maybe<OrganizationDevelopment>>;
  organizationDevelopmentTargetGet?: Maybe<OrganizationDevelopmentTarget>;
  organizationDevelopmentTargetList?: Maybe<Array<Maybe<OrganizationDevelopmentTarget>>>;
};


export type OrganizationDevelopmentQueryOrganizationDevelopmentGetArgs = {
  id: Scalars['ID'];
};


export type OrganizationDevelopmentQueryOrganizationDevelopmentListArgs = {
  exchange_type_filter?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<BaseFilter>;
  index_filter?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  month_filter?: InputMaybe<Scalars['DateTime']>;
  office_filter?: InputMaybe<Scalars['Int']>;
  programme_filter?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
};


export type OrganizationDevelopmentQueryOrganizationDevelopmentTargetGetArgs = {
  id: Scalars['ID'];
};

export type OrganizationDevelopmentTarget = {
  __typename?: 'OrganizationDevelopmentTarget';
  exchange_type?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  month?: Maybe<Scalars['DateTime']>;
  programme?: Maybe<Programme>;
  target?: Maybe<Scalars['Int']>;
};

export type OrganizationDevelopmentTargetInput = {
  target?: InputMaybe<Scalars['Int']>;
};

export type PageComponentDraftType = {
  __typename?: 'PageComponentDraftType';
  client_reference_id?: Maybe<Scalars['String']>;
  component_attachment?: Maybe<ImageType>;
  component_type?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  position?: Maybe<Scalars['Int']>;
};

export type PageComponentInput = {
  client_reference_id?: InputMaybe<Scalars['String']>;
  /** The base64 encoded version of the component attachment to upload or external url. */
  component_attachment?: InputMaybe<ImageInput>;
  /** Options - [:header, :sub_header, :bulletin] */
  component_type?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  page_id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
};

export type PageComponentMutationQuery = {
  /** Create page component */
  createPageComponent?: Maybe<PageComponentDraftType>;
  deletePageComponent?: Maybe<PageComponentType>;
  duplicatePageComponent?: Maybe<PageComponentType>;
  /**
   * Create page component
   * @deprecated Use "createPageComponent" field instead.
   */
  pageComponentCreate?: Maybe<PageComponentDraftType>;
  /** @deprecated Use "deletePageComponent" field instead. */
  pageComponentDelete?: Maybe<PageComponentType>;
  /** @deprecated Use "duplicatePageComponent" field instead. */
  pageComponentDuplicate?: Maybe<PageComponentType>;
  /**
   * Update page component
   * @deprecated Use "updatePageComponent" field instead.
   */
  pageComponentUpdate?: Maybe<PageComponentDraftType>;
  /** Update page component */
  updatePageComponent?: Maybe<PageComponentDraftType>;
};


export type PageComponentMutationQueryCreatePageComponentArgs = {
  page_component?: InputMaybe<PageComponentInput>;
  page_id: Scalars['ID'];
};


export type PageComponentMutationQueryDeletePageComponentArgs = {
  client_reference_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type PageComponentMutationQueryDuplicatePageComponentArgs = {
  id: Scalars['ID'];
};


export type PageComponentMutationQueryPageComponentCreateArgs = {
  page_component?: InputMaybe<PageComponentInput>;
  page_id: Scalars['ID'];
};


export type PageComponentMutationQueryPageComponentDeleteArgs = {
  client_reference_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type PageComponentMutationQueryPageComponentDuplicateArgs = {
  id: Scalars['ID'];
};


export type PageComponentMutationQueryPageComponentUpdateArgs = {
  client_reference_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  page_component?: InputMaybe<PageComponentInput>;
};


export type PageComponentMutationQueryUpdatePageComponentArgs = {
  client_reference_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  page_component?: InputMaybe<PageComponentInput>;
};

export type PageComponentType = {
  __typename?: 'PageComponentType';
  client_reference_id?: Maybe<Scalars['String']>;
  component_attachment?: Maybe<ImageType>;
  component_type?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  position?: Maybe<Scalars['Int']>;
};

/** The connection type for PageComponentType. */
export type PageComponentTypeConnection = {
  __typename?: 'PageComponentTypeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PageComponentTypeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PageComponentType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type PageComponentTypeEdge = {
  __typename?: 'PageComponentTypeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<PageComponentType>;
};

export type PageFilter = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  committee_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  created_at?: InputMaybe<DateInput>;
  creator_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  is_favourited?: InputMaybe<Scalars['Boolean']>;
  is_personal?: InputMaybe<Scalars['Boolean']>;
  office_tag?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<PageSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updated_at?: InputMaybe<DateInput>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PageInput = {
  categories?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  category_id?: InputMaybe<Scalars['Int']>;
  emoji?: InputMaybe<Scalars['JSON']>;
  is_personal?: InputMaybe<Scalars['Boolean']>;
  office_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageList = {
  __typename?: 'PageList';
  data?: Maybe<Array<Maybe<PageType>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type PageMutationQuery = {
  /** Create page */
  createPage?: Maybe<PageType>;
  deletePage?: Maybe<PageType>;
  favouritePage?: Maybe<PageType>;
  /** Page move to draft */
  movePageToDraft?: Maybe<PageType>;
  /**
   * Create page
   * @deprecated Use "createPage" field instead.
   */
  pageCreate?: Maybe<PageType>;
  /** @deprecated Use "deletePage" field instead. */
  pageDelete?: Maybe<PageType>;
  /** @deprecated Use "favouritePage" field instead. */
  pageFavourite?: Maybe<PageType>;
  /**
   * Page move to draft
   * @deprecated Use "movePageToDraft" field instead.
   */
  pageMoveToDraft?: Maybe<PageType>;
  /** @deprecated Use "publishPage" field instead. */
  pagePublish?: Maybe<PageType>;
  /** @deprecated Use "unfavouritePage" field instead. */
  pageUnfavourite?: Maybe<PageType>;
  /**
   * Update page
   * @deprecated Use "updatePage" field instead.
   */
  pageUpdate?: Maybe<PageType>;
  publishPage?: Maybe<PageType>;
  unfavouritePage?: Maybe<PageType>;
  /** Update page */
  updatePage?: Maybe<PageType>;
};


export type PageMutationQueryCreatePageArgs = {
  page?: InputMaybe<PageInput>;
};


export type PageMutationQueryDeletePageArgs = {
  id: Scalars['ID'];
};


export type PageMutationQueryFavouritePageArgs = {
  id: Scalars['ID'];
};


export type PageMutationQueryMovePageToDraftArgs = {
  id: Scalars['ID'];
};


export type PageMutationQueryPageCreateArgs = {
  page?: InputMaybe<PageInput>;
};


export type PageMutationQueryPageDeleteArgs = {
  id: Scalars['ID'];
};


export type PageMutationQueryPageFavouriteArgs = {
  id: Scalars['ID'];
};


export type PageMutationQueryPageMoveToDraftArgs = {
  id: Scalars['ID'];
};


export type PageMutationQueryPagePublishArgs = {
  id: Scalars['ID'];
};


export type PageMutationQueryPageUnfavouriteArgs = {
  id: Scalars['ID'];
};


export type PageMutationQueryPageUpdateArgs = {
  id: Scalars['ID'];
  page?: InputMaybe<PageInput>;
};


export type PageMutationQueryPublishPageArgs = {
  id: Scalars['ID'];
};


export type PageMutationQueryUnfavouritePageArgs = {
  id: Scalars['ID'];
};


export type PageMutationQueryUpdatePageArgs = {
  id: Scalars['ID'];
  page?: InputMaybe<PageInput>;
};

export type PagePermissionType = {
  __typename?: 'PagePermissionType';
  can_delete?: Maybe<Scalars['Boolean']>;
  can_move_to_draft?: Maybe<Scalars['Boolean']>;
  can_publish?: Maybe<Scalars['Boolean']>;
  can_update?: Maybe<Scalars['Boolean']>;
};

export type PageQuery = {
  getPage?: Maybe<PageType>;
  pages?: Maybe<PageList>;
};


export type PageQueryGetPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type PageQueryPagesArgs = {
  filters?: InputMaybe<PageFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export enum PageSortOption {
  CreatedAt = 'created_at',
  Title = 'title',
  UpdatedAt = 'updated_at'
}

export type PageType = {
  __typename?: 'PageType';
  categories?: Maybe<Array<Maybe<ConstantMap>>>;
  category?: Maybe<Constant>;
  comments?: Maybe<CommentConnection>;
  created_at?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<Person>;
  date_deleted?: Maybe<Scalars['DateTime']>;
  date_published?: Maybe<Scalars['DateTime']>;
  deleted_by?: Maybe<Person>;
  emoji?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  /** Page favourited? */
  is_favourited?: Maybe<Scalars['Boolean']>;
  is_personal?: Maybe<Scalars['Boolean']>;
  office?: Maybe<Office>;
  page_components?: Maybe<PageComponentTypeConnection>;
  /** permissions */
  permissions?: Maybe<PagePermissionType>;
  published_by?: Maybe<Person>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type PageTypeCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PageTypePage_ComponentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  status: Scalars['String'];
};

export type Pagination = {
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
};

export type Paging = {
  __typename?: 'Paging';
  current_page?: Maybe<Scalars['Int']>;
  total_items?: Maybe<Scalars['Int']>;
  total_pages?: Maybe<Scalars['Int']>;
};

export type PartnerSignup = {
  __typename?: 'PartnerSignup';
  contact_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  organisation_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type PartnerSignupInput = {
  contact_name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  organisation_name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

export type PartnerSignupMutationQuery = {
  /** Create a partners signup. */
  partnerSignupCreate?: Maybe<PartnerSignup>;
};


export type PartnerSignupMutationQueryPartnerSignupCreateArgs = {
  partners_signup?: InputMaybe<PartnerSignupInput>;
};

export enum PartnerTypes {
  Global = 'global',
  Regional = 'regional'
}

export type PeopleAutocompleteQuery = {
  peopleAutocomplete?: Maybe<Array<Maybe<Person>>>;
  peopleAutocompleteActive?: Maybe<Array<Maybe<Person>>>;
  peopleAutocompleteColleagues?: Maybe<Array<Maybe<Person>>>;
  peopleAutocompleteEmployees?: Maybe<Array<Maybe<Person>>>;
};


export type PeopleAutocompleteQueryPeopleAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};


export type PeopleAutocompleteQueryPeopleAutocompleteActiveArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};


export type PeopleAutocompleteQueryPeopleAutocompleteColleaguesArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};


export type PeopleAutocompleteQueryPeopleAutocompleteEmployeesArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};

export type PeopleFilter = {
  age?: InputMaybe<RangeInput>;
  background_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  campaign_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  committee_scope?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contacted_at?: InputMaybe<DateInput>;
  contacted_by?: InputMaybe<Scalars['Int']>;
  current_committee?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  duration?: InputMaybe<RangeInput>;
  earliest_start_date?: InputMaybe<DateInput>;
  employee_created_via?: InputMaybe<Scalars['String']>;
  follow_ups?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  followed_up?: InputMaybe<Scalars['Boolean']>;
  followed_up_at?: InputMaybe<DateInput>;
  gender?: InputMaybe<Scalars['String']>;
  graduation_date?: InputMaybe<DateInput>;
  has_managers?: InputMaybe<Scalars['Boolean']>;
  has_opportunity_applications?: InputMaybe<Scalars['Boolean']>;
  home_committee?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  interviewed?: InputMaybe<Scalars['Boolean']>;
  interviewed_by?: InputMaybe<Scalars['Int']>;
  invitation_accepted_at?: InputMaybe<DateInput>;
  is_aiesecer?: InputMaybe<Scalars['Boolean']>;
  is_interviewed?: InputMaybe<Scalars['Boolean']>;
  is_ixp?: InputMaybe<Scalars['Boolean']>;
  is_pop_user?: InputMaybe<Scalars['Boolean']>;
  language_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  last_interaction?: InputMaybe<DateInput>;
  latest_end_date?: InputMaybe<DateInput>;
  lc_alignment_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  managers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  mcs?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  name?: InputMaybe<Scalars['String']>;
  nationalities?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  organisation_type?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  pop_enabled?: InputMaybe<Scalars['Boolean']>;
  programmes?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  q?: InputMaybe<Scalars['String']>;
  referral_type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  registered?: InputMaybe<DateInput>;
  selected_programmes?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  skill_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sort?: InputMaybe<PeopleSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  status?: InputMaybe<Scalars['String']>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  study_levels?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum PeopleSortOption {
  Aiesecer = 'aiesecer',
  Application = 'application',
  ContactedAt = 'contacted_at',
  ContactedByName = 'contacted_by_name',
  CreatedAt = 'created_at',
  Dob = 'dob',
  FollowUpName = 'follow_up_name',
  FollowedUpAt = 'followed_up_at',
  FullName = 'full_name',
  Gender = 'gender',
  HomeLcName = 'home_lc_name',
  HomeMcName = 'home_mc_name',
  Interviewed = 'interviewed',
  InterviewedAt = 'interviewed_at',
  LastActiveAt = 'last_active_at',
  LcAlignmentName = 'lc_alignment_name',
  ProfessionalExperienceInYears = 'professional_experience_in_years',
  ReferralType = 'referral_type',
  SelectedProgrammes = 'selected_programmes',
  Status = 'status',
  UpdatedAt = 'updated_at'
}

export type Person = {
  __typename?: 'Person';
  academic_experiences?: Maybe<Array<Maybe<PreviousExperience>>>;
  accepted?: Maybe<Scalars['Boolean']>;
  accepted_count?: Maybe<Scalars['Int']>;
  accepted_reason?: Maybe<Scalars['String']>;
  account_manager?: Maybe<Scalars['String']>;
  active_favourite_events?: Maybe<Array<Maybe<Event>>>;
  active_favourite_opportunities?: Maybe<Array<Maybe<Opportunity>>>;
  address_detail?: Maybe<AddressInfo>;
  aiesec_email?: Maybe<Scalars['String']>;
  axp_settings?: Maybe<Scalars['JSON']>;
  branch_employees?: Maybe<BranchEmployeeConnection>;
  campaign?: Maybe<Campaign>;
  city_id?: Maybe<Scalars['Int']>;
  client_datas?: Maybe<ClientDataConnection>;
  comments?: Maybe<CommentConnection>;
  contact_detail?: Maybe<ContactInfo>;
  contacted_at?: Maybe<Scalars['DateTime']>;
  contacted_by?: Maybe<Person>;
  conversations?: Maybe<ConversationConnection>;
  /** @deprecated Removed. Use contact_detail field */
  country_code?: Maybe<Scalars['String']>;
  cover_photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<Person>;
  current_experiences?: Maybe<Array<Maybe<OpportunityApplication>>>;
  current_office?: Maybe<Office>;
  cv?: Maybe<Attachment>;
  cv_url?: Maybe<Scalars['String']>;
  cvs?: Maybe<Array<Maybe<Cv>>>;
  deleted_branch_employees?: Maybe<BranchEmployeeConnection>;
  dob?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  employee_created_via?: Maybe<Scalars['String']>;
  employee_details?: Maybe<EmployeeDetailsType>;
  expa_settings?: Maybe<ExpaSettings>;
  expired_favourite_events?: Maybe<Array<Maybe<Event>>>;
  expired_favourite_opportunities?: Maybe<Array<Maybe<Opportunity>>>;
  first_name?: Maybe<Scalars['String']>;
  follow_up?: Maybe<Constant>;
  followed_up_at?: Maybe<Scalars['DateTime']>;
  followed_up_by?: Maybe<Person>;
  full_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  has_opportunity_applications?: Maybe<Scalars['Boolean']>;
  home_lc?: Maybe<Office>;
  /** home_mc */
  home_mc?: Maybe<Office>;
  id: Scalars['ID'];
  interviewed?: Maybe<Scalars['Boolean']>;
  introduction?: Maybe<Scalars['String']>;
  invitation_accepted_at?: Maybe<Scalars['DateTime']>;
  is_ai_member?: Maybe<Scalars['Boolean']>;
  is_aiesecer?: Maybe<Scalars['Boolean']>;
  is_pop_user?: Maybe<Scalars['Boolean']>;
  is_super_user?: Maybe<Scalars['Boolean']>;
  is_watchlisted?: Maybe<Scalars['Boolean']>;
  last_active_at?: Maybe<Scalars['DateTime']>;
  last_name?: Maybe<Scalars['String']>;
  latest_academic?: Maybe<PreviousExperience>;
  latest_academic_experience_backgrounds?: Maybe<Array<Maybe<Constant>>>;
  latest_academic_level?: Maybe<Constant>;
  latest_graduation_date?: Maybe<Scalars['DateTime']>;
  lc_alignment?: Maybe<LcAlignment>;
  linkedin_url?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  managed_branches?: Maybe<Array<Maybe<Branch>>>;
  managed_companies?: Maybe<Array<Maybe<Organisation>>>;
  managed_opportunities?: Maybe<OpportunityConnection>;
  managed_opportunities_count?: Maybe<Scalars['Int']>;
  managed_sub_branch_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  managers?: Maybe<Array<Maybe<Person>>>;
  member_positions?: Maybe<Array<MemberPosition>>;
  meta?: Maybe<PersonMetaType>;
  middle_names?: Maybe<Scalars['String']>;
  nationalities_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  notification_settings?: Maybe<Scalars['JSON']>;
  nps_score?: Maybe<Scalars['String']>;
  opportunity_applications?: Maybe<OpportunityApplicationConnection>;
  opportunity_applications_count?: Maybe<Scalars['Int']>;
  /** organisation type */
  organisation_type?: Maybe<Constant>;
  password?: Maybe<Scalars['String']>;
  payments?: Maybe<Array<Maybe<Payment>>>;
  percentage_of_fulfillment?: Maybe<Scalars['Float']>;
  /** permissions */
  permissions?: Maybe<PersonPermissionType>;
  person_profile?: Maybe<PersonProfile>;
  /** @deprecated Removed. Use contact_detail field */
  phone?: Maybe<Scalars['String']>;
  positions?: Maybe<Array<Maybe<Position>>>;
  professional_experience_in_years?: Maybe<Scalars['Int']>;
  professional_experiences?: Maybe<Array<Maybe<ProfessionalExperience>>>;
  profile_completeness?: Maybe<ProfileCompleteness>;
  profile_photo?: Maybe<Scalars['String']>;
  programme_fees?: Maybe<Array<Maybe<ProgrammeFee>>>;
  programmes?: Maybe<Array<Maybe<Programme>>>;
  recommended_incoming_programme?: Maybe<Scalars['Int']>;
  referral_type?: Maybe<Scalars['String']>;
  rejected_count?: Maybe<Scalars['Int']>;
  required_backgrounds_percentage?: Maybe<Scalars['Float']>;
  required_languages_percentage?: Maybe<Scalars['Float']>;
  required_skills_percentage?: Maybe<Scalars['Float']>;
  saved_filters?: Maybe<SavedFilterConnection>;
  secure_identity?: Maybe<Scalars['String']>;
  secure_identity_email?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  status_string?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  support_conversation?: Maybe<Conversation>;
  tag_lists?: Maybe<Array<Maybe<TagList>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
  todo_type?: Maybe<TodoType>;
  top_languages?: Maybe<Array<Maybe<ConstantMap>>>;
  updated_at?: Maybe<Scalars['DateTime']>;
  utm_campaign?: Maybe<Scalars['String']>;
  utm_content?: Maybe<Scalars['String']>;
  utm_medium?: Maybe<Scalars['String']>;
  utm_source?: Maybe<Scalars['String']>;
  utm_term?: Maybe<Scalars['String']>;
  watchlist_for_opportunity?: Maybe<OpportunityPotentialCandidateType>;
};


export type PersonBranch_EmployeesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PersonClient_DatasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PersonCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PersonConversationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  conversation_type?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type PersonCover_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars['Boolean']>;
  cdn_region?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};


export type PersonDeleted_Branch_EmployeesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PersonIs_WatchlistedArgs = {
  opportunity_id?: InputMaybe<Scalars['Int']>;
};


export type PersonManaged_OpportunitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PersonOpportunity_ApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PersonProfile_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars['Boolean']>;
  cdn_region?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};


export type PersonRequired_Backgrounds_PercentageArgs = {
  opportunity_id?: InputMaybe<Scalars['Int']>;
};


export type PersonRequired_Languages_PercentageArgs = {
  opportunity_id?: InputMaybe<Scalars['Int']>;
};


export type PersonRequired_Skills_PercentageArgs = {
  opportunity_id?: InputMaybe<Scalars['Int']>;
};


export type PersonSaved_FiltersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
};


export type PersonTop_LanguagesArgs = {
  amount?: InputMaybe<Scalars['Int']>;
};

export type PersonAcademicInput = {
  backgrounds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  country?: InputMaybe<Scalars['String']>;
  country_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  experience_id?: InputMaybe<Scalars['Int']>;
  organisation_name?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  study_level?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Union when expecting Person or Applications */
export type PersonApplicationUnion = Branch | BranchEmployee | Opportunity | OpportunityApplication | Person;

/** The connection type for Person. */
export type PersonConnection = {
  __typename?: 'PersonConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Person>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type PersonEdge = {
  __typename?: 'PersonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Person>;
};

/** An input object representing arguments for a Person */
export type PersonInput = {
  account_manager_id?: InputMaybe<Scalars['ID']>;
  address_detail_attributes?: InputMaybe<AddressInput>;
  aiesec_email?: InputMaybe<Scalars['String']>;
  axp_settings?: InputMaybe<AxpSettingsInput>;
  city_id?: InputMaybe<Scalars['ID']>;
  contact_detail_attributes?: InputMaybe<ContactInput>;
  /** The base64 encoded version of the cover image to upload. */
  cover_photo?: InputMaybe<ImageInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  cv?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['Date']>;
  expa_registered_device_id?: InputMaybe<Scalars['String']>;
  expa_settings?: InputMaybe<ExpaSettingsInput>;
  first_name?: InputMaybe<Scalars['String']>;
  follow_up_id?: InputMaybe<Scalars['ID']>;
  gender?: InputMaybe<Scalars['String']>;
  has_completed_onboarding?: InputMaybe<Scalars['Boolean']>;
  home_lc_id?: InputMaybe<Scalars['ID']>;
  introduction?: InputMaybe<Scalars['String']>;
  is_pop_user?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  linkedin_url?: InputMaybe<Scalars['String']>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  meta?: InputMaybe<PersonMetaInput>;
  middle_names?: InputMaybe<Scalars['String']>;
  needs_invite?: InputMaybe<Scalars['Boolean']>;
  person_profile_attributes?: InputMaybe<ProfileInput>;
  /** The base64 encoded version of the profile photo to upload. */
  profile_photo?: InputMaybe<ImageInput>;
  referral_type?: InputMaybe<Scalars['String']>;
  registered_device_id?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type PersonList = {
  __typename?: 'PersonList';
  data?: Maybe<Array<Maybe<Person>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type PersonMetaInput = {
  allow_email_communication?: InputMaybe<Scalars['String']>;
  allow_on_pop?: InputMaybe<Scalars['String']>;
  allow_phone_communication?: InputMaybe<Scalars['String']>;
  opt_out_of_business_intelligence?: InputMaybe<Scalars['String']>;
  opt_out_of_push_notification?: InputMaybe<Scalars['String']>;
  opt_out_of_statistical_data?: InputMaybe<Scalars['String']>;
};

/** Person MetaType records */
export type PersonMetaType = {
  __typename?: 'PersonMetaType';
  allow_email_communication?: Maybe<Scalars['String']>;
  allow_on_pop?: Maybe<Scalars['String']>;
  allow_phone_communication?: Maybe<Scalars['String']>;
  created_via?: Maybe<Scalars['String']>;
  opt_out_of_business_intelligence?: Maybe<Scalars['String']>;
  opt_out_of_push_notification?: Maybe<Scalars['String']>;
  opt_out_of_statistical_data?: Maybe<Scalars['String']>;
};

export type PersonMutationQuery = {
  /** Archive Person */
  archivePerson?: Maybe<Person>;
  /** update followups for the given ids */
  bulkAssignManagersForPeople?: Maybe<Array<Maybe<Person>>>;
  /** update followups for the given ids */
  bulkFollowup?: Maybe<Array<Maybe<Person>>>;
  /** update followups for the given ids */
  bulkTagUpdateForPeople?: Maybe<Array<Maybe<Person>>>;
  /** update followups for the given ids */
  bulkUnassignManagersForPeople?: Maybe<Array<Maybe<Person>>>;
  /** Create Person */
  createPerson?: Maybe<Person>;
  createPersonAcademicExperience?: Maybe<PreviousExperience>;
  createPersonProfessionalExperience?: Maybe<ProfessionalExperience>;
  deleteAcademicExperienceShow?: Maybe<Person>;
  deleteProfessionalExperience?: Maybe<Person>;
  generateCv?: Maybe<Person>;
  /** Generate email */
  generateEmail?: Maybe<Person>;
  interviewPerson?: Maybe<Person>;
  /** Update Person */
  updatePerson?: Maybe<Person>;
  updatePersonAcademicExperience?: Maybe<PreviousExperience>;
  updatePersonProfessionalExperience?: Maybe<ProfessionalExperience>;
};


export type PersonMutationQueryArchivePersonArgs = {
  id: Scalars['ID'];
};


export type PersonMutationQueryBulkAssignManagersForPeopleArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  person_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type PersonMutationQueryBulkFollowupArgs = {
  follow_up_id: Scalars['Int'];
  person_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type PersonMutationQueryBulkTagUpdateForPeopleArgs = {
  person_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type PersonMutationQueryBulkUnassignManagersForPeopleArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  person_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type PersonMutationQueryCreatePersonArgs = {
  person?: InputMaybe<PersonInput>;
};


export type PersonMutationQueryCreatePersonAcademicExperienceArgs = {
  academic_experience?: InputMaybe<PersonAcademicInput>;
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonMutationQueryCreatePersonProfessionalExperienceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  professional_experience?: InputMaybe<PersonProfessionalInput>;
};


export type PersonMutationQueryDeleteAcademicExperienceShowArgs = {
  academic_exp_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonMutationQueryDeleteProfessionalExperienceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  professional_exp_id?: InputMaybe<Scalars['ID']>;
};


export type PersonMutationQueryGenerateCvArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonMutationQueryGenerateEmailArgs = {
  id: Scalars['ID'];
  person?: InputMaybe<PersonInput>;
};


export type PersonMutationQueryInterviewPersonArgs = {
  accepted?: InputMaybe<Scalars['Boolean']>;
  accepted_reason?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  interviewed?: InputMaybe<Scalars['Boolean']>;
};


export type PersonMutationQueryUpdatePersonArgs = {
  id: Scalars['ID'];
  person?: InputMaybe<PersonInput>;
};


export type PersonMutationQueryUpdatePersonAcademicExperienceArgs = {
  academic_exp_id?: InputMaybe<Scalars['ID']>;
  academic_experience?: InputMaybe<PersonAcademicInput>;
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonMutationQueryUpdatePersonProfessionalExperienceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  professional_exp_id?: InputMaybe<Scalars['ID']>;
  professional_experience?: InputMaybe<PersonProfessionalInput>;
};

export type PersonPermissionType = {
  __typename?: 'PersonPermissionType';
  can_anonymize?: Maybe<Scalars['Boolean']>;
  can_apply?: Maybe<Scalars['Boolean']>;
  can_change_lc?: Maybe<Scalars['Boolean']>;
  can_edit_managers?: Maybe<Scalars['Boolean']>;
  can_generate_aiesec_email?: Maybe<Scalars['Boolean']>;
  can_interview?: Maybe<Scalars['Boolean']>;
  can_mark_apply_paid?: Maybe<Scalars['Boolean']>;
  can_mark_gep?: Maybe<Scalars['Boolean']>;
  can_take_ef_test?: Maybe<Scalars['Boolean']>;
  can_update?: Maybe<Scalars['Boolean']>;
  can_update_lc?: Maybe<Scalars['Boolean']>;
  can_view_applications?: Maybe<Scalars['Boolean']>;
  can_view_finance_submissions?: Maybe<Scalars['Boolean']>;
  has_completed_platform_nps?: Maybe<Scalars['Boolean']>;
  has_paid_for_apply?: Maybe<Scalars['Boolean']>;
  is_manager?: Maybe<Scalars['Boolean']>;
  should_pay_at_apply?: Maybe<Scalars['Boolean']>;
};

export type PersonProfessionalInput = {
  country?: InputMaybe<Scalars['String']>;
  country_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  industries?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  organisation_name?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  work_fields?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  work_type?: InputMaybe<Scalars['Int']>;
};

export type PersonProfile = {
  __typename?: 'PersonProfile';
  backgrounds?: Maybe<Array<Maybe<Constant>>>;
  duration_max?: Maybe<Scalars['Int']>;
  duration_min?: Maybe<Scalars['Int']>;
  earliest_start_date?: Maybe<Scalars['DateTime']>;
  ef_test_details?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  interested_in?: Maybe<Scalars['String']>;
  /** Issue ids */
  issues?: Maybe<Array<Maybe<Scalars['Int']>>>;
  languages?: Maybe<Array<Maybe<ConstantMap>>>;
  latest_end_date?: Maybe<Scalars['DateTime']>;
  nationalities?: Maybe<Array<Maybe<Constant>>>;
  /** Next EF test details date */
  next_ef_test_date?: Maybe<Scalars['DateTime']>;
  preferred_locations?: Maybe<Array<Maybe<Scalars['Int']>>>;
  preferred_organisations?: Maybe<Array<Maybe<Scalars['Int']>>>;
  selected_programmes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  skills?: Maybe<Array<Maybe<ConstantMap>>>;
  visible_profile?: Maybe<Scalars['Boolean']>;
  work_fields?: Maybe<Array<Maybe<Constant>>>;
};

export type PersonQuery = {
  /** @deprecated Use "people" field instead. */
  allPeople?: Maybe<PersonList>;
  /** @deprecated Use "downloadPeople" field instead. */
  allPeopleDownload?: Maybe<Scalars['String']>;
  checkPersonPresent?: Maybe<Person>;
  colleagueAutocomplete?: Maybe<Array<Maybe<Person>>>;
  createPersonComment?: Maybe<Comment>;
  createPersonPayment?: Maybe<Payment>;
  deletePersonComment?: Maybe<Person>;
  deletePersonCv?: Maybe<Person>;
  deletePersonPayment?: Maybe<Person>;
  downloadPeople?: Maybe<Scalars['String']>;
  featuredCandidates?: Maybe<Array<Maybe<Person>>>;
  generateEmail?: Maybe<GenerateEmail>;
  /** @deprecated Use "person" field instead. */
  getPerson?: Maybe<Person>;
  /** @deprecated Use "people" field with "my" boolean argument as true instead. */
  myPeople?: Maybe<PersonList>;
  people?: Maybe<PersonList>;
  peopleCount?: Maybe<CounterData>;
  person?: Maybe<Person>;
  personApplicationPagination?: Maybe<OpportunityApplicationConnection>;
  personApplications?: Maybe<OpportunityApplicationList>;
  personComments?: Maybe<Array<Maybe<Comment>>>;
  personEmployeeOf?: Maybe<Array<Maybe<Branch>>>;
  personInterviewed?: Maybe<Person>;
  personLdmResponse?: Maybe<Array<Maybe<LdmResponse>>>;
  /** @deprecated Use "createPersonPayment" field instead. */
  personPaymentCreate?: Maybe<Payment>;
  /** @deprecated Use "deletePersonPayment" field instead. */
  personPaymentDelete?: Maybe<Person>;
  personSuggestion?: Maybe<Person>;
  resolvePersonComment?: Maybe<Comment>;
  updatePersonComment?: Maybe<Comment>;
  viewPersonComment?: Maybe<Comment>;
};


export type PersonQueryAllPeopleArgs = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars['String']>;
  opportunity_id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  with?: InputMaybe<Scalars['String']>;
};


export type PersonQueryAllPeopleDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars['String']>;
  opportunity_id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  with?: InputMaybe<Scalars['String']>;
};


export type PersonQueryCheckPersonPresentArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type PersonQueryColleagueAutocompleteArgs = {
  filter?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};


export type PersonQueryCreatePersonCommentArgs = {
  comment?: InputMaybe<Scalars['String']>;
  field_for?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryCreatePersonPaymentArgs = {
  id: Scalars['ID'];
};


export type PersonQueryDeletePersonCommentArgs = {
  comment_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryDeletePersonCvArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryDeletePersonPaymentArgs = {
  id: Scalars['ID'];
};


export type PersonQueryDownloadPeopleArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars['String']>;
  opportunity_id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  with?: InputMaybe<Scalars['String']>;
};


export type PersonQueryFeaturedCandidatesArgs = {
  size?: InputMaybe<Scalars['Int']>;
};


export type PersonQueryGenerateEmailArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryGetPersonArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryMyPeopleArgs = {
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type PersonQueryPeopleArgs = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  filters?: InputMaybe<PeopleFilter>;
  my?: InputMaybe<Scalars['Boolean']>;
  only?: InputMaybe<Scalars['String']>;
  opportunity_id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  with?: InputMaybe<Scalars['String']>;
};


export type PersonQueryPersonArgs = {
  id: Scalars['ID'];
};


export type PersonQueryPersonApplicationPaginationArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Scalars['String']>;
};


export type PersonQueryPersonApplicationsArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  id?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type PersonQueryPersonCommentsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryPersonEmployeeOfArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryPersonInterviewedArgs = {
  accepted?: InputMaybe<Scalars['Boolean']>;
  accepted_reason?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  interviewed?: InputMaybe<Scalars['Boolean']>;
};


export type PersonQueryPersonLdmResponseArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryPersonPaymentCreateArgs = {
  action_for?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryPersonPaymentDeleteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryPersonSuggestionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryResolvePersonCommentArgs = {
  comment_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryUpdatePersonCommentArgs = {
  comment?: InputMaybe<Scalars['String']>;
  comment_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type PersonQueryViewPersonCommentArgs = {
  comment_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Picture = {
  __typename?: 'Picture';
  file?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  picturable_id?: Maybe<Scalars['ID']>;
  picturable_type?: Maybe<Scalars['String']>;
};


export type PictureFileArgs = {
  size?: InputMaybe<Scalars['String']>;
};

export type PictureInput = {
  file?: InputMaybe<Scalars['Upload']>;
};

export type Plan = {
  __typename?: 'Plan';
  end_month?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  lc_deadline?: Maybe<Scalars['Date']>;
  mc_deadline?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  start_month?: Maybe<Scalars['Date']>;
};


export type PlanLc_DeadlineArgs = {
  office_id: Scalars['ID'];
};

export type PlanInput = {
  end_month: Scalars['Date'];
  start_month: Scalars['Date'];
};

export type PlanMutationQuery = {
  planCreate?: Maybe<Plan>;
  planSetDeadline?: Maybe<Plan>;
  planUpdate?: Maybe<Plan>;
};


export type PlanMutationQueryPlanCreateArgs = {
  plan: PlanInput;
};


export type PlanMutationQueryPlanSetDeadlineArgs = {
  deadline: Scalars['Date'];
  office_id: Scalars['ID'];
  plan_id: Scalars['ID'];
};


export type PlanMutationQueryPlanUpdateArgs = {
  id: Scalars['ID'];
  plan?: InputMaybe<PlanInput>;
};

export type PlanQuery = {
  plans?: Maybe<Array<Maybe<Plan>>>;
};

export type PlatformNpsInput = {
  answer?: InputMaybe<Scalars['String']>;
  question_id?: InputMaybe<Scalars['Int']>;
};

export type PlatformNpsResponseMutationQueryType = {
  createPlatformNps?: Maybe<Survey>;
};


export type PlatformNpsResponseMutationQueryTypeCreatePlatformNpsArgs = {
  path?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<Array<InputMaybe<PlatformNpsInput>>>;
};

export type PlatformNpsResponseQueryType = {
  getPlatformNpsQuestions?: Maybe<Survey>;
};

export type Position = {
  __typename?: 'Position';
  created_at?: Maybe<Scalars['DateTime']>;
  creator_id?: Maybe<Scalars['ID']>;
  deleted_at?: Maybe<Scalars['DateTime']>;
  email_sent_at?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['Date']>;
  function?: Maybe<Constant>;
  id: Scalars['ID'];
  lda_links?: Maybe<Scalars['JSON']>;
  ldm_report?: Maybe<Scalars['JSON']>;
  membership_lps?: Maybe<SurveyResponse>;
  name?: Maybe<Scalars['String']>;
  office?: Maybe<Office>;
  opportunity_id?: Maybe<Scalars['ID']>;
  parent?: Maybe<Position>;
  person?: Maybe<Person>;
  position_name?: Maybe<Scalars['String']>;
  position_short_name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
  team?: Maybe<Team>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** The connection type for Position. */
export type PositionConnection = {
  __typename?: 'PositionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PositionEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Position>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type PositionEdge = {
  __typename?: 'PositionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Position>;
};

export type PositionInput = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  function_id?: InputMaybe<Scalars['Int']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  person_id?: InputMaybe<Scalars['Int']>;
  position_name?: InputMaybe<Scalars['String']>;
  position_short_name?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  team_id: Scalars['Int'];
};

export type PositionMutationQuery = {
  /** Create position for the team */
  createTeamPosition?: Maybe<Position>;
  deletePosition?: Maybe<Position>;
  /** Update position */
  updateTeamPosition?: Maybe<Position>;
};


export type PositionMutationQueryCreateTeamPositionArgs = {
  position?: InputMaybe<PositionInput>;
};


export type PositionMutationQueryDeletePositionArgs = {
  id: Scalars['ID'];
  position?: InputMaybe<PositionInput>;
};


export type PositionMutationQueryUpdateTeamPositionArgs = {
  id: Scalars['ID'];
  position?: InputMaybe<PositionInput>;
};

export type PositionQuery = {
  allPosition?: Maybe<Array<Maybe<Position>>>;
  getPosition?: Maybe<Position>;
};


export type PositionQueryAllPositionArgs = {
  team_id?: InputMaybe<Scalars['ID']>;
};


export type PositionQueryGetPositionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PreviousExperience = {
  __typename?: 'PreviousExperience';
  backgrounds?: Maybe<Array<Maybe<Constant>>>;
  country?: Maybe<Scalars['String']>;
  country_details?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['DateTime']>;
  exp_type?: Maybe<Scalars['String']>;
  experience_level?: Maybe<Constant>;
  id: Scalars['ID'];
  organisation_name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  /** @deprecated Removed. Use experience_level field */
  study_level?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProfessionalExperience = {
  __typename?: 'ProfessionalExperience';
  country?: Maybe<Scalars['String']>;
  country_details?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['DateTime']>;
  exp_type?: Maybe<Scalars['String']>;
  experience_level?: Maybe<Constant>;
  id: Scalars['ID'];
  industries?: Maybe<Array<Maybe<Constant>>>;
  organisation_name?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<Constant>>>;
  start_date?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  work_fields?: Maybe<Array<Maybe<Constant>>>;
  work_type?: Maybe<Scalars['String']>;
};

export type ProfileCompleteness = {
  __typename?: 'ProfileCompleteness';
  ge?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gv?: Maybe<Scalars['Boolean']>;
};

export type ProfileInput = {
  additional_info?: InputMaybe<Scalars['JSON']>;
  backgrounds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  duration_max?: InputMaybe<Scalars['Int']>;
  duration_min?: InputMaybe<Scalars['Int']>;
  earliest_start_date?: InputMaybe<Scalars['DateTime']>;
  interested_in?: InputMaybe<Scalars['String']>;
  issues?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  languages?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  latest_end_date?: InputMaybe<Scalars['DateTime']>;
  nationalities?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  preferred_locations?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  preferred_organisations?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  selected_programmes?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  skills?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  visible_profile?: InputMaybe<Scalars['Boolean']>;
  work_fields?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Programme = {
  __typename?: 'Programme';
  id?: Maybe<Scalars['ID']>;
  short_name?: Maybe<Scalars['String']>;
  short_name_display?: Maybe<Scalars['String']>;
};

export type ProgrammeFee = {
  __typename?: 'ProgrammeFee';
  contract?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  enabled?: Maybe<Scalars['Boolean']>;
  fee?: Maybe<Scalars['Int']>;
  fee_for?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lc_id?: Maybe<Scalars['ID']>;
  mc_id?: Maybe<Scalars['ID']>;
  opportunity_duration_type?: Maybe<OpportunityDurationType>;
  programme?: Maybe<Programme>;
  programme_fee_max?: Maybe<Scalars['Int']>;
  programme_fee_min?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type ProgrammeFeeBasic = {
  __typename?: 'ProgrammeFeeBasic';
  fee_for?: Maybe<Scalars['String']>;
  programme?: Maybe<ProgrammeId>;
};

/** The connection type for ProgrammeFeeBasic. */
export type ProgrammeFeeBasicConnection = {
  __typename?: 'ProgrammeFeeBasicConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProgrammeFeeBasicEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ProgrammeFeeBasic>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type ProgrammeFeeBasicEdge = {
  __typename?: 'ProgrammeFeeBasicEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ProgrammeFeeBasic>;
};

/** The connection type for ProgrammeFee. */
export type ProgrammeFeeConnection = {
  __typename?: 'ProgrammeFeeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProgrammeFeeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ProgrammeFee>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type ProgrammeFeeEdge = {
  __typename?: 'ProgrammeFeeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ProgrammeFee>;
};

export type ProgrammeFeeInput = {
  contract?: InputMaybe<Scalars['String']>;
  currency_id?: InputMaybe<Scalars['Int']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  fee_cents?: InputMaybe<Scalars['Int']>;
};

export type ProgrammeFeeMutationQuery = {
  addContractProgrammeFee?: Maybe<ProgrammeFee>;
  incomingProgrammeFeeUpdate?: Maybe<ProgrammeFee>;
  /** Update programme fee */
  updateProgrammeFee?: Maybe<ProgrammeFee>;
};


export type ProgrammeFeeMutationQueryAddContractProgrammeFeeArgs = {
  id: Scalars['ID'];
  programme_fee?: InputMaybe<ProgrammeFeeInput>;
};


export type ProgrammeFeeMutationQueryIncomingProgrammeFeeUpdateArgs = {
  id: Scalars['ID'];
  programme_fee?: InputMaybe<IncomingProgrammeFeeInput>;
};


export type ProgrammeFeeMutationQueryUpdateProgrammeFeeArgs = {
  id: Scalars['ID'];
  programme_fee?: InputMaybe<ProgrammeFeeInput>;
};

export type ProgrammeFeeQueryType = {
  allProgrammeFee?: Maybe<Array<Maybe<ProgrammeFee>>>;
  getProgrammeFee?: Maybe<ProgrammeFee>;
};


export type ProgrammeFeeQueryTypeAllProgrammeFeeArgs = {
  lc?: InputMaybe<Scalars['ID']>;
  mc?: InputMaybe<Scalars['ID']>;
};


export type ProgrammeFeeQueryTypeGetProgrammeFeeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ProgrammeId = {
  __typename?: 'ProgrammeId';
  id?: Maybe<Scalars['ID']>;
};

export type ProgrammeManager = {
  __typename?: 'ProgrammeManager';
  id: Scalars['ID'];
  office?: Maybe<Office>;
  person?: Maybe<Person>;
  programme?: Maybe<Programme>;
};

export type ProgrammeManagerMutationQuery = {
  assignProgrammeManager?: Maybe<ProgrammeManager>;
  removeProgrammeManager?: Maybe<ProgrammeManager>;
};


export type ProgrammeManagerMutationQueryAssignProgrammeManagerArgs = {
  id: Scalars['ID'];
  person_id?: InputMaybe<Scalars['Int']>;
};


export type ProgrammeManagerMutationQueryRemoveProgrammeManagerArgs = {
  id: Scalars['ID'];
};

export type ProjectInput = {
  /** The base64 encoded version of the cover image to upload. */
  cover_photo?: InputMaybe<ImageInput>;
  description?: InputMaybe<Scalars['String']>;
  is_project_enabled?: InputMaybe<Scalars['Boolean']>;
  /** The base64 encoded version of the profile photo to upload. */
  profile_photo?: InputMaybe<ImageInput>;
  programme_id?: InputMaybe<Scalars['Int']>;
  project_description?: InputMaybe<Scalars['String']>;
  project_name?: InputMaybe<Scalars['String']>;
  sdg_attributes?: InputMaybe<SdgInfoInput>;
};

export type QueryType = AccommodationAssignmentQuery & AccommodationQuery & AttachmentQuery & BranchEmployeeQuery & BranchQuery & CampaignQuery & CityLcQuery & CityQuery & ClientDataQuery & CommentQuery & CommitteeQuery & Constants & ConversationQuery & CurrentPersonQuery & EmployeeLeadQuery & EntityPlanQuery & EventQuery & EventRegistrationQuery & FindLcQuery & GlobalPartnerRequestQuery & Image & InvoiceQuery & LcAlignmentsQueryType & LdaQuery & LdmQuery & List & MailTemplateQueryType & McFeatureQuery & MemberLeadQuery & MemberPositionQuery & NationalPartnerQuery & NotificationsQuery & OpportunityApplicationQuery & OpportunityDurationTypeQuery & OpportunityPotentialCandidateQuery & OpportunityQuery & OrganisationQuery & OrganizationDevelopmentQuery & PageQuery & PeopleAutocompleteQuery & PersonQuery & PlanQuery & PlatformNpsResponseQueryType & PositionQuery & ProgrammeFeeQueryType & ScorecardQuery & StandardsSurveyQuery & SubProducts & SuggestedCountryQuery & SurveyQuery & TagListAutocompleteQuery & TagListQuery & TeamQuery & TermQuery & TestimonialQuery & TimelineQuery & TodoQuery & {
  __typename?: 'QueryType';
  accommodationScheduleList?: Maybe<Array<Maybe<AccommodationAssignment>>>;
  accommodations?: Maybe<AccommodationList>;
  allCity?: Maybe<CityList>;
  /** @deprecated Use "constants" field instead. */
  allConstants?: Maybe<Array<Maybe<Constant>>>;
  allCurrencies: Array<Maybe<Currency>>;
  /** Get all GlobalPartnerRequests */
  allGlobalPartnerRequests?: Maybe<Array<Maybe<GlobalPartnerRequestType>>>;
  allNationalPartners?: Maybe<Array<Maybe<NationalPartnerType>>>;
  /** @deprecated Use "opportunities" field instead. */
  allOpportunity?: Maybe<OpportunityList>;
  allOpportunityApplication?: Maybe<OpportunityApplicationList>;
  allOpportunityApplicationDownload?: Maybe<Scalars['String']>;
  /** @deprecated Use "downloadOpportunities" field instead. */
  allOpportunityDownload?: Maybe<Scalars['String']>;
  /** @deprecated Use "opportunities" field with "is_v2" boolean argument as true instead. */
  allOpportunityV2?: Maybe<OpportunityList>;
  /** @deprecated Use "organisations" field instead. */
  allOrganisation?: Maybe<CompanyList>;
  /** @deprecated Use "organisationDownload" field instead. */
  allOrganisationDownload?: Maybe<Scalars['String']>;
  /** @deprecated Use "people" field instead. */
  allPeople?: Maybe<PersonList>;
  /** @deprecated Use "downloadPeople" field instead. */
  allPeopleDownload?: Maybe<Scalars['String']>;
  allPosition?: Maybe<Array<Maybe<Position>>>;
  allProgrammeFee?: Maybe<Array<Maybe<ProgrammeFee>>>;
  allSdgTargets?: Maybe<Array<Maybe<SdgTarget>>>;
  /** @deprecated Use "suggestedCountries" field instead. */
  allSuggestedCountries?: Maybe<Array<Maybe<SuggestedCountry>>>;
  allSurvey?: Maybe<Array<Maybe<Survey>>>;
  /** @deprecated Use "tagLists" field instead. */
  allTagList?: Maybe<Array<Maybe<TagList>>>;
  applicationCsv?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** List all the interview slots for an opportunity application */
  applicationInterviewSlots?: Maybe<Array<Maybe<InterviewSlot>>>;
  /** List all the offline assessments for an opportunity application */
  applicationOfflineAssessments?: Maybe<Array<Maybe<OfflineAssessment>>>;
  applicationTestimonials?: Maybe<OpportunityApplicationList>;
  assignedApplications?: Maybe<AccommodationAssignmentList>;
  branch?: Maybe<Branch>;
  branchAutocomplete?: Maybe<Array<Maybe<Branch>>>;
  branchContracts?: Maybe<Array<Maybe<Contract>>>;
  /** List all the branch's employees */
  branchEmployees?: Maybe<Array<Maybe<BranchEmployee>>>;
  branches?: Maybe<Array<Maybe<Branch>>>;
  bulkCvDownload?: Maybe<Array<Maybe<OpportunityApplication>>>;
  campaignAutocomplete?: Maybe<Array<Maybe<Campaign>>>;
  /** Check if Member lead exists */
  checkIfMemberLeadExists?: Maybe<Scalars['String']>;
  checkPersonPresent?: Maybe<Person>;
  cityAutocomplete?: Maybe<Array<Maybe<City>>>;
  cityByMc?: Maybe<Array<Maybe<City>>>;
  clientData?: Maybe<ClientData>;
  clientDataByNameAndApplicable?: Maybe<ClientData>;
  /** @deprecated Use "clientData" field instead. */
  clientDataGet?: Maybe<ClientData>;
  /** @deprecated Use "clientDataByNameAndApplicable" field instead. */
  clientDataGetByNameAndApplicable?: Maybe<ClientData>;
  colleagueAutocomplete?: Maybe<Array<Maybe<Person>>>;
  committee?: Maybe<Office>;
  committeeAutocomplete?: Maybe<Array<Maybe<Office>>>;
  committeeBasicDetails?: Maybe<OfficeBasicDetails>;
  committeeTerm?: Maybe<CommitteeTermType>;
  committeeTerms?: Maybe<Array<Maybe<TermDate>>>;
  committeeTermsWithDepartments?: Maybe<Array<Maybe<CommitteeTermType>>>;
  committees?: Maybe<OfficeList>;
  committeesDownload?: Maybe<Scalars['String']>;
  committeesListBasic?: Maybe<OfficeBasicList>;
  constantAutocomplete: Array<Maybe<Constant>>;
  constants: Array<Maybe<Constant>>;
  createPersonComment?: Maybe<Comment>;
  createPersonPayment?: Maybe<Payment>;
  currentPerson?: Maybe<CurrentPerson>;
  currentPersonAttachment?: Maybe<Array<Maybe<Attachment>>>;
  currentPersonComment?: Maybe<Array<Maybe<Comment>>>;
  currentPersonDump?: Maybe<CurrentPerson>;
  currentPersonEfResult?: Maybe<CurrentPerson>;
  currentPersonManagers?: Maybe<Array<Maybe<Person>>>;
  currentPersonProgrammeFees?: Maybe<Array<Maybe<ProgrammeFee>>>;
  currentPersonSavedFilters?: Maybe<Array<Maybe<SavedFilter>>>;
  currentPersonSavedFiltersShow?: Maybe<SavedFilter>;
  deletePersonComment?: Maybe<Person>;
  deletePersonCv?: Maybe<Person>;
  deletePersonPayment?: Maybe<Person>;
  deliverabilityReport?: Maybe<MailTemplateDeliverabilityReport>;
  downloadMemberPositions?: Maybe<Scalars['String']>;
  downloadOpportunities?: Maybe<Scalars['String']>;
  downloadPeople?: Maybe<Scalars['String']>;
  employeeLead?: Maybe<EmployeeLead>;
  /** @deprecated Use "employeeLead" field instead. */
  employeeLeadGet?: Maybe<EmployeeLead>;
  employeeLeads?: Maybe<EmployeeLeadList>;
  entityGoalSetting?: Maybe<Array<Maybe<EntityGoal>>>;
  entityPlans?: Maybe<Array<Maybe<EntityPlan>>>;
  eventGet?: Maybe<Event>;
  eventList?: Maybe<EventList>;
  eventRegistrationGet?: Maybe<EventRegistration>;
  eventRegistrationList?: Maybe<EventRegistrationList>;
  favouriteOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  featuredCandidates?: Maybe<Array<Maybe<Person>>>;
  featuredOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  findLc?: Maybe<Office>;
  /** Get Application flight details */
  flightDetails?: Maybe<OpportunityApplication>;
  generateEmail?: Maybe<GenerateEmail>;
  geoCodedCommittee?: Maybe<OfficeBasicDetails>;
  geoPartners?: Maybe<Array<Maybe<Organisation>>>;
  getAccommodation?: Maybe<Accommodation>;
  getApplication?: Maybe<OpportunityApplication>;
  getAttachment?: Maybe<Attachment>;
  /** @deprecated Use "branch" field instead. */
  getBranch?: Maybe<Branch>;
  getBranchEmployee?: Maybe<BranchEmployee>;
  getCampaign?: Maybe<Campaign>;
  getCity?: Maybe<City>;
  getCityLc?: Maybe<CityLc>;
  getComment?: Maybe<Comment>;
  /** @deprecated Use "committee" field instead. */
  getCommittee?: Maybe<Office>;
  /** @deprecated Use "committeeBasicDetails" field instead. */
  getCommitteeBasicDetails?: Maybe<OfficeBasicDetails>;
  /** @deprecated Use "committeeTerm" field instead. */
  getCommitteeTerm?: Maybe<TermDate>;
  getConversation?: Maybe<Conversation>;
  getImage?: Maybe<ImageType>;
  getInboundEmailApplication?: Maybe<Array<Maybe<InboundEmailType>>>;
  /** Mark as Paid */
  getInvoice?: Maybe<InvoiceType>;
  /** @deprecated Use "lcAlignment" field instead. */
  getLcAlignment?: Maybe<LcAlignment>;
  getMailTemplate?: Maybe<MailTemplate>;
  getNationalPartner?: Maybe<NationalPartnerType>;
  /** @deprecated Use "opportunity" field instead. */
  getOpportunity?: Maybe<Opportunity>;
  /** @deprecated Use "opportunityQuestions" field instead. */
  getOpportunityQuestions?: Maybe<Array<Maybe<OpportunityQuestion>>>;
  /** @deprecated Use "opportunityTestimonials" field instead. */
  getOpportunityTestimonials?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** @deprecated Use "opportunityTranslations" field instead. */
  getOpportunityTranslations?: Maybe<Scalars['JSON']>;
  /** @deprecated Use "organisation" field instead. */
  getOrganisation?: Maybe<Organisation>;
  getPage?: Maybe<PageType>;
  /** @deprecated Use "person" field instead. */
  getPerson?: Maybe<Person>;
  getPlatformNpsQuestions?: Maybe<Survey>;
  getPosition?: Maybe<Position>;
  getProgrammeFee?: Maybe<ProgrammeFee>;
  /** @deprecated Use "suggestedCountry" field instead. */
  getSuggestedCountry?: Maybe<SuggestedCountry>;
  /** @deprecated Use "tagList" field instead. */
  getTagList?: Maybe<TagList>;
  getTeam?: Maybe<Team>;
  getTestimonial?: Maybe<Testimonial>;
  getTimeline?: Maybe<Timeline>;
  getTodo?: Maybe<Todo>;
  getWatchlist?: Maybe<Array<Maybe<Person>>>;
  lcAlignment?: Maybe<LcAlignment>;
  lcAlignments?: Maybe<Array<Maybe<LcAlignment>>>;
  lcAlignmentsList?: Maybe<Array<Maybe<LcAlignment>>>;
  /** Return randomized LDA survey */
  ldaSurvey?: Maybe<LdaResponse>;
  ldmReport?: Maybe<Scalars['JSON']>;
  ldmSurvey?: Maybe<Array<Maybe<SurveyQuestion>>>;
  listNationalPartners?: Maybe<Array<Maybe<Organisation>>>;
  mailTemplates?: Maybe<Array<Maybe<MailTemplate>>>;
  /** List all Features for the geocoded location */
  mcFeatures?: Maybe<Array<Maybe<McFeature>>>;
  mcsAlignments?: Maybe<Array<Maybe<OfficeMcAlignment>>>;
  measureOfImpacts?: Maybe<Array<Maybe<Constant>>>;
  memberLead?: Maybe<MemberLead>;
  /**
   * Check if Member lead exists
   * @deprecated Use "checkIfMemberLeadExists" field instead.
   */
  memberLeadCheckIfExists?: Maybe<Scalars['String']>;
  /** @deprecated Use "memberLead" field instead. */
  memberLeadGet?: Maybe<MemberLead>;
  memberLeads?: Maybe<MemberLeadList>;
  memberPosition?: Maybe<MemberPosition>;
  memberPositions?: Maybe<MemberPositionList>;
  /** @deprecated Use "downloadMemberPosition" field instead. */
  memberPositionsDownload?: Maybe<Scalars['String']>;
  /** @deprecated Use "branches" field with "my" boolean argument as true instead. */
  myBranch?: Maybe<Array<Maybe<Branch>>>;
  /** @deprecated Use "my_committee_autocomplete" boolean argument in "committeeAutocomplete" field instead. */
  myCommitteeAutocomplete?: Maybe<Array<Maybe<Office>>>;
  myOpportunities?: Maybe<OpportunityList>;
  /** @deprecated Use "my" boolean argument in "organisations" field instead. */
  myOrganisation?: Maybe<CompanyList>;
  /** @deprecated Use "people" field with "my" boolean argument as true instead. */
  myPeople?: Maybe<PersonList>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Fetches a list of objects given a list of IDs. */
  nodes: Array<Maybe<Node>>;
  notification?: Maybe<Notification>;
  /** @deprecated Use "notification" field instead. */
  notificationGet?: Maybe<Notification>;
  /** @deprecated Use "notifications" field instead. */
  notificationList?: Maybe<NotificationList>;
  /** List of notifications based on the selected filter value(s) */
  notifications?: Maybe<NotificationList>;
  npsSurvey?: Maybe<Survey>;
  openOpportunity?: Maybe<Array<Maybe<Opportunity>>>;
  opportunities?: Maybe<OpportunityList>;
  opportunity?: Maybe<Opportunity>;
  /** List all the custom statuses for an opportunity */
  opportunityCustomStatuses?: Maybe<Array<Maybe<CustomStatusType>>>;
  opportunityDiversification?: Maybe<Array<Maybe<Office>>>;
  opportunityDurationTypes?: Maybe<Array<Maybe<OpportunityDurationType>>>;
  opportunityQuestions?: Maybe<Array<Maybe<OpportunityQuestion>>>;
  opportunityTestimonials?: Maybe<Array<Maybe<OpportunityApplication>>>;
  opportunityTranslations?: Maybe<Scalars['JSON']>;
  organisation?: Maybe<Organisation>;
  organisationAutocomplete?: Maybe<Array<Maybe<Organisation>>>;
  /** @deprecated Use "my" boolean argument in "organisation_autocomplete" field instead. */
  organisationAutocompleteMy?: Maybe<Array<Maybe<Organisation>>>;
  organisationDownload?: Maybe<Scalars['String']>;
  organisationEmployees?: Maybe<Array<Maybe<BranchEmployee>>>;
  organisations?: Maybe<CompanyList>;
  organizationDevelopmentGet?: Maybe<OrganizationDevelopment>;
  organizationDevelopmentList: Array<Maybe<OrganizationDevelopment>>;
  organizationDevelopmentTargetGet?: Maybe<OrganizationDevelopmentTarget>;
  organizationDevelopmentTargetList?: Maybe<Array<Maybe<OrganizationDevelopmentTarget>>>;
  pages?: Maybe<PageList>;
  /** Get partner standards survey and its reponse */
  partnerStandardsSurvey?: Maybe<StandardsSurvey>;
  people?: Maybe<PersonList>;
  peopleAutocomplete?: Maybe<Array<Maybe<Person>>>;
  peopleAutocompleteActive?: Maybe<Array<Maybe<Person>>>;
  peopleAutocompleteColleagues?: Maybe<Array<Maybe<Person>>>;
  peopleAutocompleteEmployees?: Maybe<Array<Maybe<Person>>>;
  peopleCount?: Maybe<CounterData>;
  person?: Maybe<Person>;
  personApplicationPagination?: Maybe<OpportunityApplicationConnection>;
  personApplications?: Maybe<OpportunityApplicationList>;
  personComments?: Maybe<Array<Maybe<Comment>>>;
  personEmployeeOf?: Maybe<Array<Maybe<Branch>>>;
  personInterviewed?: Maybe<Person>;
  personLdmResponse?: Maybe<Array<Maybe<LdmResponse>>>;
  /** @deprecated Use "createPersonPayment" field instead. */
  personPaymentCreate?: Maybe<Payment>;
  /** @deprecated Use "deletePersonPayment" field instead. */
  personPaymentDelete?: Maybe<Person>;
  personSuggestion?: Maybe<Person>;
  plans?: Maybe<Array<Maybe<Plan>>>;
  projects?: Maybe<OpportunityList>;
  projectsList?: Maybe<Array<Maybe<Opportunity>>>;
  resolvePersonComment?: Maybe<Comment>;
  scorecardGet?: Maybe<Scorecard>;
  sdgGoals: Array<Maybe<Constant>>;
  sdgTargets: Array<Maybe<SdgTarget>>;
  /** @deprecated Use "searchOpportunities" field instead. */
  searchAllOpportunity?: Maybe<OpportunityList>;
  searchOpportunities?: Maybe<OpportunityList>;
  signupQuestions?: Maybe<Office>;
  similarEvents?: Maybe<EventList>;
  similarOpportunities?: Maybe<OpportunityList>;
  /** Get EP standards survey and its reponse */
  standardsSurvey?: Maybe<StandardsSurvey>;
  stats2?: Maybe<Scalars['JSON']>;
  subProducts?: Maybe<Array<Maybe<SubProduct>>>;
  suggestedCountries?: Maybe<Array<Maybe<SuggestedCountry>>>;
  suggestedCountry?: Maybe<SuggestedCountry>;
  /** Return LPS/NPS survey and survey questions */
  surveyDetails?: Maybe<SurveyDetails>;
  tagList?: Maybe<TagList>;
  tagListAutocomplete?: Maybe<Array<Maybe<TagList>>>;
  tagLists?: Maybe<Array<Maybe<TagList>>>;
  termForCommitteeGet?: Maybe<Array<Maybe<Term>>>;
  testimonialList?: Maybe<Array<Maybe<Testimonial>>>;
  todos?: Maybe<TodoList>;
  todosList?: Maybe<Todo>;
  unbilledApplications?: Maybe<OpportunityApplicationList>;
  updatePersonComment?: Maybe<Comment>;
  viewPersonComment?: Maybe<Comment>;
};


export type QueryTypeAccommodationScheduleListArgs = {
  accommodation_id?: InputMaybe<Scalars['Int']>;
  end_date?: InputMaybe<Scalars['Date']>;
  start_date?: InputMaybe<Scalars['Date']>;
};


export type QueryTypeAccommodationsArgs = {
  end_date?: InputMaybe<Scalars['Date']>;
  filters?: InputMaybe<AccommodationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['Date']>;
};


export type QueryTypeAllCityArgs = {
  filters?: InputMaybe<CityFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeAllConstantsArgs = {
  filters?: InputMaybe<ConstantsSortOption>;
  parent_id?: InputMaybe<Scalars['ID']>;
  type_id?: InputMaybe<Scalars['String']>;
  type_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTypeAllNationalPartnersArgs = {
  mc_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeAllOpportunityArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  smart_search?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeAllOpportunityApplicationArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeAllOpportunityApplicationDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<ApplicationFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeAllOpportunityDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeAllOpportunityV2Args = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeAllOrganisationArgs = {
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeAllOrganisationDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeAllPeopleArgs = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars['String']>;
  opportunity_id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeAllPeopleDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars['String']>;
  opportunity_id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeAllPositionArgs = {
  team_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeAllProgrammeFeeArgs = {
  lc?: InputMaybe<Scalars['ID']>;
  mc?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeAllSdgTargetsArgs = {
  sdg_goal_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeAllSuggestedCountriesArgs = {
  mc_id?: InputMaybe<Scalars['ID']>;
  programme_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeApplicationCsvArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type QueryTypeApplicationInterviewSlotsArgs = {
  id: Scalars['ID'];
};


export type QueryTypeApplicationOfflineAssessmentsArgs = {
  id: Scalars['ID'];
};


export type QueryTypeApplicationTestimonialsArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeAssignedApplicationsArgs = {
  filters?: InputMaybe<AccommodationAssignmentFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTypeBranchArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeBranchAutocompleteArgs = {
  company_id?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryTypeBranchContractsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeBranchEmployeesArgs = {
  id: Scalars['ID'];
  status?: InputMaybe<Array<BranchEmployeeStatus>>;
};


export type QueryTypeBranchesArgs = {
  my?: InputMaybe<Scalars['Boolean']>;
  organisation_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeBulkCvDownloadArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type QueryTypeCampaignAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCheckIfMemberLeadExistsArgs = {
  email: Scalars['String'];
};


export type QueryTypeCheckPersonPresentArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCityAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  mc_scope?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCityByMcArgs = {
  allocated_to_lc: Scalars['Boolean'];
  mc_id: Scalars['Int'];
};


export type QueryTypeClientDataArgs = {
  id: Scalars['ID'];
};


export type QueryTypeClientDataByNameAndApplicableArgs = {
  applicable_id: Scalars['ID'];
  applicable_type: Scalars['String'];
  name: Scalars['String'];
};


export type QueryTypeClientDataGetArgs = {
  id: Scalars['ID'];
};


export type QueryTypeClientDataGetByNameAndApplicableArgs = {
  applicable_id: Scalars['ID'];
  applicable_type: Scalars['String'];
  name: Scalars['String'];
};


export type QueryTypeColleagueAutocompleteArgs = {
  filter?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCommitteeArgs = {
  id: Scalars['ID'];
};


export type QueryTypeCommitteeAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  my_committee_autocomplete?: InputMaybe<Scalars['Boolean']>;
  office_scope?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCommitteeBasicDetailsArgs = {
  id: Scalars['ID'];
};


export type QueryTypeCommitteeTermArgs = {
  id: Scalars['ID'];
  term_id: Scalars['ID'];
};


export type QueryTypeCommitteeTermsArgs = {
  id: Scalars['ID'];
};


export type QueryTypeCommitteeTermsWithDepartmentsArgs = {
  id: Scalars['ID'];
};


export type QueryTypeCommitteesArgs = {
  filters?: InputMaybe<OfficeFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCommitteesDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<OfficeFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCommitteesListBasicArgs = {
  filters?: InputMaybe<OfficeFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeConstantAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QueryTypeConstantsArgs = {
  filters?: InputMaybe<ConstantsSortOption>;
  parent_id?: InputMaybe<Scalars['ID']>;
  type_id?: InputMaybe<Scalars['String']>;
  type_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTypeCreatePersonCommentArgs = {
  comment?: InputMaybe<Scalars['String']>;
  field_for?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeCreatePersonPaymentArgs = {
  id: Scalars['ID'];
};


export type QueryTypeCurrentPersonArgs = {
  model?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCurrentPersonProgrammeFeesArgs = {
  managed_companies?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTypeCurrentPersonSavedFiltersArgs = {
  model?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCurrentPersonSavedFiltersShowArgs = {
  saved_filter_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeDeletePersonCommentArgs = {
  comment_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeDeletePersonCvArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeDeletePersonPaymentArgs = {
  id: Scalars['ID'];
};


export type QueryTypeDeliverabilityReportArgs = {
  mail_template_type_name: Scalars['String'];
  office_id?: InputMaybe<Scalars['ID']>;
  programme_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeDownloadMemberPositionsArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<MemberPositionFilter>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeDownloadOpportunitiesArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeDownloadPeopleArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  end_date?: InputMaybe<Scalars['DateTime']>;
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars['String']>;
  opportunity_id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeEmployeeLeadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeEmployeeLeadGetArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeEmployeeLeadsArgs = {
  filters?: InputMaybe<EmployeeLeadFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeEntityGoalSettingArgs = {
  filters?: InputMaybe<GoalSettingFilter>;
};


export type QueryTypeEntityPlansArgs = {
  office_id: Scalars['ID'];
  upcoming?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTypeEventGetArgs = {
  id: Scalars['ID'];
};


export type QueryTypeEventListArgs = {
  filters?: InputMaybe<EventFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTypeEventRegistrationGetArgs = {
  id: Scalars['ID'];
};


export type QueryTypeEventRegistrationListArgs = {
  filters?: InputMaybe<EventRegistrationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTypeFeaturedCandidatesArgs = {
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryTypeFeaturedOpportunitiesArgs = {
  type?: InputMaybe<Scalars['String']>;
};


export type QueryTypeFindLcArgs = {
  city_id?: InputMaybe<Scalars['ID']>;
  city_name?: InputMaybe<Scalars['String']>;
};


export type QueryTypeFlightDetailsArgs = {
  application_flight_token: Scalars['String'];
};


export type QueryTypeGenerateEmailArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetAccommodationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetApplicationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetAttachmentArgs = {
  id: Scalars['ID'];
};


export type QueryTypeGetBranchArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetBranchEmployeeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetCampaignArgs = {
  id: Scalars['ID'];
};


export type QueryTypeGetCityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetCityLcArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryTypeGetCommitteeArgs = {
  id: Scalars['ID'];
};


export type QueryTypeGetCommitteeBasicDetailsArgs = {
  id: Scalars['ID'];
};


export type QueryTypeGetCommitteeTermArgs = {
  id: Scalars['ID'];
};


export type QueryTypeGetConversationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetImageArgs = {
  id: Scalars['ID'];
};


export type QueryTypeGetInboundEmailApplicationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetInvoiceArgs = {
  id: Scalars['ID'];
};


export type QueryTypeGetLcAlignmentArgs = {
  id: Scalars['ID'];
};


export type QueryTypeGetMailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetNationalPartnerArgs = {
  id: Scalars['ID'];
};


export type QueryTypeGetOpportunityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetOpportunityQuestionsArgs = {
  opportunity_id: Scalars['ID'];
};


export type QueryTypeGetOpportunityTestimonialsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetOpportunityTranslationsArgs = {
  id: Scalars['ID'];
  language_code: Scalars['String'];
};


export type QueryTypeGetOrganisationArgs = {
  id: Scalars['ID'];
};


export type QueryTypeGetPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetPersonArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetPositionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetProgrammeFeeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetSuggestedCountryArgs = {
  id: Scalars['ID'];
};


export type QueryTypeGetTagListArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetTeamArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetTestimonialArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetTimelineArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetTodoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeGetWatchlistArgs = {
  opportunity_id?: InputMaybe<Scalars['Int']>;
};


export type QueryTypeLcAlignmentArgs = {
  id: Scalars['ID'];
};


export type QueryTypeLcAlignmentsArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  id: Scalars['ID'];
};


export type QueryTypeLcAlignmentsListArgs = {
  q: Scalars['String'];
};


export type QueryTypeLdaSurveyArgs = {
  lda_survey_id: Scalars['String'];
};


export type QueryTypeLdmReportArgs = {
  opportunity_id?: InputMaybe<Scalars['ID']>;
  person_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeLdmSurveyArgs = {
  opportunity_application_id?: InputMaybe<Scalars['ID']>;
  position_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeListNationalPartnersArgs = {
  mc_id: Scalars['ID'];
};


export type QueryTypeMailTemplatesArgs = {
  mail_template_type_filter?: InputMaybe<Scalars['ID']>;
  office_filter?: InputMaybe<Scalars['ID']>;
  programme_filter?: InputMaybe<Scalars['ID']>;
  status_filter?: InputMaybe<Scalars['String']>;
};


export type QueryTypeMcFeaturesArgs = {
  mc_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeMcsAlignmentsArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  mc_id?: InputMaybe<Scalars['Int']>;
  mc_name?: InputMaybe<Scalars['String']>;
};


export type QueryTypeMeasureOfImpactsArgs = {
  sdg_goal_id: Scalars['ID'];
};


export type QueryTypeMemberLeadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeMemberLeadCheckIfExistsArgs = {
  email: Scalars['String'];
};


export type QueryTypeMemberLeadGetArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeMemberLeadsArgs = {
  filters?: InputMaybe<MemberLeadFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeMemberPositionArgs = {
  id: Scalars['Int'];
};


export type QueryTypeMemberPositionsArgs = {
  filters?: InputMaybe<MemberPositionFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeMemberPositionsDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<MemberPositionFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeMyBranchArgs = {
  organisation_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeMyCommitteeAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
};


export type QueryTypeMyOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  manager_id?: InputMaybe<Scalars['Int']>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeMyOrganisationArgs = {
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeMyPeopleArgs = {
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeNodeArgs = {
  id: Scalars['ID'];
};


export type QueryTypeNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryTypeNotificationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeNotificationGetArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeNotificationListArgs = {
  filters?: InputMaybe<NotificationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
};


export type QueryTypeNotificationsArgs = {
  filters?: InputMaybe<NotificationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
};


export type QueryTypeOpenOpportunityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  is_v2?: InputMaybe<Scalars['Boolean']>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  smart_search?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeOpportunityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeOpportunityCustomStatusesArgs = {
  id: Scalars['ID'];
};


export type QueryTypeOpportunityDiversificationArgs = {
  filtered_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  mc_id: Scalars['Int'];
  programme_id: Scalars['Int'];
  start_date: Scalars['DateTime'];
};


export type QueryTypeOpportunityQuestionsArgs = {
  opportunity_id: Scalars['ID'];
};


export type QueryTypeOpportunityTestimonialsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeOpportunityTranslationsArgs = {
  id: Scalars['ID'];
  language_code: Scalars['String'];
};


export type QueryTypeOrganisationArgs = {
  id: Scalars['ID'];
};


export type QueryTypeOrganisationAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  my?: InputMaybe<Scalars['Boolean']>;
  q?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryTypeOrganisationAutocompleteMyArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryTypeOrganisationDownloadArgs = {
  columns: Array<InputMaybe<Scalars['String']>>;
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeOrganisationEmployeesArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeOrganisationsArgs = {
  filters?: InputMaybe<CompanyFilter>;
  my?: InputMaybe<Scalars['Boolean']>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypeOrganizationDevelopmentGetArgs = {
  id: Scalars['ID'];
};


export type QueryTypeOrganizationDevelopmentListArgs = {
  exchange_type_filter?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<BaseFilter>;
  index_filter?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  month_filter?: InputMaybe<Scalars['DateTime']>;
  office_filter?: InputMaybe<Scalars['Int']>;
  programme_filter?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTypeOrganizationDevelopmentTargetGetArgs = {
  id: Scalars['ID'];
};


export type QueryTypePagesArgs = {
  filters?: InputMaybe<PageFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypePartnerStandardsSurveyArgs = {
  partner_standard_survey_id: Scalars['String'];
};


export type QueryTypePeopleArgs = {
  end_date?: InputMaybe<Scalars['DateTime']>;
  filters?: InputMaybe<PeopleFilter>;
  my?: InputMaybe<Scalars['Boolean']>;
  only?: InputMaybe<Scalars['String']>;
  opportunity_id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypePeopleAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTypePeopleAutocompleteActiveArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTypePeopleAutocompleteColleaguesArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTypePeopleAutocompleteEmployeesArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTypePersonArgs = {
  id: Scalars['ID'];
};


export type QueryTypePersonApplicationPaginationArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Scalars['String']>;
};


export type QueryTypePersonApplicationsArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  id?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryTypePersonCommentsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypePersonEmployeeOfArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypePersonInterviewedArgs = {
  accepted?: InputMaybe<Scalars['Boolean']>;
  accepted_reason?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  interviewed?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTypePersonLdmResponseArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypePersonPaymentCreateArgs = {
  action_for?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypePersonPaymentDeleteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypePersonSuggestionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeProjectsArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<Pagination>;
  q?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeResolvePersonCommentArgs = {
  comment_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeScorecardGetArgs = {
  id: Scalars['ID'];
};


export type QueryTypeSdgGoalsArgs = {
  active_opportunities?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTypeSdgTargetsArgs = {
  sdg_goal?: InputMaybe<Scalars['String']>;
};


export type QueryTypeSearchAllOpportunityArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeSearchOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeSignupQuestionsArgs = {
  id: Scalars['ID'];
};


export type QueryTypeSimilarEventsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
};


export type QueryTypeSimilarOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  id?: InputMaybe<Scalars['ID']>;
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeStandardsSurveyArgs = {
  standard_survey_id: Scalars['String'];
};


export type QueryTypeSubProductsArgs = {
  programme_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeSuggestedCountriesArgs = {
  mc_id?: InputMaybe<Scalars['ID']>;
  programme_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeSuggestedCountryArgs = {
  id: Scalars['ID'];
};


export type QueryTypeSurveyDetailsArgs = {
  survey_uuid: Scalars['String'];
};


export type QueryTypeTagListArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeTagListAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryTypeTestimonialListArgs = {
  filters?: InputMaybe<TestimonialFilter>;
};


export type QueryTypeTodosArgs = {
  filters?: InputMaybe<TodoFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
};


export type QueryTypeTodosListArgs = {
  id: Scalars['ID'];
  type: Scalars['String'];
};


export type QueryTypeUnbilledApplicationsArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  id: Scalars['ID'];
  only?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  with?: InputMaybe<Scalars['String']>;
};


export type QueryTypeUpdatePersonCommentArgs = {
  comment?: InputMaybe<Scalars['String']>;
  comment_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTypeViewPersonCommentArgs = {
  comment_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Question = {
  __typename?: 'Question';
  id?: Maybe<Scalars['ID']>;
  is_mandatory?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Question>;
  position?: Maybe<Scalars['Int']>;
  question_text?: Maybe<Scalars['String']>;
  question_type?: Maybe<Scalars['String']>;
  sub_questions?: Maybe<Array<Maybe<Question>>>;
};

export type QuestionInput = {
  is_mandatory?: InputMaybe<Scalars['Boolean']>;
  parent_id?: InputMaybe<Scalars['ID']>;
  position?: InputMaybe<Scalars['Int']>;
  question_text?: InputMaybe<Scalars['String']>;
  /** Options - [:text, :paragraph, :dichotomous, :attachment, :checkbox, :multiple_choice] */
  question_type?: InputMaybe<Scalars['String']>;
};

export type Questionnaire = {
  __typename?: 'Questionnaire';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  opportunities?: Maybe<Array<Maybe<Opportunity>>>;
  /** permissions */
  permissions?: Maybe<QuestionnairePermissionType>;
  questions?: Maybe<Array<Maybe<Question>>>;
};

/** The connection type for Questionnaire. */
export type QuestionnaireConnection = {
  __typename?: 'QuestionnaireConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<QuestionnaireEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Questionnaire>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type QuestionnaireEdge = {
  __typename?: 'QuestionnaireEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Questionnaire>;
};

export type QuestionnaireInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type QuestionnaireMutationQuery = {
  /** Create opportunity question */
  addQuestion?: Maybe<Question>;
  /** Bulk Create questionnaire question */
  bulkCreateQuestion?: Maybe<Array<Maybe<Question>>>;
  /** Bulk Delete Questionnaire questions */
  bulkDeleteQuestion?: Maybe<Array<Maybe<Question>>>;
  /** Bulk update questions for Questionnaire */
  bulkUpdateQuestion?: Maybe<Array<Maybe<Question>>>;
  /** Create Questionnaire for Organisation */
  createQuestionnaire?: Maybe<Questionnaire>;
  /** Delete Questionnaire */
  deleteQuestionnaire?: Maybe<Questionnaire>;
  /** Questionnaire ID */
  duplicateQuestionnaire?: Maybe<Questionnaire>;
  /**
   * Bulk Create questionnaire question
   * @deprecated Use "bulkCreateQuestion" field instead.
   */
  questionBulkCreate?: Maybe<Array<Maybe<Question>>>;
  /**
   * Bulk Delete Questionnaire questions
   * @deprecated Use "bulkDeleteQuestion" field instead.
   */
  questionBulkDelete?: Maybe<Array<Maybe<Question>>>;
  /**
   * Bulk update questions for Questionnaire
   * @deprecated Use "bulkUpdateQuestion" field instead.
   */
  questionBulkUpdate?: Maybe<Array<Maybe<Question>>>;
  /** Delete opportunity question */
  removeQuestion?: Maybe<Question>;
  /** Update opportunity question */
  updateQuestion?: Maybe<Question>;
  /** Update Questionnaire */
  updateQuestionnaire?: Maybe<Questionnaire>;
};


export type QuestionnaireMutationQueryAddQuestionArgs = {
  question?: InputMaybe<QuestionInput>;
  questionnaire_id?: InputMaybe<Scalars['ID']>;
};


export type QuestionnaireMutationQueryBulkCreateQuestionArgs = {
  questionnaire_id?: InputMaybe<Scalars['ID']>;
  questions?: InputMaybe<Array<InputMaybe<QuestionInput>>>;
};


export type QuestionnaireMutationQueryBulkDeleteQuestionArgs = {
  question_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type QuestionnaireMutationQueryBulkUpdateQuestionArgs = {
  questions?: InputMaybe<Array<InputMaybe<UpdateQuestionInput>>>;
};


export type QuestionnaireMutationQueryCreateQuestionnaireArgs = {
  company_id: Scalars['ID'];
  questionnaire?: InputMaybe<QuestionnaireInput>;
};


export type QuestionnaireMutationQueryDeleteQuestionnaireArgs = {
  id: Scalars['ID'];
};


export type QuestionnaireMutationQueryDuplicateQuestionnaireArgs = {
  id: Scalars['ID'];
};


export type QuestionnaireMutationQueryQuestionBulkCreateArgs = {
  questionnaire_id?: InputMaybe<Scalars['ID']>;
  questions?: InputMaybe<Array<InputMaybe<QuestionInput>>>;
};


export type QuestionnaireMutationQueryQuestionBulkDeleteArgs = {
  question_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type QuestionnaireMutationQueryQuestionBulkUpdateArgs = {
  questions?: InputMaybe<Array<InputMaybe<UpdateQuestionInput>>>;
};


export type QuestionnaireMutationQueryRemoveQuestionArgs = {
  id: Scalars['ID'];
};


export type QuestionnaireMutationQueryUpdateQuestionArgs = {
  id: Scalars['ID'];
  question?: InputMaybe<QuestionInput>;
};


export type QuestionnaireMutationQueryUpdateQuestionnaireArgs = {
  id: Scalars['ID'];
  questionnaire?: InputMaybe<QuestionnaireInput>;
};

export type QuestionnairePermissionType = {
  __typename?: 'QuestionnairePermissionType';
  can_delete?: Maybe<Scalars['Boolean']>;
};

export type RangeInput = {
  from?: InputMaybe<Scalars['Int']>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Int']>;
};

export type RejectionUpdatesInput = {
  email?: InputMaybe<Scalars['Boolean']>;
  push_notification?: InputMaybe<Scalars['Boolean']>;
};

export type RemoteExperienceInput = {
  remote_experience_additional_details: Scalars['String'];
  remote_experience_duration: Scalars['String'];
  remote_experience_salary: Scalars['String'];
};

export type ResponseInput = {
  /** Survey option id */
  option_id: Scalars['ID'];
  /** Survey question id */
  question_id: Scalars['ID'];
};

export type RoleInfoInput = {
  additional_instructions?: InputMaybe<Scalars['String']>;
  all_learning_points?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  city?: InputMaybe<Scalars['String']>;
  learning_points?: InputMaybe<Scalars['String']>;
  required_preparation?: InputMaybe<Scalars['String']>;
  selection_process?: InputMaybe<Scalars['String']>;
};

/** RoleInfoType records */
export type RoleInfoType = {
  __typename?: 'RoleInfoType';
  additional_instructions?: Maybe<Scalars['String']>;
  all_learning_points?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  learning_points?: Maybe<Scalars['String']>;
  /** All Learning points */
  learning_points_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  required_preparation?: Maybe<Scalars['String']>;
  selection_process?: Maybe<Scalars['String']>;
};

export type SavedFilter = Node & {
  __typename?: 'SavedFilter';
  body?: Maybe<Scalars['JSON']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** The connection type for SavedFilter. */
export type SavedFilterConnection = {
  __typename?: 'SavedFilterConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SavedFilterEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SavedFilter>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type SavedFilterEdge = {
  __typename?: 'SavedFilterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<SavedFilter>;
};

export type SavedFilterInput = {
  body?: InputMaybe<Scalars['JSON']>;
  model?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Scorecard = {
  __typename?: 'Scorecard';
  creator?: Maybe<Person>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** permissions */
  permissions?: Maybe<ScorecardPermissionType>;
  scorecard_attributes?: Maybe<Array<Maybe<ScorecardAttributeType>>>;
};

export type ScorecardAttributeInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ScorecardAttributePermissionType = {
  __typename?: 'ScorecardAttributePermissionType';
  can_delete?: Maybe<Scalars['Boolean']>;
};

export type ScorecardAttributeType = {
  __typename?: 'ScorecardAttributeType';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** permissions */
  permissions?: Maybe<ScorecardAttributePermissionType>;
};

/** The connection type for Scorecard. */
export type ScorecardConnection = {
  __typename?: 'ScorecardConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ScorecardEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Scorecard>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type ScorecardEdge = {
  __typename?: 'ScorecardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Scorecard>;
};

export type ScorecardInput = {
  score?: InputMaybe<Scalars['Int']>;
  scorecard_attribute_id?: InputMaybe<Scalars['Int']>;
};

export type ScorecardPermissionType = {
  __typename?: 'ScorecardPermissionType';
  can_delete?: Maybe<Scalars['Boolean']>;
};

export type ScorecardQuery = {
  scorecardGet?: Maybe<Scorecard>;
};


export type ScorecardQueryScorecardGetArgs = {
  id: Scalars['ID'];
};

export type Sdg = {
  __typename?: 'Sdg';
  already_reached?: Maybe<Scalars['Int']>;
  coordination?: Maybe<Scalars['String']>;
  deliverables?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  impact_date?: Maybe<Scalars['DateTime']>;
  implementation?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  partners?: Maybe<Scalars['String']>;
  potential_reach?: Maybe<Scalars['Int']>;
  /** Sdg Target details */
  sdg_target?: Maybe<SdgTarget>;
};

export type SdgInfoInput = {
  already_reached?: InputMaybe<Scalars['Int']>;
  coordination?: InputMaybe<Scalars['String']>;
  deliverables?: InputMaybe<Array<InputMaybe<DeliverablesInput>>>;
  impact_date?: InputMaybe<Scalars['DateTime']>;
  implementation?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  partners?: InputMaybe<Scalars['String']>;
  potential_reach?: InputMaybe<Scalars['Int']>;
  sdg_target_id?: InputMaybe<Scalars['String']>;
};

export type SdgTarget = {
  __typename?: 'SdgTarget';
  /** sdg target remark */
  description?: Maybe<Scalars['String']>;
  eligible_for_global_project?: Maybe<Scalars['Boolean']>;
  /** goal index */
  goal_index?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Constant>;
  target?: Maybe<Scalars['String']>;
  target_id?: Maybe<Scalars['String']>;
  /** target index */
  target_index?: Maybe<Scalars['Int']>;
};

export type SelectionProcess = {
  __typename?: 'SelectionProcess';
  id?: Maybe<Scalars['ID']>;
  no_of_days?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** The connection type for SelectionProcess. */
export type SelectionProcessConnection = {
  __typename?: 'SelectionProcessConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SelectionProcessEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SelectionProcess>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type SelectionProcessEdge = {
  __typename?: 'SelectionProcessEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<SelectionProcess>;
};

export type SelectionProcessInput = {
  no_of_days?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Slot = {
  __typename?: 'Slot';
  applications_close_date?: Maybe<Scalars['Date']>;
  available_openings?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<Person>;
  end_date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  openings?: Maybe<Scalars['Int']>;
  /** OpportunityApplications count */
  opportunity_applications_count?: Maybe<Scalars['Int']>;
  original_applications_close_date?: Maybe<Scalars['Date']>;
  /** permissions */
  permissions?: Maybe<SlotPermissionType>;
  start_date?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** The connection type for Slot. */
export type SlotConnection = {
  __typename?: 'SlotConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SlotEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Slot>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type SlotEdge = {
  __typename?: 'SlotEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Slot>;
};

export type SlotInput = {
  applications_close_date: Scalars['Date'];
  end_date: Scalars['Date'];
  openings: Scalars['Int'];
  start_date: Scalars['Date'];
  title: Scalars['String'];
};

export type SlotMutationQuery = {
  /** Create Slot */
  createSlot?: Maybe<Slot>;
  /** Delete Slot */
  deleteSlot?: Maybe<Slot>;
  /** Move to Active */
  moveSlotToActive?: Maybe<Slot>;
  /** Move to Inactive */
  moveSlotToInactive?: Maybe<Slot>;
  /**
   * Create Slot
   * @deprecated Use "createSlot" field instead.
   */
  slotCreate?: Maybe<Slot>;
  /**
   * Delete Slot
   * @deprecated Use "deleteSlot" field instead.
   */
  slotDelete?: Maybe<Slot>;
  /**
   * Move to Active
   * @deprecated Use "moveSlotToActive" field instead.
   */
  slotMoveToActive?: Maybe<Slot>;
  /**
   * Move to Inactive
   * @deprecated Use "moveSlotToInactive" field instead.
   */
  slotMoveToInactive?: Maybe<Slot>;
  /**
   * Update Slot
   * @deprecated Use "updateSlot" field instead.
   */
  slotUpdate?: Maybe<Slot>;
  /** Update Slot */
  updateSlot?: Maybe<Slot>;
};


export type SlotMutationQueryCreateSlotArgs = {
  opportunity_id: Scalars['ID'];
  slot?: InputMaybe<SlotInput>;
};


export type SlotMutationQueryDeleteSlotArgs = {
  id: Scalars['ID'];
};


export type SlotMutationQueryMoveSlotToActiveArgs = {
  id: Scalars['ID'];
};


export type SlotMutationQueryMoveSlotToInactiveArgs = {
  id: Scalars['ID'];
};


export type SlotMutationQuerySlotCreateArgs = {
  opportunity_id: Scalars['ID'];
  slot?: InputMaybe<SlotInput>;
};


export type SlotMutationQuerySlotDeleteArgs = {
  id: Scalars['ID'];
};


export type SlotMutationQuerySlotMoveToActiveArgs = {
  id: Scalars['ID'];
};


export type SlotMutationQuerySlotMoveToInactiveArgs = {
  id: Scalars['ID'];
};


export type SlotMutationQuerySlotUpdateArgs = {
  id: Scalars['ID'];
  slot: UpdateSlotInput;
};


export type SlotMutationQueryUpdateSlotArgs = {
  id: Scalars['ID'];
  slot: UpdateSlotInput;
};

export type SlotPermissionType = {
  __typename?: 'SlotPermissionType';
  can_delete?: Maybe<Scalars['Boolean']>;
  can_move_to_inactive?: Maybe<Scalars['Boolean']>;
  can_update?: Maybe<Scalars['Boolean']>;
};

export enum SlotSortOption {
  CreatedAt = 'created_at',
  StartDate = 'start_date',
  UpdatedAt = 'updated_at'
}

/** SpecificInfoType records */
export type SpecificInfoType = {
  __typename?: 'SpecificInfoType';
  ask_gip_question?: Maybe<Scalars['String']>;
  computer?: Maybe<Scalars['String']>;
  ef_test_required?: Maybe<Scalars['String']>;
  expected_work_schedule?: Maybe<Scalars['JSON']>;
  salary?: Maybe<Scalars['Int']>;
  /** Salary Curency */
  salary_currency?: Maybe<Currency>;
  salary_periodicity?: Maybe<Scalars['String']>;
  saturday_work?: Maybe<Scalars['String']>;
  saturday_work_schedule?: Maybe<Scalars['String']>;
};

export type SpecificsInfoInput = {
  ask_gip_question?: InputMaybe<Scalars['String']>;
  computer?: InputMaybe<Scalars['Boolean']>;
  ef_test_required?: InputMaybe<Scalars['Boolean']>;
  expected_work_schedule?: InputMaybe<WorkScheduleInput>;
  salary?: InputMaybe<Scalars['Int']>;
  salary_currency_id?: InputMaybe<Scalars['Int']>;
  salary_periodicity?: InputMaybe<Scalars['String']>;
  saturday_work?: InputMaybe<Scalars['Boolean']>;
  saturday_work_schedule?: InputMaybe<WorkScheduleInput>;
};

export type StandardsSurvey = {
  __typename?: 'StandardsSurvey';
  aiesec_contribution?: Maybe<Scalars['Int']>;
  experience_end_date?: Maybe<Scalars['Date']>;
  experience_start_date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  /** Host LC */
  opportunity?: Maybe<Office>;
  organisation_name?: Maybe<Scalars['String']>;
  /** Home LC */
  person?: Maybe<Office>;
  standards?: Maybe<Array<Maybe<ConstantMap>>>;
  status?: Maybe<Scalars['String']>;
};

export type StandardsSurveyMutationQuery = {
  /** Update partner standards survey reponse */
  updatePartnerStandardsSurvey?: Maybe<StandardsSurvey>;
  /** Update EP standards survey reponse */
  updateStandardsSurvey?: Maybe<StandardsSurvey>;
};


export type StandardsSurveyMutationQueryUpdatePartnerStandardsSurveyArgs = {
  partner_standard_survey_id: Scalars['String'];
  responses: Array<ResponseInput>;
};


export type StandardsSurveyMutationQueryUpdateStandardsSurveyArgs = {
  response: ResponseInput;
  standard_survey_id: Scalars['String'];
};

export type StandardsSurveyQuery = {
  /** Get partner standards survey and its reponse */
  partnerStandardsSurvey?: Maybe<StandardsSurvey>;
  /** Get EP standards survey and its reponse */
  standardsSurvey?: Maybe<StandardsSurvey>;
};


export type StandardsSurveyQueryPartnerStandardsSurveyArgs = {
  partner_standard_survey_id: Scalars['String'];
};


export type StandardsSurveyQueryStandardsSurveyArgs = {
  standard_survey_id: Scalars['String'];
};

export type StatusUpdatesInput = {
  email?: InputMaybe<Scalars['Boolean']>;
  push_notification?: InputMaybe<Scalars['Boolean']>;
};

export type SubProduct = {
  __typename?: 'SubProduct';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  programme?: Maybe<Programme>;
  sub_product_group?: Maybe<Scalars['String']>;
};

export enum SubProductGroup {
  BusinessAdministrationBusinessDevelopmentFinanceMarketing = 'business_administration_business_development_finance_marketing',
  InformationTechnologyEngineering = 'information_technology_engineering'
}

export type SubProducts = {
  subProducts?: Maybe<Array<Maybe<SubProduct>>>;
};


export type SubProductsSubProductsArgs = {
  programme_id?: InputMaybe<Scalars['ID']>;
};

export type SuggestedCountry = {
  __typename?: 'SuggestedCountry';
  country?: Maybe<Office>;
  id: Scalars['ID'];
  mc?: Maybe<Office>;
  programme?: Maybe<Programme>;
};

export type SuggestedCountryInput = {
  country_id?: InputMaybe<Scalars['Int']>;
  mc_id?: InputMaybe<Scalars['Int']>;
  programme_id?: InputMaybe<Scalars['Int']>;
};

export type SuggestedCountryMutationQuery = {
  /** Create Suggested Country */
  createSuggestedCountry?: Maybe<SuggestedCountry>;
  /** Delete Suggested Country */
  deleteSuggestedCountry?: Maybe<SuggestedCountry>;
  /** Update Suggested Country */
  updateSuggestedCountry?: Maybe<SuggestedCountry>;
};


export type SuggestedCountryMutationQueryCreateSuggestedCountryArgs = {
  suggested_country?: InputMaybe<SuggestedCountryInput>;
};


export type SuggestedCountryMutationQueryDeleteSuggestedCountryArgs = {
  id: Scalars['ID'];
};


export type SuggestedCountryMutationQueryUpdateSuggestedCountryArgs = {
  id: Scalars['ID'];
  suggested_country?: InputMaybe<SuggestedCountryInput>;
};

export type SuggestedCountryQuery = {
  /** @deprecated Use "suggestedCountries" field instead. */
  allSuggestedCountries?: Maybe<Array<Maybe<SuggestedCountry>>>;
  /** @deprecated Use "suggestedCountry" field instead. */
  getSuggestedCountry?: Maybe<SuggestedCountry>;
  suggestedCountries?: Maybe<Array<Maybe<SuggestedCountry>>>;
  suggestedCountry?: Maybe<SuggestedCountry>;
};


export type SuggestedCountryQueryAllSuggestedCountriesArgs = {
  mc_id?: InputMaybe<Scalars['ID']>;
  programme_id?: InputMaybe<Scalars['ID']>;
};


export type SuggestedCountryQueryGetSuggestedCountryArgs = {
  id: Scalars['ID'];
};


export type SuggestedCountryQuerySuggestedCountriesArgs = {
  mc_id?: InputMaybe<Scalars['ID']>;
  programme_id?: InputMaybe<Scalars['ID']>;
};


export type SuggestedCountryQuerySuggestedCountryArgs = {
  id: Scalars['ID'];
};

export type SuggestedOpportunitiesInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  frequency?: InputMaybe<Scalars['String']>;
};

export type Survey = {
  __typename?: 'Survey';
  id?: Maybe<Scalars['ID']>;
  survey_questions?: Maybe<Array<Maybe<SurveyQuestion>>>;
  title?: Maybe<Scalars['String']>;
};

export type SurveyDetails = {
  __typename?: 'SurveyDetails';
  /** Survey description */
  description?: Maybe<Scalars['String']>;
  /** Survey id */
  id?: Maybe<Scalars['ID']>;
  opportunity_application?: Maybe<OpportunityApplication>;
  position?: Maybe<Position>;
  /** Set of first group questions */
  questions?: Maybe<Array<Maybe<SurveyQuestion>>>;
  /** Survey title */
  title?: Maybe<Scalars['String']>;
};

export type SurveyMutationQuery = {
  /** Update LPS/NPS survey reponse */
  surveyAnswer?: Maybe<Scalars['JSON']>;
};


export type SurveyMutationQuerySurveyAnswerArgs = {
  responses: Array<SurveyResponseInput>;
  survey_uuid: Scalars['String'];
};

export type SurveyQuery = {
  npsSurvey?: Maybe<Survey>;
  /** Return LPS/NPS survey and survey questions */
  surveyDetails?: Maybe<SurveyDetails>;
};


export type SurveyQuerySurveyDetailsArgs = {
  survey_uuid: Scalars['String'];
};

export type SurveyQuestion = {
  __typename?: 'SurveyQuestion';
  additional_details?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_mandatory?: Maybe<Scalars['Boolean']>;
  /** answer */
  nps_answer?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
  question_group?: Maybe<Scalars['Int']>;
  question_text?: Maybe<Scalars['String']>;
  question_type?: Maybe<Scalars['String']>;
  sanitize_meta?: Maybe<Scalars['JSON']>;
  subquestions?: Maybe<Array<Maybe<SurveyQuestion>>>;
  survey_name?: Maybe<Scalars['String']>;
};

export type SurveyResponse = {
  __typename?: 'SurveyResponse';
  id?: Maybe<Scalars['ID']>;
  questions?: Maybe<Array<Maybe<SurveyQuestion>>>;
  survey_uuid?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SurveyResponseInput = {
  answer: Scalars['String'];
  other_option_answer?: InputMaybe<Scalars['String']>;
  other_question_id?: InputMaybe<Scalars['ID']>;
  question_id: Scalars['ID'];
};

export type TagList = {
  __typename?: 'TagList';
  creator?: Maybe<Person>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type TagListAutocompleteQuery = {
  tagListAutocomplete?: Maybe<Array<Maybe<TagList>>>;
};


export type TagListAutocompleteQueryTagListAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars['String']>;
};

/** The connection type for TagList. */
export type TagListConnection = {
  __typename?: 'TagListConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TagListEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TagList>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type TagListEdge = {
  __typename?: 'TagListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<TagList>;
};

export type TagListInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type TagListMutationQueryType = {
  createTagList?: Maybe<TagList>;
  tagListUpdate?: Maybe<TagList>;
};


export type TagListMutationQueryTypeCreateTagListArgs = {
  tag_list?: InputMaybe<TagListInput>;
};


export type TagListMutationQueryTypeTagListUpdateArgs = {
  id?: InputMaybe<Scalars['ID']>;
  tag_list?: InputMaybe<TagListInput>;
};

export type TagListQuery = {
  /** @deprecated Use "tagLists" field instead. */
  allTagList?: Maybe<Array<Maybe<TagList>>>;
  /** @deprecated Use "tagList" field instead. */
  getTagList?: Maybe<TagList>;
  tagList?: Maybe<TagList>;
  tagLists?: Maybe<Array<Maybe<TagList>>>;
};


export type TagListQueryGetTagListArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type TagListQueryTagListArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Team = {
  __typename?: 'Team';
  cover_photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  creator_id?: Maybe<Scalars['ID']>;
  deleted_at?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  office?: Maybe<Office>;
  /** permissions */
  permissions?: Maybe<TeamPermissionType>;
  positions?: Maybe<PositionConnection>;
  profile_photo?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  team_type?: Maybe<Scalars['String']>;
  term_date_id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type TeamPositionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Team. */
export type TeamConnection = {
  __typename?: 'TeamConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TeamEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Team>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type TeamEdge = {
  __typename?: 'TeamEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Team>;
};

export type TeamInput = {
  cover_photo?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  profile_photo?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TeamMutationQuery = {
  /** Create team */
  createTeam?: Maybe<Team>;
  deleteTeam?: Maybe<Team>;
  /** Update team */
  updateTeam?: Maybe<Team>;
};


export type TeamMutationQueryCreateTeamArgs = {
  office_id: Scalars['ID'];
  team?: InputMaybe<TeamInput>;
  term_id: Scalars['ID'];
};


export type TeamMutationQueryDeleteTeamArgs = {
  id: Scalars['ID'];
};


export type TeamMutationQueryUpdateTeamArgs = {
  id: Scalars['ID'];
  team?: InputMaybe<TeamInput>;
};

export type TeamPermissionType = {
  __typename?: 'TeamPermissionType';
  can_delete?: Maybe<Scalars['Boolean']>;
  can_read?: Maybe<Scalars['Boolean']>;
  can_update?: Maybe<Scalars['Boolean']>;
  manage_positions?: Maybe<Scalars['Boolean']>;
};

export type TeamQuery = {
  getTeam?: Maybe<Team>;
};


export type TeamQueryGetTeamArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Term = {
  __typename?: 'Term';
  end_year?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_year?: Maybe<Scalars['String']>;
};

export type TermDate = {
  __typename?: 'TermDate';
  current_and_invited_members?: Maybe<PersonConnection>;
  end_date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  invitations?: Maybe<Array<Maybe<Invitation>>>;
  /** permissions */
  permissions?: Maybe<TermDatePermissionType>;
  short_name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
  teams?: Maybe<TeamConnection>;
};


export type TermDateCurrent_And_Invited_MembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TermDateTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type TermDatePermissionType = {
  __typename?: 'TermDatePermissionType';
  create_team?: Maybe<Scalars['Boolean']>;
};

export type TermInput = {
  name?: InputMaybe<Scalars['String']>;
  short_name?: InputMaybe<Scalars['String']>;
};

export type TermMutationQuery = {
  /** Create Term */
  createTerm?: Maybe<Term>;
  deleteTerm?: Maybe<Term>;
  invitePersonTerm?: Maybe<Person>;
};


export type TermMutationQueryCreateTermArgs = {
  term?: InputMaybe<TermInput>;
};


export type TermMutationQueryDeleteTermArgs = {
  id: Scalars['ID'];
};


export type TermMutationQueryInvitePersonTermArgs = {
  office_id: Scalars['ID'];
  person_id?: InputMaybe<Scalars['ID']>;
  person_input?: InputMaybe<InvitePersonInput>;
  term_id: Scalars['ID'];
};

export type TermQuery = {
  termForCommitteeGet?: Maybe<Array<Maybe<Term>>>;
};

export type Testimonial = {
  __typename?: 'Testimonial';
  body?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['ID']>;
  cover_photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  meta?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_photo?: Maybe<Scalars['String']>;
  testimonial_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type TestimonialCover_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars['Boolean']>;
  cdn_region?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};


export type TestimonialProfile_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars['Boolean']>;
  cdn_region?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};

export type TestimonialFilter = {
  company_id?: InputMaybe<Scalars['Int']>;
  testimonial_type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TestimonialQuery = {
  getTestimonial?: Maybe<Testimonial>;
  testimonialList?: Maybe<Array<Maybe<Testimonial>>>;
};


export type TestimonialQueryGetTestimonialArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type TestimonialQueryTestimonialListArgs = {
  filters?: InputMaybe<TestimonialFilter>;
};

export type Timeline = {
  __typename?: 'Timeline';
  creator?: Maybe<Person>;
  details?: Maybe<Scalars['JSON']>;
  display_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  object_type?: Maybe<Scalars['String']>;
};

export type TimelineInput = {
  details_fields?: InputMaybe<Array<InputMaybe<FieldInput>>>;
  display_at?: InputMaybe<Scalars['DateTime']>;
  object_type?: InputMaybe<Scalars['String']>;
  opportunity_application_id?: InputMaybe<Scalars['ID']>;
};

export type TimelineMutationQuery = {
  /** Create timeline for the application */
  createTimeline?: Maybe<Timeline>;
  deleteTimeline?: Maybe<Timeline>;
  /** Update timeline */
  updateTimeline?: Maybe<Timeline>;
};


export type TimelineMutationQueryCreateTimelineArgs = {
  timeline?: InputMaybe<TimelineInput>;
};


export type TimelineMutationQueryDeleteTimelineArgs = {
  id: Scalars['ID'];
};


export type TimelineMutationQueryUpdateTimelineArgs = {
  id: Scalars['ID'];
  timeline?: InputMaybe<TimelineInput>;
};

export type TimelineQuery = {
  getTimeline?: Maybe<Timeline>;
};


export type TimelineQueryGetTimelineArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

/** TmDetailType records */
export type TmDetailType = {
  __typename?: 'TmDetailType';
  department_id?: Maybe<Scalars['String']>;
  key_deliverables?: Maybe<Scalars['String']>;
  open_to?: Maybe<Scalars['String']>;
  recommended_prior_experiences?: Maybe<Scalars['String']>;
  tm_type?: Maybe<Scalars['String']>;
};

export type TmDetailsInput = {
  department_id?: InputMaybe<Scalars['Int']>;
  key_deliverables?: InputMaybe<Scalars['String']>;
  open_to?: InputMaybe<Scalars['String']>;
  recommended_prior_experiences?: InputMaybe<Scalars['String']>;
  tm_type?: InputMaybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  assignee?: Maybe<Person>;
  category?: Maybe<Scalars['String']>;
  children?: Maybe<TodoType>;
  comments?: Maybe<CommentConnection>;
  completed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<Person>;
  deadline?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  goal_type?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  meta?: Maybe<TodoMetaType>;
  metric?: Maybe<Scalars['JSON']>;
  metric_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  parent?: Maybe<Todo>;
  tag_lists?: Maybe<Array<Maybe<TagList>>>;
  todo_type?: Maybe<TodoType>;
  todoable?: Maybe<TodoableUnion>;
  todoable_id?: Maybe<Scalars['Int']>;
  todoable_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type TodoCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Todo. */
export type TodoConnection = {
  __typename?: 'TodoConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TodoEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars['JSON']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Todo>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type TodoEdge = {
  __typename?: 'TodoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Todo>;
};

export type TodoFilter = {
  assignee_id?: InputMaybe<Scalars['Int']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  creator_id?: InputMaybe<Scalars['Int']>;
  /** Available options - task, goal */
  todo_type?: InputMaybe<Scalars['String']>;
  todoable_id?: InputMaybe<Scalars['Int']>;
  /** Available options - Company, Accomodation, Person, Opportunity, OpportunityApplication, Office, EngagementEvent */
  todoable_type?: InputMaybe<Scalars['String']>;
};

export type TodoInput = {
  assignee_id?: InputMaybe<Scalars['ID']>;
  deadline?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  goal_type?: InputMaybe<Scalars['String']>;
  metric?: InputMaybe<Scalars['JSON']>;
  metric_type?: InputMaybe<Scalars['String']>;
  model_name?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  record_id?: InputMaybe<Scalars['ID']>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  todo_type?: InputMaybe<Scalars['String']>;
};

export type TodoList = {
  __typename?: 'TodoList';
  data?: Maybe<Array<Maybe<Todo>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

/** Todo MetaType records */
export type TodoMetaType = {
  __typename?: 'TodoMetaType';
  completed_at?: Maybe<Scalars['DateTime']>;
  completed_by?: Maybe<Scalars['Int']>;
};

export type TodoMutationQuery = {
  /** Add todo to goal */
  addTodoToGoal?: Maybe<Todo>;
  /** complete todo */
  completeTodo?: Maybe<Todo>;
  /** Create goal */
  createGoal?: Maybe<Todo>;
  /** Create todo for the person */
  createTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
  /** complete todo */
  inCompleteTodo?: Maybe<Todo>;
  /** Update todo */
  updateTodo?: Maybe<Todo>;
};


export type TodoMutationQueryAddTodoToGoalArgs = {
  goal_id: Scalars['ID'];
  todo?: InputMaybe<TodoInput>;
};


export type TodoMutationQueryCompleteTodoArgs = {
  id: Scalars['ID'];
};


export type TodoMutationQueryCreateGoalArgs = {
  goal?: InputMaybe<TodoInput>;
};


export type TodoMutationQueryCreateTodoArgs = {
  todo?: InputMaybe<TodoInput>;
};


export type TodoMutationQueryDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type TodoMutationQueryInCompleteTodoArgs = {
  id: Scalars['ID'];
};


export type TodoMutationQueryUpdateTodoArgs = {
  id: Scalars['ID'];
  todo?: InputMaybe<TodoInput>;
};

export type TodoQuery = {
  getTodo?: Maybe<Todo>;
  todos?: Maybe<TodoList>;
  todosList?: Maybe<Todo>;
};


export type TodoQueryGetTodoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type TodoQueryTodosArgs = {
  filters?: InputMaybe<TodoFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars['Int']>;
};


export type TodoQueryTodosListArgs = {
  id: Scalars['ID'];
  type: Scalars['String'];
};

export type TodoType = {
  __typename?: 'TodoType';
  todos?: Maybe<TodoConnection>;
};


export type TodoTypeTodosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  todo_type: Scalars['String'];
};

/** Todoable polymorphic object */
export type TodoableUnion = Accommodation | Event | Office | Opportunity | OpportunityApplication | Organisation | Person;

export type Transaction = {
  __typename?: 'Transaction';
  auth_code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  opportunity_application_id?: Maybe<Scalars['Int']>;
  psp_reference?: Maybe<Scalars['String']>;
  refusal_reason?: Maybe<Scalars['String']>;
  result_code?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  transactionable_id?: Maybe<Scalars['Int']>;
  transactionable_type?: Maybe<Scalars['String']>;
};

export type UpdateCommitteeTargetInput = {
  committee_target?: InputMaybe<CommitteeTargetInput>;
  id: Scalars['ID'];
};

export type UpdateQuestionInput = {
  id?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<QuestionInput>;
};

export type UpdateSelectionProcessInput = {
  id?: InputMaybe<Scalars['Int']>;
  selection_process?: InputMaybe<SelectionProcessInput>;
};

export type UpdateSlotInput = {
  applications_close_date?: InputMaybe<Scalars['Date']>;
  openings?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type WeeklyActivity = {
  __typename?: 'WeeklyActivity';
  activity: Scalars['String'];
  id: Scalars['ID'];
  is_templated?: Maybe<Scalars['Boolean']>;
  week: Scalars['Int'];
};

export type WeeklyActivityInput = {
  activity: Scalars['String'];
  week: Scalars['Int'];
};

export type WorkScheduleInput = {
  from?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
};

export type Payment = {
  __typename?: 'payment';
  action_for?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['String']>;
  creator_id?: Maybe<Scalars['String']>;
  deleted_at?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  opportunity_application_id: Scalars['ID'];
  person_id: Scalars['ID'];
  updated_at?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Accommodation: ResolverTypeWrapper<Accommodation>;
  AccommodationAssignment: ResolverTypeWrapper<AccommodationAssignment>;
  AccommodationAssignmentConnection: ResolverTypeWrapper<AccommodationAssignmentConnection>;
  AccommodationAssignmentEdge: ResolverTypeWrapper<AccommodationAssignmentEdge>;
  AccommodationAssignmentFilter: AccommodationAssignmentFilter;
  AccommodationAssignmentInput: AccommodationAssignmentInput;
  AccommodationAssignmentList: ResolverTypeWrapper<AccommodationAssignmentList>;
  AccommodationAssignmentMutationQuery: ResolversTypes['MutationType'];
  AccommodationAssignmentQuery: ResolversTypes['QueryType'];
  AccommodationAvailability: ResolverTypeWrapper<AccommodationAvailability>;
  AccommodationAvailabilityConnection: ResolverTypeWrapper<AccommodationAvailabilityConnection>;
  AccommodationAvailabilityEdge: ResolverTypeWrapper<AccommodationAvailabilityEdge>;
  AccommodationAvailabilityInput: AccommodationAvailabilityInput;
  AccommodationAvailabilityMutationQuery: ResolversTypes['MutationType'];
  AccommodationFilter: AccommodationFilter;
  AccommodationInput: AccommodationInput;
  AccommodationList: ResolverTypeWrapper<AccommodationList>;
  AccommodationMutationQuery: ResolversTypes['MutationType'];
  AccommodationQuery: ResolversTypes['QueryType'];
  AddressInfo: ResolverTypeWrapper<AddressInfo>;
  AddressInput: AddressInput;
  AlignmentTypes: AlignmentTypes;
  ApplicationFilter: ApplicationFilter;
  ApplicationMetaType: ResolverTypeWrapper<ApplicationMetaType>;
  ApplicationQuestionnaire: ResolverTypeWrapper<ApplicationQuestionnaire>;
  ApplicationQuestionnaireConnection: ResolverTypeWrapper<ApplicationQuestionnaireConnection>;
  ApplicationQuestionnaireEdge: ResolverTypeWrapper<ApplicationQuestionnaireEdge>;
  ApplicationQuestionnaireInput: ApplicationQuestionnaireInput;
  ApplicationRemoteRealizeInput: ApplicationRemoteRealizeInput;
  ApplicationScorecard: ResolverTypeWrapper<ApplicationScorecard>;
  ApplicationScorecardAttributeType: ResolverTypeWrapper<ApplicationScorecardAttributeType>;
  ApplicationSortOption: ApplicationSortOption;
  Attachment: ResolverTypeWrapper<Attachment>;
  AttachmentInput: AttachmentInput;
  AttachmentMutationQuery: ResolversTypes['MutationType'];
  AttachmentQuery: ResolversTypes['QueryType'];
  Attendee: ResolverTypeWrapper<Attendee>;
  AutoAssignmentInput: AutoAssignmentInput;
  AxpSettingsInput: AxpSettingsInput;
  BaseFilter: BaseFilter;
  BaseSortDirection: BaseSortDirection;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Branch: ResolverTypeWrapper<Branch>;
  BranchConnection: ResolverTypeWrapper<BranchConnection>;
  BranchEdge: ResolverTypeWrapper<BranchEdge>;
  BranchEmployee: ResolverTypeWrapper<BranchEmployee>;
  BranchEmployeeConnection: ResolverTypeWrapper<BranchEmployeeConnection>;
  BranchEmployeeEdge: ResolverTypeWrapper<BranchEmployeeEdge>;
  BranchEmployeeInput: BranchEmployeeInput;
  BranchEmployeeMutationQuery: ResolversTypes['MutationType'];
  BranchEmployeeQuery: ResolversTypes['QueryType'];
  BranchEmployeeStatus: BranchEmployeeStatus;
  BranchInput: BranchInput;
  BranchMutationQuery: ResolversTypes['MutationType'];
  BranchPermissionType: ResolverTypeWrapper<BranchPermissionType>;
  BranchQuery: ResolversTypes['QueryType'];
  CV: ResolverTypeWrapper<Cv>;
  Campaign: ResolverTypeWrapper<Campaign>;
  CampaignInput: CampaignInput;
  CampaignMutationQuery: ResolversTypes['MutationType'];
  CampaignQuery: ResolversTypes['QueryType'];
  ChecklistInput: ChecklistInput;
  ChecklistResponse: ResolverTypeWrapper<ChecklistResponse>;
  City: ResolverTypeWrapper<City>;
  CityFilter: CityFilter;
  CityInput: CityInput;
  CityLc: ResolverTypeWrapper<CityLc>;
  CityLcInput: CityLcInput;
  CityLcMutationQuery: ResolversTypes['MutationType'];
  CityLcQuery: ResolversTypes['QueryType'];
  CityList: ResolverTypeWrapper<CityList>;
  CityMutationQuery: ResolversTypes['MutationType'];
  CityQuery: ResolversTypes['QueryType'];
  CitySortOption: CitySortOption;
  ClientData: ResolverTypeWrapper<ClientData>;
  ClientDataConnection: ResolverTypeWrapper<ClientDataConnection>;
  ClientDataEdge: ResolverTypeWrapper<ClientDataEdge>;
  ClientDataInput: ClientDataInput;
  ClientDataMutationQuery: ResolversTypes['MutationType'];
  ClientDataQuery: ResolversTypes['QueryType'];
  Comment: ResolverTypeWrapper<Comment>;
  CommentConnection: ResolverTypeWrapper<CommentConnection>;
  CommentEdge: ResolverTypeWrapper<CommentEdge>;
  CommentInput: CommentInput;
  CommentMetaType: ResolverTypeWrapper<CommentMetaType>;
  CommentMutationQuery: ResolversTypes['MutationType'];
  CommentQuery: ResolversTypes['QueryType'];
  CommitteeAggregation: ResolverTypeWrapper<CommitteeAggregation>;
  CommitteeAggregationConnection: ResolverTypeWrapper<CommitteeAggregationConnection>;
  CommitteeAggregationEdge: ResolverTypeWrapper<CommitteeAggregationEdge>;
  CommitteeCityInput: CommitteeCityInput;
  CommitteeDepartmentInput: CommitteeDepartmentInput;
  CommitteeDepartmentMutationQuery: ResolversTypes['MutationType'];
  CommitteeDepartmentType: ResolverTypeWrapper<CommitteeDepartmentType>;
  CommitteeDepartmentTypeConnection: ResolverTypeWrapper<CommitteeDepartmentTypeConnection>;
  CommitteeDepartmentTypeEdge: ResolverTypeWrapper<CommitteeDepartmentTypeEdge>;
  CommitteeMutationQuery: ResolversTypes['MutationType'];
  CommitteePayment: ResolverTypeWrapper<CommitteePayment>;
  CommitteePaymentInput: CommitteePaymentInput;
  CommitteeQuery: ResolversTypes['QueryType'];
  CommitteeTarget: ResolverTypeWrapper<CommitteeTarget>;
  CommitteeTargetConnection: ResolverTypeWrapper<CommitteeTargetConnection>;
  CommitteeTargetEdge: ResolverTypeWrapper<CommitteeTargetEdge>;
  CommitteeTargetInput: CommitteeTargetInput;
  CommitteeTargetMutationQuery: ResolversTypes['MutationType'];
  CommitteeTermInput: CommitteeTermInput;
  CommitteeTermType: ResolverTypeWrapper<CommitteeTermType>;
  CompanyFilter: CompanyFilter;
  CompanyInput: CompanyInput;
  CompanyList: ResolverTypeWrapper<CompanyList>;
  CompanyMetaType: ResolverTypeWrapper<CompanyMetaType>;
  CompanySortOption: CompanySortOption;
  Constant: ResolverTypeWrapper<Constant>;
  ConstantMap: ResolverTypeWrapper<ConstantMap>;
  ConstantMapInput: ConstantMapInput;
  ConstantSortOption: ConstantSortOption;
  Constants: ResolversTypes['QueryType'];
  ConstantsSortOption: ConstantsSortOption;
  ContactInfo: ResolverTypeWrapper<ContactInfo>;
  ContactInput: ContactInput;
  ContactPeopleInput: ContactPeopleInput;
  ContactPeopleType: ResolverTypeWrapper<ContactPeopleType>;
  Contract: ResolverTypeWrapper<Contract>;
  Conversation: ResolverTypeWrapper<Omit<Conversation, 'contextable'> & { contextable?: Maybe<ResolversTypes['PersonApplicationUnion']> }>;
  ConversationConnection: ResolverTypeWrapper<ConversationConnection>;
  ConversationEdge: ResolverTypeWrapper<ConversationEdge>;
  ConversationParticipant: ResolverTypeWrapper<ConversationParticipant>;
  ConversationParticipantPerson: ResolverTypeWrapper<ConversationParticipantPerson>;
  ConversationQuery: ResolversTypes['QueryType'];
  CounterData: ResolverTypeWrapper<CounterData>;
  Currency: ResolverTypeWrapper<Currency>;
  CurrentPerson: ResolverTypeWrapper<CurrentPerson>;
  CurrentPersonInput: CurrentPersonInput;
  CurrentPersonMutationQuery: ResolversTypes['MutationType'];
  CurrentPersonQuery: ResolversTypes['QueryType'];
  CustomStatusInput: CustomStatusInput;
  CustomStatusType: ResolverTypeWrapper<CustomStatusType>;
  CustomStatusTypeConnection: ResolverTypeWrapper<CustomStatusTypeConnection>;
  CustomStatusTypeEdge: ResolverTypeWrapper<CustomStatusTypeEdge>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateInput: DateInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeliverablesInput: DeliverablesInput;
  EmployeeDetailsType: ResolverTypeWrapper<EmployeeDetailsType>;
  EmployeeLead: ResolverTypeWrapper<EmployeeLead>;
  EmployeeLeadFilter: EmployeeLeadFilter;
  EmployeeLeadInput: EmployeeLeadInput;
  EmployeeLeadList: ResolverTypeWrapper<EmployeeLeadList>;
  EmployeeLeadMutationQuery: ResolversTypes['MutationType'];
  EmployeeLeadPermissionType: ResolverTypeWrapper<EmployeeLeadPermissionType>;
  EmployeeLeadQuery: ResolversTypes['QueryType'];
  EmployeeLeadSortOption: EmployeeLeadSortOption;
  Engagement: ResolverTypeWrapper<Engagement>;
  EngagementConnection: ResolverTypeWrapper<EngagementConnection>;
  EngagementEdge: ResolverTypeWrapper<EngagementEdge>;
  EngagementInput: EngagementInput;
  EngagementMutationQuery: ResolversTypes['MutationType'];
  EngagementPermissionType: ResolverTypeWrapper<EngagementPermissionType>;
  EntityGoal: ResolverTypeWrapper<EntityGoal>;
  EntityPlan: ResolverTypeWrapper<EntityPlan>;
  EntityPlanQuery: ResolversTypes['QueryType'];
  Event: ResolverTypeWrapper<Event>;
  EventFilter: EventFilter;
  EventInput: EventInput;
  EventList: ResolverTypeWrapper<EventList>;
  EventMutationQueryType: ResolversTypes['MutationType'];
  EventPermissionType: ResolverTypeWrapper<EventPermissionType>;
  EventQuery: ResolversTypes['QueryType'];
  EventRegistration: ResolverTypeWrapper<EventRegistration>;
  EventRegistrationFilter: EventRegistrationFilter;
  EventRegistrationInput: EventRegistrationInput;
  EventRegistrationList: ResolverTypeWrapper<EventRegistrationList>;
  EventRegistrationMutationQueryType: ResolversTypes['MutationType'];
  EventRegistrationPermissionType: ResolverTypeWrapper<EventRegistrationPermissionType>;
  EventRegistrationQuery: ResolversTypes['QueryType'];
  EventSpeaker: ResolverTypeWrapper<EventSpeaker>;
  EventSpeakerConnection: ResolverTypeWrapper<EventSpeakerConnection>;
  EventSpeakerEdge: ResolverTypeWrapper<EventSpeakerEdge>;
  EventSpeakerInput: EventSpeakerInput;
  EventSpeakerMutationQueryType: ResolversTypes['MutationType'];
  EventTicket: ResolverTypeWrapper<EventTicket>;
  EventTicketConnection: ResolverTypeWrapper<EventTicketConnection>;
  EventTicketEdge: ResolverTypeWrapper<EventTicketEdge>;
  EventTicketInput: EventTicketInput;
  EventTicketMutationQueryType: ResolversTypes['MutationType'];
  ExchangeType: ExchangeType;
  ExpaSettings: ResolverTypeWrapper<ExpaSettings>;
  ExpaSettingsInput: ExpaSettingsInput;
  Facets: ResolverTypeWrapper<Facets>;
  Favourite: ResolverTypeWrapper<Favourite>;
  Feature: ResolverTypeWrapper<Feature>;
  FieldInput: FieldInput;
  File: ResolverTypeWrapper<File>;
  FileImportMutationQuery: ResolversTypes['MutationType'];
  FileImportType: FileImportType;
  FileInput: FileInput;
  FindLcQuery: ResolversTypes['QueryType'];
  FlightDetailsInput: FlightDetailsInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GenerateEmail: ResolverTypeWrapper<GenerateEmail>;
  GlobalPartnerRequestInput: GlobalPartnerRequestInput;
  GlobalPartnerRequestMutationQueryType: ResolversTypes['MutationType'];
  GlobalPartnerRequestQuery: ResolversTypes['QueryType'];
  GlobalPartnerRequestType: ResolverTypeWrapper<GlobalPartnerRequestType>;
  GoalSettingFilter: GoalSettingFilter;
  GoalType: GoalType;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Image: ResolversTypes['QueryType'];
  ImageInput: ImageInput;
  ImageType: ResolverTypeWrapper<ImageType>;
  InboundEmailInput: InboundEmailInput;
  InboundEmailType: ResolverTypeWrapper<InboundEmailType>;
  IncomingProgrammeFeeInput: IncomingProgrammeFeeInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  InterviewDetailsType: ResolverTypeWrapper<InterviewDetailsType>;
  InterviewSlot: ResolverTypeWrapper<InterviewSlot>;
  InterviewSlotInput: InterviewSlotInput;
  Invitation: ResolverTypeWrapper<Invitation>;
  InvitePersonInput: InvitePersonInput;
  InvoiceInput: InvoiceInput;
  InvoiceMutationQuery: ResolversTypes['MutationType'];
  InvoiceQuery: ResolversTypes['QueryType'];
  InvoiceType: ResolverTypeWrapper<InvoiceType>;
  InvoiceTypeConnection: ResolverTypeWrapper<InvoiceTypeConnection>;
  InvoiceTypeEdge: ResolverTypeWrapper<InvoiceTypeEdge>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  LcAlignment: ResolverTypeWrapper<LcAlignment>;
  LcAlignmentInput: LcAlignmentInput;
  LcAlignmentsMutationQueryType: ResolversTypes['MutationType'];
  LcAlignmentsQueryType: ResolversTypes['QueryType'];
  LdaQuery: ResolversTypes['QueryType'];
  LdaResponse: ResolverTypeWrapper<LdaResponse>;
  LdaResponseInput: LdaResponseInput;
  LdaResponseMutationQuery: ResolversTypes['MutationType'];
  LdmQuery: ResolversTypes['QueryType'];
  LdmResponse: ResolverTypeWrapper<LdmResponse>;
  LdmResponseInput: LdmResponseInput;
  LdmResponseMutationQueryType: ResolversTypes['MutationType'];
  LegalInfoInput: LegalInfoInput;
  LegalInfoType: ResolverTypeWrapper<LegalInfoType>;
  List: ResolversTypes['QueryType'];
  LogisticInfoType: ResolverTypeWrapper<LogisticInfoType>;
  LogisticsInfoInput: LogisticsInfoInput;
  MailTemplate: ResolverTypeWrapper<MailTemplate>;
  MailTemplateDeliverabilityReport: ResolverTypeWrapper<MailTemplateDeliverabilityReport>;
  MailTemplateInput: MailTemplateInput;
  MailTemplateMutationQueryType: ResolversTypes['MutationType'];
  MailTemplateQueryType: ResolversTypes['QueryType'];
  Manager: ResolverTypeWrapper<Manager>;
  McFeature: ResolverTypeWrapper<McFeature>;
  McFeatureQuery: ResolversTypes['QueryType'];
  MemberLead: ResolverTypeWrapper<MemberLead>;
  MemberLeadFilter: MemberLeadFilter;
  MemberLeadInput: MemberLeadInput;
  MemberLeadList: ResolverTypeWrapper<MemberLeadList>;
  MemberLeadMutationQuery: ResolversTypes['MutationType'];
  MemberLeadPermissionType: ResolverTypeWrapper<MemberLeadPermissionType>;
  MemberLeadQuery: ResolversTypes['QueryType'];
  MemberLeadSortOption: MemberLeadSortOption;
  MemberPosition: ResolverTypeWrapper<MemberPosition>;
  MemberPositionConnection: ResolverTypeWrapper<MemberPositionConnection>;
  MemberPositionEdge: ResolverTypeWrapper<MemberPositionEdge>;
  MemberPositionFilter: MemberPositionFilter;
  MemberPositionInput: MemberPositionInput;
  MemberPositionList: ResolverTypeWrapper<MemberPositionList>;
  MemberPositionMutationQuery: ResolversTypes['MutationType'];
  MemberPositionPermission: ResolverTypeWrapper<MemberPositionPermission>;
  MemberPositionQuery: ResolversTypes['QueryType'];
  Message: ResolverTypeWrapper<Message>;
  MessageConnection: ResolverTypeWrapper<MessageConnection>;
  MessageEdge: ResolverTypeWrapper<MessageEdge>;
  MutationType: ResolverTypeWrapper<{}>;
  NationalPartnerInput: NationalPartnerInput;
  NationalPartnerMutationQuery: ResolversTypes['MutationType'];
  NationalPartnerQuery: ResolversTypes['QueryType'];
  NationalPartnerType: ResolverTypeWrapper<NationalPartnerType>;
  NewApplicationQuestionnaire: NewApplicationQuestionnaire;
  Node: ResolversTypes['Notification'] | ResolversTypes['SavedFilter'];
  Notification: ResolverTypeWrapper<Omit<Notification, 'notifiable'> & { notifiable?: Maybe<ResolversTypes['PersonApplicationUnion']> }>;
  NotificationFilter: NotificationFilter;
  NotificationList: ResolverTypeWrapper<NotificationList>;
  NotificationMutationQuery: ResolversTypes['MutationType'];
  NotificationSettingsInput: NotificationSettingsInput;
  NotificationsQuery: ResolversTypes['QueryType'];
  NpsResponseType: ResolverTypeWrapper<NpsResponseType>;
  Office: ResolverTypeWrapper<Office>;
  OfficeBasic: ResolverTypeWrapper<OfficeBasic>;
  OfficeBasicDetails: ResolverTypeWrapper<OfficeBasicDetails>;
  OfficeBasicList: ResolverTypeWrapper<OfficeBasicList>;
  OfficeConnection: ResolverTypeWrapper<OfficeConnection>;
  OfficeEdge: ResolverTypeWrapper<OfficeEdge>;
  OfficeFilter: OfficeFilter;
  OfficeId: ResolverTypeWrapper<OfficeId>;
  OfficeInput: OfficeInput;
  OfficeList: ResolverTypeWrapper<OfficeList>;
  OfficeMcAlignment: ResolverTypeWrapper<OfficeMcAlignment>;
  OfficePermissionType: ResolverTypeWrapper<OfficePermissionType>;
  OfficeSortOption: OfficeSortOption;
  OfflineAssessment: ResolverTypeWrapper<OfflineAssessment>;
  OfflineAssessmentInput: OfflineAssessmentInput;
  Opportunity: ResolverTypeWrapper<Opportunity>;
  OpportunityApplication: ResolverTypeWrapper<OpportunityApplication>;
  OpportunityApplicationConnection: ResolverTypeWrapper<OpportunityApplicationConnection>;
  OpportunityApplicationEdge: ResolverTypeWrapper<OpportunityApplicationEdge>;
  OpportunityApplicationInput: OpportunityApplicationInput;
  OpportunityApplicationList: ResolverTypeWrapper<OpportunityApplicationList>;
  OpportunityApplicationMutationQuery: ResolversTypes['MutationType'];
  OpportunityApplicationPermissionType: ResolverTypeWrapper<OpportunityApplicationPermissionType>;
  OpportunityApplicationQuery: ResolversTypes['QueryType'];
  OpportunityApplicationQuestionnaireInput: OpportunityApplicationQuestionnaireInput;
  OpportunityConnection: ResolverTypeWrapper<OpportunityConnection>;
  OpportunityDurationType: ResolverTypeWrapper<OpportunityDurationType>;
  OpportunityDurationTypeQuery: ResolversTypes['QueryType'];
  OpportunityEdge: ResolverTypeWrapper<OpportunityEdge>;
  OpportunityFilter: OpportunityFilter;
  OpportunityInput: OpportunityInput;
  OpportunityList: ResolverTypeWrapper<OpportunityList>;
  OpportunityMetaInput: OpportunityMetaInput;
  OpportunityMetaType: ResolverTypeWrapper<OpportunityMetaType>;
  OpportunityMutationQuery: ResolversTypes['MutationType'];
  OpportunityPermissionType: ResolverTypeWrapper<OpportunityPermissionType>;
  OpportunityPotentialCandidate: OpportunityPotentialCandidate;
  OpportunityPotentialCandidateQuery: ResolversTypes['QueryType'];
  OpportunityPotentialCandidateQueryType: ResolversTypes['MutationType'];
  OpportunityPotentialCandidateType: ResolverTypeWrapper<OpportunityPotentialCandidateType>;
  OpportunityQuery: ResolversTypes['QueryType'];
  OpportunityQuestion: ResolverTypeWrapper<OpportunityQuestion>;
  OpportunityQuestionConnection: ResolverTypeWrapper<OpportunityQuestionConnection>;
  OpportunityQuestionEdge: ResolverTypeWrapper<OpportunityQuestionEdge>;
  OpportunityQuestionInput: OpportunityQuestionInput;
  OpportunitySortOption: OpportunitySortOption;
  OpportunityTransparentFeeDetailsInput: OpportunityTransparentFeeDetailsInput;
  OpportunityTransparentFeeDetailsType: ResolverTypeWrapper<OpportunityTransparentFeeDetailsType>;
  Organisation: ResolverTypeWrapper<Organisation>;
  OrganisationMutationQuery: ResolversTypes['MutationType'];
  OrganisationPermissionType: ResolverTypeWrapper<OrganisationPermissionType>;
  OrganisationQuery: ResolversTypes['QueryType'];
  OrganizationDevelopment: ResolverTypeWrapper<OrganizationDevelopment>;
  OrganizationDevelopmentInput: OrganizationDevelopmentInput;
  OrganizationDevelopmentMutationQuery: ResolversTypes['MutationType'];
  OrganizationDevelopmentQuery: ResolversTypes['QueryType'];
  OrganizationDevelopmentTarget: ResolverTypeWrapper<OrganizationDevelopmentTarget>;
  OrganizationDevelopmentTargetInput: OrganizationDevelopmentTargetInput;
  PageComponentDraftType: ResolverTypeWrapper<PageComponentDraftType>;
  PageComponentInput: PageComponentInput;
  PageComponentMutationQuery: ResolversTypes['MutationType'];
  PageComponentType: ResolverTypeWrapper<PageComponentType>;
  PageComponentTypeConnection: ResolverTypeWrapper<PageComponentTypeConnection>;
  PageComponentTypeEdge: ResolverTypeWrapper<PageComponentTypeEdge>;
  PageFilter: PageFilter;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PageInput: PageInput;
  PageList: ResolverTypeWrapper<PageList>;
  PageMutationQuery: ResolversTypes['MutationType'];
  PagePermissionType: ResolverTypeWrapper<PagePermissionType>;
  PageQuery: ResolversTypes['QueryType'];
  PageSortOption: PageSortOption;
  PageType: ResolverTypeWrapper<PageType>;
  Pagination: Pagination;
  Paging: ResolverTypeWrapper<Paging>;
  PartnerSignup: ResolverTypeWrapper<PartnerSignup>;
  PartnerSignupInput: PartnerSignupInput;
  PartnerSignupMutationQuery: ResolversTypes['MutationType'];
  PartnerTypes: PartnerTypes;
  PeopleAutocompleteQuery: ResolversTypes['QueryType'];
  PeopleFilter: PeopleFilter;
  PeopleSortOption: PeopleSortOption;
  Person: ResolverTypeWrapper<Person>;
  PersonAcademicInput: PersonAcademicInput;
  PersonApplicationUnion: ResolversTypes['Branch'] | ResolversTypes['BranchEmployee'] | ResolversTypes['Opportunity'] | ResolversTypes['OpportunityApplication'] | ResolversTypes['Person'];
  PersonConnection: ResolverTypeWrapper<PersonConnection>;
  PersonEdge: ResolverTypeWrapper<PersonEdge>;
  PersonInput: PersonInput;
  PersonList: ResolverTypeWrapper<PersonList>;
  PersonMetaInput: PersonMetaInput;
  PersonMetaType: ResolverTypeWrapper<PersonMetaType>;
  PersonMutationQuery: ResolversTypes['MutationType'];
  PersonPermissionType: ResolverTypeWrapper<PersonPermissionType>;
  PersonProfessionalInput: PersonProfessionalInput;
  PersonProfile: ResolverTypeWrapper<PersonProfile>;
  PersonQuery: ResolversTypes['QueryType'];
  Picture: ResolverTypeWrapper<Picture>;
  PictureInput: PictureInput;
  Plan: ResolverTypeWrapper<Plan>;
  PlanInput: PlanInput;
  PlanMutationQuery: ResolversTypes['MutationType'];
  PlanQuery: ResolversTypes['QueryType'];
  PlatformNpsInput: PlatformNpsInput;
  PlatformNpsResponseMutationQueryType: ResolversTypes['MutationType'];
  PlatformNpsResponseQueryType: ResolversTypes['QueryType'];
  Position: ResolverTypeWrapper<Position>;
  PositionConnection: ResolverTypeWrapper<PositionConnection>;
  PositionEdge: ResolverTypeWrapper<PositionEdge>;
  PositionInput: PositionInput;
  PositionMutationQuery: ResolversTypes['MutationType'];
  PositionQuery: ResolversTypes['QueryType'];
  PreviousExperience: ResolverTypeWrapper<PreviousExperience>;
  ProfessionalExperience: ResolverTypeWrapper<ProfessionalExperience>;
  ProfileCompleteness: ResolverTypeWrapper<ProfileCompleteness>;
  ProfileInput: ProfileInput;
  Programme: ResolverTypeWrapper<Programme>;
  ProgrammeFee: ResolverTypeWrapper<ProgrammeFee>;
  ProgrammeFeeBasic: ResolverTypeWrapper<ProgrammeFeeBasic>;
  ProgrammeFeeBasicConnection: ResolverTypeWrapper<ProgrammeFeeBasicConnection>;
  ProgrammeFeeBasicEdge: ResolverTypeWrapper<ProgrammeFeeBasicEdge>;
  ProgrammeFeeConnection: ResolverTypeWrapper<ProgrammeFeeConnection>;
  ProgrammeFeeEdge: ResolverTypeWrapper<ProgrammeFeeEdge>;
  ProgrammeFeeInput: ProgrammeFeeInput;
  ProgrammeFeeMutationQuery: ResolversTypes['MutationType'];
  ProgrammeFeeQueryType: ResolversTypes['QueryType'];
  ProgrammeId: ResolverTypeWrapper<ProgrammeId>;
  ProgrammeManager: ResolverTypeWrapper<ProgrammeManager>;
  ProgrammeManagerMutationQuery: ResolversTypes['MutationType'];
  ProjectInput: ProjectInput;
  QueryType: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<Question>;
  QuestionInput: QuestionInput;
  Questionnaire: ResolverTypeWrapper<Questionnaire>;
  QuestionnaireConnection: ResolverTypeWrapper<QuestionnaireConnection>;
  QuestionnaireEdge: ResolverTypeWrapper<QuestionnaireEdge>;
  QuestionnaireInput: QuestionnaireInput;
  QuestionnaireMutationQuery: ResolversTypes['MutationType'];
  QuestionnairePermissionType: ResolverTypeWrapper<QuestionnairePermissionType>;
  RangeInput: RangeInput;
  RejectionUpdatesInput: RejectionUpdatesInput;
  RemoteExperienceInput: RemoteExperienceInput;
  ResponseInput: ResponseInput;
  RoleInfoInput: RoleInfoInput;
  RoleInfoType: ResolverTypeWrapper<RoleInfoType>;
  SavedFilter: ResolverTypeWrapper<SavedFilter>;
  SavedFilterConnection: ResolverTypeWrapper<SavedFilterConnection>;
  SavedFilterEdge: ResolverTypeWrapper<SavedFilterEdge>;
  SavedFilterInput: SavedFilterInput;
  Scorecard: ResolverTypeWrapper<Scorecard>;
  ScorecardAttributeInput: ScorecardAttributeInput;
  ScorecardAttributePermissionType: ResolverTypeWrapper<ScorecardAttributePermissionType>;
  ScorecardAttributeType: ResolverTypeWrapper<ScorecardAttributeType>;
  ScorecardConnection: ResolverTypeWrapper<ScorecardConnection>;
  ScorecardEdge: ResolverTypeWrapper<ScorecardEdge>;
  ScorecardInput: ScorecardInput;
  ScorecardPermissionType: ResolverTypeWrapper<ScorecardPermissionType>;
  ScorecardQuery: ResolversTypes['QueryType'];
  Sdg: ResolverTypeWrapper<Sdg>;
  SdgInfoInput: SdgInfoInput;
  SdgTarget: ResolverTypeWrapper<SdgTarget>;
  SelectionProcess: ResolverTypeWrapper<SelectionProcess>;
  SelectionProcessConnection: ResolverTypeWrapper<SelectionProcessConnection>;
  SelectionProcessEdge: ResolverTypeWrapper<SelectionProcessEdge>;
  SelectionProcessInput: SelectionProcessInput;
  Slot: ResolverTypeWrapper<Slot>;
  SlotConnection: ResolverTypeWrapper<SlotConnection>;
  SlotEdge: ResolverTypeWrapper<SlotEdge>;
  SlotInput: SlotInput;
  SlotMutationQuery: ResolversTypes['MutationType'];
  SlotPermissionType: ResolverTypeWrapper<SlotPermissionType>;
  SlotSortOption: SlotSortOption;
  SpecificInfoType: ResolverTypeWrapper<SpecificInfoType>;
  SpecificsInfoInput: SpecificsInfoInput;
  StandardsSurvey: ResolverTypeWrapper<StandardsSurvey>;
  StandardsSurveyMutationQuery: ResolversTypes['MutationType'];
  StandardsSurveyQuery: ResolversTypes['QueryType'];
  StatusUpdatesInput: StatusUpdatesInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubProduct: ResolverTypeWrapper<SubProduct>;
  SubProductGroup: SubProductGroup;
  SubProducts: ResolversTypes['QueryType'];
  SuggestedCountry: ResolverTypeWrapper<SuggestedCountry>;
  SuggestedCountryInput: SuggestedCountryInput;
  SuggestedCountryMutationQuery: ResolversTypes['MutationType'];
  SuggestedCountryQuery: ResolversTypes['QueryType'];
  SuggestedOpportunitiesInput: SuggestedOpportunitiesInput;
  Survey: ResolverTypeWrapper<Survey>;
  SurveyDetails: ResolverTypeWrapper<SurveyDetails>;
  SurveyMutationQuery: ResolversTypes['MutationType'];
  SurveyQuery: ResolversTypes['QueryType'];
  SurveyQuestion: ResolverTypeWrapper<SurveyQuestion>;
  SurveyResponse: ResolverTypeWrapper<SurveyResponse>;
  SurveyResponseInput: SurveyResponseInput;
  TagList: ResolverTypeWrapper<TagList>;
  TagListAutocompleteQuery: ResolversTypes['QueryType'];
  TagListConnection: ResolverTypeWrapper<TagListConnection>;
  TagListEdge: ResolverTypeWrapper<TagListEdge>;
  TagListInput: TagListInput;
  TagListMutationQueryType: ResolversTypes['MutationType'];
  TagListQuery: ResolversTypes['QueryType'];
  Team: ResolverTypeWrapper<Team>;
  TeamConnection: ResolverTypeWrapper<TeamConnection>;
  TeamEdge: ResolverTypeWrapper<TeamEdge>;
  TeamInput: TeamInput;
  TeamMutationQuery: ResolversTypes['MutationType'];
  TeamPermissionType: ResolverTypeWrapper<TeamPermissionType>;
  TeamQuery: ResolversTypes['QueryType'];
  Term: ResolverTypeWrapper<Term>;
  TermDate: ResolverTypeWrapper<TermDate>;
  TermDatePermissionType: ResolverTypeWrapper<TermDatePermissionType>;
  TermInput: TermInput;
  TermMutationQuery: ResolversTypes['MutationType'];
  TermQuery: ResolversTypes['QueryType'];
  Testimonial: ResolverTypeWrapper<Testimonial>;
  TestimonialFilter: TestimonialFilter;
  TestimonialQuery: ResolversTypes['QueryType'];
  Timeline: ResolverTypeWrapper<Timeline>;
  TimelineInput: TimelineInput;
  TimelineMutationQuery: ResolversTypes['MutationType'];
  TimelineQuery: ResolversTypes['QueryType'];
  TmDetailType: ResolverTypeWrapper<TmDetailType>;
  TmDetailsInput: TmDetailsInput;
  Todo: ResolverTypeWrapper<Omit<Todo, 'todoable'> & { todoable?: Maybe<ResolversTypes['TodoableUnion']> }>;
  TodoConnection: ResolverTypeWrapper<TodoConnection>;
  TodoEdge: ResolverTypeWrapper<TodoEdge>;
  TodoFilter: TodoFilter;
  TodoInput: TodoInput;
  TodoList: ResolverTypeWrapper<TodoList>;
  TodoMetaType: ResolverTypeWrapper<TodoMetaType>;
  TodoMutationQuery: ResolversTypes['MutationType'];
  TodoQuery: ResolversTypes['QueryType'];
  TodoType: ResolverTypeWrapper<TodoType>;
  TodoableUnion: ResolversTypes['Accommodation'] | ResolversTypes['Event'] | ResolversTypes['Office'] | ResolversTypes['Opportunity'] | ResolversTypes['OpportunityApplication'] | ResolversTypes['Organisation'] | ResolversTypes['Person'];
  Transaction: ResolverTypeWrapper<Transaction>;
  UpdateCommitteeTargetInput: UpdateCommitteeTargetInput;
  UpdateQuestionInput: UpdateQuestionInput;
  UpdateSelectionProcessInput: UpdateSelectionProcessInput;
  UpdateSlotInput: UpdateSlotInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  WeeklyActivity: ResolverTypeWrapper<WeeklyActivity>;
  WeeklyActivityInput: WeeklyActivityInput;
  WorkScheduleInput: WorkScheduleInput;
  payment: ResolverTypeWrapper<Payment>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Accommodation: Accommodation;
  AccommodationAssignment: AccommodationAssignment;
  AccommodationAssignmentConnection: AccommodationAssignmentConnection;
  AccommodationAssignmentEdge: AccommodationAssignmentEdge;
  AccommodationAssignmentFilter: AccommodationAssignmentFilter;
  AccommodationAssignmentInput: AccommodationAssignmentInput;
  AccommodationAssignmentList: AccommodationAssignmentList;
  AccommodationAssignmentMutationQuery: ResolversParentTypes['MutationType'];
  AccommodationAssignmentQuery: ResolversParentTypes['QueryType'];
  AccommodationAvailability: AccommodationAvailability;
  AccommodationAvailabilityConnection: AccommodationAvailabilityConnection;
  AccommodationAvailabilityEdge: AccommodationAvailabilityEdge;
  AccommodationAvailabilityInput: AccommodationAvailabilityInput;
  AccommodationAvailabilityMutationQuery: ResolversParentTypes['MutationType'];
  AccommodationFilter: AccommodationFilter;
  AccommodationInput: AccommodationInput;
  AccommodationList: AccommodationList;
  AccommodationMutationQuery: ResolversParentTypes['MutationType'];
  AccommodationQuery: ResolversParentTypes['QueryType'];
  AddressInfo: AddressInfo;
  AddressInput: AddressInput;
  ApplicationFilter: ApplicationFilter;
  ApplicationMetaType: ApplicationMetaType;
  ApplicationQuestionnaire: ApplicationQuestionnaire;
  ApplicationQuestionnaireConnection: ApplicationQuestionnaireConnection;
  ApplicationQuestionnaireEdge: ApplicationQuestionnaireEdge;
  ApplicationQuestionnaireInput: ApplicationQuestionnaireInput;
  ApplicationRemoteRealizeInput: ApplicationRemoteRealizeInput;
  ApplicationScorecard: ApplicationScorecard;
  ApplicationScorecardAttributeType: ApplicationScorecardAttributeType;
  Attachment: Attachment;
  AttachmentInput: AttachmentInput;
  AttachmentMutationQuery: ResolversParentTypes['MutationType'];
  AttachmentQuery: ResolversParentTypes['QueryType'];
  Attendee: Attendee;
  AutoAssignmentInput: AutoAssignmentInput;
  AxpSettingsInput: AxpSettingsInput;
  BaseFilter: BaseFilter;
  Boolean: Scalars['Boolean'];
  Branch: Branch;
  BranchConnection: BranchConnection;
  BranchEdge: BranchEdge;
  BranchEmployee: BranchEmployee;
  BranchEmployeeConnection: BranchEmployeeConnection;
  BranchEmployeeEdge: BranchEmployeeEdge;
  BranchEmployeeInput: BranchEmployeeInput;
  BranchEmployeeMutationQuery: ResolversParentTypes['MutationType'];
  BranchEmployeeQuery: ResolversParentTypes['QueryType'];
  BranchInput: BranchInput;
  BranchMutationQuery: ResolversParentTypes['MutationType'];
  BranchPermissionType: BranchPermissionType;
  BranchQuery: ResolversParentTypes['QueryType'];
  CV: Cv;
  Campaign: Campaign;
  CampaignInput: CampaignInput;
  CampaignMutationQuery: ResolversParentTypes['MutationType'];
  CampaignQuery: ResolversParentTypes['QueryType'];
  ChecklistInput: ChecklistInput;
  ChecklistResponse: ChecklistResponse;
  City: City;
  CityFilter: CityFilter;
  CityInput: CityInput;
  CityLc: CityLc;
  CityLcInput: CityLcInput;
  CityLcMutationQuery: ResolversParentTypes['MutationType'];
  CityLcQuery: ResolversParentTypes['QueryType'];
  CityList: CityList;
  CityMutationQuery: ResolversParentTypes['MutationType'];
  CityQuery: ResolversParentTypes['QueryType'];
  ClientData: ClientData;
  ClientDataConnection: ClientDataConnection;
  ClientDataEdge: ClientDataEdge;
  ClientDataInput: ClientDataInput;
  ClientDataMutationQuery: ResolversParentTypes['MutationType'];
  ClientDataQuery: ResolversParentTypes['QueryType'];
  Comment: Comment;
  CommentConnection: CommentConnection;
  CommentEdge: CommentEdge;
  CommentInput: CommentInput;
  CommentMetaType: CommentMetaType;
  CommentMutationQuery: ResolversParentTypes['MutationType'];
  CommentQuery: ResolversParentTypes['QueryType'];
  CommitteeAggregation: CommitteeAggregation;
  CommitteeAggregationConnection: CommitteeAggregationConnection;
  CommitteeAggregationEdge: CommitteeAggregationEdge;
  CommitteeCityInput: CommitteeCityInput;
  CommitteeDepartmentInput: CommitteeDepartmentInput;
  CommitteeDepartmentMutationQuery: ResolversParentTypes['MutationType'];
  CommitteeDepartmentType: CommitteeDepartmentType;
  CommitteeDepartmentTypeConnection: CommitteeDepartmentTypeConnection;
  CommitteeDepartmentTypeEdge: CommitteeDepartmentTypeEdge;
  CommitteeMutationQuery: ResolversParentTypes['MutationType'];
  CommitteePayment: CommitteePayment;
  CommitteePaymentInput: CommitteePaymentInput;
  CommitteeQuery: ResolversParentTypes['QueryType'];
  CommitteeTarget: CommitteeTarget;
  CommitteeTargetConnection: CommitteeTargetConnection;
  CommitteeTargetEdge: CommitteeTargetEdge;
  CommitteeTargetInput: CommitteeTargetInput;
  CommitteeTargetMutationQuery: ResolversParentTypes['MutationType'];
  CommitteeTermInput: CommitteeTermInput;
  CommitteeTermType: CommitteeTermType;
  CompanyFilter: CompanyFilter;
  CompanyInput: CompanyInput;
  CompanyList: CompanyList;
  CompanyMetaType: CompanyMetaType;
  Constant: Constant;
  ConstantMap: ConstantMap;
  ConstantMapInput: ConstantMapInput;
  Constants: ResolversParentTypes['QueryType'];
  ConstantsSortOption: ConstantsSortOption;
  ContactInfo: ContactInfo;
  ContactInput: ContactInput;
  ContactPeopleInput: ContactPeopleInput;
  ContactPeopleType: ContactPeopleType;
  Contract: Contract;
  Conversation: Omit<Conversation, 'contextable'> & { contextable?: Maybe<ResolversParentTypes['PersonApplicationUnion']> };
  ConversationConnection: ConversationConnection;
  ConversationEdge: ConversationEdge;
  ConversationParticipant: ConversationParticipant;
  ConversationParticipantPerson: ConversationParticipantPerson;
  ConversationQuery: ResolversParentTypes['QueryType'];
  CounterData: CounterData;
  Currency: Currency;
  CurrentPerson: CurrentPerson;
  CurrentPersonInput: CurrentPersonInput;
  CurrentPersonMutationQuery: ResolversParentTypes['MutationType'];
  CurrentPersonQuery: ResolversParentTypes['QueryType'];
  CustomStatusInput: CustomStatusInput;
  CustomStatusType: CustomStatusType;
  CustomStatusTypeConnection: CustomStatusTypeConnection;
  CustomStatusTypeEdge: CustomStatusTypeEdge;
  Date: Scalars['Date'];
  DateInput: DateInput;
  DateTime: Scalars['DateTime'];
  DeliverablesInput: DeliverablesInput;
  EmployeeDetailsType: EmployeeDetailsType;
  EmployeeLead: EmployeeLead;
  EmployeeLeadFilter: EmployeeLeadFilter;
  EmployeeLeadInput: EmployeeLeadInput;
  EmployeeLeadList: EmployeeLeadList;
  EmployeeLeadMutationQuery: ResolversParentTypes['MutationType'];
  EmployeeLeadPermissionType: EmployeeLeadPermissionType;
  EmployeeLeadQuery: ResolversParentTypes['QueryType'];
  Engagement: Engagement;
  EngagementConnection: EngagementConnection;
  EngagementEdge: EngagementEdge;
  EngagementInput: EngagementInput;
  EngagementMutationQuery: ResolversParentTypes['MutationType'];
  EngagementPermissionType: EngagementPermissionType;
  EntityGoal: EntityGoal;
  EntityPlan: EntityPlan;
  EntityPlanQuery: ResolversParentTypes['QueryType'];
  Event: Event;
  EventFilter: EventFilter;
  EventInput: EventInput;
  EventList: EventList;
  EventMutationQueryType: ResolversParentTypes['MutationType'];
  EventPermissionType: EventPermissionType;
  EventQuery: ResolversParentTypes['QueryType'];
  EventRegistration: EventRegistration;
  EventRegistrationFilter: EventRegistrationFilter;
  EventRegistrationInput: EventRegistrationInput;
  EventRegistrationList: EventRegistrationList;
  EventRegistrationMutationQueryType: ResolversParentTypes['MutationType'];
  EventRegistrationPermissionType: EventRegistrationPermissionType;
  EventRegistrationQuery: ResolversParentTypes['QueryType'];
  EventSpeaker: EventSpeaker;
  EventSpeakerConnection: EventSpeakerConnection;
  EventSpeakerEdge: EventSpeakerEdge;
  EventSpeakerInput: EventSpeakerInput;
  EventSpeakerMutationQueryType: ResolversParentTypes['MutationType'];
  EventTicket: EventTicket;
  EventTicketConnection: EventTicketConnection;
  EventTicketEdge: EventTicketEdge;
  EventTicketInput: EventTicketInput;
  EventTicketMutationQueryType: ResolversParentTypes['MutationType'];
  ExpaSettings: ExpaSettings;
  ExpaSettingsInput: ExpaSettingsInput;
  Facets: Facets;
  Favourite: Favourite;
  Feature: Feature;
  FieldInput: FieldInput;
  File: File;
  FileImportMutationQuery: ResolversParentTypes['MutationType'];
  FileInput: FileInput;
  FindLcQuery: ResolversParentTypes['QueryType'];
  FlightDetailsInput: FlightDetailsInput;
  Float: Scalars['Float'];
  GenerateEmail: GenerateEmail;
  GlobalPartnerRequestInput: GlobalPartnerRequestInput;
  GlobalPartnerRequestMutationQueryType: ResolversParentTypes['MutationType'];
  GlobalPartnerRequestQuery: ResolversParentTypes['QueryType'];
  GlobalPartnerRequestType: GlobalPartnerRequestType;
  GoalSettingFilter: GoalSettingFilter;
  ID: Scalars['ID'];
  Image: ResolversParentTypes['QueryType'];
  ImageInput: ImageInput;
  ImageType: ImageType;
  InboundEmailInput: InboundEmailInput;
  InboundEmailType: InboundEmailType;
  IncomingProgrammeFeeInput: IncomingProgrammeFeeInput;
  Int: Scalars['Int'];
  InterviewDetailsType: InterviewDetailsType;
  InterviewSlot: InterviewSlot;
  InterviewSlotInput: InterviewSlotInput;
  Invitation: Invitation;
  InvitePersonInput: InvitePersonInput;
  InvoiceInput: InvoiceInput;
  InvoiceMutationQuery: ResolversParentTypes['MutationType'];
  InvoiceQuery: ResolversParentTypes['QueryType'];
  InvoiceType: InvoiceType;
  InvoiceTypeConnection: InvoiceTypeConnection;
  InvoiceTypeEdge: InvoiceTypeEdge;
  JSON: Scalars['JSON'];
  LcAlignment: LcAlignment;
  LcAlignmentInput: LcAlignmentInput;
  LcAlignmentsMutationQueryType: ResolversParentTypes['MutationType'];
  LcAlignmentsQueryType: ResolversParentTypes['QueryType'];
  LdaQuery: ResolversParentTypes['QueryType'];
  LdaResponse: LdaResponse;
  LdaResponseInput: LdaResponseInput;
  LdaResponseMutationQuery: ResolversParentTypes['MutationType'];
  LdmQuery: ResolversParentTypes['QueryType'];
  LdmResponse: LdmResponse;
  LdmResponseInput: LdmResponseInput;
  LdmResponseMutationQueryType: ResolversParentTypes['MutationType'];
  LegalInfoInput: LegalInfoInput;
  LegalInfoType: LegalInfoType;
  List: ResolversParentTypes['QueryType'];
  LogisticInfoType: LogisticInfoType;
  LogisticsInfoInput: LogisticsInfoInput;
  MailTemplate: MailTemplate;
  MailTemplateDeliverabilityReport: MailTemplateDeliverabilityReport;
  MailTemplateInput: MailTemplateInput;
  MailTemplateMutationQueryType: ResolversParentTypes['MutationType'];
  MailTemplateQueryType: ResolversParentTypes['QueryType'];
  Manager: Manager;
  McFeature: McFeature;
  McFeatureQuery: ResolversParentTypes['QueryType'];
  MemberLead: MemberLead;
  MemberLeadFilter: MemberLeadFilter;
  MemberLeadInput: MemberLeadInput;
  MemberLeadList: MemberLeadList;
  MemberLeadMutationQuery: ResolversParentTypes['MutationType'];
  MemberLeadPermissionType: MemberLeadPermissionType;
  MemberLeadQuery: ResolversParentTypes['QueryType'];
  MemberPosition: MemberPosition;
  MemberPositionConnection: MemberPositionConnection;
  MemberPositionEdge: MemberPositionEdge;
  MemberPositionFilter: MemberPositionFilter;
  MemberPositionInput: MemberPositionInput;
  MemberPositionList: MemberPositionList;
  MemberPositionMutationQuery: ResolversParentTypes['MutationType'];
  MemberPositionPermission: MemberPositionPermission;
  MemberPositionQuery: ResolversParentTypes['QueryType'];
  Message: Message;
  MessageConnection: MessageConnection;
  MessageEdge: MessageEdge;
  MutationType: {};
  NationalPartnerInput: NationalPartnerInput;
  NationalPartnerMutationQuery: ResolversParentTypes['MutationType'];
  NationalPartnerQuery: ResolversParentTypes['QueryType'];
  NationalPartnerType: NationalPartnerType;
  NewApplicationQuestionnaire: NewApplicationQuestionnaire;
  Node: ResolversParentTypes['Notification'] | ResolversParentTypes['SavedFilter'];
  Notification: Omit<Notification, 'notifiable'> & { notifiable?: Maybe<ResolversParentTypes['PersonApplicationUnion']> };
  NotificationFilter: NotificationFilter;
  NotificationList: NotificationList;
  NotificationMutationQuery: ResolversParentTypes['MutationType'];
  NotificationSettingsInput: NotificationSettingsInput;
  NotificationsQuery: ResolversParentTypes['QueryType'];
  NpsResponseType: NpsResponseType;
  Office: Office;
  OfficeBasic: OfficeBasic;
  OfficeBasicDetails: OfficeBasicDetails;
  OfficeBasicList: OfficeBasicList;
  OfficeConnection: OfficeConnection;
  OfficeEdge: OfficeEdge;
  OfficeFilter: OfficeFilter;
  OfficeId: OfficeId;
  OfficeInput: OfficeInput;
  OfficeList: OfficeList;
  OfficeMcAlignment: OfficeMcAlignment;
  OfficePermissionType: OfficePermissionType;
  OfflineAssessment: OfflineAssessment;
  OfflineAssessmentInput: OfflineAssessmentInput;
  Opportunity: Opportunity;
  OpportunityApplication: OpportunityApplication;
  OpportunityApplicationConnection: OpportunityApplicationConnection;
  OpportunityApplicationEdge: OpportunityApplicationEdge;
  OpportunityApplicationInput: OpportunityApplicationInput;
  OpportunityApplicationList: OpportunityApplicationList;
  OpportunityApplicationMutationQuery: ResolversParentTypes['MutationType'];
  OpportunityApplicationPermissionType: OpportunityApplicationPermissionType;
  OpportunityApplicationQuery: ResolversParentTypes['QueryType'];
  OpportunityApplicationQuestionnaireInput: OpportunityApplicationQuestionnaireInput;
  OpportunityConnection: OpportunityConnection;
  OpportunityDurationType: OpportunityDurationType;
  OpportunityDurationTypeQuery: ResolversParentTypes['QueryType'];
  OpportunityEdge: OpportunityEdge;
  OpportunityFilter: OpportunityFilter;
  OpportunityInput: OpportunityInput;
  OpportunityList: OpportunityList;
  OpportunityMetaInput: OpportunityMetaInput;
  OpportunityMetaType: OpportunityMetaType;
  OpportunityMutationQuery: ResolversParentTypes['MutationType'];
  OpportunityPermissionType: OpportunityPermissionType;
  OpportunityPotentialCandidate: OpportunityPotentialCandidate;
  OpportunityPotentialCandidateQuery: ResolversParentTypes['QueryType'];
  OpportunityPotentialCandidateQueryType: ResolversParentTypes['MutationType'];
  OpportunityPotentialCandidateType: OpportunityPotentialCandidateType;
  OpportunityQuery: ResolversParentTypes['QueryType'];
  OpportunityQuestion: OpportunityQuestion;
  OpportunityQuestionConnection: OpportunityQuestionConnection;
  OpportunityQuestionEdge: OpportunityQuestionEdge;
  OpportunityQuestionInput: OpportunityQuestionInput;
  OpportunityTransparentFeeDetailsInput: OpportunityTransparentFeeDetailsInput;
  OpportunityTransparentFeeDetailsType: OpportunityTransparentFeeDetailsType;
  Organisation: Organisation;
  OrganisationMutationQuery: ResolversParentTypes['MutationType'];
  OrganisationPermissionType: OrganisationPermissionType;
  OrganisationQuery: ResolversParentTypes['QueryType'];
  OrganizationDevelopment: OrganizationDevelopment;
  OrganizationDevelopmentInput: OrganizationDevelopmentInput;
  OrganizationDevelopmentMutationQuery: ResolversParentTypes['MutationType'];
  OrganizationDevelopmentQuery: ResolversParentTypes['QueryType'];
  OrganizationDevelopmentTarget: OrganizationDevelopmentTarget;
  OrganizationDevelopmentTargetInput: OrganizationDevelopmentTargetInput;
  PageComponentDraftType: PageComponentDraftType;
  PageComponentInput: PageComponentInput;
  PageComponentMutationQuery: ResolversParentTypes['MutationType'];
  PageComponentType: PageComponentType;
  PageComponentTypeConnection: PageComponentTypeConnection;
  PageComponentTypeEdge: PageComponentTypeEdge;
  PageFilter: PageFilter;
  PageInfo: PageInfo;
  PageInput: PageInput;
  PageList: PageList;
  PageMutationQuery: ResolversParentTypes['MutationType'];
  PagePermissionType: PagePermissionType;
  PageQuery: ResolversParentTypes['QueryType'];
  PageType: PageType;
  Pagination: Pagination;
  Paging: Paging;
  PartnerSignup: PartnerSignup;
  PartnerSignupInput: PartnerSignupInput;
  PartnerSignupMutationQuery: ResolversParentTypes['MutationType'];
  PeopleAutocompleteQuery: ResolversParentTypes['QueryType'];
  PeopleFilter: PeopleFilter;
  Person: Person;
  PersonAcademicInput: PersonAcademicInput;
  PersonApplicationUnion: ResolversParentTypes['Branch'] | ResolversParentTypes['BranchEmployee'] | ResolversParentTypes['Opportunity'] | ResolversParentTypes['OpportunityApplication'] | ResolversParentTypes['Person'];
  PersonConnection: PersonConnection;
  PersonEdge: PersonEdge;
  PersonInput: PersonInput;
  PersonList: PersonList;
  PersonMetaInput: PersonMetaInput;
  PersonMetaType: PersonMetaType;
  PersonMutationQuery: ResolversParentTypes['MutationType'];
  PersonPermissionType: PersonPermissionType;
  PersonProfessionalInput: PersonProfessionalInput;
  PersonProfile: PersonProfile;
  PersonQuery: ResolversParentTypes['QueryType'];
  Picture: Picture;
  PictureInput: PictureInput;
  Plan: Plan;
  PlanInput: PlanInput;
  PlanMutationQuery: ResolversParentTypes['MutationType'];
  PlanQuery: ResolversParentTypes['QueryType'];
  PlatformNpsInput: PlatformNpsInput;
  PlatformNpsResponseMutationQueryType: ResolversParentTypes['MutationType'];
  PlatformNpsResponseQueryType: ResolversParentTypes['QueryType'];
  Position: Position;
  PositionConnection: PositionConnection;
  PositionEdge: PositionEdge;
  PositionInput: PositionInput;
  PositionMutationQuery: ResolversParentTypes['MutationType'];
  PositionQuery: ResolversParentTypes['QueryType'];
  PreviousExperience: PreviousExperience;
  ProfessionalExperience: ProfessionalExperience;
  ProfileCompleteness: ProfileCompleteness;
  ProfileInput: ProfileInput;
  Programme: Programme;
  ProgrammeFee: ProgrammeFee;
  ProgrammeFeeBasic: ProgrammeFeeBasic;
  ProgrammeFeeBasicConnection: ProgrammeFeeBasicConnection;
  ProgrammeFeeBasicEdge: ProgrammeFeeBasicEdge;
  ProgrammeFeeConnection: ProgrammeFeeConnection;
  ProgrammeFeeEdge: ProgrammeFeeEdge;
  ProgrammeFeeInput: ProgrammeFeeInput;
  ProgrammeFeeMutationQuery: ResolversParentTypes['MutationType'];
  ProgrammeFeeQueryType: ResolversParentTypes['QueryType'];
  ProgrammeId: ProgrammeId;
  ProgrammeManager: ProgrammeManager;
  ProgrammeManagerMutationQuery: ResolversParentTypes['MutationType'];
  ProjectInput: ProjectInput;
  QueryType: {};
  Question: Question;
  QuestionInput: QuestionInput;
  Questionnaire: Questionnaire;
  QuestionnaireConnection: QuestionnaireConnection;
  QuestionnaireEdge: QuestionnaireEdge;
  QuestionnaireInput: QuestionnaireInput;
  QuestionnaireMutationQuery: ResolversParentTypes['MutationType'];
  QuestionnairePermissionType: QuestionnairePermissionType;
  RangeInput: RangeInput;
  RejectionUpdatesInput: RejectionUpdatesInput;
  RemoteExperienceInput: RemoteExperienceInput;
  ResponseInput: ResponseInput;
  RoleInfoInput: RoleInfoInput;
  RoleInfoType: RoleInfoType;
  SavedFilter: SavedFilter;
  SavedFilterConnection: SavedFilterConnection;
  SavedFilterEdge: SavedFilterEdge;
  SavedFilterInput: SavedFilterInput;
  Scorecard: Scorecard;
  ScorecardAttributeInput: ScorecardAttributeInput;
  ScorecardAttributePermissionType: ScorecardAttributePermissionType;
  ScorecardAttributeType: ScorecardAttributeType;
  ScorecardConnection: ScorecardConnection;
  ScorecardEdge: ScorecardEdge;
  ScorecardInput: ScorecardInput;
  ScorecardPermissionType: ScorecardPermissionType;
  ScorecardQuery: ResolversParentTypes['QueryType'];
  Sdg: Sdg;
  SdgInfoInput: SdgInfoInput;
  SdgTarget: SdgTarget;
  SelectionProcess: SelectionProcess;
  SelectionProcessConnection: SelectionProcessConnection;
  SelectionProcessEdge: SelectionProcessEdge;
  SelectionProcessInput: SelectionProcessInput;
  Slot: Slot;
  SlotConnection: SlotConnection;
  SlotEdge: SlotEdge;
  SlotInput: SlotInput;
  SlotMutationQuery: ResolversParentTypes['MutationType'];
  SlotPermissionType: SlotPermissionType;
  SpecificInfoType: SpecificInfoType;
  SpecificsInfoInput: SpecificsInfoInput;
  StandardsSurvey: StandardsSurvey;
  StandardsSurveyMutationQuery: ResolversParentTypes['MutationType'];
  StandardsSurveyQuery: ResolversParentTypes['QueryType'];
  StatusUpdatesInput: StatusUpdatesInput;
  String: Scalars['String'];
  SubProduct: SubProduct;
  SubProducts: ResolversParentTypes['QueryType'];
  SuggestedCountry: SuggestedCountry;
  SuggestedCountryInput: SuggestedCountryInput;
  SuggestedCountryMutationQuery: ResolversParentTypes['MutationType'];
  SuggestedCountryQuery: ResolversParentTypes['QueryType'];
  SuggestedOpportunitiesInput: SuggestedOpportunitiesInput;
  Survey: Survey;
  SurveyDetails: SurveyDetails;
  SurveyMutationQuery: ResolversParentTypes['MutationType'];
  SurveyQuery: ResolversParentTypes['QueryType'];
  SurveyQuestion: SurveyQuestion;
  SurveyResponse: SurveyResponse;
  SurveyResponseInput: SurveyResponseInput;
  TagList: TagList;
  TagListAutocompleteQuery: ResolversParentTypes['QueryType'];
  TagListConnection: TagListConnection;
  TagListEdge: TagListEdge;
  TagListInput: TagListInput;
  TagListMutationQueryType: ResolversParentTypes['MutationType'];
  TagListQuery: ResolversParentTypes['QueryType'];
  Team: Team;
  TeamConnection: TeamConnection;
  TeamEdge: TeamEdge;
  TeamInput: TeamInput;
  TeamMutationQuery: ResolversParentTypes['MutationType'];
  TeamPermissionType: TeamPermissionType;
  TeamQuery: ResolversParentTypes['QueryType'];
  Term: Term;
  TermDate: TermDate;
  TermDatePermissionType: TermDatePermissionType;
  TermInput: TermInput;
  TermMutationQuery: ResolversParentTypes['MutationType'];
  TermQuery: ResolversParentTypes['QueryType'];
  Testimonial: Testimonial;
  TestimonialFilter: TestimonialFilter;
  TestimonialQuery: ResolversParentTypes['QueryType'];
  Timeline: Timeline;
  TimelineInput: TimelineInput;
  TimelineMutationQuery: ResolversParentTypes['MutationType'];
  TimelineQuery: ResolversParentTypes['QueryType'];
  TmDetailType: TmDetailType;
  TmDetailsInput: TmDetailsInput;
  Todo: Omit<Todo, 'todoable'> & { todoable?: Maybe<ResolversParentTypes['TodoableUnion']> };
  TodoConnection: TodoConnection;
  TodoEdge: TodoEdge;
  TodoFilter: TodoFilter;
  TodoInput: TodoInput;
  TodoList: TodoList;
  TodoMetaType: TodoMetaType;
  TodoMutationQuery: ResolversParentTypes['MutationType'];
  TodoQuery: ResolversParentTypes['QueryType'];
  TodoType: TodoType;
  TodoableUnion: ResolversParentTypes['Accommodation'] | ResolversParentTypes['Event'] | ResolversParentTypes['Office'] | ResolversParentTypes['Opportunity'] | ResolversParentTypes['OpportunityApplication'] | ResolversParentTypes['Organisation'] | ResolversParentTypes['Person'];
  Transaction: Transaction;
  UpdateCommitteeTargetInput: UpdateCommitteeTargetInput;
  UpdateQuestionInput: UpdateQuestionInput;
  UpdateSelectionProcessInput: UpdateSelectionProcessInput;
  UpdateSlotInput: UpdateSlotInput;
  Upload: Scalars['Upload'];
  WeeklyActivity: WeeklyActivity;
  WeeklyActivityInput: WeeklyActivityInput;
  WorkScheduleInput: WorkScheduleInput;
  payment: Payment;
};

export type AccommodationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Accommodation'] = ResolversParentTypes['Accommodation']> = {
  accommodation_availabilities?: Resolver<Maybe<ResolversTypes['AccommodationAvailabilityConnection']>, ParentType, ContextType, Partial<AccommodationAccommodation_AvailabilitiesArgs>>;
  accommodation_availability_status?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  address_detail?: Resolver<Maybe<ResolversTypes['AddressInfo']>, ParentType, ContextType>;
  assigned_applications?: Resolver<Maybe<ResolversTypes['OpportunityApplicationConnection']>, ParentType, ContextType, Partial<AccommodationAssigned_ApplicationsArgs>>;
  benefits?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  contact_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  host_image?: Resolver<Maybe<ResolversTypes['ImageType']>, ParentType, ContextType>;
  host_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageType']>>>, ParentType, ContextType>;
  lc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  number_of_rooms?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occupants?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  todo_type?: Resolver<Maybe<ResolversTypes['TodoType']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccommodationAssignmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationAssignment'] = ResolversParentTypes['AccommodationAssignment']> = {
  accommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  opportunity_application?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccommodationAssignmentConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationAssignmentConnection'] = ResolversParentTypes['AccommodationAssignmentConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccommodationAssignmentEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccommodationAssignment']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccommodationAssignmentEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationAssignmentEdge'] = ResolversParentTypes['AccommodationAssignmentEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['AccommodationAssignment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccommodationAssignmentListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationAssignmentList'] = ResolversParentTypes['AccommodationAssignmentList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccommodationAssignment']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccommodationAssignmentMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationAssignmentMutationQuery'] = ResolversParentTypes['AccommodationAssignmentMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createAccommodationAssignment?: Resolver<Maybe<ResolversTypes['AccommodationAssignment']>, ParentType, ContextType, Partial<AccommodationAssignmentMutationQueryCreateAccommodationAssignmentArgs>>;
  deleteAccommodationAssignment?: Resolver<Maybe<ResolversTypes['AccommodationAssignment']>, ParentType, ContextType, RequireFields<AccommodationAssignmentMutationQueryDeleteAccommodationAssignmentArgs, 'id'>>;
  updateAccommodationAssignment?: Resolver<Maybe<ResolversTypes['AccommodationAssignment']>, ParentType, ContextType, RequireFields<AccommodationAssignmentMutationQueryUpdateAccommodationAssignmentArgs, 'id'>>;
};

export type AccommodationAssignmentQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationAssignmentQuery'] = ResolversParentTypes['AccommodationAssignmentQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  accommodationScheduleList?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccommodationAssignment']>>>, ParentType, ContextType, Partial<AccommodationAssignmentQueryAccommodationScheduleListArgs>>;
  assignedApplications?: Resolver<Maybe<ResolversTypes['AccommodationAssignmentList']>, ParentType, ContextType, Partial<AccommodationAssignmentQueryAssignedApplicationsArgs>>;
};

export type AccommodationAvailabilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationAvailability'] = ResolversParentTypes['AccommodationAvailability']> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccommodationAvailabilityConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationAvailabilityConnection'] = ResolversParentTypes['AccommodationAvailabilityConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccommodationAvailabilityEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccommodationAvailability']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccommodationAvailabilityEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationAvailabilityEdge'] = ResolversParentTypes['AccommodationAvailabilityEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['AccommodationAvailability']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccommodationAvailabilityMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationAvailabilityMutationQuery'] = ResolversParentTypes['AccommodationAvailabilityMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createAccommodationAvailability?: Resolver<Maybe<ResolversTypes['AccommodationAvailability']>, ParentType, ContextType, Partial<AccommodationAvailabilityMutationQueryCreateAccommodationAvailabilityArgs>>;
  deleteAccommodationAvailability?: Resolver<Maybe<ResolversTypes['AccommodationAvailability']>, ParentType, ContextType, RequireFields<AccommodationAvailabilityMutationQueryDeleteAccommodationAvailabilityArgs, 'id'>>;
  updateAccommodationAvailability?: Resolver<Maybe<ResolversTypes['AccommodationAvailability']>, ParentType, ContextType, RequireFields<AccommodationAvailabilityMutationQueryUpdateAccommodationAvailabilityArgs, 'id'>>;
};

export type AccommodationListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationList'] = ResolversParentTypes['AccommodationList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Accommodation']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccommodationMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationMutationQuery'] = ResolversParentTypes['AccommodationMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  addPictureToAccommodation?: Resolver<Maybe<ResolversTypes['Picture']>, ParentType, ContextType, RequireFields<AccommodationMutationQueryAddPictureToAccommodationArgs, 'id'>>;
  createAccommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, Partial<AccommodationMutationQueryCreateAccommodationArgs>>;
  deleteAccommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, RequireFields<AccommodationMutationQueryDeleteAccommodationArgs, 'id'>>;
  removePictureFromAccommodation?: Resolver<Maybe<ResolversTypes['Picture']>, ParentType, ContextType, RequireFields<AccommodationMutationQueryRemovePictureFromAccommodationArgs, 'id'>>;
  updateAccommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, RequireFields<AccommodationMutationQueryUpdateAccommodationArgs, 'id'>>;
};

export type AccommodationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccommodationQuery'] = ResolversParentTypes['AccommodationQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  accommodations?: Resolver<Maybe<ResolversTypes['AccommodationList']>, ParentType, ContextType, Partial<AccommodationQueryAccommodationsArgs>>;
  getAccommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, Partial<AccommodationQueryGetAccommodationArgs>>;
};

export type AddressInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddressInfo'] = ResolversParentTypes['AddressInfo']> = {
  address_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google_place_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationMetaTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationMetaType'] = ResolversParentTypes['ApplicationMetaType']> = {
  answers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  approved_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  date_approval_broken?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_approved?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_completed?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_ep_approved?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_ldm_completed?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_matched?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_nps_completed?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_pay_by_cash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date_realisation_broke?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_realized?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_rejected?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_remote_realization_broken_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_tn_approved?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_withdrawn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ep_approved_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  gip_answer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  host_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  host_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matched_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  pay_by_cash?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  realized_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  rejected_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  rejected_on_version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  remote_end_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  remote_realization_broken_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  remote_realized_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  remote_realized_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  remote_start_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  reopened?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  system_comments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  system_rated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  system_rating?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  testimonial?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  testimonial_filled_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  tn_approved_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  vd_blog_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationQuestionnaireResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationQuestionnaire'] = ResolversParentTypes['ApplicationQuestionnaire']> = {
  answered_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  answers?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  attachments?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  questionnaire?: Resolver<Maybe<ResolversTypes['Questionnaire']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationQuestionnaireConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationQuestionnaireConnection'] = ResolversParentTypes['ApplicationQuestionnaireConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicationQuestionnaireEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicationQuestionnaire']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationQuestionnaireEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationQuestionnaireEdge'] = ResolversParentTypes['ApplicationQuestionnaireEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ApplicationQuestionnaire']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationScorecardResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationScorecard'] = ResolversParentTypes['ApplicationScorecard']> = {
  application_scorecard_attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApplicationScorecardAttributeType']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationScorecardAttributeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationScorecardAttributeType'] = ResolversParentTypes['ApplicationScorecardAttributeType']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  scorecard_attribute?: Resolver<Maybe<ResolversTypes['ScorecardAttributeType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttachmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attachment'] = ResolversParentTypes['Attachment']> = {
  attachable_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  attachable_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attached_by?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file_content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file_file_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file_file_size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AttachmentUrlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttachmentMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttachmentMutationQuery'] = ResolversParentTypes['AttachmentMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createAttachment?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType, Partial<AttachmentMutationQueryCreateAttachmentArgs>>;
  deleteAttachment?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType, RequireFields<AttachmentMutationQueryDeleteAttachmentArgs, 'id'>>;
  deleteImage?: Resolver<Maybe<ResolversTypes['ImageType']>, ParentType, ContextType, Partial<AttachmentMutationQueryDeleteImageArgs>>;
  updateAttachment?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType, RequireFields<AttachmentMutationQueryUpdateAttachmentArgs, 'id'>>;
};

export type AttachmentQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttachmentQuery'] = ResolversParentTypes['AttachmentQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  currentPersonAttachment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attachment']>>>, ParentType, ContextType>;
  getAttachment?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType, RequireFields<AttachmentQueryGetAttachmentArgs, 'id'>>;
};

export type AttendeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attendee'] = ResolversParentTypes['Attendee']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BranchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Branch'] = ResolversParentTypes['Branch']> = {
  account_manager?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  address_detail?: Resolver<Maybe<ResolversTypes['AddressInfo']>, ParentType, ContextType>;
  approved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  billing_address?: Resolver<Maybe<ResolversTypes['AddressInfo']>, ParentType, ContextType>;
  branch_employees?: Resolver<Maybe<ResolversTypes['BranchEmployeeConnection']>, ParentType, ContextType, Partial<BranchBranch_EmployeesArgs>>;
  branch_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  contact_people?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactPeopleType']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  home_lc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invoices?: Resolver<Maybe<ResolversTypes['InvoiceTypeConnection']>, ParentType, ContextType, Partial<BranchInvoicesArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['BranchPermissionType']>, ParentType, ContextType>;
  programme_manager?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status_string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BranchConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchConnection'] = ResolversParentTypes['BranchConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['BranchEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Branch']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BranchEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchEdge'] = ResolversParentTypes['BranchEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BranchEmployeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchEmployee'] = ResolversParentTypes['BranchEmployee']> = {
  access_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  approved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  branch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitation_accepted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BranchEmployeeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchEmployeeConnection'] = ResolversParentTypes['BranchEmployeeConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['BranchEmployeeEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['BranchEmployee']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BranchEmployeeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchEmployeeEdge'] = ResolversParentTypes['BranchEmployeeEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BranchEmployeeMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchEmployeeMutationQuery'] = ResolversParentTypes['BranchEmployeeMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  approveBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<BranchEmployeeMutationQueryApproveBranchEmployeeArgs, 'id'>>;
  branchEmployeeApprove?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<BranchEmployeeMutationQueryBranchEmployeeApproveArgs, 'id'>>;
  branchEmployeeCreate?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, Partial<BranchEmployeeMutationQueryBranchEmployeeCreateArgs>>;
  branchEmployeeDelete?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<BranchEmployeeMutationQueryBranchEmployeeDeleteArgs, 'id'>>;
  branchEmployeeReject?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<BranchEmployeeMutationQueryBranchEmployeeRejectArgs, 'id'>>;
  branchEmployeeUpdate?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<BranchEmployeeMutationQueryBranchEmployeeUpdateArgs, 'id'>>;
  createBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<BranchEmployeeMutationQueryCreateBranchEmployeeArgs, 'branch_id' | 'person_id'>>;
  deleteBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<BranchEmployeeMutationQueryDeleteBranchEmployeeArgs, 'id'>>;
  rejectBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<BranchEmployeeMutationQueryRejectBranchEmployeeArgs, 'id'>>;
  updateBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<BranchEmployeeMutationQueryUpdateBranchEmployeeArgs, 'id'>>;
};

export type BranchEmployeeQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchEmployeeQuery'] = ResolversParentTypes['BranchEmployeeQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, Partial<BranchEmployeeQueryGetBranchEmployeeArgs>>;
  organisationEmployees?: Resolver<Maybe<Array<Maybe<ResolversTypes['BranchEmployee']>>>, ParentType, ContextType, Partial<BranchEmployeeQueryOrganisationEmployeesArgs>>;
};

export type BranchMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchMutationQuery'] = ResolversParentTypes['BranchMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  approveBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<BranchMutationQueryApproveBranchArgs, 'id'>>;
  branchApprove?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<BranchMutationQueryBranchApproveArgs, 'id'>>;
  branchContracts?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType, Partial<BranchMutationQueryBranchContractsArgs>>;
  branchDeny?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<BranchMutationQueryBranchDenyArgs, 'id'>>;
  createBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, Partial<BranchMutationQueryCreateBranchArgs>>;
  denyBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<BranchMutationQueryDenyBranchArgs, 'id'>>;
  inviteMember?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<BranchMutationQueryInviteMemberArgs, 'id'>>;
  updateBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<BranchMutationQueryUpdateBranchArgs, 'id'>>;
};

export type BranchPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchPermissionType'] = ResolversParentTypes['BranchPermissionType']> = {
  can_invite_employee?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_manage_branch_employees?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BranchQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BranchQuery'] = ResolversParentTypes['BranchQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  branch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, Partial<BranchQueryBranchArgs>>;
  branchAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Branch']>>>, ParentType, ContextType, Partial<BranchQueryBranchAutocompleteArgs>>;
  branchContracts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contract']>>>, ParentType, ContextType, Partial<BranchQueryBranchContractsArgs>>;
  branchEmployees?: Resolver<Maybe<Array<Maybe<ResolversTypes['BranchEmployee']>>>, ParentType, ContextType, RequireFields<BranchQueryBranchEmployeesArgs, 'id'>>;
  branches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Branch']>>>, ParentType, ContextType, RequireFields<BranchQueryBranchesArgs, 'my'>>;
  getBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, Partial<BranchQueryGetBranchArgs>>;
  myBranch?: Resolver<Maybe<Array<Maybe<ResolversTypes['Branch']>>>, ParentType, ContextType, Partial<BranchQueryMyBranchArgs>>;
};

export type CvResolvers<ContextType = any, ParentType extends ResolversParentTypes['CV'] = ResolversParentTypes['CV']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['Campaign'] = ResolversParentTypes['Campaign']> = {
  active?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  campaign_content?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  campaign_medium?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  campaign_source?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  campaign_tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  campaign_term?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  people_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CampaignMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignMutationQuery'] = ResolversParentTypes['CampaignMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  activateCampaign?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<CampaignMutationQueryActivateCampaignArgs, 'id'>>;
  campaignActivate?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<CampaignMutationQueryCampaignActivateArgs, 'id'>>;
  campaignCreate?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, Partial<CampaignMutationQueryCampaignCreateArgs>>;
  campaignDeactivate?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<CampaignMutationQueryCampaignDeactivateArgs, 'id'>>;
  campaignUpdate?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<CampaignMutationQueryCampaignUpdateArgs, 'id'>>;
  createCampaign?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<CampaignMutationQueryCreateCampaignArgs, 'office_id'>>;
  deactivateCampaign?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<CampaignMutationQueryDeactivateCampaignArgs, 'id'>>;
  updateCampaign?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<CampaignMutationQueryUpdateCampaignArgs, 'id'>>;
};

export type CampaignQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignQuery'] = ResolversParentTypes['CampaignQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  campaignAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Campaign']>>>, ParentType, ContextType, Partial<CampaignQueryCampaignAutocompleteArgs>>;
  getCampaign?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<CampaignQueryGetCampaignArgs, 'id'>>;
};

export type ChecklistResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChecklistResponse'] = ResolversParentTypes['ChecklistResponse']> = {
  answers?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  survey?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityResolvers<ContextType = any, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = {
  city_details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city_lcs?: Resolver<Maybe<Array<Maybe<ResolversTypes['CityLc']>>>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google_place_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lcs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityLcResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityLc'] = ResolversParentTypes['CityLc']> = {
  city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityLcMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityLcMutationQuery'] = ResolversParentTypes['CityLcMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createCityLc?: Resolver<Maybe<ResolversTypes['CityLc']>, ParentType, ContextType, Partial<CityLcMutationQueryCreateCityLcArgs>>;
  deleteCityLc?: Resolver<Maybe<ResolversTypes['CityLc']>, ParentType, ContextType, RequireFields<CityLcMutationQueryDeleteCityLcArgs, 'id'>>;
  updateCityLc?: Resolver<Maybe<ResolversTypes['CityLc']>, ParentType, ContextType, RequireFields<CityLcMutationQueryUpdateCityLcArgs, 'id'>>;
};

export type CityLcQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityLcQuery'] = ResolversParentTypes['CityLcQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getCityLc?: Resolver<Maybe<ResolversTypes['CityLc']>, ParentType, ContextType, Partial<CityLcQueryGetCityLcArgs>>;
};

export type CityListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityList'] = ResolversParentTypes['CityList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['City']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityMutationQuery'] = ResolversParentTypes['CityMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, Partial<CityMutationQueryCreateCityArgs>>;
  deleteCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, RequireFields<CityMutationQueryDeleteCityArgs, 'id'>>;
  updateCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, RequireFields<CityMutationQueryUpdateCityArgs, 'id'>>;
};

export type CityQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityQuery'] = ResolversParentTypes['CityQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allCity?: Resolver<Maybe<ResolversTypes['CityList']>, ParentType, ContextType, Partial<CityQueryAllCityArgs>>;
  cityAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['City']>>>, ParentType, ContextType, Partial<CityQueryCityAutocompleteArgs>>;
  cityByMc?: Resolver<Maybe<Array<Maybe<ResolversTypes['City']>>>, ParentType, ContextType, RequireFields<CityQueryCityByMcArgs, 'allocated_to_lc' | 'mc_id'>>;
  getCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, Partial<CityQueryGetCityArgs>>;
};

export type ClientDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientData'] = ResolversParentTypes['ClientData']> = {
  data_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientDataConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientDataConnection'] = ResolversParentTypes['ClientDataConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClientDataEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClientData']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientDataEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientDataEdge'] = ResolversParentTypes['ClientDataEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientDataMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientDataMutationQuery'] = ResolversParentTypes['ClientDataMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  clientDataPut?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType, Partial<ClientDataMutationQueryClientDataPutArgs>>;
  clientDataUpdate?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType, RequireFields<ClientDataMutationQueryClientDataUpdateArgs, 'id'>>;
};

export type ClientDataQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientDataQuery'] = ResolversParentTypes['ClientDataQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  clientData?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType, RequireFields<ClientDataQueryClientDataArgs, 'id'>>;
  clientDataByNameAndApplicable?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType, RequireFields<ClientDataQueryClientDataByNameAndApplicableArgs, 'applicable_id' | 'applicable_type' | 'name'>>;
  clientDataGet?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType, RequireFields<ClientDataQueryClientDataGetArgs, 'id'>>;
  clientDataGetByNameAndApplicable?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType, RequireFields<ClientDataQueryClientDataGetByNameAndApplicableArgs, 'applicable_id' | 'applicable_type' | 'name'>>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  can_be_deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  field_for?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['CommentMetaType']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentConnection'] = ResolversParentTypes['CommentConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentEdge'] = ResolversParentTypes['CommentEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentMetaTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentMetaType'] = ResolversParentTypes['CommentMetaType']> = {
  resolved?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resolved_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resolved_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentMutationQuery'] = ResolversParentTypes['CommentMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, Partial<CommentMutationQueryCreateCommentArgs>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<CommentMutationQueryDeleteCommentArgs, 'id'>>;
  updateComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<CommentMutationQueryUpdateCommentArgs, 'id'>>;
};

export type CommentQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentQuery'] = ResolversParentTypes['CommentQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  currentPersonComment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  getComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<CommentQueryGetCommentArgs, 'id'>>;
};

export type CommitteeAggregationResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeAggregation'] = ResolversParentTypes['CommitteeAggregation']> = {
  accepted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  applied?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  approved?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  committee_target?: Resolver<Maybe<ResolversTypes['CommitteeTarget']>, ParentType, ContextType>;
  completed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exchange_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finished?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  growth_percentage_accepted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  growth_percentage_applied?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  growth_percentage_approved?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  growth_percentage_completed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  growth_percentage_finished?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  growth_percentage_realized?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  percentage_accepted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  percentage_applied?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  percentage_approved?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  percentage_completed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  percentage_finished?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  percentage_realized?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  realized?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  term?: Resolver<Maybe<ResolversTypes['Term']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommitteeAggregationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeAggregationConnection'] = ResolversParentTypes['CommitteeAggregationConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommitteeAggregationEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommitteeAggregation']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommitteeAggregationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeAggregationEdge'] = ResolversParentTypes['CommitteeAggregationEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CommitteeAggregation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommitteeDepartmentMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeDepartmentMutationQuery'] = ResolversParentTypes['CommitteeDepartmentMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createCommitteeDepartment?: Resolver<Maybe<ResolversTypes['CommitteeDepartmentType']>, ParentType, ContextType, RequireFields<CommitteeDepartmentMutationQueryCreateCommitteeDepartmentArgs, 'committee_department' | 'office_id'>>;
};

export type CommitteeDepartmentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeDepartmentType'] = ResolversParentTypes['CommitteeDepartmentType']> = {
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member_positions?: Resolver<Maybe<ResolversTypes['MemberPositionConnection']>, ParentType, ContextType, Partial<CommitteeDepartmentTypeMember_PositionsArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommitteeDepartmentTypeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeDepartmentTypeConnection'] = ResolversParentTypes['CommitteeDepartmentTypeConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommitteeDepartmentTypeEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommitteeDepartmentType']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommitteeDepartmentTypeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeDepartmentTypeEdge'] = ResolversParentTypes['CommitteeDepartmentTypeEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CommitteeDepartmentType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommitteeMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeMutationQuery'] = ResolversParentTypes['CommitteeMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createCommittee?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, Partial<CommitteeMutationQueryCreateCommitteeArgs>>;
  createCommitteeCity?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<CommitteeMutationQueryCreateCommitteeCityArgs, 'id'>>;
  deleteCommittee?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<CommitteeMutationQueryDeleteCommitteeArgs, 'id'>>;
  freezeUnfreezeCommittee?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<CommitteeMutationQueryFreezeUnfreezeCommitteeArgs, 'id'>>;
  memberLeadChecklistQuestionBulkCreate?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyQuestion']>>>, ParentType, ContextType, RequireFields<CommitteeMutationQueryMemberLeadChecklistQuestionBulkCreateArgs, 'checklist' | 'id'>>;
  propagateTermsCommittee?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType, Partial<CommitteeMutationQueryPropagateTermsCommitteeArgs>>;
  updateCommittee?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<CommitteeMutationQueryUpdateCommitteeArgs, 'id'>>;
};

export type CommitteePaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteePayment'] = ResolversParentTypes['CommitteePayment']> = {
  allow_online_payments?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  apply?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  other_payment_option?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  realize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommitteeQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeQuery'] = ResolversParentTypes['CommitteeQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  committee?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<CommitteeQueryCommitteeArgs, 'id'>>;
  committeeAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType, RequireFields<CommitteeQueryCommitteeAutocompleteArgs, 'my_committee_autocomplete'>>;
  committeeBasicDetails?: Resolver<Maybe<ResolversTypes['OfficeBasicDetails']>, ParentType, ContextType, RequireFields<CommitteeQueryCommitteeBasicDetailsArgs, 'id'>>;
  committeeTerm?: Resolver<Maybe<ResolversTypes['CommitteeTermType']>, ParentType, ContextType, RequireFields<CommitteeQueryCommitteeTermArgs, 'id' | 'term_id'>>;
  committeeTerms?: Resolver<Maybe<Array<Maybe<ResolversTypes['TermDate']>>>, ParentType, ContextType, RequireFields<CommitteeQueryCommitteeTermsArgs, 'id'>>;
  committeeTermsWithDepartments?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommitteeTermType']>>>, ParentType, ContextType, RequireFields<CommitteeQueryCommitteeTermsWithDepartmentsArgs, 'id'>>;
  committees?: Resolver<Maybe<ResolversTypes['OfficeList']>, ParentType, ContextType, Partial<CommitteeQueryCommitteesArgs>>;
  committeesDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<CommitteeQueryCommitteesDownloadArgs, 'columns'>>;
  committeesListBasic?: Resolver<Maybe<ResolversTypes['OfficeBasicList']>, ParentType, ContextType, Partial<CommitteeQueryCommitteesListBasicArgs>>;
  entityGoalSetting?: Resolver<Maybe<Array<Maybe<ResolversTypes['EntityGoal']>>>, ParentType, ContextType, Partial<CommitteeQueryEntityGoalSettingArgs>>;
  geoCodedCommittee?: Resolver<Maybe<ResolversTypes['OfficeBasicDetails']>, ParentType, ContextType>;
  getCommittee?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<CommitteeQueryGetCommitteeArgs, 'id'>>;
  getCommitteeBasicDetails?: Resolver<Maybe<ResolversTypes['OfficeBasicDetails']>, ParentType, ContextType, RequireFields<CommitteeQueryGetCommitteeBasicDetailsArgs, 'id'>>;
  getCommitteeTerm?: Resolver<Maybe<ResolversTypes['TermDate']>, ParentType, ContextType, RequireFields<CommitteeQueryGetCommitteeTermArgs, 'id'>>;
  mcsAlignments?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfficeMcAlignment']>>>, ParentType, ContextType, RequireFields<CommitteeQueryMcsAlignmentsArgs, 'alignment_type'>>;
  myCommitteeAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType, Partial<CommitteeQueryMyCommitteeAutocompleteArgs>>;
};

export type CommitteeTargetResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeTarget'] = ResolversParentTypes['CommitteeTarget']> = {
  accepted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  applied?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  approved?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  completed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exchange_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finished?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  realized?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  term?: Resolver<Maybe<ResolversTypes['Term']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommitteeTargetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeTargetConnection'] = ResolversParentTypes['CommitteeTargetConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommitteeTargetEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommitteeTarget']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommitteeTargetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeTargetEdge'] = ResolversParentTypes['CommitteeTargetEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CommitteeTarget']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommitteeTargetMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeTargetMutationQuery'] = ResolversParentTypes['CommitteeTargetMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  committeeTargetBulkUpdate?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommitteeTarget']>>>, ParentType, ContextType, RequireFields<CommitteeTargetMutationQueryCommitteeTargetBulkUpdateArgs, 'committee_targets'>>;
};

export type CommitteeTermTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeTermType'] = ResolversParentTypes['CommitteeTermType']> = {
  committee_departments?: Resolver<Maybe<ResolversTypes['CommitteeDepartmentTypeConnection']>, ParentType, ContextType, Partial<CommitteeTermTypeCommittee_DepartmentsArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member_position?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompanyList'] = ResolversParentTypes['CompanyList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organisation']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyMetaTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompanyMetaType'] = ResolversParentTypes['CompanyMetaType']> = {
  approved_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  approved_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  archived_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  archived_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  archived_method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employee_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  experience_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  office_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opportunity_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rejected_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  rejected_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  retention_rate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_url_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConstantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Constant'] = ResolversParentTypes['Constant']> = {
  alias_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType>;
  has_focus_products?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  matches_with?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<ConstantMatches_WithArgs>>;
  matching_with_opportunity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  option?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sdg_goal_hex_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sdg_goal_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  short_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  standard_category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  standard_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConstantMapResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConstantMap'] = ResolversParentTypes['ConstantMap']> = {
  constant?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  constant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  constant_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matches_with?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<ConstantMapMatches_WithArgs>>;
  matching_with_opportunity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  option?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  standard_option?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConstantsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Constants'] = ResolversParentTypes['Constants']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allConstants?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType, Partial<ConstantsAllConstantsArgs>>;
  constantAutocomplete?: Resolver<Array<Maybe<ResolversTypes['Constant']>>, ParentType, ContextType, Partial<ConstantsConstantAutocompleteArgs>>;
  constants?: Resolver<Array<Maybe<ResolversTypes['Constant']>>, ParentType, ContextType, Partial<ConstantsConstantsArgs>>;
  sdgGoals?: Resolver<Array<Maybe<ResolversTypes['Constant']>>, ParentType, ContextType, Partial<ConstantsSdgGoalsArgs>>;
  sdgTargets?: Resolver<Array<Maybe<ResolversTypes['SdgTarget']>>, ParentType, ContextType, Partial<ConstantsSdgTargetsArgs>>;
};

export type ContactInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactInfo'] = ResolversParentTypes['ContactInfo']> = {
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactPeopleTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactPeopleType'] = ResolversParentTypes['ContactPeopleType']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contract'] = ResolversParentTypes['Contract']> = {
  contract?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  signee?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Conversation'] = ResolversParentTypes['Conversation']> = {
  contextable?: Resolver<Maybe<ResolversTypes['PersonApplicationUnion']>, ParentType, ContextType>;
  conversation_participants?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationParticipant']>>>, ParentType, ContextType>;
  conversation_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  messages?: Resolver<Maybe<ResolversTypes['MessageConnection']>, ParentType, ContextType, Partial<ConversationMessagesArgs>>;
  meta_data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConversationConnection'] = ResolversParentTypes['ConversationConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Conversation']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConversationEdge'] = ResolversParentTypes['ConversationEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConversationParticipant'] = ResolversParentTypes['ConversationParticipant']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  last_read_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  participant?: Resolver<Maybe<ResolversTypes['ConversationParticipantPerson']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unread_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationParticipantPersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConversationParticipantPerson'] = ResolversParentTypes['ConversationParticipantPerson']> = {
  aiesec_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ConversationParticipantPersonProfile_PhotoArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConversationQuery'] = ResolversParentTypes['ConversationQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getConversation?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType, Partial<ConversationQueryGetConversationArgs>>;
};

export type CounterDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['CounterData'] = ResolversParentTypes['CounterData']> = {
  count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  alphabetic_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  minor_unit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numeric_code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  programme_fees?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgrammeFee']>>>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentPersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentPerson'] = ResolversParentTypes['CurrentPerson']> = {
  academic_experiences?: Resolver<Maybe<Array<Maybe<ResolversTypes['PreviousExperience']>>>, ParentType, ContextType>;
  accepted_reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_manager?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aiesec_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  client_datas?: Resolver<Maybe<ResolversTypes['ClientDataConnection']>, ParentType, ContextType, Partial<CurrentPersonClient_DatasArgs>>;
  contact_detail?: Resolver<Maybe<ResolversTypes['ContactInfo']>, ParentType, ContextType>;
  conversations?: Resolver<Maybe<ResolversTypes['ConversationConnection']>, ParentType, ContextType, Partial<CurrentPersonConversationsArgs>>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cover_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<CurrentPersonCover_PhotoArgs>>;
  creatable_offices_for_opportunities?: Resolver<Maybe<ResolversTypes['OfficeConnection']>, ParentType, ContextType, Partial<CurrentPersonCreatable_Offices_For_OpportunitiesArgs>>;
  creatable_offices_for_pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  current_office?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  current_offices?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType>;
  current_positions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position']>>>, ParentType, ContextType>;
  current_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  current_teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['Team']>>>, ParentType, ContextType>;
  cv_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cvs?: Resolver<Maybe<Array<Maybe<ResolversTypes['CV']>>>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expa_registered_device_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expa_settings?: Resolver<Maybe<ResolversTypes['ExpaSettings']>, ParentType, ContextType>;
  favourite_events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  favourite_events_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  has_completed_onboarding?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_current_position?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  home_lc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  instant_message_unread_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  interviewed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_ai_eb_member?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_ai_member?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_pop_user?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedin_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  managed_branches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Branch']>>>, ParentType, ContextType>;
  managed_companies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organisation']>>>, ParentType, ContextType>;
  managed_sub_branch_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  managers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Manager']>>>, ParentType, ContextType>;
  member_positions?: Resolver<Maybe<Array<ResolversTypes['MemberPosition']>>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PersonMetaType']>, ParentType, ContextType>;
  middle_names?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<CurrentPersonNodeArgs, 'id'>>;
  notification_settings?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Notification']>>>, ParentType, ContextType, Partial<CurrentPersonNotificationsArgs>>;
  nps_score?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opportunity_applications_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  organisation_type_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pending_tasks?: Resolver<Maybe<ResolversTypes['TodoType']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['PersonPermissionType']>, ParentType, ContextType>;
  permissions_for?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  person_profile?: Resolver<Maybe<ResolversTypes['PersonProfile']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  professional_experiences?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProfessionalExperience']>>>, ParentType, ContextType>;
  profile_completeness?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  profile_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<CurrentPersonProfile_PhotoArgs>>;
  recommended_incoming_programme?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  referral_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  saved_filters?: Resolver<Maybe<ResolversTypes['SavedFilterConnection']>, ParentType, ContextType, Partial<CurrentPersonSaved_FiltersArgs>>;
  secure_identity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentPersonMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentPersonMutationQuery'] = ResolversParentTypes['CurrentPersonMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  addCurrentPersonCv?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType, Partial<CurrentPersonMutationQueryAddCurrentPersonCvArgs>>;
  currentPersonAnonymize?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType>;
  currentPersonEfResult?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType>;
  currentPersonSavedFiltersCreate?: Resolver<Maybe<ResolversTypes['SavedFilter']>, ParentType, ContextType, Partial<CurrentPersonMutationQueryCurrentPersonSavedFiltersCreateArgs>>;
  currentPersonSavedFiltersDelete?: Resolver<Maybe<ResolversTypes['SavedFilter']>, ParentType, ContextType, Partial<CurrentPersonMutationQueryCurrentPersonSavedFiltersDeleteArgs>>;
  currentPersonSavedFiltersUpdate?: Resolver<Maybe<ResolversTypes['SavedFilter']>, ParentType, ContextType, Partial<CurrentPersonMutationQueryCurrentPersonSavedFiltersUpdateArgs>>;
  currentPersonUpdate?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType, Partial<CurrentPersonMutationQueryCurrentPersonUpdateArgs>>;
  currentPersonUpdateHomeLc?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType, Partial<CurrentPersonMutationQueryCurrentPersonUpdateHomeLcArgs>>;
  deleteCurrentPersonCv?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType, Partial<CurrentPersonMutationQueryDeleteCurrentPersonCvArgs>>;
};

export type CurrentPersonQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentPersonQuery'] = ResolversParentTypes['CurrentPersonQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  currentPerson?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType, Partial<CurrentPersonQueryCurrentPersonArgs>>;
  currentPersonDump?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType>;
  currentPersonEfResult?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType>;
  currentPersonManagers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  currentPersonProgrammeFees?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgrammeFee']>>>, ParentType, ContextType, RequireFields<CurrentPersonQueryCurrentPersonProgrammeFeesArgs, 'managed_companies'>>;
  currentPersonSavedFilters?: Resolver<Maybe<Array<Maybe<ResolversTypes['SavedFilter']>>>, ParentType, ContextType, Partial<CurrentPersonQueryCurrentPersonSavedFiltersArgs>>;
  currentPersonSavedFiltersShow?: Resolver<Maybe<ResolversTypes['SavedFilter']>, ParentType, ContextType, Partial<CurrentPersonQueryCurrentPersonSavedFiltersShowArgs>>;
};

export type CustomStatusTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomStatusType'] = ResolversParentTypes['CustomStatusType']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomStatusTypeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomStatusTypeConnection'] = ResolversParentTypes['CustomStatusTypeConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomStatusTypeEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomStatusType']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomStatusTypeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomStatusTypeEdge'] = ResolversParentTypes['CustomStatusTypeEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CustomStatusType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EmployeeDetailsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmployeeDetailsType'] = ResolversParentTypes['EmployeeDetailsType']> = {
  organisation_type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeLeadResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmployeeLead'] = ResolversParentTypes['EmployeeLead']> = {
  authority?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  budget?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['CommentConnection']>, ParentType, ContextType, Partial<EmployeeLeadCommentsArgs>>;
  comments_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  contact_detail?: Resolver<Maybe<ResolversTypes['ContactInfo']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  created_via?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  engagements?: Resolver<Maybe<ResolversTypes['EngagementConnection']>, ParentType, ContextType, Partial<EmployeeLeadEngagementsArgs>>;
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  home_lc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  industry?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  invitation_sent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  job_role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lead_attachments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageType']>>>, ParentType, ContextType>;
  managers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  need?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organisation_type?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  organization_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['EmployeeLeadPermissionType']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  person_last_active_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  product_interest?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  qualification_score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  referral_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_last_updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  timing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeLeadListResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmployeeLeadList'] = ResolversParentTypes['EmployeeLeadList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmployeeLead']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeLeadMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmployeeLeadMutationQuery'] = ResolversParentTypes['EmployeeLeadMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  bulkAssignManagersForEmployeeLead?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmployeeLead']>>>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryBulkAssignManagersForEmployeeLeadArgs>>;
  bulkUnassignManagersForEmployeeLead?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmployeeLead']>>>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryBulkUnassignManagersForEmployeeLeadArgs>>;
  createEmployeeLead?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryCreateEmployeeLeadArgs>>;
  employeeLeadAttemptedToContact?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryEmployeeLeadAttemptedToContactArgs>>;
  employeeLeadConnected?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryEmployeeLeadConnectedArgs>>;
  employeeLeadContractSent?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryEmployeeLeadContractSentArgs>>;
  employeeLeadContractSigned?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryEmployeeLeadContractSignedArgs>>;
  employeeLeadCreate?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryEmployeeLeadCreateArgs>>;
  employeeLeadDealLost?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryEmployeeLeadDealLostArgs>>;
  employeeLeadFuturePipeline?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryEmployeeLeadFuturePipelineArgs>>;
  employeeLeadNewLead?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryEmployeeLeadNewLeadArgs>>;
  employeeLeadProposalSent?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryEmployeeLeadProposalSentArgs>>;
  employeeLeadSendInvite?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryEmployeeLeadSendInviteArgs>>;
  employeeLeadUpdate?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryEmployeeLeadUpdateArgs>>;
  moveEmployeeLeadToAttemptedToContact?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryMoveEmployeeLeadToAttemptedToContactArgs>>;
  moveEmployeeLeadToConnected?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryMoveEmployeeLeadToConnectedArgs>>;
  moveEmployeeLeadToContractSent?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryMoveEmployeeLeadToContractSentArgs>>;
  moveEmployeeLeadToContractSigned?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryMoveEmployeeLeadToContractSignedArgs>>;
  moveEmployeeLeadToDealLost?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryMoveEmployeeLeadToDealLostArgs>>;
  moveEmployeeLeadToFuturePipeline?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryMoveEmployeeLeadToFuturePipelineArgs>>;
  moveEmployeeLeadToNewLead?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryMoveEmployeeLeadToNewLeadArgs>>;
  moveEmployeeLeadToProposalSent?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryMoveEmployeeLeadToProposalSentArgs>>;
  sendInviteToEmployeeLead?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQuerySendInviteToEmployeeLeadArgs>>;
  updateEmployeeLead?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadMutationQueryUpdateEmployeeLeadArgs>>;
};

export type EmployeeLeadPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmployeeLeadPermissionType'] = ResolversParentTypes['EmployeeLeadPermissionType']> = {
  can_add_engagement?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_attempted_to_contact?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_connected?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_contract_sent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_contract_signed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_deal_lost?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_future_pipeline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_new_lead?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_proposal_sent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeLeadQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmployeeLeadQuery'] = ResolversParentTypes['EmployeeLeadQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  employeeLead?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadQueryEmployeeLeadArgs>>;
  employeeLeadGet?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<EmployeeLeadQueryEmployeeLeadGetArgs>>;
  employeeLeads?: Resolver<Maybe<ResolversTypes['EmployeeLeadList']>, ParentType, ContextType, Partial<EmployeeLeadQueryEmployeeLeadsArgs>>;
};

export type EngagementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Engagement'] = ResolversParentTypes['Engagement']> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  engagement_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  engagement_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['EngagementPermissionType']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EngagementConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EngagementConnection'] = ResolversParentTypes['EngagementConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['EngagementEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Engagement']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EngagementEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EngagementEdge'] = ResolversParentTypes['EngagementEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Engagement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EngagementMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EngagementMutationQuery'] = ResolversParentTypes['EngagementMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  engagementCreate?: Resolver<Maybe<ResolversTypes['Engagement']>, ParentType, ContextType, RequireFields<EngagementMutationQueryEngagementCreateArgs, 'employee_lead_id'>>;
  engagementDelete?: Resolver<Maybe<ResolversTypes['Engagement']>, ParentType, ContextType, RequireFields<EngagementMutationQueryEngagementDeleteArgs, 'id'>>;
  engagementUpdate?: Resolver<Maybe<ResolversTypes['Engagement']>, ParentType, ContextType, RequireFields<EngagementMutationQueryEngagementUpdateArgs, 'id'>>;
};

export type EngagementPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EngagementPermissionType'] = ResolversParentTypes['EngagementPermissionType']> = {
  can_delete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityGoalResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityGoal'] = ResolversParentTypes['EntityGoal']> = {
  achieved?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exchange_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  goal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goal_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  opportunity_duration_type?: Resolver<Maybe<ResolversTypes['OpportunityDurationType']>, ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  sub_product_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityPlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityPlan'] = ResolversParentTypes['EntityPlan']> = {
  deadline?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  file_import?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityPlanQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityPlanQuery'] = ResolversParentTypes['EntityPlanQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  entityPlans?: Resolver<Maybe<Array<Maybe<ResolversTypes['EntityPlan']>>>, ParentType, ContextType, RequireFields<EntityPlanQueryEntityPlansArgs, 'office_id'>>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  active_registrations_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  address_detail?: Resolver<Maybe<ResolversTypes['AddressInfo']>, ParentType, ContextType>;
  agenda_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_online_payment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['CommentConnection']>, ParentType, ContextType, Partial<EventCommentsArgs>>;
  completeness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  confirmed_registration_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cover_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date_published?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  event_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  favourite?: Resolver<Maybe<ResolversTypes['Favourite']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  managers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  missing_fields?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['EventPermissionType']>, ParentType, ContextType>;
  published_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  registration?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType>;
  sdg_goals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType>;
  speakers?: Resolver<Maybe<ResolversTypes['EventSpeakerConnection']>, ParentType, ContextType, Partial<EventSpeakersArgs>>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success_message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag_lists?: Resolver<Maybe<ResolversTypes['TagListConnection']>, ParentType, ContextType, Partial<EventTag_ListsArgs>>;
  tickets?: Resolver<Maybe<ResolversTypes['EventTicketConnection']>, ParentType, ContextType, Partial<EventTicketsArgs>>;
  tickets_available?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  todo_type?: Resolver<Maybe<ResolversTypes['TodoType']>, ParentType, ContextType>;
  total_ticket_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unpublished_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventListResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventList'] = ResolversParentTypes['EventList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventMutationQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventMutationQueryType'] = ResolversParentTypes['EventMutationQueryType']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  archiveEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationQueryTypeArchiveEventArgs, 'id'>>;
  eventCreate?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, Partial<EventMutationQueryTypeEventCreateArgs>>;
  eventUpdate?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationQueryTypeEventUpdateArgs, 'id'>>;
  favouriteEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationQueryTypeFavouriteEventArgs, 'id'>>;
  publishEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationQueryTypePublishEventArgs, 'id'>>;
  unfavouriteEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationQueryTypeUnfavouriteEventArgs, 'id'>>;
  unpublishEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationQueryTypeUnpublishEventArgs, 'id'>>;
};

export type EventPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventPermissionType'] = ResolversParentTypes['EventPermissionType']> = {
  can_publish?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_unpublish?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventQuery'] = ResolversParentTypes['EventQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  eventGet?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventQueryEventGetArgs, 'id'>>;
  eventList?: Resolver<Maybe<ResolversTypes['EventList']>, ParentType, ContextType, Partial<EventQueryEventListArgs>>;
  similarEvents?: Resolver<Maybe<ResolversTypes['EventList']>, ParentType, ContextType, Partial<EventQuerySimilarEventsArgs>>;
};

export type EventRegistrationResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventRegistration'] = ResolversParentTypes['EventRegistration']> = {
  cancelled_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  cancelled_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  confirmed_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  confirmed_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  event_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  event_ticket?: Resolver<Maybe<ResolversTypes['EventTicket']>, ParentType, ContextType>;
  follow_up?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  followed_up_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  followed_up_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  paid_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  paid_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  payment_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['EventRegistrationPermissionType']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Transaction']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventRegistrationListResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventRegistrationList'] = ResolversParentTypes['EventRegistrationList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventRegistration']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventRegistrationMutationQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventRegistrationMutationQueryType'] = ResolversParentTypes['EventRegistrationMutationQueryType']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  eventRegistrationCancel?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType, RequireFields<EventRegistrationMutationQueryTypeEventRegistrationCancelArgs, 'id'>>;
  eventRegistrationConfirm?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType, RequireFields<EventRegistrationMutationQueryTypeEventRegistrationConfirmArgs, 'id'>>;
  eventRegistrationCreate?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType, Partial<EventRegistrationMutationQueryTypeEventRegistrationCreateArgs>>;
  eventRegistrationFollowUp?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType, RequireFields<EventRegistrationMutationQueryTypeEventRegistrationFollowUpArgs, 'id'>>;
  eventRegistrationMakeTransaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<EventRegistrationMutationQueryTypeEventRegistrationMakeTransactionArgs, 'id'>>;
  eventRegistrationPayByCash?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType, RequireFields<EventRegistrationMutationQueryTypeEventRegistrationPayByCashArgs, 'id'>>;
};

export type EventRegistrationPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventRegistrationPermissionType'] = ResolversParentTypes['EventRegistrationPermissionType']> = {
  can_cancel?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_confirm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_followup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventRegistrationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventRegistrationQuery'] = ResolversParentTypes['EventRegistrationQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  eventRegistrationGet?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType, RequireFields<EventRegistrationQueryEventRegistrationGetArgs, 'id'>>;
  eventRegistrationList?: Resolver<Maybe<ResolversTypes['EventRegistrationList']>, ParentType, ContextType, Partial<EventRegistrationQueryEventRegistrationListArgs>>;
};

export type EventSpeakerResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventSpeaker'] = ResolversParentTypes['EventSpeaker']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cover_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  designation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  linkedin_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventSpeakerConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventSpeakerConnection'] = ResolversParentTypes['EventSpeakerConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventSpeakerEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventSpeaker']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventSpeakerEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventSpeakerEdge'] = ResolversParentTypes['EventSpeakerEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['EventSpeaker']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventSpeakerMutationQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventSpeakerMutationQueryType'] = ResolversParentTypes['EventSpeakerMutationQueryType']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  eventSpeakerCreate?: Resolver<Maybe<ResolversTypes['EventSpeaker']>, ParentType, ContextType, Partial<EventSpeakerMutationQueryTypeEventSpeakerCreateArgs>>;
  eventSpeakerDelete?: Resolver<Maybe<ResolversTypes['EventSpeaker']>, ParentType, ContextType, RequireFields<EventSpeakerMutationQueryTypeEventSpeakerDeleteArgs, 'id'>>;
  eventSpeakerUpdate?: Resolver<Maybe<ResolversTypes['EventSpeaker']>, ParentType, ContextType, RequireFields<EventSpeakerMutationQueryTypeEventSpeakerUpdateArgs, 'id'>>;
};

export type EventTicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTicket'] = ResolversParentTypes['EventTicket']> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  engagement_event_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sale_end_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  sale_start_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ticket_currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  ticket_fee?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ticket_total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tickets_available?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventTicketConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTicketConnection'] = ResolversParentTypes['EventTicketConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventTicketEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventTicket']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventTicketEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTicketEdge'] = ResolversParentTypes['EventTicketEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['EventTicket']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventTicketMutationQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTicketMutationQueryType'] = ResolversParentTypes['EventTicketMutationQueryType']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  eventTicketCreate?: Resolver<Maybe<ResolversTypes['EventTicket']>, ParentType, ContextType, Partial<EventTicketMutationQueryTypeEventTicketCreateArgs>>;
  eventTicketDelete?: Resolver<Maybe<ResolversTypes['EventTicket']>, ParentType, ContextType, RequireFields<EventTicketMutationQueryTypeEventTicketDeleteArgs, 'id'>>;
  eventTicketUpdate?: Resolver<Maybe<ResolversTypes['EventTicket']>, ParentType, ContextType, RequireFields<EventTicketMutationQueryTypeEventTicketUpdateArgs, 'id'>>;
};

export type ExpaSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExpaSettings'] = ResolversParentTypes['ExpaSettings']> = {
  email_notifications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  instant_notifications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  notification_summaries?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  notification_time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  notify_on_assignment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  notify_on_managed_opportunity_applications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  notify_on_managed_person_applications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  send_to_aiesec_email?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Facets'] = ResolversParentTypes['Facets']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terms?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FavouriteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Favourite'] = ResolversParentTypes['Favourite']> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  favourable_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  favourable_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feature'] = ResolversParentTypes['Feature']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileImportMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileImportMutationQuery'] = ResolversParentTypes['FileImportMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  fileImport?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<FileImportMutationQueryFileImportArgs>>;
};

export type FindLcQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['FindLcQuery'] = ResolversParentTypes['FindLcQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  findLc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, Partial<FindLcQueryFindLcArgs>>;
};

export type GenerateEmailResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenerateEmail'] = ResolversParentTypes['GenerateEmail']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalPartnerRequestMutationQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalPartnerRequestMutationQueryType'] = ResolversParentTypes['GlobalPartnerRequestMutationQueryType']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createGlobalPartnerRequest?: Resolver<Maybe<ResolversTypes['GlobalPartnerRequestType']>, ParentType, ContextType, Partial<GlobalPartnerRequestMutationQueryTypeCreateGlobalPartnerRequestArgs>>;
};

export type GlobalPartnerRequestQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalPartnerRequestQuery'] = ResolversParentTypes['GlobalPartnerRequestQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allGlobalPartnerRequests?: Resolver<Maybe<Array<Maybe<ResolversTypes['GlobalPartnerRequestType']>>>, ParentType, ContextType>;
};

export type GlobalPartnerRequestTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalPartnerRequestType'] = ResolversParentTypes['GlobalPartnerRequestType']> = {
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  no_of_opportunities?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getImage?: Resolver<Maybe<ResolversTypes['ImageType']>, ParentType, ContextType, RequireFields<ImageGetImageArgs, 'id'>>;
};

export type ImageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageType'] = ResolversParentTypes['ImageType']> = {
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filesize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ImageTypeUrlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InboundEmailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['InboundEmailType'] = ResolversParentTypes['InboundEmailType']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  inboundable_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inboundable_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InterviewDetailsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['InterviewDetailsType'] = ResolversParentTypes['InterviewDetailsType']> = {
  aiesec_to_conduct_interview?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interview_platform_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maximum_video_duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_assessment_answer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InterviewSlotResolvers<ContextType = any, ParentType extends ResolversParentTypes['InterviewSlot'] = ResolversParentTypes['InterviewSlot']> = {
  accepted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  attendee_emails?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attendee']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  opportunity_application_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opportunity_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  timeslot?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvitationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Invitation'] = ResolversParentTypes['Invitation']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoiceMutationQuery'] = ResolversParentTypes['InvoiceMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createInvoice?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, Partial<InvoiceMutationQueryCreateInvoiceArgs>>;
  deleteInvoice?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, RequireFields<InvoiceMutationQueryDeleteInvoiceArgs, 'id'>>;
  invoiceApproveCashPayment?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, RequireFields<InvoiceMutationQueryInvoiceApproveCashPaymentArgs, 'id'>>;
  invoicePayByCash?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, RequireFields<InvoiceMutationQueryInvoicePayByCashArgs, 'id'>>;
  invoiceTransactionCreate?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<InvoiceMutationQueryInvoiceTransactionCreateArgs, 'id'>>;
  updateInvoice?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, RequireFields<InvoiceMutationQueryUpdateInvoiceArgs, 'id'>>;
  updatePaymentInvoice?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, RequireFields<InvoiceMutationQueryUpdatePaymentInvoiceArgs, 'id'>>;
};

export type InvoiceQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoiceQuery'] = ResolversParentTypes['InvoiceQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getInvoice?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, RequireFields<InvoiceQueryGetInvoiceArgs, 'id'>>;
};

export type InvoiceTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoiceType'] = ResolversParentTypes['InvoiceType']> = {
  attachment_file_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  branch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType>;
  cash_payment_approved_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  cash_payment_approved_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  due_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  opportunity_applications?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType>;
  paid_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  paid_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  payee_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  payment_method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Transaction']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<InvoiceTypeUrlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceTypeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoiceTypeConnection'] = ResolversParentTypes['InvoiceTypeConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['InvoiceTypeEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['InvoiceType']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceTypeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoiceTypeEdge'] = ResolversParentTypes['InvoiceTypeEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LcAlignmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['LcAlignment'] = ResolversParentTypes['LcAlignment']> = {
  alignment_type?: Resolver<Maybe<ResolversTypes['AlignmentTypes']>, ParentType, ContextType>;
  auto_assignments?: Resolver<Maybe<ResolversTypes['PersonConnection']>, ParentType, ContextType, Partial<LcAlignmentAuto_AssignmentsArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  keywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  mc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LcAlignmentsMutationQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LcAlignmentsMutationQueryType'] = ResolversParentTypes['LcAlignmentsMutationQueryType']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  addAutoAssignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType, RequireFields<LcAlignmentsMutationQueryTypeAddAutoAssignmentArgs, 'id'>>;
  addLcAlignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType, RequireFields<LcAlignmentsMutationQueryTypeAddLcAlignmentArgs, 'office_id'>>;
  addSignupQuestions?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<LcAlignmentsMutationQueryTypeAddSignupQuestionsArgs, 'id'>>;
  deleteLcAlignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType, RequireFields<LcAlignmentsMutationQueryTypeDeleteLcAlignmentArgs, 'id'>>;
  updateLcAlignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType, RequireFields<LcAlignmentsMutationQueryTypeUpdateLcAlignmentArgs, 'id'>>;
  updateLcAlignmentLabel?: Resolver<Maybe<Array<Maybe<ResolversTypes['LcAlignment']>>>, ParentType, ContextType, RequireFields<LcAlignmentsMutationQueryTypeUpdateLcAlignmentLabelArgs, 'alignment_type' | 'label' | 'office_id'>>;
};

export type LcAlignmentsQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LcAlignmentsQueryType'] = ResolversParentTypes['LcAlignmentsQueryType']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getLcAlignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType, RequireFields<LcAlignmentsQueryTypeGetLcAlignmentArgs, 'id'>>;
  lcAlignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType, RequireFields<LcAlignmentsQueryTypeLcAlignmentArgs, 'id'>>;
  lcAlignments?: Resolver<Maybe<Array<Maybe<ResolversTypes['LcAlignment']>>>, ParentType, ContextType, RequireFields<LcAlignmentsQueryTypeLcAlignmentsArgs, 'alignment_type' | 'id'>>;
  lcAlignmentsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['LcAlignment']>>>, ParentType, ContextType, RequireFields<LcAlignmentsQueryTypeLcAlignmentsListArgs, 'q'>>;
  signupQuestions?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<LcAlignmentsQueryTypeSignupQuestionsArgs, 'id'>>;
};

export type LdaQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LdaQuery'] = ResolversParentTypes['LdaQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  ldaSurvey?: Resolver<Maybe<ResolversTypes['LdaResponse']>, ParentType, ContextType, RequireFields<LdaQueryLdaSurveyArgs, 'lda_survey_id'>>;
};

export type LdaResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LdaResponse'] = ResolversParentTypes['LdaResponse']> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lda_survey_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ldm_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<ResolversTypes['SurveyQuestion']>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LdaResponseMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LdaResponseMutationQuery'] = ResolversParentTypes['LdaResponseMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  ldaResponse?: Resolver<Maybe<ResolversTypes['LdaResponse']>, ParentType, ContextType, RequireFields<LdaResponseMutationQueryLdaResponseArgs, 'lda_survey_id' | 'responses'>>;
};

export type LdmQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LdmQuery'] = ResolversParentTypes['LdmQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allSurvey?: Resolver<Maybe<Array<Maybe<ResolversTypes['Survey']>>>, ParentType, ContextType>;
  ldmReport?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<LdmQueryLdmReportArgs>>;
  ldmSurvey?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyQuestion']>>>, ParentType, ContextType, Partial<LdmQueryLdmSurveyArgs>>;
};

export type LdmResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LdmResponse'] = ResolversParentTypes['LdmResponse']> = {
  available_from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  available_until?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  branch_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lda_survey_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ldm_report?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  ldm_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  office_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  opportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType>;
  opportunity_application_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  opportunity_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  person_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  programme_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LdmResponseMutationQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LdmResponseMutationQueryType'] = ResolversParentTypes['LdmResponseMutationQueryType']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  ldmResponse?: Resolver<Maybe<ResolversTypes['LdmResponse']>, ParentType, ContextType, Partial<LdmResponseMutationQueryTypeLdmResponseArgs>>;
};

export type LegalInfoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LegalInfoType'] = ResolversParentTypes['LegalInfoType']> = {
  general_info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  health_insurance_info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visa_duration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visa_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visa_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visa_work_permit_info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListResolvers<ContextType = any, ParentType extends ResolversParentTypes['List'] = ResolversParentTypes['List']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allCurrencies?: Resolver<Array<Maybe<ResolversTypes['Currency']>>, ParentType, ContextType>;
  allSdgTargets?: Resolver<Maybe<Array<Maybe<ResolversTypes['SdgTarget']>>>, ParentType, ContextType, Partial<ListAllSdgTargetsArgs>>;
  measureOfImpacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType, RequireFields<ListMeasureOfImpactsArgs, 'sdg_goal_id'>>;
};

export type LogisticInfoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogisticInfoType'] = ResolversParentTypes['LogisticInfoType']> = {
  accommodation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accommodation_additional_info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accommodation_covered?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accommodation_provided?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  computer_provided?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  food?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  food_covered?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  food_provided?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  food_weekends?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  no_of_meals?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transportation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transportation_additional_info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transportation_covered?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transportation_provided?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transportation_weekends?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailTemplate'] = ResolversParentTypes['MailTemplate']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mail_template_type?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailTemplateDeliverabilityReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailTemplateDeliverabilityReport'] = ResolversParentTypes['MailTemplateDeliverabilityReport']> = {
  report?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailTemplateMutationQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailTemplateMutationQueryType'] = ResolversParentTypes['MailTemplateMutationQueryType']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createMailTemplate?: Resolver<Maybe<ResolversTypes['MailTemplate']>, ParentType, ContextType, Partial<MailTemplateMutationQueryTypeCreateMailTemplateArgs>>;
  deleteMailTemplate?: Resolver<Maybe<ResolversTypes['MailTemplate']>, ParentType, ContextType, RequireFields<MailTemplateMutationQueryTypeDeleteMailTemplateArgs, 'id'>>;
  publishMailTemplate?: Resolver<Maybe<ResolversTypes['MailTemplate']>, ParentType, ContextType, RequireFields<MailTemplateMutationQueryTypePublishMailTemplateArgs, 'id'>>;
  sendTestMailTemplate?: Resolver<Maybe<ResolversTypes['MailTemplate']>, ParentType, ContextType, RequireFields<MailTemplateMutationQueryTypeSendTestMailTemplateArgs, 'id'>>;
  updateMailTemplate?: Resolver<Maybe<ResolversTypes['MailTemplate']>, ParentType, ContextType, RequireFields<MailTemplateMutationQueryTypeUpdateMailTemplateArgs, 'id'>>;
};

export type MailTemplateQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailTemplateQueryType'] = ResolversParentTypes['MailTemplateQueryType']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  deliverabilityReport?: Resolver<Maybe<ResolversTypes['MailTemplateDeliverabilityReport']>, ParentType, ContextType, RequireFields<MailTemplateQueryTypeDeliverabilityReportArgs, 'mail_template_type_name'>>;
  getMailTemplate?: Resolver<Maybe<ResolversTypes['MailTemplate']>, ParentType, ContextType, Partial<MailTemplateQueryTypeGetMailTemplateArgs>>;
  mailTemplates?: Resolver<Maybe<Array<Maybe<ResolversTypes['MailTemplate']>>>, ParentType, ContextType, Partial<MailTemplateQueryTypeMailTemplatesArgs>>;
};

export type ManagerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Manager'] = ResolversParentTypes['Manager']> = {
  accepted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  accepted_reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aiesec_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contacted_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contacted_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cover_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  interviewed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nps_score?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['PersonPermissionType']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type McFeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['McFeature'] = ResolversParentTypes['McFeature']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  feature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  option?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type McFeatureQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['McFeatureQuery'] = ResolversParentTypes['McFeatureQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  mcFeatures?: Resolver<Maybe<Array<Maybe<ResolversTypes['McFeature']>>>, ParentType, ContextType, Partial<McFeatureQueryMcFeaturesArgs>>;
};

export type MemberLeadResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberLead'] = ResolversParentTypes['MemberLead']> = {
  academic_level?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  backgrounds?: Resolver<Maybe<Array<ResolversTypes['ConstantMap']>>, ParentType, ContextType>;
  checklist_response?: Resolver<Maybe<ResolversTypes['ChecklistResponse']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['CommentConnection']>, ParentType, ContextType, Partial<MemberLeadCommentsArgs>>;
  comments_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  created_via?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  date_moved_to_accepted?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_moved_to_contacted?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_moved_to_in_process?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_moved_to_rejected?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_of_birth?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employment_status?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  home_lc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lc_alignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType>;
  lead_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  managers?: Resolver<Maybe<Array<ResolversTypes['Person']>>, ParentType, ContextType>;
  motivation_reason?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  moved_to_accepted_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  moved_to_contacted_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  moved_to_in_process_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  moved_to_rejected_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['MemberLeadPermissionType']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferred_mode_of_contact?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  referral_type?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_last_updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberLeadListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberLeadList'] = ResolversParentTypes['MemberLeadList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemberLead']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberLeadMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberLeadMutationQuery'] = ResolversParentTypes['MemberLeadMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  acceptMemberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MemberLeadMutationQueryAcceptMemberLeadArgs, 'id'>>;
  contactMemberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MemberLeadMutationQueryContactMemberLeadArgs, 'id'>>;
  createChecklistResponseMemberLead?: Resolver<Maybe<ResolversTypes['ChecklistResponse']>, ParentType, ContextType, RequireFields<MemberLeadMutationQueryCreateChecklistResponseMemberLeadArgs, 'answers' | 'id' | 'survey_id'>>;
  createMemberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, Partial<MemberLeadMutationQueryCreateMemberLeadArgs>>;
  memberLeadAccept?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MemberLeadMutationQueryMemberLeadAcceptArgs, 'id'>>;
  memberLeadChecklistResponseCreate?: Resolver<Maybe<ResolversTypes['ChecklistResponse']>, ParentType, ContextType, RequireFields<MemberLeadMutationQueryMemberLeadChecklistResponseCreateArgs, 'answers' | 'id' | 'survey_id'>>;
  memberLeadContact?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MemberLeadMutationQueryMemberLeadContactArgs, 'id'>>;
  memberLeadCreate?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, Partial<MemberLeadMutationQueryMemberLeadCreateArgs>>;
  memberLeadProcess?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MemberLeadMutationQueryMemberLeadProcessArgs, 'id'>>;
  memberLeadReject?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MemberLeadMutationQueryMemberLeadRejectArgs, 'id'>>;
  memberLeadUpdate?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MemberLeadMutationQueryMemberLeadUpdateArgs, 'id'>>;
  processMemberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MemberLeadMutationQueryProcessMemberLeadArgs, 'id'>>;
  rejectMemberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MemberLeadMutationQueryRejectMemberLeadArgs, 'id'>>;
  updateMemberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MemberLeadMutationQueryUpdateMemberLeadArgs, 'id'>>;
};

export type MemberLeadPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberLeadPermissionType'] = ResolversParentTypes['MemberLeadPermissionType']> = {
  can_fill_checklist?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_accept?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_contact?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_in_process?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_reject?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberLeadQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberLeadQuery'] = ResolversParentTypes['MemberLeadQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  checkIfMemberLeadExists?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MemberLeadQueryCheckIfMemberLeadExistsArgs, 'email'>>;
  memberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, Partial<MemberLeadQueryMemberLeadArgs>>;
  memberLeadCheckIfExists?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MemberLeadQueryMemberLeadCheckIfExistsArgs, 'email'>>;
  memberLeadGet?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, Partial<MemberLeadQueryMemberLeadGetArgs>>;
  memberLeads?: Resolver<Maybe<ResolversTypes['MemberLeadList']>, ParentType, ContextType, Partial<MemberLeadQueryMemberLeadsArgs>>;
};

export type MemberPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberPosition'] = ResolversParentTypes['MemberPosition']> = {
  committee_department?: Resolver<Maybe<ResolversTypes['CommitteeDepartmentType']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  exit_reason?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  focus_products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  function?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_ixp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ixp_products?: Resolver<Maybe<Array<ResolversTypes['Programme']>>, ParentType, ContextType>;
  lda_links?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  ldm_report?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  membership_lps?: Resolver<Maybe<ResolversTypes['SurveyResponse']>, ParentType, ContextType>;
  no_of_ixps?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  other_exit_reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['MemberPositionPermission']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  reporters?: Resolver<Maybe<Array<ResolversTypes['MemberPosition']>>, ParentType, ContextType>;
  reports_to?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  reports_to_position_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  term?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  terminated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  terminated_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vp_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberPositionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberPositionConnection'] = ResolversParentTypes['MemberPositionConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemberPositionEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemberPosition']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberPositionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberPositionEdge'] = ResolversParentTypes['MemberPositionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberPositionListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberPositionList'] = ResolversParentTypes['MemberPositionList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemberPosition']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberPositionMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberPositionMutationQuery'] = ResolversParentTypes['MemberPositionMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createMemberPosition?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MemberPositionMutationQueryCreateMemberPositionArgs, 'member_position'>>;
  memberPositionCreate?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MemberPositionMutationQueryMemberPositionCreateArgs, 'member_position'>>;
  memberPositionTerminate?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MemberPositionMutationQueryMemberPositionTerminateArgs, 'exit_reason_id' | 'id'>>;
  memberPositionUpdate?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MemberPositionMutationQueryMemberPositionUpdateArgs, 'id' | 'member_position'>>;
  terminateMemberPosition?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MemberPositionMutationQueryTerminateMemberPositionArgs, 'exit_reason_id' | 'id'>>;
  updateMemberPosition?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MemberPositionMutationQueryUpdateMemberPositionArgs, 'id' | 'member_position'>>;
};

export type MemberPositionPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberPositionPermission'] = ResolversParentTypes['MemberPositionPermission']> = {
  can_terminate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_view_lda?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberPositionQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberPositionQuery'] = ResolversParentTypes['MemberPositionQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  downloadMemberPositions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MemberPositionQueryDownloadMemberPositionsArgs, 'columns'>>;
  memberPosition?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MemberPositionQueryMemberPositionArgs, 'id'>>;
  memberPositions?: Resolver<Maybe<ResolversTypes['MemberPositionList']>, ParentType, ContextType, Partial<MemberPositionQueryMemberPositionsArgs>>;
  memberPositionsDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MemberPositionQueryMemberPositionsDownloadArgs, 'columns'>>;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  delivered_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['ConversationParticipantPerson']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  opened_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageConnection'] = ResolversParentTypes['MessageConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageEdge'] = ResolversParentTypes['MessageEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationType'] = ResolversParentTypes['MutationType']> = {
  acceptMemberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MutationTypeAcceptMemberLeadArgs, 'id'>>;
  activateCampaign?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<MutationTypeActivateCampaignArgs, 'id'>>;
  addAutoAssignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType, RequireFields<MutationTypeAddAutoAssignmentArgs, 'id'>>;
  addContractProgrammeFee?: Resolver<Maybe<ResolversTypes['ProgrammeFee']>, ParentType, ContextType, RequireFields<MutationTypeAddContractProgrammeFeeArgs, 'id'>>;
  addCurrentPersonCv?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType, Partial<MutationTypeAddCurrentPersonCvArgs>>;
  addLcAlignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType, RequireFields<MutationTypeAddLcAlignmentArgs, 'office_id'>>;
  addOpportunityQuestion?: Resolver<Maybe<ResolversTypes['OpportunityQuestion']>, ParentType, ContextType, Partial<MutationTypeAddOpportunityQuestionArgs>>;
  addPictureToAccommodation?: Resolver<Maybe<ResolversTypes['Picture']>, ParentType, ContextType, RequireFields<MutationTypeAddPictureToAccommodationArgs, 'id'>>;
  addQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, Partial<MutationTypeAddQuestionArgs>>;
  addSelectionProcess?: Resolver<Maybe<ResolversTypes['SelectionProcess']>, ParentType, ContextType, RequireFields<MutationTypeAddSelectionProcessArgs, 'opportunity_id'>>;
  addSignupQuestions?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<MutationTypeAddSignupQuestionsArgs, 'id'>>;
  addTodoToGoal?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationTypeAddTodoToGoalArgs, 'goal_id'>>;
  anApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeAnApplicationArgs, 'id'>>;
  applicationBulkMessage?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<MutationTypeApplicationBulkMessageArgs>>;
  applicationExtendExperience?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeApplicationExtendExperienceArgs, 'experience_end_date' | 'id'>>;
  applicationExtendRemoteExperience?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeApplicationExtendRemoteExperienceArgs, 'id' | 'remote_end_date'>>;
  applicationQuestionnaireUpdate?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeApplicationQuestionnaireUpdateArgs, 'id'>>;
  applicationScorecardAttributeDelete?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeApplicationScorecardAttributeDeleteArgs, 'id'>>;
  approveApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeApproveApplicationArgs, 'id'>>;
  approveBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<MutationTypeApproveBranchArgs, 'id'>>;
  approveBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationTypeApproveBranchEmployeeArgs, 'id'>>;
  approveOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeApproveOrganisationArgs, 'id'>>;
  archiveEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationTypeArchiveEventArgs, 'id'>>;
  archiveOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeArchiveOrganisationArgs, 'id'>>;
  archivePerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationTypeArchivePersonArgs, 'id'>>;
  assignProgrammeManager?: Resolver<Maybe<ResolversTypes['ProgrammeManager']>, ParentType, ContextType, RequireFields<MutationTypeAssignProgrammeManagerArgs, 'id'>>;
  assignQuestionnaire?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeAssignQuestionnaireArgs, 'id' | 'questionnaire_id'>>;
  branchApprove?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<MutationTypeBranchApproveArgs, 'id'>>;
  branchContracts?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType, Partial<MutationTypeBranchContractsArgs>>;
  branchDeny?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<MutationTypeBranchDenyArgs, 'id'>>;
  branchEmployeeApprove?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationTypeBranchEmployeeApproveArgs, 'id'>>;
  branchEmployeeCreate?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, Partial<MutationTypeBranchEmployeeCreateArgs>>;
  branchEmployeeDelete?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationTypeBranchEmployeeDeleteArgs, 'id'>>;
  branchEmployeeReject?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationTypeBranchEmployeeRejectArgs, 'id'>>;
  branchEmployeeUpdate?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationTypeBranchEmployeeUpdateArgs, 'id'>>;
  breakApprovedApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeBreakApprovedApplicationArgs, 'id'>>;
  breakRealizationApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeBreakRealizationApplicationArgs, 'id'>>;
  breakRemoteRealization?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeBreakRemoteRealizationArgs, 'id'>>;
  bulkAssignManagersForEmployeeLead?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmployeeLead']>>>, ParentType, ContextType, Partial<MutationTypeBulkAssignManagersForEmployeeLeadArgs>>;
  bulkAssignManagersForOpportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType, Partial<MutationTypeBulkAssignManagersForOpportunitiesArgs>>;
  bulkAssignManagersForPeople?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<MutationTypeBulkAssignManagersForPeopleArgs>>;
  bulkCreateQuestion?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, Partial<MutationTypeBulkCreateQuestionArgs>>;
  bulkDeleteQuestion?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, Partial<MutationTypeBulkDeleteQuestionArgs>>;
  bulkFollowup?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, RequireFields<MutationTypeBulkFollowupArgs, 'follow_up_id'>>;
  bulkMatchApplications?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<MutationTypeBulkMatchApplicationsArgs>>;
  bulkOpenOpportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType, Partial<MutationTypeBulkOpenOpportunitiesArgs>>;
  bulkRejectApplications?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<MutationTypeBulkRejectApplicationsArgs>>;
  bulkRemoveOpportunityQuestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityQuestion']>>>, ParentType, ContextType, Partial<MutationTypeBulkRemoveOpportunityQuestionsArgs>>;
  bulkTagUpdateForApplications?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<MutationTypeBulkTagUpdateForApplicationsArgs>>;
  bulkTagUpdateForOpportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType, Partial<MutationTypeBulkTagUpdateForOpportunitiesArgs>>;
  bulkTagUpdateForPeople?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<MutationTypeBulkTagUpdateForPeopleArgs>>;
  bulkUnassignManagersForEmployeeLead?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmployeeLead']>>>, ParentType, ContextType, Partial<MutationTypeBulkUnassignManagersForEmployeeLeadArgs>>;
  bulkUnassignManagersForOpportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType, Partial<MutationTypeBulkUnassignManagersForOpportunitiesArgs>>;
  bulkUnassignManagersForPeople?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<MutationTypeBulkUnassignManagersForPeopleArgs>>;
  bulkUpdateQuestion?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, Partial<MutationTypeBulkUpdateQuestionArgs>>;
  campaignActivate?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<MutationTypeCampaignActivateArgs, 'id'>>;
  campaignCreate?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, Partial<MutationTypeCampaignCreateArgs>>;
  campaignDeactivate?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<MutationTypeCampaignDeactivateArgs, 'id'>>;
  campaignUpdate?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<MutationTypeCampaignUpdateArgs, 'id'>>;
  changeCustomStatusApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeChangeCustomStatusApplicationArgs, 'id'>>;
  clearNotifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Notification']>>>, ParentType, ContextType>;
  clientDataPut?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType, Partial<MutationTypeClientDataPutArgs>>;
  clientDataUpdate?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType, RequireFields<MutationTypeClientDataUpdateArgs, 'id'>>;
  committeeTargetBulkUpdate?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommitteeTarget']>>>, ParentType, ContextType, RequireFields<MutationTypeCommitteeTargetBulkUpdateArgs, 'committee_targets'>>;
  completeApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeCompleteApplicationArgs, 'id'>>;
  completeTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationTypeCompleteTodoArgs, 'id'>>;
  contactMemberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MutationTypeContactMemberLeadArgs, 'id'>>;
  createAccommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, Partial<MutationTypeCreateAccommodationArgs>>;
  createAccommodationAssignment?: Resolver<Maybe<ResolversTypes['AccommodationAssignment']>, ParentType, ContextType, Partial<MutationTypeCreateAccommodationAssignmentArgs>>;
  createAccommodationAvailability?: Resolver<Maybe<ResolversTypes['AccommodationAvailability']>, ParentType, ContextType, Partial<MutationTypeCreateAccommodationAvailabilityArgs>>;
  createApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, Partial<MutationTypeCreateApplicationArgs>>;
  createAttachment?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType, Partial<MutationTypeCreateAttachmentArgs>>;
  createBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, Partial<MutationTypeCreateBranchArgs>>;
  createBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationTypeCreateBranchEmployeeArgs, 'branch_id' | 'person_id'>>;
  createCampaign?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<MutationTypeCreateCampaignArgs, 'office_id'>>;
  createChecklistResponseMemberLead?: Resolver<Maybe<ResolversTypes['ChecklistResponse']>, ParentType, ContextType, RequireFields<MutationTypeCreateChecklistResponseMemberLeadArgs, 'answers' | 'id' | 'survey_id'>>;
  createCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, Partial<MutationTypeCreateCityArgs>>;
  createCityLc?: Resolver<Maybe<ResolversTypes['CityLc']>, ParentType, ContextType, Partial<MutationTypeCreateCityLcArgs>>;
  createComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, Partial<MutationTypeCreateCommentArgs>>;
  createCommentForOpportunity?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationTypeCreateCommentForOpportunityArgs, 'opportunity_id'>>;
  createCommittee?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, Partial<MutationTypeCreateCommitteeArgs>>;
  createCommitteeCity?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<MutationTypeCreateCommitteeCityArgs, 'id'>>;
  createCommitteeDepartment?: Resolver<Maybe<ResolversTypes['CommitteeDepartmentType']>, ParentType, ContextType, RequireFields<MutationTypeCreateCommitteeDepartmentArgs, 'committee_department' | 'office_id'>>;
  createCustomStatusOpportunity?: Resolver<Maybe<ResolversTypes['CustomStatusType']>, ParentType, ContextType, RequireFields<MutationTypeCreateCustomStatusOpportunityArgs, 'opportunity_id'>>;
  createEmployeeLead?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeCreateEmployeeLeadArgs>>;
  createGlobalPartnerRequest?: Resolver<Maybe<ResolversTypes['GlobalPartnerRequestType']>, ParentType, ContextType, Partial<MutationTypeCreateGlobalPartnerRequestArgs>>;
  createGoal?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, Partial<MutationTypeCreateGoalArgs>>;
  createInvoice?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, Partial<MutationTypeCreateInvoiceArgs>>;
  createLocalVolunteerOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeCreateLocalVolunteerOpportunityArgs, 'applications_close_date' | 'id' | 'openings'>>;
  createMailTemplate?: Resolver<Maybe<ResolversTypes['MailTemplate']>, ParentType, ContextType, Partial<MutationTypeCreateMailTemplateArgs>>;
  createMemberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, Partial<MutationTypeCreateMemberLeadArgs>>;
  createMemberPosition?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MutationTypeCreateMemberPositionArgs, 'member_position'>>;
  createNationalPartner?: Resolver<Maybe<ResolversTypes['NationalPartnerType']>, ParentType, ContextType, Partial<MutationTypeCreateNationalPartnerArgs>>;
  createOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, Partial<MutationTypeCreateOpportunityArgs>>;
  createOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, Partial<MutationTypeCreateOrganisationArgs>>;
  createOrganisationScorecard?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, Partial<MutationTypeCreateOrganisationScorecardArgs>>;
  createOrganisationScorecardAttribute?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<MutationTypeCreateOrganisationScorecardAttributeArgs, 'scorecard_id'>>;
  createPage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, Partial<MutationTypeCreatePageArgs>>;
  createPageComponent?: Resolver<Maybe<ResolversTypes['PageComponentDraftType']>, ParentType, ContextType, RequireFields<MutationTypeCreatePageComponentArgs, 'page_id'>>;
  createPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<MutationTypeCreatePersonArgs>>;
  createPersonAcademicExperience?: Resolver<Maybe<ResolversTypes['PreviousExperience']>, ParentType, ContextType, Partial<MutationTypeCreatePersonAcademicExperienceArgs>>;
  createPersonProfessionalExperience?: Resolver<Maybe<ResolversTypes['ProfessionalExperience']>, ParentType, ContextType, Partial<MutationTypeCreatePersonProfessionalExperienceArgs>>;
  createPlatformNps?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType, Partial<MutationTypeCreatePlatformNpsArgs>>;
  createProject?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, Partial<MutationTypeCreateProjectArgs>>;
  createQuestionnaire?: Resolver<Maybe<ResolversTypes['Questionnaire']>, ParentType, ContextType, RequireFields<MutationTypeCreateQuestionnaireArgs, 'company_id'>>;
  createScorecardsApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeCreateScorecardsApplicationArgs, 'id'>>;
  createSlot?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<MutationTypeCreateSlotArgs, 'opportunity_id'>>;
  createSuggestedCountry?: Resolver<Maybe<ResolversTypes['SuggestedCountry']>, ParentType, ContextType, Partial<MutationTypeCreateSuggestedCountryArgs>>;
  createTagList?: Resolver<Maybe<ResolversTypes['TagList']>, ParentType, ContextType, Partial<MutationTypeCreateTagListArgs>>;
  createTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationTypeCreateTeamArgs, 'office_id' | 'term_id'>>;
  createTeamPosition?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, Partial<MutationTypeCreateTeamPositionArgs>>;
  createTerm?: Resolver<Maybe<ResolversTypes['Term']>, ParentType, ContextType, Partial<MutationTypeCreateTermArgs>>;
  createTimeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType, Partial<MutationTypeCreateTimelineArgs>>;
  createTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, Partial<MutationTypeCreateTodoArgs>>;
  createWatchlist?: Resolver<Maybe<ResolversTypes['OpportunityPotentialCandidateType']>, ParentType, ContextType, Partial<MutationTypeCreateWatchlistArgs>>;
  currentPersonAnonymize?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType>;
  currentPersonEfResult?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType>;
  currentPersonSavedFiltersCreate?: Resolver<Maybe<ResolversTypes['SavedFilter']>, ParentType, ContextType, Partial<MutationTypeCurrentPersonSavedFiltersCreateArgs>>;
  currentPersonSavedFiltersDelete?: Resolver<Maybe<ResolversTypes['SavedFilter']>, ParentType, ContextType, Partial<MutationTypeCurrentPersonSavedFiltersDeleteArgs>>;
  currentPersonSavedFiltersUpdate?: Resolver<Maybe<ResolversTypes['SavedFilter']>, ParentType, ContextType, Partial<MutationTypeCurrentPersonSavedFiltersUpdateArgs>>;
  currentPersonUpdate?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType, Partial<MutationTypeCurrentPersonUpdateArgs>>;
  currentPersonUpdateHomeLc?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType, Partial<MutationTypeCurrentPersonUpdateHomeLcArgs>>;
  deactivateCampaign?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<MutationTypeDeactivateCampaignArgs, 'id'>>;
  deleteAcademicExperienceShow?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<MutationTypeDeleteAcademicExperienceShowArgs>>;
  deleteAccommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, RequireFields<MutationTypeDeleteAccommodationArgs, 'id'>>;
  deleteAccommodationAssignment?: Resolver<Maybe<ResolversTypes['AccommodationAssignment']>, ParentType, ContextType, RequireFields<MutationTypeDeleteAccommodationAssignmentArgs, 'id'>>;
  deleteAccommodationAvailability?: Resolver<Maybe<ResolversTypes['AccommodationAvailability']>, ParentType, ContextType, RequireFields<MutationTypeDeleteAccommodationAvailabilityArgs, 'id'>>;
  deleteAttachment?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType, RequireFields<MutationTypeDeleteAttachmentArgs, 'id'>>;
  deleteBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationTypeDeleteBranchEmployeeArgs, 'id'>>;
  deleteCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, RequireFields<MutationTypeDeleteCityArgs, 'id'>>;
  deleteCityLc?: Resolver<Maybe<ResolversTypes['CityLc']>, ParentType, ContextType, RequireFields<MutationTypeDeleteCityLcArgs, 'id'>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationTypeDeleteCommentArgs, 'id'>>;
  deleteCommittee?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<MutationTypeDeleteCommitteeArgs, 'id'>>;
  deleteCurrentPersonCv?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType, Partial<MutationTypeDeleteCurrentPersonCvArgs>>;
  deleteCustomStatusOpportunity?: Resolver<Maybe<ResolversTypes['CustomStatusType']>, ParentType, ContextType, RequireFields<MutationTypeDeleteCustomStatusOpportunityArgs, 'id' | 'opportunity_id'>>;
  deleteImage?: Resolver<Maybe<ResolversTypes['ImageType']>, ParentType, ContextType, Partial<MutationTypeDeleteImageArgs>>;
  deleteInvoice?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, RequireFields<MutationTypeDeleteInvoiceArgs, 'id'>>;
  deleteLcAlignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType, RequireFields<MutationTypeDeleteLcAlignmentArgs, 'id'>>;
  deleteMailTemplate?: Resolver<Maybe<ResolversTypes['MailTemplate']>, ParentType, ContextType, RequireFields<MutationTypeDeleteMailTemplateArgs, 'id'>>;
  deleteNationalPartner?: Resolver<Maybe<ResolversTypes['NationalPartnerType']>, ParentType, ContextType, RequireFields<MutationTypeDeleteNationalPartnerArgs, 'id'>>;
  deleteOrganisationScorecard?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<MutationTypeDeleteOrganisationScorecardArgs, 'id'>>;
  deleteOrganisationScorecardAttribute?: Resolver<Maybe<ResolversTypes['ScorecardAttributeType']>, ParentType, ContextType, RequireFields<MutationTypeDeleteOrganisationScorecardAttributeArgs, 'id'>>;
  deletePage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<MutationTypeDeletePageArgs, 'id'>>;
  deletePageComponent?: Resolver<Maybe<ResolversTypes['PageComponentType']>, ParentType, ContextType, Partial<MutationTypeDeletePageComponentArgs>>;
  deletePosition?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<MutationTypeDeletePositionArgs, 'id'>>;
  deleteProfessionalExperience?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<MutationTypeDeleteProfessionalExperienceArgs>>;
  deleteQuestionnaire?: Resolver<Maybe<ResolversTypes['Questionnaire']>, ParentType, ContextType, RequireFields<MutationTypeDeleteQuestionnaireArgs, 'id'>>;
  deleteSlot?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<MutationTypeDeleteSlotArgs, 'id'>>;
  deleteSuggestedCountry?: Resolver<Maybe<ResolversTypes['SuggestedCountry']>, ParentType, ContextType, RequireFields<MutationTypeDeleteSuggestedCountryArgs, 'id'>>;
  deleteTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationTypeDeleteTeamArgs, 'id'>>;
  deleteTerm?: Resolver<Maybe<ResolversTypes['Term']>, ParentType, ContextType, RequireFields<MutationTypeDeleteTermArgs, 'id'>>;
  deleteTimeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType, RequireFields<MutationTypeDeleteTimelineArgs, 'id'>>;
  deleteTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationTypeDeleteTodoArgs, 'id'>>;
  deleteWatchlist?: Resolver<Maybe<ResolversTypes['OpportunityPotentialCandidateType']>, ParentType, ContextType, RequireFields<MutationTypeDeleteWatchlistArgs, 'opportunity_id' | 'person_id'>>;
  denyBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<MutationTypeDenyBranchArgs, 'id'>>;
  duplicateOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeDuplicateOpportunityArgs, 'id'>>;
  duplicatePageComponent?: Resolver<Maybe<ResolversTypes['PageComponentType']>, ParentType, ContextType, RequireFields<MutationTypeDuplicatePageComponentArgs, 'id'>>;
  duplicateQuestionnaire?: Resolver<Maybe<ResolversTypes['Questionnaire']>, ParentType, ContextType, RequireFields<MutationTypeDuplicateQuestionnaireArgs, 'id'>>;
  employeeLeadAttemptedToContact?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeEmployeeLeadAttemptedToContactArgs>>;
  employeeLeadConnected?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeEmployeeLeadConnectedArgs>>;
  employeeLeadContractSent?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeEmployeeLeadContractSentArgs>>;
  employeeLeadContractSigned?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeEmployeeLeadContractSignedArgs>>;
  employeeLeadCreate?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeEmployeeLeadCreateArgs>>;
  employeeLeadDealLost?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeEmployeeLeadDealLostArgs>>;
  employeeLeadFuturePipeline?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeEmployeeLeadFuturePipelineArgs>>;
  employeeLeadNewLead?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeEmployeeLeadNewLeadArgs>>;
  employeeLeadProposalSent?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeEmployeeLeadProposalSentArgs>>;
  employeeLeadSendInvite?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeEmployeeLeadSendInviteArgs>>;
  employeeLeadUpdate?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeEmployeeLeadUpdateArgs>>;
  engagementCreate?: Resolver<Maybe<ResolversTypes['Engagement']>, ParentType, ContextType, RequireFields<MutationTypeEngagementCreateArgs, 'employee_lead_id'>>;
  engagementDelete?: Resolver<Maybe<ResolversTypes['Engagement']>, ParentType, ContextType, RequireFields<MutationTypeEngagementDeleteArgs, 'id'>>;
  engagementUpdate?: Resolver<Maybe<ResolversTypes['Engagement']>, ParentType, ContextType, RequireFields<MutationTypeEngagementUpdateArgs, 'id'>>;
  eventCreate?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, Partial<MutationTypeEventCreateArgs>>;
  eventRegistrationCancel?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType, RequireFields<MutationTypeEventRegistrationCancelArgs, 'id'>>;
  eventRegistrationConfirm?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType, RequireFields<MutationTypeEventRegistrationConfirmArgs, 'id'>>;
  eventRegistrationCreate?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType, Partial<MutationTypeEventRegistrationCreateArgs>>;
  eventRegistrationFollowUp?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType, RequireFields<MutationTypeEventRegistrationFollowUpArgs, 'id'>>;
  eventRegistrationMakeTransaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<MutationTypeEventRegistrationMakeTransactionArgs, 'id'>>;
  eventRegistrationPayByCash?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType, RequireFields<MutationTypeEventRegistrationPayByCashArgs, 'id'>>;
  eventSpeakerCreate?: Resolver<Maybe<ResolversTypes['EventSpeaker']>, ParentType, ContextType, Partial<MutationTypeEventSpeakerCreateArgs>>;
  eventSpeakerDelete?: Resolver<Maybe<ResolversTypes['EventSpeaker']>, ParentType, ContextType, RequireFields<MutationTypeEventSpeakerDeleteArgs, 'id'>>;
  eventSpeakerUpdate?: Resolver<Maybe<ResolversTypes['EventSpeaker']>, ParentType, ContextType, RequireFields<MutationTypeEventSpeakerUpdateArgs, 'id'>>;
  eventTicketCreate?: Resolver<Maybe<ResolversTypes['EventTicket']>, ParentType, ContextType, Partial<MutationTypeEventTicketCreateArgs>>;
  eventTicketDelete?: Resolver<Maybe<ResolversTypes['EventTicket']>, ParentType, ContextType, RequireFields<MutationTypeEventTicketDeleteArgs, 'id'>>;
  eventTicketUpdate?: Resolver<Maybe<ResolversTypes['EventTicket']>, ParentType, ContextType, RequireFields<MutationTypeEventTicketUpdateArgs, 'id'>>;
  eventUpdate?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationTypeEventUpdateArgs, 'id'>>;
  favouriteEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationTypeFavouriteEventArgs, 'id'>>;
  favouriteOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeFavouriteOpportunityArgs, 'id'>>;
  favouritePage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<MutationTypeFavouritePageArgs, 'id'>>;
  fileImport?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationTypeFileImportArgs>>;
  fillNpsResponse?: Resolver<Maybe<ResolversTypes['SurveyResponse']>, ParentType, ContextType, RequireFields<MutationTypeFillNpsResponseArgs, 'id'>>;
  followupOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeFollowupOrganisationArgs, 'id'>>;
  freezeUnfreezeCommittee?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<MutationTypeFreezeUnfreezeCommitteeArgs, 'id'>>;
  generateCv?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<MutationTypeGenerateCvArgs>>;
  generateEmail?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationTypeGenerateEmailArgs, 'id'>>;
  generateMosCertificate?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, Partial<MutationTypeGenerateMosCertificateArgs>>;
  inCompleteTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationTypeInCompleteTodoArgs, 'id'>>;
  incomingProgrammeFeeUpdate?: Resolver<Maybe<ResolversTypes['ProgrammeFee']>, ParentType, ContextType, RequireFields<MutationTypeIncomingProgrammeFeeUpdateArgs, 'id'>>;
  interviewPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<MutationTypeInterviewPersonArgs>>;
  interviewSlotApplication?: Resolver<Maybe<Array<Maybe<ResolversTypes['InterviewSlot']>>>, ParentType, ContextType, RequireFields<MutationTypeInterviewSlotApplicationArgs, 'id'>>;
  inviteMember?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<MutationTypeInviteMemberArgs, 'id'>>;
  invitePersonTerm?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationTypeInvitePersonTermArgs, 'office_id' | 'term_id'>>;
  invoiceApproveCashPayment?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, RequireFields<MutationTypeInvoiceApproveCashPaymentArgs, 'id'>>;
  invoicePayByCash?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, RequireFields<MutationTypeInvoicePayByCashArgs, 'id'>>;
  invoiceTransactionCreate?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<MutationTypeInvoiceTransactionCreateArgs, 'id'>>;
  ldaResponse?: Resolver<Maybe<ResolversTypes['LdaResponse']>, ParentType, ContextType, RequireFields<MutationTypeLdaResponseArgs, 'lda_survey_id' | 'responses'>>;
  ldmResponse?: Resolver<Maybe<ResolversTypes['LdmResponse']>, ParentType, ContextType, Partial<MutationTypeLdmResponseArgs>>;
  markOpportunityRemote?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeMarkOpportunityRemoteArgs, 'id'>>;
  matchApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeMatchApplicationArgs, 'id'>>;
  memberLeadAccept?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MutationTypeMemberLeadAcceptArgs, 'id'>>;
  memberLeadChecklistQuestionBulkCreate?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyQuestion']>>>, ParentType, ContextType, RequireFields<MutationTypeMemberLeadChecklistQuestionBulkCreateArgs, 'checklist' | 'id'>>;
  memberLeadChecklistResponseCreate?: Resolver<Maybe<ResolversTypes['ChecklistResponse']>, ParentType, ContextType, RequireFields<MutationTypeMemberLeadChecklistResponseCreateArgs, 'answers' | 'id' | 'survey_id'>>;
  memberLeadContact?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MutationTypeMemberLeadContactArgs, 'id'>>;
  memberLeadCreate?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, Partial<MutationTypeMemberLeadCreateArgs>>;
  memberLeadProcess?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MutationTypeMemberLeadProcessArgs, 'id'>>;
  memberLeadReject?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MutationTypeMemberLeadRejectArgs, 'id'>>;
  memberLeadUpdate?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MutationTypeMemberLeadUpdateArgs, 'id'>>;
  memberPositionCreate?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MutationTypeMemberPositionCreateArgs, 'member_position'>>;
  memberPositionTerminate?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MutationTypeMemberPositionTerminateArgs, 'exit_reason_id' | 'id'>>;
  memberPositionUpdate?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MutationTypeMemberPositionUpdateArgs, 'id' | 'member_position'>>;
  moveEmployeeLeadToAttemptedToContact?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeMoveEmployeeLeadToAttemptedToContactArgs>>;
  moveEmployeeLeadToConnected?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeMoveEmployeeLeadToConnectedArgs>>;
  moveEmployeeLeadToContractSent?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeMoveEmployeeLeadToContractSentArgs>>;
  moveEmployeeLeadToContractSigned?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeMoveEmployeeLeadToContractSignedArgs>>;
  moveEmployeeLeadToDealLost?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeMoveEmployeeLeadToDealLostArgs>>;
  moveEmployeeLeadToFuturePipeline?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeMoveEmployeeLeadToFuturePipelineArgs>>;
  moveEmployeeLeadToNewLead?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeMoveEmployeeLeadToNewLeadArgs>>;
  moveEmployeeLeadToProposalSent?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeMoveEmployeeLeadToProposalSentArgs>>;
  movePageToDraft?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<MutationTypeMovePageToDraftArgs, 'id'>>;
  moveSlotToActive?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<MutationTypeMoveSlotToActiveArgs, 'id'>>;
  moveSlotToInactive?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<MutationTypeMoveSlotToInactiveArgs, 'id'>>;
  notificationRead?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, Partial<MutationTypeNotificationReadArgs>>;
  offlineAssessmentApplication?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfflineAssessment']>>>, ParentType, ContextType, RequireFields<MutationTypeOfflineAssessmentApplicationArgs, 'id'>>;
  offlineAssessmentOpportunity?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfflineAssessment']>>>, ParentType, ContextType, RequireFields<MutationTypeOfflineAssessmentOpportunityArgs, 'id'>>;
  openOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeOpenOpportunityArgs, 'id'>>;
  opportunityIncrementViews?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeOpportunityIncrementViewsArgs, 'id'>>;
  opportunityMarkRemote?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeOpportunityMarkRemoteArgs, 'id'>>;
  opportunityRemoveCoverPhoto?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeOpportunityRemoveCoverPhotoArgs, 'id'>>;
  opportunityReport?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeOpportunityReportArgs, 'id'>>;
  opportunitySubmitForReview?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeOpportunitySubmitForReviewArgs, 'id'>>;
  opportunityUnarchive?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeOpportunityUnarchiveArgs, 'id'>>;
  opportunityUnmarkRemote?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeOpportunityUnmarkRemoteArgs, 'id'>>;
  opportunityUnpublish?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeOpportunityUnpublishArgs, 'id'>>;
  organisationApprove?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeOrganisationApproveArgs, 'id'>>;
  organisationArchive?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeOrganisationArchiveArgs, 'id'>>;
  organisationFollowup?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeOrganisationFollowupArgs, 'id'>>;
  organisationReject?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeOrganisationRejectArgs, 'id'>>;
  organisationRemovePartnerType?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeOrganisationRemovePartnerTypeArgs, 'id'>>;
  organisationScorecardAttributeCreate?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<MutationTypeOrganisationScorecardAttributeCreateArgs, 'scorecard_id'>>;
  organisationScorecardAttributeDelete?: Resolver<Maybe<ResolversTypes['ScorecardAttributeType']>, ParentType, ContextType, RequireFields<MutationTypeOrganisationScorecardAttributeDeleteArgs, 'id'>>;
  organisationScorecardAttributeUpdate?: Resolver<Maybe<ResolversTypes['ScorecardAttributeType']>, ParentType, ContextType, RequireFields<MutationTypeOrganisationScorecardAttributeUpdateArgs, 'id'>>;
  organisationScorecardCreate?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, Partial<MutationTypeOrganisationScorecardCreateArgs>>;
  organisationScorecardDelete?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<MutationTypeOrganisationScorecardDeleteArgs, 'id'>>;
  organisationScorecardUpdate?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<MutationTypeOrganisationScorecardUpdateArgs, 'id'>>;
  organisationSetPartnerType?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeOrganisationSetPartnerTypeArgs, 'id' | 'partner_type'>>;
  pageComponentCreate?: Resolver<Maybe<ResolversTypes['PageComponentDraftType']>, ParentType, ContextType, RequireFields<MutationTypePageComponentCreateArgs, 'page_id'>>;
  pageComponentDelete?: Resolver<Maybe<ResolversTypes['PageComponentType']>, ParentType, ContextType, Partial<MutationTypePageComponentDeleteArgs>>;
  pageComponentDuplicate?: Resolver<Maybe<ResolversTypes['PageComponentType']>, ParentType, ContextType, RequireFields<MutationTypePageComponentDuplicateArgs, 'id'>>;
  pageComponentUpdate?: Resolver<Maybe<ResolversTypes['PageComponentDraftType']>, ParentType, ContextType, Partial<MutationTypePageComponentUpdateArgs>>;
  pageCreate?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, Partial<MutationTypePageCreateArgs>>;
  pageDelete?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<MutationTypePageDeleteArgs, 'id'>>;
  pageFavourite?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<MutationTypePageFavouriteArgs, 'id'>>;
  pageMoveToDraft?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<MutationTypePageMoveToDraftArgs, 'id'>>;
  pagePublish?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<MutationTypePagePublishArgs, 'id'>>;
  pageUnfavourite?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<MutationTypePageUnfavouriteArgs, 'id'>>;
  pageUpdate?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<MutationTypePageUpdateArgs, 'id'>>;
  partnerSignupCreate?: Resolver<Maybe<ResolversTypes['PartnerSignup']>, ParentType, ContextType, Partial<MutationTypePartnerSignupCreateArgs>>;
  payByCashApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypePayByCashApplicationArgs, 'id'>>;
  paymentApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypePaymentApplicationArgs, 'id'>>;
  planCreate?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<MutationTypePlanCreateArgs, 'plan'>>;
  planSetDeadline?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<MutationTypePlanSetDeadlineArgs, 'deadline' | 'office_id' | 'plan_id'>>;
  planUpdate?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<MutationTypePlanUpdateArgs, 'id'>>;
  processMemberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MutationTypeProcessMemberLeadArgs, 'id'>>;
  propagateTermsCommittee?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType, Partial<MutationTypePropagateTermsCommitteeArgs>>;
  publishEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationTypePublishEventArgs, 'id'>>;
  publishMailTemplate?: Resolver<Maybe<ResolversTypes['MailTemplate']>, ParentType, ContextType, RequireFields<MutationTypePublishMailTemplateArgs, 'id'>>;
  publishPage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<MutationTypePublishPageArgs, 'id'>>;
  questionBulkCreate?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, Partial<MutationTypeQuestionBulkCreateArgs>>;
  questionBulkDelete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, Partial<MutationTypeQuestionBulkDeleteArgs>>;
  questionBulkUpdate?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, Partial<MutationTypeQuestionBulkUpdateArgs>>;
  realizeApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeRealizeApplicationArgs, 'id'>>;
  rejectApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeRejectApplicationArgs, 'id'>>;
  rejectBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationTypeRejectBranchEmployeeArgs, 'id'>>;
  rejectMemberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MutationTypeRejectMemberLeadArgs, 'id'>>;
  rejectOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeRejectOrganisationArgs, 'id'>>;
  remoteRealizeApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeRemoteRealizeApplicationArgs, 'id'>>;
  removeOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeRemoveOpportunityArgs, 'id'>>;
  removeOpportunityCoverPhoto?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeRemoveOpportunityCoverPhotoArgs, 'id'>>;
  removeOpportunityQuestion?: Resolver<Maybe<ResolversTypes['OpportunityQuestion']>, ParentType, ContextType, RequireFields<MutationTypeRemoveOpportunityQuestionArgs, 'id'>>;
  removeOrganisationPartnerType?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeRemoveOrganisationPartnerTypeArgs, 'id'>>;
  removePictureFromAccommodation?: Resolver<Maybe<ResolversTypes['Picture']>, ParentType, ContextType, RequireFields<MutationTypeRemovePictureFromAccommodationArgs, 'id'>>;
  removeProgrammeManager?: Resolver<Maybe<ResolversTypes['ProgrammeManager']>, ParentType, ContextType, RequireFields<MutationTypeRemoveProgrammeManagerArgs, 'id'>>;
  removeQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<MutationTypeRemoveQuestionArgs, 'id'>>;
  removeSelectionProcess?: Resolver<Maybe<ResolversTypes['SelectionProcess']>, ParentType, ContextType, RequireFields<MutationTypeRemoveSelectionProcessArgs, 'id'>>;
  reopenApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeReopenApplicationArgs, 'id'>>;
  reportOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeReportOpportunityArgs, 'id'>>;
  resolveComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationTypeResolveCommentArgs, 'comment_id' | 'id'>>;
  scorecardApplicationDelete?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeScorecardApplicationDeleteArgs, 'id'>>;
  selectionProcessBulkCreate?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectionProcess']>>>, ParentType, ContextType, RequireFields<MutationTypeSelectionProcessBulkCreateArgs, 'opportunity_id'>>;
  selectionProcessBulkDelete?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectionProcess']>>>, ParentType, ContextType, RequireFields<MutationTypeSelectionProcessBulkDeleteArgs, 'opportunity_id'>>;
  selectionProcessBulkUpdate?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectionProcess']>>>, ParentType, ContextType, RequireFields<MutationTypeSelectionProcessBulkUpdateArgs, 'opportunity_id'>>;
  sendInviteToEmployeeLead?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeSendInviteToEmployeeLeadArgs>>;
  sendTestMailTemplate?: Resolver<Maybe<ResolversTypes['MailTemplate']>, ParentType, ContextType, RequireFields<MutationTypeSendTestMailTemplateArgs, 'id'>>;
  setOrganisationPartnerType?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeSetOrganisationPartnerTypeArgs, 'id' | 'partner_type'>>;
  slotCreate?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<MutationTypeSlotCreateArgs, 'opportunity_id'>>;
  slotDelete?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<MutationTypeSlotDeleteArgs, 'id'>>;
  slotMoveToActive?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<MutationTypeSlotMoveToActiveArgs, 'id'>>;
  slotMoveToInactive?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<MutationTypeSlotMoveToInactiveArgs, 'id'>>;
  slotUpdate?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<MutationTypeSlotUpdateArgs, 'id' | 'slot'>>;
  submitOpportunityForReview?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeSubmitOpportunityForReviewArgs, 'id'>>;
  surveyAnswer?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationTypeSurveyAnswerArgs, 'responses' | 'survey_uuid'>>;
  tagListUpdate?: Resolver<Maybe<ResolversTypes['TagList']>, ParentType, ContextType, Partial<MutationTypeTagListUpdateArgs>>;
  terminateMemberPosition?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MutationTypeTerminateMemberPositionArgs, 'exit_reason_id' | 'id'>>;
  testimonialApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeTestimonialApplicationArgs, 'id'>>;
  unarchiveOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeUnarchiveOpportunityArgs, 'id'>>;
  unfavouriteEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationTypeUnfavouriteEventArgs, 'id'>>;
  unfavouriteOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeUnfavouriteOpportunityArgs, 'id'>>;
  unfavouritePage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<MutationTypeUnfavouritePageArgs, 'id'>>;
  unmarkOpportunityRemote?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeUnmarkOpportunityRemoteArgs, 'id'>>;
  unpublishEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationTypeUnpublishEventArgs, 'id'>>;
  unpublishOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeUnpublishOpportunityArgs, 'id'>>;
  unrejectApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeUnrejectApplicationArgs, 'id'>>;
  updateAccommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, RequireFields<MutationTypeUpdateAccommodationArgs, 'id'>>;
  updateAccommodationAssignment?: Resolver<Maybe<ResolversTypes['AccommodationAssignment']>, ParentType, ContextType, RequireFields<MutationTypeUpdateAccommodationAssignmentArgs, 'id'>>;
  updateAccommodationAvailability?: Resolver<Maybe<ResolversTypes['AccommodationAvailability']>, ParentType, ContextType, RequireFields<MutationTypeUpdateAccommodationAvailabilityArgs, 'id'>>;
  updateApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeUpdateApplicationArgs, 'id'>>;
  updateApplicationFlightDetails?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeUpdateApplicationFlightDetailsArgs, 'id'>>;
  updateApplicationScorecardAttribute?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeUpdateApplicationScorecardAttributeArgs, 'id'>>;
  updateAttachment?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType, RequireFields<MutationTypeUpdateAttachmentArgs, 'id'>>;
  updateBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<MutationTypeUpdateBranchArgs, 'id'>>;
  updateBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, RequireFields<MutationTypeUpdateBranchEmployeeArgs, 'id'>>;
  updateCampaign?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<MutationTypeUpdateCampaignArgs, 'id'>>;
  updateCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, RequireFields<MutationTypeUpdateCityArgs, 'id'>>;
  updateCityLc?: Resolver<Maybe<ResolversTypes['CityLc']>, ParentType, ContextType, RequireFields<MutationTypeUpdateCityLcArgs, 'id'>>;
  updateComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationTypeUpdateCommentArgs, 'id'>>;
  updateCommittee?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<MutationTypeUpdateCommitteeArgs, 'id'>>;
  updateCustomStatusOpportunity?: Resolver<Maybe<ResolversTypes['CustomStatusType']>, ParentType, ContextType, RequireFields<MutationTypeUpdateCustomStatusOpportunityArgs, 'id' | 'opportunity_id'>>;
  updateEmployeeLead?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<MutationTypeUpdateEmployeeLeadArgs>>;
  updateFlightDetails?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeUpdateFlightDetailsArgs, 'application_flight_token' | 'flight_details'>>;
  updateInterviewDetailsApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeUpdateInterviewDetailsApplicationArgs, 'id'>>;
  updateInvoice?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, RequireFields<MutationTypeUpdateInvoiceArgs, 'id'>>;
  updateLcAlignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType, RequireFields<MutationTypeUpdateLcAlignmentArgs, 'id'>>;
  updateLcAlignmentLabel?: Resolver<Maybe<Array<Maybe<ResolversTypes['LcAlignment']>>>, ParentType, ContextType, RequireFields<MutationTypeUpdateLcAlignmentLabelArgs, 'alignment_type' | 'label' | 'office_id'>>;
  updateMailTemplate?: Resolver<Maybe<ResolversTypes['MailTemplate']>, ParentType, ContextType, RequireFields<MutationTypeUpdateMailTemplateArgs, 'id'>>;
  updateMemberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, RequireFields<MutationTypeUpdateMemberLeadArgs, 'id'>>;
  updateMemberPosition?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<MutationTypeUpdateMemberPositionArgs, 'id' | 'member_position'>>;
  updateNationalPartner?: Resolver<Maybe<ResolversTypes['NationalPartnerType']>, ParentType, ContextType, RequireFields<MutationTypeUpdateNationalPartnerArgs, 'id'>>;
  updateOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeUpdateOpportunityArgs, 'id'>>;
  updateOpportunityQuestion?: Resolver<Maybe<ResolversTypes['OpportunityQuestion']>, ParentType, ContextType, RequireFields<MutationTypeUpdateOpportunityQuestionArgs, 'id'>>;
  updateOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<MutationTypeUpdateOrganisationArgs, 'id'>>;
  updateOrganisationScorecard?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<MutationTypeUpdateOrganisationScorecardArgs, 'id'>>;
  updateOrganisationScorecardAttribute?: Resolver<Maybe<ResolversTypes['ScorecardAttributeType']>, ParentType, ContextType, RequireFields<MutationTypeUpdateOrganisationScorecardAttributeArgs, 'id'>>;
  updateOrganizationDevelopment?: Resolver<Maybe<ResolversTypes['OrganizationDevelopment']>, ParentType, ContextType, RequireFields<MutationTypeUpdateOrganizationDevelopmentArgs, 'id'>>;
  updateOrganizationDevelopmentTarget?: Resolver<Maybe<ResolversTypes['OrganizationDevelopmentTarget']>, ParentType, ContextType, RequireFields<MutationTypeUpdateOrganizationDevelopmentTargetArgs, 'id'>>;
  updatePage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<MutationTypeUpdatePageArgs, 'id'>>;
  updatePageComponent?: Resolver<Maybe<ResolversTypes['PageComponentDraftType']>, ParentType, ContextType, Partial<MutationTypeUpdatePageComponentArgs>>;
  updatePartnerStandardsSurvey?: Resolver<Maybe<ResolversTypes['StandardsSurvey']>, ParentType, ContextType, RequireFields<MutationTypeUpdatePartnerStandardsSurveyArgs, 'partner_standard_survey_id' | 'responses'>>;
  updatePaymentInvoice?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, RequireFields<MutationTypeUpdatePaymentInvoiceArgs, 'id'>>;
  updatePerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationTypeUpdatePersonArgs, 'id'>>;
  updatePersonAcademicExperience?: Resolver<Maybe<ResolversTypes['PreviousExperience']>, ParentType, ContextType, Partial<MutationTypeUpdatePersonAcademicExperienceArgs>>;
  updatePersonProfessionalExperience?: Resolver<Maybe<ResolversTypes['ProfessionalExperience']>, ParentType, ContextType, Partial<MutationTypeUpdatePersonProfessionalExperienceArgs>>;
  updateProgrammeFee?: Resolver<Maybe<ResolversTypes['ProgrammeFee']>, ParentType, ContextType, RequireFields<MutationTypeUpdateProgrammeFeeArgs, 'id'>>;
  updateProject?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<MutationTypeUpdateProjectArgs, 'id'>>;
  updateQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<MutationTypeUpdateQuestionArgs, 'id'>>;
  updateQuestionnaire?: Resolver<Maybe<ResolversTypes['Questionnaire']>, ParentType, ContextType, RequireFields<MutationTypeUpdateQuestionnaireArgs, 'id'>>;
  updateSelectionProcess?: Resolver<Maybe<ResolversTypes['SelectionProcess']>, ParentType, ContextType, RequireFields<MutationTypeUpdateSelectionProcessArgs, 'id'>>;
  updateSlot?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<MutationTypeUpdateSlotArgs, 'id' | 'slot'>>;
  updateStandardsSurvey?: Resolver<Maybe<ResolversTypes['StandardsSurvey']>, ParentType, ContextType, RequireFields<MutationTypeUpdateStandardsSurveyArgs, 'response' | 'standard_survey_id'>>;
  updateSuggestedCountry?: Resolver<Maybe<ResolversTypes['SuggestedCountry']>, ParentType, ContextType, RequireFields<MutationTypeUpdateSuggestedCountryArgs, 'id'>>;
  updateTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationTypeUpdateTeamArgs, 'id'>>;
  updateTeamPosition?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<MutationTypeUpdateTeamPositionArgs, 'id'>>;
  updateTimeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType, RequireFields<MutationTypeUpdateTimelineArgs, 'id'>>;
  updateTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationTypeUpdateTodoArgs, 'id'>>;
  weeklyActivitiesBulkCreate?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeeklyActivity']>>>, ParentType, ContextType, RequireFields<MutationTypeWeeklyActivitiesBulkCreateArgs, 'opportunity_id'>>;
  weeklyActivitiesBulkDelete?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeeklyActivity']>>>, ParentType, ContextType, RequireFields<MutationTypeWeeklyActivitiesBulkDeleteArgs, 'opportunity_id'>>;
  withdrawApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<MutationTypeWithdrawApplicationArgs, 'id'>>;
};

export type NationalPartnerMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['NationalPartnerMutationQuery'] = ResolversParentTypes['NationalPartnerMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createNationalPartner?: Resolver<Maybe<ResolversTypes['NationalPartnerType']>, ParentType, ContextType, Partial<NationalPartnerMutationQueryCreateNationalPartnerArgs>>;
  deleteNationalPartner?: Resolver<Maybe<ResolversTypes['NationalPartnerType']>, ParentType, ContextType, RequireFields<NationalPartnerMutationQueryDeleteNationalPartnerArgs, 'id'>>;
  updateNationalPartner?: Resolver<Maybe<ResolversTypes['NationalPartnerType']>, ParentType, ContextType, RequireFields<NationalPartnerMutationQueryUpdateNationalPartnerArgs, 'id'>>;
};

export type NationalPartnerQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['NationalPartnerQuery'] = ResolversParentTypes['NationalPartnerQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allNationalPartners?: Resolver<Maybe<Array<Maybe<ResolversTypes['NationalPartnerType']>>>, ParentType, ContextType, Partial<NationalPartnerQueryAllNationalPartnersArgs>>;
  getNationalPartner?: Resolver<Maybe<ResolversTypes['NationalPartnerType']>, ParentType, ContextType, RequireFields<NationalPartnerQueryGetNationalPartnerArgs, 'id'>>;
  listNationalPartners?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organisation']>>>, ParentType, ContextType, RequireFields<NationalPartnerQueryListNationalPartnersArgs, 'mc_id'>>;
};

export type NationalPartnerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NationalPartnerType'] = ResolversParentTypes['NationalPartnerType']> = {
  company?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Notification' | 'SavedFilter', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notifiable?: Resolver<Maybe<ResolversTypes['PersonApplicationUnion']>, ParentType, ContextType>;
  notifiable_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  notifiable_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  person_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationListResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationList'] = ResolversParentTypes['NotificationList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Notification']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationMutationQuery'] = ResolversParentTypes['NotificationMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  clearNotifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Notification']>>>, ParentType, ContextType>;
  notificationRead?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, Partial<NotificationMutationQueryNotificationReadArgs>>;
};

export type NotificationsQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationsQuery'] = ResolversParentTypes['NotificationsQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  notification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, Partial<NotificationsQueryNotificationArgs>>;
  notificationGet?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, Partial<NotificationsQueryNotificationGetArgs>>;
  notificationList?: Resolver<Maybe<ResolversTypes['NotificationList']>, ParentType, ContextType, Partial<NotificationsQueryNotificationListArgs>>;
  notifications?: Resolver<Maybe<ResolversTypes['NotificationList']>, ParentType, ContextType, Partial<NotificationsQueryNotificationsArgs>>;
};

export type NpsResponseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NpsResponseType'] = ResolversParentTypes['NpsResponseType']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ldm_score?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nps_score?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  person_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile_picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<NpsResponseTypeProfile_PictureArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Office'] = ResolversParentTypes['Office']> = {
  address_detail?: Resolver<Maybe<ResolversTypes['AddressInfo']>, ParentType, ContextType>;
  allow_online_payments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  campaigns?: Resolver<Maybe<Array<Maybe<ResolversTypes['Campaign']>>>, ParentType, ContextType>;
  checklist_survey?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType>;
  cities?: Resolver<Maybe<Array<Maybe<ResolversTypes['City']>>>, ParentType, ContextType>;
  color_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['CommentConnection']>, ParentType, ContextType, Partial<OfficeCommentsArgs>>;
  committee_aggregations?: Resolver<Maybe<ResolversTypes['CommitteeAggregationConnection']>, ParentType, ContextType, Partial<OfficeCommittee_AggregationsArgs>>;
  committee_targets?: Resolver<Maybe<ResolversTypes['CommitteeTargetConnection']>, ParentType, ContextType, Partial<OfficeCommittee_TargetsArgs>>;
  companies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organisation']>>>, ParentType, ContextType>;
  contact_detail?: Resolver<Maybe<ResolversTypes['ContactInfo']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cover_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_payment_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  default_project_fee?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  default_project_fee_cents?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eligible_for_online_payment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hdi?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType, Partial<OfficeHdiArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  igv_fee_ep_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  igv_fee_partner_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  is_expansion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_frozen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_od_model_eligible?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  member_position?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<OfficeMember_PositionArgs, 'term_id'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name_sort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  od_data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<OfficeOd_DataArgs>>;
  parent?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  payments?: Resolver<Maybe<ResolversTypes['CommitteePayment']>, ParentType, ContextType>;
  pdi?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType, Partial<OfficePdiArgs>>;
  permissions?: Resolver<Maybe<ResolversTypes['OfficePermissionType']>, ParentType, ContextType>;
  profile_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  programme_fees?: Resolver<Maybe<ResolversTypes['ProgrammeFeeConnection']>, ParentType, ContextType, Partial<OfficeProgramme_FeesArgs>>;
  programme_managers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgrammeManager']>>>, ParentType, ContextType>;
  project_fee_limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  project_fee_limit_cents?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  short_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signup_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signup_questions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sub_office_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  suboffices?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag_lists?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType>;
  todo_type?: Resolver<Maybe<ResolversTypes['TodoType']>, ParentType, ContextType>;
  visa_requirements?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficeBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfficeBasic'] = ResolversParentTypes['OfficeBasic']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sub_office_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficeBasicDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfficeBasicDetails'] = ResolversParentTypes['OfficeBasicDetails']> = {
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  programme_fees?: Resolver<Maybe<ResolversTypes['ProgrammeFeeBasicConnection']>, ParentType, ContextType, Partial<OfficeBasicDetailsProgramme_FeesArgs>>;
  programme_managers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgrammeManager']>>>, ParentType, ContextType>;
  signup_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suboffices?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfficeId']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficeBasicListResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfficeBasicList'] = ResolversParentTypes['OfficeBasicList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfficeBasic']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfficeConnection'] = ResolversParentTypes['OfficeConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfficeEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfficeEdge'] = ResolversParentTypes['OfficeEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficeIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfficeId'] = ResolversParentTypes['OfficeId']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficeListResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfficeList'] = ResolversParentTypes['OfficeList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficeMcAlignmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfficeMcAlignment'] = ResolversParentTypes['OfficeMcAlignment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mc_alignments?: Resolver<Maybe<Array<ResolversTypes['LcAlignment']>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficePermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfficePermissionType'] = ResolversParentTypes['OfficePermissionType']> = {
  can_add_lc?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_delete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_read?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  invite_people?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfflineAssessmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfflineAssessment'] = ResolversParentTypes['OfflineAssessment']> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opportunity'] = ResolversParentTypes['Opportunity']> = {
  accepted_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  all_slots?: Resolver<Maybe<ResolversTypes['SlotConnection']>, ParentType, ContextType, RequireFields<OpportunityAll_SlotsArgs, 'sort' | 'sort_direction'>>;
  applicants_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  application_processing_time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  applications_close_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  applications_status_facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  applied_to?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  applied_to_with?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  available_openings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  available_slots?: Resolver<Maybe<Array<Maybe<ResolversTypes['Slot']>>>, ParentType, ContextType>;
  average_nps_score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  backgrounds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  branch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['CommentConnection']>, ParentType, ContextType, Partial<OpportunityCommentsArgs>>;
  company_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  completeness?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  cover_photo?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<OpportunityCover_PhotoArgs>>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  current_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_statuses?: Resolver<Maybe<ResolversTypes['CustomStatusTypeConnection']>, ParentType, ContextType, Partial<OpportunityCustom_StatusesArgs>>;
  date_opened?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  earliest_start_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  external_opportunity_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  external_opportunity_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fee_and_health_insurance?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<OpportunityFee_And_Health_InsuranceArgs>>;
  google_place_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  has_opportunity_applications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_opportunity_questions?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  home_lc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  home_mc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  host_lc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_favourited?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_gep?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_global_project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_project_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latest_end_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  latest_reviews?: Resolver<Maybe<ResolversTypes['NpsResponseType']>, ParentType, ContextType>;
  legal_info?: Resolver<Maybe<ResolversTypes['LegalInfoType']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logistics_info?: Resolver<Maybe<ResolversTypes['LogisticInfoType']>, ParentType, ContextType>;
  managers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  mandatory_fields_check?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  measure_of_impacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['OpportunityMetaType']>, ParentType, ContextType>;
  nationalities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  nps_score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  office_footfall_for_exchange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offline_assessments?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfflineAssessment']>>>, ParentType, ContextType>;
  openings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opportunity_cost?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<OpportunityOpportunity_CostArgs>>;
  opportunity_duration_type?: Resolver<Maybe<ResolversTypes['OpportunityDurationType']>, ParentType, ContextType>;
  opportunity_questions?: Resolver<Maybe<ResolversTypes['OpportunityQuestionConnection']>, ParentType, ContextType, Partial<OpportunityOpportunity_QuestionsArgs>>;
  organisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  parent_opportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType>;
  partner_type?: Resolver<Maybe<ResolversTypes['PartnerTypes']>, ParentType, ContextType>;
  percentage_of_fulfillment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['OpportunityPermissionType']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  preferred_locations_info?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  profile_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<OpportunityProfile_PhotoArgs>>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  programme_fees?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  programmes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Programme']>>>, ParentType, ContextType>;
  progress_percentage_for_standards?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType>;
  project_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project_duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  project_fee?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  project_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  project_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  questionnaire?: Resolver<Maybe<ResolversTypes['Questionnaire']>, ParentType, ContextType>;
  redirect_to_external_opportunity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rejected_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  remark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remote_experience_additional_details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remote_experience_duration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remote_experience_salary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remote_opportunity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  role_info?: Resolver<Maybe<ResolversTypes['RoleInfoType']>, ParentType, ContextType>;
  scorecard?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType>;
  sdg_info?: Resolver<Maybe<ResolversTypes['Sdg']>, ParentType, ContextType>;
  selection_processes?: Resolver<Maybe<ResolversTypes['SelectionProcessConnection']>, ParentType, ContextType, Partial<OpportunitySelection_ProcessesArgs>>;
  skills?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  slots?: Resolver<Maybe<Array<Maybe<ResolversTypes['Slot']>>>, ParentType, ContextType>;
  specifics_info?: Resolver<Maybe<ResolversTypes['SpecificInfoType']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  study_levels?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType>;
  sub_product?: Resolver<Maybe<ResolversTypes['SubProduct']>, ParentType, ContextType>;
  tag_lists?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType>;
  template_opportunities_locations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tm_details?: Resolver<Maybe<ResolversTypes['TmDetailType']>, ParentType, ContextType>;
  todo_type?: Resolver<Maybe<ResolversTypes['TodoType']>, ParentType, ContextType>;
  transparent_fee_details?: Resolver<Maybe<ResolversTypes['OpportunityTransparentFeeDetailsType']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  video_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  view_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  weekly_activities?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeeklyActivity']>>>, ParentType, ContextType>;
  work_hours?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityApplication'] = ResolversParentTypes['OpportunityApplication']> = {
  acceptance_note_pdf_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accommodation_assignments?: Resolver<Maybe<ResolversTypes['AccommodationAssignmentConnection']>, ParentType, ContextType, Partial<OpportunityApplicationAccommodation_AssignmentsArgs>>;
  aiesec_contribution?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  allow_online_payments?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  an_signed_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  an_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  application_flight_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  application_questionnaires?: Resolver<Maybe<ResolversTypes['ApplicationQuestionnaireConnection']>, ParentType, ContextType, Partial<OpportunityApplicationApplication_QuestionnairesArgs>>;
  application_scorecard?: Resolver<Maybe<ResolversTypes['ApplicationScorecard']>, ParentType, ContextType>;
  attendees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attendee']>>>, ParentType, ContextType>;
  average_score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  branch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType>;
  client_datas?: Resolver<Maybe<ResolversTypes['ClientDataConnection']>, ParentType, ContextType, Partial<OpportunityApplicationClient_DatasArgs>>;
  comments?: Resolver<Maybe<ResolversTypes['CommentConnection']>, ParentType, ContextType, Partial<OpportunityApplicationCommentsArgs>>;
  conversation?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  current_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  custom_status?: Resolver<Maybe<ResolversTypes['CustomStatusType']>, ParentType, ContextType>;
  cv?: Resolver<Maybe<ResolversTypes['CV']>, ParentType, ContextType>;
  date_approval_broken?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_approved?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_matched?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_pay_by_cash?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_realized?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  experience_end_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  experience_start_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  favourite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  first_followed_up_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  flight_booking_reminder_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  follow_up?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  followed_up_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  followed_up_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  gt_answer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  has_started_standards_survey?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  home_mc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  host_lc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  host_lc_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  inbound_emails?: Resolver<Maybe<Array<Maybe<ResolversTypes['InboundEmailType']>>>, ParentType, ContextType>;
  interview_details?: Resolver<Maybe<ResolversTypes['InterviewDetailsType']>, ParentType, ContextType>;
  interview_slots?: Resolver<Maybe<Array<Maybe<ResolversTypes['InterviewSlot']>>>, ParentType, ContextType>;
  interviewed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lda_links?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  ldm_grade?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ldm_report?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  managers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  matchability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matched_or_rejected_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  measure_of_impacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['ApplicationMetaType']>, ParentType, ContextType>;
  mos_certificate?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType>;
  nps_grade?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nps_response?: Resolver<Maybe<ResolversTypes['SurveyResponse']>, ParentType, ContextType>;
  nps_response_completed_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  offline_assessments?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfflineAssessment']>>>, ParentType, ContextType>;
  onward_arrival_airport?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  onward_time?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  opportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  paid_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  paid_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  partner_standards?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  payments?: Resolver<Maybe<ResolversTypes['ProgrammeFee']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['OpportunityApplicationPermissionType']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  questionnaire_answers?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  questionnaire_attachment?: Resolver<Maybe<ResolversTypes['ImageType']>, ParentType, ContextType>;
  rejection_reason?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  required_backgrounds_percentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required_languages_percentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required_skills_percentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  return_departure_airport?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  return_time?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  scheduled_interview?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  signed_contract_pdf_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slot?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType>;
  standard_survey_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  standards?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag_lists?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType>;
  testimonial?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  testimonial_filled_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  tn_manager?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  todo_type?: Resolver<Maybe<ResolversTypes['TodoType']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Transaction']>>>, ParentType, ContextType>;
  unsigned_contract_pdf_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityApplicationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityApplicationConnection'] = ResolversParentTypes['OpportunityApplicationConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplicationEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityApplicationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityApplicationEdge'] = ResolversParentTypes['OpportunityApplicationEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityApplicationListResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityApplicationList'] = ResolversParentTypes['OpportunityApplicationList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityApplicationMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityApplicationMutationQuery'] = ResolversParentTypes['OpportunityApplicationMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  anApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryAnApplicationArgs, 'id'>>;
  applicationBulkMessage?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<OpportunityApplicationMutationQueryApplicationBulkMessageArgs>>;
  applicationExtendExperience?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryApplicationExtendExperienceArgs, 'experience_end_date' | 'id'>>;
  applicationExtendRemoteExperience?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryApplicationExtendRemoteExperienceArgs, 'id' | 'remote_end_date'>>;
  applicationQuestionnaireUpdate?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryApplicationQuestionnaireUpdateArgs, 'id'>>;
  applicationScorecardAttributeDelete?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryApplicationScorecardAttributeDeleteArgs, 'id'>>;
  approveApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryApproveApplicationArgs, 'id'>>;
  breakApprovedApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryBreakApprovedApplicationArgs, 'id'>>;
  breakRealizationApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryBreakRealizationApplicationArgs, 'id'>>;
  breakRemoteRealization?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryBreakRemoteRealizationArgs, 'id'>>;
  bulkMatchApplications?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<OpportunityApplicationMutationQueryBulkMatchApplicationsArgs>>;
  bulkRejectApplications?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<OpportunityApplicationMutationQueryBulkRejectApplicationsArgs>>;
  bulkTagUpdateForApplications?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<OpportunityApplicationMutationQueryBulkTagUpdateForApplicationsArgs>>;
  changeCustomStatusApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryChangeCustomStatusApplicationArgs, 'id'>>;
  completeApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryCompleteApplicationArgs, 'id'>>;
  createApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, Partial<OpportunityApplicationMutationQueryCreateApplicationArgs>>;
  createScorecardsApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryCreateScorecardsApplicationArgs, 'id'>>;
  fillNpsResponse?: Resolver<Maybe<ResolversTypes['SurveyResponse']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryFillNpsResponseArgs, 'id'>>;
  generateMosCertificate?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, Partial<OpportunityApplicationMutationQueryGenerateMosCertificateArgs>>;
  interviewSlotApplication?: Resolver<Maybe<Array<Maybe<ResolversTypes['InterviewSlot']>>>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryInterviewSlotApplicationArgs, 'id'>>;
  matchApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryMatchApplicationArgs, 'id'>>;
  offlineAssessmentApplication?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfflineAssessment']>>>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryOfflineAssessmentApplicationArgs, 'id'>>;
  payByCashApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryPayByCashApplicationArgs, 'id'>>;
  paymentApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryPaymentApplicationArgs, 'id'>>;
  realizeApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryRealizeApplicationArgs, 'id'>>;
  rejectApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryRejectApplicationArgs, 'id'>>;
  remoteRealizeApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryRemoteRealizeApplicationArgs, 'id'>>;
  reopenApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryReopenApplicationArgs, 'id'>>;
  scorecardApplicationDelete?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryScorecardApplicationDeleteArgs, 'id'>>;
  testimonialApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryTestimonialApplicationArgs, 'id'>>;
  unrejectApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryUnrejectApplicationArgs, 'id'>>;
  updateApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryUpdateApplicationArgs, 'id'>>;
  updateApplicationFlightDetails?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryUpdateApplicationFlightDetailsArgs, 'id'>>;
  updateApplicationScorecardAttribute?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryUpdateApplicationScorecardAttributeArgs, 'id'>>;
  updateFlightDetails?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryUpdateFlightDetailsArgs, 'application_flight_token' | 'flight_details'>>;
  updateInterviewDetailsApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryUpdateInterviewDetailsApplicationArgs, 'id'>>;
  withdrawApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationMutationQueryWithdrawApplicationArgs, 'id'>>;
};

export type OpportunityApplicationPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityApplicationPermissionType'] = ResolversParentTypes['OpportunityApplicationPermissionType']> = {
  can_access_ep_contract?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_approval_broken?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_approved_ep?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_approved_tn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_favourited?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_matched?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_realize_broken?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_realized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_rejected?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_remote_realized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_reopened?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_unrejected?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_withdrawn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_break_remote_realization?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_edit_managers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_extend_experience?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_extend_remote_experience?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_fill_complete_ldm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_fill_standards?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_generate_mos_certificate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_mark_match_paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_mark_realize_paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_sign_an?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_view_mos_certificate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_completed_ldm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_completed_nps?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_filled_acceptance_note?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_filled_all_standards?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_filled_complete_ldm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_paid_for_match?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_paid_for_realize?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  should_complete_ldm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  should_complete_nps?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  should_pay_at_match?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  should_pay_at_realize?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityApplicationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityApplicationQuery'] = ResolversParentTypes['OpportunityApplicationQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allOpportunityApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplicationList']>, ParentType, ContextType, Partial<OpportunityApplicationQueryAllOpportunityApplicationArgs>>;
  allOpportunityApplicationDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<OpportunityApplicationQueryAllOpportunityApplicationDownloadArgs, 'columns'>>;
  applicationCsv?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<OpportunityApplicationQueryApplicationCsvArgs>>;
  applicationInterviewSlots?: Resolver<Maybe<Array<Maybe<ResolversTypes['InterviewSlot']>>>, ParentType, ContextType, RequireFields<OpportunityApplicationQueryApplicationInterviewSlotsArgs, 'id'>>;
  applicationOfflineAssessments?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfflineAssessment']>>>, ParentType, ContextType, RequireFields<OpportunityApplicationQueryApplicationOfflineAssessmentsArgs, 'id'>>;
  applicationTestimonials?: Resolver<Maybe<ResolversTypes['OpportunityApplicationList']>, ParentType, ContextType, Partial<OpportunityApplicationQueryApplicationTestimonialsArgs>>;
  bulkCvDownload?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<OpportunityApplicationQueryBulkCvDownloadArgs>>;
  flightDetails?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<OpportunityApplicationQueryFlightDetailsArgs, 'application_flight_token'>>;
  getApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, Partial<OpportunityApplicationQueryGetApplicationArgs>>;
  getInboundEmailApplication?: Resolver<Maybe<Array<Maybe<ResolversTypes['InboundEmailType']>>>, ParentType, ContextType, Partial<OpportunityApplicationQueryGetInboundEmailApplicationArgs>>;
  unbilledApplications?: Resolver<Maybe<ResolversTypes['OpportunityApplicationList']>, ParentType, ContextType, RequireFields<OpportunityApplicationQueryUnbilledApplicationsArgs, 'id'>>;
};

export type OpportunityConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityConnection'] = ResolversParentTypes['OpportunityConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityDurationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityDurationType'] = ResolversParentTypes['OpportunityDurationType']> = {
  accommodation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration_max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  duration_min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  duration_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  either_of_salary_or_accommodation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  salary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityDurationTypeQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityDurationTypeQuery'] = ResolversParentTypes['OpportunityDurationTypeQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  opportunityDurationTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityDurationType']>>>, ParentType, ContextType>;
};

export type OpportunityEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityEdge'] = ResolversParentTypes['OpportunityEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityListResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityList'] = ResolversParentTypes['OpportunityList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityMetaTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityMetaType'] = ResolversParentTypes['OpportunityMetaType']> = {
  created_from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_via?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityMutationQuery'] = ResolversParentTypes['OpportunityMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  addOpportunityQuestion?: Resolver<Maybe<ResolversTypes['OpportunityQuestion']>, ParentType, ContextType, Partial<OpportunityMutationQueryAddOpportunityQuestionArgs>>;
  addSelectionProcess?: Resolver<Maybe<ResolversTypes['SelectionProcess']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryAddSelectionProcessArgs, 'opportunity_id'>>;
  assignQuestionnaire?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryAssignQuestionnaireArgs, 'id' | 'questionnaire_id'>>;
  bulkAssignManagersForOpportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType, Partial<OpportunityMutationQueryBulkAssignManagersForOpportunitiesArgs>>;
  bulkOpenOpportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType, Partial<OpportunityMutationQueryBulkOpenOpportunitiesArgs>>;
  bulkRemoveOpportunityQuestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityQuestion']>>>, ParentType, ContextType, Partial<OpportunityMutationQueryBulkRemoveOpportunityQuestionsArgs>>;
  bulkTagUpdateForOpportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType, Partial<OpportunityMutationQueryBulkTagUpdateForOpportunitiesArgs>>;
  bulkUnassignManagersForOpportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType, Partial<OpportunityMutationQueryBulkUnassignManagersForOpportunitiesArgs>>;
  createCommentForOpportunity?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryCreateCommentForOpportunityArgs, 'opportunity_id'>>;
  createCustomStatusOpportunity?: Resolver<Maybe<ResolversTypes['CustomStatusType']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryCreateCustomStatusOpportunityArgs, 'opportunity_id'>>;
  createLocalVolunteerOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryCreateLocalVolunteerOpportunityArgs, 'applications_close_date' | 'id' | 'openings'>>;
  createOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, Partial<OpportunityMutationQueryCreateOpportunityArgs>>;
  createProject?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, Partial<OpportunityMutationQueryCreateProjectArgs>>;
  deleteCustomStatusOpportunity?: Resolver<Maybe<ResolversTypes['CustomStatusType']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryDeleteCustomStatusOpportunityArgs, 'id' | 'opportunity_id'>>;
  duplicateOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryDuplicateOpportunityArgs, 'id'>>;
  favouriteOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryFavouriteOpportunityArgs, 'id'>>;
  markOpportunityRemote?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryMarkOpportunityRemoteArgs, 'id'>>;
  offlineAssessmentOpportunity?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfflineAssessment']>>>, ParentType, ContextType, RequireFields<OpportunityMutationQueryOfflineAssessmentOpportunityArgs, 'id'>>;
  openOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryOpenOpportunityArgs, 'id'>>;
  opportunityIncrementViews?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryOpportunityIncrementViewsArgs, 'id'>>;
  opportunityMarkRemote?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryOpportunityMarkRemoteArgs, 'id'>>;
  opportunityRemoveCoverPhoto?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryOpportunityRemoveCoverPhotoArgs, 'id'>>;
  opportunityReport?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryOpportunityReportArgs, 'id'>>;
  opportunitySubmitForReview?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryOpportunitySubmitForReviewArgs, 'id'>>;
  opportunityUnarchive?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryOpportunityUnarchiveArgs, 'id'>>;
  opportunityUnmarkRemote?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryOpportunityUnmarkRemoteArgs, 'id'>>;
  opportunityUnpublish?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryOpportunityUnpublishArgs, 'id'>>;
  removeOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryRemoveOpportunityArgs, 'id'>>;
  removeOpportunityCoverPhoto?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryRemoveOpportunityCoverPhotoArgs, 'id'>>;
  removeOpportunityQuestion?: Resolver<Maybe<ResolversTypes['OpportunityQuestion']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryRemoveOpportunityQuestionArgs, 'id'>>;
  removeSelectionProcess?: Resolver<Maybe<ResolversTypes['SelectionProcess']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryRemoveSelectionProcessArgs, 'id'>>;
  reportOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryReportOpportunityArgs, 'id'>>;
  resolveComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryResolveCommentArgs, 'comment_id' | 'id'>>;
  selectionProcessBulkCreate?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectionProcess']>>>, ParentType, ContextType, RequireFields<OpportunityMutationQuerySelectionProcessBulkCreateArgs, 'opportunity_id'>>;
  selectionProcessBulkDelete?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectionProcess']>>>, ParentType, ContextType, RequireFields<OpportunityMutationQuerySelectionProcessBulkDeleteArgs, 'opportunity_id'>>;
  selectionProcessBulkUpdate?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectionProcess']>>>, ParentType, ContextType, RequireFields<OpportunityMutationQuerySelectionProcessBulkUpdateArgs, 'opportunity_id'>>;
  submitOpportunityForReview?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQuerySubmitOpportunityForReviewArgs, 'id'>>;
  unarchiveOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryUnarchiveOpportunityArgs, 'id'>>;
  unfavouriteOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryUnfavouriteOpportunityArgs, 'id'>>;
  unmarkOpportunityRemote?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryUnmarkOpportunityRemoteArgs, 'id'>>;
  unpublishOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryUnpublishOpportunityArgs, 'id'>>;
  updateCustomStatusOpportunity?: Resolver<Maybe<ResolversTypes['CustomStatusType']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryUpdateCustomStatusOpportunityArgs, 'id' | 'opportunity_id'>>;
  updateOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryUpdateOpportunityArgs, 'id'>>;
  updateOpportunityQuestion?: Resolver<Maybe<ResolversTypes['OpportunityQuestion']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryUpdateOpportunityQuestionArgs, 'id'>>;
  updateProject?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryUpdateProjectArgs, 'id'>>;
  updateSelectionProcess?: Resolver<Maybe<ResolversTypes['SelectionProcess']>, ParentType, ContextType, RequireFields<OpportunityMutationQueryUpdateSelectionProcessArgs, 'id'>>;
  weeklyActivitiesBulkCreate?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeeklyActivity']>>>, ParentType, ContextType, RequireFields<OpportunityMutationQueryWeeklyActivitiesBulkCreateArgs, 'opportunity_id'>>;
  weeklyActivitiesBulkDelete?: Resolver<Maybe<Array<Maybe<ResolversTypes['WeeklyActivity']>>>, ParentType, ContextType, RequireFields<OpportunityMutationQueryWeeklyActivitiesBulkDeleteArgs, 'opportunity_id'>>;
};

export type OpportunityPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityPermissionType'] = ResolversParentTypes['OpportunityPermissionType']> = {
  can_apply_to_local_volunteer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_be_applied_to?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_create_local_volunteer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_create_slot?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_edit_managers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_mark_gep?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_mark_remote_opportunity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_mark_unremote_opportunity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_open?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_un_publish?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  view_applications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityPotentialCandidateQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityPotentialCandidateQuery'] = ResolversParentTypes['OpportunityPotentialCandidateQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getWatchlist?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<OpportunityPotentialCandidateQueryGetWatchlistArgs>>;
};

export type OpportunityPotentialCandidateQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityPotentialCandidateQueryType'] = ResolversParentTypes['OpportunityPotentialCandidateQueryType']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createWatchlist?: Resolver<Maybe<ResolversTypes['OpportunityPotentialCandidateType']>, ParentType, ContextType, Partial<OpportunityPotentialCandidateQueryTypeCreateWatchlistArgs>>;
  deleteWatchlist?: Resolver<Maybe<ResolversTypes['OpportunityPotentialCandidateType']>, ParentType, ContextType, RequireFields<OpportunityPotentialCandidateQueryTypeDeleteWatchlistArgs, 'opportunity_id' | 'person_id'>>;
};

export type OpportunityPotentialCandidateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityPotentialCandidateType'] = ResolversParentTypes['OpportunityPotentialCandidateType']> = {
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  opportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  required_backgrounds_percentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required_languages_percentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required_skills_percentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityQuery'] = ResolversParentTypes['OpportunityQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allOpportunity?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<OpportunityQueryAllOpportunityArgs>>;
  allOpportunityDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<OpportunityQueryAllOpportunityDownloadArgs, 'columns'>>;
  allOpportunityV2?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<OpportunityQueryAllOpportunityV2Args>>;
  downloadOpportunities?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<OpportunityQueryDownloadOpportunitiesArgs, 'columns'>>;
  favouriteOpportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType>;
  featuredOpportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType, Partial<OpportunityQueryFeaturedOpportunitiesArgs>>;
  getOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, Partial<OpportunityQueryGetOpportunityArgs>>;
  getOpportunityQuestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityQuestion']>>>, ParentType, ContextType, RequireFields<OpportunityQueryGetOpportunityQuestionsArgs, 'opportunity_id'>>;
  getOpportunityTestimonials?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<OpportunityQueryGetOpportunityTestimonialsArgs>>;
  getOpportunityTranslations?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<OpportunityQueryGetOpportunityTranslationsArgs, 'id' | 'language_code'>>;
  myOpportunities?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<OpportunityQueryMyOpportunitiesArgs>>;
  opportunities?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, RequireFields<OpportunityQueryOpportunitiesArgs, 'is_v2'>>;
  opportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, Partial<OpportunityQueryOpportunityArgs>>;
  opportunityCustomStatuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomStatusType']>>>, ParentType, ContextType, RequireFields<OpportunityQueryOpportunityCustomStatusesArgs, 'id'>>;
  opportunityDiversification?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType, RequireFields<OpportunityQueryOpportunityDiversificationArgs, 'mc_id' | 'programme_id' | 'start_date'>>;
  opportunityQuestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityQuestion']>>>, ParentType, ContextType, RequireFields<OpportunityQueryOpportunityQuestionsArgs, 'opportunity_id'>>;
  opportunityTestimonials?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<OpportunityQueryOpportunityTestimonialsArgs>>;
  opportunityTranslations?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<OpportunityQueryOpportunityTranslationsArgs, 'id' | 'language_code'>>;
  projects?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<OpportunityQueryProjectsArgs>>;
  projectsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType>;
  searchAllOpportunity?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<OpportunityQuerySearchAllOpportunityArgs>>;
  searchOpportunities?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<OpportunityQuerySearchOpportunitiesArgs>>;
  similarOpportunities?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<OpportunityQuerySimilarOpportunitiesArgs>>;
  stats2?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
};

export type OpportunityQuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityQuestion'] = ResolversParentTypes['OpportunityQuestion']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  is_mandatory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['OpportunityQuestion']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  question_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  question_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sub_questions?: Resolver<Maybe<ResolversTypes['OpportunityQuestionConnection']>, ParentType, ContextType, Partial<OpportunityQuestionSub_QuestionsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityQuestionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityQuestionConnection'] = ResolversParentTypes['OpportunityQuestionConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityQuestionEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityQuestion']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityQuestionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityQuestionEdge'] = ResolversParentTypes['OpportunityQuestionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OpportunityQuestion']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityTransparentFeeDetailsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityTransparentFeeDetailsType'] = ResolversParentTypes['OpportunityTransparentFeeDetailsType']> = {
  covers_accomodation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  covers_administrative_costs?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  covers_leadership_spaces?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  covers_pickup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sponsored_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganisationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organisation'] = ResolversParentTypes['Organisation']> = {
  active_opportunities_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  address_detail?: Resolver<Maybe<ResolversTypes['AddressInfo']>, ParentType, ContextType>;
  backgrounds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  branches?: Resolver<Maybe<ResolversTypes['BranchConnection']>, ParentType, ContextType, Partial<OrganisationBranchesArgs>>;
  branches_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['CommentConnection']>, ParentType, ContextType, Partial<OrganisationCommentsArgs>>;
  company_stats?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  completeness?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  contact_detail?: Resolver<Maybe<ResolversTypes['ContactInfo']>, ParentType, ContextType>;
  contact_people?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cover_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<OrganisationCover_PhotoArgs>>;
  employees_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  experience_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  follow_up?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  has_employee?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_employees?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_opportunities?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  home_lc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  industries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType>;
  is_gep?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  managers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['CompanyMetaType']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  open_opportunities_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  open_positions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opportunity_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  organisation_size?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  organisation_type?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  partner_type?: Resolver<Maybe<ResolversTypes['PartnerTypes']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['OrganisationPermissionType']>, ParentType, ContextType>;
  pop_first_sign_up?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  profile_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<OrganisationProfile_PhotoArgs>>;
  programmes?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  questionnaires?: Resolver<Maybe<ResolversTypes['QuestionnaireConnection']>, ParentType, ContextType, Partial<OrganisationQuestionnairesArgs>>;
  registration_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scorecards?: Resolver<Maybe<ResolversTypes['ScorecardConnection']>, ParentType, ContextType, Partial<OrganisationScorecardsArgs>>;
  stats?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<OrganisationStatsArgs, 'end_date' | 'start_date'>>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag_lists?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType>;
  testimonials?: Resolver<Maybe<Array<Maybe<ResolversTypes['Testimonial']>>>, ParentType, ContextType>;
  todo_type?: Resolver<Maybe<ResolversTypes['TodoType']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year_of_creation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganisationMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganisationMutationQuery'] = ResolversParentTypes['OrganisationMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  approveOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryApproveOrganisationArgs, 'id'>>;
  archiveOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryArchiveOrganisationArgs, 'id'>>;
  createOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, Partial<OrganisationMutationQueryCreateOrganisationArgs>>;
  createOrganisationScorecard?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, Partial<OrganisationMutationQueryCreateOrganisationScorecardArgs>>;
  createOrganisationScorecardAttribute?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryCreateOrganisationScorecardAttributeArgs, 'scorecard_id'>>;
  deleteOrganisationScorecard?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryDeleteOrganisationScorecardArgs, 'id'>>;
  deleteOrganisationScorecardAttribute?: Resolver<Maybe<ResolversTypes['ScorecardAttributeType']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryDeleteOrganisationScorecardAttributeArgs, 'id'>>;
  followupOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryFollowupOrganisationArgs, 'id'>>;
  organisationApprove?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryOrganisationApproveArgs, 'id'>>;
  organisationArchive?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryOrganisationArchiveArgs, 'id'>>;
  organisationFollowup?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryOrganisationFollowupArgs, 'id'>>;
  organisationReject?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryOrganisationRejectArgs, 'id'>>;
  organisationRemovePartnerType?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryOrganisationRemovePartnerTypeArgs, 'id'>>;
  organisationScorecardAttributeCreate?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryOrganisationScorecardAttributeCreateArgs, 'scorecard_id'>>;
  organisationScorecardAttributeDelete?: Resolver<Maybe<ResolversTypes['ScorecardAttributeType']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryOrganisationScorecardAttributeDeleteArgs, 'id'>>;
  organisationScorecardAttributeUpdate?: Resolver<Maybe<ResolversTypes['ScorecardAttributeType']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryOrganisationScorecardAttributeUpdateArgs, 'id'>>;
  organisationScorecardCreate?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, Partial<OrganisationMutationQueryOrganisationScorecardCreateArgs>>;
  organisationScorecardDelete?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryOrganisationScorecardDeleteArgs, 'id'>>;
  organisationScorecardUpdate?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryOrganisationScorecardUpdateArgs, 'id'>>;
  organisationSetPartnerType?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryOrganisationSetPartnerTypeArgs, 'id' | 'partner_type'>>;
  rejectOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryRejectOrganisationArgs, 'id'>>;
  removeOrganisationPartnerType?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryRemoveOrganisationPartnerTypeArgs, 'id'>>;
  setOrganisationPartnerType?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQuerySetOrganisationPartnerTypeArgs, 'id' | 'partner_type'>>;
  updateOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryUpdateOrganisationArgs, 'id'>>;
  updateOrganisationScorecard?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryUpdateOrganisationScorecardArgs, 'id'>>;
  updateOrganisationScorecardAttribute?: Resolver<Maybe<ResolversTypes['ScorecardAttributeType']>, ParentType, ContextType, RequireFields<OrganisationMutationQueryUpdateOrganisationScorecardAttributeArgs, 'id'>>;
};

export type OrganisationPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganisationPermissionType'] = ResolversParentTypes['OrganisationPermissionType']> = {
  can_approve?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_archive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_reject?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_remove_partner_type?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update_partner_type?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganisationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganisationQuery'] = ResolversParentTypes['OrganisationQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allOrganisation?: Resolver<Maybe<ResolversTypes['CompanyList']>, ParentType, ContextType, Partial<OrganisationQueryAllOrganisationArgs>>;
  allOrganisationDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<OrganisationQueryAllOrganisationDownloadArgs, 'columns'>>;
  geoPartners?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organisation']>>>, ParentType, ContextType>;
  getOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationQueryGetOrganisationArgs, 'id'>>;
  myOrganisation?: Resolver<Maybe<ResolversTypes['CompanyList']>, ParentType, ContextType, Partial<OrganisationQueryMyOrganisationArgs>>;
  openOpportunity?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType, Partial<OrganisationQueryOpenOpportunityArgs>>;
  organisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<OrganisationQueryOrganisationArgs, 'id'>>;
  organisationAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organisation']>>>, ParentType, ContextType, RequireFields<OrganisationQueryOrganisationAutocompleteArgs, 'my'>>;
  organisationAutocompleteMy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organisation']>>>, ParentType, ContextType, Partial<OrganisationQueryOrganisationAutocompleteMyArgs>>;
  organisationDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<OrganisationQueryOrganisationDownloadArgs, 'columns'>>;
  organisations?: Resolver<Maybe<ResolversTypes['CompanyList']>, ParentType, ContextType, RequireFields<OrganisationQueryOrganisationsArgs, 'my'>>;
};

export type OrganizationDevelopmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationDevelopment'] = ResolversParentTypes['OrganizationDevelopment']> = {
  exchange_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationDevelopmentMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationDevelopmentMutationQuery'] = ResolversParentTypes['OrganizationDevelopmentMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  updateOrganizationDevelopment?: Resolver<Maybe<ResolversTypes['OrganizationDevelopment']>, ParentType, ContextType, RequireFields<OrganizationDevelopmentMutationQueryUpdateOrganizationDevelopmentArgs, 'id'>>;
  updateOrganizationDevelopmentTarget?: Resolver<Maybe<ResolversTypes['OrganizationDevelopmentTarget']>, ParentType, ContextType, RequireFields<OrganizationDevelopmentMutationQueryUpdateOrganizationDevelopmentTargetArgs, 'id'>>;
};

export type OrganizationDevelopmentQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationDevelopmentQuery'] = ResolversParentTypes['OrganizationDevelopmentQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  organizationDevelopmentGet?: Resolver<Maybe<ResolversTypes['OrganizationDevelopment']>, ParentType, ContextType, RequireFields<OrganizationDevelopmentQueryOrganizationDevelopmentGetArgs, 'id'>>;
  organizationDevelopmentList?: Resolver<Array<Maybe<ResolversTypes['OrganizationDevelopment']>>, ParentType, ContextType, Partial<OrganizationDevelopmentQueryOrganizationDevelopmentListArgs>>;
  organizationDevelopmentTargetGet?: Resolver<Maybe<ResolversTypes['OrganizationDevelopmentTarget']>, ParentType, ContextType, RequireFields<OrganizationDevelopmentQueryOrganizationDevelopmentTargetGetArgs, 'id'>>;
  organizationDevelopmentTargetList?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrganizationDevelopmentTarget']>>>, ParentType, ContextType>;
};

export type OrganizationDevelopmentTargetResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationDevelopmentTarget'] = ResolversParentTypes['OrganizationDevelopmentTarget']> = {
  exchange_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageComponentDraftTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageComponentDraftType'] = ResolversParentTypes['PageComponentDraftType']> = {
  client_reference_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  component_attachment?: Resolver<Maybe<ResolversTypes['ImageType']>, ParentType, ContextType>;
  component_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageComponentMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageComponentMutationQuery'] = ResolversParentTypes['PageComponentMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createPageComponent?: Resolver<Maybe<ResolversTypes['PageComponentDraftType']>, ParentType, ContextType, RequireFields<PageComponentMutationQueryCreatePageComponentArgs, 'page_id'>>;
  deletePageComponent?: Resolver<Maybe<ResolversTypes['PageComponentType']>, ParentType, ContextType, Partial<PageComponentMutationQueryDeletePageComponentArgs>>;
  duplicatePageComponent?: Resolver<Maybe<ResolversTypes['PageComponentType']>, ParentType, ContextType, RequireFields<PageComponentMutationQueryDuplicatePageComponentArgs, 'id'>>;
  pageComponentCreate?: Resolver<Maybe<ResolversTypes['PageComponentDraftType']>, ParentType, ContextType, RequireFields<PageComponentMutationQueryPageComponentCreateArgs, 'page_id'>>;
  pageComponentDelete?: Resolver<Maybe<ResolversTypes['PageComponentType']>, ParentType, ContextType, Partial<PageComponentMutationQueryPageComponentDeleteArgs>>;
  pageComponentDuplicate?: Resolver<Maybe<ResolversTypes['PageComponentType']>, ParentType, ContextType, RequireFields<PageComponentMutationQueryPageComponentDuplicateArgs, 'id'>>;
  pageComponentUpdate?: Resolver<Maybe<ResolversTypes['PageComponentDraftType']>, ParentType, ContextType, Partial<PageComponentMutationQueryPageComponentUpdateArgs>>;
  updatePageComponent?: Resolver<Maybe<ResolversTypes['PageComponentDraftType']>, ParentType, ContextType, Partial<PageComponentMutationQueryUpdatePageComponentArgs>>;
};

export type PageComponentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageComponentType'] = ResolversParentTypes['PageComponentType']> = {
  client_reference_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  component_attachment?: Resolver<Maybe<ResolversTypes['ImageType']>, ParentType, ContextType>;
  component_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageComponentTypeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageComponentTypeConnection'] = ResolversParentTypes['PageComponentTypeConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PageComponentTypeEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['PageComponentType']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageComponentTypeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageComponentTypeEdge'] = ResolversParentTypes['PageComponentTypeEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PageComponentType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageList'] = ResolversParentTypes['PageList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['PageType']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageMutationQuery'] = ResolversParentTypes['PageMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createPage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, Partial<PageMutationQueryCreatePageArgs>>;
  deletePage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<PageMutationQueryDeletePageArgs, 'id'>>;
  favouritePage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<PageMutationQueryFavouritePageArgs, 'id'>>;
  movePageToDraft?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<PageMutationQueryMovePageToDraftArgs, 'id'>>;
  pageCreate?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, Partial<PageMutationQueryPageCreateArgs>>;
  pageDelete?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<PageMutationQueryPageDeleteArgs, 'id'>>;
  pageFavourite?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<PageMutationQueryPageFavouriteArgs, 'id'>>;
  pageMoveToDraft?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<PageMutationQueryPageMoveToDraftArgs, 'id'>>;
  pagePublish?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<PageMutationQueryPagePublishArgs, 'id'>>;
  pageUnfavourite?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<PageMutationQueryPageUnfavouriteArgs, 'id'>>;
  pageUpdate?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<PageMutationQueryPageUpdateArgs, 'id'>>;
  publishPage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<PageMutationQueryPublishPageArgs, 'id'>>;
  unfavouritePage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<PageMutationQueryUnfavouritePageArgs, 'id'>>;
  updatePage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, RequireFields<PageMutationQueryUpdatePageArgs, 'id'>>;
};

export type PagePermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagePermissionType'] = ResolversParentTypes['PagePermissionType']> = {
  can_delete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_draft?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_publish?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageQuery'] = ResolversParentTypes['PageQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getPage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, Partial<PageQueryGetPageArgs>>;
  pages?: Resolver<Maybe<ResolversTypes['PageList']>, ParentType, ContextType, Partial<PageQueryPagesArgs>>;
};

export type PageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageType'] = ResolversParentTypes['PageType']> = {
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['CommentConnection']>, ParentType, ContextType, Partial<PageTypeCommentsArgs>>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  date_deleted?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date_published?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deleted_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  emoji?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_favourited?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_personal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  page_components?: Resolver<Maybe<ResolversTypes['PageComponentTypeConnection']>, ParentType, ContextType, RequireFields<PageTypePage_ComponentsArgs, 'status'>>;
  permissions?: Resolver<Maybe<ResolversTypes['PagePermissionType']>, ParentType, ContextType>;
  published_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Paging'] = ResolversParentTypes['Paging']> = {
  current_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_items?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartnerSignupResolvers<ContextType = any, ParentType extends ResolversParentTypes['PartnerSignup'] = ResolversParentTypes['PartnerSignup']> = {
  contact_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organisation_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartnerSignupMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PartnerSignupMutationQuery'] = ResolversParentTypes['PartnerSignupMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  partnerSignupCreate?: Resolver<Maybe<ResolversTypes['PartnerSignup']>, ParentType, ContextType, Partial<PartnerSignupMutationQueryPartnerSignupCreateArgs>>;
};

export type PeopleAutocompleteQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PeopleAutocompleteQuery'] = ResolversParentTypes['PeopleAutocompleteQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  peopleAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<PeopleAutocompleteQueryPeopleAutocompleteArgs>>;
  peopleAutocompleteActive?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<PeopleAutocompleteQueryPeopleAutocompleteActiveArgs>>;
  peopleAutocompleteColleagues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<PeopleAutocompleteQueryPeopleAutocompleteColleaguesArgs>>;
  peopleAutocompleteEmployees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<PeopleAutocompleteQueryPeopleAutocompleteEmployeesArgs>>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  academic_experiences?: Resolver<Maybe<Array<Maybe<ResolversTypes['PreviousExperience']>>>, ParentType, ContextType>;
  accepted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  accepted_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  accepted_reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_manager?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active_favourite_events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  active_favourite_opportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType>;
  address_detail?: Resolver<Maybe<ResolversTypes['AddressInfo']>, ParentType, ContextType>;
  aiesec_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  axp_settings?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  branch_employees?: Resolver<Maybe<ResolversTypes['BranchEmployeeConnection']>, ParentType, ContextType, Partial<PersonBranch_EmployeesArgs>>;
  campaign?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType>;
  city_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  client_datas?: Resolver<Maybe<ResolversTypes['ClientDataConnection']>, ParentType, ContextType, Partial<PersonClient_DatasArgs>>;
  comments?: Resolver<Maybe<ResolversTypes['CommentConnection']>, ParentType, ContextType, Partial<PersonCommentsArgs>>;
  contact_detail?: Resolver<Maybe<ResolversTypes['ContactInfo']>, ParentType, ContextType>;
  contacted_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  contacted_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  conversations?: Resolver<Maybe<ResolversTypes['ConversationConnection']>, ParentType, ContextType, Partial<PersonConversationsArgs>>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cover_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PersonCover_PhotoArgs>>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  current_experiences?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType>;
  current_office?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  cv?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType>;
  cv_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cvs?: Resolver<Maybe<Array<Maybe<ResolversTypes['CV']>>>, ParentType, ContextType>;
  deleted_branch_employees?: Resolver<Maybe<ResolversTypes['BranchEmployeeConnection']>, ParentType, ContextType, Partial<PersonDeleted_Branch_EmployeesArgs>>;
  dob?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employee_created_via?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employee_details?: Resolver<Maybe<ResolversTypes['EmployeeDetailsType']>, ParentType, ContextType>;
  expa_settings?: Resolver<Maybe<ResolversTypes['ExpaSettings']>, ParentType, ContextType>;
  expired_favourite_events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  expired_favourite_opportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  follow_up?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  followed_up_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  followed_up_by?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  has_opportunity_applications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  home_lc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  home_mc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  interviewed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  introduction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitation_accepted_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  is_ai_member?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_aiesecer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_pop_user?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_super_user?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_watchlisted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<PersonIs_WatchlistedArgs>>;
  last_active_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latest_academic?: Resolver<Maybe<ResolversTypes['PreviousExperience']>, ParentType, ContextType>;
  latest_academic_experience_backgrounds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType>;
  latest_academic_level?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  latest_graduation_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lc_alignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType>;
  linkedin_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  managed_branches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Branch']>>>, ParentType, ContextType>;
  managed_companies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organisation']>>>, ParentType, ContextType>;
  managed_opportunities?: Resolver<Maybe<ResolversTypes['OpportunityConnection']>, ParentType, ContextType, Partial<PersonManaged_OpportunitiesArgs>>;
  managed_opportunities_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  managed_sub_branch_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  managers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  member_positions?: Resolver<Maybe<Array<ResolversTypes['MemberPosition']>>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PersonMetaType']>, ParentType, ContextType>;
  middle_names?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nationalities_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  notification_settings?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nps_score?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opportunity_applications?: Resolver<Maybe<ResolversTypes['OpportunityApplicationConnection']>, ParentType, ContextType, Partial<PersonOpportunity_ApplicationsArgs>>;
  opportunity_applications_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  organisation_type?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payments?: Resolver<Maybe<Array<Maybe<ResolversTypes['payment']>>>, ParentType, ContextType>;
  percentage_of_fulfillment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['PersonPermissionType']>, ParentType, ContextType>;
  person_profile?: Resolver<Maybe<ResolversTypes['PersonProfile']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position']>>>, ParentType, ContextType>;
  professional_experience_in_years?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  professional_experiences?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProfessionalExperience']>>>, ParentType, ContextType>;
  profile_completeness?: Resolver<Maybe<ResolversTypes['ProfileCompleteness']>, ParentType, ContextType>;
  profile_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PersonProfile_PhotoArgs>>;
  programme_fees?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgrammeFee']>>>, ParentType, ContextType>;
  programmes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Programme']>>>, ParentType, ContextType>;
  recommended_incoming_programme?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  referral_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rejected_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required_backgrounds_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, Partial<PersonRequired_Backgrounds_PercentageArgs>>;
  required_languages_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, Partial<PersonRequired_Languages_PercentageArgs>>;
  required_skills_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, Partial<PersonRequired_Skills_PercentageArgs>>;
  saved_filters?: Resolver<Maybe<ResolversTypes['SavedFilterConnection']>, ParentType, ContextType, Partial<PersonSaved_FiltersArgs>>;
  secure_identity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secure_identity_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  support_conversation?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType>;
  tag_lists?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType>;
  teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['Team']>>>, ParentType, ContextType>;
  todo_type?: Resolver<Maybe<ResolversTypes['TodoType']>, ParentType, ContextType>;
  top_languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType, Partial<PersonTop_LanguagesArgs>>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  utm_campaign?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  utm_content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  utm_medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  utm_source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  utm_term?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  watchlist_for_opportunity?: Resolver<Maybe<ResolversTypes['OpportunityPotentialCandidateType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonApplicationUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonApplicationUnion'] = ResolversParentTypes['PersonApplicationUnion']> = {
  __resolveType: TypeResolveFn<'Branch' | 'BranchEmployee' | 'Opportunity' | 'OpportunityApplication' | 'Person', ParentType, ContextType>;
};

export type PersonConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonConnection'] = ResolversParentTypes['PersonConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PersonEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonEdge'] = ResolversParentTypes['PersonEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonList'] = ResolversParentTypes['PersonList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonMetaTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonMetaType'] = ResolversParentTypes['PersonMetaType']> = {
  allow_email_communication?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_on_pop?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allow_phone_communication?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_via?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opt_out_of_business_intelligence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opt_out_of_push_notification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opt_out_of_statistical_data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonMutationQuery'] = ResolversParentTypes['PersonMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  archivePerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<PersonMutationQueryArchivePersonArgs, 'id'>>;
  bulkAssignManagersForPeople?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<PersonMutationQueryBulkAssignManagersForPeopleArgs>>;
  bulkFollowup?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, RequireFields<PersonMutationQueryBulkFollowupArgs, 'follow_up_id'>>;
  bulkTagUpdateForPeople?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<PersonMutationQueryBulkTagUpdateForPeopleArgs>>;
  bulkUnassignManagersForPeople?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<PersonMutationQueryBulkUnassignManagersForPeopleArgs>>;
  createPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonMutationQueryCreatePersonArgs>>;
  createPersonAcademicExperience?: Resolver<Maybe<ResolversTypes['PreviousExperience']>, ParentType, ContextType, Partial<PersonMutationQueryCreatePersonAcademicExperienceArgs>>;
  createPersonProfessionalExperience?: Resolver<Maybe<ResolversTypes['ProfessionalExperience']>, ParentType, ContextType, Partial<PersonMutationQueryCreatePersonProfessionalExperienceArgs>>;
  deleteAcademicExperienceShow?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonMutationQueryDeleteAcademicExperienceShowArgs>>;
  deleteProfessionalExperience?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonMutationQueryDeleteProfessionalExperienceArgs>>;
  generateCv?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonMutationQueryGenerateCvArgs>>;
  generateEmail?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<PersonMutationQueryGenerateEmailArgs, 'id'>>;
  interviewPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonMutationQueryInterviewPersonArgs>>;
  updatePerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<PersonMutationQueryUpdatePersonArgs, 'id'>>;
  updatePersonAcademicExperience?: Resolver<Maybe<ResolversTypes['PreviousExperience']>, ParentType, ContextType, Partial<PersonMutationQueryUpdatePersonAcademicExperienceArgs>>;
  updatePersonProfessionalExperience?: Resolver<Maybe<ResolversTypes['ProfessionalExperience']>, ParentType, ContextType, Partial<PersonMutationQueryUpdatePersonProfessionalExperienceArgs>>;
};

export type PersonPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonPermissionType'] = ResolversParentTypes['PersonPermissionType']> = {
  can_anonymize?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_apply?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_change_lc?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_edit_managers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_generate_aiesec_email?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_interview?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_mark_apply_paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_mark_gep?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_take_ef_test?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update_lc?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_view_applications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_view_finance_submissions?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_completed_platform_nps?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_paid_for_apply?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_manager?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  should_pay_at_apply?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonProfile'] = ResolversParentTypes['PersonProfile']> = {
  backgrounds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType>;
  duration_max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  duration_min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  earliest_start_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ef_test_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  interested_in?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  latest_end_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  nationalities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType>;
  next_ef_test_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  preferred_locations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  preferred_organisations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  selected_programmes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  visible_profile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  work_fields?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonQuery'] = ResolversParentTypes['PersonQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allPeople?: Resolver<Maybe<ResolversTypes['PersonList']>, ParentType, ContextType, Partial<PersonQueryAllPeopleArgs>>;
  allPeopleDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PersonQueryAllPeopleDownloadArgs, 'columns'>>;
  checkPersonPresent?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonQueryCheckPersonPresentArgs>>;
  colleagueAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<PersonQueryColleagueAutocompleteArgs>>;
  createPersonComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, Partial<PersonQueryCreatePersonCommentArgs>>;
  createPersonPayment?: Resolver<Maybe<ResolversTypes['payment']>, ParentType, ContextType, RequireFields<PersonQueryCreatePersonPaymentArgs, 'id'>>;
  deletePersonComment?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonQueryDeletePersonCommentArgs>>;
  deletePersonCv?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonQueryDeletePersonCvArgs>>;
  deletePersonPayment?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<PersonQueryDeletePersonPaymentArgs, 'id'>>;
  downloadPeople?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PersonQueryDownloadPeopleArgs, 'columns'>>;
  featuredCandidates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, RequireFields<PersonQueryFeaturedCandidatesArgs, 'size'>>;
  generateEmail?: Resolver<Maybe<ResolversTypes['GenerateEmail']>, ParentType, ContextType, Partial<PersonQueryGenerateEmailArgs>>;
  getPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonQueryGetPersonArgs>>;
  myPeople?: Resolver<Maybe<ResolversTypes['PersonList']>, ParentType, ContextType, Partial<PersonQueryMyPeopleArgs>>;
  people?: Resolver<Maybe<ResolversTypes['PersonList']>, ParentType, ContextType, RequireFields<PersonQueryPeopleArgs, 'my'>>;
  peopleCount?: Resolver<Maybe<ResolversTypes['CounterData']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<PersonQueryPersonArgs, 'id'>>;
  personApplicationPagination?: Resolver<Maybe<ResolversTypes['OpportunityApplicationConnection']>, ParentType, ContextType, RequireFields<PersonQueryPersonApplicationPaginationArgs, 'order_by'>>;
  personApplications?: Resolver<Maybe<ResolversTypes['OpportunityApplicationList']>, ParentType, ContextType, Partial<PersonQueryPersonApplicationsArgs>>;
  personComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, Partial<PersonQueryPersonCommentsArgs>>;
  personEmployeeOf?: Resolver<Maybe<Array<Maybe<ResolversTypes['Branch']>>>, ParentType, ContextType, Partial<PersonQueryPersonEmployeeOfArgs>>;
  personInterviewed?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonQueryPersonInterviewedArgs>>;
  personLdmResponse?: Resolver<Maybe<Array<Maybe<ResolversTypes['LdmResponse']>>>, ParentType, ContextType, Partial<PersonQueryPersonLdmResponseArgs>>;
  personPaymentCreate?: Resolver<Maybe<ResolversTypes['payment']>, ParentType, ContextType, Partial<PersonQueryPersonPaymentCreateArgs>>;
  personPaymentDelete?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonQueryPersonPaymentDeleteArgs>>;
  personSuggestion?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonQueryPersonSuggestionArgs>>;
  resolvePersonComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, Partial<PersonQueryResolvePersonCommentArgs>>;
  updatePersonComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, Partial<PersonQueryUpdatePersonCommentArgs>>;
  viewPersonComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, Partial<PersonQueryViewPersonCommentArgs>>;
};

export type PictureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Picture'] = ResolversParentTypes['Picture']> = {
  file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PictureFileArgs>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  picturable_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  picturable_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plan'] = ResolversParentTypes['Plan']> = {
  end_month?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lc_deadline?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<PlanLc_DeadlineArgs, 'office_id'>>;
  mc_deadline?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_month?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanMutationQuery'] = ResolversParentTypes['PlanMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  planCreate?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<PlanMutationQueryPlanCreateArgs, 'plan'>>;
  planSetDeadline?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<PlanMutationQueryPlanSetDeadlineArgs, 'deadline' | 'office_id' | 'plan_id'>>;
  planUpdate?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<PlanMutationQueryPlanUpdateArgs, 'id'>>;
};

export type PlanQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanQuery'] = ResolversParentTypes['PlanQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['Plan']>>>, ParentType, ContextType>;
};

export type PlatformNpsResponseMutationQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlatformNpsResponseMutationQueryType'] = ResolversParentTypes['PlatformNpsResponseMutationQueryType']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createPlatformNps?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType, Partial<PlatformNpsResponseMutationQueryTypeCreatePlatformNpsArgs>>;
};

export type PlatformNpsResponseQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlatformNpsResponseQueryType'] = ResolversParentTypes['PlatformNpsResponseQueryType']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getPlatformNpsQuestions?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType>;
};

export type PositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = {
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  creator_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  deleted_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email_sent_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  function?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lda_links?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  ldm_report?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  membership_lps?: Resolver<Maybe<ResolversTypes['SurveyResponse']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  opportunity_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  position_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position_short_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PositionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PositionConnection'] = ResolversParentTypes['PositionConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PositionEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PositionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PositionEdge'] = ResolversParentTypes['PositionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PositionMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PositionMutationQuery'] = ResolversParentTypes['PositionMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createTeamPosition?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, Partial<PositionMutationQueryCreateTeamPositionArgs>>;
  deletePosition?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<PositionMutationQueryDeletePositionArgs, 'id'>>;
  updateTeamPosition?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<PositionMutationQueryUpdateTeamPositionArgs, 'id'>>;
};

export type PositionQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PositionQuery'] = ResolversParentTypes['PositionQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allPosition?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position']>>>, ParentType, ContextType, Partial<PositionQueryAllPositionArgs>>;
  getPosition?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, Partial<PositionQueryGetPositionArgs>>;
};

export type PreviousExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['PreviousExperience'] = ResolversParentTypes['PreviousExperience']> = {
  backgrounds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  exp_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  experience_level?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  organisation_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  study_level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfessionalExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfessionalExperience'] = ResolversParentTypes['ProfessionalExperience']> = {
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  exp_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  experience_level?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  industries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType>;
  organisation_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  work_fields?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType>;
  work_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileCompletenessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileCompleteness'] = ResolversParentTypes['ProfileCompleteness']> = {
  ge?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  gt?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  gv?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgrammeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Programme'] = ResolversParentTypes['Programme']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  short_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  short_name_display?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgrammeFeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgrammeFee'] = ResolversParentTypes['ProgrammeFee']> = {
  contract?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fee?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fee_for?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lc_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mc_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  opportunity_duration_type?: Resolver<Maybe<ResolversTypes['OpportunityDurationType']>, ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  programme_fee_max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  programme_fee_min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgrammeFeeBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgrammeFeeBasic'] = ResolversParentTypes['ProgrammeFeeBasic']> = {
  fee_for?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['ProgrammeId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgrammeFeeBasicConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgrammeFeeBasicConnection'] = ResolversParentTypes['ProgrammeFeeBasicConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgrammeFeeBasicEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgrammeFeeBasic']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgrammeFeeBasicEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgrammeFeeBasicEdge'] = ResolversParentTypes['ProgrammeFeeBasicEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProgrammeFeeBasic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgrammeFeeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgrammeFeeConnection'] = ResolversParentTypes['ProgrammeFeeConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgrammeFeeEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgrammeFee']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgrammeFeeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgrammeFeeEdge'] = ResolversParentTypes['ProgrammeFeeEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProgrammeFee']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgrammeFeeMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgrammeFeeMutationQuery'] = ResolversParentTypes['ProgrammeFeeMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  addContractProgrammeFee?: Resolver<Maybe<ResolversTypes['ProgrammeFee']>, ParentType, ContextType, RequireFields<ProgrammeFeeMutationQueryAddContractProgrammeFeeArgs, 'id'>>;
  incomingProgrammeFeeUpdate?: Resolver<Maybe<ResolversTypes['ProgrammeFee']>, ParentType, ContextType, RequireFields<ProgrammeFeeMutationQueryIncomingProgrammeFeeUpdateArgs, 'id'>>;
  updateProgrammeFee?: Resolver<Maybe<ResolversTypes['ProgrammeFee']>, ParentType, ContextType, RequireFields<ProgrammeFeeMutationQueryUpdateProgrammeFeeArgs, 'id'>>;
};

export type ProgrammeFeeQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgrammeFeeQueryType'] = ResolversParentTypes['ProgrammeFeeQueryType']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allProgrammeFee?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgrammeFee']>>>, ParentType, ContextType, Partial<ProgrammeFeeQueryTypeAllProgrammeFeeArgs>>;
  getProgrammeFee?: Resolver<Maybe<ResolversTypes['ProgrammeFee']>, ParentType, ContextType, Partial<ProgrammeFeeQueryTypeGetProgrammeFeeArgs>>;
};

export type ProgrammeIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgrammeId'] = ResolversParentTypes['ProgrammeId']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgrammeManagerResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgrammeManager'] = ResolversParentTypes['ProgrammeManager']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgrammeManagerMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgrammeManagerMutationQuery'] = ResolversParentTypes['ProgrammeManagerMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  assignProgrammeManager?: Resolver<Maybe<ResolversTypes['ProgrammeManager']>, ParentType, ContextType, RequireFields<ProgrammeManagerMutationQueryAssignProgrammeManagerArgs, 'id'>>;
  removeProgrammeManager?: Resolver<Maybe<ResolversTypes['ProgrammeManager']>, ParentType, ContextType, RequireFields<ProgrammeManagerMutationQueryRemoveProgrammeManagerArgs, 'id'>>;
};

export type QueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryType'] = ResolversParentTypes['QueryType']> = {
  accommodationScheduleList?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccommodationAssignment']>>>, ParentType, ContextType, Partial<QueryTypeAccommodationScheduleListArgs>>;
  accommodations?: Resolver<Maybe<ResolversTypes['AccommodationList']>, ParentType, ContextType, Partial<QueryTypeAccommodationsArgs>>;
  allCity?: Resolver<Maybe<ResolversTypes['CityList']>, ParentType, ContextType, Partial<QueryTypeAllCityArgs>>;
  allConstants?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType, Partial<QueryTypeAllConstantsArgs>>;
  allCurrencies?: Resolver<Array<Maybe<ResolversTypes['Currency']>>, ParentType, ContextType>;
  allGlobalPartnerRequests?: Resolver<Maybe<Array<Maybe<ResolversTypes['GlobalPartnerRequestType']>>>, ParentType, ContextType>;
  allNationalPartners?: Resolver<Maybe<Array<Maybe<ResolversTypes['NationalPartnerType']>>>, ParentType, ContextType, Partial<QueryTypeAllNationalPartnersArgs>>;
  allOpportunity?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<QueryTypeAllOpportunityArgs>>;
  allOpportunityApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplicationList']>, ParentType, ContextType, Partial<QueryTypeAllOpportunityApplicationArgs>>;
  allOpportunityApplicationDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryTypeAllOpportunityApplicationDownloadArgs, 'columns'>>;
  allOpportunityDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryTypeAllOpportunityDownloadArgs, 'columns'>>;
  allOpportunityV2?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<QueryTypeAllOpportunityV2Args>>;
  allOrganisation?: Resolver<Maybe<ResolversTypes['CompanyList']>, ParentType, ContextType, Partial<QueryTypeAllOrganisationArgs>>;
  allOrganisationDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryTypeAllOrganisationDownloadArgs, 'columns'>>;
  allPeople?: Resolver<Maybe<ResolversTypes['PersonList']>, ParentType, ContextType, Partial<QueryTypeAllPeopleArgs>>;
  allPeopleDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryTypeAllPeopleDownloadArgs, 'columns'>>;
  allPosition?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position']>>>, ParentType, ContextType, Partial<QueryTypeAllPositionArgs>>;
  allProgrammeFee?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgrammeFee']>>>, ParentType, ContextType, Partial<QueryTypeAllProgrammeFeeArgs>>;
  allSdgTargets?: Resolver<Maybe<Array<Maybe<ResolversTypes['SdgTarget']>>>, ParentType, ContextType, Partial<QueryTypeAllSdgTargetsArgs>>;
  allSuggestedCountries?: Resolver<Maybe<Array<Maybe<ResolversTypes['SuggestedCountry']>>>, ParentType, ContextType, Partial<QueryTypeAllSuggestedCountriesArgs>>;
  allSurvey?: Resolver<Maybe<Array<Maybe<ResolversTypes['Survey']>>>, ParentType, ContextType>;
  allTagList?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType>;
  applicationCsv?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<QueryTypeApplicationCsvArgs>>;
  applicationInterviewSlots?: Resolver<Maybe<Array<Maybe<ResolversTypes['InterviewSlot']>>>, ParentType, ContextType, RequireFields<QueryTypeApplicationInterviewSlotsArgs, 'id'>>;
  applicationOfflineAssessments?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfflineAssessment']>>>, ParentType, ContextType, RequireFields<QueryTypeApplicationOfflineAssessmentsArgs, 'id'>>;
  applicationTestimonials?: Resolver<Maybe<ResolversTypes['OpportunityApplicationList']>, ParentType, ContextType, Partial<QueryTypeApplicationTestimonialsArgs>>;
  assignedApplications?: Resolver<Maybe<ResolversTypes['AccommodationAssignmentList']>, ParentType, ContextType, Partial<QueryTypeAssignedApplicationsArgs>>;
  branch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, Partial<QueryTypeBranchArgs>>;
  branchAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Branch']>>>, ParentType, ContextType, Partial<QueryTypeBranchAutocompleteArgs>>;
  branchContracts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contract']>>>, ParentType, ContextType, Partial<QueryTypeBranchContractsArgs>>;
  branchEmployees?: Resolver<Maybe<Array<Maybe<ResolversTypes['BranchEmployee']>>>, ParentType, ContextType, RequireFields<QueryTypeBranchEmployeesArgs, 'id'>>;
  branches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Branch']>>>, ParentType, ContextType, RequireFields<QueryTypeBranchesArgs, 'my'>>;
  bulkCvDownload?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<QueryTypeBulkCvDownloadArgs>>;
  campaignAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Campaign']>>>, ParentType, ContextType, Partial<QueryTypeCampaignAutocompleteArgs>>;
  checkIfMemberLeadExists?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryTypeCheckIfMemberLeadExistsArgs, 'email'>>;
  checkPersonPresent?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<QueryTypeCheckPersonPresentArgs>>;
  cityAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['City']>>>, ParentType, ContextType, Partial<QueryTypeCityAutocompleteArgs>>;
  cityByMc?: Resolver<Maybe<Array<Maybe<ResolversTypes['City']>>>, ParentType, ContextType, RequireFields<QueryTypeCityByMcArgs, 'allocated_to_lc' | 'mc_id'>>;
  clientData?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType, RequireFields<QueryTypeClientDataArgs, 'id'>>;
  clientDataByNameAndApplicable?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType, RequireFields<QueryTypeClientDataByNameAndApplicableArgs, 'applicable_id' | 'applicable_type' | 'name'>>;
  clientDataGet?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType, RequireFields<QueryTypeClientDataGetArgs, 'id'>>;
  clientDataGetByNameAndApplicable?: Resolver<Maybe<ResolversTypes['ClientData']>, ParentType, ContextType, RequireFields<QueryTypeClientDataGetByNameAndApplicableArgs, 'applicable_id' | 'applicable_type' | 'name'>>;
  colleagueAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<QueryTypeColleagueAutocompleteArgs>>;
  committee?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<QueryTypeCommitteeArgs, 'id'>>;
  committeeAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType, RequireFields<QueryTypeCommitteeAutocompleteArgs, 'my_committee_autocomplete'>>;
  committeeBasicDetails?: Resolver<Maybe<ResolversTypes['OfficeBasicDetails']>, ParentType, ContextType, RequireFields<QueryTypeCommitteeBasicDetailsArgs, 'id'>>;
  committeeTerm?: Resolver<Maybe<ResolversTypes['CommitteeTermType']>, ParentType, ContextType, RequireFields<QueryTypeCommitteeTermArgs, 'id' | 'term_id'>>;
  committeeTerms?: Resolver<Maybe<Array<Maybe<ResolversTypes['TermDate']>>>, ParentType, ContextType, RequireFields<QueryTypeCommitteeTermsArgs, 'id'>>;
  committeeTermsWithDepartments?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommitteeTermType']>>>, ParentType, ContextType, RequireFields<QueryTypeCommitteeTermsWithDepartmentsArgs, 'id'>>;
  committees?: Resolver<Maybe<ResolversTypes['OfficeList']>, ParentType, ContextType, Partial<QueryTypeCommitteesArgs>>;
  committeesDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryTypeCommitteesDownloadArgs, 'columns'>>;
  committeesListBasic?: Resolver<Maybe<ResolversTypes['OfficeBasicList']>, ParentType, ContextType, Partial<QueryTypeCommitteesListBasicArgs>>;
  constantAutocomplete?: Resolver<Array<Maybe<ResolversTypes['Constant']>>, ParentType, ContextType, Partial<QueryTypeConstantAutocompleteArgs>>;
  constants?: Resolver<Array<Maybe<ResolversTypes['Constant']>>, ParentType, ContextType, Partial<QueryTypeConstantsArgs>>;
  createPersonComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, Partial<QueryTypeCreatePersonCommentArgs>>;
  createPersonPayment?: Resolver<Maybe<ResolversTypes['payment']>, ParentType, ContextType, RequireFields<QueryTypeCreatePersonPaymentArgs, 'id'>>;
  currentPerson?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType, Partial<QueryTypeCurrentPersonArgs>>;
  currentPersonAttachment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attachment']>>>, ParentType, ContextType>;
  currentPersonComment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  currentPersonDump?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType>;
  currentPersonEfResult?: Resolver<Maybe<ResolversTypes['CurrentPerson']>, ParentType, ContextType>;
  currentPersonManagers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  currentPersonProgrammeFees?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgrammeFee']>>>, ParentType, ContextType, RequireFields<QueryTypeCurrentPersonProgrammeFeesArgs, 'managed_companies'>>;
  currentPersonSavedFilters?: Resolver<Maybe<Array<Maybe<ResolversTypes['SavedFilter']>>>, ParentType, ContextType, Partial<QueryTypeCurrentPersonSavedFiltersArgs>>;
  currentPersonSavedFiltersShow?: Resolver<Maybe<ResolversTypes['SavedFilter']>, ParentType, ContextType, Partial<QueryTypeCurrentPersonSavedFiltersShowArgs>>;
  deletePersonComment?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<QueryTypeDeletePersonCommentArgs>>;
  deletePersonCv?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<QueryTypeDeletePersonCvArgs>>;
  deletePersonPayment?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryTypeDeletePersonPaymentArgs, 'id'>>;
  deliverabilityReport?: Resolver<Maybe<ResolversTypes['MailTemplateDeliverabilityReport']>, ParentType, ContextType, RequireFields<QueryTypeDeliverabilityReportArgs, 'mail_template_type_name'>>;
  downloadMemberPositions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryTypeDownloadMemberPositionsArgs, 'columns'>>;
  downloadOpportunities?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryTypeDownloadOpportunitiesArgs, 'columns'>>;
  downloadPeople?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryTypeDownloadPeopleArgs, 'columns'>>;
  employeeLead?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<QueryTypeEmployeeLeadArgs>>;
  employeeLeadGet?: Resolver<Maybe<ResolversTypes['EmployeeLead']>, ParentType, ContextType, Partial<QueryTypeEmployeeLeadGetArgs>>;
  employeeLeads?: Resolver<Maybe<ResolversTypes['EmployeeLeadList']>, ParentType, ContextType, Partial<QueryTypeEmployeeLeadsArgs>>;
  entityGoalSetting?: Resolver<Maybe<Array<Maybe<ResolversTypes['EntityGoal']>>>, ParentType, ContextType, Partial<QueryTypeEntityGoalSettingArgs>>;
  entityPlans?: Resolver<Maybe<Array<Maybe<ResolversTypes['EntityPlan']>>>, ParentType, ContextType, RequireFields<QueryTypeEntityPlansArgs, 'office_id'>>;
  eventGet?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryTypeEventGetArgs, 'id'>>;
  eventList?: Resolver<Maybe<ResolversTypes['EventList']>, ParentType, ContextType, Partial<QueryTypeEventListArgs>>;
  eventRegistrationGet?: Resolver<Maybe<ResolversTypes['EventRegistration']>, ParentType, ContextType, RequireFields<QueryTypeEventRegistrationGetArgs, 'id'>>;
  eventRegistrationList?: Resolver<Maybe<ResolversTypes['EventRegistrationList']>, ParentType, ContextType, Partial<QueryTypeEventRegistrationListArgs>>;
  favouriteOpportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType>;
  featuredCandidates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, RequireFields<QueryTypeFeaturedCandidatesArgs, 'size'>>;
  featuredOpportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType, Partial<QueryTypeFeaturedOpportunitiesArgs>>;
  findLc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, Partial<QueryTypeFindLcArgs>>;
  flightDetails?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, RequireFields<QueryTypeFlightDetailsArgs, 'application_flight_token'>>;
  generateEmail?: Resolver<Maybe<ResolversTypes['GenerateEmail']>, ParentType, ContextType, Partial<QueryTypeGenerateEmailArgs>>;
  geoCodedCommittee?: Resolver<Maybe<ResolversTypes['OfficeBasicDetails']>, ParentType, ContextType>;
  geoPartners?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organisation']>>>, ParentType, ContextType>;
  getAccommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, Partial<QueryTypeGetAccommodationArgs>>;
  getApplication?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType, Partial<QueryTypeGetApplicationArgs>>;
  getAttachment?: Resolver<Maybe<ResolversTypes['Attachment']>, ParentType, ContextType, RequireFields<QueryTypeGetAttachmentArgs, 'id'>>;
  getBranch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, Partial<QueryTypeGetBranchArgs>>;
  getBranchEmployee?: Resolver<Maybe<ResolversTypes['BranchEmployee']>, ParentType, ContextType, Partial<QueryTypeGetBranchEmployeeArgs>>;
  getCampaign?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<QueryTypeGetCampaignArgs, 'id'>>;
  getCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, Partial<QueryTypeGetCityArgs>>;
  getCityLc?: Resolver<Maybe<ResolversTypes['CityLc']>, ParentType, ContextType, Partial<QueryTypeGetCityLcArgs>>;
  getComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryTypeGetCommentArgs, 'id'>>;
  getCommittee?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<QueryTypeGetCommitteeArgs, 'id'>>;
  getCommitteeBasicDetails?: Resolver<Maybe<ResolversTypes['OfficeBasicDetails']>, ParentType, ContextType, RequireFields<QueryTypeGetCommitteeBasicDetailsArgs, 'id'>>;
  getCommitteeTerm?: Resolver<Maybe<ResolversTypes['TermDate']>, ParentType, ContextType, RequireFields<QueryTypeGetCommitteeTermArgs, 'id'>>;
  getConversation?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType, Partial<QueryTypeGetConversationArgs>>;
  getImage?: Resolver<Maybe<ResolversTypes['ImageType']>, ParentType, ContextType, RequireFields<QueryTypeGetImageArgs, 'id'>>;
  getInboundEmailApplication?: Resolver<Maybe<Array<Maybe<ResolversTypes['InboundEmailType']>>>, ParentType, ContextType, Partial<QueryTypeGetInboundEmailApplicationArgs>>;
  getInvoice?: Resolver<Maybe<ResolversTypes['InvoiceType']>, ParentType, ContextType, RequireFields<QueryTypeGetInvoiceArgs, 'id'>>;
  getLcAlignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType, RequireFields<QueryTypeGetLcAlignmentArgs, 'id'>>;
  getMailTemplate?: Resolver<Maybe<ResolversTypes['MailTemplate']>, ParentType, ContextType, Partial<QueryTypeGetMailTemplateArgs>>;
  getNationalPartner?: Resolver<Maybe<ResolversTypes['NationalPartnerType']>, ParentType, ContextType, RequireFields<QueryTypeGetNationalPartnerArgs, 'id'>>;
  getOpportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, Partial<QueryTypeGetOpportunityArgs>>;
  getOpportunityQuestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityQuestion']>>>, ParentType, ContextType, RequireFields<QueryTypeGetOpportunityQuestionsArgs, 'opportunity_id'>>;
  getOpportunityTestimonials?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<QueryTypeGetOpportunityTestimonialsArgs>>;
  getOpportunityTranslations?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryTypeGetOpportunityTranslationsArgs, 'id' | 'language_code'>>;
  getOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<QueryTypeGetOrganisationArgs, 'id'>>;
  getPage?: Resolver<Maybe<ResolversTypes['PageType']>, ParentType, ContextType, Partial<QueryTypeGetPageArgs>>;
  getPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<QueryTypeGetPersonArgs>>;
  getPlatformNpsQuestions?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType>;
  getPosition?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, Partial<QueryTypeGetPositionArgs>>;
  getProgrammeFee?: Resolver<Maybe<ResolversTypes['ProgrammeFee']>, ParentType, ContextType, Partial<QueryTypeGetProgrammeFeeArgs>>;
  getSuggestedCountry?: Resolver<Maybe<ResolversTypes['SuggestedCountry']>, ParentType, ContextType, RequireFields<QueryTypeGetSuggestedCountryArgs, 'id'>>;
  getTagList?: Resolver<Maybe<ResolversTypes['TagList']>, ParentType, ContextType, Partial<QueryTypeGetTagListArgs>>;
  getTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, Partial<QueryTypeGetTeamArgs>>;
  getTestimonial?: Resolver<Maybe<ResolversTypes['Testimonial']>, ParentType, ContextType, Partial<QueryTypeGetTestimonialArgs>>;
  getTimeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType, Partial<QueryTypeGetTimelineArgs>>;
  getTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, Partial<QueryTypeGetTodoArgs>>;
  getWatchlist?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<QueryTypeGetWatchlistArgs>>;
  lcAlignment?: Resolver<Maybe<ResolversTypes['LcAlignment']>, ParentType, ContextType, RequireFields<QueryTypeLcAlignmentArgs, 'id'>>;
  lcAlignments?: Resolver<Maybe<Array<Maybe<ResolversTypes['LcAlignment']>>>, ParentType, ContextType, RequireFields<QueryTypeLcAlignmentsArgs, 'alignment_type' | 'id'>>;
  lcAlignmentsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['LcAlignment']>>>, ParentType, ContextType, RequireFields<QueryTypeLcAlignmentsListArgs, 'q'>>;
  ldaSurvey?: Resolver<Maybe<ResolversTypes['LdaResponse']>, ParentType, ContextType, RequireFields<QueryTypeLdaSurveyArgs, 'lda_survey_id'>>;
  ldmReport?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<QueryTypeLdmReportArgs>>;
  ldmSurvey?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyQuestion']>>>, ParentType, ContextType, Partial<QueryTypeLdmSurveyArgs>>;
  listNationalPartners?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organisation']>>>, ParentType, ContextType, RequireFields<QueryTypeListNationalPartnersArgs, 'mc_id'>>;
  mailTemplates?: Resolver<Maybe<Array<Maybe<ResolversTypes['MailTemplate']>>>, ParentType, ContextType, Partial<QueryTypeMailTemplatesArgs>>;
  mcFeatures?: Resolver<Maybe<Array<Maybe<ResolversTypes['McFeature']>>>, ParentType, ContextType, Partial<QueryTypeMcFeaturesArgs>>;
  mcsAlignments?: Resolver<Maybe<Array<Maybe<ResolversTypes['OfficeMcAlignment']>>>, ParentType, ContextType, RequireFields<QueryTypeMcsAlignmentsArgs, 'alignment_type'>>;
  measureOfImpacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Constant']>>>, ParentType, ContextType, RequireFields<QueryTypeMeasureOfImpactsArgs, 'sdg_goal_id'>>;
  memberLead?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, Partial<QueryTypeMemberLeadArgs>>;
  memberLeadCheckIfExists?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryTypeMemberLeadCheckIfExistsArgs, 'email'>>;
  memberLeadGet?: Resolver<Maybe<ResolversTypes['MemberLead']>, ParentType, ContextType, Partial<QueryTypeMemberLeadGetArgs>>;
  memberLeads?: Resolver<Maybe<ResolversTypes['MemberLeadList']>, ParentType, ContextType, Partial<QueryTypeMemberLeadsArgs>>;
  memberPosition?: Resolver<Maybe<ResolversTypes['MemberPosition']>, ParentType, ContextType, RequireFields<QueryTypeMemberPositionArgs, 'id'>>;
  memberPositions?: Resolver<Maybe<ResolversTypes['MemberPositionList']>, ParentType, ContextType, Partial<QueryTypeMemberPositionsArgs>>;
  memberPositionsDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryTypeMemberPositionsDownloadArgs, 'columns'>>;
  myBranch?: Resolver<Maybe<Array<Maybe<ResolversTypes['Branch']>>>, ParentType, ContextType, Partial<QueryTypeMyBranchArgs>>;
  myCommitteeAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType, Partial<QueryTypeMyCommitteeAutocompleteArgs>>;
  myOpportunities?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<QueryTypeMyOpportunitiesArgs>>;
  myOrganisation?: Resolver<Maybe<ResolversTypes['CompanyList']>, ParentType, ContextType, Partial<QueryTypeMyOrganisationArgs>>;
  myPeople?: Resolver<Maybe<ResolversTypes['PersonList']>, ParentType, ContextType, Partial<QueryTypeMyPeopleArgs>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryTypeNodeArgs, 'id'>>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Node']>>, ParentType, ContextType, RequireFields<QueryTypeNodesArgs, 'ids'>>;
  notification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, Partial<QueryTypeNotificationArgs>>;
  notificationGet?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, Partial<QueryTypeNotificationGetArgs>>;
  notificationList?: Resolver<Maybe<ResolversTypes['NotificationList']>, ParentType, ContextType, Partial<QueryTypeNotificationListArgs>>;
  notifications?: Resolver<Maybe<ResolversTypes['NotificationList']>, ParentType, ContextType, Partial<QueryTypeNotificationsArgs>>;
  npsSurvey?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType>;
  openOpportunity?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType, Partial<QueryTypeOpenOpportunityArgs>>;
  opportunities?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, RequireFields<QueryTypeOpportunitiesArgs, 'is_v2'>>;
  opportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, Partial<QueryTypeOpportunityArgs>>;
  opportunityCustomStatuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomStatusType']>>>, ParentType, ContextType, RequireFields<QueryTypeOpportunityCustomStatusesArgs, 'id'>>;
  opportunityDiversification?: Resolver<Maybe<Array<Maybe<ResolversTypes['Office']>>>, ParentType, ContextType, RequireFields<QueryTypeOpportunityDiversificationArgs, 'mc_id' | 'programme_id' | 'start_date'>>;
  opportunityDurationTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityDurationType']>>>, ParentType, ContextType>;
  opportunityQuestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityQuestion']>>>, ParentType, ContextType, RequireFields<QueryTypeOpportunityQuestionsArgs, 'opportunity_id'>>;
  opportunityTestimonials?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityApplication']>>>, ParentType, ContextType, Partial<QueryTypeOpportunityTestimonialsArgs>>;
  opportunityTranslations?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryTypeOpportunityTranslationsArgs, 'id' | 'language_code'>>;
  organisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<QueryTypeOrganisationArgs, 'id'>>;
  organisationAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organisation']>>>, ParentType, ContextType, RequireFields<QueryTypeOrganisationAutocompleteArgs, 'my'>>;
  organisationAutocompleteMy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organisation']>>>, ParentType, ContextType, Partial<QueryTypeOrganisationAutocompleteMyArgs>>;
  organisationDownload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryTypeOrganisationDownloadArgs, 'columns'>>;
  organisationEmployees?: Resolver<Maybe<Array<Maybe<ResolversTypes['BranchEmployee']>>>, ParentType, ContextType, Partial<QueryTypeOrganisationEmployeesArgs>>;
  organisations?: Resolver<Maybe<ResolversTypes['CompanyList']>, ParentType, ContextType, RequireFields<QueryTypeOrganisationsArgs, 'my'>>;
  organizationDevelopmentGet?: Resolver<Maybe<ResolversTypes['OrganizationDevelopment']>, ParentType, ContextType, RequireFields<QueryTypeOrganizationDevelopmentGetArgs, 'id'>>;
  organizationDevelopmentList?: Resolver<Array<Maybe<ResolversTypes['OrganizationDevelopment']>>, ParentType, ContextType, Partial<QueryTypeOrganizationDevelopmentListArgs>>;
  organizationDevelopmentTargetGet?: Resolver<Maybe<ResolversTypes['OrganizationDevelopmentTarget']>, ParentType, ContextType, RequireFields<QueryTypeOrganizationDevelopmentTargetGetArgs, 'id'>>;
  organizationDevelopmentTargetList?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrganizationDevelopmentTarget']>>>, ParentType, ContextType>;
  pages?: Resolver<Maybe<ResolversTypes['PageList']>, ParentType, ContextType, Partial<QueryTypePagesArgs>>;
  partnerStandardsSurvey?: Resolver<Maybe<ResolversTypes['StandardsSurvey']>, ParentType, ContextType, RequireFields<QueryTypePartnerStandardsSurveyArgs, 'partner_standard_survey_id'>>;
  people?: Resolver<Maybe<ResolversTypes['PersonList']>, ParentType, ContextType, RequireFields<QueryTypePeopleArgs, 'my'>>;
  peopleAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<QueryTypePeopleAutocompleteArgs>>;
  peopleAutocompleteActive?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<QueryTypePeopleAutocompleteActiveArgs>>;
  peopleAutocompleteColleagues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<QueryTypePeopleAutocompleteColleaguesArgs>>;
  peopleAutocompleteEmployees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, Partial<QueryTypePeopleAutocompleteEmployeesArgs>>;
  peopleCount?: Resolver<Maybe<ResolversTypes['CounterData']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryTypePersonArgs, 'id'>>;
  personApplicationPagination?: Resolver<Maybe<ResolversTypes['OpportunityApplicationConnection']>, ParentType, ContextType, RequireFields<QueryTypePersonApplicationPaginationArgs, 'order_by'>>;
  personApplications?: Resolver<Maybe<ResolversTypes['OpportunityApplicationList']>, ParentType, ContextType, Partial<QueryTypePersonApplicationsArgs>>;
  personComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, Partial<QueryTypePersonCommentsArgs>>;
  personEmployeeOf?: Resolver<Maybe<Array<Maybe<ResolversTypes['Branch']>>>, ParentType, ContextType, Partial<QueryTypePersonEmployeeOfArgs>>;
  personInterviewed?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<QueryTypePersonInterviewedArgs>>;
  personLdmResponse?: Resolver<Maybe<Array<Maybe<ResolversTypes['LdmResponse']>>>, ParentType, ContextType, Partial<QueryTypePersonLdmResponseArgs>>;
  personPaymentCreate?: Resolver<Maybe<ResolversTypes['payment']>, ParentType, ContextType, Partial<QueryTypePersonPaymentCreateArgs>>;
  personPaymentDelete?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<QueryTypePersonPaymentDeleteArgs>>;
  personSuggestion?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<QueryTypePersonSuggestionArgs>>;
  plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['Plan']>>>, ParentType, ContextType>;
  projects?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<QueryTypeProjectsArgs>>;
  projectsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType>;
  resolvePersonComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, Partial<QueryTypeResolvePersonCommentArgs>>;
  scorecardGet?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<QueryTypeScorecardGetArgs, 'id'>>;
  sdgGoals?: Resolver<Array<Maybe<ResolversTypes['Constant']>>, ParentType, ContextType, Partial<QueryTypeSdgGoalsArgs>>;
  sdgTargets?: Resolver<Array<Maybe<ResolversTypes['SdgTarget']>>, ParentType, ContextType, Partial<QueryTypeSdgTargetsArgs>>;
  searchAllOpportunity?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<QueryTypeSearchAllOpportunityArgs>>;
  searchOpportunities?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<QueryTypeSearchOpportunitiesArgs>>;
  signupQuestions?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType, RequireFields<QueryTypeSignupQuestionsArgs, 'id'>>;
  similarEvents?: Resolver<Maybe<ResolversTypes['EventList']>, ParentType, ContextType, Partial<QueryTypeSimilarEventsArgs>>;
  similarOpportunities?: Resolver<Maybe<ResolversTypes['OpportunityList']>, ParentType, ContextType, Partial<QueryTypeSimilarOpportunitiesArgs>>;
  standardsSurvey?: Resolver<Maybe<ResolversTypes['StandardsSurvey']>, ParentType, ContextType, RequireFields<QueryTypeStandardsSurveyArgs, 'standard_survey_id'>>;
  stats2?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  subProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubProduct']>>>, ParentType, ContextType, Partial<QueryTypeSubProductsArgs>>;
  suggestedCountries?: Resolver<Maybe<Array<Maybe<ResolversTypes['SuggestedCountry']>>>, ParentType, ContextType, Partial<QueryTypeSuggestedCountriesArgs>>;
  suggestedCountry?: Resolver<Maybe<ResolversTypes['SuggestedCountry']>, ParentType, ContextType, RequireFields<QueryTypeSuggestedCountryArgs, 'id'>>;
  surveyDetails?: Resolver<Maybe<ResolversTypes['SurveyDetails']>, ParentType, ContextType, RequireFields<QueryTypeSurveyDetailsArgs, 'survey_uuid'>>;
  tagList?: Resolver<Maybe<ResolversTypes['TagList']>, ParentType, ContextType, Partial<QueryTypeTagListArgs>>;
  tagListAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType, Partial<QueryTypeTagListAutocompleteArgs>>;
  tagLists?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType>;
  termForCommitteeGet?: Resolver<Maybe<Array<Maybe<ResolversTypes['Term']>>>, ParentType, ContextType>;
  testimonialList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Testimonial']>>>, ParentType, ContextType, Partial<QueryTypeTestimonialListArgs>>;
  todos?: Resolver<Maybe<ResolversTypes['TodoList']>, ParentType, ContextType, Partial<QueryTypeTodosArgs>>;
  todosList?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryTypeTodosListArgs, 'id' | 'type'>>;
  unbilledApplications?: Resolver<Maybe<ResolversTypes['OpportunityApplicationList']>, ParentType, ContextType, RequireFields<QueryTypeUnbilledApplicationsArgs, 'id'>>;
  updatePersonComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, Partial<QueryTypeUpdatePersonCommentArgs>>;
  viewPersonComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, Partial<QueryTypeViewPersonCommentArgs>>;
};

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  is_mandatory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  question_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  question_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sub_questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestionnaireResolvers<ContextType = any, ParentType extends ResolversParentTypes['Questionnaire'] = ResolversParentTypes['Questionnaire']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opportunities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity']>>>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['QuestionnairePermissionType']>, ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestionnaireConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionnaireConnection'] = ResolversParentTypes['QuestionnaireConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuestionnaireEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Questionnaire']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestionnaireEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionnaireEdge'] = ResolversParentTypes['QuestionnaireEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Questionnaire']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestionnaireMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionnaireMutationQuery'] = ResolversParentTypes['QuestionnaireMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  addQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, Partial<QuestionnaireMutationQueryAddQuestionArgs>>;
  bulkCreateQuestion?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, Partial<QuestionnaireMutationQueryBulkCreateQuestionArgs>>;
  bulkDeleteQuestion?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, Partial<QuestionnaireMutationQueryBulkDeleteQuestionArgs>>;
  bulkUpdateQuestion?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, Partial<QuestionnaireMutationQueryBulkUpdateQuestionArgs>>;
  createQuestionnaire?: Resolver<Maybe<ResolversTypes['Questionnaire']>, ParentType, ContextType, RequireFields<QuestionnaireMutationQueryCreateQuestionnaireArgs, 'company_id'>>;
  deleteQuestionnaire?: Resolver<Maybe<ResolversTypes['Questionnaire']>, ParentType, ContextType, RequireFields<QuestionnaireMutationQueryDeleteQuestionnaireArgs, 'id'>>;
  duplicateQuestionnaire?: Resolver<Maybe<ResolversTypes['Questionnaire']>, ParentType, ContextType, RequireFields<QuestionnaireMutationQueryDuplicateQuestionnaireArgs, 'id'>>;
  questionBulkCreate?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, Partial<QuestionnaireMutationQueryQuestionBulkCreateArgs>>;
  questionBulkDelete?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, Partial<QuestionnaireMutationQueryQuestionBulkDeleteArgs>>;
  questionBulkUpdate?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, Partial<QuestionnaireMutationQueryQuestionBulkUpdateArgs>>;
  removeQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<QuestionnaireMutationQueryRemoveQuestionArgs, 'id'>>;
  updateQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<QuestionnaireMutationQueryUpdateQuestionArgs, 'id'>>;
  updateQuestionnaire?: Resolver<Maybe<ResolversTypes['Questionnaire']>, ParentType, ContextType, RequireFields<QuestionnaireMutationQueryUpdateQuestionnaireArgs, 'id'>>;
};

export type QuestionnairePermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionnairePermissionType'] = ResolversParentTypes['QuestionnairePermissionType']> = {
  can_delete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleInfoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleInfoType'] = ResolversParentTypes['RoleInfoType']> = {
  additional_instructions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  all_learning_points?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  learning_points?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  learning_points_list?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  required_preparation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  selection_process?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SavedFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['SavedFilter'] = ResolversParentTypes['SavedFilter']> = {
  body?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SavedFilterConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SavedFilterConnection'] = ResolversParentTypes['SavedFilterConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['SavedFilterEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['SavedFilter']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SavedFilterEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SavedFilterEdge'] = ResolversParentTypes['SavedFilterEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['SavedFilter']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScorecardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Scorecard'] = ResolversParentTypes['Scorecard']> = {
  creator?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['ScorecardPermissionType']>, ParentType, ContextType>;
  scorecard_attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScorecardAttributeType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScorecardAttributePermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScorecardAttributePermissionType'] = ResolversParentTypes['ScorecardAttributePermissionType']> = {
  can_delete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScorecardAttributeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScorecardAttributeType'] = ResolversParentTypes['ScorecardAttributeType']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['ScorecardAttributePermissionType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScorecardConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScorecardConnection'] = ResolversParentTypes['ScorecardConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScorecardEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Scorecard']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScorecardEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScorecardEdge'] = ResolversParentTypes['ScorecardEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScorecardPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScorecardPermissionType'] = ResolversParentTypes['ScorecardPermissionType']> = {
  can_delete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScorecardQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScorecardQuery'] = ResolversParentTypes['ScorecardQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  scorecardGet?: Resolver<Maybe<ResolversTypes['Scorecard']>, ParentType, ContextType, RequireFields<ScorecardQueryScorecardGetArgs, 'id'>>;
};

export type SdgResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sdg'] = ResolversParentTypes['Sdg']> = {
  already_reached?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  coordination?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliverables?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  impact_date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  implementation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partners?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  potential_reach?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sdg_target?: Resolver<Maybe<ResolversTypes['SdgTarget']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SdgTargetResolvers<ContextType = any, ParentType extends ResolversParentTypes['SdgTarget'] = ResolversParentTypes['SdgTarget']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eligible_for_global_project?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  goal_index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Constant']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target_index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectionProcessResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectionProcess'] = ResolversParentTypes['SelectionProcess']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  no_of_days?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectionProcessConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectionProcessConnection'] = ResolversParentTypes['SelectionProcessConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectionProcessEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['SelectionProcess']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectionProcessEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectionProcessEdge'] = ResolversParentTypes['SelectionProcessEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['SelectionProcess']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SlotResolvers<ContextType = any, ParentType extends ResolversParentTypes['Slot'] = ResolversParentTypes['Slot']> = {
  applications_close_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  available_openings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  openings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opportunity_applications_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  original_applications_close_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['SlotPermissionType']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SlotConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SlotConnection'] = ResolversParentTypes['SlotConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['SlotEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Slot']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SlotEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SlotEdge'] = ResolversParentTypes['SlotEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SlotMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SlotMutationQuery'] = ResolversParentTypes['SlotMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createSlot?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<SlotMutationQueryCreateSlotArgs, 'opportunity_id'>>;
  deleteSlot?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<SlotMutationQueryDeleteSlotArgs, 'id'>>;
  moveSlotToActive?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<SlotMutationQueryMoveSlotToActiveArgs, 'id'>>;
  moveSlotToInactive?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<SlotMutationQueryMoveSlotToInactiveArgs, 'id'>>;
  slotCreate?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<SlotMutationQuerySlotCreateArgs, 'opportunity_id'>>;
  slotDelete?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<SlotMutationQuerySlotDeleteArgs, 'id'>>;
  slotMoveToActive?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<SlotMutationQuerySlotMoveToActiveArgs, 'id'>>;
  slotMoveToInactive?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<SlotMutationQuerySlotMoveToInactiveArgs, 'id'>>;
  slotUpdate?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<SlotMutationQuerySlotUpdateArgs, 'id' | 'slot'>>;
  updateSlot?: Resolver<Maybe<ResolversTypes['Slot']>, ParentType, ContextType, RequireFields<SlotMutationQueryUpdateSlotArgs, 'id' | 'slot'>>;
};

export type SlotPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SlotPermissionType'] = ResolversParentTypes['SlotPermissionType']> = {
  can_delete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_move_to_inactive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpecificInfoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpecificInfoType'] = ResolversParentTypes['SpecificInfoType']> = {
  ask_gip_question?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  computer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ef_test_required?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expected_work_schedule?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  salary?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  salary_currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  salary_periodicity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  saturday_work?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  saturday_work_schedule?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StandardsSurveyResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandardsSurvey'] = ResolversParentTypes['StandardsSurvey']> = {
  aiesec_contribution?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  experience_end_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  experience_start_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  opportunity?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  organisation_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  standards?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConstantMap']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StandardsSurveyMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandardsSurveyMutationQuery'] = ResolversParentTypes['StandardsSurveyMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  updatePartnerStandardsSurvey?: Resolver<Maybe<ResolversTypes['StandardsSurvey']>, ParentType, ContextType, RequireFields<StandardsSurveyMutationQueryUpdatePartnerStandardsSurveyArgs, 'partner_standard_survey_id' | 'responses'>>;
  updateStandardsSurvey?: Resolver<Maybe<ResolversTypes['StandardsSurvey']>, ParentType, ContextType, RequireFields<StandardsSurveyMutationQueryUpdateStandardsSurveyArgs, 'response' | 'standard_survey_id'>>;
};

export type StandardsSurveyQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandardsSurveyQuery'] = ResolversParentTypes['StandardsSurveyQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  partnerStandardsSurvey?: Resolver<Maybe<ResolversTypes['StandardsSurvey']>, ParentType, ContextType, RequireFields<StandardsSurveyQueryPartnerStandardsSurveyArgs, 'partner_standard_survey_id'>>;
  standardsSurvey?: Resolver<Maybe<ResolversTypes['StandardsSurvey']>, ParentType, ContextType, RequireFields<StandardsSurveyQueryStandardsSurveyArgs, 'standard_survey_id'>>;
};

export type SubProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubProduct'] = ResolversParentTypes['SubProduct']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  sub_product_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubProducts'] = ResolversParentTypes['SubProducts']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  subProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubProduct']>>>, ParentType, ContextType, Partial<SubProductsSubProductsArgs>>;
};

export type SuggestedCountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuggestedCountry'] = ResolversParentTypes['SuggestedCountry']> = {
  country?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mc?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  programme?: Resolver<Maybe<ResolversTypes['Programme']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuggestedCountryMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuggestedCountryMutationQuery'] = ResolversParentTypes['SuggestedCountryMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createSuggestedCountry?: Resolver<Maybe<ResolversTypes['SuggestedCountry']>, ParentType, ContextType, Partial<SuggestedCountryMutationQueryCreateSuggestedCountryArgs>>;
  deleteSuggestedCountry?: Resolver<Maybe<ResolversTypes['SuggestedCountry']>, ParentType, ContextType, RequireFields<SuggestedCountryMutationQueryDeleteSuggestedCountryArgs, 'id'>>;
  updateSuggestedCountry?: Resolver<Maybe<ResolversTypes['SuggestedCountry']>, ParentType, ContextType, RequireFields<SuggestedCountryMutationQueryUpdateSuggestedCountryArgs, 'id'>>;
};

export type SuggestedCountryQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuggestedCountryQuery'] = ResolversParentTypes['SuggestedCountryQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allSuggestedCountries?: Resolver<Maybe<Array<Maybe<ResolversTypes['SuggestedCountry']>>>, ParentType, ContextType, Partial<SuggestedCountryQueryAllSuggestedCountriesArgs>>;
  getSuggestedCountry?: Resolver<Maybe<ResolversTypes['SuggestedCountry']>, ParentType, ContextType, RequireFields<SuggestedCountryQueryGetSuggestedCountryArgs, 'id'>>;
  suggestedCountries?: Resolver<Maybe<Array<Maybe<ResolversTypes['SuggestedCountry']>>>, ParentType, ContextType, Partial<SuggestedCountryQuerySuggestedCountriesArgs>>;
  suggestedCountry?: Resolver<Maybe<ResolversTypes['SuggestedCountry']>, ParentType, ContextType, RequireFields<SuggestedCountryQuerySuggestedCountryArgs, 'id'>>;
};

export type SurveyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Survey'] = ResolversParentTypes['Survey']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  survey_questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyQuestion']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyDetails'] = ResolversParentTypes['SurveyDetails']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  opportunity_application?: Resolver<Maybe<ResolversTypes['OpportunityApplication']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyQuestion']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyMutationQuery'] = ResolversParentTypes['SurveyMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  surveyAnswer?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<SurveyMutationQuerySurveyAnswerArgs, 'responses' | 'survey_uuid'>>;
};

export type SurveyQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyQuery'] = ResolversParentTypes['SurveyQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  npsSurvey?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType>;
  surveyDetails?: Resolver<Maybe<ResolversTypes['SurveyDetails']>, ParentType, ContextType, RequireFields<SurveyQuerySurveyDetailsArgs, 'survey_uuid'>>;
};

export type SurveyQuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyQuestion'] = ResolversParentTypes['SurveyQuestion']> = {
  additional_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  is_mandatory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nps_answer?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  question_group?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  question_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  question_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sanitize_meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  subquestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyQuestion']>>>, ParentType, ContextType>;
  survey_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyResponse'] = ResolversParentTypes['SurveyResponse']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyQuestion']>>>, ParentType, ContextType>;
  survey_uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagList'] = ResolversParentTypes['TagList']> = {
  creator?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagListAutocompleteQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagListAutocompleteQuery'] = ResolversParentTypes['TagListAutocompleteQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  tagListAutocomplete?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType, Partial<TagListAutocompleteQueryTagListAutocompleteArgs>>;
};

export type TagListConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagListConnection'] = ResolversParentTypes['TagListConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagListEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagListEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagListEdge'] = ResolversParentTypes['TagListEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TagList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagListMutationQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagListMutationQueryType'] = ResolversParentTypes['TagListMutationQueryType']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createTagList?: Resolver<Maybe<ResolversTypes['TagList']>, ParentType, ContextType, Partial<TagListMutationQueryTypeCreateTagListArgs>>;
  tagListUpdate?: Resolver<Maybe<ResolversTypes['TagList']>, ParentType, ContextType, Partial<TagListMutationQueryTypeTagListUpdateArgs>>;
};

export type TagListQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagListQuery'] = ResolversParentTypes['TagListQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  allTagList?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType>;
  getTagList?: Resolver<Maybe<ResolversTypes['TagList']>, ParentType, ContextType, Partial<TagListQueryGetTagListArgs>>;
  tagList?: Resolver<Maybe<ResolversTypes['TagList']>, ParentType, ContextType, Partial<TagListQueryTagListArgs>>;
  tagLists?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType>;
};

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  cover_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  creator_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  deleted_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes['Office']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['TeamPermissionType']>, ParentType, ContextType>;
  positions?: Resolver<Maybe<ResolversTypes['PositionConnection']>, ParentType, ContextType, Partial<TeamPositionsArgs>>;
  profile_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  term_date_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamConnection'] = ResolversParentTypes['TeamConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Team']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamEdge'] = ResolversParentTypes['TeamEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamMutationQuery'] = ResolversParentTypes['TeamMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<TeamMutationQueryCreateTeamArgs, 'office_id' | 'term_id'>>;
  deleteTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<TeamMutationQueryDeleteTeamArgs, 'id'>>;
  updateTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<TeamMutationQueryUpdateTeamArgs, 'id'>>;
};

export type TeamPermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamPermissionType'] = ResolversParentTypes['TeamPermissionType']> = {
  can_delete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_read?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  can_update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  manage_positions?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamQuery'] = ResolversParentTypes['TeamQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, Partial<TeamQueryGetTeamArgs>>;
};

export type TermResolvers<ContextType = any, ParentType extends ResolversParentTypes['Term'] = ResolversParentTypes['Term']> = {
  end_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  short_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TermDateResolvers<ContextType = any, ParentType extends ResolversParentTypes['TermDate'] = ResolversParentTypes['TermDate']> = {
  current_and_invited_members?: Resolver<Maybe<ResolversTypes['PersonConnection']>, ParentType, ContextType, Partial<TermDateCurrent_And_Invited_MembersArgs>>;
  end_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Invitation']>>>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['TermDatePermissionType']>, ParentType, ContextType>;
  short_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  teams?: Resolver<Maybe<ResolversTypes['TeamConnection']>, ParentType, ContextType, Partial<TermDateTeamsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TermDatePermissionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TermDatePermissionType'] = ResolversParentTypes['TermDatePermissionType']> = {
  create_team?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TermMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TermMutationQuery'] = ResolversParentTypes['TermMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createTerm?: Resolver<Maybe<ResolversTypes['Term']>, ParentType, ContextType, Partial<TermMutationQueryCreateTermArgs>>;
  deleteTerm?: Resolver<Maybe<ResolversTypes['Term']>, ParentType, ContextType, RequireFields<TermMutationQueryDeleteTermArgs, 'id'>>;
  invitePersonTerm?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<TermMutationQueryInvitePersonTermArgs, 'office_id' | 'term_id'>>;
};

export type TermQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TermQuery'] = ResolversParentTypes['TermQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  termForCommitteeGet?: Resolver<Maybe<Array<Maybe<ResolversTypes['Term']>>>, ParentType, ContextType>;
};

export type TestimonialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Testimonial'] = ResolversParentTypes['Testimonial']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  cover_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<TestimonialCover_PhotoArgs>>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<TestimonialProfile_PhotoArgs>>;
  testimonial_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestimonialQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TestimonialQuery'] = ResolversParentTypes['TestimonialQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getTestimonial?: Resolver<Maybe<ResolversTypes['Testimonial']>, ParentType, ContextType, Partial<TestimonialQueryGetTestimonialArgs>>;
  testimonialList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Testimonial']>>>, ParentType, ContextType, Partial<TestimonialQueryTestimonialListArgs>>;
};

export type TimelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['Timeline'] = ResolversParentTypes['Timeline']> = {
  creator?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  display_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  object_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimelineMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimelineMutationQuery'] = ResolversParentTypes['TimelineMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  createTimeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType, Partial<TimelineMutationQueryCreateTimelineArgs>>;
  deleteTimeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType, RequireFields<TimelineMutationQueryDeleteTimelineArgs, 'id'>>;
  updateTimeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType, RequireFields<TimelineMutationQueryUpdateTimelineArgs, 'id'>>;
};

export type TimelineQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimelineQuery'] = ResolversParentTypes['TimelineQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getTimeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType, Partial<TimelineQueryGetTimelineArgs>>;
};

export type TmDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TmDetailType'] = ResolversParentTypes['TmDetailType']> = {
  department_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key_deliverables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  open_to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recommended_prior_experiences?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tm_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  assignee?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<ResolversTypes['TodoType']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['CommentConnection']>, ParentType, ContextType, Partial<TodoCommentsArgs>>;
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  detail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  goal_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['TodoMetaType']>, ParentType, ContextType>;
  metric?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  metric_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  tag_lists?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagList']>>>, ParentType, ContextType>;
  todo_type?: Resolver<Maybe<ResolversTypes['TodoType']>, ParentType, ContextType>;
  todoable?: Resolver<Maybe<ResolversTypes['TodoableUnion']>, ParentType, ContextType>;
  todoable_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  todoable_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoConnection'] = ResolversParentTypes['TodoConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['TodoEdge']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Todo']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  total_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoEdge'] = ResolversParentTypes['TodoEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoList'] = ResolversParentTypes['TodoList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Todo']>>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Facets']>>>, ParentType, ContextType>;
  paging?: Resolver<Maybe<ResolversTypes['Paging']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoMetaTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoMetaType'] = ResolversParentTypes['TodoMetaType']> = {
  completed_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  completed_by?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoMutationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoMutationQuery'] = ResolversParentTypes['TodoMutationQuery']> = {
  __resolveType: TypeResolveFn<'MutationType', ParentType, ContextType>;
  addTodoToGoal?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<TodoMutationQueryAddTodoToGoalArgs, 'goal_id'>>;
  completeTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<TodoMutationQueryCompleteTodoArgs, 'id'>>;
  createGoal?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, Partial<TodoMutationQueryCreateGoalArgs>>;
  createTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, Partial<TodoMutationQueryCreateTodoArgs>>;
  deleteTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<TodoMutationQueryDeleteTodoArgs, 'id'>>;
  inCompleteTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<TodoMutationQueryInCompleteTodoArgs, 'id'>>;
  updateTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<TodoMutationQueryUpdateTodoArgs, 'id'>>;
};

export type TodoQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoQuery'] = ResolversParentTypes['TodoQuery']> = {
  __resolveType: TypeResolveFn<'QueryType', ParentType, ContextType>;
  getTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, Partial<TodoQueryGetTodoArgs>>;
  todos?: Resolver<Maybe<ResolversTypes['TodoList']>, ParentType, ContextType, Partial<TodoQueryTodosArgs>>;
  todosList?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<TodoQueryTodosListArgs, 'id' | 'type'>>;
};

export type TodoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoType'] = ResolversParentTypes['TodoType']> = {
  todos?: Resolver<Maybe<ResolversTypes['TodoConnection']>, ParentType, ContextType, RequireFields<TodoTypeTodosArgs, 'todo_type'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoableUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoableUnion'] = ResolversParentTypes['TodoableUnion']> = {
  __resolveType: TypeResolveFn<'Accommodation' | 'Event' | 'Office' | 'Opportunity' | 'OpportunityApplication' | 'Organisation' | 'Person', ParentType, ContextType>;
};

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  auth_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  opportunity_application_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  psp_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refusal_reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactionable_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transactionable_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type WeeklyActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeeklyActivity'] = ResolversParentTypes['WeeklyActivity']> = {
  activity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_templated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['payment'] = ResolversParentTypes['payment']> = {
  action_for?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creator_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  opportunity_application_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  person_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Accommodation?: AccommodationResolvers<ContextType>;
  AccommodationAssignment?: AccommodationAssignmentResolvers<ContextType>;
  AccommodationAssignmentConnection?: AccommodationAssignmentConnectionResolvers<ContextType>;
  AccommodationAssignmentEdge?: AccommodationAssignmentEdgeResolvers<ContextType>;
  AccommodationAssignmentList?: AccommodationAssignmentListResolvers<ContextType>;
  AccommodationAssignmentMutationQuery?: AccommodationAssignmentMutationQueryResolvers<ContextType>;
  AccommodationAssignmentQuery?: AccommodationAssignmentQueryResolvers<ContextType>;
  AccommodationAvailability?: AccommodationAvailabilityResolvers<ContextType>;
  AccommodationAvailabilityConnection?: AccommodationAvailabilityConnectionResolvers<ContextType>;
  AccommodationAvailabilityEdge?: AccommodationAvailabilityEdgeResolvers<ContextType>;
  AccommodationAvailabilityMutationQuery?: AccommodationAvailabilityMutationQueryResolvers<ContextType>;
  AccommodationList?: AccommodationListResolvers<ContextType>;
  AccommodationMutationQuery?: AccommodationMutationQueryResolvers<ContextType>;
  AccommodationQuery?: AccommodationQueryResolvers<ContextType>;
  AddressInfo?: AddressInfoResolvers<ContextType>;
  ApplicationMetaType?: ApplicationMetaTypeResolvers<ContextType>;
  ApplicationQuestionnaire?: ApplicationQuestionnaireResolvers<ContextType>;
  ApplicationQuestionnaireConnection?: ApplicationQuestionnaireConnectionResolvers<ContextType>;
  ApplicationQuestionnaireEdge?: ApplicationQuestionnaireEdgeResolvers<ContextType>;
  ApplicationScorecard?: ApplicationScorecardResolvers<ContextType>;
  ApplicationScorecardAttributeType?: ApplicationScorecardAttributeTypeResolvers<ContextType>;
  Attachment?: AttachmentResolvers<ContextType>;
  AttachmentMutationQuery?: AttachmentMutationQueryResolvers<ContextType>;
  AttachmentQuery?: AttachmentQueryResolvers<ContextType>;
  Attendee?: AttendeeResolvers<ContextType>;
  Branch?: BranchResolvers<ContextType>;
  BranchConnection?: BranchConnectionResolvers<ContextType>;
  BranchEdge?: BranchEdgeResolvers<ContextType>;
  BranchEmployee?: BranchEmployeeResolvers<ContextType>;
  BranchEmployeeConnection?: BranchEmployeeConnectionResolvers<ContextType>;
  BranchEmployeeEdge?: BranchEmployeeEdgeResolvers<ContextType>;
  BranchEmployeeMutationQuery?: BranchEmployeeMutationQueryResolvers<ContextType>;
  BranchEmployeeQuery?: BranchEmployeeQueryResolvers<ContextType>;
  BranchMutationQuery?: BranchMutationQueryResolvers<ContextType>;
  BranchPermissionType?: BranchPermissionTypeResolvers<ContextType>;
  BranchQuery?: BranchQueryResolvers<ContextType>;
  CV?: CvResolvers<ContextType>;
  Campaign?: CampaignResolvers<ContextType>;
  CampaignMutationQuery?: CampaignMutationQueryResolvers<ContextType>;
  CampaignQuery?: CampaignQueryResolvers<ContextType>;
  ChecklistResponse?: ChecklistResponseResolvers<ContextType>;
  City?: CityResolvers<ContextType>;
  CityLc?: CityLcResolvers<ContextType>;
  CityLcMutationQuery?: CityLcMutationQueryResolvers<ContextType>;
  CityLcQuery?: CityLcQueryResolvers<ContextType>;
  CityList?: CityListResolvers<ContextType>;
  CityMutationQuery?: CityMutationQueryResolvers<ContextType>;
  CityQuery?: CityQueryResolvers<ContextType>;
  ClientData?: ClientDataResolvers<ContextType>;
  ClientDataConnection?: ClientDataConnectionResolvers<ContextType>;
  ClientDataEdge?: ClientDataEdgeResolvers<ContextType>;
  ClientDataMutationQuery?: ClientDataMutationQueryResolvers<ContextType>;
  ClientDataQuery?: ClientDataQueryResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentConnection?: CommentConnectionResolvers<ContextType>;
  CommentEdge?: CommentEdgeResolvers<ContextType>;
  CommentMetaType?: CommentMetaTypeResolvers<ContextType>;
  CommentMutationQuery?: CommentMutationQueryResolvers<ContextType>;
  CommentQuery?: CommentQueryResolvers<ContextType>;
  CommitteeAggregation?: CommitteeAggregationResolvers<ContextType>;
  CommitteeAggregationConnection?: CommitteeAggregationConnectionResolvers<ContextType>;
  CommitteeAggregationEdge?: CommitteeAggregationEdgeResolvers<ContextType>;
  CommitteeDepartmentMutationQuery?: CommitteeDepartmentMutationQueryResolvers<ContextType>;
  CommitteeDepartmentType?: CommitteeDepartmentTypeResolvers<ContextType>;
  CommitteeDepartmentTypeConnection?: CommitteeDepartmentTypeConnectionResolvers<ContextType>;
  CommitteeDepartmentTypeEdge?: CommitteeDepartmentTypeEdgeResolvers<ContextType>;
  CommitteeMutationQuery?: CommitteeMutationQueryResolvers<ContextType>;
  CommitteePayment?: CommitteePaymentResolvers<ContextType>;
  CommitteeQuery?: CommitteeQueryResolvers<ContextType>;
  CommitteeTarget?: CommitteeTargetResolvers<ContextType>;
  CommitteeTargetConnection?: CommitteeTargetConnectionResolvers<ContextType>;
  CommitteeTargetEdge?: CommitteeTargetEdgeResolvers<ContextType>;
  CommitteeTargetMutationQuery?: CommitteeTargetMutationQueryResolvers<ContextType>;
  CommitteeTermType?: CommitteeTermTypeResolvers<ContextType>;
  CompanyList?: CompanyListResolvers<ContextType>;
  CompanyMetaType?: CompanyMetaTypeResolvers<ContextType>;
  Constant?: ConstantResolvers<ContextType>;
  ConstantMap?: ConstantMapResolvers<ContextType>;
  Constants?: ConstantsResolvers<ContextType>;
  ContactInfo?: ContactInfoResolvers<ContextType>;
  ContactPeopleType?: ContactPeopleTypeResolvers<ContextType>;
  Contract?: ContractResolvers<ContextType>;
  Conversation?: ConversationResolvers<ContextType>;
  ConversationConnection?: ConversationConnectionResolvers<ContextType>;
  ConversationEdge?: ConversationEdgeResolvers<ContextType>;
  ConversationParticipant?: ConversationParticipantResolvers<ContextType>;
  ConversationParticipantPerson?: ConversationParticipantPersonResolvers<ContextType>;
  ConversationQuery?: ConversationQueryResolvers<ContextType>;
  CounterData?: CounterDataResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  CurrentPerson?: CurrentPersonResolvers<ContextType>;
  CurrentPersonMutationQuery?: CurrentPersonMutationQueryResolvers<ContextType>;
  CurrentPersonQuery?: CurrentPersonQueryResolvers<ContextType>;
  CustomStatusType?: CustomStatusTypeResolvers<ContextType>;
  CustomStatusTypeConnection?: CustomStatusTypeConnectionResolvers<ContextType>;
  CustomStatusTypeEdge?: CustomStatusTypeEdgeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  EmployeeDetailsType?: EmployeeDetailsTypeResolvers<ContextType>;
  EmployeeLead?: EmployeeLeadResolvers<ContextType>;
  EmployeeLeadList?: EmployeeLeadListResolvers<ContextType>;
  EmployeeLeadMutationQuery?: EmployeeLeadMutationQueryResolvers<ContextType>;
  EmployeeLeadPermissionType?: EmployeeLeadPermissionTypeResolvers<ContextType>;
  EmployeeLeadQuery?: EmployeeLeadQueryResolvers<ContextType>;
  Engagement?: EngagementResolvers<ContextType>;
  EngagementConnection?: EngagementConnectionResolvers<ContextType>;
  EngagementEdge?: EngagementEdgeResolvers<ContextType>;
  EngagementMutationQuery?: EngagementMutationQueryResolvers<ContextType>;
  EngagementPermissionType?: EngagementPermissionTypeResolvers<ContextType>;
  EntityGoal?: EntityGoalResolvers<ContextType>;
  EntityPlan?: EntityPlanResolvers<ContextType>;
  EntityPlanQuery?: EntityPlanQueryResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventList?: EventListResolvers<ContextType>;
  EventMutationQueryType?: EventMutationQueryTypeResolvers<ContextType>;
  EventPermissionType?: EventPermissionTypeResolvers<ContextType>;
  EventQuery?: EventQueryResolvers<ContextType>;
  EventRegistration?: EventRegistrationResolvers<ContextType>;
  EventRegistrationList?: EventRegistrationListResolvers<ContextType>;
  EventRegistrationMutationQueryType?: EventRegistrationMutationQueryTypeResolvers<ContextType>;
  EventRegistrationPermissionType?: EventRegistrationPermissionTypeResolvers<ContextType>;
  EventRegistrationQuery?: EventRegistrationQueryResolvers<ContextType>;
  EventSpeaker?: EventSpeakerResolvers<ContextType>;
  EventSpeakerConnection?: EventSpeakerConnectionResolvers<ContextType>;
  EventSpeakerEdge?: EventSpeakerEdgeResolvers<ContextType>;
  EventSpeakerMutationQueryType?: EventSpeakerMutationQueryTypeResolvers<ContextType>;
  EventTicket?: EventTicketResolvers<ContextType>;
  EventTicketConnection?: EventTicketConnectionResolvers<ContextType>;
  EventTicketEdge?: EventTicketEdgeResolvers<ContextType>;
  EventTicketMutationQueryType?: EventTicketMutationQueryTypeResolvers<ContextType>;
  ExpaSettings?: ExpaSettingsResolvers<ContextType>;
  Facets?: FacetsResolvers<ContextType>;
  Favourite?: FavouriteResolvers<ContextType>;
  Feature?: FeatureResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  FileImportMutationQuery?: FileImportMutationQueryResolvers<ContextType>;
  FindLcQuery?: FindLcQueryResolvers<ContextType>;
  GenerateEmail?: GenerateEmailResolvers<ContextType>;
  GlobalPartnerRequestMutationQueryType?: GlobalPartnerRequestMutationQueryTypeResolvers<ContextType>;
  GlobalPartnerRequestQuery?: GlobalPartnerRequestQueryResolvers<ContextType>;
  GlobalPartnerRequestType?: GlobalPartnerRequestTypeResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  ImageType?: ImageTypeResolvers<ContextType>;
  InboundEmailType?: InboundEmailTypeResolvers<ContextType>;
  InterviewDetailsType?: InterviewDetailsTypeResolvers<ContextType>;
  InterviewSlot?: InterviewSlotResolvers<ContextType>;
  Invitation?: InvitationResolvers<ContextType>;
  InvoiceMutationQuery?: InvoiceMutationQueryResolvers<ContextType>;
  InvoiceQuery?: InvoiceQueryResolvers<ContextType>;
  InvoiceType?: InvoiceTypeResolvers<ContextType>;
  InvoiceTypeConnection?: InvoiceTypeConnectionResolvers<ContextType>;
  InvoiceTypeEdge?: InvoiceTypeEdgeResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  LcAlignment?: LcAlignmentResolvers<ContextType>;
  LcAlignmentsMutationQueryType?: LcAlignmentsMutationQueryTypeResolvers<ContextType>;
  LcAlignmentsQueryType?: LcAlignmentsQueryTypeResolvers<ContextType>;
  LdaQuery?: LdaQueryResolvers<ContextType>;
  LdaResponse?: LdaResponseResolvers<ContextType>;
  LdaResponseMutationQuery?: LdaResponseMutationQueryResolvers<ContextType>;
  LdmQuery?: LdmQueryResolvers<ContextType>;
  LdmResponse?: LdmResponseResolvers<ContextType>;
  LdmResponseMutationQueryType?: LdmResponseMutationQueryTypeResolvers<ContextType>;
  LegalInfoType?: LegalInfoTypeResolvers<ContextType>;
  List?: ListResolvers<ContextType>;
  LogisticInfoType?: LogisticInfoTypeResolvers<ContextType>;
  MailTemplate?: MailTemplateResolvers<ContextType>;
  MailTemplateDeliverabilityReport?: MailTemplateDeliverabilityReportResolvers<ContextType>;
  MailTemplateMutationQueryType?: MailTemplateMutationQueryTypeResolvers<ContextType>;
  MailTemplateQueryType?: MailTemplateQueryTypeResolvers<ContextType>;
  Manager?: ManagerResolvers<ContextType>;
  McFeature?: McFeatureResolvers<ContextType>;
  McFeatureQuery?: McFeatureQueryResolvers<ContextType>;
  MemberLead?: MemberLeadResolvers<ContextType>;
  MemberLeadList?: MemberLeadListResolvers<ContextType>;
  MemberLeadMutationQuery?: MemberLeadMutationQueryResolvers<ContextType>;
  MemberLeadPermissionType?: MemberLeadPermissionTypeResolvers<ContextType>;
  MemberLeadQuery?: MemberLeadQueryResolvers<ContextType>;
  MemberPosition?: MemberPositionResolvers<ContextType>;
  MemberPositionConnection?: MemberPositionConnectionResolvers<ContextType>;
  MemberPositionEdge?: MemberPositionEdgeResolvers<ContextType>;
  MemberPositionList?: MemberPositionListResolvers<ContextType>;
  MemberPositionMutationQuery?: MemberPositionMutationQueryResolvers<ContextType>;
  MemberPositionPermission?: MemberPositionPermissionResolvers<ContextType>;
  MemberPositionQuery?: MemberPositionQueryResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessageConnection?: MessageConnectionResolvers<ContextType>;
  MessageEdge?: MessageEdgeResolvers<ContextType>;
  MutationType?: MutationTypeResolvers<ContextType>;
  NationalPartnerMutationQuery?: NationalPartnerMutationQueryResolvers<ContextType>;
  NationalPartnerQuery?: NationalPartnerQueryResolvers<ContextType>;
  NationalPartnerType?: NationalPartnerTypeResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  NotificationList?: NotificationListResolvers<ContextType>;
  NotificationMutationQuery?: NotificationMutationQueryResolvers<ContextType>;
  NotificationsQuery?: NotificationsQueryResolvers<ContextType>;
  NpsResponseType?: NpsResponseTypeResolvers<ContextType>;
  Office?: OfficeResolvers<ContextType>;
  OfficeBasic?: OfficeBasicResolvers<ContextType>;
  OfficeBasicDetails?: OfficeBasicDetailsResolvers<ContextType>;
  OfficeBasicList?: OfficeBasicListResolvers<ContextType>;
  OfficeConnection?: OfficeConnectionResolvers<ContextType>;
  OfficeEdge?: OfficeEdgeResolvers<ContextType>;
  OfficeId?: OfficeIdResolvers<ContextType>;
  OfficeList?: OfficeListResolvers<ContextType>;
  OfficeMcAlignment?: OfficeMcAlignmentResolvers<ContextType>;
  OfficePermissionType?: OfficePermissionTypeResolvers<ContextType>;
  OfflineAssessment?: OfflineAssessmentResolvers<ContextType>;
  Opportunity?: OpportunityResolvers<ContextType>;
  OpportunityApplication?: OpportunityApplicationResolvers<ContextType>;
  OpportunityApplicationConnection?: OpportunityApplicationConnectionResolvers<ContextType>;
  OpportunityApplicationEdge?: OpportunityApplicationEdgeResolvers<ContextType>;
  OpportunityApplicationList?: OpportunityApplicationListResolvers<ContextType>;
  OpportunityApplicationMutationQuery?: OpportunityApplicationMutationQueryResolvers<ContextType>;
  OpportunityApplicationPermissionType?: OpportunityApplicationPermissionTypeResolvers<ContextType>;
  OpportunityApplicationQuery?: OpportunityApplicationQueryResolvers<ContextType>;
  OpportunityConnection?: OpportunityConnectionResolvers<ContextType>;
  OpportunityDurationType?: OpportunityDurationTypeResolvers<ContextType>;
  OpportunityDurationTypeQuery?: OpportunityDurationTypeQueryResolvers<ContextType>;
  OpportunityEdge?: OpportunityEdgeResolvers<ContextType>;
  OpportunityList?: OpportunityListResolvers<ContextType>;
  OpportunityMetaType?: OpportunityMetaTypeResolvers<ContextType>;
  OpportunityMutationQuery?: OpportunityMutationQueryResolvers<ContextType>;
  OpportunityPermissionType?: OpportunityPermissionTypeResolvers<ContextType>;
  OpportunityPotentialCandidateQuery?: OpportunityPotentialCandidateQueryResolvers<ContextType>;
  OpportunityPotentialCandidateQueryType?: OpportunityPotentialCandidateQueryTypeResolvers<ContextType>;
  OpportunityPotentialCandidateType?: OpportunityPotentialCandidateTypeResolvers<ContextType>;
  OpportunityQuery?: OpportunityQueryResolvers<ContextType>;
  OpportunityQuestion?: OpportunityQuestionResolvers<ContextType>;
  OpportunityQuestionConnection?: OpportunityQuestionConnectionResolvers<ContextType>;
  OpportunityQuestionEdge?: OpportunityQuestionEdgeResolvers<ContextType>;
  OpportunityTransparentFeeDetailsType?: OpportunityTransparentFeeDetailsTypeResolvers<ContextType>;
  Organisation?: OrganisationResolvers<ContextType>;
  OrganisationMutationQuery?: OrganisationMutationQueryResolvers<ContextType>;
  OrganisationPermissionType?: OrganisationPermissionTypeResolvers<ContextType>;
  OrganisationQuery?: OrganisationQueryResolvers<ContextType>;
  OrganizationDevelopment?: OrganizationDevelopmentResolvers<ContextType>;
  OrganizationDevelopmentMutationQuery?: OrganizationDevelopmentMutationQueryResolvers<ContextType>;
  OrganizationDevelopmentQuery?: OrganizationDevelopmentQueryResolvers<ContextType>;
  OrganizationDevelopmentTarget?: OrganizationDevelopmentTargetResolvers<ContextType>;
  PageComponentDraftType?: PageComponentDraftTypeResolvers<ContextType>;
  PageComponentMutationQuery?: PageComponentMutationQueryResolvers<ContextType>;
  PageComponentType?: PageComponentTypeResolvers<ContextType>;
  PageComponentTypeConnection?: PageComponentTypeConnectionResolvers<ContextType>;
  PageComponentTypeEdge?: PageComponentTypeEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PageList?: PageListResolvers<ContextType>;
  PageMutationQuery?: PageMutationQueryResolvers<ContextType>;
  PagePermissionType?: PagePermissionTypeResolvers<ContextType>;
  PageQuery?: PageQueryResolvers<ContextType>;
  PageType?: PageTypeResolvers<ContextType>;
  Paging?: PagingResolvers<ContextType>;
  PartnerSignup?: PartnerSignupResolvers<ContextType>;
  PartnerSignupMutationQuery?: PartnerSignupMutationQueryResolvers<ContextType>;
  PeopleAutocompleteQuery?: PeopleAutocompleteQueryResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonApplicationUnion?: PersonApplicationUnionResolvers<ContextType>;
  PersonConnection?: PersonConnectionResolvers<ContextType>;
  PersonEdge?: PersonEdgeResolvers<ContextType>;
  PersonList?: PersonListResolvers<ContextType>;
  PersonMetaType?: PersonMetaTypeResolvers<ContextType>;
  PersonMutationQuery?: PersonMutationQueryResolvers<ContextType>;
  PersonPermissionType?: PersonPermissionTypeResolvers<ContextType>;
  PersonProfile?: PersonProfileResolvers<ContextType>;
  PersonQuery?: PersonQueryResolvers<ContextType>;
  Picture?: PictureResolvers<ContextType>;
  Plan?: PlanResolvers<ContextType>;
  PlanMutationQuery?: PlanMutationQueryResolvers<ContextType>;
  PlanQuery?: PlanQueryResolvers<ContextType>;
  PlatformNpsResponseMutationQueryType?: PlatformNpsResponseMutationQueryTypeResolvers<ContextType>;
  PlatformNpsResponseQueryType?: PlatformNpsResponseQueryTypeResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  PositionConnection?: PositionConnectionResolvers<ContextType>;
  PositionEdge?: PositionEdgeResolvers<ContextType>;
  PositionMutationQuery?: PositionMutationQueryResolvers<ContextType>;
  PositionQuery?: PositionQueryResolvers<ContextType>;
  PreviousExperience?: PreviousExperienceResolvers<ContextType>;
  ProfessionalExperience?: ProfessionalExperienceResolvers<ContextType>;
  ProfileCompleteness?: ProfileCompletenessResolvers<ContextType>;
  Programme?: ProgrammeResolvers<ContextType>;
  ProgrammeFee?: ProgrammeFeeResolvers<ContextType>;
  ProgrammeFeeBasic?: ProgrammeFeeBasicResolvers<ContextType>;
  ProgrammeFeeBasicConnection?: ProgrammeFeeBasicConnectionResolvers<ContextType>;
  ProgrammeFeeBasicEdge?: ProgrammeFeeBasicEdgeResolvers<ContextType>;
  ProgrammeFeeConnection?: ProgrammeFeeConnectionResolvers<ContextType>;
  ProgrammeFeeEdge?: ProgrammeFeeEdgeResolvers<ContextType>;
  ProgrammeFeeMutationQuery?: ProgrammeFeeMutationQueryResolvers<ContextType>;
  ProgrammeFeeQueryType?: ProgrammeFeeQueryTypeResolvers<ContextType>;
  ProgrammeId?: ProgrammeIdResolvers<ContextType>;
  ProgrammeManager?: ProgrammeManagerResolvers<ContextType>;
  ProgrammeManagerMutationQuery?: ProgrammeManagerMutationQueryResolvers<ContextType>;
  QueryType?: QueryTypeResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  Questionnaire?: QuestionnaireResolvers<ContextType>;
  QuestionnaireConnection?: QuestionnaireConnectionResolvers<ContextType>;
  QuestionnaireEdge?: QuestionnaireEdgeResolvers<ContextType>;
  QuestionnaireMutationQuery?: QuestionnaireMutationQueryResolvers<ContextType>;
  QuestionnairePermissionType?: QuestionnairePermissionTypeResolvers<ContextType>;
  RoleInfoType?: RoleInfoTypeResolvers<ContextType>;
  SavedFilter?: SavedFilterResolvers<ContextType>;
  SavedFilterConnection?: SavedFilterConnectionResolvers<ContextType>;
  SavedFilterEdge?: SavedFilterEdgeResolvers<ContextType>;
  Scorecard?: ScorecardResolvers<ContextType>;
  ScorecardAttributePermissionType?: ScorecardAttributePermissionTypeResolvers<ContextType>;
  ScorecardAttributeType?: ScorecardAttributeTypeResolvers<ContextType>;
  ScorecardConnection?: ScorecardConnectionResolvers<ContextType>;
  ScorecardEdge?: ScorecardEdgeResolvers<ContextType>;
  ScorecardPermissionType?: ScorecardPermissionTypeResolvers<ContextType>;
  ScorecardQuery?: ScorecardQueryResolvers<ContextType>;
  Sdg?: SdgResolvers<ContextType>;
  SdgTarget?: SdgTargetResolvers<ContextType>;
  SelectionProcess?: SelectionProcessResolvers<ContextType>;
  SelectionProcessConnection?: SelectionProcessConnectionResolvers<ContextType>;
  SelectionProcessEdge?: SelectionProcessEdgeResolvers<ContextType>;
  Slot?: SlotResolvers<ContextType>;
  SlotConnection?: SlotConnectionResolvers<ContextType>;
  SlotEdge?: SlotEdgeResolvers<ContextType>;
  SlotMutationQuery?: SlotMutationQueryResolvers<ContextType>;
  SlotPermissionType?: SlotPermissionTypeResolvers<ContextType>;
  SpecificInfoType?: SpecificInfoTypeResolvers<ContextType>;
  StandardsSurvey?: StandardsSurveyResolvers<ContextType>;
  StandardsSurveyMutationQuery?: StandardsSurveyMutationQueryResolvers<ContextType>;
  StandardsSurveyQuery?: StandardsSurveyQueryResolvers<ContextType>;
  SubProduct?: SubProductResolvers<ContextType>;
  SubProducts?: SubProductsResolvers<ContextType>;
  SuggestedCountry?: SuggestedCountryResolvers<ContextType>;
  SuggestedCountryMutationQuery?: SuggestedCountryMutationQueryResolvers<ContextType>;
  SuggestedCountryQuery?: SuggestedCountryQueryResolvers<ContextType>;
  Survey?: SurveyResolvers<ContextType>;
  SurveyDetails?: SurveyDetailsResolvers<ContextType>;
  SurveyMutationQuery?: SurveyMutationQueryResolvers<ContextType>;
  SurveyQuery?: SurveyQueryResolvers<ContextType>;
  SurveyQuestion?: SurveyQuestionResolvers<ContextType>;
  SurveyResponse?: SurveyResponseResolvers<ContextType>;
  TagList?: TagListResolvers<ContextType>;
  TagListAutocompleteQuery?: TagListAutocompleteQueryResolvers<ContextType>;
  TagListConnection?: TagListConnectionResolvers<ContextType>;
  TagListEdge?: TagListEdgeResolvers<ContextType>;
  TagListMutationQueryType?: TagListMutationQueryTypeResolvers<ContextType>;
  TagListQuery?: TagListQueryResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  TeamConnection?: TeamConnectionResolvers<ContextType>;
  TeamEdge?: TeamEdgeResolvers<ContextType>;
  TeamMutationQuery?: TeamMutationQueryResolvers<ContextType>;
  TeamPermissionType?: TeamPermissionTypeResolvers<ContextType>;
  TeamQuery?: TeamQueryResolvers<ContextType>;
  Term?: TermResolvers<ContextType>;
  TermDate?: TermDateResolvers<ContextType>;
  TermDatePermissionType?: TermDatePermissionTypeResolvers<ContextType>;
  TermMutationQuery?: TermMutationQueryResolvers<ContextType>;
  TermQuery?: TermQueryResolvers<ContextType>;
  Testimonial?: TestimonialResolvers<ContextType>;
  TestimonialQuery?: TestimonialQueryResolvers<ContextType>;
  Timeline?: TimelineResolvers<ContextType>;
  TimelineMutationQuery?: TimelineMutationQueryResolvers<ContextType>;
  TimelineQuery?: TimelineQueryResolvers<ContextType>;
  TmDetailType?: TmDetailTypeResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TodoConnection?: TodoConnectionResolvers<ContextType>;
  TodoEdge?: TodoEdgeResolvers<ContextType>;
  TodoList?: TodoListResolvers<ContextType>;
  TodoMetaType?: TodoMetaTypeResolvers<ContextType>;
  TodoMutationQuery?: TodoMutationQueryResolvers<ContextType>;
  TodoQuery?: TodoQueryResolvers<ContextType>;
  TodoType?: TodoTypeResolvers<ContextType>;
  TodoableUnion?: TodoableUnionResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  WeeklyActivity?: WeeklyActivityResolvers<ContextType>;
  payment?: PaymentResolvers<ContextType>;
};




export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;