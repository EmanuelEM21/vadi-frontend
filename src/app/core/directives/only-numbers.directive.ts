import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]',
  standalone: false
})
export class OnlyNumbersDirective {

  constructor() { }

  @HostListener('keypress', ['$event'])
  public verificarValorIntroducido(event: KeyboardEvent) {
    if (!/^[0-9]$/.test(event.key)) event.preventDefault();
  }
}