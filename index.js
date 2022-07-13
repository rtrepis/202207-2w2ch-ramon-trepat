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

const strictalEcualV2 = function (a, b) {
  /*
  const canvioA = a;

  const canvioB = b;

  a = canvioA;

  b = canvioB;
*/
  if (Object.is(typeof a, "number") && Object.is(typeof b, "number")) {
    //    a = Math.round(a);
    //    b = Math.round(b);
    a = a / a;
    b = b / b;
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

console.log("--- strictalEcualV2 ---");

console.log("1 + 1 :" + strictalEcualV2(1, 1));
console.log("NaN + NaN :" + strictalEcualV2(NaN, NaN));
console.log("0 + -0 :" + strictalEcualV2(0, -0));
console.log("-0 + 0 :" + strictalEcualV2(-0, 0));
console.log("1 + '1' :" + strictalEcualV2(1, "1"));
console.log("true + false :" + strictalEcualV2(true, false));
console.log("false + false :" + strictalEcualV2(false, false));
console.log("Water + oil :" + strictalEcualV2("Water", "oil"));
