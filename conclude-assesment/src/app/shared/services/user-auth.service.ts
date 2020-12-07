import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Auth, User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserAuthService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    register(user: Auth) {
        return this.http.post(`${environment.apiUrl}/register`, user);
      }
}