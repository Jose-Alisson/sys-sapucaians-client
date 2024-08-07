import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstablishmentService } from './shared/services/establishment/establishment.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  private establishmentS = inject(EstablishmentService)
  private title = inject(Title)

  constructor(){
    this.establishmentS.getEstablishment().subscribe(data => {
      this.title.setTitle(`${data.ClientNome} | Cliente`)
    })
  }
}
