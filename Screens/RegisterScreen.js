import { useState } from 'react'
import {Button, Text,TextInput,View,StyleSheet} from 'react-native'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import auth from '../Services/firebaseAthu'


export default function RegisterScreen ({navigation}){
    const [email ,setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [error, setError] = useState('')

    const handleRegister = () => {
        setError('')
        console.log(email, password)
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('Dashboard')
            
        })
        .catch((err) => {
            setError(err.message)
        })
    }
    const goToLogin = () => {
        navigation.navigate('Login')
    }
    


    return <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>Register </Text>
        <TextInput placeholder="Email" style={styles.textInput} onChangeText={setEmail}
        />
        <TextInput  placeholder='Password' secureTextEntry style={styles.textInput} onChangeText={setPassword}
        
        />
        
        <Button title='Regester' onPress={handleRegister}
        />
        {error && <Text style={{color:'red'}}>This account already used</Text>}
        <Text style={{marginVertical:10}} onPress={goToLogin}>Already have an account? Login here</Text>
    </View>
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderColor:"gray",
        width:200, 
        marginVertical:10,
        paddingHorizontal:8
    },
})

