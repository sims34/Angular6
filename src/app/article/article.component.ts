import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../articleService/article.service';
import { MatTableDataSource } from '@angular/material';


export interface IArticle {
  label: string;
  description: string;
  priceHT: number; 
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  displayedColumns : string[] = ['label','description','priceHT'];
  articles = new MatTableDataSource<IArticle>(); 
  public doFilter = (value: string) => {
    this.articles.filter = value.trim().toLocaleLowerCase();
  }

  isWaiting: Boolean = false;
  constructor(private articleService : ArticleService) {  
   
  }  
   
  ngOnInit() {
    this.getArticles();

  }

  private getArticles() {
    this.isWaiting = true;
    this.articleService.GetAllArticles().subscribe(data => {
      this.articles.data = data as IArticle[];
      this.isWaiting = false;
    });
    
  }
}
