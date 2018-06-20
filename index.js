// Code your solution in this file!
function distanceFromHqInBlocks(blockNum) {
  let result
  if (blockNum > 42) {
    result = blockNum - 42
  } else {
    result = 42 - blockNum
  }
  return result
}

function distanceFromHqInFeet(blockNum) {
  let result
  result = distanceFromHqInBlocks(blockNum) * 264
  return result
}

function distanceTravelledInFeet(startBlock,endBlock){
  let result
  if (startBlock < endBlock) {
    result = (endBlock-startBlock) * 264
  } else {
    result = (startBlock-endBlock) * 264
  }
  return result
}

function calculatesFarePrice(startBlock,endBlock) {
  let result
  let feet = distanceTravelledInFeet(startBlock,endBlock)
  switch (feet){
    case (feet < 400):
    result = 0;
  }

  return result
}
