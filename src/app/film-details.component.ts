import { Pipe,
		PipeTransform,
		Component,
		OnInit }                          from '@angular/core';
		
import { DatePipe }                        from '@angular/common';

import { FormControl,
		FormsModule,
		ReactiveFormsModule }             from '@angular/forms';
		
import { ActivatedRoute } 			       from '@angular/router';

import { FilmService } 			       from './film.service';
import { Film } 					       from './film';
import { Comment }                         from './comment';

@Component({
	selector: 'film-details',
	templateUrl: './film-details.component.html',
	styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
	film: Film;
	
	commentAuthor: FormControl = new FormControl();
	commentBody: FormControl = new FormControl();
	isSubmitting: boolean = false;
	
	imagesUrl = './assets/images/small';
	
	constructor(private filmService: FilmService,
		private route: ActivatedRoute) {}
	
	ngOnInit(): void {
		this.getFilm();
	}
	
	getFilm(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.filmService.getFilm(id)
			.subscribe(film => this.film = film);
	}
	
	getFilmCoverUrl(film: Film): string {
		return `${this.imagesUrl}/${film.id}.jpg`;
	}
	
	////// UPDATE METHODS //////
	
	updateFilm(): void {
		this.filmService.updateFilm(this.film);
	}
	
	onSubmit(): void {
		this.isSubmitting = true;
		
		const newComment = new Comment();
		newComment.author = this.commentAuthor.value;
		newComment.text = this.commentBody.value;
		newComment.posted = new DatePipe("en-US").transform(new Date(), 'yyyy-MM-ddTHH:mm:ss');
		newComment.id = null;
		
		this.isSubmitting = false;
		console.log("Form Submitted!");
		this.commentAuthor.reset();
		this.commentBody.reset();
		
		this.film.comments.unshift(newComment);
		this.updateFilm();
	}
}

