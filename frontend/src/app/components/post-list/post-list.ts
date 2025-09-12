import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.scss']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  
  constructor(
    private postService: PostService,
    private sanitizer: DomSanitizer 
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  
  getSafeSummary(content: string): SafeHtml {
    const summary = content.replace(/<[^>]*>/g, '').substring(0, 100);
    return this.sanitizer.bypassSecurityTrustHtml(summary);
  }
}