/* eslint-disable react/button-has-type */
import Drawer from './components/Drawer';
import TopNavBar from './components/TopNavigation';
import BottomNavigation from './components/BottomNavigation';
import Carousel from './components/Carousel';
import { CardProps } from './components/Card';
import dummyBookCover from '../assets/dummy book cover.png';
import Tab from './components/Tab';
import { Settings } from 'react-slick';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
  const [literatureList, setLiteratureList] = useState<undefined | CardProps[]>(
    dummyData
  );
  useEffect(() => {
    axios.get('http://localhost:3030/literature/list').then((response) => {
      const res = response.data.data as Array<any>;
      console.log(res);
      setLiteratureList(
        res.map(({ title, content }) => {
          return {
            img: dummyBookCover,
            title,
            onClick: (e) => {
              console.log(e);
              setPopup(true);
              setPostContent(content);
              setPostTitle(title);
            },
          };
        })
      );
    });
  }, []);

  const settings: Settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    draggable: true,
  };
  const [popupStatus, setPopup] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [postTitle, setPostTitle] = useState('');
  return (
    <Drawer topNav={<TopNavBar />}>
      <div
        className={`flex flex-col items-center justify-center h-screen ${
          popupStatus ? '' : 'hidden'
        }`}
      >
        <div className="w-full h-screen bg-center bg-cover">
          <button
            className="absolute z-50 btn"
            onClick={() => {
              setPopup(false);
            }}
          >
            닫기
          </button>
          <div className="flex items-center justify-center w-full h-full backdrop-brightness-50">
            <span className="w-1/2 text-4xl text-center text-white">
              <h1>{postTitle}</h1>
              <p>{postContent}</p>
            </span>
          </div>
        </div>
      </div>
      <div className="container w-full h-[calc(100vh-8rem)] px-4  mx-auto sm:px-6 lg:px-8 max-w-6xl  ">
        {/* 상단 북 소개 헤더 영역 */}
        <Tab
          tabs={[
            {
              name: 'Best',
              element: (
                <>
                  <h1 className="text-xl font-bold sm:text-3xl ">
                    이번 주 Best!
                    <br />
                    OOO 작가님의 「작품제목」
                  </h1>
                  <div className="divider" />
                  {/* 북 카드 영역 */}
                  <div className="h-[calc(100%-10rem)]  flex items-center ">
                    <Carousel setting={settings} cards={literatureList} />
                  </div>
                </>
              ),
            },
            {
              name: '소설',
              element: (
                <>
                  <h1 className="text-xl font-bold sm:text-3xl ">
                    소설
                    <br />
                    OOO 작가님의 「작품제목」
                  </h1>
                </>
              ),
            },
            {
              name: '시',
              element: (
                <>
                  <h1 className="text-xl font-bold sm:text-3xl ">
                    시
                    <br />
                    OOO 작가님의 「작품제목」
                  </h1>
                </>
              ),
            },
            {
              name: '판타지',
              element: (
                <>
                  <h1 className="text-xl font-bold sm:text-3xl ">
                    판타지
                    <br />
                    OOO 작가님의 「작품제목」
                  </h1>
                </>
              ),
            },
          ]}
        />
      </div>
    </Drawer>
  );
};
export default Main;
