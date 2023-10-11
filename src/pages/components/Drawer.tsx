import { Cookies, useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

type DrawerProps = {
  topNav?: string | JSX.Element | JSX.Element[];
  bottomNav?: string | JSX.Element | JSX.Element[];
  children?: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({
  topNav,
  children,
  bottomNav,
}: DrawerProps) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="table-cell w-screen h-screen drawer-content">
          {topNav}
          {children}
          {bottomNav}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="block drawer-overlay" />
          <div className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>결제관리</a>
              </li>
              <li>
                <a>계정관리</a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate('/write');
                  }}
                >
                  글쓰기
                </a>
              </li>
            </ul>
            <div className="absolute inset-x-0 bottom-0 p-4 menu ">
              <ul>
                <div className="divider" />
                <li>
                  {cookies.token ? (
                    <a
                      onClick={() => {
                        removeCookie('token');
                        navigate('/login');
                      }}
                    >
                      로그아웃
                    </a>
                  ) : (
                    <a
                      onClick={() => {
                        navigate('/login');
                      }}
                    >
                      로그인
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Drawer;
