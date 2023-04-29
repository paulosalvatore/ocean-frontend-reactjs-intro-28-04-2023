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

const bulbasaur = {
  nome: "Bulbasaur",
  imagemUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
};

const itens = [pikachu, charmander, bulbasaur];

function App() {
  return (
    <>
      <h1>Samsung Ocean</h1>
      <div className="cards">
        {itens.map(function (item, index) {
          return <Card item={item} key={`card_${index}`} />;
        })}
      </div>
    </>
  );
}

export default App;
