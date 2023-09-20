type DrawerProps = {
  topNav?: string | JSX.Element | JSX.Element[];
  bottomNav?: string | JSX.Element | JSX.Element[];
  children?: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({
  topNav,
  children,
  bottomNav,
}: DrawerProps) => (
  <>
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content table-cell w-screen h-screen">
        {topNav}
        {children}
        {bottomNav}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="block drawer-overlay" />
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <ul>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
          <div className="menu p-4 absolute inset-x-0 bottom-0 ">
            <ul>
              <div className="divider" />
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Drawer;
