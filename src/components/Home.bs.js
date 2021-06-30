// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Int from "bs-platform/lib/es6/belt_Int.js";
import * as AppContext from "../AppContext.bs.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as NativeBase from "native-base";
import * as ReactNative from "react-native";

var styles = ReactNative.StyleSheet.create({
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: "600"
      },
      sectionDescription: {
        fontSize: 18,
        fontWeight: "400",
        marginTop: 8
      },
      highlight: {
        fontWeight: "700"
      }
    });

function Home(Props) {
  var context = React.useContext(AppContext.context);
  var text = context.text;
  var setText = context.setText;
  var charges = context.charges;
  var setCharges = context.setCharges;
  var chargesList = Belt_Array.mapWithIndex(charges, (function (i, charge) {
          return React.createElement(ReactNative.Text, {
                      children: String(charge),
                      key: String(i)
                    });
        }));
  var buttonPressed = function (_input) {
    if (text === "") {
      return ;
    }
    var val = Belt_Int.fromString(text);
    if (val !== undefined) {
      return Curry._1(setCharges, (function (prev) {
                    return prev.concat([val]);
                  }));
    } else {
      console.log("Enter a numerical value");
      return ;
    }
  };
  var onChangeText = function (input) {
    return Curry._1(setText, (function (_prev) {
                  return input;
                }));
  };
  return React.createElement(ReactNative.SafeAreaView, {
              children: null
            }, React.createElement(ReactNative.View, {
                  style: styles.sectionContainer,
                  children: null
                }, React.createElement(ReactNative.Button, {
                      onPress: buttonPressed,
                      title: "Charge"
                    }), React.createElement(ReactNative.TextInput, {
                      keyboardType: "numeric",
                      onChangeText: onChangeText,
                      onSubmitEditing: buttonPressed,
                      placeholder: "placeholder text",
                      value: text
                    }), React.createElement(ReactNative.View, {
                      style: styles.sectionContainer,
                      children: null
                    }, React.createElement(ReactNative.Text, {
                          children: "Charges:"
                        }), React.createElement(ReactNative.ScrollView, {
                          children: chargesList
                        }))), React.createElement(NativeBase.Center, {
                  children: React.createElement(NativeBase.VStack, {
                        children: null,
                        space: 3
                      }, React.createElement(NativeBase.HStack, {
                            children: null,
                            space: 3,
                            alignItems: "center"
                          }, React.createElement(NativeBase.Center, {
                                children: "1",
                                size: 16,
                                bg: "dark.400",
                                rounded: "md",
                                shadow: 3
                              }), React.createElement(NativeBase.Center, {
                                children: "2",
                                size: 16,
                                bg: "dark.400",
                                rounded: "md",
                                shadow: 3
                              }), React.createElement(NativeBase.Center, {
                                children: "3",
                                size: 16,
                                bg: "dark.400",
                                rounded: "md",
                                shadow: 3
                              })), React.createElement(NativeBase.HStack, {
                            children: null,
                            space: 3,
                            alignItems: "center"
                          }, React.createElement(NativeBase.Center, {
                                children: "4",
                                size: 16,
                                bg: "dark.400",
                                rounded: "md",
                                shadow: 3
                              }), React.createElement(NativeBase.Center, {
                                children: "5",
                                size: 16,
                                bg: "dark.400",
                                rounded: "md",
                                shadow: 3
                              }), React.createElement(NativeBase.Center, {
                                children: "6",
                                size: 16,
                                bg: "dark.400",
                                rounded: "md",
                                shadow: 3
                              })), React.createElement(NativeBase.HStack, {
                            children: null,
                            space: 3,
                            alignItems: "center"
                          }, React.createElement(NativeBase.Center, {
                                children: "7",
                                size: 16,
                                bg: "dark.400",
                                rounded: "md",
                                shadow: 3
                              }), React.createElement(NativeBase.Center, {
                                children: "8",
                                size: 16,
                                bg: "dark.400",
                                rounded: "md",
                                shadow: 3
                              }), React.createElement(NativeBase.Center, {
                                children: "9",
                                size: 16,
                                bg: "dark.400",
                                rounded: "md",
                                shadow: 3
                              }))),
                  py: 10
                }));
}

var make = Home;

export {
  styles ,
  make ,
  
}
/* styles Not a pure module */
