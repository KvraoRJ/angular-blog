import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  foto:string=""
  titulo:string=""
  @Input()
  Id:string="0"


  ngOnInit(): void {
    this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(article => article.id == id)[0]
    this.foto = result.photo
    this.titulo = result.title
  }
}
