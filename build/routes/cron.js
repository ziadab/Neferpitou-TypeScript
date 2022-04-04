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
const express_1 = require("express");
// import { GoogleSpreadsheet } from "google-spreadsheet"
const dayjs_1 = __importDefault(require("dayjs"));
const GraphQlClient_1 = __importDefault(require("../clients/GraphQlClient"));
const hubspot_1 = __importDefault(require("../api/hubspot"));
const axios_1 = __importDefault(require("axios"));
const sendMsg = `${process.env.TELEGRAM_LINK}/sendMessage`;
// console.log(sendMsg)
const router = (0, express_1.Router)();
// const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID)
// router.post("/", async (req, res) => {
//   const to = dayjs().format("YYYY-MM-DD HH:mm:ss")
//   const from = dayjs().subtract(1, "day").format("YYYY-MM-DD HH:mm:ss")
//   const data = await client.getPeople({ from, to })
//   if (data.people?.data == null) {
//   }
// })
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const to = (0, dayjs_1.default)().format("YYYY-MM-DD HH:mm:ss");
    const from = (0, dayjs_1.default)().subtract(1, "day").format("YYYY-MM-DD HH:mm:ss");
    const data = yield GraphQlClient_1.default.getPeople({ to, from });
    if (((_b = (_a = data.people) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length) == 0) {
        yield axios_1.default.post(sendMsg, {
            chat_id: -798569661,
            text: `No ep's on hubspot hihihi`,
        });
        return res.send("Ok");
    }
    const { success, error } = yield (0, hubspot_1.default)(data);
    if (error.length > 0) {
        yield axios_1.default.post(sendMsg, {
            chat_id: -798569661,
            text: `The following users already exist in hubspot ${error.toString()}`,
        });
        return res.send("Ok");
    }
    yield axios_1.default.post(sendMsg, {
        chat_id: -798569661,
        text: `${success.length} added to HubSpot`,
    });
    res.status(200).send("Ok");
}));
exports.default = router;
