import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonelService } from '../personel.service';

@Component({
  selector: 'app-listaus',
  templateUrl: './listaus.component.html',
  styleUrls: ['./listaus.component.css']
})
export class ListausComponent implements OnInit {
  personellist: Person[];
  errorMessage: string;
  selectedPerson: Person;
  constructor(private ps: PersonelService) {
    this.update();
  }

  update() {
    this.selectedPerson = null;
    this.ps.getPersonel().subscribe(
      data => this.personellist = data,
      error => this.errorMessage = error);
  }
  onSelect(p: Person) {
    this.selectedPerson = p;
  }
  ngOnInit(): void {
  }
  

}
