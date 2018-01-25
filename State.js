/**
 * abstract base class to define an interface for a state
 * 
 * State.js
 */

class State  {


  finalize(){ super.finalize(); }

  //this will execute when the state is entered
  Enter( e ){};

  //this is the state's normal update function
  Execute( e ){};

  //this will execute when the state is exited. (My word, isn't
  //life full of surprises... ;o))
  Exit( e ){};
  
  //this executes if the agent receives a message from the 
  //message dispatcher
  OnMessage( e,  t ){};

};
