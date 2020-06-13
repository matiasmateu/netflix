import React from 'react';
import { TouchableOpacity , Text } from 'react-native'
import { useNavigate } from 'renative'


const RoundButton = (props) =>{
    const navigate = useNavigate(props);
    return (
        <TouchableOpacity 
        style={{backgroundColor:"blue"}} 
        onPress={()=>{
            navigate('player',{}); 
        }}>
            <Text style={{color:"white"}}>Play</Text>
        </TouchableOpacity>
    )
}

export default RoundButton