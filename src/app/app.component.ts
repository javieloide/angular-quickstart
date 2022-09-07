import { Component, OnInit } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent implements OnInit {

  title = 'angular-quickstart';

  ngOnInit(): void {
    var options = {
      'damping': 0.05
    }
    Scrollbar.init(document.querySelector('#my-scrollbar')!, options);
  }
}
