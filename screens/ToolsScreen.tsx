import * as Linking from 'expo-linking';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { TitleText } from '../components/StyledText';
import { View } from '../components/Themed';
import { ToolsParamList } from '../types';

type ToolsScreenNavigationProp = StackNavigationProp<
  ToolsParamList,
  'ToolsScreen'
>;

type Props = {
  navigation: ToolsScreenNavigationProp;
};

export default function NewsScreen({ navigation }: Props) {
  const handleBruttoNettoPress = () => {
    navigation.push('BruttoNettoScreen');
  };

  const handlePayPress = () => {
    Linking.openURL('whatsapp://app');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TitleText>Tools</TitleText>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Button onPress={handleBruttoNettoPress} title="Brutto-netto" />
        <Button onPress={handlePayPress} title="WhatsApp" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
