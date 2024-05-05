import "../index.css";
import { Reducer, useEffect, useReducer, useRef, useState } from "react";
import { ColDef, Rows, Table } from "./Table";
import { LoadButton } from "./LoadButton";
import { Loader } from "./Loader";
import { Card } from "./Card";
import { Pokemons, PokemonApi } from "../models";
import { NavButtons } from "./NavButtons";
import axios from "axios";

function App() {
  const colDefs: ColDef[] = [
    {
      header: "",
      field: "avatar",
    },
    {
      header: "",
      field: "name",
    },
    // {
    //   header: "Height",
    //   field: "height",
    // },
    // {
    //   header: "Weight",
    //   field: "weight",
    // },
    // {
    //   header: "Experience",
    //   field: "experience",
    // },
  ];

  const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

  const initialState: {
    rows: Rows;
    status: "none" | "loading" | "success" | "error";
    offset: number;
    limit: number;
  } = {
    rows: [],
    status: "none",
    offset: 0,
    limit: 5,
  };

  const reducer: Reducer<
    typeof initialState,
    | { type: "LOAD_START" }
    | { type: "LOAD_FINISH"; data: Rows }
    | { type: "LOAD_ERROR" }
    | {
        type: "SET_PARAMS";
        params: Partial<Pick<typeof initialState, "limit" | "offset">>;
        // Record, Partial, Pick, Omit
      }
  > = (state, action) => {
    switch (action.type) {
      case "LOAD_START":
        return {
          ...state,
          status: "loading",
        };

      case "LOAD_FINISH":
        return {
          ...state,
          status: "success",
          rows: action.data,
        };

      case "LOAD_ERROR":
        return {
          ...state,
          status: "error",
        };

      case "SET_PARAMS":
        return {
          ...state,
          ...action.params, // 1. params: {} 2. params: {limit} 3. params: {offset} 4. params: {offset, limit}
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const isMounted = useRef(false);
  const [pickedPokemon, setPickedPokemon] = useState();

  const load = async () => {
    dispatch({ type: "LOAD_START" });

    const urls = await axios.get<Pokemons>(POKEMON_URL, {
      params: {
        limit: state.limit,
        offset: state.offset,
      },
    });

    const pokemons: Rows = [];

    for (const { url } of urls.data.results) {
      const pokemon = (await axios.get<PokemonApi>(url)).data;

      pokemons.push({
        avatar: <img src={pokemon.sprites.front_default} className="avatarImg" onClick={()=>console.log("clicked")}></img>,
        name: pokemon.name.toUpperCase(),
        height: pokemon.height,
        weight: pokemon.weight,
        experience: pokemon.base_experience,
        id: pokemon.id,
      });
    }

    dispatch({ type: "LOAD_FINISH", data: pokemons });
  };

  useEffect(() => {
    if (isMounted.current) {
      load();
    } else {
      isMounted.current = true;
    }
  }, [state.offset]);

  return (
    <>
      <div className="leftContent">
        {state.status === "loading" ? (
          <Loader />
        ) : (
          <Table colDefs={colDefs} data={state.rows}/>
        )}
        <LoadButton onClick={load}>Load Data</LoadButton>
        <NavButtons data={state} dispatch={dispatch} />
      </div>

      <div className="rightContent">
        <Card data={state.rows}/>
      </div>
    </>
  );
}
export default App;
