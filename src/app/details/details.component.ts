import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonelService }  from '../personel.service';
import { Person } from '../person';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() person:Person;
  @Output() deleteEvent = new EventEmitter<any>();
  constructor(private ps:PersonelService) { }

  ngOnInit(): void {
  }
  
  delete(){
    this.ps.deletePerson(this.person.id).subscribe(resp=>{
      this.deleteEvent.emit();
    })
  }
}
