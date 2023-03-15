import { Request, Response } from "express";
import AsyncHandler from "express-async-handler";
import { History } from "../models/historyModel";

//@desc   search for phone number.
//@route  GET /api/numbers/search
//@access Private
const searchNumber = AsyncHandler(async (req: Request, res: Response) => {
  const { number } = req.query;
  if (!number) throw new Error("Please provide phone number");
  const apiKey = process.env.NUMVERIFY_APIKEY as string;
  const apiURL = process.env.NUMVERIFY_APIURL as string;

  const result = await (
    await fetch(`${apiURL}?number=${number}`, {
      headers: {
        apikey: apiKey,
      },
    })
  ).json();

  History.create({ user: req.user?.id, ...result });

  res.json(result);
});

//@desc    retrieve all history data.
//@route  GET /api/numbers/history
//@access Private
const searchHistory = AsyncHandler(async (req: Request, res: Response) => {
  const userID = req.user?._id;
  const searchHistory = await History.find({
    user: userID,
  });
  res.json(searchHistory);
});

export { searchNumber, searchHistory };
