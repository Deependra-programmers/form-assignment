import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-assignment-rmf-approch',
  templateUrl: './assignment-rmf-approch.component.html',
  styleUrls: ['./assignment-rmf-approch.component.css']
})
export class AssignmentRmfApprochComponent {
  sum=0;
  counter=1;
  sub=true;
  get item_number(){
      return this.activatorcard.get('item_number') as FormArray;
  }

  get item_weight(){
    return this.activatorcard.get('item_weight') as FormArray;
  }
  delete_item(items:number){
    this.item_number.removeAt(items);
    this.item_weight.removeAt(items);
    this.counter=this.counter-1;
    this.sub=true;
  }

  add_item(){
    this.item_number.push(this.fb.control(''));
    this.item_weight.push(this.fb.control(''));
    this.counter=this.counter+1;
    if(this.counter>6)
    {
      this.sub=false;
    }
  }
  onSumbit(){
    this.sum = this.item_weight.value.reduce((acc, cur) => acc + cur, 0);
    console.log(this.sum);

  }
  constructor(private fb: FormBuilder){}

  activatorcard = this.fb.group({
    date: ['',Validators.required],
    type:['',Validators.required],
    number:['',Validators.required],
    item_number: this.fb.array<number>([]),
    item_weight: this.fb.array<number>([])

    
  })
  ngOnInit(): void {
  }

}
