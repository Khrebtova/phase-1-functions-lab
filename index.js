let distanceInBlocks;
function distanceFromHqInBlocks(blockNum){
    if (blockNum < 42){
        distanceInBlocks = 42 - blockNum;
        return distanceInBlocks;
    }
    distanceInBlocks = blockNum - 42;
    return distanceInBlocks;
}

function distanceFromHqInFeet(blockNum){
    distanceFromHqInBlocks(blockNum);
    return distanceInBlocks*264;
}


let distaceInFeet;
function distanceTravelledInFeet(start, destination){
if (destination > start) {
    distaceInFeet = (destination - start)*264;
    return distaceInFeet;
}
distaceInFeet = (start - destination)*264;
return distaceInFeet;
}

let price;
function calculatesFarePrice(start, destination){
    distanceTravelledInFeet(start, destination);
    if (distaceInFeet <= 400){
        price = 0
        return price;
    }
    else if (distaceInFeet > 400 && distaceInFeet <= 2000){
        price = (distaceInFeet - 400)*0.02;
        return price;
    }
    else if (distaceInFeet > 2000 && distaceInFeet <= 2500){
        price = 25
        return price;
    }
    else if (distaceInFeet > 2500){
        return "cannot travel that far"
    }


}