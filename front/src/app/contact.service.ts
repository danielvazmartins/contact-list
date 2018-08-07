import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concat } from 'rxjs';
import { Contact } from './contact.class';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //private hostApi = 'http://localhost:3000'
  private hostApi = '/api'
  
  constructor( private http:HttpClient ) { 
  }

  // Retorna a lista de pessoas
  public getAllPeople(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.hostApi}/people`)
  }

  // Retorna uma pessoa
  public getOnePerson(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.hostApi}/people/${id}`)
  }
  
  // Cria uma nova pessoa
  public createPerson(person:Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.hostApi}/people`, person)
  }

  // Atualiza uma pessoa
  public updatePerson(person:Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.hostApi}/people/${person.id}`, person)
  }

  // Remove uma pessoa
  public removePerson(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.hostApi}/people/${id}`)
  }

}
