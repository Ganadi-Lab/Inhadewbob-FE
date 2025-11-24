import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native';
import Home from '../screens/Home';
import MealLog from '../screens/MealLog';
import MyPage from '../screens/MyPage';
import Setting from '../screens/Setting';
import Roulette from "../screens/Roulette";

const Tab = createBottomTabNavigator();
const LOGO = '../../assets/LOGO2.png';


function BottomTab({navigation}) {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#fb8c00',
                tabBarShowLabel: true,
                tabBarIcon: () => null,
            }}
        >
            <Tab.Screen
                name="홈"
                component={Home}
                options={{
                    headerTitle: () => (
                    <View style={styles.logoContainer}>
                        <Image
                            source={require(LOGO)}
                            style={styles.logoImg}
                            resizeMode="contain"
                        />
                    </View>
                    ),
                    headerTitleAlign: 'center',
                }}
                // 로그인 안 되어 있으면 로그인 페이지로
                // listeners={({ navigation }) => ({
                //     tabPress: (e) => {
                //         e.preventDefault();
                //         navigation.navigate("Login");
                //     },
                // })}
            />
            <Tab.Screen
                name="룰렛"
                component={Roulette}
                options={{
                    headerTitle: () => (
                        <View style={styles.logoContainer}>
                            <Image
                                source={require(LOGO)}
                                style={styles.logoImg}
                                resizeMode="contain"
                            />
                        </View>
                    ),
                    headerTitleAlign: 'center',
                }}
            />
            <Tab.Screen
                name="식단 기록"
                component={MealLog}
                options={{
                    headerTitle: () => (
                    <View style={styles.logoContainer}>
                        <Image
                            source={require(LOGO)}
                            style={styles.logoImg}
                            resizeMode="contain"
                        />
                    </View>
                    ),
                    headerTitleAlign: 'center',
                }}
                // 로그인 안 되어 있으면 로그인 페이지로
                // listeners={({ navigation }) => ({
                //     tabPress: (e) => {
                //         e.preventDefault();
                //         navigation.navigate("Login");
                //     },
                // })}
            />
            <Tab.Screen
                name="마이"
                component={MyPage}
                options={{
                    headerTitle: () => (
                    <View style={styles.logoContainer}>
                        <Image
                            source={require(LOGO)}
                            style={styles.logoImg}
                            resizeMode="contain"
                        />
                    </View>
                    ),
                    headerTitleAlign: 'center',
                }}
                // 로그인 안 되어 있으면 로그인 페이지로
                // listeners={({ navigation }) => ({
                //     tabPress: (e) => {
                //         e.preventDefault();
                //         navigation.navigate("Login");
                //     },
                // })}
            />
        </Tab.Navigator>
    );
}



const styles = StyleSheet.create({
    logoContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    logoImg: {
        height: 35
    }
});

export default BottomTab;