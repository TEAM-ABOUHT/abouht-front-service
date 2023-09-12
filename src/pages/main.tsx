/* eslint-disable react/button-has-type */
import Drawer from './components/Drawer';
import TopNavBar from './components/TopNavigation';
import BottomNavigation from './components/BottomNavigation';
const Main = () => (
  <div>
    {/* 순서에 따른 오버레이 규칙이 적용됨 (아래로 갈수록 맨앞으로 가져오기) */}
    <BottomNavigation />
    <Drawer nav={<TopNavBar />} />
  </div>
);
export default Main;
