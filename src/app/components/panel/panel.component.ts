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
  pages: number = 0;
  languages: number = 0;
  minRequired: number = 1;

  // Reactive form instances
  panelForm = new FormGroup({
    pages: new FormControl('',
      [
        Validators.required,
        Validators.min(this.minRequired),
        Validators.pattern("^[0-9]*$")
      ]
    ),
    languages: new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.min(this.minRequired),
        Validators.pattern("^[0-9]*$")
      ]))
  })

  // constructor dependency injection
  constructor(private calculatorService: CalculatorService) {

  }

  ngOnInit(): void { }

  public updateExtras() {
    this.calculatorService.calculateExtras(Number(this.pages), Number(this.languages));
  }

  public setExtra(extra: string, action: string) {
    if (extra === 'page' && action === 'add') this.pages++;
    if (extra === 'page' && action === 'delete') this.pages--;

    if (extra === 'language' && action === 'add') this.languages++;
    if (extra === 'language' && action === 'delete') this.languages--;

    this.pages = this.pages < 1 ? 0 : this.pages;
    this.languages = this.languages < 1 ? 0 : this.languages;

    this.updateExtras();
  }

  // Validator reactive form function
  public isMinQuantityValid(fieldName: string): boolean {
    let quantity: number = Number(this.panelForm.get(fieldName)?.value);
    return quantity < this.minRequired ? false : true;
  }


}
