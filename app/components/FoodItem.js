import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { formatPrice3 } from '../utils/FormatPrice3';


export default function FoodItem({ item }) {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/TempImg.png')}
                    style={styles.Img}
                    resizeMode="contain"
                />

                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 15 }}>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontWeight: "bold" }}>{item.menu}</Text>
                        <Text>{item.store}</Text>
                    </View>

                    <Text style={{ color: colors.primary, fontWeight: "bold", fontSize: 17, }}>
                        {formatPrice3(item.price)}
                    </Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    outerContainer: {
        width: "100%",
        paddingVertical: 7,
    },
    Img:{
        height: 80,
        width: 80,
    },
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
    }
});