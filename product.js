
let product_prize= 750;

if( product_prize >= 1000 ){
    console.log("Expensive.");
}
else if(product_prize <= 999 && product_prize >= 500){
    console.log("Moderate");
}
else if(product_prize <= 500 && product_prize >= 0){
    console.log("Affordable");
}
else if(product_prize === 0){
  console.log("Free");
}
else if(product_prize >= -1){
    console.log("Invalid Price");
}