import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './style';

function listItem(props) {
  return props.bannedItems.map(item => {
    return (
      <View style={styles.listItem} key={item.id}>
        <Text style={styles.text2}> {item.name} </Text>
        <Button
          color=""
          title={'x'}
          onPress={() => {
            props.deleteItem(item);
          }}
        />
      </View>
    );
  });
}

export default listItem;
