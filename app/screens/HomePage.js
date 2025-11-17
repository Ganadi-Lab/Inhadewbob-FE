import React, { useState } from 'react';
import { Button, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './Home.js';
import Roulette from './Roulette.js';
import Toggle from '../components/Toggle.js';

export default function HomePage({ navigation }) {
    const [homeType, setHomeType] = useState("홈");  // false: 홈, true: 룰렛

    return (
        <SafeAreaView style={{ backgroundColor:"white"}}> 
            {/* 홈, 룰렛 토글 버튼 */}
            <Toggle 
                leftLabel="홈"
                rightLabel="룰렛"
                onToggle={(label) => setHomeType(label)} 
            />

            <ScrollView>
                {/* 홈, 룰렛 페이지 import */}
                {homeType === "홈" && <Home />}
                {homeType === "룰렛" && <Roulette />}
                
                <Button
                    title="로그인 페이지로 이동"
                    onPress={() => navigation.getParent().navigate("Login")}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
