import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native"
import TodoIcon from './../../../../assess/todoicon.png';
function Body(props) {
    const iconsource = './../../../../assess/todoicon.png'
    return (
        <View style={styles.container}>
            <View style={styles.list_todo}>
                <View style={styles.todo}>
                    <View style={styles.list_item}>
                        <Image style={styles.icon} source={require(iconsource)} />
                        <Text style={styles.textFm}>Công việc hôm nay</Text>
                    </View>
                </View>
                <View style={styles.todo}>
                    <View style={[styles.list_item, styles.blueBg]}>
                        <Image style={styles.icon} source={require(iconsource)} />
                        <Text style={styles.textFm}>Công việc quan trọng</Text>
                    </View>
                </View>
                <View style={styles.todo}>
                    <View style={[styles.list_item, styles.orangeBg]}>
                        <Image style={styles.icon} source={require(iconsource)} />
                        <Text style={styles.textFm}>Tất cả công việc</Text>
                    </View>
                </View>
                <View style={styles.todo}>
                    <View style={[styles.list_item, styles.purpleBg]}>
                        <Image style={styles.icon} source={require(iconsource)} />
                        <Text style={styles.textFm}>Danh sách của tôi</Text>
                    </View>
                    <View style={[styles.list_jobs]}>
                        <Text style={styles.textJob}>Đồ án Mobile</Text>
                        <Text style={styles.textJob}>Đồ án Web</Text>
                        <Text style={styles.textJob}>Đồ án Framework</Text>
                        <Text style={styles.textJob}>Đồ án CSDL Phân Tán</Text>
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
    },
    list_todo: {
        flexDirection: "column",
        flexBasis: 10,

    },
    todo: {
        width: "80%",
    },
    icon: {
        width: 35,
        height: 35,
        marginRight: 10,
        marginLeft:10
    }
    ,
    list_item: {
        width: "100%",
        height: 50,
        backgroundColor: "red",
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 35,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: 'row',
    },
    textFm: {
        fontSize: 25,
        color: "white",
    },
    textJob: {
        marginLeft: 40,
        fontSize: 18,
        marginTop: 10,
        color: "black",
        borderBottomWidth:1,
        borderColor:"gray"

    }
})
export default Body;