import React from "react";
import styles from "./CircleButton.module.css";

const CircleButton = (props) => {
  //{ text, onPress, imageUri, searchText }
  // const navigation = useNavigation();
  //navigation.navigate('SearchResults', {categoryValue:searchText}
  return (
    <div
      style={{
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        marginTop: 18,
      }}
    >
      <div
        className={styles.imageContainer}
        onClick={() => {
          //navigation.navigate('SearchResults', {categoryValue:searchText}
        }}
      >
        <img style={styles.image} src={props.imageUri} alt="" />
      </div>
      <div style={styles.text}>{props.text}</div>
    </div>
  );
};

// var stylesCategories = StyleSheet.create({
//   imageContainer: {
//     height: 80,
//     width: 80,
//     borderRadius: 50,
//     margin: 5,
//     backgroundColor: "#fff",

//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.39,
//     shadowRadius: 8.3,

//     elevation: 8,
//   },
//   image: {
//     height: 80,
//     width: 80,
//     borderRadius: 50,
//   },

//   text: {
//     color: "#575656",
//     fontSize: 15,
//     width: 100,
//     textAlign: "center",
//     fontFamily: "roboto",
//     fontWeight: "bold",
//   },
// });

export default CircleButton;
