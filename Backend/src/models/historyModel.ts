import { Schema, model, Document, Model } from "mongoose";

interface IHistory extends Document {
  user: string;
  carrier: string;
  country_code: string;
  country_name: string;
  country_prefix: string;
  international_format: string;
  line_type: string;
  local_format: string;
  locaction: string;
  number: string;
  valid: boolean;
}

const historySchema = new Schema(
  {
    user: {
      type: String,
    },
    carrier: {
      type: String,
    },
    country_code: {
      type: String,
    },
    country_name: {
      type: String,
    },
    country_prefix: {
      type: String,
    },
    international_format: {
      type: String,
    },
    line_type: {
      type: String,
    },
    local_format: {
      type: String,
    },
    locaction: {
      type: String,
    },
    number: {
      type: String,
    },
    valid: {
      type: Boolean,
    },
  },

  {
    timestamps: true,
  }
);

const History: Model<IHistory> = model("History", historySchema);

export { History, IHistory };
