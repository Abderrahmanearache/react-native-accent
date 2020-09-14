import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';


export default class Consign extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>

                <View style={styles.consignContainer}>

                    <View style={styles.consignText}>
                        <Text style={styles.consign}>{this.props.consign}</Text>
                    </View>

                    <View style={styles.speakerContainer}>
                        <TouchableOpacity>
                            <Image style={styles.speaker} resizeMode={'contain'}
                                   source={require('../assets/images/speaker.png')}/>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({

    container: {},
    title: {textAlign: 'center', backgroundColor: '#fcbe2a', fontSize: 16, padding: 5},

    oreil: {alignSelf: 'flex-end', width: 18, height: 18},
    consignContainer: {flexDirection: 'row', margin: 10},
    consignText: {flex: 1, alignContent: 'flex-start'},
    speakerContainer: {
        flex: 1,
        alignContent: 'flex-end',

    },
    speaker: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
    },
    consign: {textAlign: 'center', fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: 'bold'},

});

