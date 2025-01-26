'use dom';
import "@/styles/global.css";
// import { Image, Text, View } from "react-native";

type Props = {
  title: string;
  subtitle: string;
  image: string;
};

export default function DOMUser({ title, subtitle, image }: Props) {
  return (
    // <View>
    //   <Image
    //     source={{ uri: image }}
    //     style={{ width: 42, height: 42 }}
    //   />
    //   <Text style={{ color: '#000' }}>{title}</Text>
    //   <Text style={{ color: '#777' }}>{subtitle}</Text>
    // </View>

    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={image}
        alt="Foto do usuário"
        // style={{ width: 42, height: 42, borderRadius: 50, }}
        className="w-12 h-12 rounded-md"
      />
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
        <span style={{ color: '#000' }}>{title}</span>
        <span style={{ color: '#777' }}>{subtitle}</span>
      </div>
    </div>
  )
};