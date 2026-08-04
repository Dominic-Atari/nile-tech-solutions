import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { SiteFooter } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
