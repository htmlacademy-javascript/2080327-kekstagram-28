let compareLength = function(parametrString,maxLength) {
  
  if (parametrString.length <= maxLength) {
    return true
  }
  else {
    return false
  }
}
console.log(compareLength('проверяемая строка', 10));

function palindromeChecker(str) {
  str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
  const lastIndex = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[lastIndex - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindromeChecker('Лёша на клопа нашёл '));

function numberChecker(enterString) {
  let str = '' + enterString
  let res = str.replace(/\D/g, '');
  return res;
};

console.log(numberChecker(-1));

function fileName(enterString,minLength,addSymbol) {
  while (minLength > enterString.length) {
    if(minLength - enterString.length < addSymbol.length) {
      addSymbol = addSymbol.substring(0, minLength - enterString.length)

    }
    enterString = '' + addSymbol + enterString
  }
  return enterString
}

console.log(fileName('qwerty', 4, '0'))

