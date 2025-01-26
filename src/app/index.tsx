import { Alert, View } from "react-native";
import DOMUser from "@/components/DOMUser";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <DOMUser
        title="Ricardo Cardoso"
        subtitle="Desenvovedor Web/Mobile"
        image="https://github.com/ricardocardoso90.png"
        onLogout={() => Alert.alert("Deseja realmente sair?")}
      />
    </View>
  )
};