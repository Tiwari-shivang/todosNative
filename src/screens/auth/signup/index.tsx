import React from 'react';
import { Image, View, Text, TextInput } from 'react-native';
import MedImg from '../../../../assets/meditation.png';
import CustomButton from '../../../commonComponents/CustomButton';
import TextButton from '../../../commonComponents/TextButton';
import { authStyles } from '../login';

const Signup = () => {
    return (
        <View style={authStyles.view}>
            <Image style={authStyles.image} source={MedImg} />
            <View style={authStyles.formContainer}>
                <Text style={authStyles.topHeading}> Sign In </Text>
                <Text style={authStyles.subText}>
                    Sign up using your email and password
                </Text>
                <View style={authStyles.form}>
                    <Text style={authStyles.textLabel}> First name: </Text>
                    <TextInput style={authStyles.textInput} />

                    <Text style={authStyles.textLabel}> Last name: </Text>
                    <TextInput style={authStyles.textInput} />

                    <Text style={authStyles.textLabel}> Gender: </Text>
                    <TextInput style={authStyles.textInput} />

                    <Text style={authStyles.textLabel}> Email: </Text>
                    <TextInput style={authStyles.textInput} />

                    <Text style={authStyles.textLabel}> Password: </Text>
                    <TextInput style={authStyles.textInput} />

                    <Text style={authStyles.textLabel}> Confirm Password: </Text>
                    <TextInput style={authStyles.textInput} />

                    <View style={authStyles.btnContainer}>
                        <CustomButton name="Sign in" />
                    </View>
                    <TextButton name="Forgot passowrd?" />

                    <View style={authStyles.noAccView}>
                        <Text style={authStyles.subText}>
                            Already having one account ?
                            <Text style={authStyles.pressableText}>Create one</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Signup;