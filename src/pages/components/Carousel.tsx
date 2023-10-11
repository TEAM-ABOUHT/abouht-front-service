import Card, { CardProps } from './Card';
import bookCover from '../../assets/dummy book cover.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { useCallback, useRef } from 'react';

type CarouselProps = {
  setting: object;
  cards?: CardProps[];
};

const Carousel = ({ setting, cards }: CarouselProps) => {
  return (
    <Slider {...setting}>
      {cards?.map(({ img, title, badge, tags, onClick }: CardProps) => (
        <Card
          img={img}
          title={title}
          badge={badge}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </Slider>
  );
};
export default Carousel;
