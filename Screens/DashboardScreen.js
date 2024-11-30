import {  signOut } from "firebase/auth"
import { View,Text, Button } from "react-native"
import auth from "../Services/firebaseAthu"

export default function DashboardScreen({navigation}){
    
    
    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            navigation.navigate('Login')
        })
        
        
    }


    return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>Welcome to Dashbord</Text>
        <Button title="Logout" onPress={handleLogout}/>
    </View>
}