import React from 'react';
import { StyleSheet, Image, View, Text, TextInput } from 'react-native';
import MedImg from '../../../../assets/meditation.png';
import CustomButton from '../../../commonComponents/CustomButton';
import TextButton from '../../../commonComponents/TextButton';

const Login = ({navigation}) => {
    const handleSignupNavigation = () => {
        navigation.replace('TabConatiner');
    }
    return (
        <View style={authStyles.view}>
            <Image style={authStyles.image} source={MedImg} />
            <View style={authStyles.formContainer}>
                <Text style={authStyles.topHeading}> Sign In </Text>
                <Text style={authStyles.subText}>
                    Sign in using your email and password
                </Text>
                <View style={authStyles.form}>
                    <Text style={authStyles.textLabel}> User ID: </Text>
                    <TextInput style={authStyles.textInput} />

                    <Text style={authStyles.textLabel}> Password: </Text>
                    <TextInput style={authStyles.textInput} />
                    <View style={authStyles.btnContainer}>
                        <CustomButton name="Sign in" />
                    </View>
                    <TextButton name="Forgot passowrd?" />

                    <View style={authStyles.noAccView}>
                        <Text style={authStyles.subText}>
                            Still without account ?
                            <Text onPress={handleSignupNavigation} style={authStyles.pressableText}>Create one</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const authStyles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 40,
    },
    btnContainer: {
        marginTop: 10,
        marginBottom: 5,
    },
    image: {
        height: 220,
        width: 220,
        resizeMode: 'cover',
    },
    noAccView: {
        marginTop: 30,
    },
    formContainer: {
        width: '100%',
        padding: 2,
        alignItems: 'center',
    },
    topHeading: {
        textAlign: 'center',
        fontSize: 38,
        color: '#000',
    },
    subText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#A6A6A6',
    },
    pressableText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#75BAFF',
        fontWeight: 'bold',
    },
    form: {
        marginTop: 30,
        width: '80%',
    },
    textLabel: {
        fontSize: 12,
        color: '#A6A6A6',
    },
    textInput: {
        width: '100%',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        marginTop: 5,
        marginBottom: 10,
    },
});

export { authStyles };

export default Login;
