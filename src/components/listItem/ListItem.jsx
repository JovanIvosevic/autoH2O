import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import "./listitem.scss";
import { useState } from "react";

function ListItem(data) {
  data = data.data;
  console.log(data);
  const [plant1, setPlant1] = useState(data.imageSRC1);
  const [plant2, setPlant2] = useState(data.imageSRC2);
  const [plant3, setPlant3] = useState(data.imageSRC3);

  const [plant4, setPlant4] = useState(data.imageSRC4);

  const switchImage = (plantSmall, setPlantSmall) => {
    let plantBig = plant1;
    setPlant1(plantSmall);
    setPlantSmall(plantBig);
  };

  return (
    <div className="listItem">
      <img src={plant1} alt="" className="imgLogo" />
      <div className="plantItems">
        <div className="slika">
          <div
            className="plantItem"
            onClick={() => switchImage(plant2, setPlant2)}
          >
            <img src={plant2} alt="plant" />
          </div>
          <div
            className="plantItem"
            onClick={() => switchImage(plant3, setPlant3)}
          >
            <img src={plant3} alt="plant" />
          </div>
          <div
            className="plantItem"
            onClick={() => switchImage(plant4, setPlant4)}
          >
            <img src={plant4} alt="plant" />
          </div>
        </div>
        <div className="itemInfo">
          <div className="items">
            <div className="name">{data.name}</div>
          </div>
          <div className="desc">{data.game}</div>
          <button className="play">
            <WaterDropOutlinedIcon className="icon" />
            <span>water me!</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
