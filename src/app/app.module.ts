import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { VisitorComponent } from './visitor/visitor.component';
import { VisitorFormComponent } from './visitor-form/visitor-form.component';
import { VisitorService } from './services/visitor.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    VisitorListComponent,
    VisitorComponent,
    VisitorFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    
  ],
  providers: [
    VisitorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
