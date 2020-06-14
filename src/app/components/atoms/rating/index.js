import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Icon } from 'renative'

const styles = StyleSheet.create({
    icon:{
        color:"white"
    }
})

export const Rating = ({color="white"}) => {
    return (
        <View>
            <Icon
            iconFont="ionicons"
            iconName="md-star"
            iconColor={color}
            size={16}
            style={styles.icon}
            />
        </View>
    )
}

export default Rating
