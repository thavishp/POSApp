// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as AppContext from "../AppContext.bs.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as ReactNative from "react-native";

var styles = ReactNative.StyleSheet.create({
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
      }
    });

function Items(Props) {
  var context = React.useContext(AppContext.context);
  var setCharges = context.setCharges;
  var items = [
    {
      name: "Banana",
      price: 1.0
    },
    {
      name: "Apple",
      price: 2.0
    },
    {
      name: "Mango",
      price: 3.0
    }
  ];
  var items$1 = Belt_Array.mapWithIndex(items, (function (i, item) {
          return React.createElement(ReactNative.View, {
                      children: null,
                      key: String(i)
                    }, React.createElement(ReactNative.Text, {
                          children: item.name + "    Price: " + String(item.price)
                        }), React.createElement(ReactNative.Button, {
                          onPress: (function (_input) {
                              return Curry._1(setCharges, (function (prev) {
                                            return prev.concat([item.price]);
                                          }));
                            }),
                          title: "Charge " + item.name
                        }));
        }));
  return React.createElement(ReactNative.View, {
              style: styles.sectionContainer,
              children: items$1
            });
}

var make = Items;

export {
  styles ,
  make ,
  
}
/* styles Not a pure module */
