import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theme } from 'src/app/types/theme';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery: string = ''; 
  searchResults: Theme[] = []; 
  isLoading: boolean = false; 
  allThemes: Theme[] = []; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAllThemes(); 
  }

  loadAllThemes(): void {
    const { apiUrl } = environment;
    this.isLoading = true;

    this.http.get<Theme[]>(`${apiUrl}/themes`).subscribe({
      next: (response) => {
        this.allThemes = response; 
        this.isLoading = false; 
      },
      error: (error) => {
        console.error('Error fetching themes:', error);
        this.isLoading = false;
      }
    });
  }

  
  onSearch(): void {
    if (!this.searchQuery.trim()) {
      this.searchResults = []; 
      return;
    }

    this.isLoading = true; 

   
    this.searchResults = this.allThemes.filter(theme =>
      theme.themeName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      theme.userId.username.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    this.isLoading = false; 
  }
}
