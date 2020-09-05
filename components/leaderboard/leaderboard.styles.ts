import {StyleSheet} from 'react-native'

const leaderboardStyles=StyleSheet.create({
    leaderboardContainer:{
        width:'80%',
        height:'90%',
        borderRadius:20,
        alignItems:'center'
    },
    boardTextView:{
        width:'100%',
        height:'10%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    leaderboardText:{
        fontSize:25,
        color:'white',
        fontStyle:'italic',
        fontWeight:'bold'
    },
    cartItems:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    userName:{
        fontSize:20,
        fontStyle:'italic'
    },
    score:{
        fontSize:20,
        fontStyle:'italic'
    }
})

export default leaderboardStyles