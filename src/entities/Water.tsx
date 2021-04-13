import React from 'react';
import Collider from '../@core/Collider';
import GameObject, { GameObjectProps } from '../@core/GameObject';
import Sprite from '../@core/Sprite';
import spriteData from '../spriteData';

export default function Water(props: GameObjectProps) {
    return (
        <GameObject {...props}>
            <Sprite {...spriteData.objects} state="water" />
            <Collider />
        </GameObject>
    );
}
