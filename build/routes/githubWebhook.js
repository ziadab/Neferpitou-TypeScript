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
const crypto_1 = __importDefault(require("crypto"));
const telegram_1 = __importDefault(require("../services/telegram"));
const secret = "FE0odrvwOVaUgIw0w4g6pi_9";
const router = (0, express_1.Router)();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = crypto_1.default.createHmac("sha256", secret)
        .update(JSON.stringify(req.body))
        .digest("hex");
    if (req.headers["x-hub-signature-256"] != `sha256=${hash}`)
        return res.status(401).json({ message: "stfu u wanna be my slut" });
    if (req.headers["x-github-event"] == "push") {
        const msg = `${req.body.pusher.name} has commited at ${req.body.ref} with *${req.body.head_commit.message}*`;
        yield telegram_1.default.sendMarkdownMsg(msg, parseInt(process.env.ZIAD_CHAT_ID));
        return res.end("ok");
    }
    else if ("ref_type" in req.body) {
        const msg = `${req.body.sender.login} has pushed a new branch with state ${req.headers["x-github-event"]} with name *${req.body.ref}*`;
        yield telegram_1.default.sendMarkdownMsg(msg, parseInt(process.env.ZIAD_CHAT_ID));
        return res.end("ok");
    }
}));
exports.default = router;
