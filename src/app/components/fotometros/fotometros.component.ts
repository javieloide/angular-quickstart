import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotometros',
  templateUrl: './fotometros.component.html',
  styleUrls: ['./fotometros.component.css']
})
export class FotometrosComponent implements OnInit {
  selectedValue:any = 'badajoz';

  constructor() { }

  ngOnInit(): void {
  }
  onChangeFotometro(){
    if(this.selectedValue){
      switch(this.selectedValue){
        case 'zarza':
          console.log('zarza');
        break;
        case 'alcantara':
          console.log('alcantara');
        break;
        case 'brozas':
          console.log('brozas');
        break;
        case 'herreruela':
          console.log('herreruela');
        break;
        case 'salorino':
          console.log('salorino');
        break;
        case 'membrio':
          console.log('membrio');
        break;
        case 'valenciaA':
          console.log('valenciaA');
        break;
        case 'carbajo':
          console.log('carbajo');
        break;
        case 'santiagoA':
          console.log('santiagoA');
        break;
        case 'herreraA':
          console.log('herreraA');
        break;
        case 'cedillo':
          console.log('cedillo');
        break;
        case 'pampilhosa':
          console.log('pampilhosa');
        break;
        case 'badajoz':
          console.log('badajoz');
        break;
      }
    }
  }
}
