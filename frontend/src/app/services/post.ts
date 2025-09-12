import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) { }

  getPosts(categoryId?: number, searchTerm?: string): Observable<any[]> {
    let params = new HttpParams();
    if (categoryId) {
      params = params.set('categoryId', categoryId.toString());
    }
   if (searchTerm) {
     
      const normalizedSearchTerm = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      params = params.set('q', normalizedSearchTerm);
    }
    return this.http.get<any[]>(this.apiUrl, { params });
  }
  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}