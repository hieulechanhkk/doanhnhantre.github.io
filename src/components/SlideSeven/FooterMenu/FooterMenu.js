import React from 'react';
import {View,Text,StyleSheet,Image} from "react-native"

import IconF5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import ButtonAddFooter from './../../../../assess/buttonaddfooter.png'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
function FooterMenu(props) {
    const iconsource = './../../../../assess/buttonaddfooter.png'
    return (
        <View style = {styles.container}>
            <IconF5 name = "user-alt" size = {35} color = "black"/>
            <IconMCI name = "account-group"  size = {50} color= "black"/>
            {/* <EntypoIcon style = {styles.sp_btn} name = "circle-with-plus" size = {55} color = "black"/> */}
            <Image style = {styles.iconlarge} source = {require(iconsource)} />
            <Icon name = "calendar" size = {40} color = "black"></Icon>
            <Ionicons name = "alarm-outline" size = {49} color = "black"></Ionicons>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ECB7F0",
        width:"100%",
        height:"8%", 
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },
    sp_btn: {

    },
    iconlarge: {
        width: 80,
        height:80,
        marginBottom:30
    }
})
export default FooterMenu;