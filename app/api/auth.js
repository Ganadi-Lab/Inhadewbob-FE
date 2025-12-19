import axios from "axios";
import { loadAccessToken, loadRefreshToken } from "../../tokenStorage";
import api from "./api";


// 로그인
export const login = async (email, pwd) => {
	try {
		const res = await axios.post(`https://inha-dewbob.p-e.kr/auth/login`, {
			email,
			password: pwd
		});
		console.log("login:", res.data);

		return res.data;

	} catch (e) {
		console.error("login fetch error:", e);
	}
};

// 회원가입
export const signup = async (email, password, nickname) => {	
	try {
		const res = await axios.post(`https://inha-dewbob.p-e.kr/auth/signup`, {
			email,
			password,
			nickname
		});
		console.log("signup:", res.data);

		return res.data;

	} catch (e) {
		console.error("signup fetch error:", e);
	}
};

// 로그아웃
export const logout = async () => {	
	const refreshT = loadRefreshToken();

	try {
		const res = await axios.post(`https://inha-dewbob.p-e.kr/auth/logout`, {
			refresh_token: refreshT
		});
		console.log("logout 성공");

		return res.data;

	} catch (e) {
		console.error("logout fetch error:", e);
	}
};


// 소비 현황 수정
export const getProfile = async () => {
	const loadAccessTokened = await loadAccessToken();
	
	if(loadAccessTokened == null) {	return null; }	
	
	try {
		const res = await api.get(`/auth/profile`);
		console.log("Profile:", res.data);

		return res.data;

	} catch (e) {
		console.error("Profile fetch error:", e);
	}
};