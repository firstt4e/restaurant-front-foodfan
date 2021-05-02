import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Box from '../components/OrdersBox/Box';

import styles from '../assets/styles';

export class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          nameStore: 'ร้านชาคุมะ',
          serialNumber: 'EBF-1234567890',
          status: 'กำลังทำ',
          date: '20-04-2021 10:45:00',
          // credit: 16,
          // point: 0.2,
          img:
            'https://sv1.picz.in.th/images/2021/04/20/AQClGa.png',
        },
        {
          nameStore: 'ข้าวแกงปักใต้',
          serialNumber: 'EBF-1234567890',
          status: 'สำเร็จ',
          date: '20-04-2021 16:45:00',
          credit: 16,
          point: 0.2,
          img:
            'https://sv1.picz.in.th/images/2021/04/20/AURNeV.jpg',
        },
        {
          nameStore: 'ชาบู จิ้บจิ้บ บาร์',
          serialNumber: 'EBF-1234567890',
          status: 'ล้มเหลว',
          date: '01-01-2021 16:45:00',
          credit: 16,
          point: 0.2,
          img:
            'https://sv1.picz.in.th/images/2021/04/20/AUR4PN.jpg',
        },
        {
          nameStore: 'ก๋วยเตี๋ยวทนาย',
          serialNumber: 'EBF-1234567890',
          status: 'ยกเลิก',
          date: '01-01-2021 16:45:00',
          credit: 16,
          point: 0.2,
          img:
            'https://sv1.picz.in.th/images/2021/04/20/AURf3Q.jpg',
        },
        {
          nameStore: 'ชาเด็กช่าง',
          serialNumber: 'EBF-1234567890',
          status: 'สำเร็จ',
          date: '01-01-2021 16:45:00',
          credit: 16,
          point: 0.2,
          img:
            'https://sv1.picz.in.th/images/2021/04/20/AURhbS.gif',
        },
        {
          nameStore: 'ข้าวแกงคนใต้',
          serialNumber: 'EBF-1234567890',
          status: 'สำเร็จ',
          date: '01-01-2021 16:45:00',
          credit: 16,
          point: 0.2,
          img:
            'https://sv1.picz.in.th/images/2021/04/20/AURNeV.jpg',
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={[styles.cardsWrapper, {paddingTop: 15}]}>
            {/* <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Ionicons
                name="chevron-back-outline"
                size={30}
                style={{color: 'rgba(150, 150, 150, 1)', marginTop: 5}}
              />
            </TouchableOpacity> */}
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 24,
                fontFamily: 'Kanit-Bold',
                color: '#333',
              }}>
              ออเดอร์ล่าสุด
            </Text>
          </View>
          <SafeAreaView style={{flex: 1, paddingBottom: 10}}>
            {/* <ScrollView style={{marginBottom: 10}}> */}
            <View style={styles.randomMenuCardsWrapper}>
              <FlatList
                data={this.state.data}
                renderItem={({item}) => (
                  <Box data={item} navigation={this.props.navigation} />
                )}
                keyExtractor={(item) => item.nameStore}
              />
            </View>
            {/* </ScrollView> */}
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

export default MenuScreen;