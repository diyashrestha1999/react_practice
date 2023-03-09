import './App.css';
import InputField from "./components/InputField";
import {useState} from "react";

// import {useState} from "react";

function App() {
    const [data, setData] = useState({username: '', password: ''})
    const {username, password} = data
    const [display, setDisplay]=useState({})
    const changeHandler=e=>{
        // setData({...data,[e.target.name]:[e.target.value]})
      const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));

    }

    const submitHandler=e=>{
        e.preventDefault();
        console.log(data)
     setDisplay(data)
    }


    return (
        <form >
            <InputField type='username' name='username' placeholder='Username'  value={username} onChange={changeHandler}></InputField>
            <InputField type='password' name='password' placeholder='Password' value={password}  onChange={changeHandler}></InputField>
            <span>{display.username}</span>

            <button onClick={submitHandler}>submit</button>
        </form>
    );
}

export default App;
