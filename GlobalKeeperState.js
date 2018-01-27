/**
 * GlobalKeeperState.js
 */

class GlobalKeeperState {

    constructor(){ };

    //this is a singleton
    static Instance() {
        return new GlobalKeeperState();
    };


    Enter( keeper ) {
    };

    Execute( keeper ) {
    };

    Exit( keeper ) {
    };

    OnMessage( keeper, telegram ) {
        switch ( telegram.Msg ) {
            case window.MessageTypes.Msg_GoHome:
                keeper.SetDefaultHomeRegion();
                keeper.GetFSM().ChangeState( ReturnHome.Instance() );
            break;

            case window.MessageTypes.Msg_ReceiveBall:
                keeper.GetFSM().ChangeState( InterceptBall.Instance() );
            break;

        };//end switch

        return false;
    };
};