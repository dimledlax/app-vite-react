import "../index.css";
import { Reducer, useEffect, useReducer, useRef, useState } from "react";
import { ColDef, Rows, Table } from "./Table";
import { Loader } from "./Loader";
import { Card } from "./Card";
import { FinalPokemons, PokemonApi, Pokemon } from "../models";
import { NavButtons } from "./NavButtons";
import axios from "axios";
import { AppDispatch, RootState, decremented, incremented } from "../store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const colDefs: ColDef[] = [
    {
      header: "",
      field: "key",
    },
    {
      header: "",
      field: "avatar",
    },
    {
      header: "",
      field: "name",
    },
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
  // const isMounted = useRef(false);
  const [pickedPokemon, setPickedPokemon] = useState<Pokemon>();

  const load = async () => {
    dispatch({ type: "LOAD_START" });

    const urls = await axios.get<FinalPokemons>(POKEMON_URL, {
      params: {
        limit: state.limit,
        offset: state.offset,
      },
    });

    const finalPokemons: Rows = [];

    for (const { url } of urls.data.results) {
      const fullPokemon = (await axios.get<PokemonApi>(url)).data;

      const shrinkedPokemon: Pokemon = {
        avatar: fullPokemon.sprites.front_default,
        name: fullPokemon.name.toUpperCase(),
        height: fullPokemon.height,
        weight: fullPokemon.weight,
        experience: fullPokemon.base_experience,
      };

      finalPokemons.push({
        ...shrinkedPokemon,
        avatar: (
          <img
            src={shrinkedPokemon.avatar}
            className="avatarImg"
            onClick={() => {
              handlePokemonClick(shrinkedPokemon);
            }}
          ></img>
        ),
        key: fullPokemon.id,
      });
    }

    dispatch({ type: "LOAD_FINISH", data: finalPokemons });
  };

  const handlePokemonClick = (pokemon: Pokemon) => {
    setPickedPokemon(pokemon);
  };

  useEffect(() => {
    // if (isMounted.current) {
      load();
    // } else {
    //   isMounted.current = true;
    // }
  }, [state.offset]);

  // console.log("render")

  const count = useSelector((state: RootState) => state.value)
  const reduxDispatch = useDispatch<AppDispatch>();

  return (
    <>
      {/* <h1>Counter - {count}</h1> */}
      {/* <button onClick={() => reduxDispatch(incremented())}>increment</button>
      <button onClick={() => reduxDispatch(decremented())}>decrement</button> */}
      <div className="leftContent">
        {state.status === "loading" ? (
          <Loader />
        ) : (
          <Table colDefs={colDefs} data={state.rows} />
        )}
        <NavButtons
          prevClick={() => {
            state.offset >= 5 &&
              dispatch({
                type: "SET_PARAMS",
                params: { offset: state.offset - state.limit },
              });
          }}
          nextClick={() => {
            dispatch({
              type: "SET_PARAMS",
              params: { offset: state.offset + state.limit },
            });
          }}
        />
      </div>

      <div className="rightContent">
        <Card pokemon={pickedPokemon} />
      </div>
    </>
  );
}
export default App;
