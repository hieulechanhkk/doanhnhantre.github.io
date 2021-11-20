import React from 'react';
import {View,StyleSheet,Text, Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TodoIcon from './../../../../assess/todoicon.png';
import ArrowRigh from './../../../../assess/arrowright.png'
import ButtonAdd from './../../../../assess/buttonadd.png'
function Body(props) {
    const iconsource = `./../../../../assess/todoicon.png`
    const arrowright = './../../../../assess/arrowright.png'
    const buttonadd = './../../../../assess/buttonadd.png'
    return (
        <View style = {styles.container}>
            <View style = {styles.ojcontainer}>
                <View style = {styles.title}>
                    <Image style = {styles.icon} source = {require(iconsource)}/>
                    <Text numberOfLines = {1} style = {styles.titleText}>Xây dựng app Quản lý công việc</Text>
                </View>
                <View style = {styles.detail}>
                    <Text style = {styles.titlemng} >Người quản lý: Phan Văn Tiệp</Text>
                    <View style = {styles.time}>
                        <Text style = {styles.titlemng}>1/11/2021</Text>
                        <Image style = {styles.iconsm} source = {require(arrowright)}/>
                        <Text style = {styles.titlemng}>15/12/2022</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.ojcontainer}>
                <View style = {styles.title}>
                    <Image style = {styles.icon} source = {require(iconsource)}/>
                    <Text numberOfLines = {1} style = {styles.titleText}>Xây dựng app Quản lý công việc</Text>
                </View>
                <View style = {styles.detail}>
                    <Text style = {styles.titlemng} >Người quản lý: Phan Văn Tiệp</Text>
                    <View style = {styles.time}>
                        <Text style = {styles.titlemng}>1/11/2021</Text>
                        <Image style = {styles.iconsm} source = {require(arrowright)}/>
                        <Text style = {styles.titlemng}>15/12/2022</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.ojcontainer}>
                <View style = {styles.title}>
                    <Image style = {styles.icon} source = {require(iconsource)}/>
                    <Text numberOfLines = {1} style = {styles.titleText}>Xây dựng app Quản lý công việc</Text>
                </View>
                <View style = {styles.detail}>
                    <Text style = {styles.titlemng} >Người quản lý: Phan Văn Tiệp</Text>
                    <View style = {styles.time}>
                        <Text style = {styles.titlemng}>1/11/2021</Text>
                        <Image style = {styles.iconsm} source = {require(arrowright)}/>
                        <Text style = {styles.titlemng}>15/12/2022</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.add_project}>
                <Image style = {styles.iconmd} source = {require(buttonadd)}/>
                <Text style = {styles.textmd}>Tạo dự án mới</Text>
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
        width:"80%",
        backgroundColor:"red",
        height: 50,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        justifyContent:"center",
        flexDirection:'row',
        alignItems:'center'
    },
    ojcontainer: {
        marginTop:10
    }
    ,
    titleText: {
        color:"white",
        alignSelf:"center",
        fontSize: 20,
        width: "75%"
    },
    iconmd: {
        width:40,
        height:40,
        marginLeft: 5,
        marginRight:15,
        
    },
    iconsm: {
        width: 18,
        height: 18,
        marginRight: 10,
        marginLeft:10
    },
    icon: {
        width: 35,
        height: 35,
        marginRight: 10,
    
    },
    detail: {
        width:"75%",
        alignSelf:"flex-end",
    },
    textmd:{
        fontSize:20,
        borderBottomWidth:1,
        borderColor: "gray",
        paddingBottom:2
    }
    ,
    time: {
        flexDirection:'row',
        marginTop:8,
        color:"black"
    },
    add_project: {
        marginLeft:30,
        flexDirection:'row',
        alignItems:"center",
        marginTop:10
    },
    btn_add: {
        marginRight:10
    },
    titlemng: {
        fontSize:16,
        color: "black"
    }
})
export default Body;