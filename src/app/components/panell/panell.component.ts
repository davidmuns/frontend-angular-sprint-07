import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {
  @Input('parentData') isWebChecked: boolean = false;
  @Input('parentData2') total: number = 0;

  pages: number = 0;
  languages: number = 0;
  totalPlusExtras: number = 0;



  constructor() {

  }

  ngOnInit(): void {
  }
  public addToTotal() {

    if (this.pages > -1 && this.languages > -1) {
      let extra: number = (this.pages * this.languages) * 30;
      let totalPlusExtra: number = this.total + extra;
      this.totalPlusExtras = this.total + extra;

      // console.log('extra: ', extra + '€');
      // console.log('total: ', this.total + '€');
      // console.log('total + extra: ', totalPlusExtra + '€');


    }
  }

}
