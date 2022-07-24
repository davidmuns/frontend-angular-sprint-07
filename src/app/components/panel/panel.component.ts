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

  panelWebForm = new FormGroup({
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
    this.pages = this.pages < 1 ? 0 : this.pages;
    this.updateWebExtras();
  }

  public addLanguage() {
    this.languages++;
    this.updateWebExtras();
  }

  public deleteLanguage() {
    this.languages--;
    this.languages = this.languages < 1 ? 0 : this.languages;
    this.updateWebExtras();
  }

  // Validator form function
  public isMinNumValid(field: number): boolean {
    let fieldName: string = field === 1 ? 'pages' : 'languages';
    let fieldNumber: number = Number(this.panelWebForm.get(fieldName)?.value);
    return fieldNumber < this.minRequired ? false : true;
  }


}
