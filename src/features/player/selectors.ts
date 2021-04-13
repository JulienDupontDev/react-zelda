import { Player } from './models';

export const getPosition = (state: Player) => {
    return { x: state.positionX, y: state.positionY };
};

export const getLife = (state: Player) => state.life;
export const getExp = (state: Player) => state.exp;
