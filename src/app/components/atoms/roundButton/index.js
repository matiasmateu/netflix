import React from 'react';
import { TouchableOpacity , Text, StyleSheet } from 'react-native'
import { useNavigate, Icon } from 'renative'

const styles = StyleSheet.create({
    button:{
        width:50,
        height:50,
        backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50
    }
})

const RoundButton = (props) =>{
    const navigate = useNavigate(props);
    return (
        <TouchableOpacity 
        style={styles.button} 
        onPress={()=>{
            navigate('player',{}); 
        }}>
            <Icon
            iconFont="ionicons"
            iconName="md-play"
            iconColor={"white"}
            size={20}
            
        />
        </TouchableOpacity>
    )
}

export default RoundButton