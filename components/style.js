import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23395B',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  barCodeScanner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  list: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  navigate: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#FFF689',
    opacity: 0.8,
    borderRadius: 10,
  },
  text: {
    color: '#FFF689',
    // fontWeight: 'bold',
    fontSize: 25,
  },
  text2: {
    color: '#DDA448',
    // fontWeight: 'bold',
    fontSize: 20,
  },
  resultText: {
    color: '#fff',
    fontSize: 25,
  },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    opacity: 7,
  },
});

export default styles;
