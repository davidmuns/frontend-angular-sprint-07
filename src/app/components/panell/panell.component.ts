import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {
  @Input('optionsHomeComponent') options: any;
  @Input('totalHomeComponent') total: number = 0;

  pages: number = 0;
  languages: number = 0;
  totalPlusExtras: number = 0;



  constructor() { }

  ngOnInit(): void { }

  public addToTotal() {
    let extra: number = 0
    this.pages = this.pages < 0 ? 0 : this.pages;
    this.languages = this.languages < 0 ? 0 : this.languages;
    if (this.pages === 0 && this.languages != 0) {
      extra = this.languages * 30;
    } else if (this.pages != 0 && this.languages === 0) {
      extra = this.pages * 30;
    } else {
      extra = (this.pages * this.languages) * 30;
    }

    this.totalPlusExtras = this.total + extra;

  }

}
