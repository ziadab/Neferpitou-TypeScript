import dayjs from "dayjs";
import { parsePhoneNumber } from "libphonenumber-js";
import { GetPeopleQuery } from ".";
import hubspotClient from "../clients/HubSpotClient";
import product_to_manager from "../utils/product_to_manager";
import utc from "dayjs/plugin/utc";
import Client from "../clients/GraphQlClient";

dayjs.extend(utc);

interface HubspotResult {
  error: Array<string>;
  success: Array<string>;
}

export default async (data: GetPeopleQuery): Promise<HubspotResult> => {
  const error: string[] = [];
  const success: string[] = [];
  const client = Client("");
  data.people?.data?.map(async (el, index) => {
    const phone =
      el?.contact_detail?.phone! == null
        ? ""
        : parsePhoneNumber(
            el?.contact_detail?.phone!,
            "MA"
          )?.formatInternational()!;
    const program_interested_in =
      el?.person_profile?.selected_programmes?.length == 0
        ? "0"
        : el?.person_profile?.selected_programmes![0]?.toString();
    const hubspot_owner_id =
      program_interested_in == "0"
        ? Math.random() < 0.5
          ? "273765855"
          : "296102633"
        : (product_to_manager as any)[program_interested_in!];
    const expa_created_date = dayjs(el?.created_at)
      .utc()
      .second(0)
      .minute(0)
      .hour(0)
      .valueOf()
      .toString();

    const contact = {
      properties: {
        expa_id: el?.id!,
        email: el?.email!,
        firstname: el?.first_name!,
        lastname: el?.last_name!,
        expa_referrer: el?.referral_type!,
        hs_lead_status: "NOT_CONTACTED",
        program_interested_in: program_interested_in!,
        lifecyclestage: "62400738",
        expa_created_date,
        hubspot_owner_id,
        phone,
      },
    };
    await client.UpdatePersonMutation({
      id: el?.id!,
      person: { manager_ids: [4234147, 3159696, 4565034] },
    });
    // console.log(el?.id)
    await hubspotClient.crm.contacts.basicApi
      .create(contact)
      .then((res) => {
        // console.log("success: ", el?.id)
        success.push(el?.id!);
      })
      .catch((err) => {
        // console.log("fail: ", el?.id)
        // console.log(err);
        // console.log(el?.id!)
        error.push(el?.id!);
      })
      .finally(() => {
        return { error, success };
      });
  });
  await new Promise((f) => setTimeout(f, 3500));

  return { error, success };
};

// 1427997766000
// 1646582855000
