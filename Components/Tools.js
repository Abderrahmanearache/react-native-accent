import React, {Component, useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';


const Tools = (props) => {

    const [data, setData] = useState({
        pencilClick: props.pencilClick,
        ereaseClick: props.ereaseClick,
        tool: props.tool,
    });

    useEffect(() => {
        setData({
            ...data,
            pencilClick: props.pencilClick,
            ereaseClick: props.ereaseClick,
            tool: props.tool,
        });
        {
            console.log(data.tool);
        }
    }, [props]);

    return (
        <View style={styles.container}>

            <TouchableOpacity style={(data.tool != 'pencil') ? styles.pencil : styles.pencilChoiced}
                              onPress={data.pencilClick} active>
                <Image
                    style={styles.image}
                    resizeMode={'contain'}
                    source={require('../assets/images/pencil.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={(data.tool != 'erase') ? styles.pencil : styles.pencilChoiced}
                              onPress={data.ereaseClick}>
                <Image
                    style={styles.image}
                    resizeMode={'contain'}
                    source={require('../assets/images/eraser.png')}/>
            </TouchableOpacity>

        </View>
    );

};
const styles = StyleSheet.create({

    container: {flexDirection: 'column', margin: 10, flex: 1, justifyContent: 'space-between'},

    pencil: {
        flex: 2,
        width: 'auto', height: 'auto',
    },
    pencilChoiced: {
        flex: 2,
        width: 'auto', height: 'auto',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#c7b0b0',
        padding: 2,
    },
    image: {
        width: '100%', height: '100%',
    },
    pencilContainer: {flex: 2},


});

export default Tools;
