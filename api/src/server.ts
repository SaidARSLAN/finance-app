import express, { Request, Response } from "express";

const app = express();

const port: number = 1283;

app.get("/", (_: Request, res: Response) => {
  res.send("Fetched All Data");
});

app.use(express.json());

app.post("/save", (req: Request, res: Response) => {
  const product: string = req.body.product;
  const date: string = req.body.date;
  const amount: number = req.body.amount;
  const description: string = req.body.description;

  res.status(200).json({
    product: product,
    date: date,
    amount: amount,
    description: description,
  });
});

const validateBeforeProcess = (body: object, ROUTE_TYPE: string) => {
  if (ROUTE_TYPE === "CREATE") {
  }
};

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
