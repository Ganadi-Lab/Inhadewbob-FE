// app/screens/MyPage.styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    /* 전체 화면 */
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    /* 스크롤 영역 */
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },

    /* =========================
        공통 박스 스타일
    ========================== */
    box: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,

        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 7,
        elevation: 7,
    },

    boxTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 16,
        color: '#111827',
    },

    /* =========================
        프로필 영역
    ========================== */
    profileBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatarWrapper: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 14,
        overflow: 'hidden',
    },

    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
    },

    userName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#5A8EF6',
        marginBottom: 6,
    },

    userEmail: {
        fontSize: 12,
        color: '#6B7280',
    },

    /* =========================
        섹션 제목
    ========================== */
    settingText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#6B7280',
        marginBottom: 12,
    },

    /* =========================
        설정 Row
    ========================== */
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
    },

    text: {
        fontSize: 15,
        color: '#111827',
    },

    /* =========================
        입력 박스
    ========================== */
    inlineBox: {
        width: 120,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInput: {
        width: '100%',
        textAlign: 'center',
        fontSize: 14,
        paddingVertical: 0,
    },

    /* =========================
        구분선
    ========================== */
    line: {
        borderBottomColor: '#E5E7EB',
        borderBottomWidth: 1,
        marginVertical: 6,
    },

    /* =========================
        사용자 메뉴
    ========================== */
    userRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
    },

    arrowRight: {
        width: 14,
        height: 14,
        tintColor: '#9CA3AF',
    },
});
