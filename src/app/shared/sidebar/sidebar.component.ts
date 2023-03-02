import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private gifService : GifsService){}

  arreglo(): string[]{
      return this.gifService.historial;
  }

  buscar(item:string){
    return this.gifService.buscarGifs(item)!;
  }
}
