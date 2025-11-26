import { Pressable, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { FoodCategory } from './../../assets/FoodCategory';
import { colors } from "../constants/colors";
import { useEffect, useState } from "react";


export default function BudgetCategoryBottomSheet({ 
    selectedBudget, setSelectedBudget, checked, setChecked
}) {
    const [saved, setSaved] = useState(true);
    
    // bottomSheet 내부 예산, 카테고리(체크) 저장 변수
    const [budg, setbudg] = useState(selectedBudget);
    const [selec, setSelec] = useState(checked);

    
    // 체크했을 때, 체크하는 함수
    const toggle = (id) => {
        setSelec((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const handleBottomSheetSetting = async () => {
        console.log(selec, budg);
        await setChecked(selec);
        await setSelectedBudget(budg);

        setSaved(true);
    }


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 20}    // 키보드 나올 때 고려해서 offset 만듦.
        >
            <View style={{ padding: 30 }}>
                <Text style={styles.title}>오늘의 예산 · 카테고리</Text>

                {/* 예산 */}
                <View style={{ marginVertical: 12 }}>
                    <Text style={styles.subTitle}>한 끼 예산</Text>
                    <TextInput
                        keyboardType="number-pad"
                        placeholder="가격을 입력하세요. (예: 8000)"
                        defaultValue={(selectedBudget && selectedBudget != 0) ? selectedBudget : ""}
                        style={styles.input}
                        onChangeText={text => {
                            setbudg(text);
                            setSaved(false);
                        }}
                    />

                </View>

                <View style={{padding: 10}}></View>

                {/* 음식 카테고리 */}
                <View>
                    <Text style={styles.subTitle}>카테고리</Text>
                    <View style={styles.tagContainer}>
                        {FoodCategory.map((item) => {
                            const isChecked = selec.includes(item.id);
                            return (
                                <Pressable
                                    key={item.id}
                                    style={[
                                        styles.tag,
                                        isChecked && styles.tagSelected
                                    ]}
                                    onPress={() => {
                                        toggle(item.id);
                                        setSaved(false);
                                    }}
                                >
                                    <Text style={[
                                        styles.tagText,
                                        isChecked && styles.tagSelectedText
                                    ]}>
                                        #{item.label}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </View>
                </View>

                <Pressable
                    onPress={handleBottomSheetSetting}
                    style={{
                        width: "100%",
                        backgroundColor: saved ? colors.primary : "white",
                        borderColor: colors.primary,
                        borderRadius: 10,
                        borderWidth: 1,
                        paddingVertical: 13,
                        marginTop: 30
                    }}
                >
                    <Text 
                        style={{ 
                            color: saved ? "white" : colors.primary,
                            fontWeight: "30", 
                            fontSize: 20, 
                            textAlign: "center" 
                        }}>
                        설정 완료
                    </Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 16,
        textAlign:"center"
    },
    subTitle: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        padding: 10,
        marginTop: 8,
    },
    tagContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        justifyContent: "center"
    },
    tag: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 30,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
    },
    tagText: {
        fontSize: 15,
        color: "#333"
    },
    tagSelected: {
        backgroundColor: colors.primary,
        borderWidth: 0,
    },
    tagSelectedText: {
        color: "#fff",
        fontWeight: "bold"
    }
});
