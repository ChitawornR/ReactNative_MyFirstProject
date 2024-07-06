enum ProductStatus{
    Available = "Available",
    OutOfStock = "Out of Stock",
    Discontinued = "Discontinued"
}

let products1: any[] = [
    {name: "Laptop", status: ProductStatus.Available, price: 1200},
    {name: "Smartphone", status: ProductStatus.OutOfStock, price: 700},
    {name: "Tablet", status: ProductStatus.Discontinued, price: 300},
]

function displayProductDetails(products:any[]){

    // products.map(product => console.log(`Product: ${product.name}, Status: ${product.status}, Price: ${product.price}`))
    products.forEach(product =>{
        console.log(`Product: ${product.name}, Status: ${product.status}, Price: ${product.price}`);
    });
}

displayProductDetails(products1)
