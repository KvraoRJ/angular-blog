import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./componentes/menu-bar/menu-bar.component";
import { MenuTitleComponent } from "./componentes/menu-title/menu-title.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, MenuTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
