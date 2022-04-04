"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.GetPeopleDocument = exports.GetOpportunitiesDocument = exports.GetActiveApplicationDocument = exports.SubProductGroup = exports.SlotSortOption = exports.PeopleSortOption = exports.PartnerTypes = exports.PageSortOption = exports.OpportunitySortOption = exports.OfficeSortOption = exports.MemberLeadSortOption = exports.GoalType = exports.FileImportType = exports.ExchangeType = exports.EmployeeLeadSortOption = exports.ConstantSortOption = exports.CompanySortOption = exports.CitySortOption = exports.BranchEmployeeStatus = exports.BaseSortDirection = exports.ApplicationSortOption = exports.AlignmentTypes = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var AlignmentTypes;
(function (AlignmentTypes) {
    AlignmentTypes["Exchange"] = "exchange";
    AlignmentTypes["Recruitment"] = "recruitment";
})(AlignmentTypes = exports.AlignmentTypes || (exports.AlignmentTypes = {}));
var ApplicationSortOption;
(function (ApplicationSortOption) {
    ApplicationSortOption["ApplicantName"] = "applicant_name";
    ApplicationSortOption["AverageScore"] = "average_score";
    ApplicationSortOption["CreatedAt"] = "created_at";
    ApplicationSortOption["DateAnSigned"] = "date_an_signed";
    ApplicationSortOption["DateApproved"] = "date_approved";
    ApplicationSortOption["DateMatched"] = "date_matched";
    ApplicationSortOption["DateRealized"] = "date_realized";
    ApplicationSortOption["DurationType"] = "duration_type";
    ApplicationSortOption["ExperienceEndDate"] = "experience_end_date";
    ApplicationSortOption["ExperienceStartDate"] = "experience_start_date";
    ApplicationSortOption["Favourite"] = "favourite";
    ApplicationSortOption["FlightDate"] = "flight_date";
    ApplicationSortOption["GraduationDate"] = "graduation_date";
    ApplicationSortOption["HasStartedStandardsSurvey"] = "has_started_standards_survey";
    ApplicationSortOption["HomeLcName"] = "home_lc_name";
    ApplicationSortOption["HomeMcName"] = "home_mc_name";
    ApplicationSortOption["HostLcName"] = "host_lc_name";
    ApplicationSortOption["HostMcName"] = "host_mc_name";
    ApplicationSortOption["IsGep"] = "is_gep";
    ApplicationSortOption["LastActive"] = "last_active";
    ApplicationSortOption["LdmGrade"] = "ldm_grade";
    ApplicationSortOption["NpsGrade"] = "nps_grade";
    ApplicationSortOption["OpportunityId"] = "opportunity_id";
    ApplicationSortOption["OpportunityTitle"] = "opportunity_title";
    ApplicationSortOption["OrganisationName"] = "organisation_name";
    ApplicationSortOption["PaidAt"] = "paid_at";
    ApplicationSortOption["PartnerType"] = "partner_type";
    ApplicationSortOption["Product"] = "product";
    ApplicationSortOption["RequiredBackgroundsPercentage"] = "required_backgrounds_percentage";
    ApplicationSortOption["RequiredSkillsPercentage"] = "required_skills_percentage";
    ApplicationSortOption["ScheduledInterview"] = "scheduled_interview";
    ApplicationSortOption["SdgGoal"] = "sdg_goal";
    ApplicationSortOption["SdgTarget"] = "sdg_target";
    ApplicationSortOption["Slot"] = "slot";
    ApplicationSortOption["Status"] = "status";
    ApplicationSortOption["SubProduct"] = "sub_product";
    ApplicationSortOption["UpdatedAt"] = "updated_at";
})(ApplicationSortOption = exports.ApplicationSortOption || (exports.ApplicationSortOption = {}));
var BaseSortDirection;
(function (BaseSortDirection) {
    BaseSortDirection["Asc"] = "asc";
    BaseSortDirection["Desc"] = "desc";
})(BaseSortDirection = exports.BaseSortDirection || (exports.BaseSortDirection = {}));
var BranchEmployeeStatus;
(function (BranchEmployeeStatus) {
    BranchEmployeeStatus["Approved"] = "approved";
    BranchEmployeeStatus["Pending"] = "pending";
    BranchEmployeeStatus["Rejected"] = "rejected";
})(BranchEmployeeStatus = exports.BranchEmployeeStatus || (exports.BranchEmployeeStatus = {}));
var CitySortOption;
(function (CitySortOption) {
    CitySortOption["CreatedAt"] = "created_at";
    CitySortOption["Name"] = "name";
    CitySortOption["UpdatedAt"] = "updated_at";
})(CitySortOption = exports.CitySortOption || (exports.CitySortOption = {}));
var CompanySortOption;
(function (CompanySortOption) {
    CompanySortOption["ActiveOpportunities"] = "active_opportunities";
    CompanySortOption["CompanySize"] = "company_size";
    CompanySortOption["CompanyType"] = "company_type";
    CompanySortOption["CreatedAt"] = "created_at";
    CompanySortOption["EmployeesCount"] = "employees_count";
    CompanySortOption["HomeLc"] = "home_lc";
    CompanySortOption["HomeMc"] = "home_mc";
    CompanySortOption["IsGep"] = "is_gep";
    CompanySortOption["Name"] = "name";
    CompanySortOption["Openings"] = "openings";
    CompanySortOption["OpportunityCount"] = "opportunity_count";
    CompanySortOption["PartnerType"] = "partner_type";
    CompanySortOption["PhoneNumber"] = "phone_number";
    CompanySortOption["PopFirstSignUp"] = "pop_first_sign_up";
    CompanySortOption["Status"] = "status";
    CompanySortOption["UpdatedAt"] = "updated_at";
})(CompanySortOption = exports.CompanySortOption || (exports.CompanySortOption = {}));
var ConstantSortOption;
(function (ConstantSortOption) {
    ConstantSortOption["Name"] = "name";
    ConstantSortOption["Position"] = "position";
})(ConstantSortOption = exports.ConstantSortOption || (exports.ConstantSortOption = {}));
var EmployeeLeadSortOption;
(function (EmployeeLeadSortOption) {
    EmployeeLeadSortOption["CreatedAt"] = "created_at";
    EmployeeLeadSortOption["CreatedVia"] = "created_via";
    EmployeeLeadSortOption["Email"] = "email";
    EmployeeLeadSortOption["FullName"] = "full_name";
    EmployeeLeadSortOption["HomeLcName"] = "home_lc_name";
    EmployeeLeadSortOption["HomeMcName"] = "home_mc_name";
    EmployeeLeadSortOption["LastActive"] = "last_active";
    EmployeeLeadSortOption["OrganizationName"] = "organization_name";
    EmployeeLeadSortOption["PhoneNumber"] = "phone_number";
    EmployeeLeadSortOption["ProductInterest"] = "product_interest";
    EmployeeLeadSortOption["Qualification"] = "qualification";
    EmployeeLeadSortOption["ReferralType"] = "referral_type";
    EmployeeLeadSortOption["Status"] = "status";
    EmployeeLeadSortOption["UpdatedAt"] = "updated_at";
})(EmployeeLeadSortOption = exports.EmployeeLeadSortOption || (exports.EmployeeLeadSortOption = {}));
var ExchangeType;
(function (ExchangeType) {
    ExchangeType["Incoming"] = "incoming";
    ExchangeType["Outgoing"] = "outgoing";
})(ExchangeType = exports.ExchangeType || (exports.ExchangeType = {}));
var FileImportType;
(function (FileImportType) {
    FileImportType["EmployeeLead"] = "employee_lead";
    FileImportType["EntityGoal"] = "entity_goal";
})(FileImportType = exports.FileImportType || (exports.FileImportType = {}));
var GoalType;
(function (GoalType) {
    GoalType["Accepted"] = "accepted";
    GoalType["Applicants"] = "applicants";
    GoalType["Approved"] = "approved";
    GoalType["Completed"] = "completed";
    GoalType["Finished"] = "finished";
    GoalType["Realized"] = "realized";
    GoalType["SignUps"] = "sign_ups";
})(GoalType = exports.GoalType || (exports.GoalType = {}));
var MemberLeadSortOption;
(function (MemberLeadSortOption) {
    MemberLeadSortOption["AcademicLevelName"] = "academic_level_name";
    MemberLeadSortOption["CreatedAt"] = "created_at";
    MemberLeadSortOption["CreatedVia"] = "created_via";
    MemberLeadSortOption["DateOfBirth"] = "date_of_birth";
    MemberLeadSortOption["EmploymentStatusName"] = "employment_status_name";
    MemberLeadSortOption["HomeMcName"] = "home_mc_name";
    MemberLeadSortOption["LcAlignmentName"] = "lc_alignment_name";
    MemberLeadSortOption["LeadName"] = "lead_name";
    MemberLeadSortOption["PreferredModeOfContactName"] = "preferred_mode_of_contact_name";
    MemberLeadSortOption["ReferralTypeName"] = "referral_type_name";
    MemberLeadSortOption["Status"] = "status";
    MemberLeadSortOption["UpdatedAt"] = "updated_at";
})(MemberLeadSortOption = exports.MemberLeadSortOption || (exports.MemberLeadSortOption = {}));
var OfficeSortOption;
(function (OfficeSortOption) {
    OfficeSortOption["CreatedAt"] = "created_at";
    OfficeSortOption["Name"] = "name";
    OfficeSortOption["ParentName"] = "parent_name";
    OfficeSortOption["Tag"] = "tag";
    OfficeSortOption["UpdatedAt"] = "updated_at";
})(OfficeSortOption = exports.OfficeSortOption || (exports.OfficeSortOption = {}));
var OpportunitySortOption;
(function (OpportunitySortOption) {
    OpportunitySortOption["Application"] = "application";
    OpportunitySortOption["ApplicationCount"] = "application_count";
    OpportunitySortOption["ApplicationsClosing"] = "applications_closing";
    OpportunitySortOption["AverageNpsScore"] = "average_nps_score";
    OpportunitySortOption["BranchName"] = "branch_name";
    OpportunitySortOption["Branches"] = "branches";
    OpportunitySortOption["Committee"] = "committee";
    OpportunitySortOption["Company"] = "company";
    OpportunitySortOption["CompanySize"] = "company_size";
    OpportunitySortOption["CompanyType"] = "company_type";
    OpportunitySortOption["CreatedAt"] = "created_at";
    OpportunitySortOption["CreatedVia"] = "created_via";
    OpportunitySortOption["DateOpened"] = "date_opened";
    OpportunitySortOption["Departments"] = "departments";
    OpportunitySortOption["DurationMax"] = "duration_max";
    OpportunitySortOption["DurationMin"] = "duration_min";
    OpportunitySortOption["DurationType"] = "duration_type";
    OpportunitySortOption["EarliestStartDate"] = "earliest_start_date";
    OpportunitySortOption["HomeMcs"] = "home_mcs";
    OpportunitySortOption["HostLcName"] = "host_lc_name";
    OpportunitySortOption["HostMcName"] = "host_mc_name";
    OpportunitySortOption["Industries"] = "industries";
    OpportunitySortOption["IsGe"] = "is_ge";
    OpportunitySortOption["IsGep"] = "is_gep";
    OpportunitySortOption["Issues"] = "issues";
    OpportunitySortOption["LatestEndDate"] = "latest_end_date";
    OpportunitySortOption["NpsScore"] = "nps_score";
    OpportunitySortOption["OpenTo"] = "open_to";
    OpportunitySortOption["OrganisationName"] = "organisation_name";
    OpportunitySortOption["Price"] = "price";
    OpportunitySortOption["Programmes"] = "programmes";
    OpportunitySortOption["Regions"] = "regions";
    OpportunitySortOption["Relevance"] = "relevance";
    OpportunitySortOption["SdgGoal"] = "sdg_goal";
    OpportunitySortOption["SdgTarget"] = "sdg_target";
    OpportunitySortOption["Status"] = "status";
    OpportunitySortOption["SubProduct"] = "sub_product";
    OpportunitySortOption["Title"] = "title";
    OpportunitySortOption["UpdatedAt"] = "updated_at";
    OpportunitySortOption["ViewCount"] = "view_count";
    OpportunitySortOption["WorkFields"] = "work_fields";
})(OpportunitySortOption = exports.OpportunitySortOption || (exports.OpportunitySortOption = {}));
var PageSortOption;
(function (PageSortOption) {
    PageSortOption["CreatedAt"] = "created_at";
    PageSortOption["Title"] = "title";
    PageSortOption["UpdatedAt"] = "updated_at";
})(PageSortOption = exports.PageSortOption || (exports.PageSortOption = {}));
var PartnerTypes;
(function (PartnerTypes) {
    PartnerTypes["Global"] = "global";
    PartnerTypes["Regional"] = "regional";
})(PartnerTypes = exports.PartnerTypes || (exports.PartnerTypes = {}));
var PeopleSortOption;
(function (PeopleSortOption) {
    PeopleSortOption["Aiesecer"] = "aiesecer";
    PeopleSortOption["Application"] = "application";
    PeopleSortOption["ContactedAt"] = "contacted_at";
    PeopleSortOption["ContactedByName"] = "contacted_by_name";
    PeopleSortOption["CreatedAt"] = "created_at";
    PeopleSortOption["Dob"] = "dob";
    PeopleSortOption["FollowUpName"] = "follow_up_name";
    PeopleSortOption["FollowedUpAt"] = "followed_up_at";
    PeopleSortOption["FullName"] = "full_name";
    PeopleSortOption["Gender"] = "gender";
    PeopleSortOption["HomeLcName"] = "home_lc_name";
    PeopleSortOption["HomeMcName"] = "home_mc_name";
    PeopleSortOption["Interviewed"] = "interviewed";
    PeopleSortOption["InterviewedAt"] = "interviewed_at";
    PeopleSortOption["LastActiveAt"] = "last_active_at";
    PeopleSortOption["LcAlignmentName"] = "lc_alignment_name";
    PeopleSortOption["ProfessionalExperienceInYears"] = "professional_experience_in_years";
    PeopleSortOption["ReferralType"] = "referral_type";
    PeopleSortOption["SelectedProgrammes"] = "selected_programmes";
    PeopleSortOption["Status"] = "status";
    PeopleSortOption["UpdatedAt"] = "updated_at";
})(PeopleSortOption = exports.PeopleSortOption || (exports.PeopleSortOption = {}));
var SlotSortOption;
(function (SlotSortOption) {
    SlotSortOption["CreatedAt"] = "created_at";
    SlotSortOption["StartDate"] = "start_date";
    SlotSortOption["UpdatedAt"] = "updated_at";
})(SlotSortOption = exports.SlotSortOption || (exports.SlotSortOption = {}));
var SubProductGroup;
(function (SubProductGroup) {
    SubProductGroup["BusinessAdministrationBusinessDevelopmentFinanceMarketing"] = "business_administration_business_development_finance_marketing";
    SubProductGroup["InformationTechnologyEngineering"] = "information_technology_engineering";
})(SubProductGroup = exports.SubProductGroup || (exports.SubProductGroup = {}));
exports.GetActiveApplicationDocument = (0, graphql_tag_1.default) `
    query GetActiveApplication($id: ID!) {
  personApplications(
    id: $id
    filters: {statuses: ["approved", "open", "accepted", "matched", "approved_tn_manager", "approved_ep_manager"]}
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
exports.GetOpportunitiesDocument = (0, graphql_tag_1.default) `
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
exports.GetPeopleDocument = (0, graphql_tag_1.default) `
    query getPeople($from: DateTime, $to: DateTime) {
  people(
    q: ""
    page: 1
    per_page: 200
    filters: {registered: {from: $from, to: $to}, home_committee: 2359}
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
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        GetActiveApplication(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetActiveApplicationDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetActiveApplication', 'query');
        },
        getOpportunities(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetOpportunitiesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'getOpportunities', 'query');
        },
        getPeople(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetPeopleDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'getPeople', 'query');
        }
    };
}
exports.getSdk = getSdk;
