import { useEffect, useState } from 'react'
import {Button, Text,TextInput,View,StyleSheet} from 'react-native'
import {signInWithEmailAndPassword,onAuthStateChanged,} from 'firebase/auth'
import auth from '../Services/firebaseAthu'


export default function LoginScreen ({navigation}){
    const [email ,setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = () => {
        setError('')
        console.log(email, password)
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            navigation.navigate('Dashboard')
            
        })
        .catch((err) => {
            setError(err.message)
        })
    }
    const goToRegester = () => {
        navigation.navigate('Register')
    }


    const onLoginUser = () => {
        onAuthStateChanged(auth,(user) => {
            if(user){
                console.log(user)
                navigation.navigate("Dashboard")
            }else{
                console.log(user)
                console.log('logout')
            }
        })
    }

    useEffect(()=>{
        onLoginUser()
    },[])

    return <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>Login </Text>
        <TextInput placeholder="Email" style={styles.textInput} onChangeText={setEmail}
        />
        <TextInput  placeholder='Password' secureTextEntry style={styles.textInput} onChangeText={setPassword}
        
        />
        
        <Button title='Login' onPress={handleLogin}
        />
        {error && <Text style={{color:'red'}}>Invalid</Text>}
        <Text style={{marginVertical:10}} onPress={goToRegester}>Create an account? Register here</Text>
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