import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category'; // Corrigido para caminho relativo e sem .ts
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './navbar.html', // Verifique se o nome do seu arquivo HTML é este
  styleUrl: './navbar.scss' // Verifique se o nome do seu arquivo SCSS é este
})
export class NavbarComponent implements OnInit {

  categories: any[] = [];
  searchTerm: string = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any[]) => {
      this.categories = data;
    });
  }

  searchPosts(): void {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchTerm } });
    }
  }
}