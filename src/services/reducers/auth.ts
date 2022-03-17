import {
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED,
    GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILED,
    FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED,
    RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED,
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED,
    REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILED
} from '../constants/auth';
import { TAuthActions } from '../actions/auth';
import { UserState } from '../../model/user'

const initialState: UserState = {
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

export const authReducer = (state = initialState, action: TAuthActions): UserState => {
    switch (action.type) {
        case REGISTER_REQUEST: {
            return {
                ...state,
                registerRequest: true,
                registerRequestFailed: false,
                isregisterSuccess: false
            };
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                registerRequestFailed: false,
                isregisterSuccess: true,
                name: action.user.name,
                email: action.user.email,
                registerRequest: false,
            };
        }
        case REGISTER_FAILED: {
            return { ...state, registerRequestFailed: true, registerRequest: false, isregisterSuccess: false };
        }

        case LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: true,
                loginRequestFailed: false,
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loginRequestFailed: false,
                name: action.user.name,
                email: action.user.email,
                loginRequest: false,
            };
        }
        case LOGIN_FAILED: {
            return { ...state, loginRequestFailed: true, loginRequest: false };
        }

        case GET_USER_REQUEST: {
            return {
                ...state,
                getUserRequest: true,
                getUserRequestFailed: false
            };
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                getUserRequestFailed: false,
                name: action.user.name,
                email: action.user.email,
                getUserRequest: false
            };
        }
        case GET_USER_FAILED: {
            return { ...state, getUserRequestFailed: true, getUserRequest: false };
        }

        case UPDATE_USER_REQUEST: {
            return {
                ...state,
                updateUserRequest: true,
                updateUserRequestFailed: false
            };
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                updateUserRequestFailed: false,
                name: action.user.name,
                email: action.user.email,
                updateUserRequest: false
            };
        }
        case UPDATE_USER_FAILED: {
            return { ...state, updateUserRequestFailed: true, updateUserRequest: false };
        }

        case LOGOUT_REQUEST: {
            return {
                ...state,
                logoutRequest: true,
                logoutRequestFailed: false
            };
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                logoutRequestFailed: false,
                name: '',
                email: '',
                logoutRequest: false
            };
        }
        case LOGOUT_FAILED: {
            return { ...state, logoutRequestFailed: true, logoutRequest: false };
        }
        case REFRESH_TOKEN_REQUEST: {
            return { ...state };
        }
        case REFRESH_TOKEN_SUCCESS: {
            return {
                ...state,
                isTokenUpdated: true,
                tokenUpdateDate: true
            };
        }
        case REFRESH_TOKEN_FAILED: {
            return { ...state, isTokenUpdated: true, tokenUpdateDate: false };
        }
        case RESET_PASSWORD_REQUEST: {
            return { ...state, isresetPasswordSuccess: false };
        }
        case RESET_PASSWORD_SUCCESS: {
            return { ...state, isresetPasswordSuccess: true };
        }
        case RESET_PASSWORD_FAILED: {
            return { ...state, isresetPasswordSuccess: false };
        }
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPasswordRequest: true,
                forgotPasswordFailed: false,
                isforgotPasswordRequest: false,
                isforgotPasswordSuccess: false,
            };
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                forgotPasswordRequest: false,
                isforgotPasswordRequest: true,
                isforgotPasswordSuccess: true
            };
        }
        case FORGOT_PASSWORD_FAILED: {
            return {
                ...state,
                forgotPasswordFailed: true,
                forgotPasswordRequest: false,
                isforgotPasswordSuccess: false,
                isforgotPasswordRequest: true
            };
        }
        default: {
            return state;
        }
    }
};
