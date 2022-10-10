import React, { useContext, useState, useCallback } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Switch, Button, Linking, Image } from "react-native";
import { Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Context } from "../etc/SettingsContext";
import { useTheme } from "react-native-paper";
import { Checkbox } from 'react-native-paper';
import TimeZone from 'react-native-timezone';
import NumericInput from 'react-native-numeric-input'





export default function Settings() {

 var state1 = {
      rated: false
    }
  const [isOpenRating, setOpenRating] = useState(true);
  const { state, toggle_darkmode } = useContext(Context);
  const { colors } = useTheme();
   const ratingtheme = {}
   const supportedURL="https://play.google.com/store/apps/details?id=com.d99.reminders"
   const privPolicyUrl="https://docs.google.com/document/d/e/2PACX-1vQw2XeTaC2JNxYdAndzQ9VTNBROXBilu466ElbR7vosvQpExBFrjrLMQ83I0OMCxJv_rp-kwgVt6d-E/pub"

   const OpenURLButton = (
{
url
, children
}
) => {
const handlePress
= useCallback(async () =>
{
const supported = await Linking.canOpenURL(url);
if (supported) {
await Linking.openURL(url);
}
}, [url]);
return( <TouchableOpacity
title={children}
onPress={handlePress}
style={{marginRight:20}}
>
<AntDesign name={"star"} size={40} color={colors.text}/>
</TouchableOpacity>
)
};
const OpenURLButton1 = (
  {
  url
  , children
  }
  ) => {
  const handlePress
  = useCallback(async () =>
  {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
  await Linking.openURL(url);
  }
  }, [url]);
  return( <TouchableOpacity
  title={children}
  onPress={handlePress}
  style={{marginRight:20}}
  >
<MaterialIcons name="policy" size={40} color={colors.text} />  
</TouchableOpacity>
  )
  };
const Separator = () => (
<View style={styles.separator} />
);



 const getTimeZone = async() => {
 const timeZone = await TimeZone.getTimeZone().then(zone => zone);
}


  return (
  <View style={styles.container}>
      <View style={styles.TitleContainer}>
        <Text style={[styles.text, { fontSize: 45, color: colors.text }]}>
          Settings
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text style={[styles.text, { color: colors.text }]}>Theme</Text>

         <TouchableOpacity onPress={toggle_darkmode}>
            <Feather
              name={state.Theme ? "moon" : "sun"}
              size={40}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>
              <View
        style={{
          marginHorizontal: 0,
        }}
      >
      

      
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >

 
        </View>
      </View>
      </View>
      <View style={styles.TitleContainer}>
        <Text style={[styles.text, { fontSize: 45, color: colors.text }]}>
          About
        </Text>
      </View>
      <Text
        style={[
          styles.text,
          { color: colors.text, fontSize: 20, marginHorizontal: 20 },
        ]}
      >
        It's a simple to use app that can handle all your reminders {"\n"}{"\n"}Made by Dhyan Tanna
      </Text>
       <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
      <Text style={[
          styles.text,
          { color: colors.text, fontSize: 20, marginHorizontal: 20 },
        ]}>Enjoying the app?{"\n"}Leave a rating
      </Text>
<OpenURLButton url={supportedURL}>Click to Visit our Website</OpenURLButton>

        
</View>
<View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
      <Text style={[
          styles.text,
          { color: colors.text, fontSize: 20, marginHorizontal: 20 },
        ]}>Privacy Policy
      </Text>
<OpenURLButton1 url={privPolicyUrl}>sample text</OpenURLButton1>
        
</View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  TitleContainer: {
    justifyContent: "center",
    marginHorizontal: 15,
    marginVertical: 20,
  },
  text: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 24,
  },
});
