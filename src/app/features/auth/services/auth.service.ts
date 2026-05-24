import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../../environments/environment.development';
import { ApiResponse } from '../../../shared/models/api-response.interface';
import { SigninForm, SignupForm, User } from '../models/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  user: WritableSignal<User | null> = signal(null);

  signup(formData: SignupForm): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${environment.BASE_URL}auth/signup`, formData, {
      withCredentials: true
    }).pipe(
      tap((res) => {
        this.user.set(res.data);
      })
    )
  }

  signin(formData: SigninForm): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${environment.BASE_URL}auth/signin`, formData, {
      withCredentials: true
    }).pipe(
      tap((res) => {
        this.user.set(res.data);
      })
    )
  }

  logout(): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${environment.BASE_URL}auth/logout`, {}, {
      withCredentials: true
    }).pipe(
      tap(() => {
        this.user.set(null);
      })
    )
  }

  getMe(): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${environment.BASE_URL}auth/me`, {
      withCredentials: true
    }).pipe(
      tap((res) => {
        this.user.set(res.data);
      })
    )
  }

  isAuthenticated = computed(() => !!this.user());
}
