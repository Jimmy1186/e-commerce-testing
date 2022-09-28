import { createRouter } from "./context";
import { z } from "zod";
// @ts-ignore
import ecpay_payment from "ecpay_aio_nodejs/lib/ecpay_payment.js";
import {  format } from 'date-fns'

export const exampleRouter = createRouter()
  .mutation("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve:async({ctx, input }) =>{

      let time = new Date().getTime();
      let no = "dashing" + time;
      let date = format(new Date(),"yyyy/MM/dd HH:mm:ss");

      let base_param = {
        MerchantTradeNo: no, //請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
        MerchantTradeDate: date, //ex: 2017/02/13 15:45:30
        TotalAmount: '1230',
        TradeDesc: '測試交易描述',
        ItemName: '測試商品等',
        ReturnURL: `${process.env.API_URL}/PaymentDoneServer`,
        // ClientBackURL: "https://ecpay-demo.vercel.app/payment?from=ecpay",
        OrderResultURL: `${process.env.API_URL}/paymentSuccess`,
        // ChooseSubPayment: '',
        // OrderResultURL: 'http://192.168.0.1/payment_result',
        // NeedExtraPaidInfo: '1',
        // ClientBackURL: 'https://www.google.com',
        // ItemURL: 'http://item.test.tw',
        // Remark: '交易備註',
        // HoldTradeAMT: '1',
        // StoreID: '',
        // CustomField1: '',
        // CustomField2: '',
        // CustomField3: '',
        // CustomField4: ''
      }
      
      // 若要測試開立電子發票，請將inv_params內的"所有"參數取消註解 //
      let inv_params = {
        // RelateNumber: 'PLEASE MODIFY',  //請帶30碼uid ex: SJDFJGH24FJIL97G73653XM0VOMS4K
        // CustomerID: 'MEM_0000001',  //會員編號
        // CustomerIdentifier: '',   //統一編號
        // CustomerName: '測試買家',
        // CustomerAddr: '測試用地址',
        // CustomerPhone: '0123456789',
        // CustomerEmail: 'johndoe@test.com',
        // ClearanceMark: '2',
        // TaxType: '1',
        // CarruerType: '',
        // CarruerNum: '',
        // Donation: '2',
        // LoveCode: '',
        // Print: '1',
        // InvoiceItemName: '測試商品1|測試商品2',
        // InvoiceItemCount: '2|3',
        // InvoiceItemWord: '個|包',
        // InvoiceItemPrice: '35|10',
        // InvoiceItemTaxType: '1|1',
        // InvoiceRemark: '測試商品1的說明|測試商品2的說明',
        // DelayDay: '0',
        // InvType: '07'
      }


      const options = {
        "OperationMode": "Test", //Test or Production
        "MercProfile": {
          "MerchantID": "2000132",
          "HashKey": "5294y06JbISpM5x9",
          "HashIV": "v77hoKGq4kWxNNIS"
        },
        "IgnorePayment": [
      //    "Credit",
      //    "WebATM",
      //    "ATM",
      //    "CVS",
      //    "BARCODE",
      //    "AndroidPay"
        ],
        "IsProjectContractor": false
      }

      
 
       const create = new ecpay_payment(options),
        htm = create.payment_client.aio_check_out_all( base_param, inv_params)
  
      

      return  {htm:htm.toString()}
    },
  })

