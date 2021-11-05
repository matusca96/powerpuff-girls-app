declare namespace TVShow {
  interface Show {
    id: string;
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
    id: string;
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
    id: string;
    name: string;
    airdate: string;
    season: number;
    number: number;
    runtime: number;
    image?: Image;
    summary?: string;
  }

  interface Season {
    id: string;
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
    id: string;
    name: string;
    image: Image;
  }

  interface Character {
    id: string;
    name: string;
    image?: Image;
  }

  interface Image {
    medium: string;
    original: string;

    // only used on front
    isFallback?: boolean;
  }
}
