import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { combineLatest, Observable, of } from 'rxjs';

import { BordersCountry, CountrySmall } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _regions: string[] = ['Africa', 'America', 'Asia', 'Europa', 'Oceania'];

  get regions() {
    return [...this._regions];
  }

  constructor(private http: HttpClient) { }

  public getCountriesByRegion(region: string): Observable<Array<CountrySmall>> {
    return this.http.get<Array<CountrySmall>>(`https://restcountries.com/v3.1/region/${region}`);
  }

  public getBordersCountriesByCode(code: string): Observable<BordersCountry | null> {
    if (!code) {
      return of(null);
    }
    return this.http.get<BordersCountry>(`https://restcountries.com/v3.1/alpha/${code}?fields=borders`);
  }

  public getCountrySmallByCode(code: string): Observable<CountrySmall> {
    return this.http.get<CountrySmall>(`https://restcountries.com/v3.1/alpha/${code}`);
  }
}
