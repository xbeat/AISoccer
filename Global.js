/*
* Global value
*
*/

let MaxInt = Number.MAX_SAFE_INTEGER;
let MaxDouble = Number.MAX_VALUE;
let MinDouble = Number.MIN_VALUE;
let MaxFloat = Number.MAX_VALUE;
let MinFloat = Number.MIN_VALUE;
let Pi = Math.PI;
let TwoPi = Math.PI * 2;
let HalfPi = Math.PI / 2;
let QuarterPi = Math.PI / 4;
let EpsilonDouble = Number.EPSILON;

let ttos = function( s ){
    return String( s );
};

//----------- Globals
window.receiverRef = new Object();
window.m_iNextValidID = 0;
window.AllPlayers = new Array();