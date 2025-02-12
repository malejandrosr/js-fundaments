const returnTrue = () => {
    console.log('True');
    return true;
}

const returnFalse = () => {
    console.log('False');
    return false;
}

console.warn('Not o la negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!returnFalse()); // true

console.warn('And');
console.log(true && true); // true
console.log(true && !false); // true

console.log('==========');
console.log(returnFalse() && returnTrue()); // false
console.log(returnTrue() && returnFalse()); // true

console.log('===== && =====');
returnTrue() && returnFalse();
console.log('4 condiciones', true && true && true && false); // false

console.warn('Or');
console.log(true || false);
console.log(false || false);

console.log(returnTrue() || returnFalse()); // true
console.log('4 condiciones', true || true || true || false); // true

console.warn('Asignaciones');
const iUndefined = undefined;
const iNull = null;
const iFalse = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && iFalse && true;
const a3 = iFalse || 'Ya no soy falso';
const a4 = iFalse || iUndefined || iNull || 'Ya no soy falso de nuevo' || true;
const a5 = iFalse || iUndefined || returnTrue() || 'Ya no soy falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5, });

if (returnFalse() && returnTrue() && (true || false || true)) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}