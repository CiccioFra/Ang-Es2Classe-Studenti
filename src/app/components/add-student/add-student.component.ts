import { Component, OnInit } from '@angular/core';
import { Studente } from 'src/app/models/studente';
import { StudenteService } from 'src/app/services/studente.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  // 1 inizializzo variabile/array
  studenti: Studente = {
    id: 1,
    nome: "nomeStudente",
    cognome: "cognomeStudente"
  };
  studSelezionato?: Studente;

  // 2 importoi servizio primavo
  constructor(private studenteService: StudenteService) { }

  ngOnInit(): void {
  // 3 riempio studente con quello che mi restituisce il service
  }

  addStudente(addStud: Studente): void{
    this.studSelezionato = addStud;
    //ma qua dovrei farci qualcosa??
  }

}
