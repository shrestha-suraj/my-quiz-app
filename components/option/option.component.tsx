import React, { Children } from 'react'
import optionStyles from './option.styles'
import { TouchableOpacity, Text } from 'react-native'
import {Card,CardItem,Body} from 'native-base'

interface OptionType {
    width: string | number,
    height: string | number,
    bgColor?:string,
    textColor?:string,
    option: string,
    disabled?:boolean,
    handlePress:(option:string)=>void
}


const Option: React.FC<OptionType> = ({ width='100%', height='100%', bgColor, textColor="black",option,disabled=false,handlePress }) => {
    return (
        <TouchableOpacity
            style={{
                width: width,
                height: height,
                marginVertical:10,
            }}
            activeOpacity={0.9}
            disabled={disabled}
            onPress={()=>handlePress(option)}
            >
            <Card 
                style={{width:'100%',
                        height:'100%',
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:bgColor,
                        borderRadius:10,
                        opacity:disabled?0.5:1.0
                        }}>
                        <Text style={{color:textColor,width:'80%',textAlign:"center",
                            fontSize:20,fontWeight:'bold'}}>
                        {option}
                        </Text>
            </Card>

        </TouchableOpacity>
    )
}

export default Option