import Drawer from './components/Drawer';
import TopNavigation from './components/TopNavigation';
import { WriteBottomNavigation } from './components/BottomNavigation';
import { createContext, useState } from 'react';

export type PostType = { title: string; context: string };
export const PostContext = createContext<PostType>({ title: '', context: '' });

const Write = () => {
  const [title, setTitle] = useState<string>('');
  const [context, setContext] = useState<string>('');
  return (
    <PostContext.Provider value={{ title, context }}>
      <Drawer topNav={<TopNavigation />} bottomNav={<WriteBottomNavigation />}>
        <div className="container w-full h-[calc(100vh-8rem)] px-4  mx-auto sm:px-6 lg:px-8 max-w-4xl  ">
          <textarea
            className="w-full h-5 resize-none textarea textarea-primary"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={({ target }) => {
              setTitle(target.value);
            }}
          ></textarea>
          <div className="divider" />
          <textarea
            className="w-full  h-[calc(100vh-15rem)] resize-none textarea textarea-primary"
            placeholder="내용을 입력하세요"
            value={context}
            onChange={({ target }) => {
              setContext(target.value);
            }}
          ></textarea>
        </div>
      </Drawer>
    </PostContext.Provider>
  );
};

export default Write;
