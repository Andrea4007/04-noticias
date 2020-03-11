import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias: Article[] = [];

/* vamos a consumir el metodo getTopHeaders de servicio */
  constructor(private noticiasServicio: NoticiasService) {}

  /* implementamos el oninit para cuando entre a la pagina haga la peticion a ese servicio */
  ngOnInit(){
    /* para que aparezca la informacion debemos suscribirnos */
    this.noticiasServicio.getTopHeadLines()
    .subscribe(resp=>{ //el susbcribe para que aparezca la informacion 
      console.log('noticias', resp);
      //para trabajar como independientes cada elemento del arreglo se utiliza el operador expred
      this.noticias.push(...resp.articles); //añadiendo los articulos a ese arreglo es decir no se van a usbcribir
    });

  }
}
