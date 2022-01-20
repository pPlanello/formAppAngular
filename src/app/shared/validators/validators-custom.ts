import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export class ValidatorsCustom {

	static cantBePlaxwell(formControl: FormControl): ValidationErrors | null {
    const value = formControl.value?.trim().toLowerCase();
    if (value === 'plaxwell') {
      return {noPlaxwell: true};
    }
    return null;
  }

  static sameFields(field1: string, field2: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const field_1 = control.get(field1)?.value;
      const field_2 = control.get(field2)?.value;

      if (field_1 !== field_2) {
        control.get(field_2)?.setErrors({ noIgual: true });
        return { noIgual: true };
      }

      control.get(field_2)?.setErrors({ noIgual: true });
      return { noIgual: true };
    }
  }
}
