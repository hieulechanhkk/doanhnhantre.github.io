
import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Linicons from 'react-native-vector-icons/Entypo'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import AntDesginIcon from 'react-native-vector-icons/AntDesign'
function Header(props) {
    return (
        <View style={styles.container} >
            {/* <View style = {styles.btn_menu}></View> */}
            <AntDesginIcon style = {styles.btn_menu} name = "left" size = {40} color = "#000000"/>
            <View style={styles.search_bar}>
                <IconFeather style = {styles.iconsearch} name = "search" size = {30} color = "black"></IconFeather>
            </View>
            <IconMCI style = {styles.notify_btn} name = "menu" size = {40} color = "black"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "9%",
        backgroundColor: "#ECB7F0",
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 10,
    },
    btn_menu: {
        marginLeft: 10,
    },
    iconsearch:{
        alignSelf:"flex-end",
        marginRight:10,
        marginTop:4
    },
    search_bar: {
        width: 260,
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 30,
    },
    notify_btn: {
        marginRight: 10
    }
});
export default Header;