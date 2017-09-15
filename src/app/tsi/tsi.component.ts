import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-tsi',
  templateUrl: './tsi.component.html',
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in')),
    ]),
  ],
styles: [`
    h1 {
        text-decoration:underline;
    }
    .red-title {
      color:red;
    }
	p {
    width:200px;
    background:lightgray;
    margin: 100px auto;
    text-align:center;
    padding:20px;
    font-size:1.5em;
  }
`]
  
  
})
export class TsiComponent implements OnInit {

angularLogo = 'http://tonatheme.com/newwp/saratov/wp-content/uploads/2017/06/2.jpg';
 title = 'Hello!';
  titleClass = 'red-title';
 buttonStatus = true;
  titleStyle1 = 'red';
  titleClasses = {
    'red-title': true,
    'large-title': true
  }
 myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };
  
 myObject2 = {
    gender: 'test',
    age: 33,
    location: 'USA'
  };
  
  myarr = ['mourad', 'sawsen'];

 myarrobj = [this.myObject, this.myObject2];

   constructor(private dataService:DataService) {

  }

 someProperty:string = '';

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }
 myEvent(event) {
    console.log(event);
	

  }
  
  
   state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
