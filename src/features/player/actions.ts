/* eslint-disable */
import { action } from 'typesafe-actions';

import { SET_LIFE, SET_EXP, SET_POSITION, ADD_ITEM } from './constants';

/* SIMPLE API */

export const setLife = (amount: number) => action(SET_LIFE, amount);
export const setExp = (amount: number) => action(SET_EXP, amount);
export const setPosition = (position: object) => action(SET_POSITION, position);

export const addItem = (item: string) => action(ADD_ITEM, item);

/* ADVANCED API */

// More flexible allowing to create complex actions more easily
// use can use "action-creator" instance in place of "type constant"
// e.g. case getType(increment): return action.payload;
// This will allow to completely eliminate need for "constants" in your application, more info here:
// https://github.com/piotrwitek/typesafe-actions#constants

// import { createAction } from 'typesafe-actions';
// import { Todo } from '../todos/models';

// export const emptyAction = createAction(INCREMENT)<void>();
// export const payloadAction = createAction(ADD)<number>();
// export const payloadMetaAction = createAction(ADD)<number, string>();

// export const payloadCreatorAction = createAction('TOGGLE_TODO', (todo: Todo) => todo.id)<
//     string
// >();
