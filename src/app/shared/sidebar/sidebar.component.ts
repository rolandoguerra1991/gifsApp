import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    #sidebar {
      height: 100%;
      min-height: 100vh;
      min-width: 180px;
    }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  get historial() {
    return this.gifsService.historial;
  }

  ngOnInit(): void {
  }

}
