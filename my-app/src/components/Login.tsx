import React, { useState } from 'react'
import { loginAsync, selectLogged } from '../features/loginSlice'
import { useAppSelector, useAppDispatch } from './../app/hooks';

const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const logged = useAppSelector(selectLogged);
    const dispatch = useAppDispatch();
    return (
        <div>
            {logged ? <button >Logout</button> :
            <div>
                user name:<input onChange={(e) => setusername(e.target.value)} />
                password:<input onChange={(e) => setpassword(e.target.value)} />
                <button onClick={() => dispatch(loginAsync({ username, password }))}>Login</button>
            </div>}
        </div>
    )
}

export default Login