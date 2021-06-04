import React, { useContext, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    Text,
    View,
    Pressable,
    TextInput
} from 'react-native';
import { stateContext } from '../../App';
import { foodList } from '../../src/FakeData/database';
import FoodCard from './FoodCard';

const Home = ({ navigation }) => {
    const { foodState, cartState } = useContext(stateContext);
    const [food, setFood] = foodState;
    const [cart, setCart] = cartState;
    useEffect(() => {
        setFood(foodList)
    }, [])

    const addToCartHandler = (id) => {
        let item = food.find(fd => fd.id === id);
        item.quantity = 0;
        item.quantity = item.quantity + 1;
        const newCart = [...cart, item]
        setCart(newCart);
        navigation.navigate('Cart')
    }
    return (
        <ScrollView>
            <View style={style.container}>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <TextInput
                        style={style.input}
                        placeholder="Search"
                    />
                    <Pressable onPress={() => setCart([])} style={style.button}>
                        <Text style={style.btntxt}>Search</Text>
                    </Pressable>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                        {
                            food.map((fd, key) => <FoodCard addToCartHandler={addToCartHandler} fd={fd} key={key}></FoodCard>)
                        }
                    </View>
                </View>
                <View style={style.border}>
                    <Pressable onPress={()=>navigation.navigate('Cart')} style={style.buttonCart}>
                        <Text style={style.btntxt}>Cart</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    border:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 50
    }
    ,
    container: {
        marginLeft: 30,
        marginRight: 30
    },
    input: {
        backgroundColor: 'white',
        padding: 13,
        width: 200,
        flex: 3
    },
    buttonCart: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 50,
        elevation: 1,
        fontSize: 10,
        backgroundColor: '#17A2B8'
    },
    button: {
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        elevation: 1,
        fontSize: 10,
        backgroundColor: '#17A2B8'
    },
    btntxt: {
        fontSize: 15,
        color: 'white'
    }
})

export default Home;