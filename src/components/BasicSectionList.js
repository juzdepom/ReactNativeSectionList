import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
import { sectionListData } from '../data/sectionListData';


class SectionListItem extends Component {
    render() {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>
                    {this.props.item.name}
                </Text>
                <Text style={styles.itemText}>
                    {this.props.item.description}
                </Text>
            </View>
        )
    }
}

export default class BasicSectionList extends Component {

    render(){
        return (
            <View style={styles.container}>
                <SectionList
                    renderItem={({ item, index}) =>{
                        return(
                            <SectionListItem item={item} key={index} index={index} >

                            </SectionListItem>
                        );
                    }}
                    sections={sectionListData}
                    keyExtractor={(item, index) => item + index}
                >

                </SectionList>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 34: 0
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(98, 197, 184)'
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb(173, 252, 250)',
        marginLeft: 20,
        marginRight: 10
    }
});