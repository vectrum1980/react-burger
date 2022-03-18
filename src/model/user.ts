export interface User {
	name?: string;
	email?: string;
	password?: string;
}

export interface UserState {
	name?: string,
	email?: string,
	password?: string,
	registerRequest: boolean,
	registerRequestFailed: boolean,
	isregisterSuccess: boolean,
	loginRequest: boolean,
	loginRequestFailed: boolean,
	getUserRequest: boolean,
	getUserRequestFailed: boolean,
	updateUserRequest: boolean,
	updateUserRequestFailed: boolean,
	logoutRequest: boolean,
	logoutRequestFailed: boolean,
	isTokenUpdated: boolean,
	tokenUpdateDate: boolean,
	forgotPasswordRequest: boolean,
	forgotPasswordFailed: boolean,
	isforgotPasswordRequest: boolean,
	isforgotPasswordSuccess: boolean,
	resetPasswordRequest: boolean,
	resetPasswordFailed: boolean,
	isresetPasswordSuccess: boolean
}
