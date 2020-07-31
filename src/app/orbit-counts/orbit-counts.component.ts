import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite'
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
@Input() satellites: Satellite[];
  
  constructor() { }

  ngOnInit() {
  }
  countSpaceDebris(): number {
    let sum : number=0;
  for(let i=0; i< this.satellites.length;i++){
    if(this.satellites[i].type.toLowerCase() === 'space debris'){
     sum += 1;
    }
  }
  return sum;
  }

  countCommunication(){
    let sum : number =0;
    for(let i=0;i<this.satellites.length;i++){
      if(this.satellites[i].type.toLowerCase() === 'communication'){
        sum += 1;
      }
    }
    return sum;
  }

  countProbe(){
    let sum : number =0;
    for(let i=0;i<this.satellites.length;i++){
      if(this.satellites[i].type.toLowerCase() === 'probe'){
        sum += 1;
      }
    }
    return sum;
  }

  countPositioning(){
    let sum : number =0;
    for(let i=0;i<this.satellites.length;i++){
      if(this.satellites[i].type.toLowerCase() === 'positioning'){
        sum += 1;
      }
    }
    return sum;
  }

  countSpaceStation(){
    let sum : number =0;
    for(let i=0;i<this.satellites.length;i++){
      if(this.satellites[i].type.toLowerCase() === 'space station'){
        sum += 1;
      }
    }
    return sum;
  }

  countTelescope(){
    let sum : number =0;
    for(let i=0;i<this.satellites.length;i++){
      if(this.satellites[i].type.toLowerCase() === 'telescope'){
        sum += 1;
      }
    }
    return sum;
  }

}
