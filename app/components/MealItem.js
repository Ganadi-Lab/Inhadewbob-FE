import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import { formatPrice3 } from './../utils/FormatPrice3';
import { colors } from "../constants/colors";
import { formatDateTime2 } from "../utils/FormatDateTime2";
import { deleteDiet } from "../api/diets";

export default function MealItem({ item }) {

    const handleDelete = () => {
        Alert.alert(
            "삭제 확인",
            "이 식단 기록을 삭제하시겠어요?",
            [
                {
                    text: "취소",
                    style: "cancel",
                },
                {
                    text: "삭제",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await deleteDiet(item.id);
                        } catch (e) {
                            Alert.alert("오류", "삭제 중 문제가 발생했어요.");
                            console.error("deleteDiet error:", e);
                        }
                    },
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.outerContainer}>
            <View style={[styles.container, styles.box]}>
                {/* ❌ 삭제 버튼 */}
                <Pressable
                    hitSlop={10}
                    style={styles.closeButton}
                    onPress={handleDelete}
                >
                    <Image
                        source={require('../../assets/close.png')}
                        style={styles.closeIcon}
                        resizeMode="contain"
                    />
                </Pressable>

                {/* 이미지 */}
                <Image
                    source={require('../../assets/TempImg.png')}
                    style={styles.Img}
                    resizeMode="contain"
                />

                {/* 내용 */}
                <View style={styles.contentWrapper}>
                    <View>
                        <Text style={styles.dateText}>
                            {formatDateTime2(item.createdAt)}
                        </Text>

                        <Text style={styles.menuText}>
                            {item.menuName}
                        </Text>

                        <Text style={styles.storeText}>
                            {item.restaurantName}
                        </Text>
                    </View>

                    <Text style={styles.priceText}>
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
        paddingVertical: 10,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    box: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 18,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 7,
        elevation: 7,
        position: 'relative',
    },
    Img: {
        height: 60,
        width: 60,
        borderRadius: 12,
    },
    contentWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 15,
    },
    dateText: {
        fontSize: 12,
        color: "#9CA3AF",
        marginBottom: 2,
    },
    menuText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 2,
    },
    storeText: {
        fontSize: 13,
        color: "#6B7280",
    },
    priceText: {
        color: colors.primary,
        fontWeight: "700",
        fontSize: 17,
    },
    closeButton: {
        position: 'absolute',
        top: 14,
        right: 14,
        zIndex: 10,
    },
    closeIcon: {
        width: 13,
        height: 13,
        tintColor: '#9CA3AF',
    },
});
