// import clientAPI from '@src/libs/api/client';

// class FilteredInvestmentAccountByNameRepository {
//   getFilteredInvestmentAccountByName(accountInfo, currentPage) {
//     // if (!accountInfo) return new Promise(() => null);
//     console.log(accountInfo);
//     console.log(currentPage);
//     const broker =
//       accountInfo.broker_id && `&broker_id=${accountInfo.broker_id}`;
//     const isActive =
//       accountInfo.is_active && `&is_active=${accountInfo.is_active}`;
//     const status = accountInfo.status && `&status=${accountInfo.status}`;
//     const url = `/accounts?_expand=user&q=${accountInfo.keyword}${broker}${isActive}${status}&_page=${currentPage}&_limit=20`;
//     console.log(url);
//     return clientAPI.get(url);
//   }
// }
// export default new FilteredInvestmentAccountByNameRepository();
