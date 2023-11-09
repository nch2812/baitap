import React from "react";
import "./Login.css"
const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error,setError] = React.useState(false);
    //input: cac loai type, *onChange, onFocus, onClick, *value
    //label

    //Bai tap: show loi cho email: co ton tai @ va khong co space, password khong co space va ki tu dat biet va show mat khau
    // sau khi submit thi kiem tra loi va check database gia => co ton tai thi log (success) / khong thi log (false)
    const onSubmit = (e) => {
        console.log(e,"Event");
        console.log(username, password);
    }
    const changeUsername = (e) => {
        setUsername(e.target.value);
        console.log(username.length,"username");
        if(username.length <= 4) {
            setError(true);
        } else {
            setError(false)
        }
    }
    return(
        <div className="background">
            <div className="center w-2/5 py-20 rounded-md">
                <h1 className="text-center font-bold">Login</h1>
                <div className="justify-center flex">
                    <form className="w-4/5">
                        <label className="block">Username</label>
                        <input value={username} className="input w-full" type="text" placeholder="Type your username" onChange={(event) => {changeUsername(event)}} />
                        {error && <p className="text-error">Loi ne</p>}
                        <label className="block">Password</label>
                        <input value={password} className="input w-full" type="password" placeholder="Type your password" onChange={(event) => {setPassword(event.target.value)}}/>
                        <p className="float-right">Forgot password?</p>
                    </form>
                </div>
                <div className="justify-center">   
                    <button className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-2/5" onClick={(e) => onSubmit(e)}>Login</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-2/5">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Login;