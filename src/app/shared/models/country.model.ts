export interface CountrySmall {
  name: Name;
  cca3: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

export interface NativeName {
  aym: Translation;
  que: Translation;
  spa: Translation;
}

export interface Translation {
  official: string;
  common:   string;
}

export interface BordersCountry {
  borders: string[];
}
