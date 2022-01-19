import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    genero: ['', [Validators.required]],
    notifications: [true, [Validators.required]],
    conditions: [true, [Validators.requiredTrue]],
  });

  person = {
    genero: 'F',
    notifications: true
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({ ...this.person, conditions: false });

    this.myForm.valueChanges.subscribe(form => {
      console.log(form);
    });

    this.myForm.get('conditions')?.valueChanges.subscribe(conditions => {
      console.log(conditions);
    });
  }

  saveForm() {
    const formValue = { ...this.myForm.value };
    delete formValue.conditions;

    this.person = formValue;

  }

}
