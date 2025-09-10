import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss'
})
export class Statistics implements OnInit {
  statistics: any[] = [];
  private apiUrl = 'http://localhost:3000/api/statistics';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.statistics = data;
    });
  }
}