import "./resto.css";
import coverImage from "../assets/restaurent.jpg";
import ambianceImage from "../assets/plat.jpg";
import chefImage from "../assets/chef.jpg";
import dish1 from "../assets/filet.jpg";
import dish2 from "../assets/saumon.jpg";
import dish3 from "../assets/tartelette.jpg";

function Resto() {
  const menu = [
    {
      name: "Filet de Bœuf Rossini",
      description: "Un classique français avec foie gras et sauce Périgourdine.",
      image: dish1,
    },
    {
      name: "Saumon en Croûte",
      description: "Servi avec une réduction de citron et des légumes croquants.",
      image: dish2,
    },
    {
      name: "Tartelette aux Fruits Rouges",
      description: "Dessert maison, frais et gourmand.",
      image: dish3,
    },
  ];

  return (
    <div className="restaurant">
      {/* Section Header */}
      <header className="restaurant-header">
        <img
          src={coverImage}
          alt="Restaurant de l'hôtel"
          className="restaurant-cover"
        />
        <div className="header-text">
          <h1>Bienvenue au Restaurant de l'Hôtel</h1>
          <p>Découvrez une expérience gastronomique unique et raffinée.</p>
        </div>
      </header>

      {/* Section Présentation */}
      <section className="about-restaurant">
        <div className="presentation">
          <img
            src={ambianceImage}
            alt="Ambiance du restaurant"
            className="presentation-image"
          />
          <div className="presentation-text">
            <h2>Notre Restaurant</h2>
            <p>
              Situé au cœur de l'hôtel, notre restaurant offre un cadre
              chaleureux et raffiné. Avec une décoration élégante et une vue
              exceptionnelle, chaque repas est une expérience inoubliable.
            </p>
            <p>
              Nos plats, préparés avec soin par des chefs expérimentés, mettent
              à l'honneur les produits locaux et de saison, pour vous offrir une
              cuisine savoureuse et authentique.
            </p>
          </div>
        </div>

        <div className="chef">
        <h2>Rencontrez notre Chef</h2>
          <img
            src={chefImage}
            alt="Notre chef"
            className="chef-image"
          />
          <h2>Adolf MUSSOLINI </h2>
          <p>
          Le Chef Adolf est passionné par la gastronomie. Avec une expérience de plus de 15 ans dans des restaurants étoilés, il propose une cuisine à la fois créative et respectueuse des traditions culinaires françaises.
Son approche met en valeur des produits de saison, soigneusement sélectionnés auprès de producteurs locaux. Il accorde une attention particulière à la présentation de ses plats, alliant esthétisme et saveurs uniques.
En perpétuelle quête de perfection, il s’inspire aussi bien des recettes traditionnelles que des techniques modernes pour offrir une expérience culinaire inoubliable à ses convives.
          </p>
        </div>
      </section>

      {/* Section Menu */}
      <section className="menu">
        <h2>Notre Menu</h2>
        <div className="menu-container">
          {menu.map((dish, index) => (
            <div className="menu-item" key={index}>
              <img
                src={dish.image}
                alt={dish.name}
                className="menu-item-image"
              />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resto;
