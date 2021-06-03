import React, { useContext } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Pressable } from 'react-native';

const CartListCard = ({ cart, quantityDecrease, quantityIncrease }) => {
    const { name, price, img, quantity, id } = cart;
    return (
        <SafeAreaView style={style.cardContainer}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Image style={style.image} source={{ uri: img }} />
                </View>
                <View style={{ flex: 2, marginLeft: 10, marginTop: 5 }}>
                    <Text style={style.text}> {name} </Text>
                    <Text style={style.text}> ${price} </Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={style.quantity}> {quantity} </Text>
                    <View style={{ flexDirection: 'row', marginTop:10 }}>
                        <Pressable onPress={()=>quantityDecrease(id)} style={style.button}>
                            <Text style={style.btntxt}>-</Text>
                        </Pressable>
                        <Pressable onPress={()=>quantityIncrease(id)} style={style.button}>
                            <Text style={style.btntxt}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black'
    },
    cardContainer: {
        borderWidth: 0.7,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#FAFAFA'
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'stretch'
    },
    text: {
        fontWeight: "bold",
        fontSize: 18
    },
    quantity: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        marginTop:10
    },
    button: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 10,
        elevation: 1,
        fontSize: 10,
        backgroundColor: '#17A2B8'
    },
    btntxt: {
        fontSize: 15,
        color: 'white'
    }
})

export default CartListCard;