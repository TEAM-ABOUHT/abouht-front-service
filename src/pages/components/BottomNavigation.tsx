import { useState, useContext } from 'react';
import { PostContext } from '../write';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const BottomNavigation = () => {
  const [selectBtnType, setBtnType] = useState<string>('home');
  const changeBtnType = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      setBtnType(target.id);
      target.classList.add('active');
    } else {
      target.classList.remove('active');
    }
  };

  return (
    <>
      <div className="static bg-green-200 btm-nav" />
      <div className="btm-nav">
        <label htmlFor="tt" id="tt">
          <input
            type="radio"
            name="btm-nav-btn"
            className="hidden"
            form="tt"
            onChange={changeBtnType}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </label>
        <input
          type="radio"
          name="btm-nav-btn"
          className="hidden"
          id="books"
          onChange={changeBtnType}
        />
        <label htmlFor="books">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </label>

        <input
          type="radio"
          name="btm-nav-btn"
          className="hidden"
          id="billing"
          onChange={changeBtnType}
        />
        <label htmlFor="billing">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </label>

        <input
          type="radio"
          name="btm-nav-btn"
          className="hidden"
          id="home"
          onChange={changeBtnType}
        />
        <label htmlFor="home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </label>
      </div>
    </>
  );
};

export const WriteBottomNavigation = () => {
  const { title, context } = useContext(PostContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="grid content-center grid-cols-3 btm-nav">
        <button className="sm:mx-10 btn btn-disabled">저장</button>
        <button className="sm:mx-10 btn btn-disabled">임시저장</button>
        <button
          className="sm:mx-10 btn"
          onClick={() => {
            axios
              .post(
                import.meta.env.VITE_CHANNEL_GOORM_HOST! ||
                  import.meta.env.VITE_CHANNEL_LOCAL_HOST! + '/literature/add',
                { title, content: context },
                { withCredentials: true }
              )
              .then((res) => {
                alert('해당 글이 게시되었습니다!');
                console.log('####', res);
                navigate('/main');
              })
              .catch((err) => {
                console.error('####', err);
                alert('권한이 없거나 잘못된 요청입니다.');
              });
          }}
        >
          업로드
        </button>
      </div>
    </>
  );
};

export default BottomNavigation;
