import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({selector:'app-root',standalone:true,imports:[RouterLink,RouterLinkActive,RouterOutlet],template:`
<header><h1>Smart Library Management System</h1><p>Knowledge is the Key to Success</p></header>
<nav><a routerLink="/" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active">Home</a><a routerLink="/books" routerLinkActive="active">Books</a><a routerLink="/services" routerLinkActive="active">Services</a><a routerLink="/contact" routerLinkActive="active">Contact</a></nav>
<main><router-outlet /></main><footer><p>&copy; 2026 Smart Library Management System | All Rights Reserved</p></footer>`})
export class AppComponent {}