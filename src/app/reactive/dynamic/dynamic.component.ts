import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.formBuilder.array([
      ['Metal Gear', [Validators.required]],
      ['Overwatch', [Validators.required]]
    ], Validators.required)
  });

  newFavorite: FormControl = this.formBuilder.control('', [Validators.required, Validators.minLength(3)])

  get favoritesArray() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  notValidField(field_control: string) {
    return this.myForm.controls[field_control].errors && this.myForm.controls[field_control].touched;
  }

  addNewFavorite() {
    if (this.newFavorite.invalid) { return; }

    this.favoritesArray.push(new FormControl( this.newFavorite.value, [Validators.required] ));

    this.newFavorite.reset();
  }

  deleteFavorite(index: number) {
    this.favoritesArray.removeAt(index);
  }

  saveForm() {
    if (this.myForm.valid) {
      return ;
    }

    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}
