import { combineReducers } from 'redux';
import pnjReducer from '../features/pnj/reducer';
import playerReducer from '../features/player/reducer';

const rootReducer = () =>
    combineReducers({
        player: playerReducer,
        pnjs: pnjReducer,
    });

export default rootReducer;
