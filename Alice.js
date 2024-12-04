
const userProfile = {

    name: "Alice",
    
    age: 28,
    
    details ()
      {
    
    return `${userProfile.name} is ${userProfile.age} years old.`;
    },
    
    updateAge(newAge) 
    {
    
    if (newAge <= 0) 
    {
    
    console.log("Invalid age.");
    
    return;
    }
    
    this.age = newAge;
    
    console.log(userProfile.details);
    }
    };
    
    userProfile.updateAge(30);
    
    console.log(userProfile.details());
