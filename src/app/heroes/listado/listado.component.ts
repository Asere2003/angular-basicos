import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','ironman','holk','Thor'];
  heroeBorrado: string  = '';

  borrarHerroe ()  {
    console.log('Borrando.....');
    this.heroeBorrado = this.heroes.shift() || '' ;
    console.log(this.heroes);

  }


}
