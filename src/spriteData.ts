import { SpriteProps } from './@core/Sprite';

const spriteData: { [index: string]: SpriteProps } = {
    ui: {
        src: './assets/ui.png',
        sheet: {
            'self-select': [
                [4, 0],
                [5, 0],
            ],
            select: [[4, 0]],
            dot: [[1, 0]],
            solid: [[0, 1]],
        },
    },
    enemy: {
        src: './assets/armorEnemy.gif',
        frameWidth: 120,
        frameHeight: 130,
        frameTime: 600,
        sheet: {
            default: [[0, 3]],
            walkUp: [
                [7, 2],
                [8, 2],
            ],
            walkDown: [
                [1, 2],
                [2, 2],
            ],
            walkLeft: [
                [5, 2],
                [6, 2],
            ],
            walkRight: [
                [5, 2],
                [6, 2],
            ],
            action: [[5, 1]],
        },
    },
    player: {
        src: './assets/link.png',
        frameWidth: 120,
        frameHeight: 130,
        frameTime: 600,
        sheet: {
            default: [[0, 3]],
            walkUp: [
                [0, 1],
                [1, 1],
                [2, 1],
                [3, 1],
                [4, 1],
                [5, 1],
                [6, 1],
                [7, 1],
                [8, 1],
                [9, 1],
            ],
            walkDown: [
                [0, 3],
                [1, 3],
                [2, 3],
                [3, 3],
                [4, 3],
                [5, 3],
                [6, 3],
                [7, 3],
                [8, 3],
                [9, 3],
            ],
            walkLeft: [
                [4, 2],
                [5, 2],
            ],
            walkRight: [
                [5, 0],
                [6, 0],
            ],
            action: [[5, 1]],
        },
    },
    objects: {
        src: './assets/objects.png',
        frameWidth: 266,
        frameHeight: 260,
        sheet: {
            floor: [[1, 0]],
            wall: [[0, 0]],
            'chest-closed': [[0, 1]],
            'chest-open': [[1, 1]],
            'coffee-machine': [[0, 1]],
            'coffee-machine-empty': [[1, 1]],
            pizza: [[0, 1]],
            plant: [[2, 1]],
        },
    },
    footstep: {
        src: './assets/footstep.png',
        sheet: {
            default: [
                [0, 0],
                [2, 0],
            ],
        },
        opacity: 0.75,
        frameTime: 150,
    },
};

export default spriteData;
