//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import colors from '../utils/colors';
import FontFamily from '../utils/fontFamily';
// import theme from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';

// create a component

export const TextBox = ({ changeText, index, data }) => {
    return (
        <View>
            <TextInput value={data.answer}
                maxLength={data.minLength}
                keyboardType={data.dataType == "Number" ? "number-pad" : "default"}
                onChangeText={(text) => {
                    changeText(text, index)
                }}
                style={styles.textBoxStyle} />
        </View>
    );
};



// define your styles
const styles = StyleSheet.create({
    questionFontStyle: {
        color: colors.questionFontColor,
        fontSize: 24,
        fontFamily: FontFamily.fontBold

    },
    questionMessageFontStyle: {
        color: colors.messageColor,
        fontSize: 18,
        fontFamily: FontFamily.fontRegular
    },

    textBoxStyle: {
        width: "100%",
        height: 60,
        borderBottomWidth: 2,
        borderBottomColor: colors.textBoXFontColor,
        color: colors.textBoXFontColor,
        fontSize: 20,
        paddingHorizontal: 10

    },
    componentContainer: {
        borderWidth: 2, height: 55, width: "100%", borderColor: colors.themeColor, borderRadius: 6, flexDirection: "row", alignItems: "center", marginVertical: 8
    },
    imageBackground: {
        backgroundColor: colors.themeColor, marginHorizontal: 10, borderRadius: 50, marginVertical: 5
    },
    image: { height: 45, width: 45, tintColor: colors.white },
    newTextBoxStyle: {
        width: "100%",
        // height: 45,
        fontSize: 16,
        color: colors.themeColor,
        // borderBottomWidth: 2,
        // borderBottomColor: colors.textBoXFontColor,
        // color: colors.textBoXFontColor,
        paddingHorizontal: 10,
    },
    buttonStyle: {
        backgroundColor: colors.themeColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        // alignSelf: "center",
        alignItems: "center",
        marginTop: 20,
        width: "100%"
        // aliginContent:"flex-start",
        // alignSelf:"flex-start"
    },
    buttonTextStyle: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold",
    },

    headerContainer: {
        height: 80,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: colors.themeColor
    },
    headerLogoStyle:{
        height:80,width:80
    },
    footerContainer:{
        height: 80,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: colors.themeColor
    }
});


export const CommonButton = ({ label, callBack }) => {
    return (
        <LinearGradient colors={[colors.themeColor, colors.secondaryThemeColor]} style={styles.buttonStyle}>

            <TouchableOpacity onPress={() => {
                callBack()
            }}>
                <Text style={styles.buttonTextStyle}>{label}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}


export const RenderTextBoxWithIcon = ({ image, placeholder, value, callBack, color }) => {
    return (
        <View style={[styles.componentContainer, color ? { borderColor: color } : {}]}>
            <View style={[styles.imageBackground, color ? { backgroundColor: color } : {}]}>
                <Image source={image} style={[styles.image, color ? { tintColor: colors.black } : {}]} />
            </View>
            <TextInput
                value={value}
                onChangeText={(text) => {
                    callBack(text)
                }} placeholderTextColor={color ? color : colors.themeColor} style={[styles.newTextBoxStyle, color ? { color: color } : {}]} placeholder={placeholder} />
        </View>
    )
}

export const CommonHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Image source={require("../../assets/images/logo.png")} style={styles.headerLogoStyle}/>
        </View>
    )
}
export const CommonFooter = () => {
    return (
        <View style={styles.footerContainer}>
            {/* <Image source={require("../../assets/images/logo.png")} style={styles.headerLogoStyle}/> */}
        </View>
    )
}