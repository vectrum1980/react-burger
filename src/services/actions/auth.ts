import { api } from '../../api/api';
import { User } from '../../model/user'
import {
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED,
    GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED,
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED,
    RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED,
    FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED,
    REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILED,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILED
} from '../constants/auth';
import { setCookie, deleteCookie } from '../../utils/auth';
import { AppDispatch, AppThunk } from '../../types';

export interface IRegisterRequestAction {
    readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterSuccessAction {
    readonly type: typeof REGISTER_SUCCESS;
    readonly user: User;
}

export interface IRegisterFailedAction {
    readonly type: typeof REGISTER_FAILED;
}

export interface ILoginRequestAction {
    readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccessAction {
    readonly type: typeof LOGIN_SUCCESS;
    readonly user: User;
}

export interface ILoginFailedAction {
    readonly type: typeof LOGIN_FAILED;
}

export interface IGetUserRequestAction {
    readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS;
    readonly user: User;
}

export interface IGetUserFailedAction {
    readonly type: typeof GET_USER_FAILED;
}

export interface IUpdateUserRequestAction {
    readonly type: typeof UPDATE_USER_REQUEST;
}

export interface IUpdateUserSuccessAction {
    readonly type: typeof UPDATE_USER_SUCCESS;
    readonly user: User;
}

export interface IUpdateUserFailedAction {
    readonly type: typeof UPDATE_USER_FAILED;
}

export interface IForgotPasswordRequestAction {
    readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccessAction {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface IForgotPasswordFailedAction {
    readonly type: typeof FORGOT_PASSWORD_FAILED;
}

export interface IResetPasswordRequestAction {
    readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccessAction {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordFailedAction {
    readonly type: typeof RESET_PASSWORD_FAILED;
}

export interface ILogoutRequestAction {
    readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccessAction {
    readonly type: typeof LOGOUT_SUCCESS;
}

export interface ILogoutFailedAction {
    readonly type: typeof LOGOUT_FAILED;
}

export interface IRefreshTokenRequestAction {
    readonly type: typeof REFRESH_TOKEN_REQUEST;
}

export interface IRefreshTokenSuccessAction {
    readonly type: typeof REFRESH_TOKEN_SUCCESS;
}

export interface IRefreshTokenFailedAction {
    readonly type: typeof REFRESH_TOKEN_FAILED;
}

export type TAuthActions =
    | IRegisterRequestAction
    | IRegisterSuccessAction
    | IRegisterFailedAction
    | ILoginRequestAction
    | ILoginSuccessAction
    | ILoginFailedAction
    | IGetUserRequestAction
    | IGetUserFailedAction
    | IGetUserSuccessAction
    | IUpdateUserRequestAction
    | IUpdateUserSuccessAction
    | IUpdateUserFailedAction
    | IForgotPasswordRequestAction
    | IForgotPasswordSuccessAction
    | IForgotPasswordFailedAction
    | IResetPasswordRequestAction
    | IResetPasswordSuccessAction
    | IResetPasswordFailedAction
    | ILogoutRequestAction
    | ILogoutFailedAction
    | ILogoutSuccessAction
    | IRefreshTokenRequestAction
    | IRefreshTokenSuccessAction
    | IRefreshTokenFailedAction;

export const register: AppThunk = (user: User) => {
    return function (dispatch: AppDispatch) {
        dispatch({ type: REGISTER_REQUEST });
        api.auth.register(user)
            .then((res) => {
                if (res && res.success) {
                    const authToken = res.accessToken.split('Bearer ')[1];
                    setCookie('token', authToken);
                    const refreshToken = res.refreshToken;
                    localStorage.setItem('refreshToken', refreshToken);
                    dispatch({ type: REGISTER_SUCCESS, user: res.user });
                } else {
                    dispatch({ type: REGISTER_FAILED });
                }
            })
            .catch(() => { dispatch({ type: REGISTER_FAILED }); });
    };
};

export const login: AppThunk = (user: User) => {
    return function (dispatch: AppDispatch) {
        dispatch({ type: LOGIN_REQUEST });
        api.auth.signIn(user)
            .then((res) => {
                if (res && res.success) {
                    const authToken = res.accessToken.split('Bearer ')[1];
                    const refreshToken = res.refreshToken;
                    setCookie('token', authToken);
                    localStorage.setItem('refreshToken', refreshToken);
                    dispatch({ type: LOGIN_SUCCESS, user: res.user });
                } else {
                    dispatch({ type: LOGIN_FAILED });
                }
            })
            .catch(() => { dispatch({ type: LOGIN_FAILED, }); });
    };
};

export const getUser: AppThunk = () => {
    return function (dispatch: AppDispatch) {
        dispatch({ type: GET_USER_REQUEST });
        api.auth.getUser()
            .then((res) => {
                if (res && res.success) {
                    dispatch({ type: GET_USER_SUCCESS, user: res.user });
                } else {
                    dispatch({ type: GET_USER_FAILED });
                }
            })
            .catch(() => { dispatch({ type: GET_USER_FAILED }); });
    };
};

export const logout: AppThunk = () => {
    return function (dispatch: AppDispatch) {
        dispatch({ type: LOGOUT_REQUEST });
        api.auth.logout()
            .then((res) => {
                if (res && res.success) {
                    deleteCookie('token');
                    localStorage.removeItem('refreshToken');
                    dispatch({ type: LOGOUT_SUCCESS });
                } else {
                    dispatch({ type: LOGOUT_FAILED });
                }
            })
            .catch(() => {
                dispatch({ type: LOGOUT_FAILED });
            });
    };
};

export const updateUser: AppThunk = (user) => {
    return function (dispatch: AppDispatch) {
        dispatch({ type: UPDATE_USER_REQUEST });
        api.auth.updateUser(user)
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: UPDATE_USER_SUCCESS,
                        user: res.user,
                    });
                } else {
                    dispatch({ type: UPDATE_USER_FAILED });
                }
            })
            .catch(() => {
                dispatch({ type: UPDATE_USER_FAILED });
            });
    };
};

export const refreshToken: AppThunk = () => {
    return function (dispatch: AppDispatch) {
        dispatch({ type: REFRESH_TOKEN_REQUEST });
        api.auth.refreshToken()
            .then((res) => {
                if (res && res.success) {
                    localStorage.setItem('refreshToken', res.refreshToken);
                    const authToken = res.accessToken.split('Bearer ')[1];
                    setCookie('token', authToken);
                    dispatch({ type: REFRESH_TOKEN_SUCCESS });
                } else {
                    dispatch({ type: REFRESH_TOKEN_FAILED });
                }
            }).catch(() => {
                deleteCookie('token');
                localStorage.removeItem('refreshToken');
                dispatch({ type: REFRESH_TOKEN_FAILED });
            });
    };
};

export const forgotPassword: AppThunk = (email: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });
        api.auth.forgotPassword(email)
            .then(() => {
                dispatch({ type: FORGOT_PASSWORD_SUCCESS });
            })
            .catch(() => {
                dispatch({ type: FORGOT_PASSWORD_FAILED });
            });
    };
};

export const resetPassword: AppThunk = (password: string, token: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({ type: RESET_PASSWORD_REQUEST });
        api.auth.resetPassword(password, token)
            .then((res) => {
                if (res && res.success) {
                    dispatch({ type: RESET_PASSWORD_SUCCESS });
                } else {
                    dispatch({ type: RESET_PASSWORD_FAILED });
                }
            })
            .catch(() => {
                dispatch({ type: RESET_PASSWORD_FAILED });
            });
    };
};
