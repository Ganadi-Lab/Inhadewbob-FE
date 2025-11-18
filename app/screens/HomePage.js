import React, { useState } from 'react';
import { Button, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './Home.js';
import Roulette from './Roulette.js';
import Toggle from '../components/Toggle.js';

export default function HomePage({ navigation }) {
    const [homeType, setHomeType] = useState("홈");  // false: 홈, true: 룰렛

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor:"white" }}> 
                {/* 홈, 룰렛 토글 버튼 */}
                <View style={{ position: "absolute", paddingTop: 15, width: "100%", zIndex: 10 }}>
                    <Toggle
                        leftLabel="홈"
                        rightLabel="룰렛"
                        onToggle={(label) => setHomeType(label)} 
                    />
                </View>

                <ScrollView
                    style={{ flex: 1}}
                >
                    <View style={{height:70}} />
                    {/* 홈, 룰렛 페이지 import */}
                    {homeType === "홈" && <Home />}
                    {homeType === "룰렛" && <Roulette />}
                    
                    {/* <Button
                        title="로그인 페이지로 이동"
                        onPress={() => navigation.getParent().navigate("Login")}
                    /> */}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}