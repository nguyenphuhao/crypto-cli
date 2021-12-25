const BASE_URL = "https://min-api.cryptocompare.com/data";



export type SingleSymbolPrice = {
    [symbol: string]: number
}
export async function getSingleSymbolPrice(): Promise<SingleSymbolPrice>{
    const response = {
        USD: 50948.83
    }
    return response;
}
