import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';
 
import { FilmsListComponent }         from './films-list.component';

import { FilmDetailsComponent }       from './film-details.component';
import { FilmSearchComponent }        from './film-search.component';
import { CanvasComponent }            from './canvas.component';
 
const routes: Routes = [
	{ path: '', redirectTo: '/list', pathMatch: 'full' },
	{ path: 'details/:id',  component: FilmDetailsComponent },
	{ path: 'list',         component: FilmsListComponent },
	{ path: 'search',       component: FilmSearchComponent },
	{ path: 'draw',         component: CanvasComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}