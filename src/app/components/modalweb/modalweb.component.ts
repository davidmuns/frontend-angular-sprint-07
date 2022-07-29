import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modalweb',
  templateUrl: './modalweb.component.html',
  styleUrls: ['./modalweb.component.css']
})
export class ModalWebComponent implements OnInit {

  @Input('modalTextFromPanel') modalText = "";


  constructor(private modal: NgbModal) {

  }

  ngOnInit(): void {
  }

  public getModal() {
    return this.modal;
  }

}
