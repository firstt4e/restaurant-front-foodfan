import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import ReportScreen from './ReportScreen';
import {MenuScreen} from './MenuScreen';
import {MainOrderListDetailScreen} from './MainOrderListDetailScreen';
import CardListScreen from './CardListScreen';
import DecisionScreen from './DecisionScreen';
import ManageMenuScreen from './ManageMenuScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ReportStack = createStackNavigator();
const MenuStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      
      
      
      
      {/* <Tab.Screen
        name="Waiting Order"
        component={MenuScreen}
        options={{
          tabBarLabel: 'Waiting Order',
          tabBarColor: '#FF6347',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-timer" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Report"
        component={ReportStackScreen}
        options={{
          tabBarLabel: 'New Order',
          tabBarColor: '#FF6347',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="New Order"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'My Order',
          tabBarColor: '#FF634',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Manage Menu"
        component={MenuStackScreen}
        options={{
          tabBarLabel: 'Manage Menu',
          tabBarColor: '#FF6347',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-menu" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#FF6347',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen 
        name="ออเดอร์ของฉัน"
        component={CardListScreen}/>
        
      
      
        <HomeStack.Screen
        name="OrderDetail"
        component={MainOrderListDetailScreen}
      />



</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FF6347',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Order"
      component={MenuScreen}/>
      
  </DetailsStack.Navigator>
);


// const DetailsStackScreen = ({navigation}) => (
// <DetailsStack.Navigator screenOptions={{
//         headerStyle: {
//         backgroundColor: '#FF6347',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//         fontWeight: 'bold'
//         }
//     }}>
//         <DetailsStack.Screen name="Details" component={MenuScreen} options={{
//           title:'Details',
//         headerLeft: () => (
//             <Icon.Button name="ios-menu" size={25} backgroundColor="#FF6347" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </DetailsStack.Navigator>
// );

const ReportStackScreen = ({navigation}) => (
<ReportStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#FF6347',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ReportStack.Screen name="Report" component={ReportScreen} options={{
          title:'ออเดอร์มาใหม่',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#FF6347" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
        <ReportStack.Screen 
        name="Decision"
        component={DecisionScreen}/>
</ReportStack.Navigator>
);

const MenuStackScreen = ({navigation}) => (
  <MenuStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#FF6347',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <MenuStack.Screen name="Menu" component={DetailsScreen} options={{
            title:'จัดการเมนู',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#FF6347" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
          <MenuStack.Screen
      name="Order"
      component={MenuScreen}/>
      <DetailsStack.Screen
        name="Manage"
        component={ManageMenuScreen}/>
      
  </MenuStack.Navigator>
  );
  