import axios from "axios";
import { loadAccessToken } from "../../tokenStorage";

const BACKEND_URL = "https://inha-dewbob.p-e.kr";


// 소비 현황 등록
export const create = async (memberId, remainingBudget) => {
    const date = new Date().toISOString().split("T")[0];
    const loadAccessTokened = await loadAccessToken();

    if (!date) {
        console.log("create: date를 입력하세요.");
        return;
    }
    if (!memberId) {
        console.log("create: memberId를 입력하세요.");
        return;
    }
    if (!remainingBudget) {
        console.log("create: remainingBudget를 입력하세요.");
        return;
    }

    try {
        const res = await api.post(`${BACKEND_URL}/consumes`, {
            memberId: memberId,
            remainingBudget: remainingBudget,
            date: date
        }, {
            headers: {
                Authorization: `Bearer ${loadAccessTokened}`,
            },
        }
        );

        console.log("create 조회 성공: ", res.data);

    } catch (e) {
        console.error("create 실패: ", e);
    }
};


// 소비 현황 수정
export const update = async (id, spentAmount, remainingBudget) => {
    const loadAccessTokened = await loadAccessToken();

    if (!id) {
        console.log("update: id를 입력하세요.");
        return;
    }
    if (!spentAmount) {
        console.log("update: spentAmount를 입력하세요.");
        return;
    }
    if (!remainingBudget) {
        console.log("update: remainingBudget를 입력하세요.");
        return;
    }

    try {
        const res = await axios.patch(
            `${BACKEND_URL}/consumes/${id}`, {
            spentAmount: spentAmount,
            remainingBudget: remainingBudget,
        }, {
            headers: {
                Authorization: `Bearer ${loadAccessTokened}`,
            },
        }
        );

        console.log("update 조회 성공: ", res.data);

    } catch (e) {
        console.error("update 실패: ", e);
    }
};


// 소비 현황 조회(이번 주에 쓴 금액 + 지난 주 대비 금액 차이)
export const getConsumeStat = async () => {
    const date = new Date().toISOString().split("T")[0];
    const loadAccessTokened = await loadAccessToken();

    try {
        const res = await axios.get(`${BACKEND_URL}/consumes/status`, {
            params: { date: date },
            headers: {
                Authorization: `Bearer ${loadAccessTokened}`,
            },
        });

        console.log("getConsumeStat 조회 성공: ", res.data);

        return res.data;

    } catch (e) {
        console.error("getConsumeStat 실패: ", e);
    }
};


// 소비 통계 조회(지지난 주, 지난 주, 이번 주와의 소비 통계 비교)
export const getConsumeStats = async () => {
    const date = new Date().toISOString().split("T")[0];
    const loadAccessTokened = await loadAccessToken();

    try {
        const res = await axios.get(`${BACKEND_URL}/consumes/statistics`, {
            params: { date: date },
            headers: {
                Authorization: `Bearer ${loadAccessTokened}`,
            },
        });

        console.log("getConsumeStats 조회 성공: ", res.data);

        return res.data;
    } catch (e) {
        console.error("getConsumeStats 실패: ", e);
    }
};