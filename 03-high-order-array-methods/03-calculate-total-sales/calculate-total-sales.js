function calculateTotalSalesWithTax(product, tax) {
    let salePerItem = product.map( (item) => item.price * item.quantity);
    let totalSale = salePerItem.reduce( (sum, productPrice) => sum + productPrice ,0);
    let totalTax = (totalSale * tax) / 100;
    let totalSaleWithTax = totalSale + totalTax;
    return parseFloat(totalSaleWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
