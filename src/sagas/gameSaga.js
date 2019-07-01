import {take, put} from "redux-saga/es/effects";

// const setItemAfterXseconds = seconds =>
//     new Promise(resolve => {
//         setTimeout(() => resolve(`after ${seconds} secs !`), seconds);
//     });

function* gameSaga() {
    while(true)
    {
        yield take("GAME_START_REQUESTED");
        yield put({ type: "GAME_START" });
        yield take("GAME_STOP_REQUESTED");
        yield put({ type: "GAME_STOP" });
    }
}

export default gameSaga;