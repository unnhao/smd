import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fire-dashboard',
  templateUrl: './fire-dashboard.component.html',
  styleUrls: ['./fire-dashboard.component.css']
})
export class FireDashboardComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  email = '';
  password = '';

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(e => {});
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
