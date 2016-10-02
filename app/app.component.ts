import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: ` <h1>{{title}}</h1>
				<h2>My Heroes</h2>
				<ul class="heroes">
				  <li>
				    <!-- each hero goes here -->
				  </li>
				</ul>

				<h2>{{hero.name}} deatils!</h2>
				<div><label>id:</label>{{hero.id}}</div>
				<div>
					<label>Name:</label>
					<input [(ngModel)]="hero.name" placeholder="name">
				</div>
				`
})


export class AppComponent {
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	}
}

export class Hero {
	id: number;
	name: string;
}

