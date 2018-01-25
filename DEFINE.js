/**
 * This class substitute C++ preprocessor. 
 * 
 * 
 */
   
 let DEBUG = true;
 let SHOW_TEAM_STATE = true;
 let SHOW_SUPPORTING_PLAYERS_TARGET = true;
 let SHOW_MESSAGING_INFO = true;
 let DEBUG_TEAM_STATES = true;
 let GOALY_STATE_INFO_ON = true;
 let PLAYER_STATE_INFO_ON = true;
 
 var def = function( D ) {
     return D;
 };
 
 var define = function( D ) {
     D = true;
     return D;
 };
 
 var undef = function( D ) {
     D = false;
     return D;
 };