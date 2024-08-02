import { Component, computed, effect, inject, ViewChild } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-method-delivery',
  standalone: true,
  imports: [DropdownComponent, CommonModule, ModalComponent, ReactiveFormsModule],
  templateUrl: './method-delivery.component.html',
  styleUrl: './method-delivery.component.scss'
})
export class MethodDeliveryComponent {

  @ViewChild('modalEndereco')
  modalEnd!: ModalComponent

  @ViewChild('drop')
  drop?: DropdownComponent

  form = inject(FormBuilder)

  addressForm = this.form.group({
    rua: ['', [Validators.required]],
    numero: ['', [Validators.required]],
    complemento: ['']
  })

  address: any

  constructor() {
    effect(() => {
      let valor = this.drop?.selectSignal()

      if (valor === 'Loja') {
        this.address = undefined
      }
      if (valor === 'Delivery') {
        this.modalEnd.active = true
      }
      return this.drop?.selectSignal()
    })
  }

  concluirEndereco() {
    this.address = { ...this.addressForm.value }
    this.addressForm.reset()
    this.modalEnd.active = false
  }

  getMethodDelivery() {

    if (this.address) {
      let rua = this.address.rua
      let numero = this.address.numero
      let complemento = this.address.complemento
      let address = [rua, numero, complemento].filter(item => item != null && item != undefined).join(', ')
      return address
    }
    return 'Loja'
  }
}
