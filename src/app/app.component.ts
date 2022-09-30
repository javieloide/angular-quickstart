import { Component, OnInit } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent implements OnInit {

  title = 'Weather UEX App';
  query4:any;
  query2:any;
  query9:any;
  query8:any;
  movilToolbar: boolean = false;
  ngOnInit(): void {
    this.query8 = window.matchMedia("(max-width: 540px)")
    this.query9 = window.matchMedia("(max-width: 480px)")
    this.query2 = window.matchMedia("(max-width: 414px)")
    this.query4 = window.matchMedia("(max-width: 375px)")
    if(this.query2.matches || this.query4.matches || this.query9.matches || this.query8.matches){
      this.movilToolbar = true
    }

    Scrollbar.init(document.querySelector('#my-scrollbar')!);
  }
}
