import clientAPI from '@src/libs/api/client';

class FilteredInvestmentAccountByNameRepository {
  getFilteredInvestmentAccountByName(keyword: string) {
    return clientAPI.get(`/accounts?q=${keyword}`);
  }
}
export default new FilteredInvestmentAccountByNameRepository();
