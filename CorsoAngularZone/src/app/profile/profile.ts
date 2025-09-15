import { Component } from '@angular/core';
import { TemplateDrivenForms } from "../views/forms/template-driven-forms/template-driven-forms";
import { ReactiveForms } from "../views/forms/reactive-forms/reactive-forms";

@Component({
  selector: 'app-profile',
  imports: [TemplateDrivenForms, ReactiveForms],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

}
