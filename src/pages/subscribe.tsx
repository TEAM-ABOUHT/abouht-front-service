import { useNavigate } from 'react-router-dom';
import abouhtLogo from '../assets/abouht.svg';
import Drawer from './components/Drawer';
import TopNavBar from './components/TopNavigation';
const subscribe = () => {
  const navigate = useNavigate();
  const style = {
    border : '1px solid black',
  }
  return (
    <Drawer topNav={<TopNavBar />}>
    <div className="hero min-h-screen bg-base-200  " >
      <div className="hero-content flex-col lg:flex-row" style={style}>
        
        <div style={{ width: 348, height: 166 }}>
            <b>요금제 이름</b>
            <p>₩4,500 /Month</p>
        </div>
        
        <div style={{ width: 348, height: 166 }}>
            <b>요금제 이름</b>
            <p>₩4,500 /Month</p>
        </div>
        <div style={{ width: 348, height: 166 }}>
            <b>요금제 이름</b>
            <p>₩4,500 /Month</p>
        </div>
        
      </div>
   </div>
   </Drawer>
  );
};
export default subscribe;
