import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private BaseUrl = "https://localhost:44396/api/";

  constructor(private http : Http) { }

  /**
   * GetAllArticles
   * return List<Article>
   */
  public GetAllArticles() : Observable<any> {
    return this.http.get(`${this.BaseUrl}/article`)
            .pipe(
              map(
                (data)=>{
                return data.json();
            },(error)=>{
              console.log("errro", error);
            }) 
          );
  }
  /**
   * params id Article type Guid
   * GetArticleId
   */
  public GetArticleId(id:string): Observable<any> {
    return this.http.get(`${this.BaseUrl}/article/${id}`)
            .pipe(
              map((data) =>{
                return data.json();
              }, (error) => {
                console.log('error',error);
              })
            );
  }
}
