import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from './src/pages/dashBoard';
import LoginPage from './src/pages/loginPage';
// import RegistrationPage from './src/pages/registration';
import OverLaySpinner from './src/components/overLaySpinner';
import { connect } from 'react-redux';
import { getData, storageKeys } from "./src/components/asyncStorage"
// import EmailIdScreen from "./src/pages/emailScreen";
// import PasswordScreen from "./src/pages/password";

const Stack = createNativeStackNavigator();



// const HomeNavigation = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Home"}>
//             <Stack.Screen name={"Home"} component={Home} />
//         </Stack.Navigator>
//     )
// }

const LoginNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"LoginPage"}>
            <Stack.Screen name={"LoginPage"} component={LoginPage} />
            <Stack.Screen name={"DashBoard"} component={DashBoard} />
        </Stack.Navigator>
    )
}


const RootNavigation = (props) => {

    console.log("================" + JSON.stringify(props.accessToken))
    return (
        <NavigationContainer>
            {/* {
                props.accessToken ?
                    <HomeNavigation />
                    : */}
                    <LoginNavigation />
            {/* } */}

            <OverLaySpinner visible={props.spinnerFlag} />
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
    spinnerFlag: state.spinnerReducer.spinnerFlag,
});

export default connect(mapStateToProps)(RootNavigation);