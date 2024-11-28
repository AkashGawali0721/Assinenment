console.log("hello");
let sum=0;
var matrix=[[1,2,3],
            [4,5,6], 
            [6,7,8]];

function sum(matrix,column){
  let sum=0;
  for(var i=0;i<matrix[0].length;i++){
   
      sum=sum+matrix[i][column];
    }
  console.log(sum);
  
}
sum(matrix,2)