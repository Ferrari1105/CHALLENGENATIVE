
import { View, Text, TextInput, Button, StyleSheet,ImageBackground} from 'react-native';
const Layout = ({children}) => {

    return (
        <View style={styles.container}>
               <ImageBackground source={'https://fotos.perfil.com//2019/10/16/900/0/maxi-martinez-7-10162019-791630.jpg'} resizeMode="cover" style={styles.image}>
                
            {children}
               </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        flex: 1,
        justifyContent: 'center',
    }
})


export default Layout