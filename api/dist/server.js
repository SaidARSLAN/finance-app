"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 1283;
app.get("/", (req, res) => {
    res.send("Fetched All Data");
});
app.use(express_1.default.json()); // Middleware to parse JSON bodies
app.post("/save", (req, res) => {
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
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
