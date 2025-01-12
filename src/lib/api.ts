const API_KEY = "17cab21fa6b568125836f6c0";
const BASE_URL = "https://v6.exchangerate-api.com/v6";

export interface ExchangeRateResponse {
  conversion_rate: number;
}

export interface TopCurrenciesResponse {
  conversion_rates: Record<string, number>;
}

export interface HistoricalDataPoint {
  date: string;
  rate: number;
}

export async function fetchExchangeRate(baseCurrency: string, targetCurrency: string): Promise<number> {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/pair/${baseCurrency}/${targetCurrency}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ExchangeRateResponse = await response.json();
    return data.conversion_rate;
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    throw error;
  }
}

export async function fetchTopCurrencies(): Promise<Record<string, number>> {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/latest/USD`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: TopCurrenciesResponse = await response.json();
    return data.conversion_rates;
  } catch (error) {
    console.error("Error fetching top currencies:", error);
    throw error;
  }
}

export async function fetchHistoricalData(
  baseCurrency: string,
  targetCurrency: string,
  startDate: string,
  endDate: string
): Promise<HistoricalDataPoint[]> {
  // Note: This is a mock implementation since the free API doesn't support historical data
  const mockData: HistoricalDataPoint[] = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
    mockData.push({
      date: d.toISOString().split('T')[0],
      rate: Math.random() * (1.2 - 0.8) + 0.8
    });
  }
  
  return mockData;
}