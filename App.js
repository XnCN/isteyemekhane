import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'mobx-react';
import store from './src/stores';


import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

//Components
import Header from './src/components/Header';
import FoodList from './src/components/FoodList';
import Message from './src/components/Message';


class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <SafeAreaView>
            <Header />
            <Message />
            <FoodList />
          </SafeAreaView>
        </ApplicationProvider>
      </Provider>
    )
  }
}

export default App;