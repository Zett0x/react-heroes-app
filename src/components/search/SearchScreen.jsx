import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import queryString from "query-string";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const hSearch = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={handleInputChange}
              value={searchText}
            ></input>

            <button type="submit" className="btn btn-outline-primary mt-3">
              Buscar...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Buscar un héroe</div>
          ) : (
            hSearch.length === 0 && (
              <div className="alert alert-danger">
                No heroes found {`'${q}'`}
              </div>
            )
          )}

          {hSearch.map((h) => (
            <HeroCard
              key={h.id}
              id={h.id}
              superhero={h.superhero}
              publisher={h.publisher}
              alter_ego={h.alter_ego}
              first_appearance={h.first_appearance}
              characters={h.characters}
            />
          ))}
        </div>
      </div>
    </>
  );
};
