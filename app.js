//Question no 1

var itemsArray = [
    {name:"juice",price:50, quantity:3},
    {name:"cookie",price:30, quantity:9},
    {name:"shirt",price:880, quantity:1},
    {name:"pen",price:100, quantity:2}];
    
    for(let i=0; i<itemsArray.length; i++){
        console.log(`The price of ${itemsArray[i].name}: ${itemsArray[i].price * itemsArray[i].quantity}`);
    }
    
    
    
    //Question no 2
    
    let user={
        names:"Ashar",
        email:"asharkhan234gmail.com",
        password:"khan123",
        age:12,
        gender:"male",
        city:"karachi",
        country:"Pakistan",
    }
    
    if(user.names){
        console.log("The name is availble in the object");
    }else{
        console.log("Not available in the object");
    }
    
    if(user.firstName){
        console.log("availble");
    }else{
        console.log("Not available");
    }
    
    
    //Question no 3
    
    
    function person(firstName , lastName , age , email ){
        this.firstName =firstName;
        this.lastName =lastName;
        this.age = age;
        this.email =email;
    
    }
    
    let personDetails=new person("Ashar" , "khan" , 12 , "asharkhan234@gmail.com");
    
    console.log(personDetails);
    
    //Question no 4