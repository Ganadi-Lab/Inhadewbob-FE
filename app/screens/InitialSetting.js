import { Button, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InitialSetting({ navigation }) {
    console.log(navigation);
    return (
        <SafeAreaView> 
            <View>
                <Text>InitialSetting</Text>
                <Image
                    source={require('../../assets/LOGO.png')}
                    style={{ height: 100, aspectRatio: 1 }}
                    resizeMode="contain"
                />
                <Button
                    title="로그인 페이지로 이동"
                    onPress={() => navigation.getParent().navigate("Login")}
                />
            </View>
        </SafeAreaView>
    );
}
