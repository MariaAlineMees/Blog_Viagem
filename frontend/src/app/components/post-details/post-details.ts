import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-details.html',
  styleUrls: ['./post-details.scss']
})
export class PostDetailsComponent implements OnInit {
  post: any;
  private apiUrl = 'http://localhost:3000/api';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location,
    private http: HttpClient 
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(Number(id)).subscribe(post => {
      this.post = post;
    });

    
    this.registerClick(Number(id));
  }

  registerClick(id: number): void {
      this.http.post(`${this.apiUrl}/posts/click/${id}`, {}).subscribe(response => {
        console.log('Clique registrado com sucesso', response);
      }, error => {
        console.error('Erro ao registrar clique', error);
      });
  }

  goBack(): void {
    this.location.back();
  }
}