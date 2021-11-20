import React from 'react';
import {View} from 'react-native'
import Body from './Body/Body';
import FooterMenu from './FooterMenu/FooterMenu';
import Header from './Header/Header'
function index(props) {
    return (
        <View>
            <Header></Header>
            <Body></Body>
            <FooterMenu></FooterMenu>
        </View>
    );
}

export default index;