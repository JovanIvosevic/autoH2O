import { useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";

const Home = () => {
  let defaultData = null;
  if (null !== JSON.parse(localStorage.getItem("data"))) {
    defaultData = JSON.parse(localStorage.getItem("data"));
  }
  const [data, setData] = useState(defaultData);
  return (
    <div className="home">
      <Featured />
      <List data={data} />
      <div className="footer">© 2023 autoH2O. All rights reserved.</div>
    </div>
  );
};

export default Home;
