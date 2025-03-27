


// console.log("hai")

// // first question//


// function processNumbers(a, b, callback) {
//     return callback(a, b);
// }

// var result = processNumbers(3, 4, function(x, y) {
//     return x + y;
// });

// console.log("Sum:", result);

// // second question//

// function greet(callback) {
//     return callback("Alice");
// }

// var result = greet(function(name) {
//     return "Hello, " + name + "!";
// });

// console.log(result);

// // third question//

// function calculate(a, b, callback) {
//     return callback(a, b);
// }

// var result = calculate(10, 5, function(x, y) {
//     return x - y;
// });

// console.log("Difference:", result);

function processOrder(orderId, callback){
    if (orderId == ''){
        callback(false, "Order Process failed")
    }
    else{
        callback(true,"Order Processed Successfully")
    }
}

function shipOrder(orderId, callback){
    if (orderId == "FAIL"){
        callback(false, "Shipping failed")
    }
    else{
        callback(true,"Order shipped with Tracking Id:XYZ123")
    }
}
function dispatchOrder(orderId, callback){
    if (orderId == "DELAY"){
        callback(false, "Dispatch Failed")
    }
    else{
        callback(true, "Order dispatched with vehicle-1")
    }
}

function outForDelivery(orderId, callback){
    if (orderId == "CANCEL"){
        callback(false, "Delivery Failed")
    }
    else{
        callback(true, "Order is out for Delivery")
    }
}

processOrder("123" , (status, message) => {
    if(status == true){
        console.log(message);
        shipOrder("PASS", (status, message)=>{
            if(status == true){
                console.log(message)
            dispatchOrder("DELAY", (status, message)=>{
                if(status == true){
                    console.log(message)
                outForDelivery("Success", (status, message)=>{
                    if(status == true){
                        console.log(message)
                    }else{
                        console.log(message)
                    }
                })
                }else{
                    console.log(message)
                }
            })
            }else{
                console.log(message)
            }
        })
    }else{
        console.log(message);
    }
} )