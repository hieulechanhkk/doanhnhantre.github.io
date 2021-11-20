import React from 'react';
import { View } from 'react-native';
import FooterMenu from '../SlideSeven/FooterMenu/FooterMenu';
import Body from './Body/Body'
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