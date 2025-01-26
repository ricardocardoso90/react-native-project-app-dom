import { View } from "react-native";
import DOMUser from "@/components/DOMUser";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 32 }}>
      <DOMUser
        title="Ricardo Cardoso"
        subtitle="Desenvovedor Web/Mobile"
        image="https://github.com/ricardocardoso90.png"
      />
    </View>
  )
};