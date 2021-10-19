import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Email from './Email/Email';
import './Login.css'

const Login = () => {
    const { singInUseingGoogle } = useAuth();
    return (
        <div className="log-container">
            
            <Email></Email>
            <Link><button onClick={singInUseingGoogle} className="btn btn-primary">Register with Google</button></Link>
        </div>
    );
};

export default Login;