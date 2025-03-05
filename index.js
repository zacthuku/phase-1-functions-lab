function distanceFromHqInBlocks(block) {
    const hq = 42; 
    return Math.abs(block - hq); 
  }
  
  
  console.log(distanceFromHqInBlocks(50));
  console.log(distanceFromHqInBlocks(43)); 
  console.log(distanceFromHqInBlocks(34)); 

  function distanceFromHqInFeet(block){
    const hq = 42;
    return Math.abs((block-hq)*264);
  }
  function distanceTravelledInFeet(block, finish){
  
    return Math.abs((block-finish)*264);
  }
  function calculatesFarePrice(block, finish){
    const feet= 264;
    const distance =Math.abs((block-finish)*feet);
    if(distance<= 400){
      return 0;
    }else if(distance>400&& distance<=2000){
      return (distance - 400)*0.02;
    }else if (distance>2000&&distance<=2500){
      return 25.0
    }else{
      return 'cannot travel that far';
    }
  }