"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const libphonenumber_js_1 = require("libphonenumber-js");
const HubSpotClient_1 = __importDefault(require("../clients/HubSpotClient"));
const product_to_manager_1 = __importDefault(require("../utils/product_to_manager"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
exports.default = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const error = [];
    const success = [];
    (_b = (_a = data.people) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.map((el) => __awaiter(void 0, void 0, void 0, function* () {
        var _c, _d, _e, _f, _g, _h, _j;
        const phone = ((_c = el === null || el === void 0 ? void 0 : el.contact_detail) === null || _c === void 0 ? void 0 : _c.phone) == null
            ? ""
            : (_e = (0, libphonenumber_js_1.parsePhoneNumber)((_d = el === null || el === void 0 ? void 0 : el.contact_detail) === null || _d === void 0 ? void 0 : _d.phone, "MA")) === null || _e === void 0 ? void 0 : _e.formatInternational();
        const program_interested_in = ((_g = (_f = el === null || el === void 0 ? void 0 : el.person_profile) === null || _f === void 0 ? void 0 : _f.selected_programmes) === null || _g === void 0 ? void 0 : _g.length) == 0
            ? "0"
            : (_j = (_h = el === null || el === void 0 ? void 0 : el.person_profile) === null || _h === void 0 ? void 0 : _h.selected_programmes[0]) === null || _j === void 0 ? void 0 : _j.toString();
        const hubspot_owner_id = program_interested_in == "0"
            ? "296102844"
            : product_to_manager_1.default[program_interested_in];
        const expa_created_date = (0, dayjs_1.default)(el === null || el === void 0 ? void 0 : el.created_at)
            .utc()
            .second(0)
            .minute(0)
            .hour(0)
            .valueOf()
            .toString();
        // const  =
        // const expa_created_date = `${date.valueOf()} (${date.format(
        //   "DD MMM YYYY"
        // )} 00:00:00 UTC)`
        // console.log(expa_created_date)
        // await new Promise((f) => setTimeout(f, 3000))
        const contact = {
            properties: {
                expa_id: el === null || el === void 0 ? void 0 : el.id,
                email: el === null || el === void 0 ? void 0 : el.email,
                firstname: el === null || el === void 0 ? void 0 : el.first_name,
                lastname: el === null || el === void 0 ? void 0 : el.last_name,
                expa_referrer: el === null || el === void 0 ? void 0 : el.referral_type,
                hs_lead_status: "NOT_CONTACTED",
                program_interested_in: program_interested_in,
                expa_created_date,
                hubspot_owner_id,
                phone,
            },
        };
        // console.log(el?.id)
        yield HubSpotClient_1.default.crm.contacts.basicApi
            .create(contact)
            .then((res) => {
            // console.log("success: ", el?.id)
            success.push(el === null || el === void 0 ? void 0 : el.id);
        })
            .catch((err) => {
            // console.log("fail: ", el?.id)
            // console.log(err)
            // console.log(el?.id!)
            error.push(el === null || el === void 0 ? void 0 : el.id);
        })
            .finally(() => {
            return { error, success };
        });
    }));
    yield new Promise((f) => setTimeout(f, 3500));
    return { error, success };
});
// 1427997766000
// 1646582855000
