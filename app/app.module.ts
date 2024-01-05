import { NgModule }      from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { routes } from './app.routes';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NotesComponent }  from './notes/notes.component';
import { CategoriesComponent }  from './categories/categories.component';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
	imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(routes), Ng2Bs3ModalModule, ReactiveFormsModule  ],
    declarations: [ AppComponent, NotesComponent, CategoriesComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule { }
