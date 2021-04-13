import { Reducer } from 'redux';
// import Player from 'src/entities/Player';
import { ActionType } from 'typesafe-actions';
import * as counters from './actions';
import { SET_LIFE } from './constants';
import { Pnj } from './models';

export type CountersAction = ActionType<typeof counters>;

export interface PnjState {
    readonly pnjs: Pnj[];
}

const initialState: PnjState = {
    pnjs: [
        {
            id: 0,
            life: 100,
        },
    ],
};

const pnjReducer: Reducer<PnjState> = (state = initialState, action) => {
    // const { payload } = action;
    // const foundPnj = state.pnjs.filter(pnj => pnj.id === payload.id)[0];
    // const { life } = foundPnj;
    switch (action.type) {
        // case SET_LIFE:
        //     return { ...state, exp: payload > life ? life + payload : life - payload };
        default:
            return state;
    }
};

export default pnjReducer;
