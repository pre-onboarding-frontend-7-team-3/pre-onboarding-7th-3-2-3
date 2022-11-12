import { apiClient } from "../../../../shared/api/client";

class InvestmentAccountRepository {
  getInvestmentAccount() {
    return apiClient.get("/accounts");
  }
}
export default new InvestmentAccountRepository();
