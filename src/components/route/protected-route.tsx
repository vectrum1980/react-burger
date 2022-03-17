import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { refreshToken } from '../../services/actions/auth';
import { useSelector } from '../../hooks/useSelector';
import { useDispatch } from '../../hooks/useDispatch';
import Preloader from '../preloader/preloader';

const ProtectedRoute: React.FunctionComponent<{
    path: string;
    exact?: boolean;
}> = ({ children, ...rest }) => {

    const dispatch = useDispatch();

    const isTokenUpdated = useSelector((store) => store.auth.isTokenUpdated);
    const tokenUpdateDate = useSelector((store) => store.auth.tokenUpdateDate);
    const hasToken = !!localStorage.getItem('refreshToken');

    useEffect(() => {
        if (!isTokenUpdated && hasToken) {
            dispatch(refreshToken())
        }
    }, [dispatch, hasToken, isTokenUpdated]);

    if (hasToken && !isTokenUpdated) {
        return <Preloader />;
      }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                (hasToken && tokenUpdateDate) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default ProtectedRoute;
