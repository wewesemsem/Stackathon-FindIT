import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './style';

function listItem(props) {
  return props.bannedItems.map(item => {
    return (
      <View style={styles.listItem} key={item.id}>
        <Button color="#DDA448" title={item.name} />
      </View>
    );
  });
}

export default listItem;
