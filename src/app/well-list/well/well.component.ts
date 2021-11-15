import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit,AfterViewInit {
  wellForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    sourcekey: new FormControl(),
    })
  
  
  @Input() sourceParentKey:any;
  @Output()wellDetails: EventEmitter<string> = new EventEmitter<string>(); 
  @ViewChild('form') formData!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.wellForm.controls['sourcekey'].disable();
    this.wellForm.controls['sourcekey'].setValue(this.sourceParentKey);
  }
  ngAfterViewInit(){
    console.log(this.formData)
  }
  addWell(){
    
      this.wellForm.patchValue({
        name: this.wellForm.value.name,
        type:this.wellForm.value.type
      });
      let wellInfo = this.wellForm.getRawValue();
      wellInfo['class'] = wellInfo.type === 'rls' ? 'rls-class' : 'esp-class';
      this.wellDetails.emit(wellInfo);
  }
}
