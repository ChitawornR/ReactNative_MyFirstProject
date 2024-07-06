interface Product {
    name:string;
    price:number;
    category:string;
}

let products:Product[] = [
    {name:'Laptop',price:50000,category:'Electronics'},
    {name:'Shirt',price:1200,category:'Apparel'},
    {name:'Coffer Maker',price:2500,category:'AAppliances'}
]

// create function
function fillterProductPrice(product:Product[],price:number):Product[]{
    return product
    .filter((product)=> product.price > price)
    .map((product) => ({...product,price:product.price * 0.9}))
}

// call function
// let fillterProduct:Product[] = filterProductByPrice(products);
console.log(fillterProductPrice(products,2000))