declare namespace TVShow {
  interface Show {
    id: number;
    name: string;
    genres: string[];
    premiered: string;
    rating: {
      average: number;
    };
    image: Image;
    summary: string;
    _embedded: {
      cast: Cast[];
      seasons: Season[];
      episodes: Episode[];
    };
  }

  interface GeneralInfo {
    id: number;
    name: string;
    genres: string[];
    premiered: string;
    rating: {
      average: number;
    };
    image: Image;
    summary: string;
  }

  interface Episode {
    id: number;
    name: string;
    airdate: string;
    season: number;
    number: number;
    runtime: number;
    image?: Image;
    summary?: string;
  }

  interface Season {
    id: number;
    number: number;
    name: string;
    episodeOrder: number;
    summary: string;
  }

  interface Cast {
    person: Person;
    character: Character;
    self: boolean;
    voice: boolean;
  }

  interface Person {
    id: number;
    name: string;
    image: Image;
  }

  interface Character {
    id: number;
    name: string;
    image?: Image;
  }

  interface Image {
    medium: string | any;
    original: string | any;

    // only used on front
    isFallback?: boolean;
  }
}
