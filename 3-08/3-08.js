// // Scenario 1 : Online Food Delivery

 // Question:
// 1. Order received (1 second)
// 2. Preparing food (3 seconds)
// 3. Packing food (2 seconds)
// 4. Assigning a delivery person (2 seconds)
// 5. Delivering food (4 seconds)


function orderRecieved(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Order Recieved")
            //reject("Oops...Couldnt take your order")
        }, 1000)
    })
}

function preparingFood(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Your food is being prepared...!! Hold Tight")
           // reject("Oops..!! Lack of ingredients.. couldnt prepare food")
        }, 3000)
    })
}

function packingFood(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Hola....Food is being packed")
            //reject("Nah.... Food packing failed")
        }, 2000)
    })
}

function assigningDeliveryPartner(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           // resolve("Yayy...Assigned a parter to deliver your food")
            reject("Sorry... Dont have enough delivery partners in your area..")
        }, 2000)
    })
}

function deliveringFood(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Food is on the way")
           // reject("Sorry..Delivery Failed..")
        }, 4000)
    })
}

orderRecieved()
    .then(res=> {  console.log(res); return preparingFood();})
    .then(res => { console.log(res); return packingFood();})
    .then(res => {console.log(res); return assigningDeliveryPartner();})
    .then(res =>{console.log(res); return deliveringFood();})
    .then(res=> console.log(res))
    .catch(err => {console.error(err); });


// Scenario 2: Movie Ticket Booking
// Question:

    // 1. Selecting seats (2 seconds)
    // 2. Processing payment (3 seconds)
    // 3. Generating ticket (1 second)
    // 4. Sending confirmation email (2 seconds)
    

function selectingSeats(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Your seats got selected")
        //reject("Your seats are not selected")
        }, 2000)
    })
}

function processingPayment(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Your payment is being processed")
            // reject("Your payment failed")
        }, 3000)
    })
}

function generatingTicket(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            //resolve("Your ticket is generating")
            reject("Oops...! We couldnt generate the ticket")
        },1000)
    })
}

function sendingMail(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Your will get a confirmation mail")
            // reject("We failed to send the mail")
        },2000)
    })
}

selectingSeats()
    .then(res =>{console.log(res); return processingPayment();})
    .then(res=>{console.log(res); return generatingTicket();})
    .then(res=>{console.log(res); return sendingMail();})
    .then(res=>{console.log(res)})
    .catch(err=>{console.error(err)})


//     Scenario 3: Car Service Center

//     1. Car check-in (1 second)
//     2. Oil change (2 seconds)
//     3. Engine check (3 seconds)
//     4. Car wash (2 seconds)
//     5. Final quality check (2 seconds)


function carCheckIn(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Car Check-in Completed")
            // reject ("Car check-In failed")
        }, 1000)
    })
}

function oilChange(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Oil Changed Successfully")
            // reject("Oil unavailable")
        }, 2000)
    })
}

function engineCheck(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Engine check completed succesfully")
            // reject("Engine check failed")
        }, 3000)
    })
}

function carWash(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Car Wash completed...")
            // reject("Car wash failed")
        }, 2000)
    })
}

function finalQualityCheck(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Hurrah...Quality check is done..Ready to drive")
            // reject("Quality check failed")
        }, 2000)
    })
}

carCheckIn()
        .then(res=>{console.log(res); return oilChange();})
        .then(res=>{console.log(res); return engineCheck();})
        .then(res=>{console.log(res); return carWash();})
        .then(res=>{console.log(res); return finalQualityCheck();})
        .then(res=>{console.log(res);})
        .catch(err=>{console.error()})



// Scenario 4: Laptop Repair Service
// Question:

// 1. Diagnosing issue (3 seconds)
// 2. Replacing faulty parts (4 seconds)
// 3. Updating software (2 seconds)
// 4. Final testing (2 seconds)
// 5. Returning to customer (1 second)


function diagnosingIssue(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve("Hey your Issue is diagnised")
            //reject("Sorry..We cant diaognise tour Issue")
        },3000);
    });
}

function replacingFaultyParts(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve("Hey..!! Faulty parts are replaced")
            //reject("Sorry..We cant replace the parts")
        },4000);
    });
}

 function updatingSoftware(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
         resolve("Updating software completed")
        // reject("We dont have updated software")
        },2000);
    });
}

function finalTesting(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("Final testing completed") 
            //reject("We cant complete the final testing")
        },2000);
    });
}

function returningToCustomer(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("Return To customer Completed")
           // reject("we couldnt return the product to the customer")
        },1000);
    });
}

diagnosingIssue()
        .then(result => { console.log(result); return replacingFaultyParts(); })
        .then(result => { console.log(result); return updatingSoftware(); })
        .then(result => { console.log(result); return finalTesting(); })
        .then(result => { console.log(result); return returningToCustomer(); })
        .then(result => { console.log(result); })
        .catch(error=>{console.error(error)})


// Scenario 5: Online Course Enrollment
// Question:

// 1. Checking course availability (1 second)
// 2. Processing payment (3 seconds)
// 3. Generating enrollment ID (1 second)
// 4. Sending course materials (2 seconds)
// 5. Granting access to live classes (2 seconds)


function checkCourseAvailability(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("Hello...Course is available")
         //   reject("course is not available")
        },1000);
    });
}

function processingPayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("Payment is Done")
            //reject("Payment Failed")
        },3000);
    });
}

function generateEnrollmentId(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Enrollment ID is generated")
           // reject("Couldnt generate ID")
        },1000);
    });
}

function sendCourseMaterials(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("We have sent you the Course materials...")
          //  reject("Couldnt send the materials")
        },2000)
    });
}

function grantAccessToClasses(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve("Granted Acces to Live classes")
            // reject("Access not granted to your ID")
            },2000)
    });
}

checkCourse()
        .then(res => { console.log(res); return processingPayment(); })
        .then(res => { console.log(res); return generateEnrollmentId(); })
        .then(res => { console.log(res); return sendCourseMaterials(); })
        .then(res => { console.log(res); return grantAccessToClasses(); })
        .then(res => { console.log(res); })
        .catch(error=>{console.error(error)})



