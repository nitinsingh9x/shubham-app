import { UserFormComponent } from './users/user-form.component';
import { UserProfileComponent } from './users/user-profile.component';
import { AppComponent } from './app.component';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        UserProfileComponent,
        UserFormComponent
    ],
    bootstrap:[AppComponent]
})
export class AppModule{
    
}