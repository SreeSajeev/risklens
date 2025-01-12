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