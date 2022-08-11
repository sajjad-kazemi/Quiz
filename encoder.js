export function encoder({ inputString, repeatCount }) {
  const Alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = null;
  result = "";
  let firstStep = inputString.split("");
  firstStep.unshift(firstStep.pop());
  let repeat = 0;
  let value = "";
  let secondStep = [...firstStep];
  while (repeat < repeatCount) {
    value = ''
    if(result){
      secondStep = result.split('')
    }
    secondStep.map((letter) => {
      let currentPlace = Alphabet.indexOf(letter) + 1;
      if (currentPlace >= Alphabet.length) {
        currentPlace = 0;
      }
      value += Alphabet[currentPlace];
    });
    result = value;
    repeat++;
  }
  return result;
}
export default encoder;
