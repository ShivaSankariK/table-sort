const inputArray = [
    3.50,
    3.65,
    4.00,
    3.85,
    4.00,
    3.65];
const sortedInputArray = inputArray.sort((a,b) => b -a);
const storeObj = inputArray.map((item, index) => {
  return {
      id: index,
      value: item
  }
});
console.log(storeObj);
console.log(sortedInputArray);
const resultArr = [{
       rank: 1,
       value: sortedInputArray[0] 
}];
sortedInputArray.map((item, index) => {
    if(index > 0){
  if(item !== sortedInputArray[index-1]){
    resultArr.push({
        rank: resultArr[index - 1].rank + 1,
        value: item
    });
    } else {
        resultArr.push({
            rank: resultArr[index - 1].rank,
            value: item
        });
    }
}
return resultArr; 
});

console.log(resultArr);


const nestedArr = [1,[2,3],4,[5,[6,7]],8,9];
const flattenFunc = (arr, resultArr = []) => {
 arr.map((item) => {
    if(Array.isArray(item)){
        flattenFunc(item, resultArr);
    } else {
        resultArr.push(item);
    }
 });
 return resultArr;
};


const str = "the sky is blue";
const strArr = str.split(" ");
var resArr = "";
for(var i=strArr.length-1; i>=0; i--){
    resArr = `${resArr} ${strArr[i]}`;
}
//console.log(resArr);
