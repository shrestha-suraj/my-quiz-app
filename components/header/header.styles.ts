import {StyleSheet} from 'react-native'

const headerStyles=StyleSheet.create({
    header:{
        width:'100%',
        height:80,
        backgroundColor:'#874d00',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'gray',
        borderBottomWidth:5
    },
    title:{
        fontSize:30,
        color:'white'
    }

})

export default headerStyles