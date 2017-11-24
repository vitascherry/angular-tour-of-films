import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { of }         		  from 'rxjs/observable/of';
 
import { debounceTime,
	distinctUntilChanged,
	switchMap } 			  from 'rxjs/operators';
 
import { FilmSearchService } from './film-search.service';
import { MessageService } from './message.service';
import { Film } from './film';
 
@Component({
	selector: 'film-search',
	templateUrl: './film-search.component.html',
	styleUrls: [ './film-search.component.css' ],
	providers: [FilmSearchService]
})
export class FilmSearchComponent implements OnInit {
	films: Observable<Film[]>;
	private searchTerms = new Subject<string>();
 
	constructor(private filmSearchService: FilmSearchService,
		private messageService: MessageService,
		private router: Router) {}
 
	// Push a search term into the observable stream.
	searchFilm(term: string): void {
		this.searchTerms.next(term);
	}
 
	ngOnInit(): void {
		this.films = this.searchTerms.pipe(
			// wait 300ms after each keystroke before considering the term
			debounceTime(300),
 
			// ignore new term if same as previous term
			distinctUntilChanged(),
 
			// switch to new search observable each time the term changes
			switchMap((term: string) => this.filmSearchService.searchFilm(term)),
		);
	}
 
	gotoDetails(film: Film): void {
		let link = ['/details', film.id];
		this.router.navigate(link);
	}
	
	/** Log a FilmSearchComponent message with the MessageService */
	private log(message: string) {
		this.messageService.add('FilmSearchComponent: ' + message);
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

