import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bgStyle: string = 'header1';

  constructor(private router: Router) { }

  ngOnInit() {

    //this.router.navigate(['/assets/images/banner1b.jpg']);
  }

  lnkFaqs() {

  }

  img1() {
    this.bgStyle = "header1";
    console.log('header1')
  }

  img2() {
    this.bgStyle = "header2";
    console.log('header2')
  }
  
}

