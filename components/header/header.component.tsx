import React from 'react'
import {View,Text} from 'react-native'
import headerStyles from './header.styles'

interface HeaderProps{
    title:string
}

const Header:React.FC<HeaderProps>=({title})=>{
    return(
        <View style={headerStyles.header}>
            <Text style={headerStyles.title}>{title}</Text>
        </View>

    )
}
export default Header