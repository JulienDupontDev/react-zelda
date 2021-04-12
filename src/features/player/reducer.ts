import { Reducer } from 'redux';
// import Player from 'src/entities/Player';
import { ActionType } from 'typesafe-actions';
import * as counters from './actions';
import { SET_EXP, SET_LIFE } from './constants';
import { Player } from './models';

export type CountersAction = ActionType<typeof counters>;

export interface PlayerState {
    readonly player: Player[];
}

const initialState: PlayerState = {
    player: [
        {
            exp: 1,
            life: 100,
            inventory: [],
            positionX: null,
            positionY: null,
        },
    ],
};

const playerReducer: Reducer<PlayerState> = (state = initialState, action) => {
    const { payload } = action;
    const { exp, life } = state.player[0];
    switch (action.type) {
        case SET_EXP:
            return { ...state, exp: exp + action.payload }; // action: { type: "INCREMENT"; }

        case SET_LIFE:
            return { ...state, exp: payload > exp ? exp + payload : exp - payload };
        default:
            return state;
    }
};

export default playerReducer;
