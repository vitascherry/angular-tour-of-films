import { NgModule }                       from '@angular/core';
import { NgbModule }                      from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }                  from '@angular/platform-browser';
import { FormsModule }                    from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }               from '@angular/common/http';

import { AppComponent }                   from './app.component';
import { FilmDetailsComponent }           from './film-details.component';
import { FilmsListComponent }             from './films-list.component';
import { FilmService }                    from './film.service';
import { FilmSearchComponent }            from './film-search.component';
import { FilmSearchService }              from './film-search.service';
import { AppRoutingModule }               from './app-routing.module';
import { MessageService }                 from './message.service';
import { MessageComponent }               from './message.component';

@NgModule({
	imports: [
		NgbModule.forRoot(),
		BrowserModule,
		FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
		AppRoutingModule,
		HttpClientModule
	],
	declarations: [
		AppComponent,
		FilmsListComponent,
		FilmDetailsComponent,
		FilmSearchComponent,
		MessageComponent
	],
	providers: [
		FilmService, FilmSearchService, MessageService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
