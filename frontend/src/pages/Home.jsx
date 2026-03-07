import { Outlet } from "react-router";
import Nav from "../components/Nav";
export default function MainLayout() {
  return (
    <>
      <h1>
        <a href="/" className="site-title">
          Ezee Notes
        </a>
      </h1>
      <Nav />
      {/* <Outlet /> is a placeholder. React Router puts the BoxBasic components right here! */}
      <Outlet />
    </>
  );
}
