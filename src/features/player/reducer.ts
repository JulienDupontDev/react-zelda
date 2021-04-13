import { Reducer } from 'redux';
// import Player from 'src/entities/Player';
import { ActionType } from 'typesafe-actions';
import * as counters from './actions';
import { SET_EXP, SET_LIFE, SET_POSITION, ADD_ITEM } from './constants';
import { Player } from './models';

export type CountersAction = ActionType<typeof counters>;

// export interface PlayerState {
//     readonly player: Player;
// }

const initialState: Player = {
    exp: 1,
    life: 100,
    inventory: [],
    positionX: null,
    positionY: null,
};

const playerReducer: Reducer<Player> = (state = initialState, action) => {
    const { payload } = action;
    const { exp, life } = state;
    switch (action.type) {
        case SET_EXP:
            return { ...state, exp: payload > 0 ? exp + payload : exp - payload }; // action: { type: "INCREMENT"; }
        case SET_LIFE:
            return { ...state, life: payload > life ? life + payload : life - payload };
        case SET_POSITION:
            return { ...state, positionX: payload.x, positionY: payload.y };
        case ADD_ITEM:
            return { ...state, inventory: [...state.inventory, payload] };
        default:
            return state;
    }
};

export default playerReducer;
