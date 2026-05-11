import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../../features/product/model/data';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestsService {
  
  //  private url = `${environment.baseUrl}/pointages`;

 private url =   'http://localhost:8000/api/'

  constructor(private http:HttpClient){}

  
  get(): Observable<Data> {
    return this.http.get<Data[]>(this.url);
  }

  add(data: Data): Observable<Data> {
    return this.http.post<Data>(this.url, data);
  }

  update(id: number, data: Data): Observable<Data> {
    return this.http.put<Data>(`${this.url}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
  
}
