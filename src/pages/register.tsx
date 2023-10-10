import { useState } from 'react';
import abouhtLogo from '../assets/abouht.svg';
import axios from 'axios';

type registerForm = {
  email?: string | boolean;
  password?: string | boolean;
  name?: string | boolean;
  phoneNumber?: string | boolean;
  gender?: string | boolean;
  birthday?: string | boolean;
};

const Register = () => {
  const [registerForm, setRegisterForm] = useState<registerForm>();
  const [vaildRegisterForm, setVaildRegisterForm] = useState<registerForm>();

  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,64}$/;
  const regPhoneNumber = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  const regEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const checkVaildForm = (form: Object) => {};
  const requestRegister = async () => {
    const { email, password, name, gender, birthday, phoneNumber } =
      registerForm;
    const result = await axios.post(import.meta.env.VITE_CHANNEL_GOORM_HOST! + '/reader/signup', {
      email,
      password,
      name,
      phoneNumber,
      birthDate: birthday,
      gender: gender === 'M' ? 0 : 1,
      OAuthInfo: 'None',
      userName: name,
      preRegistration: '1차 사전예약 TEST',
      preview: '현실의 문제점을 지적하는 작품을 구상중입니다. TEST',
    });
    if (result.status === 200)
      // TODO: UPDATE REGISTER DONE MOVE LOGIN PAGE
      alert(
        '회원가입 성공! (리다이렉션 기능 추가중... 알아서 로그인으로 이동하세요...)'
      );
    else {
      alert('error show console log result');
      console.log(result);
    }
    console.log(registerForm);
    console.log(vaildRegisterForm);
    console.log('==============================');
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
          <div className="flex items-center card-body w-96">
            <h1>환영합니다!</h1>
            <form className="w-full form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="text"
                placeholder="아이디(이메일)"
                className="input input-bordered"
                onChange={({ target: { value } }) => {
                  setRegisterForm({ ...registerForm, email: value });
                  setVaildRegisterForm({
                    ...vaildRegisterForm,
                    email: regEmail.test(value),
                  });
                }}
              />
              <label className="label">
                <span className="label-text-alt"></span>
                <span
                  className={`label-text-alt text-error ${
                    vaildRegisterForm?.email || !registerForm?.email
                      ? 'hidden'
                      : ''
                  } `}
                >
                  올바르지 않는 이메일
                </span>
              </label>

              <label className="mt-3 label">
                <span className="label-text">비밀번호</span>
              </label>
              <input
                required
                type="password"
                placeholder="비밀번호"
                className="input input-bordered"
                onChange={({ target: { value } }) => {
                  setRegisterForm({ ...registerForm, password: value });
                  setVaildRegisterForm({
                    ...vaildRegisterForm,
                    password: regPass.test(value),
                  });
                }}
              />
              <label className="label">
                <span className="label-text-alt">
                  영문/숫자/특수문자 2가지 이상 조합 (8~20자)
                </span>
                <span
                  className={`label-text-alt text-error ${
                    vaildRegisterForm?.password || !registerForm?.password
                      ? 'hidden'
                      : ''
                  }`}
                >
                  올바르지 않는 비밀번호 규칙
                </span>
              </label>

              <label className="mt-3 label">
                <span className="label-text">비밀번호 확인</span>
              </label>
              <input
                required
                type="password"
                placeholder="비밀번호 확인"
                className="input input-bordered"
                onChange={({ target: { value } }) => {
                  setConfirmPassword(value);
                }}
              />
              <label className="label">
                <span className="label-text-alt"></span>
                <span
                  className={`label-text-alt text-error ${
                    registerForm?.password === confirmPassword ||
                    !confirmPassword //다른 옵션
                      ? 'hidden'
                      : ''
                  }`}
                >
                  비밀번호가 일치하지 않습니다.
                </span>
              </label>

              <label className="mt-3 label">
                <span className="label-text">이름</span>
              </label>
              <input
                required
                type="text"
                placeholder="Name"
                className="input input-bordered"
                onChange={({ target: { value } }) => {
                  setRegisterForm({ ...registerForm, name: value });
                  setVaildRegisterForm({
                    ...vaildRegisterForm,
                    name: value === '' ? false : true,
                  });
                }}
              />
              <label className="label">
                <span className="label-text-alt"></span>
                <span
                  className={`label-text-alt text-error ${
                    vaildRegisterForm?.name || !registerForm?.name
                      ? 'hidden'
                      : ''
                  }`}
                >
                  이름을 입력해주세요.
                </span>
              </label>

              <label className="mt-3 label">
                <span className="label-text">전화번호</span>
              </label>
              <input
                required
                type="text"
                placeholder="010-0000-0000"
                className="input input-bordered"
                onChange={({ target: { value } }) => {
                  setRegisterForm({ ...registerForm, phoneNumber: value });
                  setVaildRegisterForm({
                    ...vaildRegisterForm,
                    phoneNumber: regPhoneNumber.test(value),
                  });
                }}
              />
              <label className="label">
                <span className="label-text-alt"></span>
                <span
                  className={`label-text-alt text-error ${
                    vaildRegisterForm?.phoneNumber || !registerForm?.phoneNumber
                      ? 'hidden'
                      : ''
                  }`}
                >
                  {!vaildRegisterForm?.phoneNumber && '올바르지 않는 전화번호'}
                </span>
              </label>

              <label className="mt-3 label">
                <span className="label-text">생년월일</span>
              </label>
              <input
                required
                type="date"
                placeholder="생년월일"
                className="input input-bordered"
                onChange={({ target: { value } }) => {
                  setRegisterForm({ ...registerForm, birthday: value });
                  setVaildRegisterForm({
                    ...vaildRegisterForm,
                    birthday: value ? true : false,
                  });
                }}
              />

              <label className="mt-3 label">
                <span className="label-text">성별</span>
              </label>

              <div className=" join">
                <input
                  required
                  className="!w-1/2 join-item btn"
                  type="radio"
                  name="gender"
                  aria-label="남자"
                  onClick={() => {
                    setVaildRegisterForm({
                      ...vaildRegisterForm,
                      gender: 'M',
                    });
                  }}
                />
                <input
                  required
                  className="!w-1/2 join-item btn "
                  type="radio"
                  name="gender"
                  aria-label="여자"
                  onClick={() => {
                    setVaildRegisterForm({
                      ...vaildRegisterForm,
                      gender: 'F',
                    });
                  }}
                />
              </div>
            </form>

            <div className="w-full mt-6 form-control">
              <button className="btn btn-primary" onClick={requestRegister}>
                가입하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
