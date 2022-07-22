import { CalculatorService } from './../../services/calculator.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {
  @Input('optionsHomeComponent') options: any;

  pages: number = 0;
  languages: number = 0;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void { }

  public updateWebExtras() {
    this.calculatorService.calculateWebExtras(this.pages, this.languages);
  }

}
