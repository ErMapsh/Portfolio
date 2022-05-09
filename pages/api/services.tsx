import { NextApiRequest, NextApiResponse } from "next";
import { servicesData } from "../../data/services/servicesData";

export default function services(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(servicesData)
}
