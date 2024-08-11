import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { FileService } from '../file/file.service';
import { DomSanitizer } from '@angular/platform-browser';
import { category } from '../../model/category.model';
import { Product } from '../../model/product.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private URL = `${environment.API_PEDIDOS}/product`
  private http = inject(HttpClient)
  private fileService = inject(FileService)
  private sanitizer = inject(DomSanitizer)
  private v = 0

  constructor() { }

  getAllToCategory() {
    let params = new HttpParams().append("visible", false)
    return this.http.get<category[]>(`${this.URL}/sortByCategory`, {params : params}).pipe(tap(category => {
      category.forEach(category => {
        category.products?.forEach(product => {
          if(product.photoUrl){
            this.v++
            this.fileService.download(product.photoUrl).subscribe(blob => {
              product.photoObject = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob))
            })
          }
        })
      })
    }))
  }

  search(s: string) {
    let params = new HttpParams().append('s', s).append('visible', false);
    return this.http
      .get<any[]>(`${this.URL}/search`, { params: params })
      .pipe(
        map((products: any[]) => {
          return products.map((item) => {
            return { ...item, photoObj: {} };
          });
        }), tap(products => {
          products.forEach((product: Product) => {
            if (product.photoUrl) {
              this.fileService.download(product.photoUrl).subscribe(blob => {
                product.photoObject = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob))
              })
            }
          })
        })
      );
  }
}
