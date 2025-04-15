import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  public openSnackBar(mensaje: string, duracion: number): void {
    this.snackBar.open(mensaje, '', {
      duration: duracion
    });
  }
}