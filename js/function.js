function comparesLength (parametrString,maxLength) {
  if (parametrString.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
comparesLength('проверяемая строка', 20);

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
palindromeChecker('bkbkjbkjbk');

function numberChecker(enterString) {
  const str = `${ enterString}`;
  const res = str.replace(/\D/g, '');
  return res;
}
numberChecker('34');

function fileName(enterString,minLength,addSymbol) {
  while (minLength > enterString.length) {
    if(minLength - enterString.length < addSymbol.length) {
      addSymbol = addSymbol.substring(0, minLength - enterString.length);

    }
    enterString = `${ addSymbol }${enterString}`;
  }
  return enterString;
}
fileName('dgdhfhf');
