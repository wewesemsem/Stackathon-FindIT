import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './style';

export default function resultListItem(props) {
  return props.results.map(foundItem => {
    return (
      <Text style={styles.resultText} key={foundItem}>
        {foundItem}
      </Text>
    );
  });
}
