import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorsCustom } from 'src/app/shared/validators/validators-custom';
import { emailPattern, nameFirstNamePattern } from 'src/app/shared/validators/validators-pattern';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.pattern(nameFirstNamePattern) ] ],
    username: ['', [ Validators.required, ValidatorsCustom.cantBePlaxwell ]],
    email: ['', [ Validators.required, Validators.pattern(emailPattern) ], [this.emailValidator]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  }, {
    validators: [ ValidatorsCustom.sameFields('password', 'password2')]
  });

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;

    if (errors?.required) {
      return 'Email es obligatorio';
    } else if (errors?.pattern) {
      return 'El valor del campo no tiene el formato de correo electrónico';
    } else if (errors?.emailInUse) {
      return 'El email introducido ya está en uso';
    }
    return '';
  }

  constructor(private formBuilder: FormBuilder,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
  }

  notValidField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  saveForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}
