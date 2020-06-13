import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Icon } from 'renative'

const styles = StyleSheet.create({
    icon:{
        color:"white"
    }
})

export const Rating = ({rating}) => {
    return (
        <View>
            <Icon
            iconFont="ionicons"
            iconName="md-star"
            iconColor={"white"}
            size={16}
            style={styles.icon}
            />
        </View>
    )
}

export default Rating
