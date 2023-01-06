import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity, Text } from "react-native";
import { colors } from "../constants";

function UiButton(props) {
  const { onPress, title, isSelected } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        opacity: 0.4,
        borderColor: "white",
        borderWidth: 2,
        height: 40,
        height: 60,
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isSelected == true ? "white" : null,
      }}
    >
      {isSelected == true && (
        <Icon
          name={"check-circle"}
          style={{
            color: "green",
            fontSize: 30,
            position: "absolute",
            left: 10,
            top: 10,
          }}
        />
      )}
      <Text
        style={{
          color: isSelected == true ? colors.colorSelected : "white",
          fontSize: 17,
          fontWeight: "900",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default UiButton;
