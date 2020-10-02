import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ItemScreen from "./src/screens/ItemScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Item: ItemScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
