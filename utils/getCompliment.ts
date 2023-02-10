import axios from "axios";

export default async (): Promise<string> => {
  const req = await axios.get("https://complimentr.com/api");
  return req.data.compliment;
};
