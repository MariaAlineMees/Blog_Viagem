import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../services/category';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-list.html',
  styleUrls: ['./category-list.scss']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}