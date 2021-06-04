import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import CartListCard from './CartListCard';
import { stateContext } from '../../App';

const Cart = () => {
    const { cartState } = useContext(stateContext);
    const [cart, setCart] = cartState;

    const pressHandler = () => {

        alert("Your Order Has Been Placed")
        setCart(null);
    }

    const quantityIncrease = (id) => {

        const items = cart.find(crt => crt.id === id)

        if (items.quantity >= 0) {
            items.quantity = items.quantity + 1;
        }
        else {
            items.quantity = 0;
        }
        let newCarts = cart.filter(crt => crt.id !== id)
        newCarts = [...newCarts, items]

        const compare = (a, b) => {

            const idA = a.id.toUpperCase();
            const idB = b.id.toUpperCase();

            let comparison = 0;

            if (idA > idB) {
                comparison = 1;
            } else if (idA < idB) {
                comparison = -1;
            }
            return comparison;
        }

        setCart(newCarts.sort(compare));
    }
    const quantityDecrease = (id) => {

        const items = cart.find(crt => crt.id === id)

        if (items.quantity > 0) {
            items.quantity = items.quantity - 1;
        }
        else {
            items.quantity = 0;
        }
        let newCarts = cart.filter(crt => crt.id !== id)
        newCarts = [...newCarts, items]

        const compare = (a, b) => {

            const idA = a.id.toUpperCase();
            const idB = b.id.toUpperCase();

            let comparison = 0;

            if (idA > idB) {
                comparison = 1;
            } else if (idA < idB) {
                comparison = -1;
            }
            return comparison;
        }
        setCart(newCarts.sort(compare));
    }

    const totalCalculation = () => {
        let total = 0;
        cart.map((crt) => {
            const { price, quantity } = crt;
            total = total + (price * quantity);
        })
        return total;
    }
    return (

        <ScrollView style={style.container}>

            <View>
                <Text style={{ textAlign: "center", fontSize: 25, fontWeight: 'bold', marginTop: 10, color: 'gray' }}>Cart List</Text>
            </View>

            <View style={style.cartContainer}>

                {
                    cart ?
                        <>
                            {
                                cart.map((cart, index) => <CartListCard quantityDecrease={quantityDecrease} quantityIncrease={quantityIncrease} cart={cart} key={index}></CartListCard>)
                            }
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ flex: 5, fontSize: 20, fontWeight: 'bold', color: 'gray' }}>Total: </Text>
                                <Text style={{ flex: 2, fontSize: 20, fontWeight: 'bold', color: 'gray' }}> ${totalCalculation().toFixed(2)} </Text>
                            </View>
                        </>
                        :
                        <Text>Empty</Text>
                }
            </View>

            <Pressable onPress={pressHandler} style={style.button}>
                <Text style={style.text}>Checkout</Text>
            </Pressable>

        </ScrollView>
    );
};


const style = StyleSheet.create({
    container: {
        marginRight: 20,
        marginLeft: 20
    },
    cartContainer: {
        marginTop: 20,
        marginBottom: 30,
        paddingTop: 10,
        paddingBottom: 10

    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 3,
        fontSize: 50,
        backgroundColor: '#17A2B8',
    },
})


export default Cart;