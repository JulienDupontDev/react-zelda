import React from 'react';
import Collider from '../@core/Collider';
import GameObject, { GameObjectProps } from '../@core/GameObject';
import Interactable from '../@core/Interactable';
import Moveable from '../@core/Moveable';
import Sprite from '../@core/Sprite';
import CameraFollowScript from '../components/CameraFollowScript';
import CharacterScript from '../components/CharacterScript';
import PlayerScript from '../components/PlayerScript';
import spriteData from '../spriteData';
import { Provider } from 'react-redux';
import store from '../store';
import Attackable from '../@core/Attackable';

export default function Player(props: GameObjectProps) {
    return (
        <Provider store={store}>
            <GameObject name="player" displayName="Player" layer="character" {...props}>
                <Moveable />
                <Interactable />
                <Attackable />

                <Collider />
                <CharacterScript>
                    <Sprite {...spriteData.player} />
                </CharacterScript>
                <CameraFollowScript />
                <PlayerScript />
            </GameObject>
        </Provider>
    );
}
