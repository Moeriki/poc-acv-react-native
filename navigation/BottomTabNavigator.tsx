import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NewsScreen from '../screens/NewsScreen';
import AdvantagesScreen from '../screens/AdvantagesScreen';
import {
  AdvantagesParamList,
  BottomTabParamList,
  NewsParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="News"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="News"
        component={NewsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Advantages"
        component={AdvantagesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const NewsStack = createStackNavigator<NewsParamList>();

function NewsNavigator() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ headerTitle: 'Nieuws' }}
      />
    </NewsStack.Navigator>
  );
}

const AdvantagesStack = createStackNavigator<AdvantagesParamList>();

function AdvantagesNavigator() {
  return (
    <AdvantagesStack.Navigator>
      <AdvantagesStack.Screen
        name="AdvantagesScreen"
        component={AdvantagesScreen}
        options={{ headerTitle: 'Voordelen' }}
      />
    </AdvantagesStack.Navigator>
  );
}
