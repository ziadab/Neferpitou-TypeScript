"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const githubWebhook_1 = __importDefault(require("./routes/githubWebhook"));
const hubspot_1 = __importDefault(require("./routes/hubspot"));
const telegram_1 = __importDefault(require("./routes/telegram"));
const cron_1 = __importDefault(require("./routes/cron"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/github", githubWebhook_1.default);
app.use("/hubspot", hubspot_1.default);
app.use("/telegram", telegram_1.default);
app.use("/cron", cron_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});
