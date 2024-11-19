import { Dimensions } from "react-native";

const {width, height}=Dimensions.get('window')
export const colors = {
  yellow: `#cfd11a`,
  mint: `#00cc99`,
  red: "#e71d36",
  orangered: `#ff4500`,
  orange: `#ffa500`,
  lime: `#00ff00`,
  blue: `#2274a5f`,
  gold: `#ffd700`,
  white: "#fff",
  Cpink: "#3F9DEC9",
  Isabelline: "#D5BDAF",
  Grey: "#ced4da",
  black: "#00000",
  white1: "#fffcf2",
  logoColor: "#d73d07",
  logoBackground: "#f4ebca",
};
export const parameters = {
  headerHeight: width * 0.2,

  styledButton: {
    backgroundColor: "#f4ebca",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: width * 0.15,
    paddingHorizontal: 20,
    width: width * 0.9,
  },
  buttonTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    marginTop: -3,
  },
  styledButton2: {
    backgroundColor: "#d73d07",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: width * 0.15,
    paddingHorizontal: 20,
    width: width * 0.9,
  },
};