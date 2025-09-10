import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; // Importe a classe Location

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-details.html',
  styleUrls: ['./post-details.scss']
})
export class PostDetailsComponent implements OnInit {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location // Adicione o Location ao construtor
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(Number(id)).subscribe(post => {
      this.post = post;
    });
  }

  // Implemente o método goBack() para voltar à página anterior
  goBack(): void {
    this.location.back();
  }
}