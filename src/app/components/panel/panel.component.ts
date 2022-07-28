import { CalculatorService } from './../../services/calculator.service';
import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IServicio } from 'src/app/models/iservicio';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {
  @Input('sendServicesToPanel') servicios!: IServicio[];
  @Output() sendPagesToHome = new EventEmitter<number>();
  @Output() sendLanguagesToHome = new EventEmitter<number>();

  pages: number = 0;
  languages: number = 0;
  minRequired: number = 1;
  panelForm: FormGroup;
  modalTexts: string[] = ["Enter the number of pages you want your website to have.", "Enter the number of languages you want your website to have."];

  // constructor dependency injection
  constructor(private calculatorService: CalculatorService) {
    // Reactive form instances
    this.panelForm = new FormGroup({
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

  }

  ngOnInit(): void { }

  public updateExtras(): void {
    this.sendPagesToHome.emit(Number(this.pages));
    this.sendLanguagesToHome.emit(Number(this.languages));
    this.calculatorService.calculateExtras(Number(this.pages), Number(this.languages));
  }

  public setExtra(extra: string, action: string): void {

    if (extra === 'page' && action === 'add') this.pages++;

    if (extra === 'page' && action === 'delete') this.pages--;

    if (extra === 'language' && action === 'add') this.languages++;

    if (extra === 'language' && action === 'delete') this.languages--;

    this.pages = this.pages < 1 ? 0 : this.pages;
    this.languages = this.languages < 1 ? 0 : this.languages;

    this.sendPagesToHome.emit(this.pages);
    this.sendLanguagesToHome.emit(this.languages);

    this.updateExtras();
  }

  // Validator reactive form function
  public isMinQuantityValid(fieldName: string): boolean {
    let quantity: number = Number(this.panelForm.get(fieldName)?.value);
    return quantity < this.minRequired ? false : true;
  }
}
