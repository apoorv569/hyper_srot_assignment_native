import { StyleSheet, Picker, Text, View, Platform, Dimensions, ScrollView } from "react-native";

export default function FilterBar() {
    return (
        <View style={ styles.container }>
          <View style={ styles.titleContainer }>
            <Text style={ styles.title }>Filter By:</Text>
          </View>
          <View style={ styles.boxContainer }>
            <View style={ styles.box }></View>
            <View style={ styles.box }></View>
            <View style={ styles.box }></View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'moccasin',
        padding: 10,
    },
    titleContainer: {
        // marginVertical: 10,
        marginTop: 5,
        marginBottom: 20,
        // marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    box: {
        width: 140,
        height: 40,
        backgroundColor: 'pink',
        borderRadius: 4,
    },
});
