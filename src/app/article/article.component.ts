import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../articleService/article.service';

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
  articles : IArticle[];
  isWaiting: Boolean = false;
  constructor(private articleService : ArticleService) {
    
   
  }
  
  ngOnInit() {
    this.isWaiting = true;
    this.articleService.GetAllArticles().subscribe(
      data =>{
        this.articles= data;
        this.isWaiting = false;
      }  
      );
  }

}
