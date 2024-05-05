export interface PokemonName {
  name: string;
  url: string;
}

export interface GetPokemonListRequest {
  config: object;
  data: {
    results: PokemonName[];
    next: string;
    previous: null | string;
  };
  headers: object;
  request: object;
  status: number;
  statusText: string;
}

export interface Pokemon {
  name: string;
  height: string;
  weight: string;
  experience: string;
}

export interface Pokemons {
  count: number;
  next: string;
  previous: null | string;
  results: {
    name: string;
    url: string;
  }[];
}

export type PokemonApi = {
  abilities: Array<{
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }>
  base_experience: number
  cries: {
    latest: string
    legacy: string
  }
  forms: Array<{
    name: string
    url: string
  }>
  game_indices: Array<{
    game_index: number
    version: {
      name: string
      url: string
    }
  }>
  height: number
  held_items: Array<unknown>
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Array<{
    move: {
      name: string
      url: string
    }
    version_group_details: Array<{
      level_learned_at: number
      move_learn_method: {
        name: string
        url: string
      }
      version_group: {
        name: string
        url: string
      }
    }>
  }>
  name: string
  order: number
  past_abilities: Array<unknown>
  past_types: Array<unknown>
  species: {
    name: string
    url: string
  }
  sprites: {
    back_default: string
    back_female: unknown
    back_shiny: string
    back_shiny_female: unknown
    front_default: string
    front_female: unknown
    front_shiny: string
    front_shiny_female: unknown
    other: {
      dream_world: {
        front_default: string
        front_female: unknown
      }
      home: {
        front_default: string
        front_female: unknown
        front_shiny: string
        front_shiny_female: unknown
      }
      "official-artwork": {
        front_default: string
        front_shiny: string
      }
      showdown: {
        back_default: string
        back_female: unknown
        back_shiny: string
        back_shiny_female: unknown
        front_default: string
        front_female: unknown
        front_shiny: string
        front_shiny_female: unknown
      }
    }
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: string
          back_gray: string
          back_transparent: string
          front_default: string
          front_gray: string
          front_transparent: string
        }
        yellow: {
          back_default: string
          back_gray: string
          back_transparent: string
          front_default: string
          front_gray: string
          front_transparent: string
        }
      }
      "generation-ii": {
        crystal: {
          back_default: string
          back_shiny: string
          back_shiny_transparent: string
          back_transparent: string
          front_default: string
          front_shiny: string
          front_shiny_transparent: string
          front_transparent: string
        }
        gold: {
          back_default: string
          back_shiny: string
          front_default: string
          front_shiny: string
          front_transparent: string
        }
        silver: {
          back_default: string
          back_shiny: string
          front_default: string
          front_shiny: string
          front_transparent: string
        }
      }
      "generation-iii": {
        emerald: {
          front_default: string
          front_shiny: string
        }
        "firered-leafgreen": {
          back_default: string
          back_shiny: string
          front_default: string
          front_shiny: string
        }
        "ruby-sapphire": {
          back_default: string
          back_shiny: string
          front_default: string
          front_shiny: string
        }
      }
      "generation-iv": {
        "diamond-pearl": {
          back_default: string
          back_female: unknown
          back_shiny: string
          back_shiny_female: unknown
          front_default: string
          front_female: unknown
          front_shiny: string
          front_shiny_female: unknown
        }
        "heartgold-soulsilver": {
          back_default: string
          back_female: unknown
          back_shiny: string
          back_shiny_female: unknown
          front_default: string
          front_female: unknown
          front_shiny: string
          front_shiny_female: unknown
        }
        platinum: {
          back_default: string
          back_female: unknown
          back_shiny: string
          back_shiny_female: unknown
          front_default: string
          front_female: unknown
          front_shiny: string
          front_shiny_female: unknown
        }
      }
      "generation-v": {
        "black-white": {
          animated: {
            back_default: string
            back_female: unknown
            back_shiny: string
            back_shiny_female: unknown
            front_default: string
            front_female: unknown
            front_shiny: string
            front_shiny_female: unknown
          }
          back_default: string
          back_female: unknown
          back_shiny: string
          back_shiny_female: unknown
          front_default: string
          front_female: unknown
          front_shiny: string
          front_shiny_female: unknown
        }
      }
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: string
          front_female: unknown
          front_shiny: string
          front_shiny_female: unknown
        }
        "x-y": {
          front_default: string
          front_female: unknown
          front_shiny: string
          front_shiny_female: unknown
        }
      }
      "generation-vii": {
        icons: {
          front_default: string
          front_female: unknown
        }
        "ultra-sun-ultra-moon": {
          front_default: string
          front_female: unknown
          front_shiny: string
          front_shiny_female: unknown
        }
      }
      "generation-viii": {
        icons: {
          front_default: string
          front_female: unknown
        }
      }
    }
  }
  stats: Array<{
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }>
  types: Array<{
    slot: number
    type: {
      name: string
      url: string
    }
  }>
  weight: number
}

