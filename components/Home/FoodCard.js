import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const FoodCard = ({ food, addToCartHandler }) => {
    const { img, category, id, name, price } = food;
    return (
        <View style={style.border}>
            <View>
                <Image style={style.image} source={{ uri: img }} />
            </View>
            <View>
                <Text style={style.text}> {name} </Text>
                <Text style={{ color: 'gray' }}> {category} </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{ flex:2, textAlign: 'left', fontWeight: 'bold', fontSize: 18 }}> ${price} </Text>
                <Pressable onPress={()=>addToCartHandler(id)} style={style.button}>
                    <Text style={style.btntxt}>+</Text>
                </Pressable>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderRadius: 15,
        backgroundColor: 'white',
        margin: 15,
        padding: 10
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'stretch'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
    },
    btntxt: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        width: 30,
        height: 30,
        alignItems: 'center',
        borderRadius: 50,
        elevation: 1,
        fontSize: 10,
        backgroundColor: '#17A2B8'
    },
   
})

export default FoodCard;