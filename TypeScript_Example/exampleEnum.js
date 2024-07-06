// creat enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
// creat function
function displayOderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            console.log("Your Order is pending.");
            break;
        case OrderStatus.Shipped:
            console.log("Your Order has been shipped.");
            break;
        case OrderStatus.Cancelled:
            console.log("Your Order has been cancelled.");
            break;
            defult: console.log("Unknown urder status");
    }
} // end displayOrderStatus function
// test function
displayOderStatus(OrderStatus.Shipped);
displayOderStatus(OrderStatus.Cancelled);
