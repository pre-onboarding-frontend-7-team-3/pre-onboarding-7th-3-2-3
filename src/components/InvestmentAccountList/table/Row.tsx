// export const rowsData: {
//   [x: string]: Key | null | undefined;
//   name: string;
//   accountNum: number;
//   customerName: string;
//   accountState: number;
//   principal: number;
//   totalAsset: number;
//   profitOrLoss: string;
//   profitRate: string;
//   productName: string;
//   accountActive: string;
//   accountCreativeDate: number;
// }[] = [];

// {
//   datas.forEach(
//     (data: {
//       broker_id: any;
//       number: any;
//       status: any;
//       payments: any;
//       assets: any;
//       name: any;
//       is_active: boolean;
//       created_at: any;
//     }) => {
//       rowsData.push({
//         name: data.broker_id,
//         accountNum: data.number,
//         customerName: "은지",
//         accountState: data.status,
//         principal: data.payments,
//         totalAsset: data.assets,
//         profitOrLoss: "5%",
//         profitRate: "5%",
//         productName: data.name,
//         accountActive: data.is_active === true ? "활성화" : "비활성화",
//         accountCreativeDate: data.created_at,
//       });
//     }
//   );
// }

import React from "react";

const Row = () => {
  return <div>Row</div>;
};

export default Row;
