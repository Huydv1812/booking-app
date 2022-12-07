import { apiClient } from "../../../service/apiService";

import { API_ENDPOINT } from "../../../shared/constants/endpoint";
import { NextApiRequest, NextApiResponse } from "next";
import { RegisterProp } from "../../../service/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;

  switch (method) {
    case "POST":
      try {
        const body = req.body;

        const data = await registerRequest(body);
        res.statusCode = 200;
        console.log(data);
        return res.json({ data: data.data });
      } catch (error: any) {
        res.statusCode = error.response.res.statusCodes;
        res.json({ error, data: null });
      }
  }
}

async function registerRequest(data: RegisterProp) {
  console.log(data);

  return await apiClient.post(
    `${process.env.API_BASE}${API_ENDPOINT.REGISTER}`,
    data
  );
}
