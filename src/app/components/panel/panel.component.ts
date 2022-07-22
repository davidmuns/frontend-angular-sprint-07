import { CalculatorService } from './../../services/calculator.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input('optionsHomeComponent') options: any;

  pages: number = 0;
  languages: number = 0;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void { }

  public updateWebExtras() {
    this.calculatorService.calculateWebExtras(this.pages, this.languages);
  }

}
