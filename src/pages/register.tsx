import abouhtLogo from '../assets/abouht.svg';

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body w-96 flex items-center">
            <h1>환영합니다!</h1>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
              />

              <label className="label mt-3">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered"
              />

              <label className="label mt-3">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type="text"
                placeholder="Confirm password"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt">Bottom Right label</span>
              </label>

              <label className="label mt-3">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />

              <label className="label mt-3">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered"
              />

              <div className="form-control mt-6 w-full">
                <button className="btn btn-primary">가입하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
