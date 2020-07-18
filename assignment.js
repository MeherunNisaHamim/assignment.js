function feetToMile (feet) {
    if (feet<0)
    {
      return  'Distance can not be negative';
    }
    else{
    var feet = feet / 5280;
    return feet;
}
}


function woodCalculator (chair, table, bed){
    if (chair<0 || table<0 || bed<0)
    {
        return  'Chair, Table or Bed number can not be negative';
    }
    else
    {
    var chairWoodCount = chair*1;
    var tableWoodCount = table*3;
    var bedWoodCount = bed*5;
    var totalWoodCount = chairWoodCount + tableWoodCount + bedWoodCount;
    return totalWoodCount;
}
}


function brickCalculator (floor)
{
    if(floor<0)
    {
        return 'Input Can not be negative number';
    }
    else
    {
        var totalFeet =0;
        if(floor<=10)
        {
            totalFeet = floor*15;
        }
        else if(floor<=20 && floor>10)
        {
            var anotherFloor = floor - 10;
            totalFeet = 10*15 + (anotherFloor * 12);
        }
        else if (floor>20)
        {
            var anotherFloor1=floor - 10;
           var anotherFloor2 = anotherFloor1-10;
           var anotherFloor3 = anotherFloor1-anotherFloor2;
            totalFeet = (10*15) + (anotherFloor3*12) +(anotherFloor2*10);
        }
        var totalBrick = totalFeet * 1000;
        return totalBrick;

    }
}


function tinyFriend(nameList) {
    var friendNameList = [];
    for (var i = 0; i < nameList.length; i++) {
        if (nameList[i] != ' ') {
            friendNameList.push(nameList[i])
        }
    }
    var nameCharacterList = [];
    for (var i = 0; i < friendNameList.length; i++) {
        var count = 0;
        var friendName = friendNameList[i];
        for (var j = 0; j < friendName.length; j++) {
            if (friendName[j] != " ") {
                count++;
            }
        }
        nameCharacterList.push(count);
    }
    var minCharacter = Math.min(...nameCharacterList);
    var tinyNameIndex = nameCharacterList.indexOf(minCharacter);
    var tinyName = friendNameList[tinyNameIndex];
    return tinyName;
}