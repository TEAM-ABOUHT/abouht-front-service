import { useNavigate } from 'react-router-dom';
import abouhtLogo from '../assets/abouht.svg';

const Title = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen bg-base-200  ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={abouhtLogo}
          className="max-w-sm rounded-lg drop-shadow-md m-10"
        />
        <div className="">
          <p>저희와 함께 새로운 이야기를 시작해봐요</p>
          <h1 className="text-3xl font-bold">올리고, 읽고, 찾아보세요!</h1>
          <p className="pb-12">
            당신만의 이야기가 궁금해요. <br />
            당신만의 글을 보여주세요!
          </p>
          <button
            className="btn w-full btn-primary"
            onClick={() => navigate('/login')}
          >
            지금 바로 시작하기
          </button>
        </div>
      </div>
      {/**
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <div>
          <img className="content-center" src={abouhtLogo} />
        </div>
      </div>
    </div>
  </div>
  */}
    </div>
  );
};
export default Title;
