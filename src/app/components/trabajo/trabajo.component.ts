import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styles: [
  ]
})
export class TrabajoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    document.querySelector('body').classList.add('bg-color-trabajo');
  }
  ngOnDestroy() {
    document.querySelector('body').classList.remove('bg-color-trabajo');
}
}
