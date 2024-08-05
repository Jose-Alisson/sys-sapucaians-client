import { Component, ViewChild } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../modal/modal.component";
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../form/input/input.component";
import { ValidateComponent } from "../form/validate/validate.component";
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { InputMaskComponent } from "../form/input-mask/input-mask.component";

@Component({
  selector: 'app-method-pay',
  standalone: true,
  imports: [DropdownComponent, CommonModule, ModalComponent, ReactiveFormsModule, InputComponent, ValidateComponent, NgxMaskDirective, InputMaskComponent],
  templateUrl: './method-pay.component.html',
  styleUrl: './method-pay.component.scss',
  providers: [
    provideNgxMask()
  ]
})
export class MethodPayComponent {

  paymentValue = new FormControl(0, [Validators.required])

  @ViewChild('drop')
  drop?: DropdownComponent

  getMethodPayment() {
    if (this.drop?.select) {
      let payment = [this.drop?.select, this.paymentValue.value].filter(item => item != null && item != undefined).join(', ')
      return payment
    }
    return 'Não Especificada'
  }
}
