import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {SettingsService} from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: HTMLAnchorElement) {
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: HTMLAnchorElement) {
    const selectores: HTMLCollectionOf<Element> = document.getElementsByClassName('selector');
    // @ts-ignore
    for ( const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    const selectores: HTMLCollectionOf<Element> = document.getElementsByClassName('selector');

    const tema = this._ajustes.ajustes.tema;

    // @ts-ignore
    for ( const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
