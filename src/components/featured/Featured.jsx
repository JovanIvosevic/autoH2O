import GrassIcon from "@mui/icons-material/Grass";
import "./featured.scss";
import { useState } from "react";
import AddGame from "../../pages/addGame/AddGame";

function Featured() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleAddPlant = () => {
    let storage = [];
    if (JSON.parse(localStorage.getItem("data")) !== null) {
      storage = [...JSON.parse(localStorage.getItem("data")), plantData];
      // storage.append("1");
    } else {
      storage = [plantData];
    }
    localStorage.setItem("data", JSON.stringify(storage));
    setShowModal(false);
    window.location.reload();
  };

  const [plantData, setPlantData] = useState({
    name: undefined,
    game: undefined,
    imageSRC1: undefined,
    imageSRC2: undefined,
    imageSRC3: undefined,
    imageSRC4: undefined,
  });
  const handleChange = (e) => {
    setPlantData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const actionBar = (
      <button onClick={handleAddPlant} className="newPlay">
        add your plant
      </button>
  );

  const modal = (
    <AddGame onClose={handleClose} actionBar={actionBar}>
      <div className="cards">
        <div className="addPlant">
          <div className="plantName">ADD YOUR PLANT</div>
          <div className="columns">
            <div className="column1">
              <span className="plainText">Plant Name <span className="star">*</span></span>
              <input type="text" onChange={handleChange} id="name" placeholder="Enter the name of your plant..."/>
              <span className="plainText">Description <span className="star">*</span></span>
              <textarea type="text" onChange={handleChange} id="game" placeholder="Write a short description..."/>
            </div>
            <div className="column2">
              <span className="plainText">Main Image <span className="star">*</span></span>
              <input type="text" onChange={handleChange} id="imageSRC1" placeholder="Enter the link of your images..."/>
              <span className="plainText">Image 1 <span className="star">*</span></span>
              <input type="text" onChange={handleChange} id="imageSRC2" placeholder="Enter the link of your images..."/>
              <span className="plainText">Image 2 <span className="star">*</span></span>
              <input type="text" onChange={handleChange} id="imageSRC3" placeholder="Enter the link of your images..."/>
              <span className="plainText">Image 3 <span className="star">*</span></span>
              <input type="text" onChange={handleChange} id="imageSRC4" placeholder="Enter the link of your images..."/>
            </div>
          </div>
        </div>
      </div>
    </AddGame>
  );

  return (
    <div className="featured">
      <div className="logo">
        <img
          src="https://media.discordapp.net/attachments/704714563144384554/1139914853591556197/biljka_logo.png"
          alt=""
        />
        <span>autoH2O</span>
      </div>
      <div className="info">
        <img
          src="https://media.discordapp.net/attachments/704714563144384554/1139925009318563971/krug.jpg?width=541&height=676"
          alt=""
          className="img1"
        />
        <img
          src="https://media.discordapp.net/attachments/704714563144384554/1139916069792919662/biljka_1.png?width=690&height=676"
          alt="logo"
          className="img2"
        />
        <svg
          width="180"
          height="180"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="img3"
        >
          <circle id="Ellipse 2" cx="125" cy="125" r="125" fill="#91B972" />
        </svg>
        <div className="descBox">
          <span className="desc">
            From <span>tiny seeds</span> to <span>majestic trees</span>, plants
            teach us the poetry of patience, reminding us that some of life's
            most remarkable moments take time to blossom.
          </span>
          <div className="buttons">
            <button className="play">
              <GrassIcon className="icon" />
              <span onClick={handleClick}>Add your plant</span>
            </button>
          </div>
        </div>
      </div>
      {showModal && modal}
    </div>
  );
}

export default Featured;
