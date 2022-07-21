import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {
  @Input('parentData') isWebChecked: boolean = false;
  pages: number = 0
  languages: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
