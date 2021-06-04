import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    Text,
    View
  } from 'react-native';

const GetStarted = ({ navigation }) => {
    return (
        <View>

            <Text>This is Get Started</Text>
            <Button onPress={()=>navigation.navigate('Home')} title="GET STARTED" />

        </View>
    );
};

export default GetStarted;