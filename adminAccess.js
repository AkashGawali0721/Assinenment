let person = { role: "admin", experience: 7, active: true, department: "IT" };

if(person.role=== "admin" && person.experience>=5 && person.active===true && person.department==="IT"){
    console.log("Full IT Admin Access");
}
else if(person.role=== "admin" && person.experience>=5 && person.active===true && person.department==="General"){
    console.log("Full General Admin Access");
}
else if(person.role=== "admin" && person.experience<=5 && person.active===true && person.department==="IT"){
    console.log("Limited Admin Access");
}
else if(person.role=== "admin" && person.experience<=5 && person.active===false && person.department==="IT"){
    console.log("Admin Access Revoked");
}
else if(person.role=== "Manager" && person.experience>=3 && person.active===true && person.department==="Sales"){

    console.log("Full Sales Manager Access");
}
else if(person.role=== "Manager" && person.experience>=3 && person.active===true && person.department==="General"){

    console.log("Full Manager Access");
}
else if(person.role=== "Manager" && person.experience<=3 && person.active===true && person.department==="Sales"){

    console.log("Limited Manager Access");
}
else if(person.role=== "Manager" && person.experience<=3 && person.active===false && person.department==="Sales"){

    console.log("Manager Access Revoked");
}
else if(person.role=== "Support" && person.active===true){
    console.log("Priority Support Access");
}
else if(person.role=== "Marketing" && person.active===true){
    console.log("User Access");
}
else if(person.role=== "Marketing" && person.active===false){
    console.log("User Access Revoked");
}
else{
    console.log("Invalid Role");
}





