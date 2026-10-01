import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponet } from './Components/footer-componet/footer-componet';
import { NosotrosComponet } from './Components/nosotros-componet/nosotros-componet';
import { ResenasComponet } from './Components/resenas-componet/resenas-componet';

@Component({
  imports: [RouterOutlet, NosotrosComponet, FooterComponet, ResenasComponet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TecnoMax');
}
