import {View, StyleSheet, Platform} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../res/colors';

interface CoinsSearchPropsI {
  onChange: (query: string) => void;
}

export const CoinsSearch = ({onChange}: CoinsSearchPropsI) => {
  const [query, setQuery] = useState('');
  return (
    <View>
      <TextInput
        value={query}
        onChangeText={text => {
          setQuery(text);
          onChange(text);
        }}
        style={
          (styles.textInput,
          Platform.OS === 'ios' ? styles.textInputIOS : styles.textInputAndroid)
        }
        placeholder="Search coin"
        placeholderTextColor={'#fff'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 16,
    color: '#fff',
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: colors.zircon,
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8,
  },
});
