import { NgModule } 			from '@angular/core';
import { FormsModule } 			from '@angular/forms';
import { BrowserModule } 		from '@angular/platform-browser';
import { RouterModule, Routes }	from '@angular/router';

import { HeroService } 			from './hero.service';
import { AppComponent } 		from './app.component';
import { HeroesComponent } 		from './heroes.component';
import { AppRoutingModule }		from './app-routing.module';
import { DashboardComponent } 	from './dashboard.component';
import { HeroDetailComponent } 	from './hero-detail.component';

@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	declarations: [ 
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		DashboardComponent
	],
	bootstrap: [ AppComponent ],
	providers: [ HeroService ]
})

export class AppModule { }