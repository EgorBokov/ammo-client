export function moneyConvert(price: number | string): any {
    return new Intl.NumberFormat('ru-RU', {
        currency: 'RUB',
        style: 'currency',
        maximumFractionDigits: 0
        // @ts-ignore
    }).format(price)
}
