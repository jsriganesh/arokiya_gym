//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CommonFooter, CommonHeader } from '../components/commonComponents';
import colors from '../utils/colors';

// create a component
const DashBoard = () => {
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <CommonHeader />
            </View>
            <CommonFooter/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
});

//make this component available to the app
export default DashBoard;
