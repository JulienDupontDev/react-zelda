import React, { useRef, useState } from 'react';
import Collider from '../@core/Collider';
import GameObject, { GameObjectProps } from '../@core/GameObject';
import Interactable, { InteractionEvent } from '../@core/Interactable';
import { useSound } from '../@core/Sound';
import Sprite, { SpriteRef } from '../@core/Sprite';
import useGameObject from '../@core/useGameObject';
import useGameObjectEvent from '../@core/useGameObjectEvent';
import soundData from '../soundData';
import spriteData from '../spriteData';
import { Dispatch } from 'redux';
import { playerActions, playerSelectors } from '../features/player';
import { connect, Provider } from 'react-redux';
import store from '../store';

// interface Props {
//     addItem: (position) => void;
//     props:
// }

function ChestScript({ addItem, setExp }) {
    const { getComponent } = useGameObject();
    const fillState = useRef(true);
    const playSfx = useSound(soundData.openChest);
    const [state, setState] = useState(['spear', 'book']);
    useGameObjectEvent<InteractionEvent>('interaction', () => {
        if (fillState.current) {
            fillState.current = false;
            getComponent<SpriteRef>('Sprite').setState('chest-open');
            setExp(1);
            if (state.length !== 0) {
                state.forEach(item => addItem(item));
                setState([]);
            }
            playSfx();
        }
    });

    return null;
}

const ChestFunc = (props: GameObjectProps) => {
    console.log(props);
    return (
        <Provider store={store}>
            <GameObject {...props}>
                <Sprite {...spriteData.objects} state="chest-closed" />
                <Collider />
                <Interactable />
                <ChestScript
                    addItem={(props as any).addItem}
                    setExp={(props as any).setExp}
                />
            </GameObject>
        </Provider>
    );
};

const dispatchProps = {
    addItem: playerActions.addItem,
    setExp: playerActions.setExp,
};

export default connect(null, dispatchProps)(ChestFunc);
