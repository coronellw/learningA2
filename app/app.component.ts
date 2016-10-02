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

const HEROES: Hero[]=[
	{id:11,name:"Bloodseeker", team:"Dire"},
	{id:12,name:"Sniper", team:"Dire"},
	{id:13,name:"Warlock", team:"Radiant"},
	{id:14,name:"Windranger", team:"Radiant"},
	{id:15,name:"WrathKing", team:"Dire"},
	{id:16,name:"Witch Doctor", team:"Radiant"},
	{id:17,name:"Dragon Knight", team:"Dire"},
	{id:18,name:"Sand King", team:"Radiant"},
	{id:19,name:"Bounty Hunter", team:"Dire"},
	{id:20,name:"Viper", team:"Radiant"}
]

export class AppComponent {
	hero: Hero = {
		id: 1,
		name: 'Windstorm',
		team: 'Neutral'
	}
	heroes = HEROES;
}

export class Hero {
	id: number;
	name: string;
	team: string;
}