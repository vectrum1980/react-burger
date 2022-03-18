import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../../services/actions/auth';
import { useDispatch } from '../../hooks/useDispatch';

const Logout: React.FunctionComponent = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
    });

    return <Redirect to={'/login'} />;

};

export default Logout;