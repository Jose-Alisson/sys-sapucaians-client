import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private URL = `http://localhost:8080/order`
  private http = inject(HttpClient)

  constructor() { }

  create(pedido: any){
    return this.http.post<any>(`${this.URL}/create`, pedido)
  }
}
