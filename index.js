let t = 1;
let f = 2;
let g = 3;
let a = 4;

let b = a*a; 
let c = t*t*t;
let d = b + c;
let p = d*d;
let h = 4*p;
let j = g + f;
let k = 3*j;
let m = h/k;
let n = c/k;
let e = n - m;

console.log(e);

function b(a){
  let b = a*a;
  return b;
}
ba = b(a);

function c(t){
  let c = t*t*t;
  return c;
}
ca = c(t);

function d(ba,ca){
  let d = ba + ca;
  return d;
}
da = d(ba,ca);

function p(da){
  let p = da*da;
  return p;
}
pa = p(da);

function h(pa){
  let h = 4*pa;
  return h;
}
ha = h(pa);

function j(g,f){
  let j = g + f;
  return j;
}
ja = j(g,f);

function k(ja){
  let k = 3*ja;
  return k;
}
ka = k(ja);

function m(ha,ka){
  let m = ha/ka;
  return m;
}
ma = m(ha,ka);

function n(ca,ka){
  let n = ca/ka;
  return n;
}
na = n(ca,ka);

function e(na,ma){
  let e = na - ma;
  return e;
}
result = e(na,ma);

console.log(result);
