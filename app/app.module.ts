import { NgModule } 			from '@angular/core';
import { FormsModule } 			from '@angular/forms';
import { BrowserModule } 		from '@angular/platform-browser';
import { RouterModule, Routes }	from '@angular/router';

import { AppRoutes } 			from './app-routing.module';
import { HeroService } 			from './hero.service';
import { AppComponent } 		from './app.component';
import { HeroesComponent } 		from './heroes.component';
import { DashboardComponent } 	from './dashboard.component';
import { HeroDetailComponent } 	from './hero-detail.component';

@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(AppRoutes)
	],
	declarations: [ 
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		DashboardComponent
	],
	bootstrap: [ AppComponent ],
	providers: [ HeroService ],
	exports:   [ RouterModule ]
})

export class AppModule { }