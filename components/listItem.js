import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './style';

function listItem(props) {
  return props.bannedItems.map(item => {
    let banned = false;
    if (props.selectedItems.includes(item)) {
      banned = true;
    }
    return (
      <View style={styles.listItem} key={item.id}>
        <Button
          color="#DDA448"
          title={item.name}
          onPress={() => props.handlePress(item.name)}
        />
        {banned && <Text>❌</Text>}
      </View>
    );
  });
}

export default listItem;
