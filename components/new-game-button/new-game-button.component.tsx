import React from 'react'
import { Image,TouchableOpacity } from 'react-native'
import newGameButtonStyle from './new-game-button.styles'

const NewGameButton=()=>{
    return(
        <TouchableOpacity 
            style={{...newGameButtonStyle.buttonBackground}}
            activeOpacity={0.5}
            >
            <Image 
                style={{...newGameButtonStyle.image}}
                source={{uri:`https://andregunawan.github.io/TriviaGame/assets/images/start.png`}}/>
        </TouchableOpacity>
        
    )
}

export default NewGameButton