import React from 'react';
import {View} from 'react-native'
import FooterMenu from '../SlideSeven/FooterMenu/FooterMenu';
import Header from './../SlideSeven/Header/Header'
import Body from './Body/Body'
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