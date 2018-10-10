import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RNLanguages from 'react-native-languages';
import i18n from './src/language/i18n';

export default class App extends Component {
  
  componentWillMount() {
    RNLanguages.addEventListener('change', this._onLanguagesChange);
  }

  componentWillUnmount() {
    RNLanguages.removeEventListener('change', this._onLanguagesChange);
  }

  _onLanguagesChange = ({ language }) => {
    i18n.locale = language;
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t('title')}</Text>

        <Text style={styles.line}>
          {i18n.t('current', { language: i18n.currentLocale() })}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 10,
    paddingVertical: 30
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  },
  line: {
    color: '#333333',
    marginBottom: 5
  }
});
