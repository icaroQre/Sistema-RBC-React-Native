import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";

const HamburgerMenu = ({ onPress }) => {
  const [open, setOpen] = useState(false);

  const handlePress = () => {
    setOpen(!open);
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={handlePress}
        title="Menu"
        style={styles.button}
      />
      {open && (
        <View style={styles.menu}>
          <Button onPress={onPress} title="Menu" />
          <Button onPress={onPress} title="Entrar/Registrar" />
          <Button onPress={onPress} title="Sair" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#000",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  menu: {
    position: "absolute",
    top: 50,
    left: 0,
    width: "100%",
    backgroundColor: "#fff",
    zIndex: 9,
  },
});

export default HamburgerMenu;
