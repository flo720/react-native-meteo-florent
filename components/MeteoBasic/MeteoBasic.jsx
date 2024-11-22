import { Image, View } from "react-native";
import { Txt } from "../Txt/txt";
import { s } from "./MeteoBasic.style";

export function MeteoBasic({ temperature, city }) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>

      <Txt>{city}</Txt>

      <Txt style={s.weather_label}>Label</Txt>

      <View style={s.temperatureContainer}>
        <Txt style={s.temperature}>{temperature}°</Txt>
        <Image style={s.image} />
      </View>
    </>
  );
}
