import { InvestmentService } from './investmentService';
import { HttpClient } from './httpClient';

const httpClient = new HttpClient('http://localhost:4000');
const investmentService = new InvestmentService(httpClient);

export { investmentService };
