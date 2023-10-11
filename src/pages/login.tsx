import { useState } from 'react';
import abouhtLogo from '../assets/abouht.svg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

type loginForm = {
  email?: string;
  password?: string;
};

const Login = () => {
  const [loginForm, setLoginForm] = useState<loginForm>();
  const navigate = useNavigate();
  const requestLogin = async () => {
    const result = await axios.get(
      import.meta.env.VITE_CHANNEL_GOORM_HOST! ||
        import.meta.env.VITE_CHANNEL_LOCAL_HOST! + '/auth/login',
      {
        params: { email: loginForm?.email, password: loginForm?.password },
      }
    );
    if (result.data.status === 'success') {
      navigate('/main');
    } else alert('error show console.log');
    console.log(result.data);
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
          <form
            className="flex items-center card-body"
            onSubmit={(e) => e.preventDefault()}
          >
            <img src={abouhtLogo} className="w-20 " />
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="email"
                placeholder="email"
                className="input input-bordered"
                onChange={({ target: { value } }) =>
                  setLoginForm({ ...loginForm, email: value })
                }
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                type="password"
                placeholder="password"
                className="input input-bordered"
                onChange={({ target: { value } }) =>
                  setLoginForm({ ...loginForm, password: value })
                }
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <label className="hidden label text-error animate__animated animate__flash">
              이메일 혹은 비밀번호가 일치하지 않습니다
            </label>
            <div className="w-full mt-6 form-control">
              <button className="btn btn-primary" onClick={requestLogin}>
                Login
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="grid grid-cols-3 gap-4 my-4">
              <div>kakao</div>
              <div>GitHub</div>
              <div>Apple</div>
            </div>
            <div className="grid grid-cols-4 gap-4 my-2">
              <div>
                <Link to="/register">회원가입</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
