import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KAForumComponent } from './components/ka-forum/ka-forum.component';
import { KAForumItemComponent } from './components/ka-forum-item/ka-forum-item.component';
import { KAForumDetailsComponent } from './components/ka-forum-details/ka-forum-details.component';

@NgModule({
  declarations: [
    AppComponent,
    KAForumComponent,
    KAForumItemComponent,
    KAForumDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
