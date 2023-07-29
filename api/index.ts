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
  Date: any;
  DateTime: any;
  /** Represents untyped JSON */
  JSON: any;
};

export type AddressInfo = {
  __typename?: "AddressInfo";
  address_1?: Maybe<Scalars["String"]>;
  address_2?: Maybe<Scalars["String"]>;
  address_city?: Maybe<City>;
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  country_name?: Maybe<Scalars["String"]>;
  google_place_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  postcode?: Maybe<Scalars["String"]>;
};

export type AddressInput = {
  address_1?: InputMaybe<Scalars["String"]>;
  address_2?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  city_id?: InputMaybe<Scalars["Int"]>;
  country?: InputMaybe<Scalars["String"]>;
  google_place_id?: InputMaybe<Scalars["String"]>;
  lat?: InputMaybe<Scalars["Int"]>;
  lng?: InputMaybe<Scalars["Int"]>;
  postcode?: InputMaybe<Scalars["String"]>;
};

export enum AlignmentTypes {
  Exchange = "exchange",
  Recruitment = "recruitment",
}

export type ApplicationFilter = {
  backgrounds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  branch?: InputMaybe<Scalars["Int"]>;
  campaign_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  created_at?: InputMaybe<DateInput>;
  custom_status_exist?: InputMaybe<Scalars["Boolean"]>;
  /** Removed. Use custom_status_ids instead */
  custom_status_id?: InputMaybe<Scalars["Int"]>;
  custom_status_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  date_an_signed?: InputMaybe<DateInput>;
  date_approved?: InputMaybe<DateInput>;
  date_matched?: InputMaybe<DateInput>;
  date_realized?: InputMaybe<DateInput>;
  date_remote_realized?: InputMaybe<DateInput>;
  /** Available types - short, medium, long */
  duration_type?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  earliest_start_date?: InputMaybe<DateInput>;
  experience_end_date?: InputMaybe<DateInput>;
  experience_start_date?: InputMaybe<DateInput>;
  experience_type?: InputMaybe<Array<ExperienceType>>;
  favourite?: InputMaybe<Scalars["Boolean"]>;
  for?: InputMaybe<Scalars["String"]>;
  full_name?: InputMaybe<Scalars["String"]>;
  graduation_date?: InputMaybe<DateInput>;
  has_managers?: InputMaybe<Scalars["Boolean"]>;
  has_profile_photo?: InputMaybe<Scalars["Boolean"]>;
  has_started_standards_survey?: InputMaybe<Scalars["Boolean"]>;
  has_stories?: InputMaybe<Scalars["Boolean"]>;
  is_aiesecer?: InputMaybe<Scalars["Boolean"]>;
  is_ge?: InputMaybe<Scalars["Boolean"]>;
  languages?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  last_interaction?: InputMaybe<DateInput>;
  my?: InputMaybe<Scalars["String"]>;
  nationalities?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  nps_grade_value?: InputMaybe<RangeInput>;
  opportunities?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  opportunity_committee?: InputMaybe<Scalars["Int"]>;
  opportunity_home_lc?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  opportunity_home_mc?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  opportunity_home_region?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  opportunity_id?: InputMaybe<Scalars["Int"]>;
  organisation?: InputMaybe<Scalars["Int"]>;
  partner_type?: InputMaybe<Array<PartnerTypes>>;
  person_committee?: InputMaybe<Scalars["Int"]>;
  person_home_lc?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  person_home_mc?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  person_home_region?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  person_id?: InputMaybe<Scalars["Int"]>;
  programmes?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  q?: InputMaybe<Scalars["String"]>;
  rejection_reasons?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  remote_opportunity?: InputMaybe<Scalars["Boolean"]>;
  remote_start_date?: InputMaybe<DateInput>;
  scheduled_interview?: InputMaybe<DateInput>;
  sdg_goals?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sdg_targets?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  skills?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  slots?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sort?: InputMaybe<ApplicationSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  standards?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  status?: InputMaybe<Scalars["String"]>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  study_levels?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sub_products?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  testimonial_filled_at?: InputMaybe<DateInput>;
  work_types?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type ApplicationMetaType = {
  __typename?: "ApplicationMetaType";
  answers?: Maybe<Scalars["String"]>;
  approved_by?: Maybe<Person>;
  date_approval_broken?: Maybe<Scalars["DateTime"]>;
  date_approved?: Maybe<Scalars["DateTime"]>;
  date_completed?: Maybe<Scalars["DateTime"]>;
  date_ep_approved?: Maybe<Scalars["DateTime"]>;
  date_ldm_completed?: Maybe<Scalars["DateTime"]>;
  date_matched?: Maybe<Scalars["DateTime"]>;
  date_nps_completed?: Maybe<Scalars["DateTime"]>;
  date_pay_by_cash?: Maybe<Scalars["String"]>;
  date_realisation_broke?: Maybe<Scalars["DateTime"]>;
  date_realized?: Maybe<Scalars["DateTime"]>;
  date_rejected?: Maybe<Scalars["DateTime"]>;
  date_remote_realization_broken_at?: Maybe<Scalars["DateTime"]>;
  date_tn_approved?: Maybe<Scalars["DateTime"]>;
  date_withdrawn?: Maybe<Scalars["String"]>;
  ep_approved_by?: Maybe<Person>;
  gip_answer?: Maybe<Scalars["String"]>;
  host_name?: Maybe<Scalars["String"]>;
  host_number?: Maybe<Scalars["String"]>;
  manager_name?: Maybe<Scalars["String"]>;
  manager_number?: Maybe<Scalars["String"]>;
  matched_by?: Maybe<Person>;
  pay_by_cash?: Maybe<Scalars["Boolean"]>;
  realized_by?: Maybe<Person>;
  rejected_by?: Maybe<Person>;
  rejected_on_version?: Maybe<Scalars["Int"]>;
  remote_end_date?: Maybe<Scalars["DateTime"]>;
  remote_realization_broken_by?: Maybe<Person>;
  remote_realized_at?: Maybe<Scalars["DateTime"]>;
  remote_realized_by?: Maybe<Person>;
  remote_start_date?: Maybe<Scalars["DateTime"]>;
  reopened?: Maybe<Scalars["String"]>;
  system_comments?: Maybe<Scalars["String"]>;
  system_rated_at?: Maybe<Scalars["DateTime"]>;
  system_rating?: Maybe<Scalars["String"]>;
  testimonial?: Maybe<Scalars["String"]>;
  testimonial_filled_at?: Maybe<Scalars["DateTime"]>;
  tn_approved_by?: Maybe<Person>;
  vd_blog_url?: Maybe<Scalars["String"]>;
};

export type ApplicationQuestionnaire = {
  __typename?: "ApplicationQuestionnaire";
  answered_at?: Maybe<Scalars["Date"]>;
  answers?: Maybe<Scalars["JSON"]>;
  attachments?: Maybe<Attachment>;
  deadline?: Maybe<Scalars["Date"]>;
  id?: Maybe<Scalars["ID"]>;
  questionnaire?: Maybe<Questionnaire>;
};

/** The connection type for ApplicationQuestionnaire. */
export type ApplicationQuestionnaireConnection = {
  __typename?: "ApplicationQuestionnaireConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ApplicationQuestionnaireEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ApplicationQuestionnaire>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type ApplicationQuestionnaireEdge = {
  __typename?: "ApplicationQuestionnaireEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<ApplicationQuestionnaire>;
};

export type ApplicationQuestionnaireInput = {
  /** Answers in the format {2: 'This is an answer', 3: {content: 'file content', filename: 'name of file'}} */
  answers?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<Scalars["Int"]>;
};

export type ApplicationRemoteRealizeInput = {
  remote_end_date?: InputMaybe<Scalars["DateTime"]>;
  remote_start_date?: InputMaybe<Scalars["DateTime"]>;
};

export type ApplicationScorecard = {
  __typename?: "ApplicationScorecard";
  application_scorecard_attributes?: Maybe<
    Array<Maybe<ApplicationScorecardAttributeType>>
  >;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  person?: Maybe<Person>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type ApplicationScorecardAttributeType = {
  __typename?: "ApplicationScorecardAttributeType";
  id?: Maybe<Scalars["ID"]>;
  score?: Maybe<Scalars["Int"]>;
  scorecard_attribute?: Maybe<ScorecardAttributeType>;
};

export enum ApplicationSortOption {
  ApplicantName = "applicant_name",
  AverageScore = "average_score",
  CreatedAt = "created_at",
  DateAnSigned = "date_an_signed",
  DateApproved = "date_approved",
  DateMatched = "date_matched",
  DateRealized = "date_realized",
  DurationType = "duration_type",
  ExperienceEndDate = "experience_end_date",
  ExperienceStartDate = "experience_start_date",
  Favourite = "favourite",
  FlightDate = "flight_date",
  GraduationDate = "graduation_date",
  HasStartedStandardsSurvey = "has_started_standards_survey",
  HomeLcName = "home_lc_name",
  HomeMcName = "home_mc_name",
  HostLcName = "host_lc_name",
  HostMcName = "host_mc_name",
  IsGep = "is_gep",
  LastActive = "last_active",
  LdmGrade = "ldm_grade",
  NpsGrade = "nps_grade",
  OpportunityId = "opportunity_id",
  OpportunityTitle = "opportunity_title",
  OrganisationName = "organisation_name",
  PaidAt = "paid_at",
  PartnerType = "partner_type",
  Product = "product",
  RequiredBackgroundsPercentage = "required_backgrounds_percentage",
  RequiredSkillsPercentage = "required_skills_percentage",
  ScheduledInterview = "scheduled_interview",
  SdgGoal = "sdg_goal",
  SdgTarget = "sdg_target",
  Slot = "slot",
  Status = "status",
  SubProduct = "sub_product",
  UpdatedAt = "updated_at",
}

export type Attachment = {
  __typename?: "Attachment";
  attachable_id?: Maybe<Scalars["ID"]>;
  attachable_type?: Maybe<Scalars["String"]>;
  attached_by?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  file_content_type?: Maybe<Scalars["String"]>;
  file_file_name?: Maybe<Scalars["String"]>;
  file_file_size?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["ID"]>;
  tag?: Maybe<Scalars["String"]>;
  /** url */
  url?: Maybe<Scalars["String"]>;
};

export type AttachmentUrlArgs = {
  size?: InputMaybe<Scalars["String"]>;
};

export type AttachmentInput = {
  attached_by?: InputMaybe<Scalars["Int"]>;
  description?: InputMaybe<Scalars["String"]>;
  file?: InputMaybe<Scalars["String"]>;
  model_name?: InputMaybe<Scalars["String"]>;
  record_id?: InputMaybe<Scalars["ID"]>;
  tag?: InputMaybe<Scalars["String"]>;
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
  id: Scalars["ID"];
};

export type AttachmentMutationQueryDeleteImageArgs = {
  attachment_id?: InputMaybe<Scalars["Int"]>;
};

export type AttachmentMutationQueryUpdateAttachmentArgs = {
  attachment?: InputMaybe<AttachmentInput>;
  id: Scalars["ID"];
};

export type AttachmentQuery = {
  currentPersonAttachment?: Maybe<Array<Maybe<Attachment>>>;
  getAttachment?: Maybe<Attachment>;
};

export type AttachmentQueryGetAttachmentArgs = {
  id: Scalars["ID"];
};

export type Attendee = {
  __typename?: "Attendee";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
};

export type AutoAssignmentInput = {
  person_id: Scalars["Int"];
  position: Scalars["Int"];
};

export type BaseFilter = {
  q?: InputMaybe<Scalars["String"]>;
};

export enum BaseSortDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Branch = {
  __typename?: "Branch";
  account_manager?: Maybe<Person>;
  address_detail?: Maybe<AddressInfo>;
  approved?: Maybe<Scalars["Boolean"]>;
  billing_address?: Maybe<AddressInfo>;
  branch_employees?: Maybe<BranchEmployeeConnection>;
  branch_type?: Maybe<Scalars["String"]>;
  company?: Maybe<Organisation>;
  contact_people?: Maybe<Array<Maybe<ContactPeopleType>>>;
  description?: Maybe<Scalars["String"]>;
  home_lc?: Maybe<Office>;
  id: Scalars["ID"];
  invoices?: Maybe<InvoiceTypeConnection>;
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Branch>;
  permissions?: Maybe<BranchPermissionType>;
  programme_manager?: Maybe<Person>;
  scope?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["ID"]>;
  status_string?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  vat_number?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
};

export type BranchBranch_EmployeesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type BranchInvoicesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** The connection type for Branch. */
export type BranchConnection = {
  __typename?: "BranchConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BranchEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Branch>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type BranchEdge = {
  __typename?: "BranchEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Branch>;
};

export type BranchEmployee = {
  __typename?: "BranchEmployee";
  access_type?: Maybe<Scalars["String"]>;
  approved?: Maybe<Scalars["Boolean"]>;
  branch?: Maybe<Branch>;
  id: Scalars["ID"];
  invitation_accepted?: Maybe<Scalars["Boolean"]>;
  person?: Maybe<Person>;
  status?: Maybe<Scalars["String"]>;
};

/** The connection type for BranchEmployee. */
export type BranchEmployeeConnection = {
  __typename?: "BranchEmployeeConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BranchEmployeeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<BranchEmployee>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type BranchEmployeeEdge = {
  __typename?: "BranchEmployeeEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<BranchEmployee>;
};

export type BranchEmployeeInput = {
  access_type?: InputMaybe<Scalars["String"]>;
  approved?: InputMaybe<Scalars["Boolean"]>;
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
  id: Scalars["ID"];
};

export type BranchEmployeeMutationQueryBranchEmployeeApproveArgs = {
  id: Scalars["ID"];
};

export type BranchEmployeeMutationQueryBranchEmployeeCreateArgs = {
  branch_id?: InputMaybe<Scalars["Int"]>;
  person_id?: InputMaybe<Scalars["Int"]>;
};

export type BranchEmployeeMutationQueryBranchEmployeeDeleteArgs = {
  id: Scalars["ID"];
};

export type BranchEmployeeMutationQueryBranchEmployeeRejectArgs = {
  id: Scalars["ID"];
};

export type BranchEmployeeMutationQueryBranchEmployeeUpdateArgs = {
  branch_employee?: InputMaybe<BranchEmployeeInput>;
  id: Scalars["ID"];
};

export type BranchEmployeeMutationQueryCreateBranchEmployeeArgs = {
  branch_id: Scalars["Int"];
  person_id: Scalars["Int"];
};

export type BranchEmployeeMutationQueryDeleteBranchEmployeeArgs = {
  id: Scalars["ID"];
};

export type BranchEmployeeMutationQueryRejectBranchEmployeeArgs = {
  id: Scalars["ID"];
};

export type BranchEmployeeMutationQueryUpdateBranchEmployeeArgs = {
  branch_employee?: InputMaybe<BranchEmployeeInput>;
  id: Scalars["ID"];
};

export type BranchEmployeeQuery = {
  getBranchEmployee?: Maybe<BranchEmployee>;
  organisationEmployees?: Maybe<Array<Maybe<BranchEmployee>>>;
};

export type BranchEmployeeQueryGetBranchEmployeeArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type BranchEmployeeQueryOrganisationEmployeesArgs = {
  company_id?: InputMaybe<Scalars["ID"]>;
};

export enum BranchEmployeeStatus {
  Approved = "approved",
  Pending = "pending",
  Rejected = "rejected",
}

export type BranchInput = {
  address_detail_attributes?: InputMaybe<AddressInput>;
  billing_address_attributes?: InputMaybe<AddressInput>;
  contact_detail_attributes?: InputMaybe<ContactInput>;
  contact_people?: InputMaybe<Array<InputMaybe<ContactPeopleInput>>>;
  description?: InputMaybe<Scalars["String"]>;
  home_lc_id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  parent_id?: InputMaybe<Scalars["Int"]>;
  scope?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  summary?: InputMaybe<Scalars["String"]>;
  vat_number?: InputMaybe<Scalars["String"]>;
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
  id: Scalars["ID"];
};

export type BranchMutationQueryBranchApproveArgs = {
  id: Scalars["ID"];
};

export type BranchMutationQueryBranchContractsArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  programme_id?: InputMaybe<Scalars["ID"]>;
};

export type BranchMutationQueryBranchDenyArgs = {
  id: Scalars["ID"];
};

export type BranchMutationQueryCreateBranchArgs = {
  branch?: InputMaybe<BranchInput>;
  organisation_id?: InputMaybe<Scalars["Int"]>;
};

export type BranchMutationQueryDenyBranchArgs = {
  id: Scalars["ID"];
};

export type BranchMutationQueryInviteMemberArgs = {
  access_type?: InputMaybe<Scalars["String"]>;
  country_code?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  first_name?: InputMaybe<Scalars["String"]>;
  follow_up_id?: InputMaybe<Scalars["Int"]>;
  gender?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  last_name?: InputMaybe<Scalars["String"]>;
  linkedin_url?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  referral_type?: InputMaybe<Scalars["String"]>;
};

export type BranchMutationQueryUpdateBranchArgs = {
  branch?: InputMaybe<BranchInput>;
  id: Scalars["ID"];
};

export type BranchPermissionType = {
  __typename?: "BranchPermissionType";
  can_invite_employee?: Maybe<Scalars["Boolean"]>;
  can_manage_branch_employees?: Maybe<Scalars["Boolean"]>;
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
  id?: InputMaybe<Scalars["ID"]>;
};

export type BranchQueryBranchAutocompleteArgs = {
  company_id?: InputMaybe<Scalars["Int"]>;
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
};

export type BranchQueryBranchContractsArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type BranchQueryBranchEmployeesArgs = {
  id: Scalars["ID"];
  status?: InputMaybe<Array<BranchEmployeeStatus>>;
};

export type BranchQueryBranchesArgs = {
  my?: InputMaybe<Scalars["Boolean"]>;
  organisation_id?: InputMaybe<Scalars["ID"]>;
};

export type BranchQueryGetBranchArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type BranchQueryMyBranchArgs = {
  organisation_id?: InputMaybe<Scalars["ID"]>;
};

export type Cv = {
  __typename?: "CV";
  id: Scalars["ID"];
  url?: Maybe<Scalars["String"]>;
};

export type Campaign = {
  __typename?: "Campaign";
  active?: Maybe<Scalars["String"]>;
  campaign_content?: Maybe<Constant>;
  campaign_medium?: Maybe<Constant>;
  campaign_source?: Maybe<Constant>;
  campaign_tag?: Maybe<Scalars["String"]>;
  campaign_term?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  deadline?: Maybe<Scalars["Date"]>;
  id: Scalars["ID"];
  office?: Maybe<Office>;
  people_count?: Maybe<Scalars["Int"]>;
  start_date?: Maybe<Scalars["Date"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type CampaignInput = {
  campaign_content_id?: InputMaybe<Scalars["Int"]>;
  campaign_medium_id?: InputMaybe<Scalars["Int"]>;
  campaign_source_id?: InputMaybe<Scalars["Int"]>;
  campaign_tag?: InputMaybe<Scalars["String"]>;
  campaign_term?: InputMaybe<Scalars["String"]>;
  deadline?: InputMaybe<Scalars["Date"]>;
  start_date?: InputMaybe<Scalars["Date"]>;
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
  id: Scalars["ID"];
};

export type CampaignMutationQueryCampaignActivateArgs = {
  id: Scalars["ID"];
};

export type CampaignMutationQueryCampaignCreateArgs = {
  campaign?: InputMaybe<CampaignInput>;
  office_id?: InputMaybe<Scalars["Int"]>;
};

export type CampaignMutationQueryCampaignDeactivateArgs = {
  campaign?: InputMaybe<CampaignInput>;
  id: Scalars["ID"];
};

export type CampaignMutationQueryCampaignUpdateArgs = {
  campaign?: InputMaybe<CampaignInput>;
  id: Scalars["ID"];
};

export type CampaignMutationQueryCreateCampaignArgs = {
  campaign?: InputMaybe<CampaignInput>;
  office_id: Scalars["Int"];
};

export type CampaignMutationQueryDeactivateCampaignArgs = {
  id: Scalars["ID"];
};

export type CampaignMutationQueryUpdateCampaignArgs = {
  campaign?: InputMaybe<CampaignInput>;
  id: Scalars["ID"];
};

export type CampaignQuery = {
  campaignAutocomplete?: Maybe<Array<Maybe<Campaign>>>;
  getCampaign?: Maybe<Campaign>;
};

export type CampaignQueryCampaignAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type CampaignQueryGetCampaignArgs = {
  id: Scalars["ID"];
};

export type ChecklistInput = {
  description: Scalars["String"];
  question_text: Scalars["String"];
};

export type ChecklistResponse = {
  __typename?: "ChecklistResponse";
  answers?: Maybe<Scalars["JSON"]>;
  id?: Maybe<Scalars["ID"]>;
  survey?: Maybe<Survey>;
};

export type City = {
  __typename?: "City";
  city_details?: Maybe<Scalars["String"]>;
  city_lcs?: Maybe<Array<Maybe<CityLc>>>;
  country?: Maybe<Scalars["String"]>;
  google_place_id?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  lat?: Maybe<Scalars["Float"]>;
  lcs?: Maybe<Array<Maybe<Office>>>;
  lng?: Maybe<Scalars["Float"]>;
  mc?: Maybe<Office>;
  name?: Maybe<Scalars["String"]>;
};

export type CityFilter = {
  mc_id?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<CitySortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
};

export type CityInput = {
  country?: InputMaybe<Scalars["String"]>;
  google_place_id?: InputMaybe<Scalars["String"]>;
  lat?: InputMaybe<Scalars["Float"]>;
  lng?: InputMaybe<Scalars["Float"]>;
  mc_id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type CityLc = {
  __typename?: "CityLc";
  city?: Maybe<City>;
  id?: Maybe<Scalars["ID"]>;
  lc?: Maybe<Office>;
};

export type CityLcInput = {
  city_id?: InputMaybe<Scalars["Int"]>;
  lc_id?: InputMaybe<Scalars["Int"]>;
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
  id: Scalars["ID"];
};

export type CityLcMutationQueryUpdateCityLcArgs = {
  city_lc?: InputMaybe<CityLcInput>;
  id: Scalars["ID"];
};

export type CityLcQuery = {
  getCityLc?: Maybe<CityLc>;
};

export type CityLcQueryGetCityLcArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type CityList = {
  __typename?: "CityList";
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
  id: Scalars["ID"];
};

export type CityMutationQueryUpdateCityArgs = {
  city?: InputMaybe<CityInput>;
  id: Scalars["ID"];
};

export type CityQuery = {
  allCity?: Maybe<CityList>;
  cityAutocomplete?: Maybe<Array<Maybe<City>>>;
  cityByMc?: Maybe<Array<Maybe<City>>>;
  getCity?: Maybe<City>;
};

export type CityQueryAllCityArgs = {
  filters?: InputMaybe<CityFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type CityQueryCityAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  mc_scope?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type CityQueryCityByMcArgs = {
  allocated_to_lc: Scalars["Boolean"];
  mc_id: Scalars["Int"];
};

export type CityQueryGetCityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export enum CitySortOption {
  CreatedAt = "created_at",
  Name = "name",
  UpdatedAt = "updated_at",
}

export type ClientData = {
  __typename?: "ClientData";
  data_type?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

/** The connection type for ClientData. */
export type ClientDataConnection = {
  __typename?: "ClientDataConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ClientDataEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ClientData>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type ClientDataEdge = {
  __typename?: "ClientDataEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<ClientData>;
};

export type ClientDataInput = {
  applicable_id: Scalars["ID"];
  /** Person, OpportunityApplication are the currently permitted types. */
  applicable_type: Scalars["String"];
  data_type: Scalars["String"];
  name: Scalars["String"];
  value: Scalars["String"];
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
  id: Scalars["ID"];
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
  id: Scalars["ID"];
};

export type ClientDataQueryClientDataByNameAndApplicableArgs = {
  applicable_id: Scalars["ID"];
  applicable_type: Scalars["String"];
  name: Scalars["String"];
};

export type ClientDataQueryClientDataGetArgs = {
  id: Scalars["ID"];
};

export type ClientDataQueryClientDataGetByNameAndApplicableArgs = {
  applicable_id: Scalars["ID"];
  applicable_type: Scalars["String"];
  name: Scalars["String"];
};

export type Comment = {
  __typename?: "Comment";
  can_be_deleted?: Maybe<Scalars["Boolean"]>;
  comment?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  field_for?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  meta?: Maybe<CommentMetaType>;
  person?: Maybe<Person>;
  status?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

/** The connection type for Comment. */
export type CommentConnection = {
  __typename?: "CommentConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommentEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type CommentEdge = {
  __typename?: "CommentEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Comment>;
};

export type CommentInput = {
  comment?: InputMaybe<Scalars["String"]>;
  field_for?: InputMaybe<Scalars["String"]>;
  meta?: InputMaybe<Scalars["String"]>;
  model_name?: InputMaybe<Scalars["String"]>;
  person_id?: InputMaybe<Scalars["Int"]>;
  record_id?: InputMaybe<Scalars["ID"]>;
  status?: InputMaybe<Scalars["String"]>;
};

/** CommentMetaType records */
export type CommentMetaType = {
  __typename?: "CommentMetaType";
  resolved?: Maybe<Scalars["String"]>;
  resolved_at?: Maybe<Scalars["String"]>;
  resolved_by?: Maybe<Scalars["String"]>;
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
  id: Scalars["ID"];
};

export type CommentMutationQueryUpdateCommentArgs = {
  comment?: InputMaybe<CommentInput>;
  id: Scalars["ID"];
};

export type CommentQuery = {
  currentPersonComment?: Maybe<Array<Maybe<Comment>>>;
  getComment?: Maybe<Comment>;
};

export type CommentQueryGetCommentArgs = {
  id: Scalars["ID"];
};

export type CommitteeAggregation = {
  __typename?: "CommitteeAggregation";
  accepted?: Maybe<Scalars["Int"]>;
  applied?: Maybe<Scalars["Int"]>;
  approved?: Maybe<Scalars["Int"]>;
  committee_target?: Maybe<CommitteeTarget>;
  completed?: Maybe<Scalars["Int"]>;
  exchange_type?: Maybe<Scalars["String"]>;
  finished?: Maybe<Scalars["Int"]>;
  growth_percentage_accepted?: Maybe<Scalars["Int"]>;
  growth_percentage_applied?: Maybe<Scalars["Int"]>;
  growth_percentage_approved?: Maybe<Scalars["Int"]>;
  growth_percentage_completed?: Maybe<Scalars["Int"]>;
  growth_percentage_finished?: Maybe<Scalars["Int"]>;
  growth_percentage_realized?: Maybe<Scalars["Int"]>;
  percentage_accepted?: Maybe<Scalars["Int"]>;
  percentage_applied?: Maybe<Scalars["Int"]>;
  percentage_approved?: Maybe<Scalars["Int"]>;
  percentage_completed?: Maybe<Scalars["Int"]>;
  percentage_finished?: Maybe<Scalars["Int"]>;
  percentage_realized?: Maybe<Scalars["Int"]>;
  programme?: Maybe<Programme>;
  realized?: Maybe<Scalars["Int"]>;
  term?: Maybe<Term>;
};

/** The connection type for CommitteeAggregation. */
export type CommitteeAggregationConnection = {
  __typename?: "CommitteeAggregationConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommitteeAggregationEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CommitteeAggregation>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type CommitteeAggregationEdge = {
  __typename?: "CommitteeAggregationEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<CommitteeAggregation>;
};

export type CommitteeCityInput = {
  country?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type CommitteeDepartmentInput = {
  name: Scalars["String"];
  term_id: Scalars["Int"];
};

export type CommitteeDepartmentMutationQuery = {
  archiveCommitteeDepartment?: Maybe<CommitteeDepartmentType>;
  createCommitteeDepartment?: Maybe<CommitteeDepartmentType>;
};

export type CommitteeDepartmentMutationQueryArchiveCommitteeDepartmentArgs = {
  id: Scalars["ID"];
};

export type CommitteeDepartmentMutationQueryCreateCommitteeDepartmentArgs = {
  committee_department: CommitteeDepartmentInput;
  office_id: Scalars["ID"];
};

export type CommitteeDepartmentPermissionType = {
  __typename?: "CommitteeDepartmentPermissionType";
  can_archive?: Maybe<Scalars["Boolean"]>;
};

export type CommitteeDepartmentType = {
  __typename?: "CommitteeDepartmentType";
  facets?: Maybe<Scalars["JSON"]>;
  id: Scalars["ID"];
  member_positions?: Maybe<MemberPositionConnection>;
  name: Scalars["String"];
  /** permissions */
  permissions?: Maybe<CommitteeDepartmentPermissionType>;
};

export type CommitteeDepartmentTypeMember_PositionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** The connection type for CommitteeDepartmentType. */
export type CommitteeDepartmentTypeConnection = {
  __typename?: "CommitteeDepartmentTypeConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommitteeDepartmentTypeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CommitteeDepartmentType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type CommitteeDepartmentTypeEdge = {
  __typename?: "CommitteeDepartmentTypeEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
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
  id: Scalars["ID"];
};

export type CommitteeMutationQueryDeleteCommitteeArgs = {
  id: Scalars["ID"];
};

export type CommitteeMutationQueryFreezeUnfreezeCommitteeArgs = {
  action?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  remarks?: InputMaybe<Scalars["String"]>;
};

export type CommitteeMutationQueryMemberLeadChecklistQuestionBulkCreateArgs = {
  checklist: Array<InputMaybe<ChecklistInput>>;
  id: Scalars["ID"];
};

export type CommitteeMutationQueryPropagateTermsCommitteeArgs = {
  committee?: InputMaybe<OfficeInput>;
};

export type CommitteeMutationQueryUpdateCommitteeArgs = {
  committee?: InputMaybe<OfficeInput>;
  id: Scalars["ID"];
};

export type CommitteePayment = {
  __typename?: "CommitteePayment";
  allow_online_payments?: Maybe<Scalars["Boolean"]>;
  apply?: Maybe<Scalars["String"]>;
  match?: Maybe<Scalars["String"]>;
  other_payment_option?: Maybe<Scalars["String"]>;
  realize?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type CommitteePaymentInput = {
  allow_online_payments?: InputMaybe<Scalars["Boolean"]>;
  apply?: InputMaybe<Scalars["String"]>;
  match?: InputMaybe<Scalars["String"]>;
  other_payment_option?: InputMaybe<Scalars["String"]>;
  realize?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type CommitteeQuery = {
  committee?: Maybe<Office>;
  committeeAutocomplete?: Maybe<Array<Maybe<Office>>>;
  committeeBasicDetails?: Maybe<OfficeBasicDetails>;
  committeeTerm?: Maybe<CommitteeTermType>;
  committeeTerms?: Maybe<Array<Maybe<TermDate>>>;
  committeeTermsWithDepartments?: Maybe<Array<Maybe<CommitteeTermType>>>;
  committees?: Maybe<OfficeList>;
  committeesDownload?: Maybe<Scalars["String"]>;
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
  id: Scalars["ID"];
};

export type CommitteeQueryCommitteeAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  my_committee_autocomplete?: InputMaybe<Scalars["Boolean"]>;
  office_scope?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  tag?: InputMaybe<Scalars["String"]>;
};

export type CommitteeQueryCommitteeBasicDetailsArgs = {
  id: Scalars["ID"];
};

export type CommitteeQueryCommitteeTermArgs = {
  id: Scalars["ID"];
  term_id: Scalars["ID"];
};

export type CommitteeQueryCommitteeTermsArgs = {
  id: Scalars["ID"];
};

export type CommitteeQueryCommitteeTermsWithDepartmentsArgs = {
  id: Scalars["ID"];
};

export type CommitteeQueryCommitteesArgs = {
  filters?: InputMaybe<OfficeFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type CommitteeQueryCommitteesDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<OfficeFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type CommitteeQueryCommitteesListBasicArgs = {
  filters?: InputMaybe<OfficeFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type CommitteeQueryEntityGoalSettingArgs = {
  filters?: InputMaybe<GoalSettingFilter>;
};

export type CommitteeQueryGetCommitteeArgs = {
  id: Scalars["ID"];
};

export type CommitteeQueryGetCommitteeBasicDetailsArgs = {
  id: Scalars["ID"];
};

export type CommitteeQueryGetCommitteeTermArgs = {
  id: Scalars["ID"];
};

export type CommitteeQueryMcsAlignmentsArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  mc_id?: InputMaybe<Scalars["Int"]>;
  mc_name?: InputMaybe<Scalars["String"]>;
};

export type CommitteeQueryMyCommitteeAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  tag?: InputMaybe<Scalars["String"]>;
};

export type CommitteeTarget = {
  __typename?: "CommitteeTarget";
  accepted?: Maybe<Scalars["Int"]>;
  applied?: Maybe<Scalars["Int"]>;
  approved?: Maybe<Scalars["Int"]>;
  completed?: Maybe<Scalars["Int"]>;
  exchange_type?: Maybe<Scalars["String"]>;
  finished?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  programme?: Maybe<Programme>;
  realized?: Maybe<Scalars["Int"]>;
  term?: Maybe<Term>;
};

/** The connection type for CommitteeTarget. */
export type CommitteeTargetConnection = {
  __typename?: "CommitteeTargetConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommitteeTargetEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CommitteeTarget>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type CommitteeTargetEdge = {
  __typename?: "CommitteeTargetEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<CommitteeTarget>;
};

export type CommitteeTargetInput = {
  accepted?: InputMaybe<Scalars["Int"]>;
  applied?: InputMaybe<Scalars["Int"]>;
  approved?: InputMaybe<Scalars["Int"]>;
  completed?: InputMaybe<Scalars["Int"]>;
  finished?: InputMaybe<Scalars["Int"]>;
  realized?: InputMaybe<Scalars["Int"]>;
};

export type CommitteeTargetMutationQuery = {
  /** Bulk update committee targets for committee */
  committeeTargetBulkUpdate?: Maybe<Array<Maybe<CommitteeTarget>>>;
};

export type CommitteeTargetMutationQueryCommitteeTargetBulkUpdateArgs = {
  committee_targets: Array<InputMaybe<UpdateCommitteeTargetInput>>;
};

export type CommitteeTermInput = {
  end_date?: InputMaybe<Scalars["DateTime"]>;
  office_id?: InputMaybe<Scalars["Int"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  tag?: InputMaybe<Scalars["String"]>;
  term_id?: InputMaybe<Scalars["String"]>;
};

export type CommitteeTermType = {
  __typename?: "CommitteeTermType";
  committee_departments?: Maybe<CommitteeDepartmentTypeConnection>;
  id: Scalars["ID"];
  member_position?: Maybe<MemberPosition>;
  name?: Maybe<Scalars["String"]>;
};

export type CommitteeTermTypeCommittee_DepartmentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type CompanyFilter = {
  committee?: InputMaybe<Scalars["Int"]>;
  company_sizes?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  company_types?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  has_active_opportunities?: InputMaybe<Scalars["Boolean"]>;
  has_employee?: InputMaybe<Scalars["Boolean"]>;
  has_opportunities?: InputMaybe<Scalars["Boolean"]>;
  has_pop_account?: InputMaybe<Scalars["Boolean"]>;
  industries?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  last_interaction?: InputMaybe<DateInput>;
  managers?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  partner_type?: InputMaybe<Array<PartnerTypes>>;
  pop_first_sign_up?: InputMaybe<DateInput>;
  programmes?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  q?: InputMaybe<Scalars["String"]>;
  registered?: InputMaybe<DateInput>;
  sort?: InputMaybe<CompanySortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  status?: InputMaybe<Scalars["String"]>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tag_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type CompanyInput = {
  address_detail_attributes?: InputMaybe<AddressInput>;
  backgrounds?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  company_stats?: InputMaybe<Scalars["JSON"]>;
  contact_detail_attributes?: InputMaybe<ContactInput>;
  /** The base64 encoded version of the cover picture to upload. */
  cover_photo?: InputMaybe<ImageInput>;
  custom_website_footer_url?: InputMaybe<Scalars["String"]>;
  employee_count?: InputMaybe<Scalars["String"]>;
  home_lc_id?: InputMaybe<Scalars["Int"]>;
  industries?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  is_gep?: InputMaybe<Scalars["Boolean"]>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  office_count?: InputMaybe<Scalars["String"]>;
  organisation_size?: InputMaybe<Scalars["Int"]>;
  organisation_type?: InputMaybe<Scalars["Int"]>;
  /** The base64 encoded version of the profile picture to upload. */
  profile_photo?: InputMaybe<ImageInput>;
  registration_no?: InputMaybe<Scalars["String"]>;
  retention_rate?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  summary?: InputMaybe<Scalars["String"]>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  video_url_id?: InputMaybe<Scalars["String"]>;
  website?: InputMaybe<Scalars["String"]>;
  year_of_creation?: InputMaybe<Scalars["Int"]>;
};

export type CompanyList = {
  __typename?: "CompanyList";
  data?: Maybe<Array<Maybe<Organisation>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

/** CompanyMetaType records */
export type CompanyMetaType = {
  __typename?: "CompanyMetaType";
  approved_at?: Maybe<Scalars["DateTime"]>;
  approved_by?: Maybe<Person>;
  archived_at?: Maybe<Scalars["DateTime"]>;
  archived_by?: Maybe<Person>;
  archived_method?: Maybe<Scalars["String"]>;
  employee_count?: Maybe<Scalars["String"]>;
  experience_count?: Maybe<Scalars["String"]>;
  office_count?: Maybe<Scalars["String"]>;
  opportunity_count?: Maybe<Scalars["String"]>;
  rejected_at?: Maybe<Scalars["DateTime"]>;
  rejected_by?: Maybe<Person>;
  retention_rate?: Maybe<Scalars["String"]>;
  video_url_id?: Maybe<Scalars["String"]>;
};

export enum CompanySortOption {
  ActiveOpportunities = "active_opportunities",
  CompanySize = "company_size",
  CompanyType = "company_type",
  CreatedAt = "created_at",
  EmployeesCount = "employees_count",
  HomeLc = "home_lc",
  HomeMc = "home_mc",
  IsGep = "is_gep",
  Name = "name",
  Openings = "openings",
  OpportunityCount = "opportunity_count",
  PartnerType = "partner_type",
  PhoneNumber = "phone_number",
  PopFirstSignUp = "pop_first_sign_up",
  Status = "status",
  UpdatedAt = "updated_at",
}

export type Constant = {
  __typename?: "Constant";
  alias_name?: Maybe<Scalars["String"]>;
  children?: Maybe<Array<Maybe<Constant>>>;
  has_focus_products?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  /** check if the constant exists with another type. */
  matches_with?: Maybe<Scalars["Boolean"]>;
  /** Matching with opportunity */
  matching_with_opportunity?: Maybe<Scalars["Boolean"]>;
  meta?: Maybe<Scalars["JSON"]>;
  name?: Maybe<Scalars["String"]>;
  option?: Maybe<Scalars["String"]>;
  parent_id?: Maybe<Scalars["Int"]>;
  position?: Maybe<Scalars["Int"]>;
  /** project and Opportunities count for the SDG */
  project_and_opportunities_count?: Maybe<Scalars["JSON"]>;
  sdg_goal_hex_code?: Maybe<Scalars["String"]>;
  sdg_goal_no?: Maybe<Scalars["String"]>;
  short_name?: Maybe<Scalars["String"]>;
  standard_category?: Maybe<Scalars["String"]>;
  standard_type?: Maybe<Scalars["String"]>;
  tag?: Maybe<Scalars["String"]>;
  type_id?: Maybe<Scalars["String"]>;
  type_name?: Maybe<Scalars["String"]>;
};

export type ConstantMatches_WithArgs = {
  type?: InputMaybe<Scalars["String"]>;
  type_id?: InputMaybe<Scalars["Int"]>;
};

export type ConstantMap = {
  __typename?: "ConstantMap";
  constant?: Maybe<Constant>;
  /** constant id */
  constant_id?: Maybe<Scalars["Int"]>;
  /** constant name */
  constant_name?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  level?: Maybe<Scalars["Int"]>;
  /** check if the constant exists with another type. */
  matches_with?: Maybe<Scalars["Boolean"]>;
  /** Matching with opportunity */
  matching_with_opportunity?: Maybe<Scalars["Boolean"]>;
  /** Constant meta name */
  meta?: Maybe<Scalars["JSON"]>;
  option?: Maybe<Scalars["String"]>;
  /** Constant parent_name */
  parent_name?: Maybe<Scalars["String"]>;
  /** Constant position name */
  position?: Maybe<Scalars["String"]>;
  standard_option?: Maybe<Constant>;
};

export type ConstantMapMatches_WithArgs = {
  type?: InputMaybe<Scalars["String"]>;
  type_id?: InputMaybe<Scalars["Int"]>;
};

export type ConstantMapInput = {
  id?: InputMaybe<Scalars["Int"]>;
  level?: InputMaybe<Scalars["Int"]>;
  option?: InputMaybe<Scalars["String"]>;
};

export enum ConstantSortOption {
  Name = "name",
  Position = "position",
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
  parent_id?: InputMaybe<Scalars["ID"]>;
  type_id?: InputMaybe<Scalars["String"]>;
  type_ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ConstantsConstantAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type ConstantsConstantsArgs = {
  filters?: InputMaybe<ConstantsSortOption>;
  parent_id?: InputMaybe<Scalars["ID"]>;
  type_id?: InputMaybe<Scalars["String"]>;
  type_ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ConstantsSdgGoalsArgs = {
  active_opportunities?: InputMaybe<Scalars["Boolean"]>;
};

export type ConstantsSdgTargetsArgs = {
  sdg_goal?: InputMaybe<Scalars["String"]>;
};

export type ConstantsSortOption = {
  /** Sort the result based on name or position. By default it will order by name */
  sort?: InputMaybe<ConstantSortOption>;
  /** Return the result in ascending or descending order. By default it will be in ascending order */
  sort_direction?: InputMaybe<BaseSortDirection>;
};

export type ContactInfo = {
  __typename?: "ContactInfo";
  country_code?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  facebook?: Maybe<Scalars["String"]>;
  instagram?: Maybe<Scalars["String"]>;
  linkedin?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
};

export type ContactInput = {
  country_code?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  facebook?: InputMaybe<Scalars["String"]>;
  instagram?: InputMaybe<Scalars["String"]>;
  linkedin?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  twitter?: InputMaybe<Scalars["String"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type ContactPeopleInput = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  position?: InputMaybe<Scalars["String"]>;
};

/** ContactPeopleType records */
export type ContactPeopleType = {
  __typename?: "ContactPeopleType";
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
};

export type ContentSection = {
  __typename?: "ContentSection";
  content_image?: Maybe<ImageType>;
  id?: Maybe<Scalars["ID"]>;
  position?: Maybe<Scalars["Int"]>;
  redirect_url?: Maybe<Scalars["String"]>;
};

export type ContentSectionInput = {
  content_image_file?: InputMaybe<ImageInput>;
  position: Scalars["Int"];
  redirect_url?: InputMaybe<Scalars["String"]>;
};

export type ContentSectionMutationQuery = {
  /** Create Content Section */
  createContentSection?: Maybe<ContentSection>;
};

export type ContentSectionMutationQueryCreateContentSectionArgs = {
  content_section?: InputMaybe<ContentSectionInput>;
};

export type ContentSectionQuery = {
  contentSections?: Maybe<Array<Maybe<ContentSection>>>;
};

export type ContentSectionQueryContentSectionsArgs = {
  sort_direction?: InputMaybe<BaseSortDirection>;
};

export type Contract = {
  __typename?: "Contract";
  contract?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  programme?: Maybe<Programme>;
  signee?: Maybe<Person>;
};

export type CounterData = {
  __typename?: "CounterData";
  count?: Maybe<Scalars["String"]>;
};

export type Currency = {
  __typename?: "Currency";
  alphabetic_code?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  minor_unit?: Maybe<Scalars["Int"]>;
  name: Scalars["String"];
  numeric_code?: Maybe<Scalars["Int"]>;
  programme_fees?: Maybe<Array<Maybe<ProgrammeFee>>>;
  symbol?: Maybe<Scalars["String"]>;
};

export type CurrentPerson = {
  __typename?: "CurrentPerson";
  academic_experiences?: Maybe<Array<Maybe<PreviousExperience>>>;
  accepted_reason?: Maybe<Scalars["String"]>;
  account_manager?: Maybe<Scalars["String"]>;
  aiesec_email?: Maybe<Scalars["String"]>;
  client_datas?: Maybe<ClientDataConnection>;
  contact_detail?: Maybe<ContactInfo>;
  /** @deprecated Removed. Use contact_detail field */
  country_code?: Maybe<Scalars["String"]>;
  cover_photo?: Maybe<Scalars["String"]>;
  creatable_offices_for_opportunities?: Maybe<OfficeConnection>;
  creatable_offices_for_pages?: Maybe<Array<Maybe<Office>>>;
  created_at?: Maybe<Scalars["DateTime"]>;
  current_office?: Maybe<Office>;
  current_offices?: Maybe<Array<Maybe<Office>>>;
  current_positions?: Maybe<Array<Maybe<Position>>>;
  current_status?: Maybe<Scalars["String"]>;
  current_teams?: Maybe<Array<Maybe<Team>>>;
  cv_url?: Maybe<Scalars["String"]>;
  cvs?: Maybe<Array<Maybe<Cv>>>;
  dob?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  expa_registered_device_id?: Maybe<Scalars["String"]>;
  expa_settings?: Maybe<ExpaSettings>;
  favourite_events?: Maybe<Array<Maybe<Event>>>;
  favourite_events_count?: Maybe<Scalars["Int"]>;
  first_name?: Maybe<Scalars["String"]>;
  full_name?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  has_completed_onboarding?: Maybe<Scalars["Boolean"]>;
  has_current_position?: Maybe<Scalars["Boolean"]>;
  home_lc?: Maybe<Office>;
  id: Scalars["ID"];
  interviewed?: Maybe<Scalars["Boolean"]>;
  is_ai_eb_member?: Maybe<Scalars["Boolean"]>;
  is_ai_member?: Maybe<Scalars["Boolean"]>;
  is_pop_user?: Maybe<Scalars["Boolean"]>;
  last_name?: Maybe<Scalars["String"]>;
  linkedin_url?: Maybe<Scalars["String"]>;
  managed_branches?: Maybe<Array<Maybe<Branch>>>;
  managed_companies?: Maybe<Array<Maybe<Organisation>>>;
  managed_sub_branch_ids?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  managers?: Maybe<Array<Maybe<Manager>>>;
  member_positions?: Maybe<Array<MemberPosition>>;
  meta?: Maybe<PersonMetaType>;
  middle_names?: Maybe<Scalars["String"]>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  notification_settings?: Maybe<Scalars["JSON"]>;
  /** current person's notifications */
  notifications?: Maybe<Array<Maybe<Notification>>>;
  nps_score?: Maybe<Scalars["String"]>;
  opportunity_applications_count?: Maybe<Scalars["Int"]>;
  organisation_type_id?: Maybe<Scalars["Int"]>;
  pending_tasks?: Maybe<TodoType>;
  /** permissions */
  permissions?: Maybe<PersonPermissionType>;
  permissions_for?: Maybe<Scalars["String"]>;
  person_profile?: Maybe<PersonProfile>;
  /** @deprecated Removed. Use contact_detail field */
  phone?: Maybe<Scalars["String"]>;
  professional_experiences?: Maybe<Array<Maybe<ProfessionalExperience>>>;
  profile_completeness?: Maybe<Scalars["JSON"]>;
  profile_photo?: Maybe<Scalars["String"]>;
  recommended_incoming_programme?: Maybe<Scalars["Int"]>;
  referral_type?: Maybe<Scalars["String"]>;
  saved_filters?: Maybe<SavedFilterConnection>;
  secure_identity?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
};

export type CurrentPersonClient_DatasArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type CurrentPersonCover_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars["Boolean"]>;
  cdn_region?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["String"]>;
};

export type CurrentPersonCreatable_Offices_For_OpportunitiesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
};

export type CurrentPersonNodeArgs = {
  id: Scalars["ID"];
};

export type CurrentPersonNotificationsArgs = {
  count?: InputMaybe<Scalars["Int"]>;
};

export type CurrentPersonProfile_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars["Boolean"]>;
  cdn_region?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["String"]>;
};

export type CurrentPersonSaved_FiltersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  model?: InputMaybe<Scalars["String"]>;
};

/** An input object representing arguments for a Current Person */
export type CurrentPersonInput = {
  address_detail_attributes?: InputMaybe<AddressInput>;
  contact_detail_attributes?: InputMaybe<ContactInput>;
  cover_image_name?: InputMaybe<Scalars["String"]>;
  /** The base64 encoded version of the cover image to upload. */
  cover_photo?: InputMaybe<ImageInput>;
  dob?: InputMaybe<Scalars["Date"]>;
  expa_registered_device_id?: InputMaybe<Scalars["String"]>;
  expa_settings?: InputMaybe<ExpaSettingsInput>;
  first_name?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
  has_completed_onboarding?: InputMaybe<Scalars["Boolean"]>;
  home_lc_id?: InputMaybe<Scalars["ID"]>;
  introduction?: InputMaybe<Scalars["String"]>;
  last_name?: InputMaybe<Scalars["String"]>;
  linkedin_url?: InputMaybe<Scalars["String"]>;
  meta?: InputMaybe<PersonMetaInput>;
  middle_names?: InputMaybe<Scalars["String"]>;
  notification_settings?: InputMaybe<NotificationSettingsInput>;
  person_profile_attributes?: InputMaybe<ProfileInput>;
  /** The base64 encoded version of the profile photo to upload. */
  profile_photo?: InputMaybe<ImageInput>;
  referral_type?: InputMaybe<Scalars["String"]>;
  registered_device_id?: InputMaybe<Scalars["String"]>;
  summary?: InputMaybe<Scalars["String"]>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
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
  saved_filter_id?: InputMaybe<Scalars["ID"]>;
};

export type CurrentPersonMutationQueryCurrentPersonSavedFiltersUpdateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  saved_filter?: InputMaybe<SavedFilterInput>;
};

export type CurrentPersonMutationQueryCurrentPersonUpdateArgs = {
  person?: InputMaybe<CurrentPersonInput>;
};

export type CurrentPersonMutationQueryCurrentPersonUpdateHomeLcArgs = {
  home_lc_id?: InputMaybe<Scalars["ID"]>;
};

export type CurrentPersonMutationQueryDeleteCurrentPersonCvArgs = {
  cv_id?: InputMaybe<Scalars["ID"]>;
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
  model?: InputMaybe<Scalars["String"]>;
};

export type CurrentPersonQueryCurrentPersonProgrammeFeesArgs = {
  managed_companies?: InputMaybe<Scalars["Boolean"]>;
};

export type CurrentPersonQueryCurrentPersonSavedFiltersArgs = {
  model?: InputMaybe<Scalars["String"]>;
};

export type CurrentPersonQueryCurrentPersonSavedFiltersShowArgs = {
  saved_filter_id?: InputMaybe<Scalars["ID"]>;
};

export type CustomStatusInput = {
  name?: InputMaybe<Scalars["String"]>;
  position?: InputMaybe<Scalars["Int"]>;
};

export type CustomStatusType = {
  __typename?: "CustomStatusType";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["Int"]>;
};

/** The connection type for CustomStatusType. */
export type CustomStatusTypeConnection = {
  __typename?: "CustomStatusTypeConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CustomStatusTypeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CustomStatusType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type CustomStatusTypeEdge = {
  __typename?: "CustomStatusTypeEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<CustomStatusType>;
};

export type DateInput = {
  end_date?: InputMaybe<Scalars["DateTime"]>;
  from?: InputMaybe<Scalars["DateTime"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  to?: InputMaybe<Scalars["DateTime"]>;
};

export type DeliverablesInput = {
  delivered_by?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
};

/** EmployeeDetailsType records */
export type EmployeeDetailsType = {
  __typename?: "EmployeeDetailsType";
  organisation_type_id?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
};

export type EmployeeLead = {
  __typename?: "EmployeeLead";
  authority?: Maybe<Scalars["String"]>;
  budget?: Maybe<Scalars["String"]>;
  /** city */
  city?: Maybe<City>;
  comments?: Maybe<CommentConnection>;
  comments_count?: Maybe<Scalars["Int"]>;
  company?: Maybe<Organisation>;
  contact_detail?: Maybe<ContactInfo>;
  created_at?: Maybe<Scalars["DateTime"]>;
  created_via?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  engagements?: Maybe<EngagementConnection>;
  full_name?: Maybe<Scalars["String"]>;
  home_lc?: Maybe<Office>;
  id: Scalars["ID"];
  /** Industry */
  industry?: Maybe<Constant>;
  invitation_sent?: Maybe<Scalars["Boolean"]>;
  job_role?: Maybe<Scalars["String"]>;
  lead_attachments?: Maybe<Array<Maybe<ImageType>>>;
  managers?: Maybe<Array<Maybe<Person>>>;
  need?: Maybe<Scalars["String"]>;
  /** organisation type */
  organisation_type?: Maybe<Constant>;
  organization_name?: Maybe<Scalars["String"]>;
  /** permissions */
  permissions?: Maybe<EmployeeLeadPermissionType>;
  person?: Maybe<Person>;
  person_last_active_at?: Maybe<Scalars["DateTime"]>;
  product_interest?: Maybe<Scalars["Int"]>;
  qualification_score?: Maybe<Scalars["Int"]>;
  referral_type?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  status_last_updated_at?: Maybe<Scalars["DateTime"]>;
  timing?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type EmployeeLeadCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EmployeeLeadEngagementsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EmployeeLeadFilter = {
  authority?: InputMaybe<Scalars["Boolean"]>;
  budget?: InputMaybe<Scalars["Boolean"]>;
  committee_scope?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  created_at?: InputMaybe<DateInput>;
  created_via?: InputMaybe<Scalars["String"]>;
  has_managers?: InputMaybe<Scalars["Boolean"]>;
  home_committee?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  last_active?: InputMaybe<DateInput>;
  managers?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  need?: InputMaybe<Scalars["Boolean"]>;
  organisation_type?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  product_interest?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  q?: InputMaybe<Scalars["String"]>;
  referral_type?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sort?: InputMaybe<EmployeeLeadSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  status_last_updated_at?: InputMaybe<DateInput>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  timing?: InputMaybe<Scalars["Boolean"]>;
  updated_at?: InputMaybe<DateInput>;
};

export type EmployeeLeadInput = {
  authority?: InputMaybe<Scalars["Boolean"]>;
  budget?: InputMaybe<Scalars["Boolean"]>;
  contact_detail_attributes?: InputMaybe<ContactInput>;
  email?: InputMaybe<Scalars["String"]>;
  full_name?: InputMaybe<Scalars["String"]>;
  home_lc_id?: InputMaybe<Scalars["Int"]>;
  industry_id?: InputMaybe<Scalars["Int"]>;
  invitation_sent?: InputMaybe<Scalars["Boolean"]>;
  job_role?: InputMaybe<Scalars["String"]>;
  lead_attachments_file?: InputMaybe<Array<InputMaybe<ImageInput>>>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  need?: InputMaybe<Scalars["Boolean"]>;
  organisation_type_id?: InputMaybe<Scalars["Int"]>;
  organization_name?: InputMaybe<Scalars["String"]>;
  product_interest?: InputMaybe<Scalars["Int"]>;
  referral_type?: InputMaybe<Scalars["String"]>;
  timing?: InputMaybe<Scalars["Boolean"]>;
};

export type EmployeeLeadList = {
  __typename?: "EmployeeLeadList";
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
  employee_lead_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type EmployeeLeadMutationQueryBulkUnassignManagersForEmployeeLeadArgs = {
  employee_lead_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type EmployeeLeadMutationQueryCreateEmployeeLeadArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
};

export type EmployeeLeadMutationQueryEmployeeLeadAttemptedToContactArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryEmployeeLeadConnectedArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryEmployeeLeadContractSentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryEmployeeLeadContractSignedArgs = {
  company_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryEmployeeLeadCreateArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
};

export type EmployeeLeadMutationQueryEmployeeLeadDealLostArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryEmployeeLeadFuturePipelineArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryEmployeeLeadNewLeadArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryEmployeeLeadProposalSentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryEmployeeLeadSendInviteArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryEmployeeLeadUpdateArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryMoveEmployeeLeadToAttemptedToContactArgs =
  {
    id?: InputMaybe<Scalars["ID"]>;
  };

export type EmployeeLeadMutationQueryMoveEmployeeLeadToConnectedArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryMoveEmployeeLeadToContractSentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryMoveEmployeeLeadToContractSignedArgs = {
  company_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryMoveEmployeeLeadToDealLostArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryMoveEmployeeLeadToFuturePipelineArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryMoveEmployeeLeadToNewLeadArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryMoveEmployeeLeadToProposalSentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQuerySendInviteToEmployeeLeadArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadMutationQueryUpdateEmployeeLeadArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadPermissionType = {
  __typename?: "EmployeeLeadPermissionType";
  can_add_engagement?: Maybe<Scalars["Boolean"]>;
  can_move_to_attempted_to_contact?: Maybe<Scalars["Boolean"]>;
  can_move_to_connected?: Maybe<Scalars["Boolean"]>;
  can_move_to_contract_sent?: Maybe<Scalars["Boolean"]>;
  can_move_to_contract_signed?: Maybe<Scalars["Boolean"]>;
  can_move_to_deal_lost?: Maybe<Scalars["Boolean"]>;
  can_move_to_future_pipeline?: Maybe<Scalars["Boolean"]>;
  can_move_to_new_lead?: Maybe<Scalars["Boolean"]>;
  can_move_to_proposal_sent?: Maybe<Scalars["Boolean"]>;
  can_update?: Maybe<Scalars["Boolean"]>;
};

export type EmployeeLeadQuery = {
  employeeLead?: Maybe<EmployeeLead>;
  /** @deprecated Use "employeeLead" field instead. */
  employeeLeadGet?: Maybe<EmployeeLead>;
  employeeLeads?: Maybe<EmployeeLeadList>;
};

export type EmployeeLeadQueryEmployeeLeadArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadQueryEmployeeLeadGetArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type EmployeeLeadQueryEmployeeLeadsArgs = {
  filters?: InputMaybe<EmployeeLeadFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export enum EmployeeLeadSortOption {
  CreatedAt = "created_at",
  CreatedVia = "created_via",
  Email = "email",
  FullName = "full_name",
  HomeLcName = "home_lc_name",
  HomeMcName = "home_mc_name",
  LastActive = "last_active",
  OrganizationName = "organization_name",
  PhoneNumber = "phone_number",
  ProductInterest = "product_interest",
  Qualification = "qualification",
  ReferralType = "referral_type",
  Status = "status",
  UpdatedAt = "updated_at",
}

export type Engagement = {
  __typename?: "Engagement";
  created_at?: Maybe<Scalars["DateTime"]>;
  creator?: Maybe<Person>;
  engagement_date?: Maybe<Scalars["DateTime"]>;
  engagement_type?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  notes?: Maybe<Scalars["String"]>;
  /** permissions */
  permissions?: Maybe<EngagementPermissionType>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

/** The connection type for Engagement. */
export type EngagementConnection = {
  __typename?: "EngagementConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EngagementEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Engagement>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type EngagementEdge = {
  __typename?: "EngagementEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Engagement>;
};

export type EngagementInput = {
  engagement_date?: InputMaybe<Scalars["DateTime"]>;
  engagement_type?: InputMaybe<Scalars["String"]>;
  notes?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
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
  employee_lead_id: Scalars["Int"];
  engagement?: InputMaybe<EngagementInput>;
};

export type EngagementMutationQueryEngagementDeleteArgs = {
  id: Scalars["ID"];
};

export type EngagementMutationQueryEngagementUpdateArgs = {
  engagement?: InputMaybe<EngagementInput>;
  id: Scalars["ID"];
};

export type EngagementPermissionType = {
  __typename?: "EngagementPermissionType";
  can_delete?: Maybe<Scalars["Boolean"]>;
  can_update?: Maybe<Scalars["Boolean"]>;
};

export type EntityGoal = {
  __typename?: "EntityGoal";
  achieved?: Maybe<Scalars["Int"]>;
  exchange_type?: Maybe<Scalars["String"]>;
  goal?: Maybe<Scalars["Int"]>;
  goal_type?: Maybe<Scalars["String"]>;
  office?: Maybe<Office>;
  opportunity_duration_type?: Maybe<OpportunityDurationType>;
  programme?: Maybe<Programme>;
  sub_product_group?: Maybe<Scalars["String"]>;
};

export type EntityPlan = {
  __typename?: "EntityPlan";
  deadline?: Maybe<Scalars["Date"]>;
  file_import?: Maybe<File>;
  office?: Maybe<Office>;
  plan?: Maybe<Plan>;
};

export type EntityPlanQuery = {
  entityPlans?: Maybe<Array<Maybe<EntityPlan>>>;
};

export type EntityPlanQueryEntityPlansArgs = {
  office_id: Scalars["ID"];
  upcoming?: InputMaybe<Scalars["Boolean"]>;
};

export type Event = {
  __typename?: "Event";
  active_registrations_count?: Maybe<Scalars["Int"]>;
  address_detail?: Maybe<AddressInfo>;
  agenda_image?: Maybe<Scalars["String"]>;
  allow_online_payment?: Maybe<Scalars["Boolean"]>;
  comments?: Maybe<CommentConnection>;
  completeness?: Maybe<Scalars["Float"]>;
  confirmed_registration_count?: Maybe<Scalars["Int"]>;
  cover_image?: Maybe<Scalars["String"]>;
  date_published?: Maybe<Scalars["DateTime"]>;
  event_date?: Maybe<Scalars["DateTime"]>;
  favourite?: Maybe<Favourite>;
  id: Scalars["ID"];
  managers?: Maybe<Array<Maybe<Person>>>;
  missing_fields?: Maybe<Array<Maybe<Scalars["String"]>>>;
  office?: Maybe<Office>;
  overview?: Maybe<Scalars["String"]>;
  permissions?: Maybe<EventPermissionType>;
  published_by?: Maybe<Person>;
  sdg_goals?: Maybe<Array<Maybe<Constant>>>;
  status?: Maybe<Scalars["String"]>;
  success_message?: Maybe<Scalars["String"]>;
  tag_lists?: Maybe<TagListConnection>;
  tickets_available?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  todo_type?: Maybe<TodoType>;
  total_ticket_count?: Maybe<Scalars["Int"]>;
  unpublished_by?: Maybe<Person>;
};

export type EventCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EventTag_ListsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EventPermissionType = {
  __typename?: "EventPermissionType";
  can_publish?: Maybe<Scalars["Boolean"]>;
  can_unpublish?: Maybe<Scalars["Boolean"]>;
  can_update?: Maybe<Scalars["Boolean"]>;
};

export enum ExchangeType {
  Incoming = "incoming",
  Outgoing = "outgoing",
}

export type ExpaSettings = {
  __typename?: "ExpaSettings";
  email_notifications?: Maybe<Scalars["Boolean"]>;
  instant_notifications?: Maybe<Scalars["Boolean"]>;
  notification_summaries?: Maybe<Scalars["Boolean"]>;
  notification_time?: Maybe<Scalars["Int"]>;
  notify_on_assignment?: Maybe<Scalars["Boolean"]>;
  notify_on_managed_opportunity_applications?: Maybe<Scalars["Boolean"]>;
  notify_on_managed_person_applications?: Maybe<Scalars["Boolean"]>;
  send_to_aiesec_email?: Maybe<Scalars["Boolean"]>;
};

export type ExpaSettingsInput = {
  email_notifications?: InputMaybe<Scalars["Boolean"]>;
  instant_notifications?: InputMaybe<Scalars["Boolean"]>;
  notification_summaries?: InputMaybe<Scalars["Boolean"]>;
  notification_time?: InputMaybe<Scalars["Int"]>;
  notify_on_assignment?: InputMaybe<Scalars["Boolean"]>;
  notify_on_managed_opportunity_applications?: InputMaybe<Scalars["Boolean"]>;
  notify_on_managed_person_applications?: InputMaybe<Scalars["Boolean"]>;
  send_to_aiesec_email?: InputMaybe<Scalars["Boolean"]>;
};

export enum ExperienceType {
  PartlyRemote = "partly_remote",
  Physical = "physical",
  Remote = "remote",
}

export type Facets = {
  __typename?: "Facets";
  name?: Maybe<Scalars["String"]>;
  terms?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type Favourite = {
  __typename?: "Favourite";
  created_at?: Maybe<Scalars["DateTime"]>;
  favourable_id?: Maybe<Scalars["Int"]>;
  favourable_type?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  person?: Maybe<Person>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type Feature = {
  __typename?: "Feature";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FieldInput = {
  field?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

export type File = {
  __typename?: "File";
  created_at?: Maybe<Scalars["DateTime"]>;
  creator?: Maybe<Person>;
  filename?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type FileImportMutationQuery = {
  /** Upload csv/excel file */
  fileImport?: Maybe<Scalars["String"]>;
};

export type FileImportMutationQueryFileImportArgs = {
  file_input?: InputMaybe<FileInput>;
};

export enum FileImportType {
  EmployeeLead = "employee_lead",
  EntityGoal = "entity_goal",
}

export type FileInput = {
  /** The base64 encoded version of the FileImport attachment to upload or external url. */
  import_file?: InputMaybe<ImageInput>;
  import_type: FileImportType;
  meta?: InputMaybe<Scalars["JSON"]>;
};

export type FindLcQuery = {
  findLc?: Maybe<Office>;
};

export type FindLcQueryFindLcArgs = {
  city_id?: InputMaybe<Scalars["ID"]>;
  city_name?: InputMaybe<Scalars["String"]>;
};

export type FlightDetailsInput = {
  /** Flight booking reminder date */
  flight_booking_reminder_date?: InputMaybe<Scalars["Date"]>;
  /** Onward arrival airport */
  onward_arrival_airport?: InputMaybe<Scalars["String"]>;
  /** Onward time */
  onward_time?: InputMaybe<Scalars["DateTime"]>;
  /** Return departure airport */
  return_departure_airport?: InputMaybe<Scalars["String"]>;
  /** Return time */
  return_time?: InputMaybe<Scalars["DateTime"]>;
};

export type GenerateEmail = {
  __typename?: "GenerateEmail";
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type GlobalPartnerRequestInput = {
  company?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  no_of_opportunities?: InputMaybe<Scalars["Int"]>;
};

export type GlobalPartnerRequestMutationQueryType = {
  /** Create GlobalPartnerRequest */
  createGlobalPartnerRequest?: Maybe<GlobalPartnerRequestType>;
};

export type GlobalPartnerRequestMutationQueryTypeCreateGlobalPartnerRequestArgs =
  {
    global_partner_request?: InputMaybe<GlobalPartnerRequestInput>;
  };

export type GlobalPartnerRequestQuery = {
  /** Get all GlobalPartnerRequests */
  allGlobalPartnerRequests?: Maybe<Array<Maybe<GlobalPartnerRequestType>>>;
};

export type GlobalPartnerRequestType = {
  __typename?: "GlobalPartnerRequestType";
  company?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  no_of_opportunities?: Maybe<Scalars["Int"]>;
};

export type GoalSettingFilter = {
  exchange_type?: InputMaybe<ExchangeType>;
  goal_types?: InputMaybe<Array<GoalType>>;
  office_id?: InputMaybe<Scalars["Int"]>;
  opportunity_duration_type_id?: InputMaybe<Scalars["Int"]>;
  programme_id?: InputMaybe<Scalars["Int"]>;
  sub_product_group?: InputMaybe<SubProductGroup>;
  /** Should be 1st of month to last of month */
  time_period?: InputMaybe<DateInput>;
};

export enum GoalType {
  Accepted = "accepted",
  Applicants = "applicants",
  Approved = "approved",
  Completed = "completed",
  Finished = "finished",
  Realized = "realized",
  SignUps = "sign_ups",
}

export type Image = {
  getImage?: Maybe<ImageType>;
};

export type ImageGetImageArgs = {
  id: Scalars["ID"];
};

export type ImageInput = {
  content?: InputMaybe<Scalars["String"]>;
  filename?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type ImageType = {
  __typename?: "ImageType";
  filename?: Maybe<Scalars["String"]>;
  filesize?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["String"]>;
  /** Image sizes can be like 100x100, 500x500> */
  url?: Maybe<Scalars["String"]>;
};

export type ImageTypeUrlArgs = {
  size?: InputMaybe<Scalars["String"]>;
};

export type InboundEmailInput = {
  content?: InputMaybe<Scalars["String"]>;
};

export type InboundEmailType = {
  __typename?: "InboundEmailType";
  content?: Maybe<Scalars["String"]>;
  from?: Maybe<Person>;
  id?: Maybe<Scalars["ID"]>;
  inboundable_id?: Maybe<Scalars["Int"]>;
  inboundable_type?: Maybe<Scalars["String"]>;
  to?: Maybe<Person>;
};

export type IncomingProgrammeFeeInput = {
  programme_fee_max?: InputMaybe<Scalars["Int"]>;
  programme_fee_min?: InputMaybe<Scalars["Int"]>;
};

/** InterviewDetailsType records */
export type InterviewDetailsType = {
  __typename?: "InterviewDetailsType";
  aiesec_to_conduct_interview?: Maybe<Scalars["Boolean"]>;
  deadline?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  interview_platform_url?: Maybe<Scalars["String"]>;
  maximum_video_duration?: Maybe<Scalars["Int"]>;
  mode?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  video_assessment_answer?: Maybe<Scalars["String"]>;
};

export type InterviewSlot = {
  __typename?: "InterviewSlot";
  accepted?: Maybe<Scalars["Boolean"]>;
  /** Attendee Emails */
  attendee_emails?: Maybe<Array<Maybe<Attendee>>>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  opportunity_application_id?: Maybe<Scalars["Int"]>;
  opportunity_id?: Maybe<Scalars["Int"]>;
  /** Person details */
  person?: Maybe<Person>;
  timeslot?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type InterviewSlotInput = {
  timeslot?: InputMaybe<Scalars["Date"]>;
};

export type Invitation = {
  __typename?: "Invitation";
  id: Scalars["ID"];
  person?: Maybe<Person>;
};

/** An input object representing arguments for a Person */
export type InvitePersonInput = {
  email?: InputMaybe<Scalars["String"]>;
  first_name?: InputMaybe<Scalars["String"]>;
  home_lc_id?: InputMaybe<Scalars["ID"]>;
  last_name?: InputMaybe<Scalars["String"]>;
};

export type InvoiceInput = {
  branch_id?: InputMaybe<Scalars["Int"]>;
  due_date?: InputMaybe<Scalars["Date"]>;
  opportunity_application_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  payee_name?: InputMaybe<Scalars["String"]>;
  payment_method?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
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
  id: Scalars["ID"];
};

export type InvoiceMutationQueryInvoiceApproveCashPaymentArgs = {
  id: Scalars["ID"];
};

export type InvoiceMutationQueryInvoicePayByCashArgs = {
  id: Scalars["ID"];
};

export type InvoiceMutationQueryInvoiceTransactionCreateArgs = {
  id: Scalars["ID"];
};

export type InvoiceMutationQueryUpdateInvoiceArgs = {
  id: Scalars["ID"];
  invoice?: InputMaybe<InvoiceInput>;
};

export type InvoiceMutationQueryUpdatePaymentInvoiceArgs = {
  id: Scalars["ID"];
  invoice?: InputMaybe<InvoiceInput>;
};

export type InvoiceQuery = {
  /** Mark as Paid */
  getInvoice?: Maybe<InvoiceType>;
};

export type InvoiceQueryGetInvoiceArgs = {
  id: Scalars["ID"];
};

export type InvoiceType = {
  __typename?: "InvoiceType";
  attachment_file_name?: Maybe<Scalars["String"]>;
  branch?: Maybe<Branch>;
  cash_payment_approved_at?: Maybe<Scalars["DateTime"]>;
  cash_payment_approved_by?: Maybe<Person>;
  created_at?: Maybe<Scalars["DateTime"]>;
  due_date?: Maybe<Scalars["Date"]>;
  id?: Maybe<Scalars["ID"]>;
  opportunity_applications?: Maybe<Array<Maybe<OpportunityApplication>>>;
  paid_at?: Maybe<Scalars["DateTime"]>;
  paid_by?: Maybe<Person>;
  payee_name?: Maybe<Scalars["String"]>;
  payment_details?: Maybe<Scalars["JSON"]>;
  payment_method?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  /** url */
  url?: Maybe<Scalars["String"]>;
};

export type InvoiceTypeUrlArgs = {
  size?: InputMaybe<Scalars["String"]>;
};

/** The connection type for InvoiceType. */
export type InvoiceTypeConnection = {
  __typename?: "InvoiceTypeConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InvoiceTypeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<InvoiceType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type InvoiceTypeEdge = {
  __typename?: "InvoiceTypeEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<InvoiceType>;
};

export type LcAlignment = {
  __typename?: "LcAlignment";
  alignment_type?: Maybe<AlignmentTypes>;
  auto_assignments?: Maybe<PersonConnection>;
  id: Scalars["ID"];
  keywords?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  lc?: Maybe<Office>;
  mc?: Maybe<Office>;
};

export type LcAlignmentAuto_AssignmentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type LcAlignmentInput = {
  keywords?: InputMaybe<Scalars["String"]>;
  label?: InputMaybe<Scalars["String"]>;
  lc_id?: InputMaybe<Scalars["String"]>;
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
  id: Scalars["ID"];
};

export type LcAlignmentsMutationQueryTypeAddLcAlignmentArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  lc_alignment?: InputMaybe<LcAlignmentInput>;
  office_id: Scalars["ID"];
};

export type LcAlignmentsMutationQueryTypeAddSignupQuestionsArgs = {
  id: Scalars["ID"];
  questions?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type LcAlignmentsMutationQueryTypeDeleteLcAlignmentArgs = {
  id: Scalars["ID"];
};

export type LcAlignmentsMutationQueryTypeUpdateLcAlignmentArgs = {
  id: Scalars["ID"];
  lc_alignment?: InputMaybe<LcAlignmentInput>;
};

export type LcAlignmentsMutationQueryTypeUpdateLcAlignmentLabelArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  label: Scalars["String"];
  office_id: Scalars["ID"];
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
  id: Scalars["ID"];
};

export type LcAlignmentsQueryTypeLcAlignmentArgs = {
  id: Scalars["ID"];
};

export type LcAlignmentsQueryTypeLcAlignmentsArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  id: Scalars["ID"];
};

export type LcAlignmentsQueryTypeLcAlignmentsListArgs = {
  q: Scalars["String"];
};

export type LcAlignmentsQueryTypeSignupQuestionsArgs = {
  id: Scalars["ID"];
};

export type LdaQuery = {
  /** Return randomized LDA survey */
  ldaSurvey?: Maybe<LdaResponse>;
};

export type LdaQueryLdaSurveyArgs = {
  lda_survey_id: Scalars["String"];
};

export type LdaResponse = {
  __typename?: "LdaResponse";
  created_at?: Maybe<Scalars["DateTime"]>;
  lda_survey_id?: Maybe<Scalars["String"]>;
  ldm_type?: Maybe<Scalars["String"]>;
  questions?: Maybe<Array<SurveyQuestion>>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type LdaResponseInput = {
  /** Answer value for the question. Must be between 1 and 8 */
  answer: Scalars["Int"];
  /** Question id */
  question_id: Scalars["ID"];
};

export type LdaResponseMutationQuery = {
  /** Post responses to LDA questions */
  ldaResponse?: Maybe<LdaResponse>;
};

export type LdaResponseMutationQueryLdaResponseArgs = {
  aiesec_contribution?: InputMaybe<Scalars["Int"]>;
  lda_survey_id: Scalars["ID"];
  responses: Array<InputMaybe<LdaResponseInput>>;
};

export type LdmQuery = {
  allSurvey?: Maybe<Array<Maybe<Survey>>>;
  ldmReport?: Maybe<Scalars["JSON"]>;
  ldmSurvey?: Maybe<Array<Maybe<SurveyQuestion>>>;
};

export type LdmQueryLdmReportArgs = {
  opportunity_id?: InputMaybe<Scalars["ID"]>;
  person_id?: InputMaybe<Scalars["ID"]>;
};

export type LdmQueryLdmSurveyArgs = {
  opportunity_application_id?: InputMaybe<Scalars["ID"]>;
  position_id?: InputMaybe<Scalars["ID"]>;
};

export type LdmResponse = {
  __typename?: "LdmResponse";
  available_from?: Maybe<Scalars["String"]>;
  available_until?: Maybe<Scalars["String"]>;
  branch_id?: Maybe<Scalars["ID"]>;
  created_at?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  lda_survey_id?: Maybe<Scalars["String"]>;
  ldm_report?: Maybe<Scalars["JSON"]>;
  ldm_type?: Maybe<Scalars["String"]>;
  office_id?: Maybe<Scalars["ID"]>;
  opportunity?: Maybe<Opportunity>;
  opportunity_application_id?: Maybe<Scalars["ID"]>;
  opportunity_id?: Maybe<Scalars["ID"]>;
  person_id?: Maybe<Scalars["ID"]>;
  programme_id?: Maybe<Scalars["ID"]>;
};

export type LdmResponseInput = {
  answer?: InputMaybe<Scalars["String"]>;
  question_id?: InputMaybe<Scalars["Int"]>;
};

export type LdmResponseMutationQueryType = {
  /** Create Ldm Response */
  ldmResponse?: Maybe<LdmResponse>;
};

export type LdmResponseMutationQueryTypeLdmResponseArgs = {
  aiesec_contribution?: InputMaybe<Scalars["Int"]>;
  opportunity_application_id?: InputMaybe<Scalars["Int"]>;
  position_id?: InputMaybe<Scalars["Int"]>;
  responses?: InputMaybe<Array<InputMaybe<LdmResponseInput>>>;
};

export type LegalInfoInput = {
  general_info?: InputMaybe<Scalars["String"]>;
  health_insurance_info?: InputMaybe<Scalars["String"]>;
  visa_duration?: InputMaybe<Scalars["String"]>;
  visa_link?: InputMaybe<Scalars["String"]>;
  visa_type?: InputMaybe<Scalars["String"]>;
  visa_work_permit_info?: InputMaybe<Scalars["String"]>;
};

export type LegalInfoType = {
  __typename?: "LegalInfoType";
  general_info?: Maybe<Scalars["String"]>;
  health_insurance_info?: Maybe<Scalars["String"]>;
  visa_duration?: Maybe<Scalars["String"]>;
  visa_link?: Maybe<Scalars["String"]>;
  visa_type?: Maybe<Scalars["String"]>;
  visa_work_permit_info?: Maybe<Scalars["String"]>;
};

export type List = {
  allCurrencies: Array<Maybe<Currency>>;
  allSdgTargets?: Maybe<Array<Maybe<SdgTarget>>>;
  measureOfImpacts?: Maybe<Array<Maybe<Constant>>>;
};

export type ListAllSdgTargetsArgs = {
  sdg_goal_id?: InputMaybe<Scalars["ID"]>;
};

export type ListMeasureOfImpactsArgs = {
  sdg_goal_id: Scalars["ID"];
};

/** LogisticInfoType records */
export type LogisticInfoType = {
  __typename?: "LogisticInfoType";
  accommodation?: Maybe<Scalars["String"]>;
  accommodation_additional_info?: Maybe<Scalars["String"]>;
  accommodation_covered?: Maybe<Scalars["String"]>;
  accommodation_provided?: Maybe<Scalars["String"]>;
  computer_provided?: Maybe<Scalars["String"]>;
  food?: Maybe<Scalars["String"]>;
  food_covered?: Maybe<Scalars["String"]>;
  food_provided?: Maybe<Scalars["String"]>;
  food_weekends?: Maybe<Scalars["String"]>;
  no_of_meals?: Maybe<Scalars["String"]>;
  transportation?: Maybe<Scalars["String"]>;
  transportation_additional_info?: Maybe<Scalars["String"]>;
  transportation_covered?: Maybe<Scalars["String"]>;
  transportation_provided?: Maybe<Scalars["String"]>;
  transportation_weekends?: Maybe<Scalars["String"]>;
};

export type LogisticsInfoInput = {
  accommodation?: InputMaybe<Scalars["Boolean"]>;
  accommodation_additional_info?: InputMaybe<Scalars["String"]>;
  accommodation_covered?: InputMaybe<Scalars["String"]>;
  accommodation_provided?: InputMaybe<Scalars["String"]>;
  computer_provided?: InputMaybe<Scalars["String"]>;
  food?: InputMaybe<Scalars["Boolean"]>;
  food_covered?: InputMaybe<Scalars["String"]>;
  food_provided?: InputMaybe<Scalars["String"]>;
  food_weekends?: InputMaybe<Scalars["Boolean"]>;
  no_of_meals?: InputMaybe<Scalars["Int"]>;
  transportation?: InputMaybe<Scalars["Boolean"]>;
  transportation_additional_info?: InputMaybe<Scalars["String"]>;
  transportation_covered?: InputMaybe<Scalars["String"]>;
  transportation_provided?: InputMaybe<Scalars["String"]>;
  transportation_weekends?: InputMaybe<Scalars["Boolean"]>;
};

export type MailTemplate = {
  __typename?: "MailTemplate";
  body?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  mail_template_type?: Maybe<Constant>;
  name?: Maybe<Scalars["String"]>;
  office?: Maybe<Office>;
  programme?: Maybe<Programme>;
  status?: Maybe<Scalars["String"]>;
  subject?: Maybe<Scalars["String"]>;
};

export type MailTemplateDeliverabilityReport = {
  __typename?: "MailTemplateDeliverabilityReport";
  /** report */
  report?: Maybe<Scalars["JSON"]>;
};

export type MailTemplateInput = {
  mail_template_type_id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  office_id: Scalars["ID"];
  programme_id?: InputMaybe<Scalars["ID"]>;
  subject?: InputMaybe<Scalars["String"]>;
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
  content?: InputMaybe<Scalars["String"]>;
  mail_template?: InputMaybe<MailTemplateInput>;
};

export type MailTemplateMutationQueryTypeDeleteMailTemplateArgs = {
  id: Scalars["ID"];
};

export type MailTemplateMutationQueryTypePublishMailTemplateArgs = {
  id: Scalars["ID"];
};

export type MailTemplateMutationQueryTypeSendTestMailTemplateArgs = {
  id: Scalars["ID"];
};

export type MailTemplateMutationQueryTypeUpdateMailTemplateArgs = {
  content?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  mail_template?: InputMaybe<MailTemplateInput>;
};

export type MailTemplateQueryType = {
  deliverabilityReport?: Maybe<MailTemplateDeliverabilityReport>;
  getMailTemplate?: Maybe<MailTemplate>;
  mailTemplates?: Maybe<Array<Maybe<MailTemplate>>>;
};

export type MailTemplateQueryTypeDeliverabilityReportArgs = {
  mail_template_type_name: Scalars["String"];
  office_id?: InputMaybe<Scalars["ID"]>;
  programme_id?: InputMaybe<Scalars["ID"]>;
};

export type MailTemplateQueryTypeGetMailTemplateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MailTemplateQueryTypeMailTemplatesArgs = {
  mail_template_type_filter?: InputMaybe<Scalars["ID"]>;
  office_filter?: InputMaybe<Scalars["ID"]>;
  programme_filter?: InputMaybe<Scalars["ID"]>;
  status_filter?: InputMaybe<Scalars["String"]>;
};

export type Manager = {
  __typename?: "Manager";
  accepted?: Maybe<Scalars["Boolean"]>;
  accepted_reason?: Maybe<Scalars["String"]>;
  aiesec_email?: Maybe<Scalars["String"]>;
  contacted_at?: Maybe<Scalars["String"]>;
  contacted_by?: Maybe<Scalars["String"]>;
  country_code?: Maybe<Scalars["String"]>;
  cover_photo?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["String"]>;
  dob?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  first_name?: Maybe<Scalars["String"]>;
  full_name?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  interviewed?: Maybe<Scalars["String"]>;
  last_name?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  nps_score?: Maybe<Scalars["String"]>;
  /** permissions */
  permissions?: Maybe<PersonPermissionType>;
  phone?: Maybe<Scalars["String"]>;
  profile_photo?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["String"]>;
};

export type McFeature = {
  __typename?: "McFeature";
  active?: Maybe<Scalars["Boolean"]>;
  feature?: Maybe<Feature>;
  id?: Maybe<Scalars["ID"]>;
  option?: Maybe<Scalars["String"]>;
};

export type McFeatureQuery = {
  /** List all Features for the geocoded location */
  mcFeatures?: Maybe<Array<Maybe<McFeature>>>;
};

export type McFeatureQueryMcFeaturesArgs = {
  mc_id?: InputMaybe<Scalars["ID"]>;
};

export type MemberLead = {
  __typename?: "MemberLead";
  academic_level?: Maybe<Constant>;
  allow_phone_communication: Scalars["Boolean"];
  backgrounds?: Maybe<Array<ConstantMap>>;
  checklist_response?: Maybe<ChecklistResponse>;
  comments?: Maybe<CommentConnection>;
  comments_count?: Maybe<Scalars["Int"]>;
  country_code?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  created_via?: Maybe<Scalars["String"]>;
  creator?: Maybe<Person>;
  date_moved_to_accepted?: Maybe<Scalars["DateTime"]>;
  date_moved_to_contacted?: Maybe<Scalars["DateTime"]>;
  date_moved_to_in_process?: Maybe<Scalars["DateTime"]>;
  date_moved_to_rejected?: Maybe<Scalars["DateTime"]>;
  date_of_birth?: Maybe<Scalars["Date"]>;
  email?: Maybe<Scalars["String"]>;
  employment_status?: Maybe<Constant>;
  home_lc?: Maybe<Office>;
  id: Scalars["ID"];
  lc_alignment?: Maybe<LcAlignment>;
  lead_name?: Maybe<Scalars["String"]>;
  managers?: Maybe<Array<Person>>;
  motivation_reason?: Maybe<Constant>;
  moved_to_accepted_by?: Maybe<Person>;
  moved_to_contacted_by?: Maybe<Person>;
  moved_to_in_process_by?: Maybe<Person>;
  moved_to_rejected_by?: Maybe<Person>;
  /** permissions */
  permissions?: Maybe<MemberLeadPermissionType>;
  person?: Maybe<Person>;
  phone?: Maybe<Scalars["String"]>;
  preferred_mode_of_contact?: Maybe<Constant>;
  referral_type?: Maybe<Constant>;
  status?: Maybe<Scalars["String"]>;
  status_last_updated_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type MemberLeadCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type MemberLeadFilter = {
  academic_level_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  backgrounds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  created_at?: InputMaybe<DateInput>;
  created_via?: InputMaybe<Scalars["String"]>;
  date_of_birth?: InputMaybe<DateInput>;
  employment_status_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  has_managers?: InputMaybe<Scalars["Boolean"]>;
  home_committee?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lc_alignment_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lead_name?: InputMaybe<Scalars["String"]>;
  managers?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  motivation_reason_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  preferred_mode_of_contact_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  q?: InputMaybe<Scalars["String"]>;
  referral_type_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sort?: InputMaybe<MemberLeadSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  status_last_updated_at?: InputMaybe<DateInput>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  updated_at?: InputMaybe<DateInput>;
};

export type MemberLeadInput = {
  academic_level_id?: InputMaybe<Scalars["Int"]>;
  alignment_id?: InputMaybe<Scalars["Int"]>;
  allow_phone_communication?: InputMaybe<Scalars["Boolean"]>;
  backgrounds?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  country_code?: InputMaybe<Scalars["String"]>;
  date_of_birth?: InputMaybe<Scalars["Date"]>;
  email?: InputMaybe<Scalars["String"]>;
  employment_status_id?: InputMaybe<Scalars["Int"]>;
  home_lc_id?: InputMaybe<Scalars["Int"]>;
  lead_name?: InputMaybe<Scalars["String"]>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  motivation_reason_id?: InputMaybe<Scalars["Int"]>;
  phone?: InputMaybe<Scalars["String"]>;
  preferred_mode_of_contact_id?: InputMaybe<Scalars["Int"]>;
  referral_type_id?: InputMaybe<Scalars["Int"]>;
};

export type MemberLeadList = {
  __typename?: "MemberLeadList";
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
  id: Scalars["ID"];
};

export type MemberLeadMutationQueryContactMemberLeadArgs = {
  id: Scalars["ID"];
};

export type MemberLeadMutationQueryCreateChecklistResponseMemberLeadArgs = {
  answers: Array<InputMaybe<Scalars["JSON"]>>;
  id: Scalars["ID"];
  survey_id: Scalars["ID"];
};

export type MemberLeadMutationQueryCreateMemberLeadArgs = {
  member_lead?: InputMaybe<MemberLeadInput>;
};

export type MemberLeadMutationQueryMemberLeadAcceptArgs = {
  id: Scalars["ID"];
};

export type MemberLeadMutationQueryMemberLeadChecklistResponseCreateArgs = {
  answers: Array<InputMaybe<Scalars["JSON"]>>;
  id: Scalars["ID"];
  survey_id: Scalars["ID"];
};

export type MemberLeadMutationQueryMemberLeadContactArgs = {
  id: Scalars["ID"];
};

export type MemberLeadMutationQueryMemberLeadCreateArgs = {
  member_lead?: InputMaybe<MemberLeadInput>;
};

export type MemberLeadMutationQueryMemberLeadProcessArgs = {
  id: Scalars["ID"];
};

export type MemberLeadMutationQueryMemberLeadRejectArgs = {
  id: Scalars["ID"];
};

export type MemberLeadMutationQueryMemberLeadUpdateArgs = {
  id: Scalars["ID"];
  member_lead?: InputMaybe<MemberLeadInput>;
};

export type MemberLeadMutationQueryProcessMemberLeadArgs = {
  id: Scalars["ID"];
};

export type MemberLeadMutationQueryRejectMemberLeadArgs = {
  id: Scalars["ID"];
};

export type MemberLeadMutationQueryUpdateMemberLeadArgs = {
  id: Scalars["ID"];
  member_lead?: InputMaybe<MemberLeadInput>;
};

export type MemberLeadPermissionType = {
  __typename?: "MemberLeadPermissionType";
  can_fill_checklist?: Maybe<Scalars["Boolean"]>;
  can_move_to_accept?: Maybe<Scalars["Boolean"]>;
  can_move_to_contact?: Maybe<Scalars["Boolean"]>;
  can_move_to_in_process?: Maybe<Scalars["Boolean"]>;
  can_move_to_reject?: Maybe<Scalars["Boolean"]>;
};

export type MemberLeadQuery = {
  /** Check if Member lead exists */
  checkIfMemberLeadExists?: Maybe<Scalars["String"]>;
  memberLead?: Maybe<MemberLead>;
  /**
   * Check if Member lead exists
   * @deprecated Use "checkIfMemberLeadExists" field instead.
   */
  memberLeadCheckIfExists?: Maybe<Scalars["String"]>;
  /** @deprecated Use "memberLead" field instead. */
  memberLeadGet?: Maybe<MemberLead>;
  memberLeads?: Maybe<MemberLeadList>;
};

export type MemberLeadQueryCheckIfMemberLeadExistsArgs = {
  email: Scalars["String"];
};

export type MemberLeadQueryMemberLeadArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MemberLeadQueryMemberLeadCheckIfExistsArgs = {
  email: Scalars["String"];
};

export type MemberLeadQueryMemberLeadGetArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MemberLeadQueryMemberLeadsArgs = {
  filters?: InputMaybe<MemberLeadFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export enum MemberLeadSortOption {
  AcademicLevelName = "academic_level_name",
  CreatedAt = "created_at",
  CreatedVia = "created_via",
  DateOfBirth = "date_of_birth",
  EmploymentStatusName = "employment_status_name",
  HomeMcName = "home_mc_name",
  LcAlignmentName = "lc_alignment_name",
  LeadName = "lead_name",
  PreferredModeOfContactName = "preferred_mode_of_contact_name",
  ReferralTypeName = "referral_type_name",
  Status = "status",
  UpdatedAt = "updated_at",
}

export type MemberPosition = {
  __typename?: "MemberPosition";
  committee_department?: Maybe<CommitteeDepartmentType>;
  created_at?: Maybe<Scalars["DateTime"]>;
  duration?: Maybe<Constant>;
  end_date?: Maybe<Scalars["Date"]>;
  exit_reason?: Maybe<Constant>;
  focus_products?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  function?: Maybe<Constant>;
  id?: Maybe<Scalars["Int"]>;
  is_ixp?: Maybe<Scalars["Boolean"]>;
  ixp_products?: Maybe<Array<Programme>>;
  lda_links?: Maybe<Scalars["JSON"]>;
  ldm_report?: Maybe<Scalars["JSON"]>;
  membership_lps?: Maybe<SurveyResponse>;
  no_of_ixps?: Maybe<Scalars["Int"]>;
  office?: Maybe<Office>;
  other_exit_reason?: Maybe<Scalars["String"]>;
  permissions?: Maybe<MemberPositionPermission>;
  person?: Maybe<Person>;
  reporters?: Maybe<Array<MemberPosition>>;
  reports_to?: Maybe<Person>;
  reports_to_position_id?: Maybe<Scalars["Int"]>;
  role?: Maybe<Constant>;
  start_date?: Maybe<Scalars["Date"]>;
  status?: Maybe<Scalars["String"]>;
  team_id?: Maybe<Scalars["Int"]>;
  term?: Maybe<Constant>;
  terminated_at?: Maybe<Scalars["DateTime"]>;
  terminated_by?: Maybe<Person>;
  title?: Maybe<Scalars["String"]>;
  vp_id?: Maybe<Scalars["Int"]>;
};

/** The connection type for MemberPosition. */
export type MemberPositionConnection = {
  __typename?: "MemberPositionConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MemberPositionEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MemberPosition>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type MemberPositionEdge = {
  __typename?: "MemberPositionEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<MemberPosition>;
};

export type MemberPositionFilter = {
  age?: InputMaybe<RangeInput>;
  background_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  department_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  duration_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  end_date?: InputMaybe<DateInput>;
  exit_reason_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  function_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  gender?: InputMaybe<Scalars["String"]>;
  is_ixp?: InputMaybe<Scalars["Boolean"]>;
  ixp_products?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  language_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  no_of_ixps?: InputMaybe<RangeInput>;
  office_id?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  /** id of the person to be filtered */
  reports_to?: InputMaybe<Scalars["Int"]>;
  role_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  skill_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  start_date?: InputMaybe<DateInput>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  study_level_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MemberPositionInput = {
  committee_department_id?: InputMaybe<Scalars["Int"]>;
  committee_department_name?: InputMaybe<Scalars["String"]>;
  duration_id?: InputMaybe<Scalars["Int"]>;
  end_date?: InputMaybe<Scalars["Date"]>;
  focus_products?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  function_id?: InputMaybe<Scalars["Int"]>;
  invite_person?: InputMaybe<InvitePersonInput>;
  office_id?: InputMaybe<Scalars["Int"]>;
  person_email?: InputMaybe<Scalars["String"]>;
  reports_to_position_id?: InputMaybe<Scalars["Int"]>;
  role_id?: InputMaybe<Scalars["Int"]>;
  start_date?: InputMaybe<Scalars["Date"]>;
  team_id?: InputMaybe<Scalars["Int"]>;
  term_id?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
  vp_id?: InputMaybe<Scalars["Int"]>;
};

export type MemberPositionList = {
  __typename?: "MemberPositionList";
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
  exit_reason_id: Scalars["Int"];
  id: Scalars["Int"];
  other_exit_reason?: InputMaybe<Scalars["String"]>;
};

export type MemberPositionMutationQueryMemberPositionUpdateArgs = {
  id: Scalars["Int"];
  member_position: MemberPositionInput;
};

export type MemberPositionMutationQueryTerminateMemberPositionArgs = {
  exit_reason_id: Scalars["Int"];
  id: Scalars["Int"];
  other_exit_reason?: InputMaybe<Scalars["String"]>;
};

export type MemberPositionMutationQueryUpdateMemberPositionArgs = {
  id: Scalars["Int"];
  member_position: UpdateMemberPositionInput;
};

export type MemberPositionPermission = {
  __typename?: "MemberPositionPermission";
  can_terminate?: Maybe<Scalars["Boolean"]>;
  can_update?: Maybe<Scalars["Boolean"]>;
  can_view_lda?: Maybe<Scalars["Boolean"]>;
};

export type MemberPositionQuery = {
  downloadMemberPositions?: Maybe<Scalars["String"]>;
  memberPosition?: Maybe<MemberPosition>;
  memberPositions?: Maybe<MemberPositionList>;
  /** @deprecated Use "downloadMemberPosition" field instead. */
  memberPositionsDownload?: Maybe<Scalars["String"]>;
};

export type MemberPositionQueryDownloadMemberPositionsArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<MemberPositionFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type MemberPositionQueryMemberPositionArgs = {
  id: Scalars["Int"];
};

export type MemberPositionQueryMemberPositionsArgs = {
  filters?: InputMaybe<MemberPositionFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type MemberPositionQueryMemberPositionsDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<MemberPositionFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type MutationType = AttachmentMutationQuery &
  BranchEmployeeMutationQuery &
  BranchMutationQuery &
  CampaignMutationQuery &
  CityLcMutationQuery &
  CityMutationQuery &
  ClientDataMutationQuery &
  CommentMutationQuery &
  CommitteeDepartmentMutationQuery &
  CommitteeMutationQuery &
  CommitteeTargetMutationQuery &
  ContentSectionMutationQuery &
  CurrentPersonMutationQuery &
  EmployeeLeadMutationQuery &
  EngagementMutationQuery &
  FileImportMutationQuery &
  GlobalPartnerRequestMutationQueryType &
  InvoiceMutationQuery &
  LcAlignmentsMutationQueryType &
  LdaResponseMutationQuery &
  LdmResponseMutationQueryType &
  MailTemplateMutationQueryType &
  MemberLeadMutationQuery &
  MemberPositionMutationQuery &
  NationalPartnerMutationQuery &
  NotificationMutationQuery &
  OpportunityApplicationMutationQuery &
  OpportunityMutationQuery &
  OpportunityPotentialCandidateQueryType &
  OrganisationMutationQuery &
  OrganizationDevelopmentMutationQuery &
  PageComponentMutationQuery &
  PageMutationQuery &
  PartnerSignupMutationQuery &
  PersonMutationQuery &
  PlanMutationQuery &
  PlatformNpsResponseMutationQueryType &
  PositionMutationQuery &
  ProgrammeFeeMutationQuery &
  ProgrammeManagerMutationQuery &
  QuestionnaireMutationQuery &
  SlotMutationQuery &
  StandardsSurveyMutationQuery &
  SuggestedCountryMutationQuery &
  SurveyMutationQuery &
  TagListMutationQueryType &
  TeamMutationQuery &
  TermMutationQuery &
  TimelineMutationQuery &
  TodoMutationQuery & {
    __typename?: "MutationType";
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
    archiveCommitteeDepartment?: Maybe<CommitteeDepartmentType>;
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
    /** Create Content Section */
    createContentSection?: Maybe<ContentSection>;
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
    favouriteOpportunity?: Maybe<Opportunity>;
    favouritePage?: Maybe<PageType>;
    /** Upload csv/excel file */
    fileImport?: Maybe<Scalars["String"]>;
    /** Update application Nps Response */
    fillNpsResponse?: Maybe<SurveyResponse>;
    /** Update Organisation */
    followupOrganisation?: Maybe<Organisation>;
    freezeUnfreezeCommittee?: Maybe<Office>;
    generateCv?: Maybe<Person>;
    /** Generate email */
    generateEmail?: Maybe<Scalars["String"]>;
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
    surveyAnswer?: Maybe<Scalars["JSON"]>;
    tagListUpdate?: Maybe<TagList>;
    terminateMemberPosition?: Maybe<MemberPosition>;
    /** Testimonial Opportunity Application */
    testimonialApplication?: Maybe<OpportunityApplication>;
    /** Unarchive an opportunity */
    unarchiveOpportunity?: Maybe<Opportunity>;
    unfavouriteOpportunity?: Maybe<Opportunity>;
    unfavouritePage?: Maybe<PageType>;
    unmarkOpportunityRemote?: Maybe<Opportunity>;
    unpublishOpportunity?: Maybe<Opportunity>;
    /** Unreject Opportunity Application */
    unrejectApplication?: Maybe<OpportunityApplication>;
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
    /** Check username is availale to create Google account */
    validateAiesecEmailUsername?: Maybe<ValidateAiesecEmailUsernameResponse>;
    /** Bulk Create Weekly Activity for opportunity */
    weeklyActivitiesBulkCreate?: Maybe<Array<Maybe<WeeklyActivity>>>;
    /** Bulk Delete Weekly Activity */
    weeklyActivitiesBulkDelete?: Maybe<Array<Maybe<WeeklyActivity>>>;
    /** Withdraw Opportunity Application */
    withdrawApplication?: Maybe<OpportunityApplication>;
  };

export type MutationTypeAcceptMemberLeadArgs = {
  id: Scalars["ID"];
};

export type MutationTypeActivateCampaignArgs = {
  id: Scalars["ID"];
};

export type MutationTypeAddAutoAssignmentArgs = {
  auto_assignment?: InputMaybe<Array<InputMaybe<AutoAssignmentInput>>>;
  id: Scalars["ID"];
};

export type MutationTypeAddContractProgrammeFeeArgs = {
  id: Scalars["ID"];
  programme_fee?: InputMaybe<ProgrammeFeeInput>;
};

export type MutationTypeAddCurrentPersonCvArgs = {
  cv?: InputMaybe<ImageInput>;
};

export type MutationTypeAddLcAlignmentArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  lc_alignment?: InputMaybe<LcAlignmentInput>;
  office_id: Scalars["ID"];
};

export type MutationTypeAddOpportunityQuestionArgs = {
  opportunity_id?: InputMaybe<Scalars["ID"]>;
  opportunity_question?: InputMaybe<OpportunityQuestionInput>;
};

export type MutationTypeAddQuestionArgs = {
  question?: InputMaybe<QuestionInput>;
  questionnaire_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeAddSelectionProcessArgs = {
  opportunity_id: Scalars["ID"];
  selection_process?: InputMaybe<SelectionProcessInput>;
};

export type MutationTypeAddSignupQuestionsArgs = {
  id: Scalars["ID"];
  questions?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationTypeAddTodoToGoalArgs = {
  goal_id: Scalars["ID"];
  todo?: InputMaybe<TodoInput>;
};

export type MutationTypeAnApplicationArgs = {
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};

export type MutationTypeApplicationBulkMessageArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  text?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeApplicationExtendExperienceArgs = {
  experience_end_date: Scalars["DateTime"];
  id: Scalars["ID"];
};

export type MutationTypeApplicationExtendRemoteExperienceArgs = {
  id: Scalars["ID"];
  remote_end_date: Scalars["DateTime"];
};

export type MutationTypeApplicationQuestionnaireUpdateArgs = {
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<OpportunityApplicationQuestionnaireInput>;
};

export type MutationTypeApplicationScorecardAttributeDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationTypeApproveApplicationArgs = {
  id: Scalars["ID"];
};

export type MutationTypeApproveBranchArgs = {
  id: Scalars["ID"];
};

export type MutationTypeApproveBranchEmployeeArgs = {
  id: Scalars["ID"];
};

export type MutationTypeApproveOrganisationArgs = {
  id: Scalars["ID"];
};

export type MutationTypeArchiveCommitteeDepartmentArgs = {
  id: Scalars["ID"];
};

export type MutationTypeArchiveOrganisationArgs = {
  id: Scalars["ID"];
};

export type MutationTypeArchivePersonArgs = {
  id: Scalars["ID"];
};

export type MutationTypeAssignProgrammeManagerArgs = {
  id: Scalars["ID"];
  person_id?: InputMaybe<Scalars["Int"]>;
};

export type MutationTypeAssignQuestionnaireArgs = {
  id: Scalars["ID"];
  questionnaire_id: Scalars["ID"];
};

export type MutationTypeBranchApproveArgs = {
  id: Scalars["ID"];
};

export type MutationTypeBranchContractsArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  programme_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeBranchDenyArgs = {
  id: Scalars["ID"];
};

export type MutationTypeBranchEmployeeApproveArgs = {
  id: Scalars["ID"];
};

export type MutationTypeBranchEmployeeCreateArgs = {
  branch_id?: InputMaybe<Scalars["Int"]>;
  person_id?: InputMaybe<Scalars["Int"]>;
};

export type MutationTypeBranchEmployeeDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationTypeBranchEmployeeRejectArgs = {
  id: Scalars["ID"];
};

export type MutationTypeBranchEmployeeUpdateArgs = {
  branch_employee?: InputMaybe<BranchEmployeeInput>;
  id: Scalars["ID"];
};

export type MutationTypeBreakApprovedApplicationArgs = {
  id: Scalars["ID"];
};

export type MutationTypeBreakRealizationApplicationArgs = {
  id: Scalars["ID"];
};

export type MutationTypeBreakRemoteRealizationArgs = {
  id: Scalars["ID"];
};

export type MutationTypeBulkAssignManagersForEmployeeLeadArgs = {
  employee_lead_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeBulkAssignManagersForOpportunitiesArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeBulkAssignManagersForPeopleArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  person_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeBulkCreateQuestionArgs = {
  questionnaire_id?: InputMaybe<Scalars["ID"]>;
  questions?: InputMaybe<Array<InputMaybe<QuestionInput>>>;
};

export type MutationTypeBulkDeleteQuestionArgs = {
  question_ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationTypeBulkFollowupArgs = {
  follow_up_id: Scalars["Int"];
  person_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeBulkMatchApplicationsArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeBulkOpenOpportunitiesArgs = {
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeBulkRejectApplicationsArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  rejection_reason_id?: InputMaybe<Scalars["Int"]>;
};

export type MutationTypeBulkRemoveOpportunityQuestionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationTypeBulkTagUpdateForApplicationsArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeBulkTagUpdateForOpportunitiesArgs = {
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeBulkTagUpdateForPeopleArgs = {
  person_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeBulkUnassignManagersForEmployeeLeadArgs = {
  employee_lead_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeBulkUnassignManagersForOpportunitiesArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeBulkUnassignManagersForPeopleArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  person_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeBulkUpdateQuestionArgs = {
  questions?: InputMaybe<Array<InputMaybe<UpdateQuestionInput>>>;
};

export type MutationTypeCampaignActivateArgs = {
  id: Scalars["ID"];
};

export type MutationTypeCampaignCreateArgs = {
  campaign?: InputMaybe<CampaignInput>;
  office_id?: InputMaybe<Scalars["Int"]>;
};

export type MutationTypeCampaignDeactivateArgs = {
  campaign?: InputMaybe<CampaignInput>;
  id: Scalars["ID"];
};

export type MutationTypeCampaignUpdateArgs = {
  campaign?: InputMaybe<CampaignInput>;
  id: Scalars["ID"];
};

export type MutationTypeChangeCustomStatusApplicationArgs = {
  id: Scalars["ID"];
  new_status_id?: InputMaybe<Scalars["Int"]>;
};

export type MutationTypeClientDataPutArgs = {
  client_data?: InputMaybe<ClientDataInput>;
};

export type MutationTypeClientDataUpdateArgs = {
  client_data?: InputMaybe<ClientDataInput>;
  id: Scalars["ID"];
};

export type MutationTypeCommitteeTargetBulkUpdateArgs = {
  committee_targets: Array<InputMaybe<UpdateCommitteeTargetInput>>;
};

export type MutationTypeCompleteApplicationArgs = {
  id: Scalars["ID"];
};

export type MutationTypeCompleteTodoArgs = {
  id: Scalars["ID"];
};

export type MutationTypeContactMemberLeadArgs = {
  id: Scalars["ID"];
};

export type MutationTypeCreateApplicationArgs = {
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};

export type MutationTypeCreateAttachmentArgs = {
  attachment?: InputMaybe<AttachmentInput>;
};

export type MutationTypeCreateBranchArgs = {
  branch?: InputMaybe<BranchInput>;
  organisation_id?: InputMaybe<Scalars["Int"]>;
};

export type MutationTypeCreateBranchEmployeeArgs = {
  branch_id: Scalars["Int"];
  person_id: Scalars["Int"];
};

export type MutationTypeCreateCampaignArgs = {
  campaign?: InputMaybe<CampaignInput>;
  office_id: Scalars["Int"];
};

export type MutationTypeCreateChecklistResponseMemberLeadArgs = {
  answers: Array<InputMaybe<Scalars["JSON"]>>;
  id: Scalars["ID"];
  survey_id: Scalars["ID"];
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
  opportunity_id: Scalars["ID"];
};

export type MutationTypeCreateCommitteeArgs = {
  committee?: InputMaybe<OfficeInput>;
};

export type MutationTypeCreateCommitteeCityArgs = {
  committee?: InputMaybe<OfficeInput>;
  id: Scalars["ID"];
};

export type MutationTypeCreateCommitteeDepartmentArgs = {
  committee_department: CommitteeDepartmentInput;
  office_id: Scalars["ID"];
};

export type MutationTypeCreateContentSectionArgs = {
  content_section?: InputMaybe<ContentSectionInput>;
};

export type MutationTypeCreateCustomStatusOpportunityArgs = {
  custom_status?: InputMaybe<CustomStatusInput>;
  opportunity_id: Scalars["ID"];
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
  applications_close_date: Scalars["DateTime"];
  id: Scalars["ID"];
  openings: Scalars["Int"];
};

export type MutationTypeCreateMailTemplateArgs = {
  content?: InputMaybe<Scalars["String"]>;
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
  company_id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  organisation_scorecard_attribute?: InputMaybe<
    Array<InputMaybe<ScorecardAttributeInput>>
  >;
};

export type MutationTypeCreateOrganisationScorecardAttributeArgs = {
  organisation_scorecard_attribute?: InputMaybe<
    Array<InputMaybe<ScorecardAttributeInput>>
  >;
  scorecard_id: Scalars["ID"];
};

export type MutationTypeCreatePageArgs = {
  page?: InputMaybe<PageInput>;
};

export type MutationTypeCreatePageComponentArgs = {
  page_component?: InputMaybe<PageComponentInput>;
  page_id: Scalars["ID"];
};

export type MutationTypeCreatePersonArgs = {
  person?: InputMaybe<PersonInput>;
};

export type MutationTypeCreatePersonAcademicExperienceArgs = {
  academic_experience?: InputMaybe<PersonAcademicInput>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeCreatePersonProfessionalExperienceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  professional_experience?: InputMaybe<PersonProfessionalInput>;
};

export type MutationTypeCreatePlatformNpsArgs = {
  path?: InputMaybe<Scalars["String"]>;
  responses?: InputMaybe<Array<InputMaybe<PlatformNpsInput>>>;
};

export type MutationTypeCreateProjectArgs = {
  opportunity?: InputMaybe<ProjectInput>;
};

export type MutationTypeCreateQuestionnaireArgs = {
  company_id: Scalars["ID"];
  questionnaire?: InputMaybe<QuestionnaireInput>;
};

export type MutationTypeCreateScorecardsApplicationArgs = {
  application_scorecard?: InputMaybe<Array<InputMaybe<ScorecardInput>>>;
  id: Scalars["ID"];
};

export type MutationTypeCreateSlotArgs = {
  opportunity_id: Scalars["ID"];
  slot?: InputMaybe<SlotInput>;
};

export type MutationTypeCreateSuggestedCountryArgs = {
  suggested_country?: InputMaybe<SuggestedCountryInput>;
};

export type MutationTypeCreateTagListArgs = {
  tag_list?: InputMaybe<TagListInput>;
};

export type MutationTypeCreateTeamArgs = {
  office_id: Scalars["ID"];
  team?: InputMaybe<TeamInput>;
  term_id: Scalars["ID"];
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
  saved_filter_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeCurrentPersonSavedFiltersUpdateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  saved_filter?: InputMaybe<SavedFilterInput>;
};

export type MutationTypeCurrentPersonUpdateArgs = {
  person?: InputMaybe<CurrentPersonInput>;
};

export type MutationTypeCurrentPersonUpdateHomeLcArgs = {
  home_lc_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeDeactivateCampaignArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteAcademicExperienceShowArgs = {
  academic_exp_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeDeleteAttachmentArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteBranchEmployeeArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteCityArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteCityLcArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteCommentArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteCommitteeArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteCurrentPersonCvArgs = {
  cv_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeDeleteCustomStatusOpportunityArgs = {
  id: Scalars["ID"];
  opportunity_id: Scalars["ID"];
};

export type MutationTypeDeleteImageArgs = {
  attachment_id?: InputMaybe<Scalars["Int"]>;
};

export type MutationTypeDeleteInvoiceArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteLcAlignmentArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteMailTemplateArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteNationalPartnerArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteOrganisationScorecardArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteOrganisationScorecardAttributeArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeletePageArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeletePageComponentArgs = {
  client_reference_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeDeletePositionArgs = {
  id: Scalars["ID"];
  position?: InputMaybe<PositionInput>;
};

export type MutationTypeDeleteProfessionalExperienceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  professional_exp_id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeDeleteQuestionnaireArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteSlotArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteSuggestedCountryArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteTeamArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteTermArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteTimelineArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteTodoArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDeleteWatchlistArgs = {
  opportunity_id: Scalars["Int"];
  person_id: Scalars["ID"];
};

export type MutationTypeDenyBranchArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDuplicateOpportunityArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDuplicatePageComponentArgs = {
  id: Scalars["ID"];
};

export type MutationTypeDuplicateQuestionnaireArgs = {
  id: Scalars["ID"];
};

export type MutationTypeEmployeeLeadAttemptedToContactArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeEmployeeLeadConnectedArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeEmployeeLeadContractSentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeEmployeeLeadContractSignedArgs = {
  company_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeEmployeeLeadCreateArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
};

export type MutationTypeEmployeeLeadDealLostArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeEmployeeLeadFuturePipelineArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeEmployeeLeadNewLeadArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeEmployeeLeadProposalSentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeEmployeeLeadSendInviteArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeEmployeeLeadUpdateArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeEngagementCreateArgs = {
  employee_lead_id: Scalars["Int"];
  engagement?: InputMaybe<EngagementInput>;
};

export type MutationTypeEngagementDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationTypeEngagementUpdateArgs = {
  engagement?: InputMaybe<EngagementInput>;
  id: Scalars["ID"];
};

export type MutationTypeFavouriteOpportunityArgs = {
  id: Scalars["ID"];
};

export type MutationTypeFavouritePageArgs = {
  id: Scalars["ID"];
};

export type MutationTypeFileImportArgs = {
  file_input?: InputMaybe<FileInput>;
};

export type MutationTypeFillNpsResponseArgs = {
  answer?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id: Scalars["ID"];
  question_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type MutationTypeFollowupOrganisationArgs = {
  follow_up_id?: InputMaybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

export type MutationTypeFreezeUnfreezeCommitteeArgs = {
  action?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  remarks?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeGenerateCvArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeGenerateEmailArgs = {
  username: Scalars["String"];
};

export type MutationTypeGenerateMosCertificateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeInCompleteTodoArgs = {
  id: Scalars["ID"];
};

export type MutationTypeIncomingProgrammeFeeUpdateArgs = {
  id: Scalars["ID"];
  programme_fee?: InputMaybe<IncomingProgrammeFeeInput>;
};

export type MutationTypeInterviewPersonArgs = {
  accepted?: InputMaybe<Scalars["Boolean"]>;
  accepted_reason?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  interviewed?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationTypeInterviewSlotApplicationArgs = {
  id: Scalars["ID"];
  interview_slots?: InputMaybe<Array<InputMaybe<InterviewSlotInput>>>;
};

export type MutationTypeInviteMemberArgs = {
  access_type?: InputMaybe<Scalars["String"]>;
  country_code?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  first_name?: InputMaybe<Scalars["String"]>;
  follow_up_id?: InputMaybe<Scalars["Int"]>;
  gender?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  last_name?: InputMaybe<Scalars["String"]>;
  linkedin_url?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  referral_type?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeInvitePersonTermArgs = {
  office_id: Scalars["ID"];
  person_id?: InputMaybe<Scalars["ID"]>;
  person_input?: InputMaybe<InvitePersonInput>;
  term_id: Scalars["ID"];
};

export type MutationTypeInvoiceApproveCashPaymentArgs = {
  id: Scalars["ID"];
};

export type MutationTypeInvoicePayByCashArgs = {
  id: Scalars["ID"];
};

export type MutationTypeInvoiceTransactionCreateArgs = {
  id: Scalars["ID"];
};

export type MutationTypeLdaResponseArgs = {
  aiesec_contribution?: InputMaybe<Scalars["Int"]>;
  lda_survey_id: Scalars["ID"];
  responses: Array<InputMaybe<LdaResponseInput>>;
};

export type MutationTypeLdmResponseArgs = {
  aiesec_contribution?: InputMaybe<Scalars["Int"]>;
  opportunity_application_id?: InputMaybe<Scalars["Int"]>;
  position_id?: InputMaybe<Scalars["Int"]>;
  responses?: InputMaybe<Array<InputMaybe<LdmResponseInput>>>;
};

export type MutationTypeMarkOpportunityRemoteArgs = {
  id: Scalars["ID"];
};

export type MutationTypeMatchApplicationArgs = {
  id: Scalars["ID"];
};

export type MutationTypeMemberLeadAcceptArgs = {
  id: Scalars["ID"];
};

export type MutationTypeMemberLeadChecklistQuestionBulkCreateArgs = {
  checklist: Array<InputMaybe<ChecklistInput>>;
  id: Scalars["ID"];
};

export type MutationTypeMemberLeadChecklistResponseCreateArgs = {
  answers: Array<InputMaybe<Scalars["JSON"]>>;
  id: Scalars["ID"];
  survey_id: Scalars["ID"];
};

export type MutationTypeMemberLeadContactArgs = {
  id: Scalars["ID"];
};

export type MutationTypeMemberLeadCreateArgs = {
  member_lead?: InputMaybe<MemberLeadInput>;
};

export type MutationTypeMemberLeadProcessArgs = {
  id: Scalars["ID"];
};

export type MutationTypeMemberLeadRejectArgs = {
  id: Scalars["ID"];
};

export type MutationTypeMemberLeadUpdateArgs = {
  id: Scalars["ID"];
  member_lead?: InputMaybe<MemberLeadInput>;
};

export type MutationTypeMemberPositionCreateArgs = {
  member_position: MemberPositionInput;
};

export type MutationTypeMemberPositionTerminateArgs = {
  exit_reason_id: Scalars["Int"];
  id: Scalars["Int"];
  other_exit_reason?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeMemberPositionUpdateArgs = {
  id: Scalars["Int"];
  member_position: MemberPositionInput;
};

export type MutationTypeMoveEmployeeLeadToAttemptedToContactArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeMoveEmployeeLeadToConnectedArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeMoveEmployeeLeadToContractSentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeMoveEmployeeLeadToContractSignedArgs = {
  company_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeMoveEmployeeLeadToDealLostArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeMoveEmployeeLeadToFuturePipelineArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeMoveEmployeeLeadToNewLeadArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeMoveEmployeeLeadToProposalSentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeMovePageToDraftArgs = {
  id: Scalars["ID"];
};

export type MutationTypeMoveSlotToActiveArgs = {
  id: Scalars["ID"];
};

export type MutationTypeMoveSlotToInactiveArgs = {
  id: Scalars["ID"];
};

export type MutationTypeNotificationReadArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeOfflineAssessmentApplicationArgs = {
  id: Scalars["ID"];
  offline_assessments?: InputMaybe<Array<InputMaybe<OfflineAssessmentInput>>>;
};

export type MutationTypeOfflineAssessmentOpportunityArgs = {
  id: Scalars["ID"];
  offline_assessments?: InputMaybe<Array<InputMaybe<OfflineAssessmentInput>>>;
};

export type MutationTypeOpenOpportunityArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOpportunityIncrementViewsArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOpportunityMarkRemoteArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOpportunityRemoveCoverPhotoArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOpportunityReportArgs = {
  additional_information?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  remark?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeOpportunitySubmitForReviewArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOpportunityUnarchiveArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOpportunityUnmarkRemoteArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOpportunityUnpublishArgs = {
  id: Scalars["ID"];
  reason_id?: InputMaybe<Scalars["Int"]>;
  remarks?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeOrganisationApproveArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOrganisationArchiveArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOrganisationFollowupArgs = {
  follow_up_id?: InputMaybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

export type MutationTypeOrganisationRejectArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOrganisationRemovePartnerTypeArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOrganisationScorecardAttributeCreateArgs = {
  organisation_scorecard_attribute?: InputMaybe<
    Array<InputMaybe<ScorecardAttributeInput>>
  >;
  scorecard_id: Scalars["ID"];
};

export type MutationTypeOrganisationScorecardAttributeDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOrganisationScorecardAttributeUpdateArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeOrganisationScorecardCreateArgs = {
  company_id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  organisation_scorecard_attribute?: InputMaybe<
    Array<InputMaybe<ScorecardAttributeInput>>
  >;
};

export type MutationTypeOrganisationScorecardDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationTypeOrganisationScorecardUpdateArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeOrganisationSetPartnerTypeArgs = {
  id: Scalars["ID"];
  partner_type: PartnerTypes;
};

export type MutationTypePageComponentCreateArgs = {
  page_component?: InputMaybe<PageComponentInput>;
  page_id: Scalars["ID"];
};

export type MutationTypePageComponentDeleteArgs = {
  client_reference_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypePageComponentDuplicateArgs = {
  id: Scalars["ID"];
};

export type MutationTypePageComponentUpdateArgs = {
  client_reference_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  page_component?: InputMaybe<PageComponentInput>;
};

export type MutationTypePageCreateArgs = {
  page?: InputMaybe<PageInput>;
};

export type MutationTypePageDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationTypePageFavouriteArgs = {
  id: Scalars["ID"];
};

export type MutationTypePageMoveToDraftArgs = {
  id: Scalars["ID"];
};

export type MutationTypePagePublishArgs = {
  id: Scalars["ID"];
};

export type MutationTypePageUnfavouriteArgs = {
  id: Scalars["ID"];
};

export type MutationTypePageUpdateArgs = {
  id: Scalars["ID"];
  page?: InputMaybe<PageInput>;
};

export type MutationTypePartnerSignupCreateArgs = {
  partners_signup?: InputMaybe<PartnerSignupInput>;
};

export type MutationTypePayByCashApplicationArgs = {
  id: Scalars["ID"];
};

export type MutationTypePaymentApplicationArgs = {
  id: Scalars["ID"];
};

export type MutationTypePlanCreateArgs = {
  plan: PlanInput;
};

export type MutationTypePlanSetDeadlineArgs = {
  deadline: Scalars["Date"];
  office_id: Scalars["ID"];
  plan_id: Scalars["ID"];
};

export type MutationTypePlanUpdateArgs = {
  id: Scalars["ID"];
  plan?: InputMaybe<PlanInput>;
};

export type MutationTypeProcessMemberLeadArgs = {
  id: Scalars["ID"];
};

export type MutationTypePropagateTermsCommitteeArgs = {
  committee?: InputMaybe<OfficeInput>;
};

export type MutationTypePublishMailTemplateArgs = {
  id: Scalars["ID"];
};

export type MutationTypePublishPageArgs = {
  id: Scalars["ID"];
};

export type MutationTypeQuestionBulkCreateArgs = {
  questionnaire_id?: InputMaybe<Scalars["ID"]>;
  questions?: InputMaybe<Array<InputMaybe<QuestionInput>>>;
};

export type MutationTypeQuestionBulkDeleteArgs = {
  question_ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationTypeQuestionBulkUpdateArgs = {
  questions?: InputMaybe<Array<InputMaybe<UpdateQuestionInput>>>;
};

export type MutationTypeRealizeApplicationArgs = {
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};

export type MutationTypeRejectApplicationArgs = {
  id: Scalars["ID"];
  rejection_reason_id?: InputMaybe<Scalars["Int"]>;
};

export type MutationTypeRejectBranchEmployeeArgs = {
  id: Scalars["ID"];
};

export type MutationTypeRejectMemberLeadArgs = {
  id: Scalars["ID"];
};

export type MutationTypeRejectOrganisationArgs = {
  id: Scalars["ID"];
};

export type MutationTypeRemoteRealizeApplicationArgs = {
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<ApplicationRemoteRealizeInput>;
};

export type MutationTypeRemoveOpportunityArgs = {
  id: Scalars["ID"];
};

export type MutationTypeRemoveOpportunityCoverPhotoArgs = {
  id: Scalars["ID"];
};

export type MutationTypeRemoveOpportunityQuestionArgs = {
  id: Scalars["ID"];
};

export type MutationTypeRemoveOrganisationPartnerTypeArgs = {
  id: Scalars["ID"];
};

export type MutationTypeRemoveProgrammeManagerArgs = {
  id: Scalars["ID"];
};

export type MutationTypeRemoveQuestionArgs = {
  id: Scalars["ID"];
};

export type MutationTypeRemoveSelectionProcessArgs = {
  id: Scalars["ID"];
};

export type MutationTypeReopenApplicationArgs = {
  id: Scalars["ID"];
};

export type MutationTypeReportOpportunityArgs = {
  additional_information?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  remark?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeResolveCommentArgs = {
  comment_id: Scalars["ID"];
  id: Scalars["ID"];
};

export type MutationTypeScorecardApplicationDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationTypeSelectionProcessBulkCreateArgs = {
  opportunity_id: Scalars["ID"];
  selection_processes?: InputMaybe<Array<InputMaybe<SelectionProcessInput>>>;
};

export type MutationTypeSelectionProcessBulkDeleteArgs = {
  opportunity_id: Scalars["ID"];
  selection_process_ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationTypeSelectionProcessBulkUpdateArgs = {
  opportunity_id: Scalars["ID"];
  selection_processes?: InputMaybe<
    Array<InputMaybe<UpdateSelectionProcessInput>>
  >;
};

export type MutationTypeSendInviteToEmployeeLeadArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeSendTestMailTemplateArgs = {
  id: Scalars["ID"];
};

export type MutationTypeSetOrganisationPartnerTypeArgs = {
  id: Scalars["ID"];
  partner_type: PartnerTypes;
};

export type MutationTypeSlotCreateArgs = {
  opportunity_id: Scalars["ID"];
  slot?: InputMaybe<SlotInput>;
};

export type MutationTypeSlotDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationTypeSlotMoveToActiveArgs = {
  id: Scalars["ID"];
};

export type MutationTypeSlotMoveToInactiveArgs = {
  id: Scalars["ID"];
};

export type MutationTypeSlotUpdateArgs = {
  id: Scalars["ID"];
  slot: UpdateSlotInput;
};

export type MutationTypeSubmitOpportunityForReviewArgs = {
  id: Scalars["ID"];
};

export type MutationTypeSurveyAnswerArgs = {
  responses: Array<SurveyResponseInput>;
  survey_uuid: Scalars["String"];
};

export type MutationTypeTagListUpdateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  tag_list?: InputMaybe<TagListInput>;
};

export type MutationTypeTerminateMemberPositionArgs = {
  exit_reason_id: Scalars["Int"];
  id: Scalars["Int"];
  other_exit_reason?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeTestimonialApplicationArgs = {
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};

export type MutationTypeUnarchiveOpportunityArgs = {
  id: Scalars["ID"];
};

export type MutationTypeUnfavouriteOpportunityArgs = {
  id: Scalars["ID"];
};

export type MutationTypeUnfavouritePageArgs = {
  id: Scalars["ID"];
};

export type MutationTypeUnmarkOpportunityRemoteArgs = {
  id: Scalars["ID"];
};

export type MutationTypeUnpublishOpportunityArgs = {
  id: Scalars["ID"];
  reason_id?: InputMaybe<Scalars["Int"]>;
  remarks?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeUnrejectApplicationArgs = {
  id: Scalars["ID"];
};

export type MutationTypeUpdateApplicationArgs = {
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};

export type MutationTypeUpdateApplicationFlightDetailsArgs = {
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};

export type MutationTypeUpdateApplicationScorecardAttributeArgs = {
  application_scorecard?: InputMaybe<ScorecardInput>;
  id: Scalars["ID"];
};

export type MutationTypeUpdateAttachmentArgs = {
  attachment?: InputMaybe<AttachmentInput>;
  id: Scalars["ID"];
};

export type MutationTypeUpdateBranchArgs = {
  branch?: InputMaybe<BranchInput>;
  id: Scalars["ID"];
};

export type MutationTypeUpdateBranchEmployeeArgs = {
  branch_employee?: InputMaybe<BranchEmployeeInput>;
  id: Scalars["ID"];
};

export type MutationTypeUpdateCampaignArgs = {
  campaign?: InputMaybe<CampaignInput>;
  id: Scalars["ID"];
};

export type MutationTypeUpdateCityArgs = {
  city?: InputMaybe<CityInput>;
  id: Scalars["ID"];
};

export type MutationTypeUpdateCityLcArgs = {
  city_lc?: InputMaybe<CityLcInput>;
  id: Scalars["ID"];
};

export type MutationTypeUpdateCommentArgs = {
  comment?: InputMaybe<CommentInput>;
  id: Scalars["ID"];
};

export type MutationTypeUpdateCommitteeArgs = {
  committee?: InputMaybe<OfficeInput>;
  id: Scalars["ID"];
};

export type MutationTypeUpdateCustomStatusOpportunityArgs = {
  custom_status?: InputMaybe<CustomStatusInput>;
  id: Scalars["ID"];
  opportunity_id: Scalars["ID"];
};

export type MutationTypeUpdateEmployeeLeadArgs = {
  employee_lead?: InputMaybe<EmployeeLeadInput>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeUpdateFlightDetailsArgs = {
  application_flight_token: Scalars["String"];
  flight_details: FlightDetailsInput;
};

export type MutationTypeUpdateInterviewDetailsApplicationArgs = {
  attendee_emails?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};

export type MutationTypeUpdateInvoiceArgs = {
  id: Scalars["ID"];
  invoice?: InputMaybe<InvoiceInput>;
};

export type MutationTypeUpdateLcAlignmentArgs = {
  id: Scalars["ID"];
  lc_alignment?: InputMaybe<LcAlignmentInput>;
};

export type MutationTypeUpdateLcAlignmentLabelArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  label: Scalars["String"];
  office_id: Scalars["ID"];
};

export type MutationTypeUpdateMailTemplateArgs = {
  content?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  mail_template?: InputMaybe<MailTemplateInput>;
};

export type MutationTypeUpdateMemberLeadArgs = {
  id: Scalars["ID"];
  member_lead?: InputMaybe<MemberLeadInput>;
};

export type MutationTypeUpdateMemberPositionArgs = {
  id: Scalars["Int"];
  member_position: UpdateMemberPositionInput;
};

export type MutationTypeUpdateNationalPartnerArgs = {
  id: Scalars["ID"];
  national_partner?: InputMaybe<NationalPartnerInput>;
};

export type MutationTypeUpdateOpportunityArgs = {
  id: Scalars["ID"];
  opportunity?: InputMaybe<OpportunityInput>;
};

export type MutationTypeUpdateOpportunityQuestionArgs = {
  id: Scalars["ID"];
  opportunity_question?: InputMaybe<OpportunityQuestionInput>;
};

export type MutationTypeUpdateOrganisationArgs = {
  id: Scalars["ID"];
  organisation?: InputMaybe<CompanyInput>;
};

export type MutationTypeUpdateOrganisationScorecardArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeUpdateOrganisationScorecardAttributeArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
};

export type MutationTypeUpdateOrganizationDevelopmentArgs = {
  id: Scalars["ID"];
  organization_development?: InputMaybe<OrganizationDevelopmentInput>;
};

export type MutationTypeUpdateOrganizationDevelopmentTargetArgs = {
  id: Scalars["ID"];
  organization_development_target?: InputMaybe<OrganizationDevelopmentTargetInput>;
};

export type MutationTypeUpdatePageArgs = {
  id: Scalars["ID"];
  page?: InputMaybe<PageInput>;
};

export type MutationTypeUpdatePageComponentArgs = {
  client_reference_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  page_component?: InputMaybe<PageComponentInput>;
};

export type MutationTypeUpdatePartnerStandardsSurveyArgs = {
  partner_standard_survey_id: Scalars["String"];
  responses: Array<ResponseInput>;
};

export type MutationTypeUpdatePaymentInvoiceArgs = {
  id: Scalars["ID"];
  invoice?: InputMaybe<InvoiceInput>;
};

export type MutationTypeUpdatePersonArgs = {
  id: Scalars["ID"];
  person?: InputMaybe<PersonInput>;
};

export type MutationTypeUpdatePersonAcademicExperienceArgs = {
  academic_exp_id?: InputMaybe<Scalars["ID"]>;
  academic_experience?: InputMaybe<PersonAcademicInput>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationTypeUpdatePersonProfessionalExperienceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  professional_exp_id?: InputMaybe<Scalars["ID"]>;
  professional_experience?: InputMaybe<PersonProfessionalInput>;
};

export type MutationTypeUpdateProgrammeFeeArgs = {
  id: Scalars["ID"];
  programme_fee?: InputMaybe<ProgrammeFeeInput>;
};

export type MutationTypeUpdateProjectArgs = {
  id: Scalars["ID"];
  opportunity?: InputMaybe<ProjectInput>;
};

export type MutationTypeUpdateQuestionArgs = {
  id: Scalars["ID"];
  question?: InputMaybe<QuestionInput>;
};

export type MutationTypeUpdateQuestionnaireArgs = {
  id: Scalars["ID"];
  questionnaire?: InputMaybe<QuestionnaireInput>;
};

export type MutationTypeUpdateSelectionProcessArgs = {
  id: Scalars["ID"];
  selection_process?: InputMaybe<SelectionProcessInput>;
};

export type MutationTypeUpdateSlotArgs = {
  id: Scalars["ID"];
  slot: UpdateSlotInput;
};

export type MutationTypeUpdateStandardsSurveyArgs = {
  response: ResponseInput;
  standard_survey_id: Scalars["String"];
};

export type MutationTypeUpdateSuggestedCountryArgs = {
  id: Scalars["ID"];
  suggested_country?: InputMaybe<SuggestedCountryInput>;
};

export type MutationTypeUpdateTeamArgs = {
  id: Scalars["ID"];
  team?: InputMaybe<TeamInput>;
};

export type MutationTypeUpdateTeamPositionArgs = {
  id: Scalars["ID"];
  position?: InputMaybe<PositionInput>;
};

export type MutationTypeUpdateTimelineArgs = {
  id: Scalars["ID"];
  timeline?: InputMaybe<TimelineInput>;
};

export type MutationTypeUpdateTodoArgs = {
  id: Scalars["ID"];
  todo?: InputMaybe<TodoInput>;
};

export type MutationTypeValidateAiesecEmailUsernameArgs = {
  username: Scalars["String"];
};

export type MutationTypeWeeklyActivitiesBulkCreateArgs = {
  opportunity_id: Scalars["ID"];
  weekly_activities?: InputMaybe<Array<InputMaybe<WeeklyActivityInput>>>;
};

export type MutationTypeWeeklyActivitiesBulkDeleteArgs = {
  opportunity_id: Scalars["ID"];
  weekly_activities_ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type MutationTypeWithdrawApplicationArgs = {
  id: Scalars["ID"];
};

export type NationalPartnerInput = {
  company_id: Scalars["Int"];
  mc_id: Scalars["Int"];
  position?: InputMaybe<Scalars["Int"]>;
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
  id: Scalars["ID"];
};

export type NationalPartnerMutationQueryUpdateNationalPartnerArgs = {
  id: Scalars["ID"];
  national_partner?: InputMaybe<NationalPartnerInput>;
};

export type NationalPartnerQuery = {
  allNationalPartners?: Maybe<Array<Maybe<NationalPartnerType>>>;
  getNationalPartner?: Maybe<NationalPartnerType>;
  listNationalPartners?: Maybe<Array<Maybe<Organisation>>>;
};

export type NationalPartnerQueryAllNationalPartnersArgs = {
  mc_id?: InputMaybe<Scalars["ID"]>;
};

export type NationalPartnerQueryGetNationalPartnerArgs = {
  id: Scalars["ID"];
};

export type NationalPartnerQueryListNationalPartnersArgs = {
  mc_id: Scalars["ID"];
};

export type NationalPartnerType = {
  __typename?: "NationalPartnerType";
  company?: Maybe<Organisation>;
  id: Scalars["ID"];
  mc?: Maybe<Office>;
  position?: Maybe<Scalars["Int"]>;
};

export type NewApplicationQuestionnaire = {
  deadline?: InputMaybe<Scalars["Date"]>;
  questionnaire_id: Scalars["ID"];
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars["ID"];
};

export type Notification = Node & {
  __typename?: "Notification";
  created_at?: Maybe<Scalars["DateTime"]>;
  icon?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  message?: Maybe<Scalars["String"]>;
  notifiable?: Maybe<PersonApplicationUnion>;
  notifiable_id?: Maybe<Scalars["ID"]>;
  notifiable_type?: Maybe<Scalars["String"]>;
  person_id?: Maybe<Scalars["ID"]>;
  read?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type NotificationFilter = {
  platform_type?: InputMaybe<Scalars["String"]>;
  read?: InputMaybe<Scalars["Boolean"]>;
};

export type NotificationList = {
  __typename?: "NotificationList";
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
  id?: InputMaybe<Scalars["ID"]>;
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
  id?: InputMaybe<Scalars["ID"]>;
};

export type NotificationsQueryNotificationGetArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type NotificationsQueryNotificationListArgs = {
  filters?: InputMaybe<NotificationFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
};

export type NotificationsQueryNotificationsArgs = {
  filters?: InputMaybe<NotificationFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
};

export type NpsResponseType = {
  __typename?: "NpsResponseType";
  /** Comment */
  comment?: Maybe<Scalars["String"]>;
  /** LDM score - How likely would you recommend AIESEC as a leadership development organization? */
  ldm_score?: Maybe<Scalars["String"]>;
  /** NPS score - How likely would you recommend the experience you lived through AIESEC to a friend or colleague? */
  nps_score?: Maybe<Scalars["String"]>;
  /** Person name */
  person_name?: Maybe<Scalars["String"]>;
  /** Profile picture */
  profile_picture?: Maybe<Scalars["String"]>;
};

export type NpsResponseTypeProfile_PictureArgs = {
  size?: InputMaybe<Scalars["String"]>;
};

export type Office = {
  __typename?: "Office";
  accept_member_leads?: Maybe<Scalars["Boolean"]>;
  address_detail?: Maybe<AddressInfo>;
  allow_online_payments?: Maybe<Scalars["String"]>;
  campaigns?: Maybe<Array<Maybe<Campaign>>>;
  checklist_survey?: Maybe<Survey>;
  cities?: Maybe<Array<Maybe<City>>>;
  color_code?: Maybe<Scalars["String"]>;
  comments?: Maybe<CommentConnection>;
  committee_aggregations?: Maybe<CommitteeAggregationConnection>;
  committee_targets?: Maybe<CommitteeTargetConnection>;
  companies?: Maybe<Array<Maybe<Organisation>>>;
  contact_detail?: Maybe<ContactInfo>;
  /** @deprecated Removed. recommend to get country from address_detail field */
  country?: Maybe<Scalars["String"]>;
  country_code?: Maybe<Scalars["String"]>;
  cover_photo?: Maybe<Scalars["String"]>;
  custom_payment_url?: Maybe<Scalars["String"]>;
  default_currency?: Maybe<Currency>;
  default_project_fee?: Maybe<Scalars["Int"]>;
  default_project_fee_cents?: Maybe<Scalars["Int"]>;
  eligible_for_online_payment?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  full_name?: Maybe<Scalars["String"]>;
  hdi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  id: Scalars["ID"];
  igv_fee_ep_percentage?: Maybe<Scalars["Float"]>;
  igv_fee_partner_percentage?: Maybe<Scalars["Float"]>;
  is_expansion?: Maybe<Scalars["String"]>;
  is_frozen?: Maybe<Scalars["Boolean"]>;
  is_od_model_eligible?: Maybe<Scalars["String"]>;
  member_position?: Maybe<MemberPosition>;
  name?: Maybe<Scalars["String"]>;
  name_sort?: Maybe<Scalars["String"]>;
  od_data?: Maybe<Scalars["JSON"]>;
  parent?: Maybe<Office>;
  payments?: Maybe<CommitteePayment>;
  pdi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  /** permissions */
  permissions?: Maybe<OfficePermissionType>;
  profile_photo?: Maybe<Scalars["String"]>;
  programme_fees?: Maybe<ProgrammeFeeConnection>;
  programme_managers?: Maybe<Array<Maybe<ProgrammeManager>>>;
  project_fee_limit?: Maybe<Scalars["Int"]>;
  project_fee_limit_cents?: Maybe<Scalars["Int"]>;
  short_code?: Maybe<Scalars["String"]>;
  signup_link?: Maybe<Scalars["String"]>;
  signup_questions?: Maybe<Scalars["String"]>;
  sub_office_count?: Maybe<Scalars["Int"]>;
  /** suboffices details */
  suboffices?: Maybe<Array<Maybe<Office>>>;
  tag?: Maybe<Scalars["String"]>;
  tag_lists?: Maybe<Array<Maybe<TagList>>>;
  todo_type?: Maybe<TodoType>;
  visa_requirements?: Maybe<Scalars["JSON"]>;
};

export type OfficeCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OfficeCommittee_AggregationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  term_id?: InputMaybe<Scalars["ID"]>;
};

export type OfficeCommittee_TargetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  term_id?: InputMaybe<Scalars["ID"]>;
};

export type OfficeHdiArgs = {
  end_date?: InputMaybe<Scalars["DateTime"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
};

export type OfficeMember_PositionArgs = {
  term_id: Scalars["Int"];
};

export type OfficeOd_DataArgs = {
  end_date?: InputMaybe<Scalars["DateTime"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
};

export type OfficePdiArgs = {
  end_date?: InputMaybe<Scalars["DateTime"]>;
  exchange_type?: InputMaybe<Scalars["String"]>;
  programme_id?: InputMaybe<Scalars["Int"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
};

export type OfficeProgramme_FeesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OfficeBasic = {
  __typename?: "OfficeBasic";
  accept_member_leads?: Maybe<Scalars["Boolean"]>;
  full_name?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  sub_office_count?: Maybe<Scalars["Int"]>;
};

export type OfficeBasicDetails = {
  __typename?: "OfficeBasicDetails";
  full_name?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Office>;
  programme_fees?: Maybe<ProgrammeFeeBasicConnection>;
  programme_managers?: Maybe<Array<Maybe<ProgrammeManager>>>;
  signup_link?: Maybe<Scalars["String"]>;
  /** suboffices details */
  suboffices?: Maybe<Array<Maybe<OfficeId>>>;
};

export type OfficeBasicDetailsProgramme_FeesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OfficeBasicList = {
  __typename?: "OfficeBasicList";
  data?: Maybe<Array<Maybe<OfficeBasic>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

/** The connection type for Office. */
export type OfficeConnection = {
  __typename?: "OfficeConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OfficeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Office>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type OfficeEdge = {
  __typename?: "OfficeEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Office>;
};

export type OfficeFilter = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  is_od_model_eligible?: InputMaybe<Scalars["String"]>;
  office_tag?: InputMaybe<Scalars["String"]>;
  parent?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<OfficeSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  tag?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tag_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type OfficeId = {
  __typename?: "OfficeId";
  id: Scalars["ID"];
};

export type OfficeInput = {
  accept_member_leads?: InputMaybe<Scalars["Boolean"]>;
  address_detail_attributes?: InputMaybe<AddressInput>;
  allow_online_payments?: InputMaybe<Scalars["String"]>;
  cities?: InputMaybe<Array<InputMaybe<CommitteeCityInput>>>;
  contact_detail_attributes?: InputMaybe<ContactInput>;
  cover_photo?: InputMaybe<Scalars["String"]>;
  custom_payment_url?: InputMaybe<Scalars["String"]>;
  default_currency_id?: InputMaybe<Scalars["Int"]>;
  default_project_fee_cents?: InputMaybe<Scalars["Int"]>;
  igv_fee_ep_percentage?: InputMaybe<Scalars["Float"]>;
  igv_fee_partner_percentage?: InputMaybe<Scalars["Float"]>;
  is_expansion?: InputMaybe<Scalars["Boolean"]>;
  is_od_model_eligible?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  parent_id?: InputMaybe<Scalars["Int"]>;
  payments?: InputMaybe<CommitteePaymentInput>;
  profile_photo?: InputMaybe<Scalars["String"]>;
  project_fee_limit_cents?: InputMaybe<Scalars["Int"]>;
  short_code?: InputMaybe<Scalars["String"]>;
  signup_link?: InputMaybe<Scalars["String"]>;
  tag?: InputMaybe<Scalars["String"]>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  term?: InputMaybe<CommitteeTermInput>;
  visa_requirements?: InputMaybe<Scalars["JSON"]>;
};

export type OfficeList = {
  __typename?: "OfficeList";
  data?: Maybe<Array<Maybe<Office>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type OfficeMcAlignment = {
  __typename?: "OfficeMcAlignment";
  id: Scalars["ID"];
  label?: Maybe<Scalars["String"]>;
  mc_alignments?: Maybe<Array<LcAlignment>>;
  name?: Maybe<Scalars["String"]>;
};

export type OfficePermissionType = {
  __typename?: "OfficePermissionType";
  can_add_lc?: Maybe<Scalars["Boolean"]>;
  can_delete?: Maybe<Scalars["Boolean"]>;
  can_read?: Maybe<Scalars["Boolean"]>;
  can_update?: Maybe<Scalars["Boolean"]>;
  invite_people?: Maybe<Scalars["Boolean"]>;
};

export enum OfficeSortOption {
  CreatedAt = "created_at",
  Name = "name",
  ParentName = "parent_name",
  Tag = "tag",
  UpdatedAt = "updated_at",
}

export type OfflineAssessment = {
  __typename?: "OfflineAssessment";
  created_at?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  question?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type OfflineAssessmentInput = {
  question?: InputMaybe<Scalars["String"]>;
};

export type Opportunity = {
  __typename?: "Opportunity";
  accepted_count?: Maybe<Scalars["Int"]>;
  all_slots?: Maybe<SlotConnection>;
  /** OpportunityApplications count */
  applicants_count?: Maybe<Scalars["Int"]>;
  application_processing_time?: Maybe<Scalars["Int"]>;
  applications_close_date?: Maybe<Scalars["DateTime"]>;
  applications_status_facets?: Maybe<Scalars["JSON"]>;
  /** Opportunity applied to */
  applied_to?: Maybe<Scalars["Boolean"]>;
  /** Opportunity applied to with */
  applied_to_with?: Maybe<Scalars["Int"]>;
  available_openings?: Maybe<Scalars["Int"]>;
  available_slots?: Maybe<Array<Maybe<Slot>>>;
  average_nps_score?: Maybe<Scalars["Int"]>;
  backgrounds?: Maybe<Array<Maybe<ConstantMap>>>;
  branch?: Maybe<Branch>;
  city?: Maybe<City>;
  comments?: Maybe<CommentConnection>;
  company_description?: Maybe<Scalars["String"]>;
  completeness?: Maybe<Scalars["JSON"]>;
  cover_photo?: Maybe<Scalars["JSON"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  currency?: Maybe<Currency>;
  current_status?: Maybe<Scalars["String"]>;
  custom_statuses?: Maybe<CustomStatusTypeConnection>;
  date_opened?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  earliest_start_date?: Maybe<Scalars["DateTime"]>;
  experience_type?: Maybe<ExperienceType>;
  external_opportunity_id?: Maybe<Scalars["String"]>;
  external_opportunity_link?: Maybe<Scalars["String"]>;
  fee_and_health_insurance?: Maybe<Scalars["JSON"]>;
  google_place_id?: Maybe<Scalars["String"]>;
  has_opportunity_applications?: Maybe<Scalars["Boolean"]>;
  /** Check Opportunity questions present */
  has_opportunity_questions?: Maybe<Scalars["Boolean"]>;
  home_lc?: Maybe<Office>;
  /** home_mc */
  home_mc?: Maybe<Office>;
  host_lc?: Maybe<Office>;
  id: Scalars["ID"];
  /** Opportunity favourited */
  is_favourited?: Maybe<Scalars["Boolean"]>;
  /** @deprecated Removed. Use partner_type field which will support different partner_type(global, regional). */
  is_gep?: Maybe<Scalars["Boolean"]>;
  is_global_project?: Maybe<Scalars["String"]>;
  is_project_enabled?: Maybe<Scalars["Boolean"]>;
  languages?: Maybe<Array<Maybe<ConstantMap>>>;
  lat?: Maybe<Scalars["String"]>;
  latest_end_date?: Maybe<Scalars["DateTime"]>;
  /** Opportunity latest_reviews */
  latest_reviews?: Maybe<NpsResponseType>;
  legal_info?: Maybe<LegalInfoType>;
  lng?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  logistics_info?: Maybe<LogisticInfoType>;
  managers?: Maybe<Array<Maybe<Person>>>;
  mandatory_fields_check?: Maybe<Scalars["JSON"]>;
  measure_of_impacts?: Maybe<Array<Maybe<ConstantMap>>>;
  meta?: Maybe<OpportunityMetaType>;
  nationalities?: Maybe<Array<Maybe<ConstantMap>>>;
  /** @deprecated Removed. Use average_nps_score field instead. */
  nps_score?: Maybe<Scalars["Int"]>;
  /** Opportunity office_footfall_for_exchange */
  office_footfall_for_exchange?: Maybe<Scalars["String"]>;
  offline_assessments?: Maybe<Array<Maybe<OfflineAssessment>>>;
  openings?: Maybe<Scalars["Int"]>;
  opportunity_cost?: Maybe<Scalars["JSON"]>;
  opportunity_duration_type?: Maybe<OpportunityDurationType>;
  opportunity_questions?: Maybe<OpportunityQuestionConnection>;
  /** Organisation details */
  organisation?: Maybe<Organisation>;
  parent_opportunity?: Maybe<Opportunity>;
  partner_type?: Maybe<PartnerTypes>;
  percentage_of_fulfillment?: Maybe<Scalars["Float"]>;
  /** permissions */
  permissions?: Maybe<OpportunityPermissionType>;
  person?: Maybe<Person>;
  preferred_locations_info?: Maybe<Office>;
  profile_photo?: Maybe<Scalars["String"]>;
  programme?: Maybe<Programme>;
  /** Programme fees */
  programme_fees?: Maybe<Scalars["Int"]>;
  programmes?: Maybe<Array<Maybe<Programme>>>;
  progress_percentage_for_standards?: Maybe<Scalars["JSON"]>;
  project?: Maybe<Opportunity>;
  project_description?: Maybe<Scalars["String"]>;
  project_duration?: Maybe<Scalars["Int"]>;
  project_fee?: Maybe<Scalars["JSON"]>;
  project_id?: Maybe<Scalars["Int"]>;
  project_name?: Maybe<Scalars["String"]>;
  questionnaire?: Maybe<Questionnaire>;
  redirect_to_external_opportunity?: Maybe<Scalars["Boolean"]>;
  rejected_count?: Maybe<Scalars["Int"]>;
  /** Opportunity remark */
  remark?: Maybe<Scalars["String"]>;
  remote_experience_additional_details?: Maybe<Scalars["String"]>;
  remote_experience_duration?: Maybe<Scalars["String"]>;
  remote_experience_salary?: Maybe<Scalars["String"]>;
  remote_opportunity?: Maybe<Scalars["String"]>;
  /** Opportunity reviews */
  reviews?: Maybe<Scalars["JSON"]>;
  role_info?: Maybe<RoleInfoType>;
  scorecard?: Maybe<Scorecard>;
  /** Organisation details */
  sdg_info?: Maybe<Sdg>;
  selection_processes?: Maybe<SelectionProcessConnection>;
  skills?: Maybe<Array<Maybe<ConstantMap>>>;
  /** @deprecated Use all_slots field instead. */
  slots?: Maybe<Array<Maybe<Slot>>>;
  specifics_info?: Maybe<SpecificInfoType>;
  status?: Maybe<Scalars["String"]>;
  study_levels?: Maybe<Array<Maybe<Constant>>>;
  sub_product?: Maybe<SubProduct>;
  tag_lists?: Maybe<Array<Maybe<TagList>>>;
  template_opportunities_locations?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  title?: Maybe<Scalars["String"]>;
  tm_details?: Maybe<TmDetailType>;
  todo_type?: Maybe<TodoType>;
  transparent_fee_details?: Maybe<OpportunityTransparentFeeDetailsType>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  video_url?: Maybe<Scalars["String"]>;
  view_count?: Maybe<Scalars["Int"]>;
  weekly_activities?: Maybe<Array<Maybe<WeeklyActivity>>>;
  work_hours?: Maybe<Scalars["JSON"]>;
};

export type OpportunityAll_SlotsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SlotSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  start_date?: InputMaybe<Scalars["Date"]>;
};

export type OpportunityCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OpportunityCover_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars["Boolean"]>;
  cdn_region?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["String"]>;
};

export type OpportunityCustom_StatusesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OpportunityFee_And_Health_InsuranceArgs = {
  mc_id?: InputMaybe<Scalars["Int"]>;
};

export type OpportunityOpportunity_CostArgs = {
  mc_id?: InputMaybe<Scalars["Int"]>;
};

export type OpportunityOpportunity_QuestionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OpportunityProfile_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars["Boolean"]>;
  cdn_region?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["String"]>;
};

export type OpportunitySelection_ProcessesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OpportunityApplication = {
  __typename?: "OpportunityApplication";
  acceptance_note_pdf_url?: Maybe<Scalars["String"]>;
  aiesec_contribution?: Maybe<Scalars["Int"]>;
  /** allow_online_payments */
  allow_online_payments?: Maybe<Scalars["Boolean"]>;
  an_signed_at?: Maybe<Scalars["DateTime"]>;
  an_status?: Maybe<Scalars["String"]>;
  application_flight_token?: Maybe<Scalars["String"]>;
  application_questionnaires?: Maybe<ApplicationQuestionnaireConnection>;
  application_scorecard?: Maybe<ApplicationScorecard>;
  attendees?: Maybe<Array<Maybe<Attendee>>>;
  average_score?: Maybe<Scalars["Float"]>;
  /** branch */
  branch?: Maybe<Branch>;
  client_datas?: Maybe<ClientDataConnection>;
  comments?: Maybe<CommentConnection>;
  created_at?: Maybe<Scalars["DateTime"]>;
  current_status?: Maybe<Scalars["String"]>;
  custom_status?: Maybe<CustomStatusType>;
  cv?: Maybe<Cv>;
  date_approval_broken?: Maybe<Scalars["DateTime"]>;
  date_approved?: Maybe<Scalars["DateTime"]>;
  date_matched?: Maybe<Scalars["DateTime"]>;
  date_pay_by_cash?: Maybe<Scalars["DateTime"]>;
  date_realized?: Maybe<Scalars["DateTime"]>;
  experience_end_date?: Maybe<Scalars["DateTime"]>;
  experience_start_date?: Maybe<Scalars["DateTime"]>;
  favourite?: Maybe<Scalars["Boolean"]>;
  first_followed_up_date?: Maybe<Scalars["DateTime"]>;
  flight_booking_reminder_date?: Maybe<Scalars["DateTime"]>;
  follow_up?: Maybe<Constant>;
  followed_up_by?: Maybe<Person>;
  followed_up_date?: Maybe<Scalars["DateTime"]>;
  gt_answer?: Maybe<Scalars["String"]>;
  has_started_standards_survey?: Maybe<Scalars["Boolean"]>;
  /** home_mc */
  home_mc?: Maybe<Office>;
  /** host_lc */
  host_lc?: Maybe<Office>;
  host_lc_name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  inbound_emails?: Maybe<Array<Maybe<InboundEmailType>>>;
  interview_details?: Maybe<InterviewDetailsType>;
  interview_slots?: Maybe<Array<Maybe<InterviewSlot>>>;
  interviewed?: Maybe<Scalars["Boolean"]>;
  lda_links?: Maybe<Scalars["JSON"]>;
  ldm_grade?: Maybe<Scalars["Int"]>;
  ldm_report?: Maybe<Scalars["JSON"]>;
  managers?: Maybe<Array<Maybe<Person>>>;
  matchability?: Maybe<Scalars["String"]>;
  matched_or_rejected_at?: Maybe<Scalars["DateTime"]>;
  measure_of_impacts?: Maybe<Array<Maybe<ConstantMap>>>;
  meta?: Maybe<ApplicationMetaType>;
  mos_certificate?: Maybe<Attachment>;
  nps_grade?: Maybe<Scalars["Int"]>;
  nps_response?: Maybe<SurveyResponse>;
  /** NPS reponse completed date */
  nps_response_completed_at?: Maybe<Scalars["DateTime"]>;
  offline_assessments?: Maybe<Array<Maybe<OfflineAssessment>>>;
  onward_arrival_airport?: Maybe<Scalars["String"]>;
  onward_time?: Maybe<Scalars["DateTime"]>;
  opportunity?: Maybe<Opportunity>;
  /** paid */
  paid?: Maybe<Scalars["Boolean"]>;
  paid_at?: Maybe<Scalars["DateTime"]>;
  paid_by?: Maybe<Person>;
  /** standards */
  partner_standards?: Maybe<Array<Maybe<ConstantMap>>>;
  /** payments */
  payments?: Maybe<ProgrammeFee>;
  /** permissions */
  permissions?: Maybe<OpportunityApplicationPermissionType>;
  person?: Maybe<Person>;
  questionnaire_answers?: Maybe<Scalars["JSON"]>;
  questionnaire_attachment?: Maybe<ImageType>;
  rejection_reason?: Maybe<Constant>;
  required_backgrounds_percentage?: Maybe<Scalars["Int"]>;
  required_languages_percentage?: Maybe<Scalars["Int"]>;
  required_skills_percentage?: Maybe<Scalars["Int"]>;
  return_departure_airport?: Maybe<Scalars["String"]>;
  return_time?: Maybe<Scalars["DateTime"]>;
  scheduled_interview?: Maybe<Scalars["DateTime"]>;
  signed_contract_pdf_url?: Maybe<Scalars["String"]>;
  slot?: Maybe<Slot>;
  standard_survey_id?: Maybe<Scalars["String"]>;
  /** standards */
  standards?: Maybe<Array<Maybe<ConstantMap>>>;
  status?: Maybe<Scalars["String"]>;
  tag_lists?: Maybe<Array<Maybe<TagList>>>;
  testimonial?: Maybe<Scalars["String"]>;
  testimonial_filled_at?: Maybe<Scalars["DateTime"]>;
  /** tn_manager */
  tn_manager?: Maybe<Person>;
  todo_type?: Maybe<TodoType>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  unsigned_contract_pdf_url?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type OpportunityApplicationApplication_QuestionnairesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OpportunityApplicationClient_DatasArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OpportunityApplicationCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** The connection type for OpportunityApplication. */
export type OpportunityApplicationConnection = {
  __typename?: "OpportunityApplicationConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OpportunityApplicationEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type OpportunityApplicationEdge = {
  __typename?: "OpportunityApplicationEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<OpportunityApplication>;
};

export type OpportunityApplicationInput = {
  accepted?: InputMaybe<Scalars["Boolean"]>;
  aiesec_to_conduct_interview?: InputMaybe<Scalars["Boolean"]>;
  application_questionnaires?: InputMaybe<
    Array<InputMaybe<ApplicationQuestionnaireInput>>
  >;
  custom_status_id?: InputMaybe<Scalars["ID"]>;
  cv?: InputMaybe<ImageInput>;
  cv_id?: InputMaybe<Scalars["ID"]>;
  deadline?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_date?: InputMaybe<Scalars["DateTime"]>;
  experience?: InputMaybe<DateInput>;
  favourite?: InputMaybe<Scalars["Boolean"]>;
  fields?: InputMaybe<Array<InputMaybe<FieldInput>>>;
  flight_booking_reminder_date?: InputMaybe<Scalars["DateTime"]>;
  follow_up_id?: InputMaybe<Scalars["Int"]>;
  gt_answer?: InputMaybe<Scalars["String"]>;
  inbound_email?: InputMaybe<InboundEmailInput>;
  interview_platform_url?: InputMaybe<Scalars["String"]>;
  interviewed?: InputMaybe<Scalars["Boolean"]>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  maximum_video_duration?: InputMaybe<Scalars["Int"]>;
  measure_of_impacts?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  mode?: InputMaybe<Scalars["String"]>;
  onward_arrival_airport?: InputMaybe<Scalars["String"]>;
  onward_time?: InputMaybe<Scalars["DateTime"]>;
  opportunity_id?: InputMaybe<Scalars["ID"]>;
  paid?: InputMaybe<Scalars["Boolean"]>;
  person_id?: InputMaybe<Scalars["ID"]>;
  questionnaire_answers?: InputMaybe<Scalars["JSON"]>;
  /** The base64 encoded version of the questionnaire attachment to upload. */
  questionnaire_attachment?: InputMaybe<ImageInput>;
  /** Array of new questionnaires to be assigned with deadline */
  questionnaires_to_add?: InputMaybe<
    Array<InputMaybe<NewApplicationQuestionnaire>>
  >;
  /** Array of questionnaire ids to be removed */
  questionnaires_to_remove?: InputMaybe<Scalars["JSON"]>;
  return_departure_airport?: InputMaybe<Scalars["String"]>;
  return_time?: InputMaybe<Scalars["DateTime"]>;
  slot_id?: InputMaybe<Scalars["Int"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  testimonial?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  video_assessment_answer?: InputMaybe<Scalars["String"]>;
};

export type OpportunityApplicationList = {
  __typename?: "OpportunityApplicationList";
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
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};

export type OpportunityApplicationMutationQueryApplicationBulkMessageArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  text?: InputMaybe<Scalars["String"]>;
};

export type OpportunityApplicationMutationQueryApplicationExtendExperienceArgs =
  {
    experience_end_date: Scalars["DateTime"];
    id: Scalars["ID"];
  };

export type OpportunityApplicationMutationQueryApplicationExtendRemoteExperienceArgs =
  {
    id: Scalars["ID"];
    remote_end_date: Scalars["DateTime"];
  };

export type OpportunityApplicationMutationQueryApplicationQuestionnaireUpdateArgs =
  {
    id: Scalars["ID"];
    opportunity_application?: InputMaybe<OpportunityApplicationQuestionnaireInput>;
  };

export type OpportunityApplicationMutationQueryApplicationScorecardAttributeDeleteArgs =
  {
    id: Scalars["ID"];
  };

export type OpportunityApplicationMutationQueryApproveApplicationArgs = {
  id: Scalars["ID"];
};

export type OpportunityApplicationMutationQueryBreakApprovedApplicationArgs = {
  id: Scalars["ID"];
};

export type OpportunityApplicationMutationQueryBreakRealizationApplicationArgs =
  {
    id: Scalars["ID"];
  };

export type OpportunityApplicationMutationQueryBreakRemoteRealizationArgs = {
  id: Scalars["ID"];
};

export type OpportunityApplicationMutationQueryBulkMatchApplicationsArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type OpportunityApplicationMutationQueryBulkRejectApplicationsArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  rejection_reason_id?: InputMaybe<Scalars["Int"]>;
};

export type OpportunityApplicationMutationQueryBulkTagUpdateForApplicationsArgs =
  {
    application_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  };

export type OpportunityApplicationMutationQueryChangeCustomStatusApplicationArgs =
  {
    id: Scalars["ID"];
    new_status_id?: InputMaybe<Scalars["Int"]>;
  };

export type OpportunityApplicationMutationQueryCompleteApplicationArgs = {
  id: Scalars["ID"];
};

export type OpportunityApplicationMutationQueryCreateApplicationArgs = {
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};

export type OpportunityApplicationMutationQueryCreateScorecardsApplicationArgs =
  {
    application_scorecard?: InputMaybe<Array<InputMaybe<ScorecardInput>>>;
    id: Scalars["ID"];
  };

export type OpportunityApplicationMutationQueryFillNpsResponseArgs = {
  answer?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id: Scalars["ID"];
  question_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type OpportunityApplicationMutationQueryGenerateMosCertificateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type OpportunityApplicationMutationQueryInterviewSlotApplicationArgs = {
  id: Scalars["ID"];
  interview_slots?: InputMaybe<Array<InputMaybe<InterviewSlotInput>>>;
};

export type OpportunityApplicationMutationQueryMatchApplicationArgs = {
  id: Scalars["ID"];
};

export type OpportunityApplicationMutationQueryOfflineAssessmentApplicationArgs =
  {
    id: Scalars["ID"];
    offline_assessments?: InputMaybe<Array<InputMaybe<OfflineAssessmentInput>>>;
  };

export type OpportunityApplicationMutationQueryPayByCashApplicationArgs = {
  id: Scalars["ID"];
};

export type OpportunityApplicationMutationQueryPaymentApplicationArgs = {
  id: Scalars["ID"];
};

export type OpportunityApplicationMutationQueryRealizeApplicationArgs = {
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};

export type OpportunityApplicationMutationQueryRejectApplicationArgs = {
  id: Scalars["ID"];
  rejection_reason_id?: InputMaybe<Scalars["Int"]>;
};

export type OpportunityApplicationMutationQueryRemoteRealizeApplicationArgs = {
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<ApplicationRemoteRealizeInput>;
};

export type OpportunityApplicationMutationQueryReopenApplicationArgs = {
  id: Scalars["ID"];
};

export type OpportunityApplicationMutationQueryScorecardApplicationDeleteArgs =
  {
    id: Scalars["ID"];
  };

export type OpportunityApplicationMutationQueryTestimonialApplicationArgs = {
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};

export type OpportunityApplicationMutationQueryUnrejectApplicationArgs = {
  id: Scalars["ID"];
};

export type OpportunityApplicationMutationQueryUpdateApplicationArgs = {
  id: Scalars["ID"];
  opportunity_application?: InputMaybe<OpportunityApplicationInput>;
};

export type OpportunityApplicationMutationQueryUpdateApplicationFlightDetailsArgs =
  {
    id: Scalars["ID"];
    opportunity_application?: InputMaybe<OpportunityApplicationInput>;
  };

export type OpportunityApplicationMutationQueryUpdateApplicationScorecardAttributeArgs =
  {
    application_scorecard?: InputMaybe<ScorecardInput>;
    id: Scalars["ID"];
  };

export type OpportunityApplicationMutationQueryUpdateFlightDetailsArgs = {
  application_flight_token: Scalars["String"];
  flight_details: FlightDetailsInput;
};

export type OpportunityApplicationMutationQueryUpdateInterviewDetailsApplicationArgs =
  {
    attendee_emails?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    id: Scalars["ID"];
    opportunity_application?: InputMaybe<OpportunityApplicationInput>;
  };

export type OpportunityApplicationMutationQueryWithdrawApplicationArgs = {
  id: Scalars["ID"];
};

export type OpportunityApplicationPermissionType = {
  __typename?: "OpportunityApplicationPermissionType";
  can_access_ep_contract?: Maybe<Scalars["Boolean"]>;
  can_be_approval_broken?: Maybe<Scalars["Boolean"]>;
  can_be_approved_ep?: Maybe<Scalars["Boolean"]>;
  can_be_approved_tn?: Maybe<Scalars["Boolean"]>;
  can_be_completed?: Maybe<Scalars["Boolean"]>;
  can_be_favourited?: Maybe<Scalars["Boolean"]>;
  can_be_matched?: Maybe<Scalars["Boolean"]>;
  can_be_realize_broken?: Maybe<Scalars["Boolean"]>;
  can_be_realized?: Maybe<Scalars["Boolean"]>;
  can_be_rejected?: Maybe<Scalars["Boolean"]>;
  can_be_remote_realized?: Maybe<Scalars["Boolean"]>;
  can_be_reopened?: Maybe<Scalars["Boolean"]>;
  can_be_unrejected?: Maybe<Scalars["Boolean"]>;
  can_be_withdrawn?: Maybe<Scalars["Boolean"]>;
  can_break_remote_realization?: Maybe<Scalars["Boolean"]>;
  can_edit_managers?: Maybe<Scalars["Boolean"]>;
  can_extend_experience?: Maybe<Scalars["Boolean"]>;
  can_extend_remote_experience?: Maybe<Scalars["Boolean"]>;
  can_fill_complete_ldm?: Maybe<Scalars["Boolean"]>;
  can_fill_standards?: Maybe<Scalars["Boolean"]>;
  can_generate_mos_certificate?: Maybe<Scalars["Boolean"]>;
  can_mark_match_paid?: Maybe<Scalars["Boolean"]>;
  can_mark_realize_paid?: Maybe<Scalars["Boolean"]>;
  can_sign_an?: Maybe<Scalars["Boolean"]>;
  can_update?: Maybe<Scalars["Boolean"]>;
  can_view_mos_certificate?: Maybe<Scalars["Boolean"]>;
  has_completed_ldm?: Maybe<Scalars["Boolean"]>;
  has_completed_nps?: Maybe<Scalars["Boolean"]>;
  has_filled_acceptance_note?: Maybe<Scalars["Boolean"]>;
  has_filled_all_standards?: Maybe<Scalars["Boolean"]>;
  has_filled_complete_ldm?: Maybe<Scalars["Boolean"]>;
  has_paid_for_match?: Maybe<Scalars["Boolean"]>;
  has_paid_for_realize?: Maybe<Scalars["Boolean"]>;
  should_complete_ldm?: Maybe<Scalars["Boolean"]>;
  should_complete_nps?: Maybe<Scalars["Boolean"]>;
  should_pay_at_match?: Maybe<Scalars["Boolean"]>;
  should_pay_at_realize?: Maybe<Scalars["Boolean"]>;
};

export type OpportunityApplicationQuery = {
  allOpportunityApplication?: Maybe<OpportunityApplicationList>;
  allOpportunityApplicationDownload?: Maybe<Scalars["String"]>;
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
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityApplicationQueryAllOpportunityApplicationDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<ApplicationFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityApplicationQueryApplicationCsvArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type OpportunityApplicationQueryApplicationInterviewSlotsArgs = {
  id: Scalars["ID"];
};

export type OpportunityApplicationQueryApplicationOfflineAssessmentsArgs = {
  id: Scalars["ID"];
};

export type OpportunityApplicationQueryApplicationTestimonialsArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityApplicationQueryBulkCvDownloadArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type OpportunityApplicationQueryFlightDetailsArgs = {
  application_flight_token: Scalars["String"];
};

export type OpportunityApplicationQueryGetApplicationArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type OpportunityApplicationQueryGetInboundEmailApplicationArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type OpportunityApplicationQueryUnbilledApplicationsArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  id: Scalars["ID"];
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityApplicationQuestionnaireInput = {
  application_questionnaires?: InputMaybe<
    Array<InputMaybe<ApplicationQuestionnaireInput>>
  >;
};

/** The connection type for Opportunity. */
export type OpportunityConnection = {
  __typename?: "OpportunityConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OpportunityEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Opportunity>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

export type OpportunityDurationType = {
  __typename?: "OpportunityDurationType";
  accommodation?: Maybe<Scalars["String"]>;
  duration_max?: Maybe<Scalars["Int"]>;
  duration_min?: Maybe<Scalars["Int"]>;
  duration_type?: Maybe<Scalars["String"]>;
  either_of_salary_or_accommodation?: Maybe<Scalars["Boolean"]>;
  id?: Maybe<Scalars["ID"]>;
  programme?: Maybe<Programme>;
  /** Gross Salary */
  salary?: Maybe<Scalars["String"]>;
};

export type OpportunityDurationTypeQuery = {
  opportunityDurationTypes?: Maybe<Array<Maybe<OpportunityDurationType>>>;
};

/** An edge in a connection. */
export type OpportunityEdge = {
  __typename?: "OpportunityEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Opportunity>;
};

export type OpportunityFilter = {
  /** Available types - covered, not_covered */
  accommodation_covered?: InputMaybe<Scalars["String"]>;
  /** Available types - provided, not_provided */
  accommodation_provided?: InputMaybe<Scalars["String"]>;
  applications_closing?: InputMaybe<WorkScheduleInput>;
  background_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  backgrounds?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  branches?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  committee?: InputMaybe<Scalars["Int"]>;
  committee_scope?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  company_size?: InputMaybe<Scalars["Int"]>;
  company_type?: InputMaybe<Scalars["Int"]>;
  converted_project_fee?: InputMaybe<RangeInput>;
  created?: InputMaybe<WorkScheduleInput>;
  created_from?: InputMaybe<Scalars["String"]>;
  created_via?: InputMaybe<Scalars["String"]>;
  date_opened?: InputMaybe<DateInput>;
  date_submitted_for_review?: InputMaybe<Scalars["DateTime"]>;
  departments?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  duration?: InputMaybe<RangeInput>;
  /** Available types - short, medium, long */
  duration_type?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  earliest_start_date?: InputMaybe<DateInput>;
  exclude_home_mcs?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  exclude_regions?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  experience_types?: InputMaybe<Array<ExperienceType>>;
  /** Available types - covered, not_covered */
  food_covered?: InputMaybe<Scalars["String"]>;
  /** Available types - provided, not_provided */
  food_provided?: InputMaybe<Scalars["String"]>;
  global_projects?: InputMaybe<Scalars["Boolean"]>;
  has_managers?: InputMaybe<Scalars["Boolean"]>;
  has_opportunity_applications?: InputMaybe<Scalars["Boolean"]>;
  home_mcs?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  industries?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  is_favourited?: InputMaybe<Scalars["Boolean"]>;
  is_project_enabled?: InputMaybe<Scalars["Boolean"]>;
  issues?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  language_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  languages?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  last_interaction?: InputMaybe<DateInput>;
  latest_end_date?: InputMaybe<DateInput>;
  managers?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  nationalities?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  open_to?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  organisation?: InputMaybe<Scalars["Int"]>;
  organisation_size?: InputMaybe<Scalars["Int"]>;
  organisation_type?: InputMaybe<Scalars["Int"]>;
  organisations?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  partner_type?: InputMaybe<Array<PartnerTypes>>;
  programmes?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  project_id?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  regions?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  remote_opportunity?: InputMaybe<Scalars["Boolean"]>;
  sdg_goals?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sdg_targets?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  skill_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  skills?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  sort?: InputMaybe<OpportunitySortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  status?: InputMaybe<Scalars["String"]>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  study_level_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  study_levels?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  sub_products?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** Available types - covered, not_covered */
  transportation_covered?: InputMaybe<Scalars["String"]>;
  /** Available types - provided, not_provided */
  transportation_provided?: InputMaybe<Scalars["String"]>;
  work_fields?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type OpportunityInput = {
  applications_close_date?: InputMaybe<Scalars["DateTime"]>;
  backgrounds?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  branch_id?: InputMaybe<Scalars["Int"]>;
  company_description?: InputMaybe<Scalars["String"]>;
  /** The base64 encoded version of the cover image to upload. */
  cover_photo?: InputMaybe<ImageInput>;
  currency_id?: InputMaybe<Scalars["Int"]>;
  description?: InputMaybe<Scalars["String"]>;
  duration_max?: InputMaybe<Scalars["Int"]>;
  duration_min?: InputMaybe<Scalars["Int"]>;
  earliest_start_date?: InputMaybe<Scalars["DateTime"]>;
  experience_type?: InputMaybe<ExperienceType>;
  external_opportunity_id?: InputMaybe<Scalars["String"]>;
  external_opportunity_link?: InputMaybe<Scalars["String"]>;
  google_place_id?: InputMaybe<Scalars["String"]>;
  home_lc_id?: InputMaybe<Scalars["Int"]>;
  host_lc_id?: InputMaybe<Scalars["Int"]>;
  is_global_project?: InputMaybe<Scalars["String"]>;
  languages?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  lat?: InputMaybe<Scalars["Float"]>;
  latest_end_date?: InputMaybe<Scalars["DateTime"]>;
  legal_info?: InputMaybe<LegalInfoInput>;
  lng?: InputMaybe<Scalars["Float"]>;
  location?: InputMaybe<Scalars["String"]>;
  logistics_info?: InputMaybe<LogisticsInfoInput>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  measure_of_impacts?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  meta?: InputMaybe<OpportunityMetaInput>;
  nationalities?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  openings?: InputMaybe<Scalars["Int"]>;
  opportunity_duration_type_id?: InputMaybe<Scalars["Int"]>;
  preferred_locations?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** The base64 encoded version of the profile photo to upload. */
  profile_photo?: InputMaybe<ImageInput>;
  programme_id?: InputMaybe<Scalars["Int"]>;
  project_description?: InputMaybe<Scalars["String"]>;
  project_duration?: InputMaybe<Scalars["Int"]>;
  project_fee_cents?: InputMaybe<Scalars["Int"]>;
  project_id?: InputMaybe<Scalars["Int"]>;
  project_name?: InputMaybe<Scalars["String"]>;
  questionnaire_id?: InputMaybe<Scalars["Int"]>;
  redirect_to_external_opportunity?: InputMaybe<Scalars["Boolean"]>;
  remote_experience_details?: InputMaybe<RemoteExperienceInput>;
  role_info?: InputMaybe<RoleInfoInput>;
  scorecard_id?: InputMaybe<Scalars["Int"]>;
  sdg_attributes?: InputMaybe<SdgInfoInput>;
  skills?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  specifics_info?: InputMaybe<SpecificsInfoInput>;
  study_levels?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sub_product_id?: InputMaybe<Scalars["Int"]>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  team_id?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
  tm_details?: InputMaybe<TmDetailsInput>;
  tn_manager_id?: InputMaybe<Scalars["Int"]>;
  transparent_fee_details?: InputMaybe<OpportunityTransparentFeeDetailsInput>;
  work_hours?: InputMaybe<Scalars["JSON"]>;
};

export type OpportunityList = {
  __typename?: "OpportunityList";
  data?: Maybe<Array<Maybe<Opportunity>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type OpportunityMetaInput = {
  video_url?: InputMaybe<Scalars["String"]>;
};

/** OpportunityMetaType records */
export type OpportunityMetaType = {
  __typename?: "OpportunityMetaType";
  created_from?: Maybe<Scalars["String"]>;
  created_via?: Maybe<Scalars["String"]>;
  video_url?: Maybe<Scalars["String"]>;
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
  opportunity_id?: InputMaybe<Scalars["ID"]>;
  opportunity_question?: InputMaybe<OpportunityQuestionInput>;
};

export type OpportunityMutationQueryAddSelectionProcessArgs = {
  opportunity_id: Scalars["ID"];
  selection_process?: InputMaybe<SelectionProcessInput>;
};

export type OpportunityMutationQueryAssignQuestionnaireArgs = {
  id: Scalars["ID"];
  questionnaire_id: Scalars["ID"];
};

export type OpportunityMutationQueryBulkAssignManagersForOpportunitiesArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type OpportunityMutationQueryBulkOpenOpportunitiesArgs = {
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type OpportunityMutationQueryBulkRemoveOpportunityQuestionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type OpportunityMutationQueryBulkTagUpdateForOpportunitiesArgs = {
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type OpportunityMutationQueryBulkUnassignManagersForOpportunitiesArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  opportunity_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type OpportunityMutationQueryCreateCommentForOpportunityArgs = {
  comment?: InputMaybe<CommentInput>;
  opportunity_id: Scalars["ID"];
};

export type OpportunityMutationQueryCreateCustomStatusOpportunityArgs = {
  custom_status?: InputMaybe<CustomStatusInput>;
  opportunity_id: Scalars["ID"];
};

export type OpportunityMutationQueryCreateLocalVolunteerOpportunityArgs = {
  applications_close_date: Scalars["DateTime"];
  id: Scalars["ID"];
  openings: Scalars["Int"];
};

export type OpportunityMutationQueryCreateOpportunityArgs = {
  opportunity?: InputMaybe<OpportunityInput>;
};

export type OpportunityMutationQueryCreateProjectArgs = {
  opportunity?: InputMaybe<ProjectInput>;
};

export type OpportunityMutationQueryDeleteCustomStatusOpportunityArgs = {
  id: Scalars["ID"];
  opportunity_id: Scalars["ID"];
};

export type OpportunityMutationQueryDuplicateOpportunityArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryFavouriteOpportunityArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryMarkOpportunityRemoteArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryOfflineAssessmentOpportunityArgs = {
  id: Scalars["ID"];
  offline_assessments?: InputMaybe<Array<InputMaybe<OfflineAssessmentInput>>>;
};

export type OpportunityMutationQueryOpenOpportunityArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryOpportunityIncrementViewsArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryOpportunityMarkRemoteArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryOpportunityRemoveCoverPhotoArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryOpportunityReportArgs = {
  additional_information?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  remark?: InputMaybe<Scalars["String"]>;
};

export type OpportunityMutationQueryOpportunitySubmitForReviewArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryOpportunityUnarchiveArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryOpportunityUnmarkRemoteArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryOpportunityUnpublishArgs = {
  id: Scalars["ID"];
  reason_id?: InputMaybe<Scalars["Int"]>;
  remarks?: InputMaybe<Scalars["String"]>;
};

export type OpportunityMutationQueryRemoveOpportunityArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryRemoveOpportunityCoverPhotoArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryRemoveOpportunityQuestionArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryRemoveSelectionProcessArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryReportOpportunityArgs = {
  additional_information?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  remark?: InputMaybe<Scalars["String"]>;
};

export type OpportunityMutationQueryResolveCommentArgs = {
  comment_id: Scalars["ID"];
  id: Scalars["ID"];
};

export type OpportunityMutationQuerySelectionProcessBulkCreateArgs = {
  opportunity_id: Scalars["ID"];
  selection_processes?: InputMaybe<Array<InputMaybe<SelectionProcessInput>>>;
};

export type OpportunityMutationQuerySelectionProcessBulkDeleteArgs = {
  opportunity_id: Scalars["ID"];
  selection_process_ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type OpportunityMutationQuerySelectionProcessBulkUpdateArgs = {
  opportunity_id: Scalars["ID"];
  selection_processes?: InputMaybe<
    Array<InputMaybe<UpdateSelectionProcessInput>>
  >;
};

export type OpportunityMutationQuerySubmitOpportunityForReviewArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryUnarchiveOpportunityArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryUnfavouriteOpportunityArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryUnmarkOpportunityRemoteArgs = {
  id: Scalars["ID"];
};

export type OpportunityMutationQueryUnpublishOpportunityArgs = {
  id: Scalars["ID"];
  reason_id?: InputMaybe<Scalars["Int"]>;
  remarks?: InputMaybe<Scalars["String"]>;
};

export type OpportunityMutationQueryUpdateCustomStatusOpportunityArgs = {
  custom_status?: InputMaybe<CustomStatusInput>;
  id: Scalars["ID"];
  opportunity_id: Scalars["ID"];
};

export type OpportunityMutationQueryUpdateOpportunityArgs = {
  id: Scalars["ID"];
  opportunity?: InputMaybe<OpportunityInput>;
};

export type OpportunityMutationQueryUpdateOpportunityQuestionArgs = {
  id: Scalars["ID"];
  opportunity_question?: InputMaybe<OpportunityQuestionInput>;
};

export type OpportunityMutationQueryUpdateProjectArgs = {
  id: Scalars["ID"];
  opportunity?: InputMaybe<ProjectInput>;
};

export type OpportunityMutationQueryUpdateSelectionProcessArgs = {
  id: Scalars["ID"];
  selection_process?: InputMaybe<SelectionProcessInput>;
};

export type OpportunityMutationQueryWeeklyActivitiesBulkCreateArgs = {
  opportunity_id: Scalars["ID"];
  weekly_activities?: InputMaybe<Array<InputMaybe<WeeklyActivityInput>>>;
};

export type OpportunityMutationQueryWeeklyActivitiesBulkDeleteArgs = {
  opportunity_id: Scalars["ID"];
  weekly_activities_ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type OpportunityPermissionType = {
  __typename?: "OpportunityPermissionType";
  can_apply_to_local_volunteer?: Maybe<Scalars["Boolean"]>;
  can_be_applied_to?: Maybe<Scalars["Boolean"]>;
  can_create_local_volunteer?: Maybe<Scalars["Boolean"]>;
  can_create_slot?: Maybe<Scalars["Boolean"]>;
  can_edit_managers?: Maybe<Scalars["Boolean"]>;
  can_mark_gep?: Maybe<Scalars["Boolean"]>;
  can_mark_remote_opportunity?: Maybe<Scalars["Boolean"]>;
  can_mark_unremote_opportunity?: Maybe<Scalars["Boolean"]>;
  can_open?: Maybe<Scalars["Boolean"]>;
  can_un_publish?: Maybe<Scalars["Boolean"]>;
  can_update?: Maybe<Scalars["Boolean"]>;
  view_applications?: Maybe<Scalars["Boolean"]>;
};

export type OpportunityPotentialCandidate = {
  comments?: InputMaybe<Scalars["String"]>;
  opportunity_id?: InputMaybe<Scalars["Int"]>;
  person_id?: InputMaybe<Scalars["Int"]>;
};

export type OpportunityPotentialCandidateQuery = {
  getWatchlist?: Maybe<Array<Maybe<Person>>>;
};

export type OpportunityPotentialCandidateQueryGetWatchlistArgs = {
  opportunity_id?: InputMaybe<Scalars["Int"]>;
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
  opportunity_id: Scalars["Int"];
  person_id: Scalars["ID"];
};

export type OpportunityPotentialCandidateType = {
  __typename?: "OpportunityPotentialCandidateType";
  comments?: Maybe<Array<Maybe<Comment>>>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  opportunity?: Maybe<Opportunity>;
  person?: Maybe<Person>;
  required_backgrounds_percentage?: Maybe<Scalars["Int"]>;
  required_languages_percentage?: Maybe<Scalars["Int"]>;
  required_skills_percentage?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type OpportunityQuery = {
  /** @deprecated Use "opportunities" field instead. */
  allOpportunity?: Maybe<OpportunityList>;
  /** @deprecated Use "downloadOpportunities" field instead. */
  allOpportunityDownload?: Maybe<Scalars["String"]>;
  /** @deprecated Use "opportunities" field with "is_v2" boolean argument as true instead. */
  allOpportunityV2?: Maybe<OpportunityList>;
  downloadOpportunities?: Maybe<Scalars["String"]>;
  favouriteOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  featuredOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
  /** @deprecated Use "opportunity" field instead. */
  getOpportunity?: Maybe<Opportunity>;
  /** @deprecated Use "opportunityQuestions" field instead. */
  getOpportunityQuestions?: Maybe<Array<Maybe<OpportunityQuestion>>>;
  /** @deprecated Use "opportunityTestimonials" field instead. */
  getOpportunityTestimonials?: Maybe<Array<Maybe<OpportunityApplication>>>;
  /** @deprecated Use "opportunityTranslations" field instead. */
  getOpportunityTranslations?: Maybe<Scalars["JSON"]>;
  myOpportunities?: Maybe<OpportunityList>;
  opportunities?: Maybe<OpportunityList>;
  opportunity?: Maybe<Opportunity>;
  /** List all the custom statuses for an opportunity */
  opportunityCustomStatuses?: Maybe<Array<Maybe<CustomStatusType>>>;
  opportunityDiversification?: Maybe<Array<Maybe<Office>>>;
  opportunityQuestions?: Maybe<Array<Maybe<OpportunityQuestion>>>;
  opportunityTestimonials?: Maybe<Array<Maybe<OpportunityApplication>>>;
  opportunityTranslations?: Maybe<Scalars["JSON"]>;
  projects?: Maybe<OpportunityList>;
  projectsList?: Maybe<Array<Maybe<Opportunity>>>;
  /** @deprecated Use "searchOpportunities" field instead. */
  searchAllOpportunity?: Maybe<OpportunityList>;
  searchOpportunities?: Maybe<OpportunityList>;
  similarOpportunities?: Maybe<OpportunityList>;
  stats2?: Maybe<Scalars["JSON"]>;
};

export type OpportunityQueryAllOpportunityArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  smart_search?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityQueryAllOpportunityDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityQueryAllOpportunityV2Args = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityQueryDownloadOpportunitiesArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityQueryFeaturedOpportunitiesArgs = {
  type?: InputMaybe<Scalars["String"]>;
};

export type OpportunityQueryGetOpportunityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type OpportunityQueryGetOpportunityQuestionsArgs = {
  opportunity_id: Scalars["ID"];
};

export type OpportunityQueryGetOpportunityTestimonialsArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type OpportunityQueryGetOpportunityTranslationsArgs = {
  id: Scalars["ID"];
  language_code: Scalars["String"];
};

export type OpportunityQueryMyOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  manager_id?: InputMaybe<Scalars["Int"]>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityQueryOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  is_v2?: InputMaybe<Scalars["Boolean"]>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  smart_search?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityQueryOpportunityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type OpportunityQueryOpportunityCustomStatusesArgs = {
  id: Scalars["ID"];
};

export type OpportunityQueryOpportunityDiversificationArgs = {
  filtered_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  mc_id: Scalars["Int"];
  programme_id: Scalars["Int"];
  start_date: Scalars["DateTime"];
};

export type OpportunityQueryOpportunityQuestionsArgs = {
  opportunity_id: Scalars["ID"];
};

export type OpportunityQueryOpportunityTestimonialsArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type OpportunityQueryOpportunityTranslationsArgs = {
  id: Scalars["ID"];
  language_code: Scalars["String"];
};

export type OpportunityQueryProjectsArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  pagination?: InputMaybe<Pagination>;
  q?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityQuerySearchAllOpportunityArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityQuerySearchOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityQuerySimilarOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type OpportunityQuestion = {
  __typename?: "OpportunityQuestion";
  id?: Maybe<Scalars["ID"]>;
  is_mandatory?: Maybe<Scalars["Boolean"]>;
  parent?: Maybe<OpportunityQuestion>;
  position?: Maybe<Scalars["Int"]>;
  question_text?: Maybe<Scalars["String"]>;
  question_type?: Maybe<Scalars["String"]>;
  sub_questions?: Maybe<OpportunityQuestionConnection>;
};

export type OpportunityQuestionSub_QuestionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** The connection type for OpportunityQuestion. */
export type OpportunityQuestionConnection = {
  __typename?: "OpportunityQuestionConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OpportunityQuestionEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<OpportunityQuestion>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type OpportunityQuestionEdge = {
  __typename?: "OpportunityQuestionEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<OpportunityQuestion>;
};

export type OpportunityQuestionInput = {
  is_mandatory?: InputMaybe<Scalars["Boolean"]>;
  parent_id?: InputMaybe<Scalars["ID"]>;
  position?: InputMaybe<Scalars["Int"]>;
  question_text?: InputMaybe<Scalars["String"]>;
  /** Options - [:text, :paragraph, :dichotomous, :attachment, :checkbox, :multiple_choice] */
  question_type?: InputMaybe<Scalars["String"]>;
};

export enum OpportunitySortOption {
  Application = "application",
  ApplicationCount = "application_count",
  ApplicationsClosing = "applications_closing",
  AverageNpsScore = "average_nps_score",
  BranchName = "branch_name",
  Branches = "branches",
  Committee = "committee",
  Company = "company",
  CompanySize = "company_size",
  CompanyType = "company_type",
  CreatedAt = "created_at",
  CreatedVia = "created_via",
  DateOpened = "date_opened",
  Departments = "departments",
  DurationMax = "duration_max",
  DurationMin = "duration_min",
  DurationType = "duration_type",
  EarliestStartDate = "earliest_start_date",
  HomeMcs = "home_mcs",
  HostLcName = "host_lc_name",
  HostMcName = "host_mc_name",
  Industries = "industries",
  IsGe = "is_ge",
  IsGep = "is_gep",
  Issues = "issues",
  LatestEndDate = "latest_end_date",
  NpsScore = "nps_score",
  OpenTo = "open_to",
  OrganisationName = "organisation_name",
  Price = "price",
  Programmes = "programmes",
  Regions = "regions",
  Relevance = "relevance",
  SdgGoal = "sdg_goal",
  SdgTarget = "sdg_target",
  Status = "status",
  SubProduct = "sub_product",
  Title = "title",
  UpdatedAt = "updated_at",
  ViewCount = "view_count",
  WorkFields = "work_fields",
}

export type OpportunityTransparentFeeDetailsInput = {
  covers_accomodation?: InputMaybe<Scalars["Boolean"]>;
  covers_administrative_costs?: InputMaybe<Scalars["Boolean"]>;
  covers_leadership_spaces?: InputMaybe<Scalars["Boolean"]>;
  covers_pickup?: InputMaybe<Scalars["Boolean"]>;
  sponsored_by?: InputMaybe<Scalars["String"]>;
};

/** OpportunityTransparentFeeDetailsType records */
export type OpportunityTransparentFeeDetailsType = {
  __typename?: "OpportunityTransparentFeeDetailsType";
  covers_accomodation?: Maybe<Scalars["Boolean"]>;
  covers_administrative_costs?: Maybe<Scalars["Boolean"]>;
  covers_leadership_spaces?: Maybe<Scalars["Boolean"]>;
  covers_pickup?: Maybe<Scalars["Boolean"]>;
  sponsored_by?: Maybe<Scalars["String"]>;
};

export type Organisation = {
  __typename?: "Organisation";
  active_opportunities_count?: Maybe<Scalars["Int"]>;
  address_detail?: Maybe<AddressInfo>;
  backgrounds?: Maybe<Array<Maybe<ConstantMap>>>;
  branches?: Maybe<BranchConnection>;
  branches_count?: Maybe<Scalars["Int"]>;
  comments?: Maybe<CommentConnection>;
  company_stats?: Maybe<Scalars["JSON"]>;
  completeness?: Maybe<Scalars["JSON"]>;
  contact_detail?: Maybe<ContactInfo>;
  contact_people?: Maybe<Scalars["String"]>;
  cover_photo?: Maybe<Scalars["String"]>;
  custom_website_footer_url?: Maybe<Scalars["String"]>;
  employees_count?: Maybe<Scalars["Int"]>;
  experience_count?: Maybe<Scalars["String"]>;
  follow_up?: Maybe<Constant>;
  has_employee?: Maybe<Scalars["Boolean"]>;
  has_employees?: Maybe<Scalars["Boolean"]>;
  has_opportunities?: Maybe<Scalars["Boolean"]>;
  home_lc?: Maybe<Office>;
  id: Scalars["ID"];
  industries?: Maybe<Array<Maybe<Constant>>>;
  /** @deprecated Removed. Use partner_type field which will support different partner_type(global, regional). */
  is_gep?: Maybe<Scalars["Boolean"]>;
  managers?: Maybe<Array<Maybe<Person>>>;
  meta?: Maybe<CompanyMetaType>;
  name?: Maybe<Scalars["String"]>;
  open_opportunities_count?: Maybe<Scalars["Int"]>;
  open_positions?: Maybe<Scalars["Int"]>;
  opportunity_count?: Maybe<Scalars["Int"]>;
  organisation_size?: Maybe<Constant>;
  organisation_type?: Maybe<Constant>;
  partner_type?: Maybe<PartnerTypes>;
  permissions?: Maybe<OrganisationPermissionType>;
  pop_first_sign_up?: Maybe<Scalars["DateTime"]>;
  profile_photo?: Maybe<Scalars["String"]>;
  programmes?: Maybe<Programme>;
  questionnaires?: Maybe<QuestionnaireConnection>;
  registration_no?: Maybe<Scalars["String"]>;
  scorecards?: Maybe<ScorecardConnection>;
  stats?: Maybe<Scalars["JSON"]>;
  status?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  tag_lists?: Maybe<Array<Maybe<TagList>>>;
  testimonials?: Maybe<Array<Maybe<Testimonial>>>;
  todo_type?: Maybe<TodoType>;
  website?: Maybe<Scalars["String"]>;
  year_of_creation?: Maybe<Scalars["Int"]>;
};

export type OrganisationBranchesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganisationCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganisationCover_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars["Boolean"]>;
  cdn_region?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["String"]>;
};

export type OrganisationProfile_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars["Boolean"]>;
  cdn_region?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["String"]>;
};

export type OrganisationQuestionnairesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganisationScorecardsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganisationStatsArgs = {
  end_date: Scalars["DateTime"];
  start_date: Scalars["DateTime"];
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
  id: Scalars["ID"];
};

export type OrganisationMutationQueryArchiveOrganisationArgs = {
  id: Scalars["ID"];
};

export type OrganisationMutationQueryCreateOrganisationArgs = {
  organisation?: InputMaybe<CompanyInput>;
};

export type OrganisationMutationQueryCreateOrganisationScorecardArgs = {
  company_id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  organisation_scorecard_attribute?: InputMaybe<
    Array<InputMaybe<ScorecardAttributeInput>>
  >;
};

export type OrganisationMutationQueryCreateOrganisationScorecardAttributeArgs =
  {
    organisation_scorecard_attribute?: InputMaybe<
      Array<InputMaybe<ScorecardAttributeInput>>
    >;
    scorecard_id: Scalars["ID"];
  };

export type OrganisationMutationQueryDeleteOrganisationScorecardArgs = {
  id: Scalars["ID"];
};

export type OrganisationMutationQueryDeleteOrganisationScorecardAttributeArgs =
  {
    id: Scalars["ID"];
  };

export type OrganisationMutationQueryFollowupOrganisationArgs = {
  follow_up_id?: InputMaybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

export type OrganisationMutationQueryOrganisationApproveArgs = {
  id: Scalars["ID"];
};

export type OrganisationMutationQueryOrganisationArchiveArgs = {
  id: Scalars["ID"];
};

export type OrganisationMutationQueryOrganisationFollowupArgs = {
  follow_up_id?: InputMaybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

export type OrganisationMutationQueryOrganisationRejectArgs = {
  id: Scalars["ID"];
};

export type OrganisationMutationQueryOrganisationRemovePartnerTypeArgs = {
  id: Scalars["ID"];
};

export type OrganisationMutationQueryOrganisationScorecardAttributeCreateArgs =
  {
    organisation_scorecard_attribute?: InputMaybe<
      Array<InputMaybe<ScorecardAttributeInput>>
    >;
    scorecard_id: Scalars["ID"];
  };

export type OrganisationMutationQueryOrganisationScorecardAttributeDeleteArgs =
  {
    id: Scalars["ID"];
  };

export type OrganisationMutationQueryOrganisationScorecardAttributeUpdateArgs =
  {
    id: Scalars["ID"];
    name?: InputMaybe<Scalars["String"]>;
  };

export type OrganisationMutationQueryOrganisationScorecardCreateArgs = {
  company_id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  organisation_scorecard_attribute?: InputMaybe<
    Array<InputMaybe<ScorecardAttributeInput>>
  >;
};

export type OrganisationMutationQueryOrganisationScorecardDeleteArgs = {
  id: Scalars["ID"];
};

export type OrganisationMutationQueryOrganisationScorecardUpdateArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
};

export type OrganisationMutationQueryOrganisationSetPartnerTypeArgs = {
  id: Scalars["ID"];
  partner_type: PartnerTypes;
};

export type OrganisationMutationQueryRejectOrganisationArgs = {
  id: Scalars["ID"];
};

export type OrganisationMutationQueryRemoveOrganisationPartnerTypeArgs = {
  id: Scalars["ID"];
};

export type OrganisationMutationQuerySetOrganisationPartnerTypeArgs = {
  id: Scalars["ID"];
  partner_type: PartnerTypes;
};

export type OrganisationMutationQueryUpdateOrganisationArgs = {
  id: Scalars["ID"];
  organisation?: InputMaybe<CompanyInput>;
};

export type OrganisationMutationQueryUpdateOrganisationScorecardArgs = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
};

export type OrganisationMutationQueryUpdateOrganisationScorecardAttributeArgs =
  {
    id: Scalars["ID"];
    name?: InputMaybe<Scalars["String"]>;
  };

export type OrganisationPermissionType = {
  __typename?: "OrganisationPermissionType";
  can_approve?: Maybe<Scalars["Boolean"]>;
  can_archive?: Maybe<Scalars["Boolean"]>;
  can_reject?: Maybe<Scalars["Boolean"]>;
  can_remove_partner_type?: Maybe<Scalars["Boolean"]>;
  can_update?: Maybe<Scalars["Boolean"]>;
  can_update_partner_type?: Maybe<Scalars["Boolean"]>;
};

export type OrganisationQuery = {
  /** @deprecated Use "organisations" field instead. */
  allOrganisation?: Maybe<CompanyList>;
  /** @deprecated Use "organisationDownload" field instead. */
  allOrganisationDownload?: Maybe<Scalars["String"]>;
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
  organisationDownload?: Maybe<Scalars["String"]>;
  organisations?: Maybe<CompanyList>;
};

export type OrganisationQueryAllOrganisationArgs = {
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type OrganisationQueryAllOrganisationDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type OrganisationQueryGetOrganisationArgs = {
  id: Scalars["ID"];
};

export type OrganisationQueryMyOrganisationArgs = {
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type OrganisationQueryOpenOpportunityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type OrganisationQueryOrganisationArgs = {
  id: Scalars["ID"];
};

export type OrganisationQueryOrganisationAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  my?: InputMaybe<Scalars["Boolean"]>;
  q?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
};

export type OrganisationQueryOrganisationAutocompleteMyArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
};

export type OrganisationQueryOrganisationDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type OrganisationQueryOrganisationsArgs = {
  filters?: InputMaybe<CompanyFilter>;
  my?: InputMaybe<Scalars["Boolean"]>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type OrganizationDevelopment = {
  __typename?: "OrganizationDevelopment";
  exchange_type?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  index?: Maybe<Scalars["String"]>;
  mc?: Maybe<Office>;
  month?: Maybe<Scalars["DateTime"]>;
  programme?: Maybe<Programme>;
  score?: Maybe<Scalars["Float"]>;
};

export type OrganizationDevelopmentInput = {
  score?: InputMaybe<Scalars["Float"]>;
};

export type OrganizationDevelopmentMutationQuery = {
  /** Update OrganizationDevelopment */
  updateOrganizationDevelopment?: Maybe<OrganizationDevelopment>;
  /** Update OrganizationDevelopmentTarget */
  updateOrganizationDevelopmentTarget?: Maybe<OrganizationDevelopmentTarget>;
};

export type OrganizationDevelopmentMutationQueryUpdateOrganizationDevelopmentArgs =
  {
    id: Scalars["ID"];
    organization_development?: InputMaybe<OrganizationDevelopmentInput>;
  };

export type OrganizationDevelopmentMutationQueryUpdateOrganizationDevelopmentTargetArgs =
  {
    id: Scalars["ID"];
    organization_development_target?: InputMaybe<OrganizationDevelopmentTargetInput>;
  };

export type OrganizationDevelopmentQuery = {
  organizationDevelopmentGet?: Maybe<OrganizationDevelopment>;
  organizationDevelopmentList: Array<Maybe<OrganizationDevelopment>>;
  organizationDevelopmentTargetGet?: Maybe<OrganizationDevelopmentTarget>;
  organizationDevelopmentTargetList?: Maybe<
    Array<Maybe<OrganizationDevelopmentTarget>>
  >;
};

export type OrganizationDevelopmentQueryOrganizationDevelopmentGetArgs = {
  id: Scalars["ID"];
};

export type OrganizationDevelopmentQueryOrganizationDevelopmentListArgs = {
  exchange_type_filter?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<BaseFilter>;
  index_filter?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  month_filter?: InputMaybe<Scalars["DateTime"]>;
  office_filter?: InputMaybe<Scalars["Int"]>;
  programme_filter?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type OrganizationDevelopmentQueryOrganizationDevelopmentTargetGetArgs = {
  id: Scalars["ID"];
};

export type OrganizationDevelopmentTarget = {
  __typename?: "OrganizationDevelopmentTarget";
  exchange_type?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  month?: Maybe<Scalars["DateTime"]>;
  programme?: Maybe<Programme>;
  target?: Maybe<Scalars["Int"]>;
};

export type OrganizationDevelopmentTargetInput = {
  target?: InputMaybe<Scalars["Int"]>;
};

export type PageComponentDraftType = {
  __typename?: "PageComponentDraftType";
  client_reference_id?: Maybe<Scalars["String"]>;
  component_attachment?: Maybe<ImageType>;
  component_type?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  position?: Maybe<Scalars["Int"]>;
};

export type PageComponentInput = {
  client_reference_id?: InputMaybe<Scalars["String"]>;
  /** The base64 encoded version of the component attachment to upload or external url. */
  component_attachment?: InputMaybe<ImageInput>;
  /** Options - [:header, :sub_header, :bulletin] */
  component_type?: InputMaybe<Scalars["String"]>;
  content?: InputMaybe<Scalars["String"]>;
  page_id?: InputMaybe<Scalars["Int"]>;
  position?: InputMaybe<Scalars["Int"]>;
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
  page_id: Scalars["ID"];
};

export type PageComponentMutationQueryDeletePageComponentArgs = {
  client_reference_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type PageComponentMutationQueryDuplicatePageComponentArgs = {
  id: Scalars["ID"];
};

export type PageComponentMutationQueryPageComponentCreateArgs = {
  page_component?: InputMaybe<PageComponentInput>;
  page_id: Scalars["ID"];
};

export type PageComponentMutationQueryPageComponentDeleteArgs = {
  client_reference_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type PageComponentMutationQueryPageComponentDuplicateArgs = {
  id: Scalars["ID"];
};

export type PageComponentMutationQueryPageComponentUpdateArgs = {
  client_reference_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  page_component?: InputMaybe<PageComponentInput>;
};

export type PageComponentMutationQueryUpdatePageComponentArgs = {
  client_reference_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  page_component?: InputMaybe<PageComponentInput>;
};

export type PageComponentType = {
  __typename?: "PageComponentType";
  client_reference_id?: Maybe<Scalars["String"]>;
  component_attachment?: Maybe<ImageType>;
  component_type?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  position?: Maybe<Scalars["Int"]>;
};

/** The connection type for PageComponentType. */
export type PageComponentTypeConnection = {
  __typename?: "PageComponentTypeConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PageComponentTypeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PageComponentType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type PageComponentTypeEdge = {
  __typename?: "PageComponentTypeEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<PageComponentType>;
};

export type PageFilter = {
  categories?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  committee_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  created_at?: InputMaybe<DateInput>;
  creator_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  is_favourited?: InputMaybe<Scalars["Boolean"]>;
  is_personal?: InputMaybe<Scalars["Boolean"]>;
  office_tag?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<PageSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  updated_at?: InputMaybe<DateInput>;
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

export type PageInput = {
  categories?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  category_id?: InputMaybe<Scalars["Int"]>;
  emoji?: InputMaybe<Scalars["JSON"]>;
  is_personal?: InputMaybe<Scalars["Boolean"]>;
  office_id?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type PageList = {
  __typename?: "PageList";
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
  id: Scalars["ID"];
};

export type PageMutationQueryFavouritePageArgs = {
  id: Scalars["ID"];
};

export type PageMutationQueryMovePageToDraftArgs = {
  id: Scalars["ID"];
};

export type PageMutationQueryPageCreateArgs = {
  page?: InputMaybe<PageInput>;
};

export type PageMutationQueryPageDeleteArgs = {
  id: Scalars["ID"];
};

export type PageMutationQueryPageFavouriteArgs = {
  id: Scalars["ID"];
};

export type PageMutationQueryPageMoveToDraftArgs = {
  id: Scalars["ID"];
};

export type PageMutationQueryPagePublishArgs = {
  id: Scalars["ID"];
};

export type PageMutationQueryPageUnfavouriteArgs = {
  id: Scalars["ID"];
};

export type PageMutationQueryPageUpdateArgs = {
  id: Scalars["ID"];
  page?: InputMaybe<PageInput>;
};

export type PageMutationQueryPublishPageArgs = {
  id: Scalars["ID"];
};

export type PageMutationQueryUnfavouritePageArgs = {
  id: Scalars["ID"];
};

export type PageMutationQueryUpdatePageArgs = {
  id: Scalars["ID"];
  page?: InputMaybe<PageInput>;
};

export type PagePermissionType = {
  __typename?: "PagePermissionType";
  can_delete?: Maybe<Scalars["Boolean"]>;
  can_move_to_draft?: Maybe<Scalars["Boolean"]>;
  can_publish?: Maybe<Scalars["Boolean"]>;
  can_update?: Maybe<Scalars["Boolean"]>;
};

export type PageQuery = {
  getPage?: Maybe<PageType>;
  pages?: Maybe<PageList>;
};

export type PageQueryGetPageArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PageQueryPagesArgs = {
  filters?: InputMaybe<PageFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export enum PageSortOption {
  CreatedAt = "created_at",
  Title = "title",
  UpdatedAt = "updated_at",
}

export type PageType = {
  __typename?: "PageType";
  categories?: Maybe<Array<Maybe<ConstantMap>>>;
  category?: Maybe<Constant>;
  comments?: Maybe<CommentConnection>;
  created_at?: Maybe<Scalars["DateTime"]>;
  creator?: Maybe<Person>;
  date_deleted?: Maybe<Scalars["DateTime"]>;
  date_published?: Maybe<Scalars["DateTime"]>;
  deleted_by?: Maybe<Person>;
  emoji?: Maybe<Scalars["JSON"]>;
  id: Scalars["ID"];
  /** Page favourited? */
  is_favourited?: Maybe<Scalars["Boolean"]>;
  is_personal?: Maybe<Scalars["Boolean"]>;
  office?: Maybe<Office>;
  page_components?: Maybe<PageComponentTypeConnection>;
  /** permissions */
  permissions?: Maybe<PagePermissionType>;
  published_by?: Maybe<Person>;
  status?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type PageTypeCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PageTypePage_ComponentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  status: Scalars["String"];
};

export type Pagination = {
  page?: InputMaybe<Scalars["Int"]>;
  per_page?: InputMaybe<Scalars["Int"]>;
};

export type Paging = {
  __typename?: "Paging";
  current_page?: Maybe<Scalars["Int"]>;
  total_items?: Maybe<Scalars["Int"]>;
  total_pages?: Maybe<Scalars["Int"]>;
};

export type PartnerSignup = {
  __typename?: "PartnerSignup";
  contact_name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  location?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  organisation_name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
};

export type PartnerSignupInput = {
  contact_name?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  location?: InputMaybe<Scalars["String"]>;
  message?: InputMaybe<Scalars["String"]>;
  organisation_name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
};

export type PartnerSignupMutationQuery = {
  /** Create a partners signup. */
  partnerSignupCreate?: Maybe<PartnerSignup>;
};

export type PartnerSignupMutationQueryPartnerSignupCreateArgs = {
  partners_signup?: InputMaybe<PartnerSignupInput>;
};

export enum PartnerTypes {
  Global = "global",
  Regional = "regional",
}

export type PeopleAutocompleteQuery = {
  peopleAutocomplete?: Maybe<Array<Maybe<Person>>>;
  peopleAutocompleteActive?: Maybe<Array<Maybe<Person>>>;
  peopleAutocompleteColleagues?: Maybe<Array<Maybe<Person>>>;
  peopleAutocompleteEmployees?: Maybe<Array<Maybe<Person>>>;
};

export type PeopleAutocompleteQueryPeopleAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type PeopleAutocompleteQueryPeopleAutocompleteActiveArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type PeopleAutocompleteQueryPeopleAutocompleteColleaguesArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type PeopleAutocompleteQueryPeopleAutocompleteEmployeesArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type PeopleFilter = {
  age?: InputMaybe<RangeInput>;
  background_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  campaign_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  committee_scope?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  contacted_at?: InputMaybe<DateInput>;
  contacted_by?: InputMaybe<Scalars["Int"]>;
  current_committee?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  duration?: InputMaybe<RangeInput>;
  earliest_start_date?: InputMaybe<DateInput>;
  employee_created_via?: InputMaybe<Scalars["String"]>;
  follow_ups?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  followed_up?: InputMaybe<Scalars["Boolean"]>;
  followed_up_at?: InputMaybe<DateInput>;
  gender?: InputMaybe<Scalars["String"]>;
  graduation_date?: InputMaybe<DateInput>;
  has_managers?: InputMaybe<Scalars["Boolean"]>;
  has_opportunity_applications?: InputMaybe<Scalars["Boolean"]>;
  home_committee?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  interviewed?: InputMaybe<Scalars["Boolean"]>;
  interviewed_by?: InputMaybe<Scalars["Int"]>;
  invitation_accepted_at?: InputMaybe<DateInput>;
  is_aiesecer?: InputMaybe<Scalars["Boolean"]>;
  is_interviewed?: InputMaybe<Scalars["Boolean"]>;
  is_ixp?: InputMaybe<Scalars["Boolean"]>;
  is_pop_user?: InputMaybe<Scalars["Boolean"]>;
  language_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  last_interaction?: InputMaybe<DateInput>;
  latest_end_date?: InputMaybe<DateInput>;
  lc_alignment_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  managers?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  mcs?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  nationalities?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  organisation_type?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  pop_enabled?: InputMaybe<Scalars["Boolean"]>;
  programmes?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  q?: InputMaybe<Scalars["String"]>;
  referral_type?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  registered?: InputMaybe<DateInput>;
  selected_programmes?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  skill_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sort?: InputMaybe<PeopleSortOption>;
  sort_direction?: InputMaybe<BaseSortDirection>;
  status?: InputMaybe<Scalars["String"]>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  study_levels?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export enum PeopleSortOption {
  Aiesecer = "aiesecer",
  Application = "application",
  ContactedAt = "contacted_at",
  ContactedByName = "contacted_by_name",
  CreatedAt = "created_at",
  Dob = "dob",
  FollowUpName = "follow_up_name",
  FollowedUpAt = "followed_up_at",
  FullName = "full_name",
  Gender = "gender",
  HomeLcName = "home_lc_name",
  HomeMcName = "home_mc_name",
  Interviewed = "interviewed",
  InterviewedAt = "interviewed_at",
  LastActiveAt = "last_active_at",
  LcAlignmentName = "lc_alignment_name",
  ProfessionalExperienceInYears = "professional_experience_in_years",
  ReferralType = "referral_type",
  SelectedProgrammes = "selected_programmes",
  Status = "status",
  UpdatedAt = "updated_at",
}

export type Person = {
  __typename?: "Person";
  academic_experiences?: Maybe<Array<Maybe<PreviousExperience>>>;
  accepted?: Maybe<Scalars["Boolean"]>;
  accepted_count?: Maybe<Scalars["Int"]>;
  accepted_reason?: Maybe<Scalars["String"]>;
  account_manager?: Maybe<Scalars["String"]>;
  active_favourite_events?: Maybe<Array<Maybe<Event>>>;
  active_favourite_opportunities?: Maybe<Array<Maybe<Opportunity>>>;
  address_detail?: Maybe<AddressInfo>;
  aiesec_email?: Maybe<Scalars["String"]>;
  branch_employees?: Maybe<BranchEmployeeConnection>;
  campaign?: Maybe<Campaign>;
  city_id?: Maybe<Scalars["Int"]>;
  client_datas?: Maybe<ClientDataConnection>;
  comments?: Maybe<CommentConnection>;
  contact_detail?: Maybe<ContactInfo>;
  contacted_at?: Maybe<Scalars["DateTime"]>;
  contacted_by?: Maybe<Person>;
  /** @deprecated Removed. Use contact_detail field */
  country_code?: Maybe<Scalars["String"]>;
  cover_photo?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  creator?: Maybe<Person>;
  current_experiences?: Maybe<Array<Maybe<OpportunityApplication>>>;
  current_office?: Maybe<Office>;
  current_positions?: Maybe<Array<MemberPosition>>;
  cv?: Maybe<Attachment>;
  cv_url?: Maybe<Scalars["String"]>;
  cvs?: Maybe<Array<Maybe<Cv>>>;
  deleted_branch_employees?: Maybe<BranchEmployeeConnection>;
  dob?: Maybe<Scalars["Date"]>;
  email?: Maybe<Scalars["String"]>;
  employee_created_via?: Maybe<Scalars["String"]>;
  employee_details?: Maybe<EmployeeDetailsType>;
  expa_settings?: Maybe<ExpaSettings>;
  expired_favourite_events?: Maybe<Array<Maybe<Event>>>;
  expired_favourite_opportunities?: Maybe<Array<Maybe<Opportunity>>>;
  first_name?: Maybe<Scalars["String"]>;
  follow_up?: Maybe<Constant>;
  followed_up_at?: Maybe<Scalars["DateTime"]>;
  followed_up_by?: Maybe<Person>;
  full_name?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  has_opportunity_applications?: Maybe<Scalars["Boolean"]>;
  home_lc?: Maybe<Office>;
  /** home_mc */
  home_mc?: Maybe<Office>;
  id: Scalars["ID"];
  interviewed?: Maybe<Scalars["Boolean"]>;
  introduction?: Maybe<Scalars["String"]>;
  invitation_accepted_at?: Maybe<Scalars["DateTime"]>;
  is_ai_member?: Maybe<Scalars["Boolean"]>;
  is_aiesecer?: Maybe<Scalars["Boolean"]>;
  is_pop_user?: Maybe<Scalars["Boolean"]>;
  is_super_user?: Maybe<Scalars["Boolean"]>;
  is_watchlisted?: Maybe<Scalars["Boolean"]>;
  last_active_at?: Maybe<Scalars["DateTime"]>;
  last_name?: Maybe<Scalars["String"]>;
  latest_academic?: Maybe<PreviousExperience>;
  latest_academic_experience_backgrounds?: Maybe<Array<Maybe<Constant>>>;
  latest_academic_level?: Maybe<Constant>;
  latest_graduation_date?: Maybe<Scalars["DateTime"]>;
  lc_alignment?: Maybe<LcAlignment>;
  linkedin_url?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  managed_branches?: Maybe<Array<Maybe<Branch>>>;
  managed_companies?: Maybe<Array<Maybe<Organisation>>>;
  managed_opportunities?: Maybe<OpportunityConnection>;
  managed_opportunities_count?: Maybe<Scalars["Int"]>;
  managed_sub_branch_ids?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  managers?: Maybe<Array<Maybe<Person>>>;
  member_positions?: Maybe<Array<MemberPosition>>;
  meta?: Maybe<PersonMetaType>;
  middle_names?: Maybe<Scalars["String"]>;
  nationalities_ids?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  notification_settings?: Maybe<Scalars["JSON"]>;
  nps_score?: Maybe<Scalars["String"]>;
  opportunity_applications?: Maybe<OpportunityApplicationConnection>;
  opportunity_applications_count?: Maybe<Scalars["Int"]>;
  /** organisation type */
  organisation_type?: Maybe<Constant>;
  password?: Maybe<Scalars["String"]>;
  payments?: Maybe<Array<Maybe<Payment>>>;
  percentage_of_fulfillment?: Maybe<Scalars["Float"]>;
  /** permissions */
  permissions?: Maybe<PersonPermissionType>;
  person_profile?: Maybe<PersonProfile>;
  /** @deprecated Removed. Use contact_detail field */
  phone?: Maybe<Scalars["String"]>;
  positions?: Maybe<Array<Maybe<Position>>>;
  professional_experience_in_years?: Maybe<Scalars["Int"]>;
  professional_experiences?: Maybe<Array<Maybe<ProfessionalExperience>>>;
  profile_completeness?: Maybe<ProfileCompleteness>;
  profile_photo?: Maybe<Scalars["String"]>;
  programme_fees?: Maybe<Array<Maybe<ProgrammeFee>>>;
  programmes?: Maybe<Array<Maybe<Programme>>>;
  recommended_incoming_programme?: Maybe<Scalars["Int"]>;
  referral_type?: Maybe<Scalars["String"]>;
  rejected_count?: Maybe<Scalars["Int"]>;
  required_backgrounds_percentage?: Maybe<Scalars["Float"]>;
  required_languages_percentage?: Maybe<Scalars["Float"]>;
  required_skills_percentage?: Maybe<Scalars["Float"]>;
  saved_filters?: Maybe<SavedFilterConnection>;
  secure_identity?: Maybe<Scalars["String"]>;
  secure_identity_email?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  status_string?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  tag_lists?: Maybe<Array<Maybe<TagList>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
  todo_type?: Maybe<TodoType>;
  top_languages?: Maybe<Array<Maybe<ConstantMap>>>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  utm_campaign?: Maybe<Scalars["String"]>;
  utm_content?: Maybe<Scalars["String"]>;
  utm_medium?: Maybe<Scalars["String"]>;
  utm_source?: Maybe<Scalars["String"]>;
  utm_term?: Maybe<Scalars["String"]>;
  watchlist_for_opportunity?: Maybe<OpportunityPotentialCandidateType>;
};

export type PersonBranch_EmployeesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PersonClient_DatasArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PersonCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PersonCover_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars["Boolean"]>;
  cdn_region?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["String"]>;
};

export type PersonDeleted_Branch_EmployeesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PersonIs_WatchlistedArgs = {
  opportunity_id?: InputMaybe<Scalars["Int"]>;
};

export type PersonManaged_OpportunitiesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PersonOpportunity_ApplicationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PersonProfile_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars["Boolean"]>;
  cdn_region?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["String"]>;
};

export type PersonRequired_Backgrounds_PercentageArgs = {
  opportunity_id?: InputMaybe<Scalars["Int"]>;
};

export type PersonRequired_Languages_PercentageArgs = {
  opportunity_id?: InputMaybe<Scalars["Int"]>;
};

export type PersonRequired_Skills_PercentageArgs = {
  opportunity_id?: InputMaybe<Scalars["Int"]>;
};

export type PersonSaved_FiltersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  model?: InputMaybe<Scalars["String"]>;
};

export type PersonTop_LanguagesArgs = {
  amount?: InputMaybe<Scalars["Int"]>;
};

export type PersonAcademicInput = {
  backgrounds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  country?: InputMaybe<Scalars["String"]>;
  country_id?: InputMaybe<Scalars["Int"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_date?: InputMaybe<Scalars["DateTime"]>;
  experience_id?: InputMaybe<Scalars["Int"]>;
  organisation_name?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  study_level?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
};

/** Union when expecting Person or Applications */
export type PersonApplicationUnion =
  | Branch
  | BranchEmployee
  | Opportunity
  | OpportunityApplication
  | Person;

/** The connection type for Person. */
export type PersonConnection = {
  __typename?: "PersonConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Person>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type PersonEdge = {
  __typename?: "PersonEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Person>;
};

/** An input object representing arguments for a Person */
export type PersonInput = {
  account_manager_id?: InputMaybe<Scalars["ID"]>;
  address_detail_attributes?: InputMaybe<AddressInput>;
  aiesec_email?: InputMaybe<Scalars["String"]>;
  city_id?: InputMaybe<Scalars["ID"]>;
  contact_detail_attributes?: InputMaybe<ContactInput>;
  /** The base64 encoded version of the cover image to upload. */
  cover_photo?: InputMaybe<ImageInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  cv?: InputMaybe<Scalars["String"]>;
  dob?: InputMaybe<Scalars["Date"]>;
  expa_registered_device_id?: InputMaybe<Scalars["String"]>;
  expa_settings?: InputMaybe<ExpaSettingsInput>;
  first_name?: InputMaybe<Scalars["String"]>;
  follow_up_id?: InputMaybe<Scalars["ID"]>;
  gender?: InputMaybe<Scalars["String"]>;
  has_completed_onboarding?: InputMaybe<Scalars["Boolean"]>;
  home_lc_id?: InputMaybe<Scalars["ID"]>;
  introduction?: InputMaybe<Scalars["String"]>;
  is_pop_user?: InputMaybe<Scalars["Boolean"]>;
  last_name?: InputMaybe<Scalars["String"]>;
  linkedin_url?: InputMaybe<Scalars["String"]>;
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  meta?: InputMaybe<PersonMetaInput>;
  middle_names?: InputMaybe<Scalars["String"]>;
  needs_invite?: InputMaybe<Scalars["Boolean"]>;
  person_profile_attributes?: InputMaybe<ProfileInput>;
  /** The base64 encoded version of the profile photo to upload. */
  profile_photo?: InputMaybe<ImageInput>;
  referral_type?: InputMaybe<Scalars["String"]>;
  registered_device_id?: InputMaybe<Scalars["String"]>;
  summary?: InputMaybe<Scalars["String"]>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type PersonList = {
  __typename?: "PersonList";
  data?: Maybe<Array<Maybe<Person>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

export type PersonMetaInput = {
  allow_email_communication?: InputMaybe<Scalars["String"]>;
  allow_on_pop?: InputMaybe<Scalars["String"]>;
  allow_phone_communication?: InputMaybe<Scalars["String"]>;
  opt_out_of_business_intelligence?: InputMaybe<Scalars["String"]>;
  opt_out_of_push_notification?: InputMaybe<Scalars["String"]>;
  opt_out_of_statistical_data?: InputMaybe<Scalars["String"]>;
};

/** Person MetaType records */
export type PersonMetaType = {
  __typename?: "PersonMetaType";
  allow_email_communication?: Maybe<Scalars["String"]>;
  allow_on_pop?: Maybe<Scalars["String"]>;
  allow_phone_communication?: Maybe<Scalars["String"]>;
  created_via?: Maybe<Scalars["String"]>;
  opt_out_of_business_intelligence?: Maybe<Scalars["String"]>;
  opt_out_of_push_notification?: Maybe<Scalars["String"]>;
  opt_out_of_statistical_data?: Maybe<Scalars["String"]>;
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
  generateEmail?: Maybe<Scalars["String"]>;
  interviewPerson?: Maybe<Person>;
  /** Update Person */
  updatePerson?: Maybe<Person>;
  updatePersonAcademicExperience?: Maybe<PreviousExperience>;
  updatePersonProfessionalExperience?: Maybe<ProfessionalExperience>;
  /** Check username is availale to create Google account */
  validateAiesecEmailUsername?: Maybe<ValidateAiesecEmailUsernameResponse>;
};

export type PersonMutationQueryArchivePersonArgs = {
  id: Scalars["ID"];
};

export type PersonMutationQueryBulkAssignManagersForPeopleArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  person_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type PersonMutationQueryBulkFollowupArgs = {
  follow_up_id: Scalars["Int"];
  person_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type PersonMutationQueryBulkTagUpdateForPeopleArgs = {
  person_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type PersonMutationQueryBulkUnassignManagersForPeopleArgs = {
  manager_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  person_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type PersonMutationQueryCreatePersonArgs = {
  person?: InputMaybe<PersonInput>;
};

export type PersonMutationQueryCreatePersonAcademicExperienceArgs = {
  academic_experience?: InputMaybe<PersonAcademicInput>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonMutationQueryCreatePersonProfessionalExperienceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  professional_experience?: InputMaybe<PersonProfessionalInput>;
};

export type PersonMutationQueryDeleteAcademicExperienceShowArgs = {
  academic_exp_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonMutationQueryDeleteProfessionalExperienceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  professional_exp_id?: InputMaybe<Scalars["ID"]>;
};

export type PersonMutationQueryGenerateCvArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonMutationQueryGenerateEmailArgs = {
  username: Scalars["String"];
};

export type PersonMutationQueryInterviewPersonArgs = {
  accepted?: InputMaybe<Scalars["Boolean"]>;
  accepted_reason?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  interviewed?: InputMaybe<Scalars["Boolean"]>;
};

export type PersonMutationQueryUpdatePersonArgs = {
  id: Scalars["ID"];
  person?: InputMaybe<PersonInput>;
};

export type PersonMutationQueryUpdatePersonAcademicExperienceArgs = {
  academic_exp_id?: InputMaybe<Scalars["ID"]>;
  academic_experience?: InputMaybe<PersonAcademicInput>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonMutationQueryUpdatePersonProfessionalExperienceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  professional_exp_id?: InputMaybe<Scalars["ID"]>;
  professional_experience?: InputMaybe<PersonProfessionalInput>;
};

export type PersonMutationQueryValidateAiesecEmailUsernameArgs = {
  username: Scalars["String"];
};

export type PersonPermissionType = {
  __typename?: "PersonPermissionType";
  can_anonymize?: Maybe<Scalars["Boolean"]>;
  can_apply?: Maybe<Scalars["Boolean"]>;
  can_change_lc?: Maybe<Scalars["Boolean"]>;
  can_edit_managers?: Maybe<Scalars["Boolean"]>;
  can_generate_aiesec_email?: Maybe<Scalars["Boolean"]>;
  can_interview?: Maybe<Scalars["Boolean"]>;
  can_mark_apply_paid?: Maybe<Scalars["Boolean"]>;
  can_mark_gep?: Maybe<Scalars["Boolean"]>;
  can_take_ef_test?: Maybe<Scalars["Boolean"]>;
  can_update?: Maybe<Scalars["Boolean"]>;
  can_update_lc?: Maybe<Scalars["Boolean"]>;
  can_view_applications?: Maybe<Scalars["Boolean"]>;
  can_view_finance_submissions?: Maybe<Scalars["Boolean"]>;
  has_completed_platform_nps?: Maybe<Scalars["Boolean"]>;
  has_paid_for_apply?: Maybe<Scalars["Boolean"]>;
  is_manager?: Maybe<Scalars["Boolean"]>;
  should_pay_at_apply?: Maybe<Scalars["Boolean"]>;
};

export type PersonProfessionalInput = {
  country?: InputMaybe<Scalars["String"]>;
  country_id?: InputMaybe<Scalars["Int"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_date?: InputMaybe<Scalars["DateTime"]>;
  industries?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  organisation_name?: InputMaybe<Scalars["String"]>;
  skills?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  work_fields?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  work_type?: InputMaybe<Scalars["Int"]>;
};

export type PersonProfile = {
  __typename?: "PersonProfile";
  backgrounds?: Maybe<Array<Maybe<Constant>>>;
  duration_max?: Maybe<Scalars["Int"]>;
  duration_min?: Maybe<Scalars["Int"]>;
  earliest_start_date?: Maybe<Scalars["DateTime"]>;
  ef_test_details?: Maybe<Scalars["JSON"]>;
  id: Scalars["ID"];
  interested_in?: Maybe<Scalars["String"]>;
  /** Issue ids */
  issues?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  languages?: Maybe<Array<Maybe<ConstantMap>>>;
  latest_end_date?: Maybe<Scalars["DateTime"]>;
  nationalities?: Maybe<Array<Maybe<Constant>>>;
  /** Next EF test details date */
  next_ef_test_date?: Maybe<Scalars["DateTime"]>;
  preferred_locations?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  preferred_organisations?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  selected_programmes?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  skills?: Maybe<Array<Maybe<ConstantMap>>>;
  visible_profile?: Maybe<Scalars["Boolean"]>;
  work_fields?: Maybe<Array<Maybe<Constant>>>;
};

export type PersonQuery = {
  /** @deprecated Use "people" field instead. */
  allPeople?: Maybe<PersonList>;
  /** @deprecated Use "downloadPeople" field instead. */
  allPeopleDownload?: Maybe<Scalars["String"]>;
  checkPersonPresent?: Maybe<Person>;
  colleagueAutocomplete?: Maybe<Array<Maybe<Person>>>;
  createPersonComment?: Maybe<Comment>;
  createPersonPayment?: Maybe<Payment>;
  deletePersonComment?: Maybe<Person>;
  deletePersonCv?: Maybe<Person>;
  deletePersonPayment?: Maybe<Person>;
  downloadPeople?: Maybe<Scalars["String"]>;
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
  end_date?: InputMaybe<Scalars["DateTime"]>;
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars["String"]>;
  opportunity_id?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type PersonQueryAllPeopleDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  end_date?: InputMaybe<Scalars["DateTime"]>;
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars["String"]>;
  opportunity_id?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type PersonQueryCheckPersonPresentArgs = {
  email?: InputMaybe<Scalars["String"]>;
};

export type PersonQueryColleagueAutocompleteArgs = {
  filter?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type PersonQueryCreatePersonCommentArgs = {
  comment?: InputMaybe<Scalars["String"]>;
  field_for?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryCreatePersonPaymentArgs = {
  id: Scalars["ID"];
};

export type PersonQueryDeletePersonCommentArgs = {
  comment_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryDeletePersonCvArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryDeletePersonPaymentArgs = {
  id: Scalars["ID"];
};

export type PersonQueryDownloadPeopleArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  end_date?: InputMaybe<Scalars["DateTime"]>;
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars["String"]>;
  opportunity_id?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type PersonQueryFeaturedCandidatesArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type PersonQueryGenerateEmailArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryGetPersonArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryMyPeopleArgs = {
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type PersonQueryPeopleArgs = {
  end_date?: InputMaybe<Scalars["DateTime"]>;
  filters?: InputMaybe<PeopleFilter>;
  my?: InputMaybe<Scalars["Boolean"]>;
  only?: InputMaybe<Scalars["String"]>;
  opportunity_id?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type PersonQueryPersonArgs = {
  id: Scalars["ID"];
};

export type PersonQueryPersonApplicationPaginationArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["ID"]>;
  last?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Scalars["String"]>;
};

export type PersonQueryPersonApplicationsArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type PersonQueryPersonCommentsArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryPersonEmployeeOfArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryPersonInterviewedArgs = {
  accepted?: InputMaybe<Scalars["Boolean"]>;
  accepted_reason?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  interviewed?: InputMaybe<Scalars["Boolean"]>;
};

export type PersonQueryPersonLdmResponseArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryPersonPaymentCreateArgs = {
  action_for?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryPersonPaymentDeleteArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryPersonSuggestionArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryResolvePersonCommentArgs = {
  comment_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryUpdatePersonCommentArgs = {
  comment?: InputMaybe<Scalars["String"]>;
  comment_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type PersonQueryViewPersonCommentArgs = {
  comment_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type Plan = {
  __typename?: "Plan";
  end_month?: Maybe<Scalars["Date"]>;
  id?: Maybe<Scalars["ID"]>;
  lc_deadline?: Maybe<Scalars["Date"]>;
  mc_deadline?: Maybe<Scalars["Date"]>;
  name?: Maybe<Scalars["String"]>;
  start_month?: Maybe<Scalars["Date"]>;
};

export type PlanLc_DeadlineArgs = {
  office_id: Scalars["ID"];
};

export type PlanInput = {
  end_month: Scalars["Date"];
  start_month: Scalars["Date"];
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
  deadline: Scalars["Date"];
  office_id: Scalars["ID"];
  plan_id: Scalars["ID"];
};

export type PlanMutationQueryPlanUpdateArgs = {
  id: Scalars["ID"];
  plan?: InputMaybe<PlanInput>;
};

export type PlanQuery = {
  plans?: Maybe<Array<Maybe<Plan>>>;
};

export type PlatformNpsInput = {
  answer?: InputMaybe<Scalars["String"]>;
  question_id?: InputMaybe<Scalars["Int"]>;
};

export type PlatformNpsResponseMutationQueryType = {
  createPlatformNps?: Maybe<Survey>;
};

export type PlatformNpsResponseMutationQueryTypeCreatePlatformNpsArgs = {
  path?: InputMaybe<Scalars["String"]>;
  responses?: InputMaybe<Array<InputMaybe<PlatformNpsInput>>>;
};

export type PlatformNpsResponseQueryType = {
  getPlatformNpsQuestions?: Maybe<Survey>;
};

export type Position = {
  __typename?: "Position";
  created_at?: Maybe<Scalars["DateTime"]>;
  creator_id?: Maybe<Scalars["ID"]>;
  deleted_at?: Maybe<Scalars["DateTime"]>;
  email_sent_at?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["Date"]>;
  function?: Maybe<Constant>;
  id: Scalars["ID"];
  lda_links?: Maybe<Scalars["JSON"]>;
  ldm_report?: Maybe<Scalars["JSON"]>;
  membership_lps?: Maybe<SurveyResponse>;
  name?: Maybe<Scalars["String"]>;
  office?: Maybe<Office>;
  opportunity_id?: Maybe<Scalars["ID"]>;
  parent?: Maybe<Position>;
  person?: Maybe<Person>;
  position_name?: Maybe<Scalars["String"]>;
  position_short_name?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
  start_date?: Maybe<Scalars["Date"]>;
  team?: Maybe<Team>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

/** The connection type for Position. */
export type PositionConnection = {
  __typename?: "PositionConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PositionEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Position>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type PositionEdge = {
  __typename?: "PositionEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Position>;
};

export type PositionInput = {
  end_date?: InputMaybe<Scalars["DateTime"]>;
  function_id?: InputMaybe<Scalars["Int"]>;
  parent_id?: InputMaybe<Scalars["Int"]>;
  person_id?: InputMaybe<Scalars["Int"]>;
  position_name?: InputMaybe<Scalars["String"]>;
  position_short_name?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  team_id: Scalars["Int"];
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
  id: Scalars["ID"];
  position?: InputMaybe<PositionInput>;
};

export type PositionMutationQueryUpdateTeamPositionArgs = {
  id: Scalars["ID"];
  position?: InputMaybe<PositionInput>;
};

export type PositionQuery = {
  allPosition?: Maybe<Array<Maybe<Position>>>;
  getPosition?: Maybe<Position>;
};

export type PositionQueryAllPositionArgs = {
  team_id?: InputMaybe<Scalars["ID"]>;
};

export type PositionQueryGetPositionArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PreviousExperience = {
  __typename?: "PreviousExperience";
  backgrounds?: Maybe<Array<Maybe<Constant>>>;
  country?: Maybe<Scalars["String"]>;
  country_details?: Maybe<Scalars["JSON"]>;
  description?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["DateTime"]>;
  exp_type?: Maybe<Scalars["String"]>;
  experience_level?: Maybe<Constant>;
  id: Scalars["ID"];
  organisation_name?: Maybe<Scalars["String"]>;
  start_date?: Maybe<Scalars["DateTime"]>;
  /** @deprecated Removed. Use experience_level field */
  study_level?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type ProfessionalExperience = {
  __typename?: "ProfessionalExperience";
  country?: Maybe<Scalars["String"]>;
  country_details?: Maybe<Scalars["JSON"]>;
  description?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["DateTime"]>;
  exp_type?: Maybe<Scalars["String"]>;
  experience_level?: Maybe<Constant>;
  id: Scalars["ID"];
  industries?: Maybe<Array<Maybe<Constant>>>;
  organisation_name?: Maybe<Scalars["String"]>;
  skills?: Maybe<Array<Maybe<Constant>>>;
  start_date?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  work_fields?: Maybe<Array<Maybe<Constant>>>;
  work_type?: Maybe<Scalars["String"]>;
};

export type ProfileCompleteness = {
  __typename?: "ProfileCompleteness";
  ge?: Maybe<Scalars["Boolean"]>;
  gt?: Maybe<Scalars["Boolean"]>;
  gv?: Maybe<Scalars["Boolean"]>;
};

export type ProfileInput = {
  additional_info?: InputMaybe<Scalars["JSON"]>;
  backgrounds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  duration_max?: InputMaybe<Scalars["Int"]>;
  duration_min?: InputMaybe<Scalars["Int"]>;
  earliest_start_date?: InputMaybe<Scalars["DateTime"]>;
  interested_in?: InputMaybe<Scalars["String"]>;
  issues?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  languages?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  latest_end_date?: InputMaybe<Scalars["DateTime"]>;
  nationalities?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  preferred_locations?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  preferred_organisations?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  selected_programmes?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  skills?: InputMaybe<Array<InputMaybe<ConstantMapInput>>>;
  visible_profile?: InputMaybe<Scalars["Boolean"]>;
  work_fields?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type Programme = {
  __typename?: "Programme";
  id?: Maybe<Scalars["ID"]>;
  short_name?: Maybe<Scalars["String"]>;
  short_name_display?: Maybe<Scalars["String"]>;
};

export type ProgrammeFee = {
  __typename?: "ProgrammeFee";
  contract?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["String"]>;
  currency?: Maybe<Currency>;
  enabled?: Maybe<Scalars["Boolean"]>;
  experience_type?: Maybe<ExperienceType>;
  fee?: Maybe<Scalars["Int"]>;
  fee_for?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  lc_id?: Maybe<Scalars["ID"]>;
  mc_id?: Maybe<Scalars["ID"]>;
  opportunity_duration_type?: Maybe<OpportunityDurationType>;
  programme?: Maybe<Programme>;
  programme_fee_max?: Maybe<Scalars["Int"]>;
  programme_fee_min?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["String"]>;
};

export type ProgrammeFeeBasic = {
  __typename?: "ProgrammeFeeBasic";
  fee_for?: Maybe<Scalars["String"]>;
  programme?: Maybe<ProgrammeId>;
};

/** The connection type for ProgrammeFeeBasic. */
export type ProgrammeFeeBasicConnection = {
  __typename?: "ProgrammeFeeBasicConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProgrammeFeeBasicEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ProgrammeFeeBasic>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type ProgrammeFeeBasicEdge = {
  __typename?: "ProgrammeFeeBasicEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<ProgrammeFeeBasic>;
};

/** The connection type for ProgrammeFee. */
export type ProgrammeFeeConnection = {
  __typename?: "ProgrammeFeeConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProgrammeFeeEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ProgrammeFee>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type ProgrammeFeeEdge = {
  __typename?: "ProgrammeFeeEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<ProgrammeFee>;
};

export type ProgrammeFeeInput = {
  contract?: InputMaybe<Scalars["String"]>;
  currency_id?: InputMaybe<Scalars["Int"]>;
  enabled?: InputMaybe<Scalars["Boolean"]>;
  fee_cents?: InputMaybe<Scalars["Int"]>;
};

export type ProgrammeFeeMutationQuery = {
  addContractProgrammeFee?: Maybe<ProgrammeFee>;
  incomingProgrammeFeeUpdate?: Maybe<ProgrammeFee>;
  /** Update programme fee */
  updateProgrammeFee?: Maybe<ProgrammeFee>;
};

export type ProgrammeFeeMutationQueryAddContractProgrammeFeeArgs = {
  id: Scalars["ID"];
  programme_fee?: InputMaybe<ProgrammeFeeInput>;
};

export type ProgrammeFeeMutationQueryIncomingProgrammeFeeUpdateArgs = {
  id: Scalars["ID"];
  programme_fee?: InputMaybe<IncomingProgrammeFeeInput>;
};

export type ProgrammeFeeMutationQueryUpdateProgrammeFeeArgs = {
  id: Scalars["ID"];
  programme_fee?: InputMaybe<ProgrammeFeeInput>;
};

export type ProgrammeFeeQueryType = {
  allProgrammeFee?: Maybe<Array<Maybe<ProgrammeFee>>>;
  getProgrammeFee?: Maybe<ProgrammeFee>;
};

export type ProgrammeFeeQueryTypeAllProgrammeFeeArgs = {
  lc?: InputMaybe<Scalars["ID"]>;
  mc?: InputMaybe<Scalars["ID"]>;
};

export type ProgrammeFeeQueryTypeGetProgrammeFeeArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type ProgrammeId = {
  __typename?: "ProgrammeId";
  id?: Maybe<Scalars["ID"]>;
};

export type ProgrammeManager = {
  __typename?: "ProgrammeManager";
  id: Scalars["ID"];
  office?: Maybe<Office>;
  person?: Maybe<Person>;
  programme?: Maybe<Programme>;
};

export type ProgrammeManagerMutationQuery = {
  assignProgrammeManager?: Maybe<ProgrammeManager>;
  removeProgrammeManager?: Maybe<ProgrammeManager>;
};

export type ProgrammeManagerMutationQueryAssignProgrammeManagerArgs = {
  id: Scalars["ID"];
  person_id?: InputMaybe<Scalars["Int"]>;
};

export type ProgrammeManagerMutationQueryRemoveProgrammeManagerArgs = {
  id: Scalars["ID"];
};

export type ProjectInput = {
  /** The base64 encoded version of the cover image to upload. */
  cover_photo?: InputMaybe<ImageInput>;
  description?: InputMaybe<Scalars["String"]>;
  is_project_enabled?: InputMaybe<Scalars["Boolean"]>;
  /** The base64 encoded version of the profile photo to upload. */
  profile_photo?: InputMaybe<ImageInput>;
  programme_id?: InputMaybe<Scalars["Int"]>;
  project_description?: InputMaybe<Scalars["String"]>;
  project_name?: InputMaybe<Scalars["String"]>;
  sdg_attributes?: InputMaybe<SdgInfoInput>;
};

export type QueryType = AttachmentQuery &
  BranchEmployeeQuery &
  BranchQuery &
  CampaignQuery &
  CityLcQuery &
  CityQuery &
  ClientDataQuery &
  CommentQuery &
  CommitteeQuery &
  Constants &
  ContentSectionQuery &
  CurrentPersonQuery &
  EmployeeLeadQuery &
  EntityPlanQuery &
  FindLcQuery &
  GlobalPartnerRequestQuery &
  Image &
  InvoiceQuery &
  LcAlignmentsQueryType &
  LdaQuery &
  LdmQuery &
  List &
  MailTemplateQueryType &
  McFeatureQuery &
  MemberLeadQuery &
  MemberPositionQuery &
  NationalPartnerQuery &
  NotificationsQuery &
  OpportunityApplicationQuery &
  OpportunityDurationTypeQuery &
  OpportunityPotentialCandidateQuery &
  OpportunityQuery &
  OrganisationQuery &
  OrganizationDevelopmentQuery &
  PageQuery &
  PeopleAutocompleteQuery &
  PersonQuery &
  PlanQuery &
  PlatformNpsResponseQueryType &
  PositionQuery &
  ProgrammeFeeQueryType &
  ScorecardQuery &
  StandardsSurveyQuery &
  SubProducts &
  SuggestedCountryQuery &
  SurveyQuery &
  TagListAutocompleteQuery &
  TagListQuery &
  TeamQuery &
  TermQuery &
  TestimonialQuery &
  TimelineQuery &
  TodoQuery & {
    __typename?: "QueryType";
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
    allOpportunityApplicationDownload?: Maybe<Scalars["String"]>;
    /** @deprecated Use "downloadOpportunities" field instead. */
    allOpportunityDownload?: Maybe<Scalars["String"]>;
    /** @deprecated Use "opportunities" field with "is_v2" boolean argument as true instead. */
    allOpportunityV2?: Maybe<OpportunityList>;
    /** @deprecated Use "organisations" field instead. */
    allOrganisation?: Maybe<CompanyList>;
    /** @deprecated Use "organisationDownload" field instead. */
    allOrganisationDownload?: Maybe<Scalars["String"]>;
    /** @deprecated Use "people" field instead. */
    allPeople?: Maybe<PersonList>;
    /** @deprecated Use "downloadPeople" field instead. */
    allPeopleDownload?: Maybe<Scalars["String"]>;
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
    branch?: Maybe<Branch>;
    branchAutocomplete?: Maybe<Array<Maybe<Branch>>>;
    branchContracts?: Maybe<Array<Maybe<Contract>>>;
    /** List all the branch's employees */
    branchEmployees?: Maybe<Array<Maybe<BranchEmployee>>>;
    branches?: Maybe<Array<Maybe<Branch>>>;
    bulkCvDownload?: Maybe<Array<Maybe<OpportunityApplication>>>;
    campaignAutocomplete?: Maybe<Array<Maybe<Campaign>>>;
    /** Check if Member lead exists */
    checkIfMemberLeadExists?: Maybe<Scalars["String"]>;
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
    committeesDownload?: Maybe<Scalars["String"]>;
    committeesListBasic?: Maybe<OfficeBasicList>;
    constantAutocomplete: Array<Maybe<Constant>>;
    constants: Array<Maybe<Constant>>;
    contentSections?: Maybe<Array<Maybe<ContentSection>>>;
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
    downloadMemberPositions?: Maybe<Scalars["String"]>;
    downloadOpportunities?: Maybe<Scalars["String"]>;
    downloadPeople?: Maybe<Scalars["String"]>;
    employeeLead?: Maybe<EmployeeLead>;
    /** @deprecated Use "employeeLead" field instead. */
    employeeLeadGet?: Maybe<EmployeeLead>;
    employeeLeads?: Maybe<EmployeeLeadList>;
    entityGoalSetting?: Maybe<Array<Maybe<EntityGoal>>>;
    entityPlans?: Maybe<Array<Maybe<EntityPlan>>>;
    favouriteOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
    featuredCandidates?: Maybe<Array<Maybe<Person>>>;
    featuredOpportunities?: Maybe<Array<Maybe<Opportunity>>>;
    findLc?: Maybe<Office>;
    /** Get Application flight details */
    flightDetails?: Maybe<OpportunityApplication>;
    generateEmail?: Maybe<GenerateEmail>;
    geoCodedCommittee?: Maybe<OfficeBasicDetails>;
    geoPartners?: Maybe<Array<Maybe<Organisation>>>;
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
    getOpportunityTranslations?: Maybe<Scalars["JSON"]>;
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
    ldmReport?: Maybe<Scalars["JSON"]>;
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
    memberLeadCheckIfExists?: Maybe<Scalars["String"]>;
    /** @deprecated Use "memberLead" field instead. */
    memberLeadGet?: Maybe<MemberLead>;
    memberLeads?: Maybe<MemberLeadList>;
    memberPosition?: Maybe<MemberPosition>;
    memberPositions?: Maybe<MemberPositionList>;
    /** @deprecated Use "downloadMemberPosition" field instead. */
    memberPositionsDownload?: Maybe<Scalars["String"]>;
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
    opportunityTranslations?: Maybe<Scalars["JSON"]>;
    organisation?: Maybe<Organisation>;
    organisationAutocomplete?: Maybe<Array<Maybe<Organisation>>>;
    /** @deprecated Use "my" boolean argument in "organisation_autocomplete" field instead. */
    organisationAutocompleteMy?: Maybe<Array<Maybe<Organisation>>>;
    organisationDownload?: Maybe<Scalars["String"]>;
    organisationEmployees?: Maybe<Array<Maybe<BranchEmployee>>>;
    organisations?: Maybe<CompanyList>;
    organizationDevelopmentGet?: Maybe<OrganizationDevelopment>;
    organizationDevelopmentList: Array<Maybe<OrganizationDevelopment>>;
    organizationDevelopmentTargetGet?: Maybe<OrganizationDevelopmentTarget>;
    organizationDevelopmentTargetList?: Maybe<
      Array<Maybe<OrganizationDevelopmentTarget>>
    >;
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
    similarOpportunities?: Maybe<OpportunityList>;
    /** Get EP standards survey and its reponse */
    standardsSurvey?: Maybe<StandardsSurvey>;
    stats2?: Maybe<Scalars["JSON"]>;
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

export type QueryTypeAllCityArgs = {
  filters?: InputMaybe<CityFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeAllConstantsArgs = {
  filters?: InputMaybe<ConstantsSortOption>;
  parent_id?: InputMaybe<Scalars["ID"]>;
  type_id?: InputMaybe<Scalars["String"]>;
  type_ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryTypeAllNationalPartnersArgs = {
  mc_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeAllOpportunityArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  smart_search?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeAllOpportunityApplicationArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeAllOpportunityApplicationDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<ApplicationFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeAllOpportunityDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeAllOpportunityV2Args = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeAllOrganisationArgs = {
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeAllOrganisationDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeAllPeopleArgs = {
  end_date?: InputMaybe<Scalars["DateTime"]>;
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars["String"]>;
  opportunity_id?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeAllPeopleDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  end_date?: InputMaybe<Scalars["DateTime"]>;
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars["String"]>;
  opportunity_id?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeAllPositionArgs = {
  team_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeAllProgrammeFeeArgs = {
  lc?: InputMaybe<Scalars["ID"]>;
  mc?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeAllSdgTargetsArgs = {
  sdg_goal_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeAllSuggestedCountriesArgs = {
  mc_id?: InputMaybe<Scalars["ID"]>;
  programme_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeApplicationCsvArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type QueryTypeApplicationInterviewSlotsArgs = {
  id: Scalars["ID"];
};

export type QueryTypeApplicationOfflineAssessmentsArgs = {
  id: Scalars["ID"];
};

export type QueryTypeApplicationTestimonialsArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeBranchArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeBranchAutocompleteArgs = {
  company_id?: InputMaybe<Scalars["Int"]>;
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
};

export type QueryTypeBranchContractsArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeBranchEmployeesArgs = {
  id: Scalars["ID"];
  status?: InputMaybe<Array<BranchEmployeeStatus>>;
};

export type QueryTypeBranchesArgs = {
  my?: InputMaybe<Scalars["Boolean"]>;
  organisation_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeBulkCvDownloadArgs = {
  application_ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type QueryTypeCampaignAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeCheckIfMemberLeadExistsArgs = {
  email: Scalars["String"];
};

export type QueryTypeCheckPersonPresentArgs = {
  email?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeCityAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  mc_scope?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeCityByMcArgs = {
  allocated_to_lc: Scalars["Boolean"];
  mc_id: Scalars["Int"];
};

export type QueryTypeClientDataArgs = {
  id: Scalars["ID"];
};

export type QueryTypeClientDataByNameAndApplicableArgs = {
  applicable_id: Scalars["ID"];
  applicable_type: Scalars["String"];
  name: Scalars["String"];
};

export type QueryTypeClientDataGetArgs = {
  id: Scalars["ID"];
};

export type QueryTypeClientDataGetByNameAndApplicableArgs = {
  applicable_id: Scalars["ID"];
  applicable_type: Scalars["String"];
  name: Scalars["String"];
};

export type QueryTypeColleagueAutocompleteArgs = {
  filter?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeCommitteeArgs = {
  id: Scalars["ID"];
};

export type QueryTypeCommitteeAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  my_committee_autocomplete?: InputMaybe<Scalars["Boolean"]>;
  office_scope?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  tag?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeCommitteeBasicDetailsArgs = {
  id: Scalars["ID"];
};

export type QueryTypeCommitteeTermArgs = {
  id: Scalars["ID"];
  term_id: Scalars["ID"];
};

export type QueryTypeCommitteeTermsArgs = {
  id: Scalars["ID"];
};

export type QueryTypeCommitteeTermsWithDepartmentsArgs = {
  id: Scalars["ID"];
};

export type QueryTypeCommitteesArgs = {
  filters?: InputMaybe<OfficeFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeCommitteesDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<OfficeFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeCommitteesListBasicArgs = {
  filters?: InputMaybe<OfficeFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeConstantAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeConstantsArgs = {
  filters?: InputMaybe<ConstantsSortOption>;
  parent_id?: InputMaybe<Scalars["ID"]>;
  type_id?: InputMaybe<Scalars["String"]>;
  type_ids?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryTypeContentSectionsArgs = {
  sort_direction?: InputMaybe<BaseSortDirection>;
};

export type QueryTypeCreatePersonCommentArgs = {
  comment?: InputMaybe<Scalars["String"]>;
  field_for?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeCreatePersonPaymentArgs = {
  id: Scalars["ID"];
};

export type QueryTypeCurrentPersonArgs = {
  model?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeCurrentPersonProgrammeFeesArgs = {
  managed_companies?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryTypeCurrentPersonSavedFiltersArgs = {
  model?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeCurrentPersonSavedFiltersShowArgs = {
  saved_filter_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeDeletePersonCommentArgs = {
  comment_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeDeletePersonCvArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeDeletePersonPaymentArgs = {
  id: Scalars["ID"];
};

export type QueryTypeDeliverabilityReportArgs = {
  mail_template_type_name: Scalars["String"];
  office_id?: InputMaybe<Scalars["ID"]>;
  programme_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeDownloadMemberPositionsArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<MemberPositionFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeDownloadOpportunitiesArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeDownloadPeopleArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  end_date?: InputMaybe<Scalars["DateTime"]>;
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars["String"]>;
  opportunity_id?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeEmployeeLeadArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeEmployeeLeadGetArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeEmployeeLeadsArgs = {
  filters?: InputMaybe<EmployeeLeadFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeEntityGoalSettingArgs = {
  filters?: InputMaybe<GoalSettingFilter>;
};

export type QueryTypeEntityPlansArgs = {
  office_id: Scalars["ID"];
  upcoming?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryTypeFeaturedCandidatesArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type QueryTypeFeaturedOpportunitiesArgs = {
  type?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeFindLcArgs = {
  city_id?: InputMaybe<Scalars["ID"]>;
  city_name?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeFlightDetailsArgs = {
  application_flight_token: Scalars["String"];
};

export type QueryTypeGenerateEmailArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetApplicationArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetAttachmentArgs = {
  id: Scalars["ID"];
};

export type QueryTypeGetBranchArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetBranchEmployeeArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetCampaignArgs = {
  id: Scalars["ID"];
};

export type QueryTypeGetCityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetCityLcArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetCommentArgs = {
  id: Scalars["ID"];
};

export type QueryTypeGetCommitteeArgs = {
  id: Scalars["ID"];
};

export type QueryTypeGetCommitteeBasicDetailsArgs = {
  id: Scalars["ID"];
};

export type QueryTypeGetCommitteeTermArgs = {
  id: Scalars["ID"];
};

export type QueryTypeGetImageArgs = {
  id: Scalars["ID"];
};

export type QueryTypeGetInboundEmailApplicationArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetInvoiceArgs = {
  id: Scalars["ID"];
};

export type QueryTypeGetLcAlignmentArgs = {
  id: Scalars["ID"];
};

export type QueryTypeGetMailTemplateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetNationalPartnerArgs = {
  id: Scalars["ID"];
};

export type QueryTypeGetOpportunityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetOpportunityQuestionsArgs = {
  opportunity_id: Scalars["ID"];
};

export type QueryTypeGetOpportunityTestimonialsArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetOpportunityTranslationsArgs = {
  id: Scalars["ID"];
  language_code: Scalars["String"];
};

export type QueryTypeGetOrganisationArgs = {
  id: Scalars["ID"];
};

export type QueryTypeGetPageArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetPersonArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetPositionArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetProgrammeFeeArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetSuggestedCountryArgs = {
  id: Scalars["ID"];
};

export type QueryTypeGetTagListArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetTeamArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetTestimonialArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetTimelineArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetTodoArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeGetWatchlistArgs = {
  opportunity_id?: InputMaybe<Scalars["Int"]>;
};

export type QueryTypeLcAlignmentArgs = {
  id: Scalars["ID"];
};

export type QueryTypeLcAlignmentsArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  id: Scalars["ID"];
};

export type QueryTypeLcAlignmentsListArgs = {
  q: Scalars["String"];
};

export type QueryTypeLdaSurveyArgs = {
  lda_survey_id: Scalars["String"];
};

export type QueryTypeLdmReportArgs = {
  opportunity_id?: InputMaybe<Scalars["ID"]>;
  person_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeLdmSurveyArgs = {
  opportunity_application_id?: InputMaybe<Scalars["ID"]>;
  position_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeListNationalPartnersArgs = {
  mc_id: Scalars["ID"];
};

export type QueryTypeMailTemplatesArgs = {
  mail_template_type_filter?: InputMaybe<Scalars["ID"]>;
  office_filter?: InputMaybe<Scalars["ID"]>;
  programme_filter?: InputMaybe<Scalars["ID"]>;
  status_filter?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeMcFeaturesArgs = {
  mc_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeMcsAlignmentsArgs = {
  alignment_type?: InputMaybe<AlignmentTypes>;
  mc_id?: InputMaybe<Scalars["Int"]>;
  mc_name?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeMeasureOfImpactsArgs = {
  sdg_goal_id: Scalars["ID"];
};

export type QueryTypeMemberLeadArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeMemberLeadCheckIfExistsArgs = {
  email: Scalars["String"];
};

export type QueryTypeMemberLeadGetArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeMemberLeadsArgs = {
  filters?: InputMaybe<MemberLeadFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeMemberPositionArgs = {
  id: Scalars["Int"];
};

export type QueryTypeMemberPositionsArgs = {
  filters?: InputMaybe<MemberPositionFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeMemberPositionsDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<MemberPositionFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeMyBranchArgs = {
  organisation_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeMyCommitteeAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  tag?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeMyOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  manager_id?: InputMaybe<Scalars["Int"]>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeMyOrganisationArgs = {
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeMyPeopleArgs = {
  filters?: InputMaybe<PeopleFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeNodeArgs = {
  id: Scalars["ID"];
};

export type QueryTypeNodesArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryTypeNotificationArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeNotificationGetArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeNotificationListArgs = {
  filters?: InputMaybe<NotificationFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
};

export type QueryTypeNotificationsArgs = {
  filters?: InputMaybe<NotificationFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
};

export type QueryTypeOpenOpportunityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  is_v2?: InputMaybe<Scalars["Boolean"]>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  smart_search?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeOpportunityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeOpportunityCustomStatusesArgs = {
  id: Scalars["ID"];
};

export type QueryTypeOpportunityDiversificationArgs = {
  filtered_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  mc_id: Scalars["Int"];
  programme_id: Scalars["Int"];
  start_date: Scalars["DateTime"];
};

export type QueryTypeOpportunityQuestionsArgs = {
  opportunity_id: Scalars["ID"];
};

export type QueryTypeOpportunityTestimonialsArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeOpportunityTranslationsArgs = {
  id: Scalars["ID"];
  language_code: Scalars["String"];
};

export type QueryTypeOrganisationArgs = {
  id: Scalars["ID"];
};

export type QueryTypeOrganisationAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  my?: InputMaybe<Scalars["Boolean"]>;
  q?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
};

export type QueryTypeOrganisationAutocompleteMyArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
};

export type QueryTypeOrganisationDownloadArgs = {
  columns: Array<InputMaybe<Scalars["String"]>>;
  filters?: InputMaybe<CompanyFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeOrganisationEmployeesArgs = {
  company_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeOrganisationsArgs = {
  filters?: InputMaybe<CompanyFilter>;
  my?: InputMaybe<Scalars["Boolean"]>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeOrganizationDevelopmentGetArgs = {
  id: Scalars["ID"];
};

export type QueryTypeOrganizationDevelopmentListArgs = {
  exchange_type_filter?: InputMaybe<Scalars["String"]>;
  filters?: InputMaybe<BaseFilter>;
  index_filter?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  month_filter?: InputMaybe<Scalars["DateTime"]>;
  office_filter?: InputMaybe<Scalars["Int"]>;
  programme_filter?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeOrganizationDevelopmentTargetGetArgs = {
  id: Scalars["ID"];
};

export type QueryTypePagesArgs = {
  filters?: InputMaybe<PageFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypePartnerStandardsSurveyArgs = {
  partner_standard_survey_id: Scalars["String"];
};

export type QueryTypePeopleArgs = {
  end_date?: InputMaybe<Scalars["DateTime"]>;
  filters?: InputMaybe<PeopleFilter>;
  my?: InputMaybe<Scalars["Boolean"]>;
  only?: InputMaybe<Scalars["String"]>;
  opportunity_id?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["DateTime"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypePeopleAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryTypePeopleAutocompleteActiveArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryTypePeopleAutocompleteColleaguesArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryTypePeopleAutocompleteEmployeesArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryTypePersonArgs = {
  id: Scalars["ID"];
};

export type QueryTypePersonApplicationPaginationArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["ID"]>;
  last?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Scalars["String"]>;
};

export type QueryTypePersonApplicationsArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryTypePersonCommentsArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypePersonEmployeeOfArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypePersonInterviewedArgs = {
  accepted?: InputMaybe<Scalars["Boolean"]>;
  accepted_reason?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  interviewed?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryTypePersonLdmResponseArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypePersonPaymentCreateArgs = {
  action_for?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypePersonPaymentDeleteArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypePersonSuggestionArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeProjectsArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  pagination?: InputMaybe<Pagination>;
  q?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeResolvePersonCommentArgs = {
  comment_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeScorecardGetArgs = {
  id: Scalars["ID"];
};

export type QueryTypeSdgGoalsArgs = {
  active_opportunities?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryTypeSdgTargetsArgs = {
  sdg_goal?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeSearchAllOpportunityArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeSearchOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeSignupQuestionsArgs = {
  id: Scalars["ID"];
};

export type QueryTypeSimilarOpportunitiesArgs = {
  filters?: InputMaybe<OpportunityFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeStandardsSurveyArgs = {
  standard_survey_id: Scalars["String"];
};

export type QueryTypeSubProductsArgs = {
  programme_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeSuggestedCountriesArgs = {
  mc_id?: InputMaybe<Scalars["ID"]>;
  programme_id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeSuggestedCountryArgs = {
  id: Scalars["ID"];
};

export type QueryTypeSurveyDetailsArgs = {
  survey_uuid: Scalars["String"];
};

export type QueryTypeTagListArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeTagListAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeTestimonialListArgs = {
  filters?: InputMaybe<TestimonialFilter>;
};

export type QueryTypeTodosArgs = {
  filters?: InputMaybe<TodoFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
};

export type QueryTypeTodosListArgs = {
  id: Scalars["ID"];
  type: Scalars["String"];
};

export type QueryTypeUnbilledApplicationsArgs = {
  filters?: InputMaybe<ApplicationFilter>;
  id: Scalars["ID"];
  only?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
  with?: InputMaybe<Scalars["String"]>;
};

export type QueryTypeUpdatePersonCommentArgs = {
  comment?: InputMaybe<Scalars["String"]>;
  comment_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTypeViewPersonCommentArgs = {
  comment_id?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type Question = {
  __typename?: "Question";
  id?: Maybe<Scalars["ID"]>;
  is_mandatory?: Maybe<Scalars["Boolean"]>;
  parent?: Maybe<Question>;
  position?: Maybe<Scalars["Int"]>;
  question_text?: Maybe<Scalars["String"]>;
  question_type?: Maybe<Scalars["String"]>;
  sub_questions?: Maybe<Array<Maybe<Question>>>;
};

export type QuestionInput = {
  is_mandatory?: InputMaybe<Scalars["Boolean"]>;
  parent_id?: InputMaybe<Scalars["ID"]>;
  position?: InputMaybe<Scalars["Int"]>;
  question_text?: InputMaybe<Scalars["String"]>;
  /** Options - [:text, :paragraph, :dichotomous, :attachment, :checkbox, :multiple_choice] */
  question_type?: InputMaybe<Scalars["String"]>;
};

export type Questionnaire = {
  __typename?: "Questionnaire";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  opportunities?: Maybe<Array<Maybe<Opportunity>>>;
  /** permissions */
  permissions?: Maybe<QuestionnairePermissionType>;
  questions?: Maybe<Array<Maybe<Question>>>;
};

/** The connection type for Questionnaire. */
export type QuestionnaireConnection = {
  __typename?: "QuestionnaireConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<QuestionnaireEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Questionnaire>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type QuestionnaireEdge = {
  __typename?: "QuestionnaireEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Questionnaire>;
};

export type QuestionnaireInput = {
  name?: InputMaybe<Scalars["String"]>;
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
  questionnaire_id?: InputMaybe<Scalars["ID"]>;
};

export type QuestionnaireMutationQueryBulkCreateQuestionArgs = {
  questionnaire_id?: InputMaybe<Scalars["ID"]>;
  questions?: InputMaybe<Array<InputMaybe<QuestionInput>>>;
};

export type QuestionnaireMutationQueryBulkDeleteQuestionArgs = {
  question_ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type QuestionnaireMutationQueryBulkUpdateQuestionArgs = {
  questions?: InputMaybe<Array<InputMaybe<UpdateQuestionInput>>>;
};

export type QuestionnaireMutationQueryCreateQuestionnaireArgs = {
  company_id: Scalars["ID"];
  questionnaire?: InputMaybe<QuestionnaireInput>;
};

export type QuestionnaireMutationQueryDeleteQuestionnaireArgs = {
  id: Scalars["ID"];
};

export type QuestionnaireMutationQueryDuplicateQuestionnaireArgs = {
  id: Scalars["ID"];
};

export type QuestionnaireMutationQueryQuestionBulkCreateArgs = {
  questionnaire_id?: InputMaybe<Scalars["ID"]>;
  questions?: InputMaybe<Array<InputMaybe<QuestionInput>>>;
};

export type QuestionnaireMutationQueryQuestionBulkDeleteArgs = {
  question_ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type QuestionnaireMutationQueryQuestionBulkUpdateArgs = {
  questions?: InputMaybe<Array<InputMaybe<UpdateQuestionInput>>>;
};

export type QuestionnaireMutationQueryRemoveQuestionArgs = {
  id: Scalars["ID"];
};

export type QuestionnaireMutationQueryUpdateQuestionArgs = {
  id: Scalars["ID"];
  question?: InputMaybe<QuestionInput>;
};

export type QuestionnaireMutationQueryUpdateQuestionnaireArgs = {
  id: Scalars["ID"];
  questionnaire?: InputMaybe<QuestionnaireInput>;
};

export type QuestionnairePermissionType = {
  __typename?: "QuestionnairePermissionType";
  can_delete?: Maybe<Scalars["Boolean"]>;
};

export type RangeInput = {
  from?: InputMaybe<Scalars["Int"]>;
  max?: InputMaybe<Scalars["Int"]>;
  min?: InputMaybe<Scalars["Int"]>;
  to?: InputMaybe<Scalars["Int"]>;
};

export type RejectionUpdatesInput = {
  email?: InputMaybe<Scalars["Boolean"]>;
  push_notification?: InputMaybe<Scalars["Boolean"]>;
};

export type RemoteExperienceInput = {
  remote_experience_additional_details: Scalars["String"];
  remote_experience_duration: Scalars["String"];
  remote_experience_salary: Scalars["String"];
};

export type ResponseInput = {
  /** Survey option id */
  option_id: Scalars["ID"];
  /** Survey question id */
  question_id: Scalars["ID"];
};

export type RoleInfoInput = {
  additional_instructions?: InputMaybe<Scalars["String"]>;
  all_learning_points?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  city?: InputMaybe<Scalars["String"]>;
  learning_points?: InputMaybe<Scalars["String"]>;
  required_preparation?: InputMaybe<Scalars["String"]>;
  selection_process?: InputMaybe<Scalars["String"]>;
};

/** RoleInfoType records */
export type RoleInfoType = {
  __typename?: "RoleInfoType";
  additional_instructions?: Maybe<Scalars["String"]>;
  all_learning_points?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  learning_points?: Maybe<Scalars["String"]>;
  /** All Learning points */
  learning_points_list?: Maybe<Array<Maybe<Scalars["String"]>>>;
  required_preparation?: Maybe<Scalars["String"]>;
  selection_process?: Maybe<Scalars["String"]>;
};

export type SavedFilter = Node & {
  __typename?: "SavedFilter";
  body?: Maybe<Scalars["JSON"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  model?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

/** The connection type for SavedFilter. */
export type SavedFilterConnection = {
  __typename?: "SavedFilterConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SavedFilterEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SavedFilter>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type SavedFilterEdge = {
  __typename?: "SavedFilterEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<SavedFilter>;
};

export type SavedFilterInput = {
  body?: InputMaybe<Scalars["JSON"]>;
  model?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type Scorecard = {
  __typename?: "Scorecard";
  creator?: Maybe<Person>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  /** permissions */
  permissions?: Maybe<ScorecardPermissionType>;
  scorecard_attributes?: Maybe<Array<Maybe<ScorecardAttributeType>>>;
};

export type ScorecardAttributeInput = {
  name?: InputMaybe<Scalars["String"]>;
};

export type ScorecardAttributePermissionType = {
  __typename?: "ScorecardAttributePermissionType";
  can_delete?: Maybe<Scalars["Boolean"]>;
};

export type ScorecardAttributeType = {
  __typename?: "ScorecardAttributeType";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  /** permissions */
  permissions?: Maybe<ScorecardAttributePermissionType>;
};

/** The connection type for Scorecard. */
export type ScorecardConnection = {
  __typename?: "ScorecardConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ScorecardEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Scorecard>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type ScorecardEdge = {
  __typename?: "ScorecardEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Scorecard>;
};

export type ScorecardInput = {
  score?: InputMaybe<Scalars["Int"]>;
  scorecard_attribute_id?: InputMaybe<Scalars["Int"]>;
};

export type ScorecardPermissionType = {
  __typename?: "ScorecardPermissionType";
  can_delete?: Maybe<Scalars["Boolean"]>;
};

export type ScorecardQuery = {
  scorecardGet?: Maybe<Scorecard>;
};

export type ScorecardQueryScorecardGetArgs = {
  id: Scalars["ID"];
};

export type Sdg = {
  __typename?: "Sdg";
  already_reached?: Maybe<Scalars["Int"]>;
  coordination?: Maybe<Scalars["String"]>;
  deliverables?: Maybe<Scalars["JSON"]>;
  id: Scalars["ID"];
  impact_date?: Maybe<Scalars["DateTime"]>;
  implementation?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  partners?: Maybe<Scalars["String"]>;
  potential_reach?: Maybe<Scalars["Int"]>;
  /** Sdg Target details */
  sdg_target?: Maybe<SdgTarget>;
};

export type SdgInfoInput = {
  already_reached?: InputMaybe<Scalars["Int"]>;
  coordination?: InputMaybe<Scalars["String"]>;
  deliverables?: InputMaybe<Array<InputMaybe<DeliverablesInput>>>;
  impact_date?: InputMaybe<Scalars["DateTime"]>;
  implementation?: InputMaybe<Scalars["String"]>;
  location?: InputMaybe<Scalars["String"]>;
  partners?: InputMaybe<Scalars["String"]>;
  potential_reach?: InputMaybe<Scalars["Int"]>;
  sdg_target_id?: InputMaybe<Scalars["String"]>;
};

export type SdgTarget = {
  __typename?: "SdgTarget";
  /** sdg target remark */
  description?: Maybe<Scalars["String"]>;
  eligible_for_global_project?: Maybe<Scalars["Boolean"]>;
  /** goal index */
  goal_index?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  parent?: Maybe<Constant>;
  target?: Maybe<Scalars["String"]>;
  target_id?: Maybe<Scalars["String"]>;
  /** target index */
  target_index?: Maybe<Scalars["Int"]>;
};

export type SelectionProcess = {
  __typename?: "SelectionProcess";
  id?: Maybe<Scalars["ID"]>;
  no_of_days?: Maybe<Scalars["Int"]>;
  position?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
};

/** The connection type for SelectionProcess. */
export type SelectionProcessConnection = {
  __typename?: "SelectionProcessConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SelectionProcessEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SelectionProcess>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type SelectionProcessEdge = {
  __typename?: "SelectionProcessEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<SelectionProcess>;
};

export type SelectionProcessInput = {
  no_of_days?: InputMaybe<Scalars["Int"]>;
  position?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type Slot = {
  __typename?: "Slot";
  applications_close_date?: Maybe<Scalars["Date"]>;
  available_openings?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  creator?: Maybe<Person>;
  end_date?: Maybe<Scalars["Date"]>;
  id: Scalars["ID"];
  openings?: Maybe<Scalars["Int"]>;
  /** OpportunityApplications count */
  opportunity_applications_count?: Maybe<Scalars["Int"]>;
  original_applications_close_date?: Maybe<Scalars["Date"]>;
  /** permissions */
  permissions?: Maybe<SlotPermissionType>;
  start_date?: Maybe<Scalars["Date"]>;
  status?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

/** The connection type for Slot. */
export type SlotConnection = {
  __typename?: "SlotConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SlotEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Slot>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type SlotEdge = {
  __typename?: "SlotEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Slot>;
};

export type SlotInput = {
  applications_close_date: Scalars["Date"];
  end_date: Scalars["Date"];
  openings: Scalars["Int"];
  start_date: Scalars["Date"];
  title: Scalars["String"];
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
  opportunity_id: Scalars["ID"];
  slot?: InputMaybe<SlotInput>;
};

export type SlotMutationQueryDeleteSlotArgs = {
  id: Scalars["ID"];
};

export type SlotMutationQueryMoveSlotToActiveArgs = {
  id: Scalars["ID"];
};

export type SlotMutationQueryMoveSlotToInactiveArgs = {
  id: Scalars["ID"];
};

export type SlotMutationQuerySlotCreateArgs = {
  opportunity_id: Scalars["ID"];
  slot?: InputMaybe<SlotInput>;
};

export type SlotMutationQuerySlotDeleteArgs = {
  id: Scalars["ID"];
};

export type SlotMutationQuerySlotMoveToActiveArgs = {
  id: Scalars["ID"];
};

export type SlotMutationQuerySlotMoveToInactiveArgs = {
  id: Scalars["ID"];
};

export type SlotMutationQuerySlotUpdateArgs = {
  id: Scalars["ID"];
  slot: UpdateSlotInput;
};

export type SlotMutationQueryUpdateSlotArgs = {
  id: Scalars["ID"];
  slot: UpdateSlotInput;
};

export type SlotPermissionType = {
  __typename?: "SlotPermissionType";
  can_delete?: Maybe<Scalars["Boolean"]>;
  can_move_to_inactive?: Maybe<Scalars["Boolean"]>;
  can_update?: Maybe<Scalars["Boolean"]>;
};

export enum SlotSortOption {
  CreatedAt = "created_at",
  StartDate = "start_date",
  UpdatedAt = "updated_at",
}

/** SpecificInfoType records */
export type SpecificInfoType = {
  __typename?: "SpecificInfoType";
  ask_gip_question?: Maybe<Scalars["String"]>;
  computer?: Maybe<Scalars["String"]>;
  ef_test_required?: Maybe<Scalars["String"]>;
  expected_work_schedule?: Maybe<Scalars["JSON"]>;
  /** Gross Salary */
  salary?: Maybe<Scalars["Int"]>;
  /** Gross Salary Curency */
  salary_currency?: Maybe<Currency>;
  /** Gross Salary periodicity */
  salary_periodicity?: Maybe<Scalars["String"]>;
  saturday_work?: Maybe<Scalars["String"]>;
  saturday_work_schedule?: Maybe<Scalars["String"]>;
};

export type SpecificsInfoInput = {
  ask_gip_question?: InputMaybe<Scalars["String"]>;
  computer?: InputMaybe<Scalars["Boolean"]>;
  ef_test_required?: InputMaybe<Scalars["Boolean"]>;
  expected_work_schedule?: InputMaybe<WorkScheduleInput>;
  /** Gross Salary */
  salary?: InputMaybe<Scalars["Int"]>;
  /** Gross Salary Curency ID */
  salary_currency_id?: InputMaybe<Scalars["Int"]>;
  /** Gross Salary periodicity */
  salary_periodicity?: InputMaybe<Scalars["String"]>;
  saturday_work?: InputMaybe<Scalars["Boolean"]>;
  saturday_work_schedule?: InputMaybe<WorkScheduleInput>;
};

export type StandardsSurvey = {
  __typename?: "StandardsSurvey";
  aiesec_contribution?: Maybe<Scalars["Int"]>;
  experience_end_date?: Maybe<Scalars["Date"]>;
  experience_start_date?: Maybe<Scalars["Date"]>;
  id?: Maybe<Scalars["ID"]>;
  /** Host LC */
  opportunity?: Maybe<Office>;
  organisation_name?: Maybe<Scalars["String"]>;
  /** Home LC */
  person?: Maybe<Office>;
  standards?: Maybe<Array<Maybe<ConstantMap>>>;
  status?: Maybe<Scalars["String"]>;
};

export type StandardsSurveyMutationQuery = {
  /** Update partner standards survey reponse */
  updatePartnerStandardsSurvey?: Maybe<StandardsSurvey>;
  /** Update EP standards survey reponse */
  updateStandardsSurvey?: Maybe<StandardsSurvey>;
};

export type StandardsSurveyMutationQueryUpdatePartnerStandardsSurveyArgs = {
  partner_standard_survey_id: Scalars["String"];
  responses: Array<ResponseInput>;
};

export type StandardsSurveyMutationQueryUpdateStandardsSurveyArgs = {
  response: ResponseInput;
  standard_survey_id: Scalars["String"];
};

export type StandardsSurveyQuery = {
  /** Get partner standards survey and its reponse */
  partnerStandardsSurvey?: Maybe<StandardsSurvey>;
  /** Get EP standards survey and its reponse */
  standardsSurvey?: Maybe<StandardsSurvey>;
};

export type StandardsSurveyQueryPartnerStandardsSurveyArgs = {
  partner_standard_survey_id: Scalars["String"];
};

export type StandardsSurveyQueryStandardsSurveyArgs = {
  standard_survey_id: Scalars["String"];
};

export type StatusUpdatesInput = {
  email?: InputMaybe<Scalars["Boolean"]>;
  push_notification?: InputMaybe<Scalars["Boolean"]>;
};

export type SubProduct = {
  __typename?: "SubProduct";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  programme?: Maybe<Programme>;
  sub_product_group?: Maybe<Scalars["String"]>;
};

export enum SubProductGroup {
  BusinessAdministrationBusinessDevelopmentFinanceMarketing = "business_administration_business_development_finance_marketing",
  InformationTechnologyEngineering = "information_technology_engineering",
}

export type SubProducts = {
  subProducts?: Maybe<Array<Maybe<SubProduct>>>;
};

export type SubProductsSubProductsArgs = {
  programme_id?: InputMaybe<Scalars["ID"]>;
};

export type SuggestedCountry = {
  __typename?: "SuggestedCountry";
  country?: Maybe<Office>;
  id: Scalars["ID"];
  mc?: Maybe<Office>;
  programme?: Maybe<Programme>;
};

export type SuggestedCountryInput = {
  country_id?: InputMaybe<Scalars["Int"]>;
  mc_id?: InputMaybe<Scalars["Int"]>;
  programme_id?: InputMaybe<Scalars["Int"]>;
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
  id: Scalars["ID"];
};

export type SuggestedCountryMutationQueryUpdateSuggestedCountryArgs = {
  id: Scalars["ID"];
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
  mc_id?: InputMaybe<Scalars["ID"]>;
  programme_id?: InputMaybe<Scalars["ID"]>;
};

export type SuggestedCountryQueryGetSuggestedCountryArgs = {
  id: Scalars["ID"];
};

export type SuggestedCountryQuerySuggestedCountriesArgs = {
  mc_id?: InputMaybe<Scalars["ID"]>;
  programme_id?: InputMaybe<Scalars["ID"]>;
};

export type SuggestedCountryQuerySuggestedCountryArgs = {
  id: Scalars["ID"];
};

export type SuggestedOpportunitiesInput = {
  enabled?: InputMaybe<Scalars["Boolean"]>;
  frequency?: InputMaybe<Scalars["String"]>;
};

export type Survey = {
  __typename?: "Survey";
  id?: Maybe<Scalars["ID"]>;
  survey_questions?: Maybe<Array<Maybe<SurveyQuestion>>>;
  title?: Maybe<Scalars["String"]>;
};

export type SurveyDetails = {
  __typename?: "SurveyDetails";
  /** Survey description */
  description?: Maybe<Scalars["String"]>;
  /** Survey id */
  id?: Maybe<Scalars["ID"]>;
  opportunity_application?: Maybe<OpportunityApplication>;
  position?: Maybe<Position>;
  /** Set of first group questions */
  questions?: Maybe<Array<Maybe<SurveyQuestion>>>;
  /** Survey title */
  title?: Maybe<Scalars["String"]>;
};

export type SurveyMutationQuery = {
  /** Update LPS/NPS survey reponse */
  surveyAnswer?: Maybe<Scalars["JSON"]>;
};

export type SurveyMutationQuerySurveyAnswerArgs = {
  responses: Array<SurveyResponseInput>;
  survey_uuid: Scalars["String"];
};

export type SurveyQuery = {
  npsSurvey?: Maybe<Survey>;
  /** Return LPS/NPS survey and survey questions */
  surveyDetails?: Maybe<SurveyDetails>;
};

export type SurveyQuerySurveyDetailsArgs = {
  survey_uuid: Scalars["String"];
};

export type SurveyQuestion = {
  __typename?: "SurveyQuestion";
  additional_details?: Maybe<Scalars["JSON"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  is_mandatory?: Maybe<Scalars["Boolean"]>;
  /** answer */
  nps_answer?: Maybe<Scalars["JSON"]>;
  position?: Maybe<Scalars["Int"]>;
  question_group?: Maybe<Scalars["Int"]>;
  question_text?: Maybe<Scalars["String"]>;
  question_type?: Maybe<Scalars["String"]>;
  sanitize_meta?: Maybe<Scalars["JSON"]>;
  subquestions?: Maybe<Array<Maybe<SurveyQuestion>>>;
  survey_name?: Maybe<Scalars["String"]>;
};

export type SurveyResponse = {
  __typename?: "SurveyResponse";
  id?: Maybe<Scalars["ID"]>;
  questions?: Maybe<Array<Maybe<SurveyQuestion>>>;
  survey_uuid?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SurveyResponseInput = {
  answer: Scalars["String"];
  other_option_answer?: InputMaybe<Scalars["String"]>;
  other_question_id?: InputMaybe<Scalars["ID"]>;
  question_id: Scalars["ID"];
};

export type TagList = {
  __typename?: "TagList";
  creator?: Maybe<Person>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
};

export type TagListAutocompleteQuery = {
  tagListAutocomplete?: Maybe<Array<Maybe<TagList>>>;
};

export type TagListAutocompleteQueryTagListAutocompleteArgs = {
  filters?: InputMaybe<BaseFilter>;
  q?: InputMaybe<Scalars["String"]>;
};

/** The connection type for TagList. */
export type TagListConnection = {
  __typename?: "TagListConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TagListEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TagList>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type TagListEdge = {
  __typename?: "TagListEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<TagList>;
};

export type TagListInput = {
  name?: InputMaybe<Scalars["String"]>;
};

export type TagListMutationQueryType = {
  createTagList?: Maybe<TagList>;
  tagListUpdate?: Maybe<TagList>;
};

export type TagListMutationQueryTypeCreateTagListArgs = {
  tag_list?: InputMaybe<TagListInput>;
};

export type TagListMutationQueryTypeTagListUpdateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
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
  id?: InputMaybe<Scalars["ID"]>;
};

export type TagListQueryTagListArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Team = {
  __typename?: "Team";
  cover_photo?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  creator_id?: Maybe<Scalars["ID"]>;
  deleted_at?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  office?: Maybe<Office>;
  /** permissions */
  permissions?: Maybe<TeamPermissionType>;
  positions?: Maybe<PositionConnection>;
  profile_photo?: Maybe<Scalars["String"]>;
  subtitle?: Maybe<Scalars["String"]>;
  team_type?: Maybe<Scalars["String"]>;
  term_date_id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type TeamPositionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** The connection type for Team. */
export type TeamConnection = {
  __typename?: "TeamConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TeamEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Team>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type TeamEdge = {
  __typename?: "TeamEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Team>;
};

export type TeamInput = {
  cover_photo?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  profile_photo?: InputMaybe<Scalars["String"]>;
  subtitle?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type TeamMutationQuery = {
  /** Create team */
  createTeam?: Maybe<Team>;
  deleteTeam?: Maybe<Team>;
  /** Update team */
  updateTeam?: Maybe<Team>;
};

export type TeamMutationQueryCreateTeamArgs = {
  office_id: Scalars["ID"];
  team?: InputMaybe<TeamInput>;
  term_id: Scalars["ID"];
};

export type TeamMutationQueryDeleteTeamArgs = {
  id: Scalars["ID"];
};

export type TeamMutationQueryUpdateTeamArgs = {
  id: Scalars["ID"];
  team?: InputMaybe<TeamInput>;
};

export type TeamPermissionType = {
  __typename?: "TeamPermissionType";
  can_delete?: Maybe<Scalars["Boolean"]>;
  can_read?: Maybe<Scalars["Boolean"]>;
  can_update?: Maybe<Scalars["Boolean"]>;
  manage_positions?: Maybe<Scalars["Boolean"]>;
};

export type TeamQuery = {
  getTeam?: Maybe<Team>;
};

export type TeamQueryGetTeamArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Term = {
  __typename?: "Term";
  end_year?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  short_name?: Maybe<Scalars["String"]>;
  start_year?: Maybe<Scalars["String"]>;
};

export type TermDate = {
  __typename?: "TermDate";
  current_and_invited_members?: Maybe<PersonConnection>;
  end_date?: Maybe<Scalars["Date"]>;
  id: Scalars["ID"];
  invitations?: Maybe<Array<Maybe<Invitation>>>;
  /** permissions */
  permissions?: Maybe<TermDatePermissionType>;
  short_name?: Maybe<Scalars["String"]>;
  start_date?: Maybe<Scalars["Date"]>;
  teams?: Maybe<TeamConnection>;
};

export type TermDateCurrent_And_Invited_MembersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type TermDateTeamsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type TermDatePermissionType = {
  __typename?: "TermDatePermissionType";
  create_team?: Maybe<Scalars["Boolean"]>;
};

export type TermInput = {
  name?: InputMaybe<Scalars["String"]>;
  short_name?: InputMaybe<Scalars["String"]>;
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
  id: Scalars["ID"];
};

export type TermMutationQueryInvitePersonTermArgs = {
  office_id: Scalars["ID"];
  person_id?: InputMaybe<Scalars["ID"]>;
  person_input?: InputMaybe<InvitePersonInput>;
  term_id: Scalars["ID"];
};

export type TermQuery = {
  termForCommitteeGet?: Maybe<Array<Maybe<Term>>>;
};

export type Testimonial = {
  __typename?: "Testimonial";
  body?: Maybe<Scalars["String"]>;
  company_id?: Maybe<Scalars["ID"]>;
  cover_photo?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  meta?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  profile_photo?: Maybe<Scalars["String"]>;
  testimonial_type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type TestimonialCover_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars["Boolean"]>;
  cdn_region?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["String"]>;
};

export type TestimonialProfile_PhotoArgs = {
  cdn_links?: InputMaybe<Scalars["Boolean"]>;
  cdn_region?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["String"]>;
};

export type TestimonialFilter = {
  company_id?: InputMaybe<Scalars["Int"]>;
  testimonial_type?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type TestimonialQuery = {
  getTestimonial?: Maybe<Testimonial>;
  testimonialList?: Maybe<Array<Maybe<Testimonial>>>;
};

export type TestimonialQueryGetTestimonialArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type TestimonialQueryTestimonialListArgs = {
  filters?: InputMaybe<TestimonialFilter>;
};

export type Timeline = {
  __typename?: "Timeline";
  creator?: Maybe<Person>;
  details?: Maybe<Scalars["JSON"]>;
  display_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  object_type?: Maybe<Scalars["String"]>;
};

export type TimelineInput = {
  details_fields?: InputMaybe<Array<InputMaybe<FieldInput>>>;
  display_at?: InputMaybe<Scalars["DateTime"]>;
  object_type?: InputMaybe<Scalars["String"]>;
  opportunity_application_id?: InputMaybe<Scalars["ID"]>;
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
  id: Scalars["ID"];
};

export type TimelineMutationQueryUpdateTimelineArgs = {
  id: Scalars["ID"];
  timeline?: InputMaybe<TimelineInput>;
};

export type TimelineQuery = {
  getTimeline?: Maybe<Timeline>;
};

export type TimelineQueryGetTimelineArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** TmDetailType records */
export type TmDetailType = {
  __typename?: "TmDetailType";
  department_id?: Maybe<Scalars["String"]>;
  key_deliverables?: Maybe<Scalars["String"]>;
  open_to?: Maybe<Scalars["String"]>;
  recommended_prior_experiences?: Maybe<Scalars["String"]>;
  tm_type?: Maybe<Scalars["String"]>;
};

export type TmDetailsInput = {
  department_id?: InputMaybe<Scalars["Int"]>;
  key_deliverables?: InputMaybe<Scalars["String"]>;
  open_to?: InputMaybe<Scalars["String"]>;
  recommended_prior_experiences?: InputMaybe<Scalars["String"]>;
  tm_type?: InputMaybe<Scalars["String"]>;
};

export type Todo = {
  __typename?: "Todo";
  assignee?: Maybe<Person>;
  category?: Maybe<Scalars["String"]>;
  children?: Maybe<TodoType>;
  comments?: Maybe<CommentConnection>;
  completed?: Maybe<Scalars["Boolean"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  creator?: Maybe<Person>;
  deadline?: Maybe<Scalars["Date"]>;
  description?: Maybe<Scalars["String"]>;
  detail?: Maybe<Scalars["String"]>;
  goal_type?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  meta?: Maybe<TodoMetaType>;
  metric?: Maybe<Scalars["JSON"]>;
  metric_type?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["Int"]>;
  parent?: Maybe<Todo>;
  tag_lists?: Maybe<Array<Maybe<TagList>>>;
  todo_type?: Maybe<TodoType>;
  todoable?: Maybe<TodoableUnion>;
  todoable_id?: Maybe<Scalars["Int"]>;
  todoable_type?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type TodoCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** The connection type for Todo. */
export type TodoConnection = {
  __typename?: "TodoConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TodoEdge>>>;
  /** Facets object */
  facets?: Maybe<Scalars["JSON"]>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Todo>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total count of items */
  total_count?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type TodoEdge = {
  __typename?: "TodoEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Todo>;
};

export type TodoFilter = {
  assignee_id?: InputMaybe<Scalars["Int"]>;
  completed?: InputMaybe<Scalars["Boolean"]>;
  creator_id?: InputMaybe<Scalars["Int"]>;
  /** Available options - task, goal */
  todo_type?: InputMaybe<Scalars["String"]>;
  todoable_id?: InputMaybe<Scalars["Int"]>;
  /** Available options - Company, Person, Opportunity, OpportunityApplication, Office */
  todoable_type?: InputMaybe<Scalars["String"]>;
};

export type TodoInput = {
  assignee_id?: InputMaybe<Scalars["ID"]>;
  deadline?: InputMaybe<Scalars["Date"]>;
  description?: InputMaybe<Scalars["String"]>;
  goal_type?: InputMaybe<Scalars["String"]>;
  metric?: InputMaybe<Scalars["JSON"]>;
  metric_type?: InputMaybe<Scalars["String"]>;
  model_name?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  parent_id?: InputMaybe<Scalars["Int"]>;
  record_id?: InputMaybe<Scalars["ID"]>;
  tag_list_ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  todo_type?: InputMaybe<Scalars["String"]>;
};

export type TodoList = {
  __typename?: "TodoList";
  data?: Maybe<Array<Maybe<Todo>>>;
  facets?: Maybe<Array<Maybe<Facets>>>;
  paging?: Maybe<Paging>;
};

/** Todo MetaType records */
export type TodoMetaType = {
  __typename?: "TodoMetaType";
  completed_at?: Maybe<Scalars["DateTime"]>;
  completed_by?: Maybe<Scalars["Int"]>;
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
  goal_id: Scalars["ID"];
  todo?: InputMaybe<TodoInput>;
};

export type TodoMutationQueryCompleteTodoArgs = {
  id: Scalars["ID"];
};

export type TodoMutationQueryCreateGoalArgs = {
  goal?: InputMaybe<TodoInput>;
};

export type TodoMutationQueryCreateTodoArgs = {
  todo?: InputMaybe<TodoInput>;
};

export type TodoMutationQueryDeleteTodoArgs = {
  id: Scalars["ID"];
};

export type TodoMutationQueryInCompleteTodoArgs = {
  id: Scalars["ID"];
};

export type TodoMutationQueryUpdateTodoArgs = {
  id: Scalars["ID"];
  todo?: InputMaybe<TodoInput>;
};

export type TodoQuery = {
  getTodo?: Maybe<Todo>;
  todos?: Maybe<TodoList>;
  todosList?: Maybe<Todo>;
};

export type TodoQueryGetTodoArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type TodoQueryTodosArgs = {
  filters?: InputMaybe<TodoFilter>;
  page?: InputMaybe<Scalars["Int"]>;
  pagination?: InputMaybe<Pagination>;
  per_page?: InputMaybe<Scalars["Int"]>;
};

export type TodoQueryTodosListArgs = {
  id: Scalars["ID"];
  type: Scalars["String"];
};

export type TodoType = {
  __typename?: "TodoType";
  todos?: Maybe<TodoConnection>;
};

export type TodoTypeTodosArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  todo_type: Scalars["String"];
};

/** Todoable polymorphic object */
export type TodoableUnion =
  | Event
  | Office
  | Opportunity
  | OpportunityApplication
  | Organisation
  | Person;

export type Transaction = {
  __typename?: "Transaction";
  auth_code?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  opportunity_application_id?: Maybe<Scalars["Int"]>;
  psp_reference?: Maybe<Scalars["String"]>;
  refusal_reason?: Maybe<Scalars["String"]>;
  result_code?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  transactionable_id?: Maybe<Scalars["Int"]>;
  transactionable_type?: Maybe<Scalars["String"]>;
};

export type UpdateCommitteeTargetInput = {
  committee_target?: InputMaybe<CommitteeTargetInput>;
  id: Scalars["ID"];
};

export type UpdateMemberPositionInput = {
  duration_id?: InputMaybe<Scalars["Int"]>;
  end_date?: InputMaybe<Scalars["Date"]>;
  focus_products?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  start_date?: InputMaybe<Scalars["Date"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateQuestionInput = {
  id?: InputMaybe<Scalars["Int"]>;
  question?: InputMaybe<QuestionInput>;
};

export type UpdateSelectionProcessInput = {
  id?: InputMaybe<Scalars["Int"]>;
  selection_process?: InputMaybe<SelectionProcessInput>;
};

export type UpdateSlotInput = {
  applications_close_date?: InputMaybe<Scalars["Date"]>;
  openings?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ValidateAiesecEmailUsernameResponse = {
  __typename?: "ValidateAiesecEmailUsernameResponse";
  aiesec_email?: Maybe<Scalars["String"]>;
  is_valid?: Maybe<Scalars["Boolean"]>;
};

export type WeeklyActivity = {
  __typename?: "WeeklyActivity";
  activity: Scalars["String"];
  id: Scalars["ID"];
  is_templated?: Maybe<Scalars["Boolean"]>;
  week: Scalars["Int"];
};

export type WeeklyActivityInput = {
  activity: Scalars["String"];
  week: Scalars["Int"];
};

export type WorkScheduleInput = {
  from?: InputMaybe<Scalars["String"]>;
  to?: InputMaybe<Scalars["String"]>;
};

export type Payment = {
  __typename?: "payment";
  action_for?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["String"]>;
  creator_id?: Maybe<Scalars["String"]>;
  deleted_at?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  opportunity_application_id: Scalars["ID"];
  person_id: Scalars["ID"];
  updated_at?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type GetActiveApplicationQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetActiveApplicationQuery = {
  __typename?: "QueryType";
  personApplications?: {
    __typename?: "OpportunityApplicationList";
    data?: Array<{
      __typename?: "OpportunityApplication";
      id?: string | null;
      status?: string | null;
      opportunity?: {
        __typename?: "Opportunity";
        id: string;
        title?: string | null;
        programme?: {
          __typename?: "Programme";
          short_name?: string | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetOpportunitiesQueryVariables = Exact<{
  id?: InputMaybe<Scalars["ID"]>;
}>;

export type GetOpportunitiesQuery = {
  __typename?: "QueryType";
  getOpportunity?: {
    __typename?: "Opportunity";
    company_description?: string | null;
    remote_opportunity?: string | null;
    profile_photo?: string | null;
    opportunity_cost?: any | null;
    duration?: number | null;
    description?: string | null;
    date_opened?: any | null;
    created_at?: any | null;
    applicants_count?: number | null;
    work_hours?: any | null;
    title?: string | null;
    cover_photo?: any | null;
    id: string;
    study_levels?: Array<{
      __typename?: "Constant";
      alias_name?: string | null;
      name?: string | null;
      option?: string | null;
      short_name?: string | null;
    } | null> | null;
    skills?: Array<{
      __typename?: "ConstantMap";
      constant_name?: string | null;
      option?: string | null;
      id: string;
    } | null> | null;
    programmes?: Array<{
      __typename?: "Programme";
      short_name?: string | null;
      short_name_display?: string | null;
    } | null> | null;
    programme?: {
      __typename?: "Programme";
      short_name?: string | null;
      short_name_display?: string | null;
    } | null;
    host_lc?: {
      __typename?: "Office";
      country?: string | null;
      country_code?: string | null;
    } | null;
    home_mc?: {
      __typename?: "Office";
      country?: string | null;
      country_code?: string | null;
    } | null;
    home_lc?: {
      __typename?: "Office";
      country_code?: string | null;
      country?: string | null;
    } | null;
    backgrounds?: Array<{
      __typename?: "ConstantMap";
      id: string;
      level?: number | null;
      constant_name?: string | null;
    } | null> | null;
    specifics_info?: {
      __typename?: "SpecificInfoType";
      computer?: string | null;
      expected_work_schedule?: any | null;
      salary_periodicity?: string | null;
      salary?: number | null;
      salary_currency?: {
        __typename?: "Currency";
        name: string;
        numeric_code?: number | null;
        alphabetic_code?: string | null;
      } | null;
    } | null;
    languages?: Array<{
      __typename?: "ConstantMap";
      id: string;
      option?: string | null;
      constant_name?: string | null;
    } | null> | null;
    logistics_info?: {
      __typename?: "LogisticInfoType";
      food_provided?: string | null;
      food_covered?: string | null;
      computer_provided?: string | null;
      accommodation_provided?: string | null;
      accommodation_covered?: string | null;
      transportation_covered?: string | null;
      transportation_provided?: string | null;
    } | null;
    available_slots?: Array<{
      __typename?: "Slot";
      available_openings?: number | null;
      end_date?: any | null;
      openings?: number | null;
      start_date?: any | null;
      status?: string | null;
      title?: string | null;
    } | null> | null;
    sdg_info?: {
      __typename?: "Sdg";
      sdg_target?: {
        __typename?: "SdgTarget";
        goal_index?: number | null;
      } | null;
    } | null;
  } | null;
};

export type GetPeopleQueryVariables = Exact<{
  from?: InputMaybe<Scalars["DateTime"]>;
  to?: InputMaybe<Scalars["DateTime"]>;
}>;

export type GetPeopleQuery = {
  __typename?: "QueryType";
  people?: {
    __typename?: "PersonList";
    data?: Array<{
      __typename?: "Person";
      id: string;
      status?: string | null;
      first_name?: string | null;
      last_name?: string | null;
      gender?: string | null;
      referral_type?: string | null;
      email?: string | null;
      created_at?: any | null;
      person_profile?: {
        __typename?: "PersonProfile";
        selected_programmes?: Array<number | null> | null;
      } | null;
      contact_detail?: {
        __typename?: "ContactInfo";
        phone?: string | null;
        facebook?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type UpdatePersonMutationMutationVariables = Exact<{
  id: Scalars["ID"];
  person?: InputMaybe<PersonInput>;
}>;

export type UpdatePersonMutationMutation = {
  __typename?: "MutationType";
  updatePerson?: {
    __typename?: "Person";
    expa_settings?: {
      __typename: "ExpaSettings";
      email_notifications?: boolean | null;
    } | null;
  } | null;
};

export const GetActiveApplicationDocument = gql`
  query GetActiveApplication($id: ID!) {
    personApplications(
      id: $id
      filters: {
        statuses: [
          "approved"
          "open"
          "accepted"
          "matched"
          "approved_tn_manager"
          "approved_ep_manager"
        ]
      }
    ) {
      data {
        id
        status
        opportunity {
          id
          title
          programme {
            short_name
          }
        }
      }
    }
  }
`;
export const GetOpportunitiesDocument = gql`
  query getOpportunities($id: ID) {
    getOpportunity(id: $id) {
      company_description
      study_levels {
        alias_name
        name
        option
        short_name
      }
      skills {
        constant_name
        option
        id
      }
      remote_opportunity
      programmes {
        short_name
        short_name_display
      }
      programme {
        short_name
        short_name_display
      }
      profile_photo
      opportunity_cost(mc_id: 1552)
      host_lc {
        country
        country_code
      }
      home_mc {
        country
        country_code
      }
      home_lc {
        country_code
        country
      }
      duration
      description
      date_opened
      created_at
      applicants_count
      backgrounds {
        id
        level
        constant_name
      }
      specifics_info {
        computer
        expected_work_schedule
        salary_periodicity
        salary_currency {
          name
          numeric_code
          alphabetic_code
        }
        salary
      }
      languages {
        id
        option
        constant_name
      }
      logistics_info {
        food_provided
        food_covered
        computer_provided
        accommodation_provided
        accommodation_covered
        transportation_covered
        transportation_provided
      }
      work_hours
      available_slots {
        available_openings
        end_date
        openings
        start_date
        status
        title
      }
      title
      sdg_info {
        sdg_target {
          goal_index
        }
      }
      cover_photo(cdn_links: false)
      id
    }
  }
`;
export const GetPeopleDocument = gql`
  query getPeople($from: DateTime, $to: DateTime) {
    people(
      q: ""
      page: 1
      per_page: 400
      filters: { registered: { from: $from, to: $to }, home_committee: 2359 }
    ) {
      data {
        id
        status
        first_name
        last_name
        gender
        referral_type
        email
        created_at
        person_profile {
          selected_programmes
        }
        contact_detail {
          phone
          facebook
        }
      }
    }
  }
`;
export const UpdatePersonMutationDocument = gql`
  mutation UpdatePersonMutation($id: ID!, $person: PersonInput) {
    updatePerson(id: $id, person: $person) {
      expa_settings {
        email_notifications
        __typename
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
    GetActiveApplication(
      variables: GetActiveApplicationQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetActiveApplicationQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetActiveApplicationQuery>(
            GetActiveApplicationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetActiveApplication",
        "query"
      );
    },
    getOpportunities(
      variables?: GetOpportunitiesQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetOpportunitiesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetOpportunitiesQuery>(
            GetOpportunitiesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getOpportunities",
        "query"
      );
    },
    getPeople(
      variables?: GetPeopleQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetPeopleQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPeopleQuery>(GetPeopleDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getPeople",
        "query"
      );
    },
    UpdatePersonMutation(
      variables: UpdatePersonMutationMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdatePersonMutationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdatePersonMutationMutation>(
            UpdatePersonMutationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "UpdatePersonMutation",
        "mutation"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
