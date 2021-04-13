import React, { useEffect, useState, useCallback } from 'react';
import { Position } from '../@core/GameObject';
import { InteractableRef } from '../@core/Interactable';
import { MoveableRef } from '../@core/Moveable';
import useCollisionTest from '../@core/useCollisionTest';
import useGameLoop from '../@core/useGameLoop';
import useGameObject from '../@core/useGameObject';
import useKeyPress from '../@core/useKeyPress';
import usePathfinding from '../@core/usePathfinding';
import tileUtils from '../@core/utils/tileUtils';
import PnjPathOverlay from './PnjPathOverlay';

export default function PnjScript() {
    const { getComponent, transform } = useGameObject();
    const testCollision = useCollisionTest();
    const findPath = usePathfinding();
    const [path, setPath] = useState<Position[]>([]);
    const [pathOverlayEnabled, setPathOverlayEnabled] = useState(true);

    // key controls
    let leftKey = false;
    let rightKey = false;
    let upKey = false;
    let downKey = false;

    setInterval(() => {
        leftKey = !leftKey;
        rightKey = leftKey;
        upKey = !!downKey;
        downKey = !upKey;
    }, 2000);

    useGameLoop(() => {
        const direction = {
            x: -Number(leftKey) + Number(rightKey),
            y: Number(upKey) - Number(downKey),
        };
        const nextPosition = tileUtils(transform).add(direction);
        // is same position?
        if (tileUtils(nextPosition).equals(transform)) return;

        // is already moving?
        if (!getComponent<MoveableRef>('Moveable').canMove()) return;

        // will cut corner?
        const horizontal = { ...transform, x: nextPosition.x };
        const vertical = { ...transform, y: nextPosition.y };
        const canCross =
            direction.x !== 0 && direction.y !== 0
                ? // test diagonal movement
                  testCollision(horizontal) && testCollision(vertical)
                : true;

        if (canCross) {
            setPath([nextPosition]);
            setPathOverlayEnabled(false);
        }
    });

    // walk the path
    useEffect(() => {
        if (!path.length) return;
        const [nextPosition] = path;

        (async () => {
            const anyAction =
                (await getComponent<MoveableRef>('Moveable')?.move(nextPosition)) ||
                (path.length === 1 && // try interaction on last step of path
                    (await getComponent<InteractableRef>('Interactable')?.interact(
                        nextPosition
                    )));

            if (anyAction) {
                // proceed with next step in path
                setPath(current => current.slice(1));
            }
        })();
    }, [path, getComponent]);

    return <PnjPathOverlay path={path} pathVisible={false} />;
}
