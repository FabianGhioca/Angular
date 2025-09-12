import { Component } from '@angular/core';
import { TemplateDrivenForms } from "../views/forms/template-driven-forms/template-driven-forms";

@Component({
  selector: 'app-profile',
  imports: [TemplateDrivenForms],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

}
