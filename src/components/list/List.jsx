import "./list.scss";
import ListItem from "../listItem/ListItem";

function List({ data }) {
  console.log(data);
  return (
    <div className="list">
      <span className="listTitle">YOUR&nbsp;&nbsp;PLANTS</span>
      <div className="container">
        <ListItem
          data={{
            name: "Ivy Grace",
            game: "Ivy Grace, a graceful plant, enchants with its trailing vines and heart-shaped leaves, bringing an aura of timeless beauty to any setting. Its lush foliage can elegantly cascade from hanging baskets.",
            imageSRC1:
              "https://media.discordapp.net/attachments/1095343493142032498/1140659345923780702/biljka_2.png?width=671&height=676",
            imageSRC2:
              "https://media.discordapp.net/attachments/704714563144384554/1139652181830676510/biljka.png?width=480&height=676",
            imageSRC3:
              "https://media.discordapp.net/attachments/1095343493142032498/1140659690540367933/biljka3.png?width=724&height=676",
            imageSRC4:
              "https://media.discordapp.net/attachments/1095343493142032498/1140664639655530548/biljka4.png?width=537&height=676",
          }}
        />
        {data.map((item, index) => (
          <ListItem data={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default List;
