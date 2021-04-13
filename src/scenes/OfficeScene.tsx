import React, { Fragment } from 'react';
import Collider from '../@core/Collider';
import GameObject from '../@core/GameObject';
import Interactable from '../@core/Interactable';
import ScenePortal from '../@core/ScenePortal';
import Sprite from '../@core/Sprite';
import TileMap, { TileMapResolver } from '../@core/TileMap';
import { mapDataString } from '../@core/utils/mapUtils';
import Chest from '../entities/Chest';
import Player from '../entities/Player';
import Water from '../entities/Water';
import spriteData from '../spriteData';
import Pnj from '../entities/Pnj';
import { connect, Provider } from 'react-redux';
import store from '../store';

const mapData = mapDataString(`
# # # # # # # # # # # # # # # # #
# · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · #
# · · · · · · · · · · · · · · · #
# · # # # # · · # # · # · · · W #
# · · · · · · · · · · · · · · · ·
# · · · # · · · # # # # · · # # #
# # # # # · · · # # · # · · W # #
# C C C # · · · W · · · · · · · #
# · · · · · · · · · · · · W · · #
# # # # # # # # # # # # # # # # #
`);

const resolveMapTile: TileMapResolver = (type, x, y) => {
    const key = `${x}-${y}`;
    const position = { x, y };

    const floor = (
        <GameObject key={key} {...position} layer="ground">
            <Sprite {...spriteData.objects} state="floor" />
        </GameObject>
    );

    switch (type) {
        case '·':
            return floor;
        case '#':
            return (
                <GameObject key={key} {...position} layer="wall">
                    <Collider />
                    <Sprite {...spriteData.objects} state="wall" />
                </GameObject>
            );
        case 'W':
            return (
                <Fragment key={key}>
                    {floor}
                    <Water {...position} layer="wall" />
                </Fragment>
            );
        case 'C':
            return (
                <Provider store={store}>
                    <Fragment key={key}>
                        {floor}
                        <Chest {...position} />
                    </Fragment>
                </Provider>
            );
        default:
            return null;
    }
};

export default function OfficeScene() {
    return (
        <>
            <GameObject name="map">
                <ambientLight />
                <TileMap data={mapData} resolver={resolveMapTile} definesMapSize />
            </GameObject>
            <GameObject x={15} y={5}>
                <Collider />
                <Interactable />
                <ScenePortal name="exit" enterDirection={[-1, 0]} target="other/start" />
            </GameObject>
            <Player x={5} y={2} />
            <Pnj x={6} y={2} sheet="player" />
        </>
    );
}
