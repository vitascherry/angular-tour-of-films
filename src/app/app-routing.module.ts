import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { FilmsDashboardComponent }    from './films-dashboard.component';
import { FilmsListComponent }         from './films-list.component';
import { FilmsDetailedListComponent } from './films-detailed-list.component';

import { FilmDetailsComponent }       from './film-details.component';
import { FilmSearchComponent }        from './film-search.component';
 
const routes: Routes = [
	{ path: '', redirectTo: '/list', pathMatch: 'full' },
	{ path: 'dashboard',    component: FilmsDashboardComponent },
	{ path: 'details/:id',  component: FilmDetailsComponent },
	{ path: 'list',         component: FilmsListComponent },
	{ path: 'details',      component: FilmsDetailedListComponent },
	{ path: 'search',       component: FilmSearchComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}