import { useNavigate } from 'react-router-dom';
import abouhtLogo from '../assets/abouht.svg';
import Drawer from './components/Drawer';
import TopNavBar from './components/TopNavigation';
const privacy = () => {
  const navigate = useNavigate();
  const style = {
    backgroundcolor : '',
    border : '1px solid black',
  }
  return (
    <Drawer topNav={<TopNavBar />}>
    <div className="hero min-h-screen bg-base-200  " >
      <div className="hero-content flex-col lg:flex-row" style={style}>
        
        <div style={{ width: 348, height: 83 }}>
            <b>아이디</b>
            <p>설정한 아이디</p>
        </div>
        
        <div style={{ width: 348, height: 83 }}>
            <b>아이디</b>
            <p>설정한 아이디</p>
        </div>
        <div style={{ width: 348, height: 83 }}>
            <b>아이디</b>
            <p>설정한 아이디</p>
        </div>
        
      </div>
   </div>
   </Drawer>
  );
};
export default privacy;
