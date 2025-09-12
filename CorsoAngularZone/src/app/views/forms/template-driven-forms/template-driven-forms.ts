import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.scss'
})

export class TemplateDrivenForms {
  persona = {
    nome: "",
    cognome: ""
  };
  submitForm() {
    if(this.persona.cognome && this.persona.nome){
      console.log(this.persona);
    } else {
      alert("Compila tutti i campi!");
    }
    console.log(this.persona);
  }

  getErrorMessage(isNome: boolean) {
    if (isNome) {
      if (this.persona.nome.length > 20 ) {
        return 'Non può superare i 20 caratteri';
      } else if (!this.persona.nome) {
        return 'Il campo è obbligatorio';
      }
    }
    return '';
  }
}
