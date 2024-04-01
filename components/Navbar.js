import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';

export default function Navbar() {
    return (
        <View style={ styles.container }>
          <Text style={ styles.title }>Task Board</Text>

          <Avatar name='Foo' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'lightgreen',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    }
});
