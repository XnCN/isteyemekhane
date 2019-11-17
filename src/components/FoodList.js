import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { StyleSheet } from 'react-native';
import { toJS } from 'mobx';
import { ListItem, Text, Spinner, Layout } from 'react-native-ui-kitten';

@inject('FoodStore')
@observer
class FoodList extends Component {
    render() {
        const { foodList, loading } = this.props.FoodStore;
        const foodListJS = toJS(foodList);
        return (
            <Layout>
                {loading ? <Layout style={styles.loading} ><Spinner size="large" /></Layout> : null}
                {
                    foodListJS.length > 1 ? foodListJS.map(food =>
                        <ListItem
                            key={food.Name}
                            title={food.Name}
                            description={`${food.Cal} kalori, ${food.Gr} gram`}
                        />
                    ) : null
                }
                {foodListJS.hasOwnProperty('msg') ? <Layout style={styles.center} level='3'><Text status='primary'>Yemek yok</Text></Layout> : null}
            </Layout>
        )
    }
}
const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
})

export default FoodList;