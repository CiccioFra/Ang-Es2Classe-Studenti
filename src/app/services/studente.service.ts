import { Injectable } from '@angular/core';
import { Studente } from '../models/studente';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {
  studente: Studente[] = [];
  selectStudente?: Studente;

  constructor() { }

  getStudente(): Studente[] {
    return this.studente;
  }

  addStudente(studente: Studente): void {
    this.studente.push(studente);
  }

  editStudente(studente: Studente): void {
    this.selectStudente = studente;
  }

  removeStudente(id: number): void {
    this.studente.splice(id, 1);
  }
}


