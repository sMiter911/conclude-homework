import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserView, WebForm } from '../models/web-form';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    // Handle API errors
    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` + `body was: ${error.error}  \nMessage: ${error.message}`
        );
      }
      // return an observable with a user-facing error message
      return throwError('Something bad happened; please try again later.');
    }

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserView[]> {
    return this.http.get<UserView[]>('http://localhost:8080/users')
    .pipe(retry(2), catchError(this.handleError));
  }

  public postUser(user: WebForm) {
    return this.http.post('http://localhost:8080/user', user)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}
