const comparesLength = (parametrString,maxLength) => parametrString.length <= maxLength
comparesLength('проверяемая строка', 20);

const palindromeChecker = (str) => {
  const text = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
  const lastIndex = text.length - 1;
  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[lastIndex - i]) {
      return false;
    }
  }
  return true;
}
palindromeChecker('bkbkjbkjbk');

const exportNumber = (enterString) => {
  const str = `${ enterString }`;
  const res = str.replace(/\D/g, '');
  return res;
}
exportNumber('34');

const padStart = (enterString, minLength, addSymbol) => {
  while (minLength > enterString.length) {
    if(minLength - enterString.length < addSymbol.length) {
      addSymbol = addSymbol.substring(0, minLength - enterString.length);
    }
    enterString = `${ addSymbol }${ enterString }`;
  }
  return enterString;
}
padStart('dgdhfhf');
