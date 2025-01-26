'use dom';
// import { Image, Text, View } from "react-native";

type Props = {
  name: string;
  image: string;
};

export default function DOMUser({ name, image }: Props) {
  return (
    // <View>
    //   <Image
    //     source={{ uri: image }}
    //     style={{ width: 42, height: 42 }}
    //   />
    //   <Text>{name}</Text>
    // </View>

    <div>
      <img
        src={image}
        alt="Foto do usuário"
      />
      <span>{name}</span>
    </div>
  )
};