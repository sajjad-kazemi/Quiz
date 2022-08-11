export function getRepeatedInfo(number){
  let result = null;
  result = {};
  let amounts = {}
  let numList = number.toString().split('');
  for (let i of numList){
    if(amounts[+i]){
      amounts[+i] ++
    } else {
      amounts[+i] = 1
    }
  }
  for (let i in amounts){
    for(let k=0;k<amounts[i];k++){
      if(result[i]){
      for (let j=0;j<i;j++){
        result[i] += String(i)
      }
    } else{
      result[i] = ''
      for(let j=0;j<i;j++){
        result[i] += String(i)
      }
    } 
  }
  }
  return result
}
export default getRepeatedInfo