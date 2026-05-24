import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment.development';

import { ApiResponse } from '../../../../shared/models/api-response.interface';
import { Category } from '../models/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly http = inject(HttpClient);

  getCategories(): Observable<ApiResponse<Category[]>> {
    return this.http.get<ApiResponse<Category[]>>(`${environment.BASE_URL}categories`);
  }

  getCategory(categoryId: string): Observable<ApiResponse<Category>> {
    return this.http.get<ApiResponse<Category>>(`${environment.BASE_URL}categories/${categoryId}`);
  }
}
