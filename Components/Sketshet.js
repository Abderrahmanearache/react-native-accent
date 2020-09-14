import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import SketchDraw from 'react-native-sketch-draw';

const Sketshet = (props) => {

    const [data, setData] = useState({
        toolSelected: props.toolSelected,
        source: props.source,
        color: props.color,
    });

    useEffect(() => {
        setData({
            ...data,
            color: props.color,
            toolSelected: props.toolSelected,
            source: props.source,
        });
    }, [props]);

    return (
        <View style={styles.container}>


            <View style={styles.content}>
                <Image style={styles.background}
                       resizeMode={'contain'}
                       source={data.source}
                />
            </View>
            <SketchDraw style={{flex: 1, backgroundColor: 'white'}}
                        selectedTool={data.toolSelected}
                        toolColor={data.color}
                        backgroundColor="#00000000"
                        strokeWidth={55}/>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1},
    content: {position: 'absolute', width: '100%', height: '100%'},
    background: {width: '100%', height: '100%'},

});
export default Sketshet;
