import { Component } from '@angular/core';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css', './fotter2.component.css'],
})
export class FotterComponent {
  year: number = new Date().getFullYear();
  name = 'Mohand';
}
