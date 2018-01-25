/**
 * GlobalKeeperState.js
 */

class GlobalKeeperState extends State {

    constructor(){
        super();
    };

    //this is a singleton
    static Instance() {
        return new GlobalKeeperState();
    };


    static Enter( keeper ) {
    };

    Execute( keeper ) {
    };

    Exit( keeper ) {
    };

    OnMessage( keeper, telegram ) {
        switch ( telegram.Msg ) {
            case Msg_GoHome:
                keeper.SetDefaultHomeRegion();
                keeper.GetFSM().ChangeState( ReturnHome.Instance() );
            break;

            case Msg_ReceiveBall:
                keeper.GetFSM().ChangeState( InterceptBall.Instance() );
            break;

        };//end switch

        return false;
    };
};