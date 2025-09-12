import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {
    constructor(private router: Router) { } 

    logout(): void {
        localStorage.removeItem('authToken'); 
        this.router.navigate(['/admin/login']);
    }
}