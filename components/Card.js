import { StyleSheet, Text, View, Platform, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function Card({ title, description, person, priority, status, extraTitleStyles }) {
    return (
        <View style={ styles.topContainer }>
          <View style={ styles.headerContainer }>
            <Text style={ [styles.title, extraTitleStyles] }>{ title }</Text>
            <Text style={ styles.priority }>{ priority }</Text>
          </View>
          <View style={ styles.line } />
          <View style={ styles.descriptionContainer }>
            <Text style={ styles.description }>{ description }</Text>
          </View>
          <View style={ styles.detailsContainer }>
            <Text style={ styles.person }>@{ person }</Text>
            <TouchableOpacity
              style={ styles.optionsContainer }
              onPress={ () => console.log("Icon button pressed") }
            >
              <Icon
                name="ellipsis-vertical"
                style={ styles.options }
              />
            </TouchableOpacity>
          </View>
          <View styles={ styles.statusContainer }>
            <Text style={ styles.status }>{ status }</Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        // flex: 1,
        // flexDirection: 'row',
        backgroundColor: 'lightgrey',
        // width: "90%",
        margin: 16,
        padding: 16,
        // borderWidth: 2,
        borderRadius: 16,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 2,
                    height: 2
                },
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            }
        }),
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        // color: "white",
        // padding: 10,
        // textAlign: "center",
        // justifyContent: 'flex-start',
    },
    priority: {
        // justifyContent: 'flex-end'
        backgroundColor: 'blue',
        color: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    line: {
        marginVertical: 5,
        backgroundColor: 'black',
        height: 1,
        width: '100%',
    },
    descriptionContainer: {
    },
    description: {
        fontSize: 16,
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 16,
    },
    person: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    optionsContainer: {
        backgroundColor: 'blue',
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    options: {
        color: 'white',
        fontSize: 18,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    status: {
        fontSize: 16,
        backgroundColor: 'blue',
        color: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
        textAlign: 'center',
        width: '50%',
        // height: 30,
        padding: 16,
        borderRadius: 8,
    },
});
