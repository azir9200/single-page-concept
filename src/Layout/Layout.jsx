import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <section>
        <nav>
          <ul >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/product">Product </a>
            </li>
            <li>
              <a href="/Dashboard">Dashboard </a>
            </li>
          </ul>
        </nav>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Layout;