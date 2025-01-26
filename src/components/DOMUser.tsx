'use dom';
import "@/styles/global.css";
// import { Image, Text, View } from "react-native";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  onLogout: () => void;
};

export default function DOMUser({ title, subtitle, image, onLogout }: Props) {
  return (
    // <View>
    //   <Image
    //     source={{ uri: image }}
    //     style={{ width: 42, height: 42 }}
    //   />
    //   <Text style={{ color: '#000' }}>{title}</Text>
    //   <Text style={{ color: '#777' }}>{subtitle}</Text>
    // </View>

    <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
      <img
        src={image}
        alt="Foto do usuário"
        className="w-12 h-12 rounded-md"
        // style={{ width: 42, height: 42, borderRadius: 50, }}
      />
      <div style={{ flex: 1, marginLeft: 8 }}>
        <h2 style={{ color: '#000' }}>{title}</h2>
        <h2 style={{ color: '#777' }}>{subtitle}</h2>
      </div>
      <button
        onClick={() => onLogout()}
        style={{ backgroundColor: "transparent", color: '#FF0000' }}>Sair</button>
    </div>
  )
};