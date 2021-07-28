import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {
  regexPatternForNumber = /^[0-9]\d*$/;

  identification = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(this.regexPatternForNumber)
  ]);

  getErrorMessage() {
    let status = '';
    if (this.identification.hasError('required')) {
      status = 'Campo obrigátorio.';
    } else if (this.identification.hasError('minlength')) {
      status = 'Indentificação menor que 8 digitos.';
    } else if (this.identification.hasError('pattern')) {
      status = 'Indentificação no formato inválido.';
    }
    return status;
  }
}
