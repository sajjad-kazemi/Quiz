export function isBalance(input){
  let result = null;
  let [parentheses,braces,brackets] = [[0,0],[0,0],[0,0]]
  for (let i of input){
    switch(i){
      case '(':
        parentheses[0]++
        break;
      case ')':
        parentheses[1]++
        break;
      case '{':
        braces[0]++
        break;
      case '}':
        braces[1]++
        break;
      case '[':
        brackets[0]++
        break;
      case ']':
        brackets[1]++
        break;
      default:
        break; 
    }
  }
  result = parentheses[0]===parentheses[1] && braces[0]===braces[1] && brackets[0]===brackets[1] ;
  return result
}
export default isBalance;