import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Articolo } from '../model/articolo';

@Component({
  selector: 'aForm',
  templateUrl: './articolo-form.component.html',
  styleUrls: ['./articolo-form.component.css']
})
export class ArticoloFormComponent implements OnInit {

  @Output() submit = new EventEmitter<Articolo>();
  model: Articolo;

  constructor() {
    this.model = new Articolo();
  }

  inviaArt(formValues: any) {
    console.log(formValues)
    this.submit.emit(formValues)
  }

  ngOnInit(): void {
  }

}
