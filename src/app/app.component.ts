import { Component } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor(meta: Meta, title: Title) {
		// Sets the <title></title>
		title.setTitle('CINEMAHOLICS');
		this.logoTitle = title.getTitle();
		// Sets the <meta> tag for the page
		meta.addTags([
			{ name: 'author', content: 'vitas.cherry@gmail.com' },
			{ name: 'description', content: 'This is a description.' },
		]);
    }
	
	logoTitle: String;
}
