
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
 

import { CategoryDTO } from '../models/category/category-dto';
 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseurl= 'https://localhost:44315/api/getCategory';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  CreateBug(data): Observable<CategoryDTO> {
    return this.http.post<CategoryDTO>(this.baseurl + '/bugtracking/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  

  // GET
  GetIssue(id): Observable<CategoryDTO> {
    return this.http.get<CategoryDTO>(this.baseurl + '/bugtracking/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  getCategory()  {
    return this.http.get<CategoryDTO>(this.baseurl)  .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
    
  }

  // PUT
  UpdateBug(id, data): Observable<CategoryDTO> {
    return this.http.put<CategoryDTO>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // DELETE
  DeleteBug(id){
    return this.http.delete<CategoryDTO>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
