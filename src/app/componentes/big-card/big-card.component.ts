import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent  {
  @Input()
  foto:string=""
  @Input()
  titulo:string=""
  @Input()
  descricao:string=""
  @Input()
  Id:string="0"
}
