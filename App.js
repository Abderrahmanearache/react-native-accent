import React, {useState} from 'react';
import {View} from 'react-native';
import SketchDraw from 'react-native-sketch-draw';
import Consign from './Components/Consign';
import Tools from './Components/Tools';
import Sketshet from './Components/Sketshet';
import images from './assets/images';


const SketchDrawConstants = SketchDraw.constants;

const tools = {};

tools[SketchDrawConstants.toolType.pen.id] = {
    id: SketchDrawConstants.toolType.pen.id,
    name: SketchDrawConstants.toolType.pen.name,
    nextId: SketchDrawConstants.toolType.eraser.id,
};
tools[SketchDrawConstants.toolType.eraser.id] = {
    id: SketchDrawConstants.toolType.eraser.id,
    name: SketchDrawConstants.toolType.eraser.name,
    nextId: SketchDrawConstants.toolType.pen.id,
};

const App = () => {

    const [data, setData] = useState({
        color: '#000000',
        toolSelected: SketchDrawConstants.toolType.pen.id,
        tool: 'pencil',
    });


    let pickPencil = (e) => {
        setData({
            color: '#000000',
            toolSelected: SketchDrawConstants.toolType.pen.id,
            tool: 'pencil',
        });
    };

    let pickErease = (e) => {
        setData({
            color: '#000000',
            toolSelected: SketchDrawConstants.toolType.eraser.id,
            tool: 'erase',
        });

    };

    return (
        <View style={{flex: 1, flexDirection: 'column'}}>

            {/*header*/}
            <Consign title="Orthographe" consign="souligner ou il y a un (J)"/>

            <View style={{
                flexDirection: 'row', flex: 1,
            }}>
                <View style={{flex: 15}}>


                    <Sketshet
                        toolSelected={data.toolSelected}
                        color={data.color}
                        source={images.exemple}
                    />
                </View>
                <View style={{flex: 3}}>
                    <Tools
                        tool={data.tool}
                        pencilClick={pickPencil.bind(this)}
                        ereaseClick={pickErease.bind(this)}/>
                </View>

            </View>


        </View>
    );

};


export default App;
