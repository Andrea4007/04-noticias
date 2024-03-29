import { Component, OnInit, ViewChild} from '@angular/core';
import { IonSegment } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  //colocarle un valor por defecto al ion segment
  @ViewChild(IonSegment) segment: IonSegment;

  categorias = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
 
  constructor() {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.segment.value=this.categorias[0];
  }

}
