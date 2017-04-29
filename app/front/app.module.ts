import { NgModule, Component } from '@angular/core'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// modules

@Component({
	selector: 'app',
	template: `<h1>Hello Worl</h1><router-outlet></router-outlet>`
})

export class AppComponent{}

const routes = [
	{
		path: '',
		loadChildren: './home/home.module.ts'
	}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}