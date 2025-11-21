import { Button, Text, View, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SemicircleGraph from '../components/SemicircleGraph';
import BarGraph2 from '../components/BarGraph2';
import BarGraph1 from '../components/BarGraph1';
import BarGraph3 from '../components/BarGraph3';
import { colors } from '../constants/colors';
import { formatPrice3 } from '../utils/FormatPrice3';


const data = [
    { value: 360000, label: '10월 2주차', frontColor: colors.graphSubColor },
    { value: 230000, label: '10월 3주차', frontColor: colors.graphSubColor },
    { value: 120000, label: '10월 4주차', frontColor: colors.primary },
];

const screenWidth = Dimensions.get('window').width;

export default function Home({ navigation, setHomeType }) {
    // 최대값 구해서 비율 계산
    const maxValue = Math.max(...data.map(item => item.value));
    const barMaxHeight = 120; // 막대 최대 높이(px)

    return (
        <SafeAreaView>
            <View style={{ width: "90%", margin: "auto" }}>
                <View>
                    <Image
                        source={require('../../assets/ganadi-hug.png')}
                        style={{ width: "100%", height: 150 }}  // height 지정 말고 방법이 있을지...
                        resizeMode="contain"
                    />


                    <View
                        style={{
                            width: "100%",
                            borderColor: "black",
                            borderWidth: 1,
                            borderRadius: 20,
                            paddingVertical: 20, paddingHorizontal: 30,
                        }}
                    >
                        <Text style={{ fontWeight: "bold" }}>이번 주 지출 현황</Text>

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text>사용 금액</Text>
                            <Text>{formatPrice3(35000)} / {formatPrice3(50000)}</Text>
                        </View>


                        {/* <BarGraph1 /> */}
                        {/* BarGraph1의 padding 조절이 안되어서 차라리 그냥 만드는게 베스트... */}
                        <View
                            style={{
                                height: 20, width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                backgroundColor: colors.graphSubColor,
                                borderRadius: 10,
                                marginVertical: 20,
                            }}
                        >
                            <View style={{ backgroundColor: colors.primary, borderRadius: 10, height: 20, width: "10%" }}></View>
                            <View style={{ backgroundColor: colors.graphSubColor, borderRadius: 10, height: 20, width: "90%" }}></View>
                        </View>

                        <View style={{ flexDirection: "row", margin: "auto" }}>
                            <Image
                                source={require('../../assets/down-arrow-green.png')}
                                style={{ width: 16 }}
                                resizeMode="contain"
                            />
                            <Text style={{ fontSize: 16, color: "#4CC55E" }}> 지난 주 대비 {formatPrice3(-5000)}</Text>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        width: "85%", height: "60",
                        margin: "auto",
                        marginVertical: 25,
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    <Pressable
                        onPress={() => setHomeType("룰렛")}
                        style={{
                            width: "47%",
                            backgroundColor: colors.primary,
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingVertical: 10
                        }}
                    >
                        <Text>룰렛</Text>
                    </Pressable>
                    <Pressable
                        style={{
                            width: "47%",
                            backgroundColor: "#FFE66D",
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingVertical: 10
                        }}>
                        <Text>식당 검색</Text>
                    </Pressable>
                </View>


                <View
                    style={{
                        width: "100%",
                        borderColor: "black",
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingVertical: 20,
                        paddingHorizontal: 30,
                        margin: "auto"
                    }}
                >
                    <Text>주차별 비교</Text>

                    {/* <BarGraph3 /> */}
                    {/* BarGraph3의 padding 조절이 안되어서 차라리 그냥 만드는게 베스트... */}
                    <View style={styles.container}>
                        <View style={styles.barContainer}>
                            {data.map((item, index) => {
                                // 각 막대의 높이를 계산
                                // item.value / maxValue : 현재 값이 최대 값에 대한 비율
                                // * barMaxHeight : 해당 비율을 막대 최대 높이에 곱하여 실제 픽셀 높이 계산
                                const barHeight = (item.value / maxValue) * barMaxHeight;

                                return (
                                    <View key={index} style={styles.barWrapper}>
                                        <Text style={styles.label}>{formatPrice3(item.value)}</Text>
                                        <View
                                            style={[
                                                styles.bar,
                                                { height: barHeight, backgroundColor: item.frontColor },
                                            ]}
                                        />
                                        <View style={styles.xAxisLine} />
                                        <Text style={styles.label}>{item.label}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </View>

                <Text>버전1</Text>
                {/* 이번주 예산 사용률 v1*/}
                <BarGraph1 />

                {/* 주차별 비교 */}
                <View style={styles.line} />
                <View>
                    <Text>이번 주 지출/목표 비용</Text>
                </View>
                <View>
                    <Text>5,250/250,000 원</Text>
                </View>


                <View style={styles.line} />
                <View>
                    <Text>지난 주 대비 +/-</Text>
                </View>
                <View>
                    <Text>-62,000 원</Text>
                </View>


                <View style={{ height: 100 }}></View>
                <Text>버전2</Text>
                {/* 이번주 예산 사용률 v2*/}
                <SemicircleGraph />

                {/* 주차별 비교 */}
                <Text>지난주보다 ₩3,600 증가했듀</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "80%" }}>
                    <View>
                        <Text>이번주 지출</Text>
                        <Text>₩50,000</Text>
                    </View>
                    <View>
                        <Text>목표 금액</Text>
                        <Text>₩250,000</Text>
                    </View>
                    <View>
                        <Text>남은 금액</Text>
                        <Text>₩200,000</Text>
                    </View>
                </View>


                {/* 주차별 비교 */}
                <Text>주차별 비교</Text>
                <BarGraph2 />
                <BarGraph3 /> {/* 둘 중 하나 사용 */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    container: {
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '100%',
    },
    barContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',   // 왼쪽부터 쭉 배치
        alignItems: 'flex-end',
    },
    barWrapper: {
        width: 80,  // x축 줄 때문에 그냥 marginHorizontal 말고 width로 조정
        alignItems: 'center',
        // marginHorizontal: 10,   // 막대 사이 간격
    },
    bar: {
        width: 40,
        borderRadius: 6,
    },
    xAxisLine: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
        marginBottom: 4,  // 막대와 레이블 사이 간격
    },
    label: {
        marginVertical: 5,
        fontSize: 12,
        textAlign: 'center',
    },
});

