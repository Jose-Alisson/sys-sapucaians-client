import { Component, Inject, inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstablishmentService } from './shared/services/establishment/establishment.service';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private establishmentS = inject(EstablishmentService)
  private title = inject(Title)

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.establishmentS.getEstablishment().subscribe(data => {
      this.title.setTitle(`${data.ClientNome} | Cliente`)
    })
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const head = document.head;
      const link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'stylesheet');
      this.renderer.setAttribute(link, 'href', `${environment.API_MAIN}/style.css`);
      this.renderer.appendChild(head, link);
    }
  }
}
