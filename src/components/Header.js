import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { TopNavigation, Layout } from 'react-native-ui-kitten';
import CalendarStrip from 'react-native-calendar-strip';
import axios from 'axios';

import 'moment';
import 'moment/locale/tr';
import moment from 'moment';

@inject('FoodStore')
@observer
class Header extends Component {
    onDateSelected = async (date) => {
        const parseddate = moment(date).format('DD-MM-YYYY');
        const { setFoodList, setLoading } = this.props.FoodStore;
        setFoodList([]);
        setLoading(true);
        const { data } = await axios.get(`http://localhost:3000/foods/${parseddate}`);
        setLoading(false);
        setFoodList(data);
    }
    render() {
        return (
            <Layout>
                <TopNavigation
                    title='İSKENDERUN TEKNİK ÜNİVERSİTESİ'
                    alignment='center'
                />
                <CalendarStrip
                    showMonth={false}
                    locale={{ name: 'tr', config: {} }}
                    calendarAnimation={{ type: 'sequence', duration: 30 }}
                    daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: '#6e99f0' }}
                    style={{ height: 70, paddingTop: 0, marginTop: 0, paddingBottom: 10, borderBottomColor: '#f2f2f2', borderBottomWidth: 1 }}
                    calendarColor={'#fff'}
                    dateNumberStyle={{ color: '#3e3e3e', fontWeight: 'normal' }}
                    dateNameStyle={{ color: '#9e9e9e', paddingBottom: 5, fontSize: 9 }}
                    highlightDateNumberStyle={{ color: '#6e99f0' }}
                    highlightDateNameStyle={{ color: '#6e99f0' }}
                    disabledDateNameStyle={{ color: 'grey' }}
                    disabledDateNumberStyle={{ color: 'grey' }}
                    onDateSelected={(date) => this.onDateSelected(date)}
                />
            </Layout>
        )
    }
}

export default Header;