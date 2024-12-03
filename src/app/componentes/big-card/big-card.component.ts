import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent  {

  foto:string=""
  titulo:string=""
  descricao:string=""
  @Input()
  Id:string="0"


  ngOnInit(): void {
    this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(article => article.id == id)[0]
    this.descricao = result.description
    this.foto = result.photo
    this.titulo = result.title
  }
}
