import { authReducer } from './auth'
import {
	REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED,
	LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED,
	GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED,
	UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED,
	FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED,
	RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED,
	LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILED,
	REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILED
} from '../constants/auth';

const initialState = {
    name: '',
    email: '',
    password: '',
    registerRequest: false,
    registerRequestFailed: false,
    isregisterSuccess: false,
    loginRequest: false,
    loginRequestFailed: false,
    getUserRequest: false,
    getUserRequestFailed: false,
    updateUserRequest: false,
    updateUserRequestFailed: false,
    logoutRequest: false,
    logoutRequestFailed: false,
    isTokenUpdated: false,
    tokenUpdateDate: false,
    forgotPasswordRequest: false,
    forgotPasswordFailed: false,
    isforgotPasswordRequest: false,
    isforgotPasswordSuccess: false,
    resetPasswordRequest: false,
    resetPasswordFailed: false,
    isresetPasswordSuccess: false
};

describe('auth reducer', () => {
	it('should return the initial state', () => {
		expect(authReducer(undefined, {})).toEqual(initialState)
	})

	it('should handle REGISTER_REQUEST', () => {
		expect(
			authReducer(initialState, {
				type: REGISTER_REQUEST
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: true, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle REGISTER_SUCCESS', () => {
		expect(
			authReducer(initialState, {
				type: REGISTER_SUCCESS,
				user: {
					name: 'Dummy',
					email: 'dummy@dummy.com'
				},
			})
		).toEqual(expect.objectContaining({
			email: "dummy@dummy.com", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: true, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "Dummy", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle REGISTER_FAILED', () => {
		expect(
			authReducer(initialState, {
				type: REGISTER_FAILED
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: true, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle LOGIN_REQUEST', () => {
		expect(
			authReducer(initialState, {
				type: LOGIN_REQUEST
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: true, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle LOGIN_SUCCESS', () => {
		expect(
			authReducer(initialState, {
				type: LOGIN_SUCCESS,
				user: {
					name: 'Dummy',
					email: 'dummy@dummy.com'
				},
			})
		).toEqual(expect.objectContaining({
			email: "dummy@dummy.com", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "Dummy", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle LOGIN_FAILED', () => {
		expect(
			authReducer(initialState, {
				type: LOGIN_FAILED
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: true, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle GET_USER_REQUEST', () => {
		expect(
			authReducer(initialState, {
				type: GET_USER_REQUEST
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: true, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle GET_USER_SUCCESS', () => {
		expect(
			authReducer(initialState, {
				type: GET_USER_SUCCESS,
				user: {
					name: 'Dummy',
					email: 'dummy@dummy.com'
				},
			})
		).toEqual(expect.objectContaining({
			email: "dummy@dummy.com", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "Dummy", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle GET_USER_FAILED', () => {
		expect(
			authReducer(initialState, {
				type: GET_USER_FAILED
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: true, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle UPDATE_USER_REQUEST', () => {
		expect(
			authReducer(initialState, {
				type: UPDATE_USER_REQUEST
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: true, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle UPDATE_USER_SUCCESS', () => {
		expect(
			authReducer(initialState, {
				type: UPDATE_USER_SUCCESS,
				user: {
					name: 'Dummy',
					email: 'dummy@dummy.com'
				},
			})
		).toEqual(expect.objectContaining({
			email: "dummy@dummy.com", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "Dummy", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle UPDATE_USER_FAILED', () => {
		expect(
			authReducer(initialState, {
				type: UPDATE_USER_FAILED
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: true
		}))
	})

	it('should handle FORGOT_PASSWORD_REQUEST', () => {
		expect(
			authReducer(initialState, {
				type: FORGOT_PASSWORD_REQUEST
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: true, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle FORGOT_PASSWORD_SUCCESS', () => {
		expect(
			authReducer(initialState, {
				type: FORGOT_PASSWORD_SUCCESS,
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: true, 
            isforgotPasswordSuccess: true, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle FORGOT_PASSWORD_FAILED', () => {
		expect(
			authReducer(initialState, {
				type: FORGOT_PASSWORD_FAILED
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: true, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: true, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle RESET_PASSWORD_REQUEST', () => {
		expect(
			authReducer(initialState, {
				type: RESET_PASSWORD_REQUEST
			})
		).toEqual(initialState)
	})	

	it('should handle RESET_PASSWORD_FAILED', () => {
		expect(
			authReducer(initialState, {
				type: RESET_PASSWORD_FAILED
			})
		).toEqual(initialState)
	})

	it('should handle LOGOUT_REQUEST', () => {
		expect(
			authReducer(initialState, {
				type: LOGOUT_REQUEST
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: true, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle LOGOUT_SUCCESS', () => {
		expect(
			authReducer(initialState, {
				type: LOGOUT_SUCCESS
			})
		).toEqual(initialState)
	})

	it('should handle LOGOUT_FAILED', () => {
		expect(
			authReducer(initialState, {
				type: LOGOUT_FAILED
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: false, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: true, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: false, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle REFRESH_TOKEN_REQUEST', () => {
		expect(
			authReducer(initialState, {
				type: REFRESH_TOKEN_REQUEST
			})
		).toEqual(initialState)
	})

	it('should handle REFRESH_TOKEN_SUCCESS', () => {
		expect(
			authReducer(initialState, {
				type: REFRESH_TOKEN_SUCCESS
			})
		).toEqual(expect.objectContaining({
			email: "", 
            forgotPasswordFailed: false, 
            forgotPasswordRequest: false, 
            getUserRequest: false, 
            getUserRequestFailed: false, 
            isTokenUpdated: true, 
            isforgotPasswordRequest: false, 
            isforgotPasswordSuccess: false, 
            isregisterSuccess: false, 
            isresetPasswordSuccess: false, 
            loginRequest: false, 
            loginRequestFailed: false, 
            logoutRequest: false, 
            logoutRequestFailed: false, 
            name: "", 
            password: "", 
            registerRequest: false, 
            registerRequestFailed: false, 
            resetPasswordFailed: false, 
            resetPasswordRequest: false, 
            tokenUpdateDate: true, 
            updateUserRequest: false, 
            updateUserRequestFailed: false
		}))
	})

	it('should handle REFRESH_TOKEN_FAILED', () => {
		expect(
			authReducer(initialState, {
				type: REFRESH_TOKEN_FAILED
			})
		).toEqual(expect.objectContaining({
			isTokenUpdated: true,
			tokenUpdateDate: false,
		}))
	})
})