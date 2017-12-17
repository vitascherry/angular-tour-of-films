import { Pipe,
		PipeTransform,
		Component,
		OnInit }                          from '@angular/core';
		
import { DatePipe }                        from '@angular/common';

import { FormControl,
		FormGroup,
		FormsModule,
		ReactiveFormsModule,
		Validators }                      from '@angular/forms';
		
import { ActivatedRoute } 			       from '@angular/router';

import { environment }                     from '../environments/environment';

import { DomSanitizer }                    from '@angular/platform-browser';

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
	
	commentForm: FormGroup;
	commentAuthor: FormControl;
	commentBody: FormControl;
	
	imagesUrl = `${environment.assets_url}/images/small`;
	
	constructor(private filmService: FilmService,
		private sanitizer: DomSanitizer,
		private route: ActivatedRoute) {}
	
	ngOnInit(): void {
		this.getFilm();
		this.commentAuthor = new FormControl(null, [
            Validators.maxLength(45), 
            Validators.required
		]);
		this.commentBody = new FormControl(null, [
            Validators.maxLength(500), 
            Validators.required
		]);
		this.commentForm = new FormGroup({
			author: this.commentAuthor,
			body: this.commentBody
		});
	}
	
	getFilm(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.filmService.getFilm(id)
			.subscribe(film => this.film = film);
	}
	
	getFilmCoverUrl() {
		return `${this.imagesUrl}/${this.film.id}.jpg`;
	}
	
	getFilmTrailerUrl() {
		return this.sanitizer.bypassSecurityTrustResourceUrl(this.film.trailer);
	}
	
	////// UPDATE METHODS //////
	
	updateFilm(): void {
		this.filmService.updateFilm(this.film);
	}
	
	onSubmit(): void {
		if (this.commentForm.valid) {
			const newComment = new Comment();
			newComment.author = this.commentAuthor.value;
			newComment.text = this.commentBody.value;
			newComment.posted = new DatePipe("en-US").transform(new Date(), 'yyyy-MM-ddTHH:mm:ss');
			newComment.id = null;
		
			this.film.comments.unshift(newComment);
			this.updateFilm();
			this.commentForm.reset();
		}
	}
}

