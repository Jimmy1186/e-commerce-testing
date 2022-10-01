import { format } from "date-fns";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)

  // const {
  //   MerchantID,
  //   MerchantTradeNo,
  //   StoreID,
  //   RtnCode,
  //   RtnMsg,
  //   TradeNo,
  //   TradeAmt,
  //   PaymentDate,
  //   PaymentType,
  //   PaymentTypeChargeFee,
  //   TradeDate,
  //   SimulatePaid,
  // } = req.body;



// res.send(req.body)
  res.send("1|OK")
}
