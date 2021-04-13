import React from 'react';
import Attackable from '../@core/Attackable';
import Collider from '../@core/Collider';
import GameObject, { GameObjectProps } from '../@core/GameObject';
import Interactable from '../@core/Interactable';
import Moveable from '../@core/Moveable';
import Sprite from '../@core/Sprite';
import CameraFollowScript from '../components/CameraFollowScript';
import CharacterScript from '../components/CharacterScript';
import PnjScript from '../components/PnjScript';
import spriteData from '../spriteData';
import store from '../store';
import { Provider } from 'react-redux';

export default function Pnj(props: GameObjectProps) {
    return (
        <GameObject name="pnj1" displayName="Pnj" layer="character" {...props}>
            <Moveable />
            <Attackable />
            <Collider />
            <Provider store={store}>
                <CharacterScript>
                    {props.sheet ? (
                        <Sprite {...spriteData[props.sheet]} />
                    ) : (
                        <Sprite {...spriteData.player} />
                    )}
                </CharacterScript>
            </Provider>

            <PnjScript />
        </GameObject>
    );
}
