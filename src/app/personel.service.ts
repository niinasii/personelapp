import { Injectable } from '@angular/core';
import  { Person } from './person';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';

const apiUrl="http://localhost:3000/api/people";

@Injectable({
  providedIn: 'root'
})
export class PersonelService {
personellist: Person[]
  constructor(private http:HttpClient) { }

getPersonel():Observable<Person[]>{
  return this.http.get<Person[]>(apiUrl).pipe(catchError(this.handleError));
}

addPerson(newperson:Person):Observable<Person>{
  return this.http.post<Person>(apiUrl, newperson, HttpOptions);
}

getPerson(id):Observable<Person>{
  return this.http.get<Person>(`${apiUrl}/${id}`)
}

updatePerson(person:Person):Observable<Person>{
  return this.http.put<Person>(`${apiUrl}/${person.id}`, person, HttpOptions);
}

deletePerson(id):Observable<{}>{
  return this.http.delete(`${apiUrl}/${id}`)
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
  console.error('An error occurred:', error.error.message);
  } else {
  console.error(
  `Backend returned code ${error.status}, ` +
  `body was: ${error.error}`);
  }
  return throwError(
  'Something bad happened; please try again later.');
  };
}

const HttpOptions= {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
  };
