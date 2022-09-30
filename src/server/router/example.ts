import { createRouter } from "./context";
import { z } from "zod";
import { CreditOneTimePayment, Merchant } from "node-ecpay-aio";
import { format } from "date-fns";
// @ts-ignore
import ecpay_payment from "ecpay_aio_nodejs/lib/ecpay_payment.js";


export const exampleRouter = createRouter().mutation("hello", {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  resolve: async ({ ctx, input }) => {
    let time = new Date().getTime();
    let no = "UWU" + time;
    let date = format(new Date(), "yyyy/MM/dd HH:mm:ss");
  
    try {
      const options = {
        MerchantID: "2000132",
        HashKey: "5294y06JbISpM5x9",
        HashIV: "v77hoKGq4kWxNNIS",
        ReturnURL: `${process.env.API_URL}api/PaymentDoneServer`,
        OrderResultURL: `${process.env.API_URL}paymentResult`,
        ClientBackURL:`${process.env.API_URL}paymentResult`
        // 選填
        // PeriodReturnURL: 'https://...',
        // OrderResultURL: 'https://...' ,
        // ClientBackURL: 'https://...',
        // PaymentInfoURL: 'https://...',
        // ClientRedirectURL: 'https://...'
      };

      const newM = new Merchant("Test", options);

      const baseParams = {
        // 必填
        MerchantTradeNo: no,
        MerchantTradeDate: date,
        TotalAmount: 16,
        TradeDesc: "測試交易描述",
        ItemName: "測試商品等",
        ReturnURL: `${process.env.API_URL}api/PaymentDoneServer`,
        OrderResultURL: `${process.env.API_URL}paymentResult`,
        ClientBackURL:`${process.env.API_URL}paymentResult`
        // 以下選填
        // Remark: '備註',
        // NeedExtraPaidInfo: 'Y',        // 'N': 不要, 'Y': 要
        // StoreID: '',
        // ItemURL: 'https://...',
        // CustomField1: '自訂欄位1',
        // CustomField2: '自訂欄位2',
        // CustomField3: '自訂欄位3',
        // CustomField4: '自訂欄位4',
        // ReturnURL: 'https://...',      // 若在 merchant 設定過, 此處不需再設定, 除非你針對此單要用個別的 hook
        // ClientBackURL: 'https://...',  // 若在 merchant 設定過, 此處不需再設定, 除非你針對此單要用個別的返回網址
        // OrderResultURL: 'https://...', // 若在 merchant 設定過, 此處不需再設定, 除非你針對此單要顯示個別的付款結果網址
      };

      const params = {
        // 皆為選填
        // BindingCard: 1,                  // 記憶信用卡: 1 (記) | 0 (不記)
        // MerchantMemberID: '2000132u001', // 記憶卡片需加註識別碼: MerchantId+廠商會員編號
        // Language: 'ENG',                 // 語系: undefined(繁中) | 'ENG' | 'KOR' | 'JPN' | 'CHI'
        // Redeem: 'Y',                     // 紅利折抵: undefined(不用) | 'Y' (使用)
        // UnionPay: 2,                     // [需申請] 銀聯卡: 0 (可用, default) | 1 (導至銀聯網) | 2 (不可用)
      };

      const payment = newM.createPayment(
        CreditOneTimePayment,
        baseParams,
        params
      );
      const htm = await payment.checkout();

      return { htm: htm };
    } catch (e) {
      console.log(e);
    }



// try{
//   let base_param = {
//     MerchantTradeNo: no, //請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
//     MerchantTradeDate: date, //ex: 2017/02/13 15:45:30
//     TotalAmount: '15',
//     TradeDesc: '測試交易描述',
//     ItemName: '測試商品等',
//     ReturnURL: `${process.env.API_URL}api/PaymentDoneServer`,
//     // ClientBackURL: "https://ecpay-demo.vercel.app/payment?from=ecpay",
//     OrderResultURL: `${process.env.API_URL}api/PaymentDoneServer`,
//     // ChooseSubPayment: '',
//     // OrderResultURL: 'http://192.168.0.1/payment_result',
//     // NeedExtraPaidInfo: '1',
//     // ClientBackURL: 'https://www.google.com',
//     // ItemURL: 'http://item.test.tw',
//     // Remark: '交易備註',
//     // HoldTradeAMT: '1',
//     // StoreID: '',
//     // CustomField1: '',
//     // CustomField2: '',
//     // CustomField3: '',
//     // CustomField4: ''
//   }
  
//   // 若要測試開立電子發票，請將inv_params內的"所有"參數取消註解 //
//   let inv_params = {
//     // RelateNumber: 'PLEASE MODIFY',  //請帶30碼uid ex: SJDFJGH24FJIL97G73653XM0VOMS4K
//     // CustomerID: 'MEM_0000001',  //會員編號
//     // CustomerIdentifier: '',   //統一編號
//     // CustomerName: '測試買家',
//     // CustomerAddr: '測試用地址',
//     // CustomerPhone: '0123456789',
//     // CustomerEmail: 'johndoe@test.com',
//     // ClearanceMark: '2',
//     // TaxType: '1',
//     // CarruerType: '',
//     // CarruerNum: '',
//     // Donation: '2',
//     // LoveCode: '',
//     // Print: '1',
//     // InvoiceItemName: '測試商品1|測試商品2',
//     // InvoiceItemCount: '2|3',
//     // InvoiceItemWord: '個|包',
//     // InvoiceItemPrice: '35|10',
//     // InvoiceItemTaxType: '1|1',
//     // InvoiceRemark: '測試商品1的說明|測試商品2的說明',
//     // DelayDay: '0',
//     // InvType: '07'
//   }


//   const options = {
//     "OperationMode": "Test", //Test or Production
//     "MercProfile": {
//       "MerchantID": "2000132",
//       "HashKey": "5294y06JbISpM5x9",
//       "HashIV": "v77hoKGq4kWxNNIS"
//     },
//     "IgnorePayment": [
//   //    "Credit",
//   //    "WebATM",
//   //    "ATM",
//   //    "CVS",
//   //    "BARCODE",
//   //    "AndroidPay"
//     ],
//     "IsProjectContractor": false
//   }

  

//    const create = new ecpay_payment(options),
//     htm = create.payment_client.aio_check_out_all( base_param, inv_params)

  

//   return  {htm:htm.toString()}
// }catch(e){
//   console.log(e)
// }


  },
});
