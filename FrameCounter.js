/**
 * FrameCounter.js
 */

class FrameCounter {

    //copy ctor and assignment should be private
    constructor( c ) {
        this.m_lCount = 0;
        this.m_iFramesElapsed = 0;
    };

    clone() {
        throw new Error( "Clone FrameCounter not allowed" );
    };

    Instance() {
        return TickCounter;
    };

    Update() {
        ++this.m_lCount;
        ++this.m_iFramesElapsed;
    };

    GetCurrentFrame() {
        return this.m_lCount;
    };

    Reset() {
        this.m_lCount = 0;
    };

    Start() {
        this.m_iFramesElapsed = 0;
    };

    FramesElapsedSinceStartCalled() {
        return this.m_iFramesElapsed;
    };
};