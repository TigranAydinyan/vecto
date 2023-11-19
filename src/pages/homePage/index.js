import { LeftSidebar, HomeBody } from "components";

export const HomePage = () => {
  return (
    <div className="home_container">
      <div className="home_background"></div>
      <div className="content">
        <LeftSidebar />
        <HomeBody />
      </div>
    </div>
  );
};