import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  hdrText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 22
  },
  backbtn: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    left: 10
  },
  TitleText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  bodyText:{
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginTop:10
  },
  cardView: {
    alignSelf: 'center',
    width: '92%',
    backgroundColor: "#cd6ad8",
    borderRadius: 20,
    padding: 18,
    marginVertical: 5,
    marginHorizontal: 8,
    top: 30,
    justifyContent: 'center'
  },
});
