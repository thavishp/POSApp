// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Home from "./components/Home.bs.js";
import * as Items from "./components/Items.bs.js";
import * as React from "react";
import * as AppContext from "./AppContext.bs.js";
import * as NativeBase from "native-base";
import * as ReactNative from "react-native";
import * as Stack$ReactNavigation from "rescript-react-navigation/src/Stack.bs.js";
import * as Native from "@react-navigation/native";

var StakeParams = {};

var include = Stack$ReactNavigation.Make(StakeParams);

var $$Screen = include.$$Screen;

var $$Navigator = include.$$Navigator;

function App$MainStackScreen(Props) {
  return React.createElement($$Navigator.make, {
              children: null
            }, React.createElement($$Screen.make, {
                  name: "Home",
                  options: (function (props) {
                      var params = props.route.params;
                      return {
                              headerRight: (function (param) {
                                  return React.createElement(ReactNative.Button, {
                                              onPress: (function (param) {
                                                  props.navigation.navigate("Items");
                                                  
                                                }),
                                              title: "Items"
                                            });
                                }),
                              title: params !== undefined ? params.name : "Home"
                            };
                    }),
                  component: Home.make
                }), React.createElement($$Screen.make, {
                  name: "Items",
                  options: (function (props) {
                      var params = props.route.params;
                      return {
                              title: params !== undefined ? params.name : "Home"
                            };
                    }),
                  component: Items.make
                }));
}

var MainStackScreen_Navigation = include.Navigation;

var MainStackScreen_HeaderTitle = include.HeaderTitle;

var MainStackScreen_Header = include.Header;

var MainStackScreen_stack = include.stack;

var MainStackScreen_ScreenWithCallback = include.ScreenWithCallback;

var MainStackScreen = {
  StakeParams: StakeParams,
  Navigation: MainStackScreen_Navigation,
  HeaderTitle: MainStackScreen_HeaderTitle,
  Header: MainStackScreen_Header,
  stack: MainStackScreen_stack,
  ScreenWithCallback: MainStackScreen_ScreenWithCallback,
  $$Screen: $$Screen,
  $$Navigator: $$Navigator,
  make: App$MainStackScreen
};

var include$1 = Stack$ReactNavigation.Make({});

var $$Screen$1 = include$1.$$Screen;

var $$Navigator$1 = include$1.$$Navigator;

function App$RootStackScreen(Props) {
  return React.createElement(Native.NavigationContainer, {
              children: React.createElement($$Navigator$1.make, {
                    mode: "card",
                    headerMode: "none",
                    children: React.createElement($$Screen$1.make, {
                          name: "Main",
                          component: App$MainStackScreen
                        })
                  })
            });
}

var RootStackScreen_Navigation = include$1.Navigation;

var RootStackScreen_HeaderTitle = include$1.HeaderTitle;

var RootStackScreen_Header = include$1.Header;

var RootStackScreen_stack = include$1.stack;

var RootStackScreen_ScreenWithCallback = include$1.ScreenWithCallback;

var RootStackScreen = {
  Navigation: RootStackScreen_Navigation,
  HeaderTitle: RootStackScreen_HeaderTitle,
  Header: RootStackScreen_Header,
  stack: RootStackScreen_stack,
  ScreenWithCallback: RootStackScreen_ScreenWithCallback,
  $$Screen: $$Screen$1,
  $$Navigator: $$Navigator$1,
  make: App$RootStackScreen
};

function app(param) {
  var match = React.useState(function () {
        return [];
      });
  var settings_charges = match[0];
  var settings_setCharges = match[1];
  var settings = {
    charges: settings_charges,
    setCharges: settings_setCharges
  };
  return React.createElement(AppContext.Provider.make, {
              value: settings,
              children: React.createElement(NativeBase.NativeBaseProvider, {
                    children: React.createElement(App$RootStackScreen, {})
                  })
            });
}

export {
  MainStackScreen ,
  RootStackScreen ,
  app ,
  
}
/* include Not a pure module */
