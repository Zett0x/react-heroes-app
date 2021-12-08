import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import { imgHeroePath } from "../../helpers/constants";
import { useMemo } from "react";
export const HeroScreen = () => {
  const { heroeId } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  const handleReturn = () => {
    //Esto es lo que hice, pero es mas facil pasarle el parametro -1 entonces navigate te devuelve a la pagina anterior
    // const path = hero.publisher.toLowerCase().includes("marvel")
    //   ? "marvel"
    //   : "dc";

    // navigate(`/${path}`);

    navigate(-1);
  };

  if (!hero) return <Navigate to="/" />;

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imgHeroePath(id)}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush mt-4">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>Apparance:</b> {first_appearance}
          </li>
        </ul>
        <h5 className="mt-5">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
