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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 1283;
app.get("/", (_, res) => {
    res.send("Fetched All Data");
});
app.use(express_1.default.json());
app.post("/save", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isValid = yield validateBeforeProcess(req.body, "CREATE");
        if (isValid.length > 0) {
            res.status(400).json(JSON.stringify(isValid));
        }
        const product = req.body.product;
        const date = req.body.date;
        const amount = req.body.amount;
        const description = req.body.description;
        res.status(200).json({
            product: product,
            date: date,
            amount: amount,
            description: description,
        });
    }
    catch (error) {
        res.status(404).send(error.message);
    }
}));
const validateBeforeProcess = (body, ROUTE_TYPE) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = [];
    if (ROUTE_TYPE === "CREATE") {
        if (!body.product || !body.date || !body.amount || !body.description) {
            errors.push({
                type: "CREATE",
                description: "All data has to be defined!",
            });
        }
    }
    return errors;
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
