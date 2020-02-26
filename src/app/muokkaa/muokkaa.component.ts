import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { PersonelService } from '../personel.service';

@Component({
  selector: 'app-muokkaa',
  templateUrl: './muokkaa.component.html',
  styleUrls: ['./muokkaa.component.css']
})
export class MuokkaaComponent implements OnInit {
  person: Person;
  personid: number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private ps: PersonelService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.personid = params['id'];
      this.ps.getPerson(this.personid).subscribe((person: Person) =>
        this.person = person
      )
    })
  }
  update():void{
    this.ps.updatePerson(this.person).subscribe(person=>{
      console.log("Updated");
      console.dir(person);
      this.router.navigateByUrl("/listaus");
    })
  }
}
