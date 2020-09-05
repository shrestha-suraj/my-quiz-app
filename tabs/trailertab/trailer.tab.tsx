import React from 'react'
import {ImageBackground,Image} from 'react-native'
import trailerStyle from './trailer.styles'


const TrailerTab=()=>{
    return(
        <ImageBackground 
            style={trailerStyle.trailerTab}
            source={{uri:'https://www.leadquizzes.com/wp-content/uploads/2019/02/New-blog-graphic.jpg'}}
            >

            <Image style={trailerStyle.appLogo}
                source={{uri:'https://d259t2jj6zp7qm.cloudfront.net/images/20200113133231/quiz-icon-150x150.png'}}
            />

        </ImageBackground>
        
    )
}

export default TrailerTab