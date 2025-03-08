 //1
 function sayHello(){
    console.log("hello,World!")
    }
    sayHello()
    
    
    
    // 2.
    function displayWarning(){
    console.log("Warning! System Overload!")
    }
    displayWarning()
    
    
    
    // 3. 
    function printStatus(){
    
    console.log("System Status: Active")
    }
    printStatus()
    
    
    // 4. 
    
    function initialize(){
    console.log("Initialization Complete.")
    shutdown()
    }
    function shutdown(){
    console.log("System Shutting Down…")
    }
    initialize()
    
    
    
    //5
    
    function startProcess(){
      console.log("Process Started.")
    endProcess()
    }
    function endProcess(){
    console.log("Process Ended.")
    }
    startProcess()
    
    
    //6
    
    function greetUser(name){
      console.log("hello " + name +'');
    
    }
    greetUser("pavani")
    
    
    // 7
    
    function calculateSum(a,b){
    console.log(a+b)
    }
    calculateSum(2,4)
    calculateSum(3,8)
    
    // 8 
    
     
    var n=5
    function countDown(){
    
      for (var i=5;i>=1;i--){
    console.log(i)
    
    }
    }
    countDown()
    
    
    // 9 
     function checkEvenOdd(){
       var p=8
       if(p%2==0){
        console.log("even")
        }
      else{
      console.log("odd")        
      } 
      console.log(p) 
    }
    checkEvenOdd()
    
    
    //10
    
    function beginSession(){
    console.log("Session Started.")
    endSession();
    }
    function endSession(){
    console.log("Session Ended.")
    }
    beginSession()