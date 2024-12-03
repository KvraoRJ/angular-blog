import { Component } from '@angular/core';
import { BigCardComponent } from "../../componentes/big-card/big-card.component";
import { SmallCardComponent } from "../../componentes/small-card/small-card.component";

@Component({
  selector: 'app-home',
  imports: [BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
