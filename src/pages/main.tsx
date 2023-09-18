/* eslint-disable react/button-has-type */
import Drawer from './components/Drawer';
import TopNavBar from './components/TopNavigation';
import BottomNavigation from './components/BottomNavigation';
const Main = () => (
  <Drawer topNav={<TopNavBar />} bottomNav={<BottomNavigation />}>
    <div className="px-4 py-6 sm:px-6 lg:px-8 min-h-[83%] max-h-[85%] mx-auto max-w-2xl ">
      <div className=" h-screen mb-[4rem] ">
        {/* 상단 북 소개 헤더 영역 */}
        <h1 className="whitespace-nowrap text-3xl  font-bold ">
          이번 주 Best!
          <br />
          OOO 작가님의 「작품제목」
        </h1>
        <div className="divider" />
        {/* 북 카드 영역 */}
        <div className="flex justify-center content-center whitespace-nowrap ">
          <div className="card max-w-xs  max-w-[60%]  max-h-max bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://marketplace.canva.com/EAD161UHRIg/1/0/1003w/canva-%ED%8C%8C%EB%9E%80%EC%83%89-%EC%82%AC%EC%A7%84-%EA%B3%BC%ED%95%99-%EC%86%8C%EC%84%A4-%EC%B1%85-%ED%91%9C%EC%A7%80-W-oW2VKWuGo.jpg"
                alt="Shoes"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">별들이 겹치는 순간</h2>
              <p>#베스트셀러 #베스트셀러</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*
      <div className="mx-auto max-w-xl w-full h-screen mb-[4rem] px-4 py-6 sm:px-6 lg:px-8 pb-8 bg-green-500">
        <h1 className="whitespace-nowrap text-3xl  font-bold ">
          이번 주 Best!
          <br />
          OOO 작가님의 「작품제목」
        </h1>

        <div className=" flex justify-center content-center  bg-orange-600" />

        

      <div className="flex justify-center content-center h-full mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 h-auto ">
        <div className="card w-96 hover:h-full max-h-max bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://marketplace.canva.com/EAD161UHRIg/1/0/1003w/canva-%ED%8C%8C%EB%9E%80%EC%83%89-%EC%82%AC%EC%A7%84-%EA%B3%BC%ED%95%99-%EC%86%8C%EC%84%A4-%EC%B1%85-%ED%91%9C%EC%A7%80-W-oW2VKWuGo.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
      </div>
      */}

    {/**
     * 대충 내용이 들어가야함
     */}
  </Drawer>
);
export default Main;
