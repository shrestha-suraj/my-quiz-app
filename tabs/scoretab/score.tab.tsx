import React from 'react'
import {Text,View} from 'react-native'
import scoreStyle from './score.styles'


const ScoreTab:React.FC=()=>{
    return(
        <View style={scoreStyle.scoreTab}>
            <Text>This is home tab</Text>
        </View>
        
    )
}

export default ScoreTab