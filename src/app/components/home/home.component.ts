import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  total: number = 0;
  isWebChecked: boolean = false;
  isChecked: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public checkboxWeb(e: any) {
    this.isWebChecked = e.target.checked;
    this.total += this.isWebChecked ? 500 : -500;
  }

  public checkboxSeo(e: any) {
    this.total += e.target.checked ? 300 : -300;
  }

  public checkboxGoogle(e: any) {
    this.total += e.target.checked ? 200 : -200;
  }

}
