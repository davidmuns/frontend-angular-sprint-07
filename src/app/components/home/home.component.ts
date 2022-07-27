import { CalculatorService } from './../../services/calculator.service';
import { Component, OnInit } from '@angular/core';
import { IServicio } from '../../models/iservicio';
import serviciosJson from 'src/assets/servicios.json'
import { Budget } from '../../models/budget';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  servicios: IServicio[] = serviciosJson;
  isDisabled: boolean = false;

  // constructor dependency injection
  constructor(private calculatorService: CalculatorService) {

  }

  ngOnInit(): void { }

  public updateTotal() {
    const pages: number = this.calculatorService.getPages();
    console.log(pages);

    const languages: number = this.calculatorService.getLanguages();
    this.isDisabled = pages > 0 && languages > 0 ? false : true;
    this.calculatorService.calculateTotal(this.servicios);
  }

  public getTotalWithExtras(): string {
    return this.calculatorService.getTotalWithExtras();
  }

  public createBudget(name: string, client: string) {
    this.calculatorService.createBudget(name, client, this.servicios);
  }
}
