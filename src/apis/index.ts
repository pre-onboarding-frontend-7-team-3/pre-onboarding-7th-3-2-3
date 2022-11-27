import { InvestmentService } from './investmentService';
import { HttpClient } from './httpClient';

const httpClient = new HttpClient(process.env.VITE_SERVER_URL||"");
const investmentService = new InvestmentService(httpClient);

export { investmentService };
