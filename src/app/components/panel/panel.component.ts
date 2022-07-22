import { CalculatorService } from './../../services/calculator.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input('optionsHomeComponent') options: any;

  panelWebForm = new FormGroup({
    pages: new FormControl('', Validators.required),
    languages: new FormControl('', Validators.required)
  })

  pages: number = 1;
  languages: number = 1;

  constructor(private calculatorService: CalculatorService) {

  }

  ngOnInit(): void { }

  public updateWebExtras() {
    this.calculatorService.calculateWebExtras(Number(this.pages), Number(this.languages));
  }

  public addPage() {
    this.pages++;
    this.updateWebExtras();
  }

  public deletePage() {
    this.pages--;
    this.pages = this.pages <= 0 ? 1 : this.pages;
    this.updateWebExtras();
  }

  public addLanguage() {
    this.languages++;
    this.updateWebExtras();
  }

  public deleteLanguage() {
    this.languages--;
    this.languages = this.languages <= 0 ? 1 : this.languages;
    this.updateWebExtras();
  }


}
