import { CommonModule } from '@angular/common';
import { Component, computed, inject, viewChild, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../shared/services/cart/cart.service';
import { ModalComponent } from "../../shared/comp/modal/modal.component";
import { MethodPayComponent } from '../../shared/comp/method-pay/method-pay.component';
import { MethodDeliveryComponent } from '../../shared/comp/method-delivery/method-delivery.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PedidoService } from '../../shared/services/pedido/pedido.service';
import { Amount } from '../../shared/model/amount.model';
import { Additional } from '../../shared/model/additional.model';
import { Order } from '../../shared/model/order.model';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { InputMaskComponent } from "../../shared/comp/form/input-mask/input-mask.component";
import { ValidateComponent } from "../../shared/comp/form/validate/validate.component";
import { InputComponent } from "../../shared/comp/form/input/input.component";
import { EstablishmentService } from '../../shared/services/establishment/establishment.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent, MethodPayComponent, MethodDeliveryComponent, ReactiveFormsModule, NgxMaskDirective, InputMaskComponent, ValidateComponent, InputComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  providers: [
    provideNgxMask(),
  ]
})
export class CartComponent {

  order: Order | undefined

  @ViewChild('confimModal')
  mdlConfirm!: ModalComponent

  @ViewChild('dados')
  mdlDados!: ModalComponent

  @ViewChild('mtdPay')
  mtdPay!: MethodPayComponent

  @ViewChild('mtdDelivery')
  mtdDelivery!: MethodDeliveryComponent

  form = inject(FormBuilder)
  cart = inject(CartService)
  pedido = inject(PedidoService)
  router = inject(Router)
  establishmentService = inject(EstablishmentService)

  total = 0

  protected establishment: any

  clienteForm = this.form.group({
    nome: ['', [Validators.required]],
    telefone: ['', [Validators.required, Validators.minLength(13)]]
  })

  constructor() {
    if(this.cart.getCart().getValue().length <= 0){
      this.router.navigate(['menu'])
      return
    }

    this.cart.total.subscribe((t) => {
      this.total = t
    })

    this.establishmentService.inf.subscribe(data => {
      this.establishment = data
    })
  }

  increment(amount: Amount) {
    this.cart.increment(amount)
  }

  decrement(amount: Amount) {
    this.cart.decrement(amount)
  }

  getAmountValue(amount: Amount) {
    let value = amount?.product.price

    amount?.additional?.forEach((attr: Additional) => {
      value += attr.price
    });

    return value * amount?.quantity;
  }

  getAttributeList(attrs: any) {
    return attrs?.map((attr: Additional) => attr.name)?.join(', ')
  }

  delete(amount: Amount) {
    this.cart.removeItemToCart(amount)
  }

  sendMenssageWhatsapp(message: string) {
    const phoneNumber = `${this.establishment.phoneNumber}`;  // Número de telefone no formato internacional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  finalizarPedido() {
    if (this.clienteForm.valid) {
      this.mdlDados!.active = false
      this.mdlConfirm!.active = true

      let pedido: Order = {
        name: this.clienteForm.controls.nome.value || '',
        cellPhone: this.clienteForm.controls.telefone.value || '',
        amounts: this.cart.cart.getValue(),
        payment: this.mtdPay.getMethodPayment(),
        address: this.mtdDelivery.getMethodDelivery(),
        id: 0,
        dateCreation: ''
      }

      console.log(pedido)

      this.order = pedido

      this.pedido.create(pedido).subscribe(data => {
        this.order = data
      })

    } else {
      this.mdlDados!.active = true
    }
  }

  confirm() {
    if (this.order) {
      let allProduct = ``

      this.order.amounts?.forEach((amount) => {
        let addicionais = 
``

        amount.additional?.forEach(add => {
          addicionais += 
` 1 ${add.name}\n`
        })

        let product = 
`x${amount.quantity} ${amount.product.name} ${this.getAmountValue(amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
${addicionais}`
        allProduct += product
      })

      let message = 
`
 Olá, Gostaria de Confirmar Meu Pedido! 🗒️
    
🔹 ID do Pedido: ${this.order.id}
🔹 Nome do Cliente: ${this.order.name}
🔹 Telefone: ${this.order.cellPhone}
🔹 Endereço: ${this.order.address}
    
📦 Produtos:

${allProduct}
    
💳 Forma de Pagamento: ${this.order.payment}
💰 Total: ${this.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
`
      this.sendMenssageWhatsapp(message)
    }
  }
}
