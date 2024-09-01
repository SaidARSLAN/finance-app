import express, { Request, Response } from "express";

const app = express();

const port: number = 1283;

app.get("/", (_: Request, res: Response) => {
  res.send("Fetched All Data");
});

app.use(express.json());

app.post("/save", async (req: Request, res: Response) => {
  try {
    const isValid = await validateBeforeProcess(req.body, "CREATE");
    if (isValid.length > 0) {
      res.status(400).json(JSON.stringify(isValid));
    }
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
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

const validateBeforeProcess = async (
  body: { product: string; date: string; amount: number; description: string },
  ROUTE_TYPE: string,
) => {
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
};

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
