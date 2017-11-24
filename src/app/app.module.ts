import { NgModule }                       from '@angular/core';
import { BrowserModule }                  from '@angular/platform-browser';
import { FormsModule }                    from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }               from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './in-memory-data.service';

import { AppComponent }                   from './app.component';
import { FilmDetailsComponent }           from './film-details.component';
import { FilmsListComponent }             from './films-list.component';
import { FilmsDetailedListComponent }     from './films-detailed-list.component';
import { FilmsDashboardComponent }        from './films-dashboard.component';
import { FilmService }                    from './film.service';
import { FilmSearchComponent }            from './film-search.component';
import { FilmSearchService }              from './film-search.service';
import { AppRoutingModule }               from './app-routing.module';
import { MessageService }                 from './message.service';
import { MessageComponent }               from './message.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
		AppRoutingModule,
		HttpClientModule,
		// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
		// and returns simulated server responses.
		// Remove it when a real server is ready to receive requests.
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService, { dataEncapsulation: false }
		)
	],
	declarations: [
		AppComponent,
		FilmsListComponent,
		FilmsDetailedListComponent,
		FilmsDashboardComponent,
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
