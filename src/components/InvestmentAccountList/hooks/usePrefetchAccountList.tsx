// import { useEffect, useState } from 'react';
// import { useQueryClient } from '@tanstack/react-query';
// import InvestmentAccountRepository from '../Account-query/InvestmentAccount.repository';

// interface Props {
//   currentPage: number;
//   maxPage: number;
// }

// /** */
// const useMaxPage = ({currentPage} : Props) =>{
//   const [isMaxPage = setIsMaxpage]= useState(false)
//   const queryClient = useQueryClient();

//   useEffect(()=>{
//     queryClient.prefetchQuery(["nextPage", nextPage], () => {
//       return InvestmentAccountRepository.getInvestmentAccount()
//     })
//   }, [currentPage])

//   return isMaxPage
// }


// const usePrefetchAccountList = ({ currentPage, maxPage }: Props) => {
//   const queryClient = useQueryClient();

//   useEffect(() => {
//     if (currentPage < maxPage) {
//       const nextPage = currentPage + 1;
//       queryClient.prefetchQuery(['GetInvestmentAccount', nextPage], () => {
//         return InvestmentAccountRepository.preFetchAccount(nextPage, maxPage);
//       });
//     }
//   }, [currentPage, queryClient]);
// };

// export default usePrefetchAccountList;
