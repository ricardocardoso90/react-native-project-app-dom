import { View } from "react-native";
import DOMUser from "@/components/DOMUser";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 32 }}>
      <DOMUser
        name="Ricardo Cardoso"
        image="https://github.com/ricardocardoso90.png"
      />
    </View>
  )
};