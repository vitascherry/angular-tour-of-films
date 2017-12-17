import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable }              from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { of }                      from 'rxjs/observable/of';
import { catchError, tap }         from 'rxjs/operators';

import { environment }             from '../environments/environment';

import { Film }                    from './film';
import { MessageService }          from './message.service';

@Injectable()
export class FilmSearchService {
	
	private filmsUrl = environment.api_url;  // URL to web api
 
	constructor(private http: HttpClient,
		private messageService: MessageService) {}
 
	/* GET films whose name contains search term */
	searchFilm(term: string): Observable<Film[]> {
		if (!term.trim()) {
			// if not search term, return empty film array.
			return of([]);
		}
		return this.http.get<Film[]>(`${this.filmsUrl}/?name=${term}`).pipe(
			tap(_ => this.log(`found films matching "${term}"`)),
			catchError(this.handleError<Film[]>('searchFilm', []))
		);
	}
	
	/** Log a FilmSearchService message with the MessageService */
	private log(message: string) {
		this.messageService.add('FilmSearchService: ' + message);
	}
	
	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead
 
			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);
 
			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
