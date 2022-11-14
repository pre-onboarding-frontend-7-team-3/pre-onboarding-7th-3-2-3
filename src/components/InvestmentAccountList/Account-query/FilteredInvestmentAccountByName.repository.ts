import clientAPI from '@src/libs/api/client';

class FilteredInvestmentAccountByNameRepository {
  getFilteredInvestmentAccountByName(keyword: string) {
    if (!keyword) return new Promise(() => null);
    return clientAPI.get(`/accounts?_expand=user&q=${keyword}`);
  }
}
export default new FilteredInvestmentAccountByNameRepository();
