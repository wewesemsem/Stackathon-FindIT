import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './style';

function listItem(props) {
  console.log('rendering itemsList', props.bannedItems);
  return props.bannedItems.map(item => {
    let banned = false;
    if (props.selectedItems.includes(item)) {
      console.log('found a banned item', item);
      banned = true;
    }
    return (
      <View style={styles.container} key={item}>
        <Button  
          title={item}
          onPress={() => props.handlePress(item)}
        />
        {banned && <Text>Banned </Text>}
      </View>
    );
  });
}

export default listItem;
