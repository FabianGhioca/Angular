import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './reactive-forms.html',
  styleUrls: ['./reactive-forms.scss']
})
export class ReactiveForms {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: new FormControl<string>("", [Validators.required, Validators.maxLength(20)]),
      cognome: new FormControl<string>("", Validators.required),
      password: new FormControl<string>("", [Validators.minLength(8), Validators.required]),
      ConfermaPassword: new FormControl<string>("", [Validators.minLength(8), Validators.required])
    }, {
      Validators: this.matchPasswordValidator
    });
  }

  matchPasswordValidator(form: AbstractControl){
    const password = form.get("password")?.value;
    const ConfermaPassword = form.get("ConfermaPassword")?.value;

    return password === ConfermaPassword ? null : { mismatch: true }
  }


  submitForm() {
    if(this.form.valid){
      console.log(this.form.value);
    } else {
      alert("Form non valido");
    }
    console.log(this.form.value);
  }
}
