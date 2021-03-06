import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //output y eventemitter van de la mano
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number=0;

  @Output() heroeSelecionado: EventEmitter<number>;

  constructor(private router:Router) { 
    this.heroeSelecionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    /* console.log(this.index);
    this.router.navigate(['/heroe', this.index]) */
    this.heroeSelecionado.emit(this.index)
  }

}
