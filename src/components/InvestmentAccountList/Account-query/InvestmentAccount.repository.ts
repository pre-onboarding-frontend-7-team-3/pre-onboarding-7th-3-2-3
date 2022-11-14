import clientAPI from "@src/libs/api/client";

class InvestmentAccountRepository {
  getInvestmentAccount(currentPage: number, maxPage: number) {
    return clientAPI.get(
      `/accounts?_expand=user&_page=${currentPage}&_limit=${maxPage}`
    );
  }
}
export default new InvestmentAccountRepository();
