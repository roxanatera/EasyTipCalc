export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('de-DE', { 
        style: 'currency',
        currency: 'EUR', 
    }).format(quantity); 
}