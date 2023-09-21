/* eslint-disable react/button-has-type */
import Drawer from './components/Drawer';
import TopNavBar from './components/TopNavigation';
import BottomNavigation from './components/BottomNavigation';
import Carousel from './components/Carousel';
import { CardProps } from './components/Card';
import dummyBookCover from '../assets/dummy book cover.png';
const Main = () => {
  const dummyData: CardProps[] = [
    {
      img: dummyBookCover,
      title: 'test1',
    },
    {
      img: dummyBookCover,
      title: 'test2',
      badge: 'new',
    },
    {
      img: dummyBookCover,
      title: 'test3',
      badge: 'new',
      tags: ['health', 'retro'],
    },
    {
      img: dummyBookCover,
      title: 'test4',
      tags: ['math'],
    },
  ];

  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    focusOnSelect: true,
  };
  return (
    <Drawer topNav={<TopNavBar />}>
      <div className="container w-full h-[calc(100vh-8rem)] px-4  mx-auto sm:px-6 lg:px-8 max-w-4xl  ">
        {/* 상단 북 소개 헤더 영역 */}
        <h1 className="text-xl font-bold sm:text-3xl ">
          이번 주 Best!
          <br />
          OOO 작가님의 「작품제목」
        </h1>
        <div className="divider" />
        {/* 북 카드 영역 */}
        <div className="h-[calc(100%-10rem)] flex items-center ">
          <Carousel setting={settings} cards={dummyData} />
        </div>
      </div>

      {/*
      <div className="mx-auto max-w-xl w-full h-screen mb-[4rem] px-4 py-6 sm:px-6 lg:px-8 pb-8 bg-green-500">
        <h1 className="text-3xl font-bold whitespace-nowrap ">
          이번 주 Best!
          <br />
          OOO 작가님의 「작품제목」
        </h1>

        <div className="flex content-center justify-center bg-orange-600 " />

        

      <div className="flex content-center justify-center h-auto h-full py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <div className="shadow-xl card w-96 hover:h-full max-h-max bg-base-100">
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
};
export default Main;
function useWindowDimensions(): { height: any; width: any } {
  throw new Error('Function not implemented.');
}
