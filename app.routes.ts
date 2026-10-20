import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { BooksComponent } from './pages/books.component';
import { ServicesComponent } from './pages/services.component';
import { ContactComponent } from './pages/contact.component';
export const routes: Routes = [
 {path:'',component:HomeComponent,title:'Home | Smart Library'},
 {path:'books',component:BooksComponent,title:'Books | Smart Library'},
 {path:'services',component:ServicesComponent,title:'Services | Smart Library'},
 {path:'contact',component:ContactComponent,title:'Contact | Smart Library'},
 {path:'**',redirectTo:''}
];