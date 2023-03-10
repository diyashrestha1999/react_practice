import './App.css';
import InputField from "./components/InputField";
import {useState} from "react";


function App() {
    // const [data, setData] = useState({username: '', password: ''})
    // const {username, password} = data
    const [display, setDisplay]=useState('')
    const[username, setUsername]=useState('')

    const changeHandler=e=>{
        setUsername(e.target.value)
        // setData((data)=>({...data,[e.target.name]:e.target.value}))
      // const { name, value } = e.target;
    // setData((data) => ({
    //   ...data,
    //   [name]: value,
    // }));
    //     console.log(data)

    }

    const submitHandler=e=>{
        e.preventDefault();
                // console.log(data)


     setDisplay(username)
        // console.log(display)
    }


    return (
        <form >
            <InputField type='username' name='username' placeholder='Username'  value={username} onChange={changeHandler}></InputField>
            {/*<InputField type='password' name='password' placeholder='Password' value={password}  onChange={changeHandler}></InputField>*/}
            <span>result={display}</span><br/>

            <button onClick={submitHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
            </button>
        </form>
    );
}

export default App;
