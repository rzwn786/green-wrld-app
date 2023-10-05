import {StyleSheet} from 'react-native'

const externalStyle = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: 'white',
      },
      textStyle: {
        //color: '#6BB46B',
        color: 'black',
        fontSize: 15,
      },
      userLogoStyle:{
        width:80,
        height:80,
      },
      textInput:{
        borderWidth: 1,
        borderColor:'#708238',
        padding:8,
        margin:10,
        width:350,
        color: 'black'
      },
      buttonStyle:{
        backgroundColor:'#708238',
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 15,
        padding:12,
        margin:10,
      },
      nonTouchableText: {
        color: 'black',
        textAlign: 'center',
        padding:10, 

      },
      touchableText: {
        color: '#708238',
        textAlign: 'center',
        padding:10, 

      },
      labelContainer: {
        position: 'absolute',
        backgroundColor: '#FFF',
        textAlign: 'center',
      },
      warningText: {
        fontSize:10,
        color:'#cc0000',
        marginLeft:10
      }


})

export default externalStyle