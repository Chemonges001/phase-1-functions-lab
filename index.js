// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber){
  if (blockNumber > 42) {
      return (blockNumber-42)
  }
  else{
      return (42-blockNumber)
  }
}
function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber)*264
}
function distanceTravelledInFeet(blockA, blockB){
    if (blockA > blockB){
        return ((blockA -blockB)*264)
    }
    else {
        return((blockB-blockA)*264)
    }
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(destination, start);
    if (distance < 400){
        return 0;
    }

    else if (distance >= 400 && distance <=2000) {
    return (distance - 400)*0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25
    }
    else if (distance > 2500){
        return 'cannot travel that far';
    }
}
