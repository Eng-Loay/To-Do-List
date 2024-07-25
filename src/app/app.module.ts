import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FotterComponent } from './fotter/fotter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Title } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FotterComponent,
    TodoListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration(), Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
