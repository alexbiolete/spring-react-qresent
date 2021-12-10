import { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import WrapperForm from '../components/molecules/WrapperForm';
import WrapperInput from '../components/molecules/WrapperInput';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import LinkOutlineSecondary from '../components/atoms/LinkOutlineSecondary';
import Logo from '../resources/Logo';

export default function Signup({ refreshPage }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [List, setList] = useState([]);
  const [role, setRole] = useState("");
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const history = useHistory();

  const handleChange1 = () => {
      setChecked1(!checked1);
      if (checked2 === true) {
        setChecked2(false);
      }
      if (checked1 === false)
        setRole("teacher");
  };

  const handleChange2 = () => {
      setChecked2(!checked2);
      if (checked1 === true)
        setChecked1(false);
      if(checked2 === false)
        setRole("student");
  };

  const handleSubmit = (e) => {
    var verify = true;
    const user = {
      "name": name,
      "email": email,
      "username": username,
      "password": password,
      "role": role,
    };

    if(name == ''){
      verify = false;
    }

    if(email == ''){
      verify = false;
    }

    if(username == ''){
      verify = false;
    }

    if(password == ''){
      verify = false;
    }

    if(role == ""){
      verify = false;
    }

    if(verify == true) {
      history.push("/");
      refreshPage();
    }

  axios.post("http://localhost:8081/user", user).then((response) => console.log(response));

  };

  return (
    <WrapperForm>
      <form>
        <div className="w-full px-4 py-5 bg-white sm:p-6">
          <div className="flex flex-col items-center space-y-4">
            <Logo className="w-80 h-32 fill-current" />
            <WrapperInput
              id="name"
              title="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <WrapperInput
              id="email"
              title="E-mail"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <WrapperInput
              id="username"
              title="Username"
              type="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <WrapperInput
              id="password"
              title="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />

            <div className="flex flex-col md:flex-row md:space-x-4 text-gray-600">
              <label className="text-xs flex items-center space-x-1">
                <input
                  type="checkbox"
                  checked={checked1}
                  onChange={handleChange1}
                />
                <span className="tracking-wide">{'Teacher account'}</span>
              </label>
              <label className="text-xs flex items-center space-x-1">
                <input
                  type="checkbox"
                  checked={checked2}
                  onChange={handleChange2}
                />
                <span className="tracking-wide">{'Student account'}</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-3 bg-gray-50 text-right">
          <LinkOutlineSecondary to='/login' title="Log in" />
          <ButtonPrimary title="Sign up" type="submit" onClick={(e) => handleSubmit(e)} />
        </div>
      </form>
    </WrapperForm>
  );
}
