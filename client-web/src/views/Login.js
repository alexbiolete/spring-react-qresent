import { useState } from "react";
import axios from "axios";
import WrapperForm from '../components/molecules/WrapperForm';
import WrapperInput from '../components/molecules/WrapperInput';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import LinkOutlineSecondary from '../components/atoms/LinkOutlineSecondary';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const user = {
        username: username,
        password: password,
      };

      axios.post("http://localhost:3000/api/login", user).then((response) => console.log(user));
  };

  return (
    <WrapperForm>
      <form>
        <div className="w-full px-4 py-5 bg-white sm:p-6">
          <div className="flex flex-col items-center space-y-4">
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
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-3 bg-gray-50 text-right">
          <LinkOutlineSecondary to='/signup' title="Sign up" />
          <ButtonPrimary title="Log in" type="submit" onClick={() => handleSubmit()} />
        </div>
      </form>
    </WrapperForm>
  );
}
