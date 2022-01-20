import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BordersCountry, CountrySmall } from 'src/app/shared/models/country.model';

import { CountryService } from 'src/app/shared/services/country.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    country: [{value: '', disabled: true}, [Validators.required]],
    borderCountry: [{value: '', disabled: true}, [Validators.required]]
  });

  regions: string[] = [];

  countries: CountrySmall[] = [];

  borderCountries: string[] = [];

  constructor(private fb: FormBuilder,
              private countryService: CountryService) { }

  ngOnInit(): void {
    this.regions = this.countryService.regions;

    // Subscribe Region Changes
    this.myForm.get('region')?.valueChanges.subscribe( (region: string) => {
      this.countryService.getCountriesByRegion(region).subscribe(countries => {

        this.countries = countries;
        this.myForm.get('country')?.reset('');

        if (this.myForm.get('region')?.value) {
          this.myForm.get('country')?.enable();
        } else {
          this.myForm.get('country')?.disable();
        }
      });
    });

    // Subscribe Country Changes
    this.myForm.get('country')?.valueChanges.subscribe( (country: string) => {
      this.countryService.getBordersCountriesByCode(country).subscribe( bordersCountries => {

        this.borderCountries = bordersCountries?.borders || [];
        this.myForm.get('borderCountry')?.reset('');

        if (this.myForm.get('country')?.value) {
          this.myForm.get('borderCountry')?.enable();
        } else {
          this.myForm.get('borderCountry')?.disable();
        }
      });
    });
  }

  saveForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
