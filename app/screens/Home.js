import { Button, Text, View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SemicircleGraph from '../components/SemicircleGraph';
import BarGraph2 from '../components/BarGraph2';
import BarGraph1 from '../components/BarGraph1';
import BarGraph3 from '../components/BarGraph3';


export default function Home({ navigation }) {
    return (
        <SafeAreaView> 
            <View>
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


                <View style={{ height:100 }}></View>
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
});