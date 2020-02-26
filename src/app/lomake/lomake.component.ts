import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonelService } from '../personel.service';

@Component({
  selector: 'app-lomake',
  templateUrl: './lomake.component.html',
  styleUrls: ['./lomake.component.css']
})
export class LomakeComponent implements OnInit {

  constructor(private ps:PersonelService, private router:Router) { }
  addPerson(name, email) { 
    let np= new Person (name, email);
    this.ps.addPerson(np).subscribe((createdPerson:Person)=>{
      console.dir(createdPerson);
      this.router.navigateByUrl("/listaus");
    })
  }
  ngOnInit(): void {
  }

}
