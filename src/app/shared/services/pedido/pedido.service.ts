import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private URL = `${environment.API_PEDIDOS}/order`
  private http = inject(HttpClient)

  constructor() {
    console.log(this.URL)
  }

  create(pedido: any){
    return this.http.post<any>(`${this.URL}/create`, pedido)
  }
}
