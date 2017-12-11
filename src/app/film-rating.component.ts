import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute } 			from '@angular/router';

import { FilmService } 			from './film.service';
import { Film } 					from './film';

@Component({
  selector: 'film-rating',
  templateUrl: './film-rating.component.html',
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: gold;
    }
  `]
})
export class FilmRatingComponent implements OnInit {
	film: Film;
	currentRating = 0;
	constructor(private filmService: FilmService,
		private route: ActivatedRoute) {}
  
	ngOnInit(): void {
		this.getFilm();
	}
	
	getFilm(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.filmService.getFilm(id)
			.subscribe(film => { this.film = film; this.currentRating = film.rating; });
	}
	
	////// UPDATE METHODS //////
	
	updateRating(): void {
		this.film.rating = this.currentRating;
		console.log("film rating updated!");
		this.filmService.updateFilm(this.film);
	}
}