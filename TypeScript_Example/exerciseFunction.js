var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [
    { name: 'Laptop', price: 50000, category: 'Electronics' },
    { name: 'Shirt', price: 1200, category: 'Apparel' },
    { name: 'Coffer Maker', price: 2500, category: 'AAppliances' }
];
// create function
function fillterProductPrice(product) {
    return product
        .filter(function (product) { return product.price > 2000; })
        .map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
// call function
// let fillterProduct:Product[] = filterProductByPrice(products);
console.log(fillterProductPrice(products));
