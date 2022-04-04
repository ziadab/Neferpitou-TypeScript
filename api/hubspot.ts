import { parsePhoneNumber } from "libphonenumber-js"
import { GetPeopleQuery } from "."
import hubspotClient from "../clients/HubSpotClient"
import product_to_manager from "../utils/product_to_manager"

interface HubspotResult {
  error: Array<string>
  success: Array<string>
}

export default async (data: GetPeopleQuery): Promise<HubspotResult> => {
  const error: string[] = []
  const success: string[] = []
  data.people?.data?.map(async (el) => {
    const phone =
      el?.contact_detail?.phone! == null
        ? ""
        : parsePhoneNumber(
            el?.contact_detail?.phone!,
            "MA"
          )?.formatInternational()!
    const program_interested_in =
      el?.person_profile?.selected_programmes?.length == 0
        ? "0"
        : el?.person_profile?.selected_programmes![0]?.toString()
    const hubspot_owner_id =
      program_interested_in == "0"
        ? "296102844"
        : (product_to_manager as any)[program_interested_in!]
    const contact = {
      properties: {
        expa_id: el?.id!,
        email: el?.email!,
        firstname: el?.first_name!,
        lastname: el?.last_name!,
        hubspot_owner_id,
        hs_lead_status: "NOT_CONTACTED",
        program_interested_in: program_interested_in!,
        phone,
      },
    }
    console.log(el?.id)
    await hubspotClient.crm.contacts.basicApi
      .create(contact)
      .then((res) => {
        // console.log("success: ", el?.id)
        success.push(el?.id!)
      })
      .catch((err) => {
        // console.log("fail: ", el?.id)
        error.push(el?.id!)
      })
      .finally(() => {
        return { error, success }
      })
  })
  await new Promise((f) => setTimeout(f, 3000))

  return { error, success }
}
