
let score=[54,77,35,66,98,76,53,42];

for(let i=0;i<score.length;i++)
    {
    if(score[i]<=40){
        score[i] +=20;
    }
    if(score[i]>90){
        score[i]=90;
    }
    let Count = 0;
    for (let i = 0; i < score.length; i++) {
      if (score[i] >= 50) {
       Count++;
      }
    }
    
    
    console.log("Adjusted Scores:", score);
    console.log("Number of Students Who Passed:", Count);
}

