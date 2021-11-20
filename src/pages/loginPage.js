//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CommonButton, RenderTextBoxWithIcon } from '../components/commonComponents';
import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

// create a component

const LoginTopContainer = () => {
    return (
        <View style={styles.loginTopContainer}>
            <Text>{"LoginTopContainer"}</Text>
        </View>
    );
};

const LoginBottomContainer = () => {
    return (
        <View style={styles.loginBottomContainer}>
            <Text>{"LoginTopContainer"}</Text>
        </View>
    );
};

const LoginContainer = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.loginContainer}>
            <RenderTextBoxWithIcon
                image={require("../../assets/images/email.png")}
                placeholder="Registered Email id"
                value={email}
                callBack={(text) => {
                    setEmail(text)
                }}
                color={colors.white}
            />
            <RenderTextBoxWithIcon
                image={require("../../assets/images/password.png")}
                placeholder="Passeord"
                value={password}
                callBack={(text) => {
                    setPassword(text)
                }}
                color={colors.white}
            />
            <CommonButton label={"Login"}  callBack ={()=>{
                navigation.navigate("DashBoard")
            }} />
        </View>
    );
};

const LoginPage = () => {
    return (
        <View style={styles.container}>
            <LoginTopContainer />
            <LoginContainer />
            <LoginBottomContainer />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: colors.black,
    },


    loginTopContainer: {
        height: 200,
        backgroundColor: colors.themeColor,
        borderBottomLeftRadius: 50
    },
    loginBottomContainer: {
        height: 200,
        backgroundColor: colors.secondaryThemeColor,
        borderTopRightRadius: 50
    },
    loginContainer: {
        paddingHorizontal: 30
    }
});

//make this component available to the app
export default LoginPage;
