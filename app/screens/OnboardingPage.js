import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from "react";
import { colors } from '../constants/colors';


export default function OnboardingPage({ navigation }) {
    const [page, setPage] = useState(1);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <Pressable style={styles.skip} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.skipText}>건너뛰기</Text>
                </Pressable>

                {/* 이미지 영역 */}
                <View style={styles.imageWrapper}>
                    <Image
                        source={
                            page === 1
                                ? require('../../assets/onboarding1.png')
                                : page === 2
                                    ? require('../../assets/onboarding2.png')
                                    : require('../../assets/onboarding3.png')
                        }
                        style={styles.img}
                        resizeMode="contain"
                    />
                </View>

                {/* dots */}
                <View style={styles.dots}>
                    {[1, 2, 3].map((i) => (
                        <View
                            key={i}
                            style={[styles.dot, page === i && styles.activeDot]}
                        />
                    ))}
                </View>

                {/* 버튼 */}
                <Pressable
                    style={styles.nextButton}
                    onPress={() => {
                        page === 3 ? navigation.navigate("Login") : setPage(page + 1);
                    }}
                >
                    <Text style={styles.nextText}>
                        {page === 3 ? "시작하기" : "다음"}
                    </Text>
                </Pressable>
            </View>


        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
    },

    skip: {
        position: "absolute",
        top: 12,
        right: 20,
        zIndex: 10,
    },
    skipText: {
        color: "#999",
        fontSize: 14,
    },

    imageWrapper: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
    },
    img: {
        width: "85%",
        alignSelf: "center",
    },

    dots: {
        flexDirection: "row",
        marginBottom: 24,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ddd",
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: colors.primary,
    },

    nextButton: {
        backgroundColor: colors.primary,
        paddingVertical: 14,
        paddingHorizontal: 90,
        borderRadius: 14,
        marginBottom: 40,
    },
    nextText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },

});
