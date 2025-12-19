// LoginScreen.js
import React, { useState } from 'react';
import {
    Text,
    TextInput,
    View,
    Pressable,
    StyleSheet,
    Alert,
} from 'react-native';
import { colors } from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { saveAccessToken, saveRefreshToken } from '../../tokenStorage';
import { login } from '../api/auth';


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [showPwd, setShowPwd] = useState(false);

    const [ART, setART] = useState([]); // access, refresh token 저장용


    const saveToken = async (tokenResponse) => {
        try {
            console.log("saveToken raw:", tokenResponse);

            const { accessToken, refreshToken } = tokenResponse;
            console.log(accessToken, refreshToken);

            if (!accessToken || !refreshToken) {
                Alert.alert("로그인 실패", "토큰이 없습니다.");
                return;
            }

            await saveAccessToken(accessToken);
            await saveRefreshToken(refreshToken);

            navigation.navigate("Main");
        } catch (err) {
            console.error("saveToken ERROR:", err);
        }
    };


    const handleLogin = async () => {
        console.log(email, pwd);

        const temp = await login(email, pwd);

        // ❗ 로그인 실패 시
        if (!temp) {
            Alert.alert("로그인 실패", "이메일 또는 비밀번호를 확인하세요.");
            return;
        }
        console.log('temp');
        console.log(temp);

        // 성공한 경우만 실행
        setART(temp);
        await saveToken(temp);
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Text style={styles.title}>로그인</Text>

                {/* 이메일 */}
                <View style={styles.inputBox}>
                    <Text style={styles.label}>이메일</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="이메일을 입력하세요"
                        placeholderTextColor="gray"
                        style={styles.input}
                    />
                </View>

                {/* 비밀번호 */}
                <View style={styles.inputBox}>
                    <Text style={styles.label}>비밀번호</Text>

                    <View style={styles.passwordWrapper}>
                        <TextInput
                            secureTextEntry={!showPwd}
                            value={pwd}
                            onChangeText={setPwd}
                            placeholder="비밀번호를 입력하세요"
                            placeholderTextColor="gray"
                            style={[styles.input, { paddingRight: 50 }]}
                        />

                        <Pressable
                            onPress={() => setShowPwd(prev => !prev)}
                            style={styles.eyeButton}
                        >
                            <Text style={styles.eyeText}>
                                {showPwd ? 'hide' : 'show'}
                            </Text>
                        </Pressable>
                    </View>
                </View>

                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>로그인</Text>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('Signup')}
                    style={{ marginTop: 16 }}
                >
                    <Text style={{ color: colors.primary, textAlign: 'center' }}>
                        회원가입
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 24,
        marginTop: 60,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 32,
    },
    inputBox: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 6,
        fontSize: 14,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: "black",
    },
    button: {
        marginTop: 12,
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    passwordWrapper: {
        position: 'relative',
        justifyContent: 'center',
    },
    eyeButton: {
        position: 'absolute',
        right: 12,
        height: '100%',
        justifyContent: 'center',
    },
    eyeText: {
        fontSize: 15,
        color: colors.primary,
    },
});
