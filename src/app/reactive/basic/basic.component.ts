import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   'name': new FormControl('Plaxwell'),
  //   'price': new FormControl(1200),
  //   'count': new FormControl(30)
  // });

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    count: [, [Validators.required, Validators.min(0)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  notValidField(field_control: string) {
    return this.myForm.controls[field_control].errors && this.myForm.controls[field_control].touched;
  }

  saveForm() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return ;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
