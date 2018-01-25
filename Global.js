/*
* Global value
*
*/

let Integer = {};
let Double = {};
let Float = {};

/**
 * A constant holding the minimum value  can
 * have, -2^31.
 */
Integer.MIN_VALUE = Math.pow( -2.0, 31 );
Integer.MIN_VALUE = Math.pow( -2.0, 31 );
Float.MIN_VALUE = Math.pow( -2.0, 31 );

/**
 * A constant holding the maximum value an {@code int} can
 * have, (2^31)-1.
 */
Integer.MAX_VALUE = Math.pow( 2.0, 31 ) - 1;
Double.MAX_VALUE = Math.pow( 2.0, 31 ) - 1;
Float.MAX_VALUE = Math.pow( 2.0, 31 ) - 1;

Double.MIN_NORMAL = Math.pow( 2.0, -1022 ); // 2.2250738585072014E-308

let MaxInt = Integer.MAX_VALUE;
let MaxDouble = Double.MAX_VALUE;
let MinDouble = Double.MIN_VALUE;
let MaxFloat = Float.MAX_VALUE;
let MinFloat = Float.MIN_VALUE;
let Pi = Math.PI;
let TwoPi = Math.PI * 2;
let HalfPi = Math.PI / 2;
let QuarterPi = Math.PI / 4;
let EpsilonDouble = Double.MIN_NORMAL;

let ttos = function( s ){
    return String( s );
};

let span_type = {
    
    plane_backside: 0, plane_front: 1, on_plane: 2
};

//----------- Globals

window.receiverRef = new Object();

window.SoccerTeamColor = {
    blue: "blue",
    red: "red"
};

window.PlayerBaseRole = {
    player_role: {
        goal_keeper: "goal_keeper", 
        attacker: "attacker", 
        defender: "defender"
    }
};

window.m_iNextValidID = 0;