const API_KEY = "17cab21fa6b568125836f6c0";
const BASE_URL = "https://v6.exchangerate-api.com/v6";

export async function fetchExchangeRate(baseCurrency: string, targetCurrency: string) {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/pair/${baseCurrency}/${targetCurrency}`);
    const data = await response.json();
    return data.conversion_rate;
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    throw error;
  }
}

export async function fetchTopCurrencies() {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/latest/USD`);
    const data = await response.json();
    return data.conversion_rates;
  } catch (error) {
    console.error("Error fetching top currencies:", error);
    throw error;
  }
}

export async function fetchHistoricalData(baseCurrency: string, targetCurrency: string, startDate: string, endDate: string) {
  // Note: This is a mock implementation since the free API doesn't support historical data
  // In a real application, you would need to use a different API that provides historical data
  const mockData = [];
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