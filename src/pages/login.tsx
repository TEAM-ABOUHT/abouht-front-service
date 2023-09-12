import abouhtLogo from '../assets/abouht.svg';
const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body flex items-center">
            <img src={abouhtLogo} className=" w-20 " />
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 w-full">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="divider">OR</div>
            <div className="my-4 grid grid-cols-3 gap-4">
              <div>kakao</div>
              <div>GitHub</div>
              <div>Apple</div>
            </div>
            <div className="my-2 grid grid-cols-4 gap-4">
              <div>회원가입</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
