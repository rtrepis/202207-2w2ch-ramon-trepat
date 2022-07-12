console.log("hola");

const strictEcual = function (a, b) {
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  }

  if (Object.is(a, 0) && Object.is(b, -0)) {
    return true;
  }

  if (Object.is(a, -0) && Object.is(b, 0)) {
    return true;
  }

  return Object.is(a, b);
};

console.log("1 + 1 :" + strictEcual(1, 1));
console.log("NaN + NaN :" + strictEcual(NaN, NaN));
console.log("0 + -0 :" + strictEcual(0, -0));
console.log("-0 + 0 :" + strictEcual(-0, 0));
console.log("1 + '1' :" + strictEcual(1, "1"));
console.log("true + false :" + strictEcual(true, false));
console.log("false + false :" + strictEcual(false, false));
console.log("Water + oil :" + strictEcual("Water", "oil"));
