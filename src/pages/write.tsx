import Drawer from './components/Drawer';
import TopNavigation from './components/TopNavigation';
import { WriteBottomNavigation } from './components/BottomNavigation';

const Write = () => {
  return (
    <Drawer topNav={<TopNavigation />} bottomNav={<WriteBottomNavigation />}>
      <div className="container w-full h-[calc(100vh-8rem)] px-4  mx-auto sm:px-6 lg:px-8 max-w-4xl  ">
        <h1>글쓰기</h1>
        <div className="divider" />
        <textarea
          className="w-full  h-[calc(100vh-15rem)] resize-none textarea textarea-primary"
          placeholder="Bio"
        ></textarea>
      </div>
    </Drawer>
  );
};

export default Write;
