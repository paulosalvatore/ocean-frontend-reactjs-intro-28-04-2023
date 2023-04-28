import "./App.css";
import Card from "./Card";

const pikachu = {
  nome: "Pikachu",
  imagemUrl:
    "https://sm.ign.com/ign_br/screenshot/default/025pikachu-os-anime-10_5z4v.png",
};

const charmander = {
  nome: "Charmander",
  imagemUrl:
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/d/d4/Charmander.gif",
};

function App() {
  return (
    <>
      <h1>Samsung Ocean</h1>
      <Card item={pikachu} />
      <Card item={charmander} />
    </>
  );
}

export default App;
