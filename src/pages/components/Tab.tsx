import { useState, useRef } from 'react';
import Slider, { Settings } from 'react-slick';

export type TabType = { name: string; element: JSX.Element };

type TabProps = {
  tabs: TabType[];
};
const Tab = ({ tabs }: TabProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeTabIndex, setTabIndex] = useState(0);
  const tabDrag = () => {};
  const changeTabIndex = (i: number) => {
    sliderRef.current?.slickGoTo(i);
    setTabIndex(i);
  };

  const settings: Settings = {
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    afterChange: (currentSlide) => {
      setTabIndex(currentSlide);
    },
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {tabs.map(({ name }, index) => (
          <a
            id={`tab_${index}`}
            className={`px-5 pt-5 pb-10 tab tab-bordered ${
              index == activeTabIndex && 'tab-active'
            }`}
            onClick={() => changeTabIndex(index)}
          >
            {name}
          </a>
        ))}
      </div>
      <Slider ref={sliderRef} {...settings}>
        {tabs.map(({ element }, index) => {
          return <>{element}</>;
        })}
      </Slider>
    </>
  );
};
export default Tab;
///px-5 pt-5 pb-10 tab tab-bordered
