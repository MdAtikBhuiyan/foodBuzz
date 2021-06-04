import React, { useState } from 'react'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from 'react-native-google-signin';

export default function Login() {

    const [loggedIn, setloggedIn] = useState(false);
    const [cart, setCart, userInfo, setuserInfo] = useContext(stateContext);

    const handleGoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken } = await GoogleSignin.signIn();
            setloggedIn(true);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                const details = { ...userInfo }
                setuserInfo(details)
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('PLAY_SERVICES_NOT_AVAILABLE');
            } else {
                alert('Login failed')
            }
        }
    };

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email'],
            webClientId:
                '92412027694-3v8i15sjsirr1ilge7l74ircpcadq096.apps.googleusercontent.com',
            offlineAccess: true,
        });
    }, []);

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setloggedIn(false);
            setuserInfo([]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <Header />
    
              <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <GoogleSigninButton
                    style={{width: 192, height: 48}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  {!loggedIn && <Text>You are currently logged out</Text>}
                  {loggedIn && (
                    <Button
                      onPress={this.signOut}
                      title="LogOut"
                      color="red"></Button>
                  )}
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
      );
}