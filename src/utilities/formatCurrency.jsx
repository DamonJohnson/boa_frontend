const currency_formatter = new Intl.NumberFormat('en-AU', { 
    currency: "AUD", 
    style: "currency"
})

export function formatCurrency(price) {
    return currency_formatter.format(price)
}