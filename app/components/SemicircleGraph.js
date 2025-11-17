import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const data = [
  { value: 500000-100000, color: "#6babffff" },
  { value: 100000, color: "#4A84FF12" },
];

export default function SemicircleGraph() {
    // react-native-gifted-charts
    // https://www.npmjs.com/package/react-native-gifted-charts
    // npx expo install react-native-gifted-charts expo-linear-gradient react-native-svg

    return (
        <View style={{ alignItems: "center", marginTop: -20 }}>
            <PieChart
                data={data}
                radius={150}
                innerRadius={110}
                semiCircle={true}
                labelsPosition="mid"
                spacing={2}
                showTooltip={true}
                strokeWidth={2}
                strokeColor="#fff"

                focusedPieIndex={0}
                extraRadius={20}  

                isAnimated={true} 
                animationDuration={1000}

                centerLabelComponent={() => (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                </View>
                )}

            />

            {/* PieChart 위에 겹치게 표시 -> 가운데 text 표시*/}
            <View
                style={{
                    position: "absolute",
                    top: 60,
                    alignItems: "center",
                    justifyContent: "center",
                    width: 300,
                    height: 150,
                }}
            >
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 2 }}>
                    이번주 예산 사용량
                </Text>
                <Text style={{ fontSize: 48, fontWeight: "900", color: "#4A84FF", lineHeight: 48 }}>
                    10%
                </Text>
            </View>
        </View>
    );
};
