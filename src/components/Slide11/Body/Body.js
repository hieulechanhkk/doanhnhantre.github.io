import React from 'react';
import {View,Text,StyleSheet, TextInput,Image} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import TodoIcon from './../../../../assess/todoicon.png'
function Body(props) {
    const todosource = './../../../../assess/todoicon.png'
    return (
        <View style = {styles.container}>
            <View>
                <View style= {styles.title}>
                    <Image style = {styles.icon} source = {require(todosource)}/>
                    <Text style = {styles.titleText}>Công việc hôm nay</Text>
                </View>
                <View style = {styles.detail}>
                    <Text style = {styles.titletdt}>Đồ án Mobile</Text>
                    <View style = {styles.list}>
                        <View style = {styles.item}>
                            <Entypo style = {styles.iconleft} name = "circle" size = {25} color = "#34c3eb"></Entypo>
                            <Text numberOfLines = {1} style = {styles.textdt}>Thiết kế front end Mobile</Text>
                            <AntDesign name = "staro" size = {25} color = "#eba534"></AntDesign>
                        </View>
                        <View style = {styles.item}>
                            <Entypo style = {styles.iconleft} name = "circle" size = {25} color = "#34c3eb"></Entypo>
                            <Text numberOfLines= {1} style = {styles.textdt}>Báo cáo tiến độ Mobile App</Text>
                            <AntDesign style = {styles.iconright} name = "star" size = {25} color = "#eba534"></AntDesign>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    blueBg: {
        backgroundColor: "#0085FF"
    },
    orangeBg: {
        backgroundColor: "#F38D30"
    },
    purpleBg: {
        backgroundColor: "#AB7BE9"
    },
    container:
    {
        width: "100%",
        height: "83%",
        paddingTop:30
    },
    title: {
        width:"70%",
        backgroundColor:"red",
        height: 50,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        justifyContent:"flex-start",
        flexDirection:'row',
        alignItems:'center'

    },
    icon: {
        width: 35,
        height: 35,
        marginRight: 10,
        marginLeft:5
    }
    ,
    titleText: {
        color:"white",
        alignSelf:"center",
        fontSize: 20
    },
    item: {
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        marginTop:10
    },
    textdt: {
        marginLeft:10,
        color:"black",
        fontSize:18,
        width:250,
        
        borderBottomWidth:1,
        borderBottomColor: "gray",
        marginRight: 30
    },
    iconleft: {
        marginLeft:30,
        marginRight:8
    },
    titletdt: {
        color:"red",
        fontSize:20,
        marginLeft:30,
        marginTop:10

    }
});
export default Body;