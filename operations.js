export function operations(ops){
  let result = null;
  let operationList = ops.split(' ');
  let resultList = [];
  operationList.forEach((item)=>{
    switch(item){
      case(''):
        break;
      case('R'):
        resultList.pop();
        break;
      case('D'):
        resultList.push(resultList[resultList.length - 1]*2);
        break;
      case('+'):
        resultList.push((resultList[resultList.length -1])+(resultList[resultList.length -2]))
        break;
      default:
        resultList.push(+item);
    }
  })
  resultList.forEach(item=>{
    result+= item
  })
  return result;
}
export default operations