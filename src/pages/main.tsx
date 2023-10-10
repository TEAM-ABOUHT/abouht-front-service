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
        res.map(({ title }) => {
          return { img: dummyBookCover, title };
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
  return (
    <Drawer topNav={<TopNavBar />}>
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
