import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { WellComponent } from './well/well.component';


@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {
  @ViewChild('souceCode') rowData!: ElementRef; // get parent template reference 
  @ViewChild('well') well!: WellComponent

  
  wellList: any[] = [
    { "name": "TestRLSWell01","type":"rls","class":"rls-class","sourcekey":1001},
    { "name": "TestRLSWell01","type":"rls","class":"rls-class","sourcekey":1011},
    { "name": "TestESPWell01","type":"esp","class":"esp-class","sourcekey":10001},
    { "name": "TestESPWell01","type":"esp","class":"esp-class","sourcekey":11},
    { "name": "TestESPWell01","type":"esp","class":"esp-class","sourcekey":101},
    { "name": "newRLSWell01","type":"rls","class":"rls-class","sourcekey":1001},
    { "name": "TestESPWell01","type":"rls","class":"rls-class","sourcekey":1001001}
  ]
  showWellForm?: boolean = false;
  constructor() { }

  ngOnInit(): void {  }

  /**
   * @description THis method is triggered once the Add Well Button is clicked
   * @param data Data sent by the child Component to the Parent Component
   */
  wellInfo(data?:any){
    this.wellList.push(data);
    this.showWellForm = false;
  }
  
  /**
   * @description This method is used to call when a particular row os clicked
   * @param rowData -All the data of a particular row on which it is clicked 
   */
  onSourceCode(rowData?:any){
    this.showWellForm = true;
    this.well?.wellForm?.controls['sourcekey'].setValue(rowData.sourcekey);
    this.well?.wellForm?.controls['name'].reset();
    this.well?.wellForm?.controls['type'].reset();
  }
}
