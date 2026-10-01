import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './components/inicio-component/inicio-component';
import { ProductoComponent } from './components/producto-component/producto-component';

@Component({
  imports: [RouterOutlet, InicioComponent, ProductoComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TecnoMax');
}
