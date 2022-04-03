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
const google_spreadsheet_1 = require("google-spreadsheet");
const dayjs_1 = __importDefault(require("dayjs"));
const GraphQlClient_1 = __importDefault(require("../clients/GraphQlClient"));
const router = (0, express_1.Router)();
const doc = new google_spreadsheet_1.GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const to = (0, dayjs_1.default)().format("YYYY-MM-DD HH:mm:ss");
    const from = (0, dayjs_1.default)().subtract(1, "day").format("YYYY-MM-DD HH:mm:ss");
    const data = yield GraphQlClient_1.default.getPeople({ from, to });
    if (((_a = data.people) === null || _a === void 0 ? void 0 : _a.data) == null) {
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = await hubspotClient.crm.contacts.getAll()
    var _b, _c;
    // res.status(200).json(data)
    const to = (0, dayjs_1.default)().format("YYYY-MM-DD HH:mm:ss");
    const from = (0, dayjs_1.default)().subtract(5, "day").format("YYYY-MM-DD HH:mm:ss");
    const data = yield GraphQlClient_1.default.getPeople({ to, from });
    (_c = (_b = data.people) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.map((el) => __awaiter(void 0, void 0, void 0, function* () {
        var _d;
        const contact = {
            properties: {
                email: el === null || el === void 0 ? void 0 : el.email,
                firstname: el === null || el === void 0 ? void 0 : el.first_name,
                lastname: el === null || el === void 0 ? void 0 : el.last_name,
                phone: (_d = el === null || el === void 0 ? void 0 : el.contact_detail) === null || _d === void 0 ? void 0 : _d.phone,
            },
        };
    }));
}));
exports.default = router;
