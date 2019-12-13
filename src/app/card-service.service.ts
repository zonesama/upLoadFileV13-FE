import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Card} from './card';
import {CardForm} from './card-form';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  private requestUrl: string;

  constructor(private http: HttpClient) {
    this.requestUrl = 'http://localhost:8080';
  }

  public findAllCard(): Observable<Card[]> {
    return this.http.get<Card[]>(this.requestUrl + '/api');
  }

  public saveCard(formData: FormData): Observable<any> {
    return this.http.post(this.requestUrl + '/api/newCard', formData);
  }

  public delete(id: number): Observable<Card> {
    return this.http.delete<Card>(this.requestUrl + '/api/' + id + '/deleteCard');
  }

  public updateCard(formData: FormData): Observable<any> {
    return this.http.put(this.requestUrl + '/api/updateCard', formData);
  }
}
