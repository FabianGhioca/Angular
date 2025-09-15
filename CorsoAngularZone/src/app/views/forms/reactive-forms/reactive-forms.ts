import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './reactive-forms.html',
  styleUrls: ['./reactive-forms.scss']
})
export class ReactiveForms {
  submitForm() {
    console.log("Form submit");
  }
}
