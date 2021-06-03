import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    Text,
    View,
    Pressable
} from 'react-native';

const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <Text>I'm From Home Component</Text>
            <Button
                title="Go to Cart"
                onPress={() => navigation.navigate('Cart')}
            />
        </ScrollView>
    );
};

export default Home;