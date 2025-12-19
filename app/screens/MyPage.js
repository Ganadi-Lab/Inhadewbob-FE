import { Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { getProfile, patchProfile } from '../api/profile';
import styles from '../styles/MyPage.styles';
import { logout } from '../api/auth';

export default function MyPage({ navigation }) {
    const [profile, setProfile] = useState({
        nickname: '',
        email: '',
        weeklyBudget: '',
        weeklyEatingOut: '',
    });

    useEffect(() => {
        (async () => {
            try {
                const data = await getProfile();
                setProfile({
                    nickname: data?.nickname ?? '',
                    email: data?.email ?? '',
                    weeklyBudget: String(data?.weeklyBudget ?? ''),
                    weeklyEatingOut: String(data?.eatoutCount ?? ''),
                });
            } catch (e) {
                console.log('MyPage FetchProfile 실패');
            }
        })();
    }, []);

    const saveWeeklySetting = async () => {
        try {
            await patchProfile(profile.weeklyBudget, profile.weeklyEatingOut);
        } catch (e) {
            console.log('saveWeeklySetting 실패');
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        } catch (e) {
            console.log('로그아웃 실패');
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* 프로필 */}
                    <View style={[styles.box, { marginBottom: 30 }]}>
                        <View style={styles.profileBox}>
                            <View style={styles.avatarWrapper}>
                                <Image
                                    source={require('../../assets/ganadi.png')}
                                    style={styles.avatar}
                                />
                            </View>

                            <View>
                                <Text style={styles.userName}>
                                    {profile.nickname || 'User Name'}
                                </Text>
                                <Text style={styles.userEmail}>
                                    {profile.email || ''}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* 주별 설정 */}
                    <Text style={styles.settingText}>주별 설정</Text>
                    <View style={[styles.box, { marginBottom: 30 }]}>
                        <View style={styles.settingRow}>
                            <Text style={styles.text}>주별 예산</Text>
                            <View style={styles.inlineBox}>
                                <TextInput
                                    style={styles.textInput}
                                    value={profile.weeklyBudget}
                                    onChangeText={(t) =>
                                        setProfile({
                                            ...profile,
                                            weeklyBudget: t.replace(/[^0-9]/g, ''),
                                        })
                                    }
                                    keyboardType="numeric"
                                    returnKeyType="done"
                                    onEndEditing={saveWeeklySetting}
                                />
                            </View>
                        </View>

                        <View style={styles.line} />

                        <View style={styles.settingRow}>
                            <Text style={styles.text}>주별 외식 횟수</Text>
                            <View style={styles.inlineBox}>
                                <TextInput
                                    style={styles.textInput}
                                    value={profile.weeklyEatingOut}
                                    onChangeText={(t) =>
                                        setProfile({
                                            ...profile,
                                            weeklyEatingOut: t.replace(/[^0-9]/g, ''),
                                        })
                                    }
                                    keyboardType="numeric"
                                    returnKeyType="done"
                                    onEndEditing={saveWeeklySetting}
                                />
                            </View>
                        </View>
                    </View>

                    {/* 사용자 설정 */}
                    <Text style={styles.settingText}>사용자 설정</Text>
                    <View style={styles.box}>
                        {[
                            '연동 계정',
                            '사용자 이름 변경',
                            '프로필 사진 변경',
                            '로그아웃',
                            '탈퇴하기',
                        ].map((menu, index) => {
                            const isLogout = menu === '로그아웃';

                            return (
                                <React.Fragment key={menu}>
                                    <Pressable
                                        onPress={isLogout ? handleLogout : undefined}
                                        style={({ pressed }) => [
                                            styles.userRow,
                                            pressed && isLogout && { backgroundColor: '#F3F4F6' },
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                styles.text,
                                                isLogout && { color: '#EF4444', fontWeight: '600' },
                                            ]}
                                        >
                                            {menu}
                                        </Text>

                                        <Image
                                            source={require('../../assets/right-arrow.png')}
                                            style={styles.arrowRight}
                                        />
                                    </Pressable>

                                    {index < 4 && <View style={styles.line} />}
                                </React.Fragment>
                            );
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
