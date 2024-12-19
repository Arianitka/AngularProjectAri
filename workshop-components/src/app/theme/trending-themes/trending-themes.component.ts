import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theme } from 'src/app/types/theme'; 
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trending',
  templateUrl: './trending-themes.component.html',
  styleUrls: ['./trending-themes.component.css']
})
export class TrendingComponent implements OnInit {
  themes: Theme[] = []; 
  trendingThemes: Theme[] = []; 
  isLoading: boolean = false; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadThemes(); 
  }

  loadThemes(): void {
    const { apiUrl } = environment;
    this.isLoading = true;

    this.http.get<Theme[]>(`${apiUrl}/themes`).subscribe({
      next: (response) => {
        this.themes = response; 
        this.sortTrendingThemes(); 
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching themes:', error);
        this.isLoading = false;
      }
    });
  }


  sortTrendingThemes(): void {
    
    this.trendingThemes = this.themes.sort((a, b) => (b.subscribers?.length || 0) - (a.subscribers?.length || 0));

    
    this.trendingThemes = this.trendingThemes.slice(0, 5);
  }
}
