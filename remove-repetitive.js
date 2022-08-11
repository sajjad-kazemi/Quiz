export function removerRepetitive(string){
  let result = null;
  result = string[0]
  let checker = string[0];
  for(let i of string){
    if(i=== checker){
      continue;
    } else{
      checker = i;
      result += i;
    }
  }
  return result
}
export default removerRepetitive