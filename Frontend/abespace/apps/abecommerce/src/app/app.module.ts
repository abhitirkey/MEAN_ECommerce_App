import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomepageComponent, ProjectListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
