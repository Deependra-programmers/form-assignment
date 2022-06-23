import { Component, OnInit, ViewChild } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assginment-tdf-approch',
  templateUrl: './assginment-tdf-approch.component.html',
  styleUrls: ['./assginment-tdf-approch.component.css']
})
export class AssginmentTdfApprochComponent implements OnInit {
 @ViewChild('userForm') signupForm:NgForm 
collectionbefore=[];
countbefore=0;
avgbefore=0;
test1before=0;
test2before=0;
test3before=0;
test4before=0;

collectionafter=[];
countafter=0;
avgafter=0;
test1after=0;
test2after=0;
test3after=0;
test4after=0;

sub=false;

compressionavg=0;

  constructor() {
     }
    
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signupForm);
    this.test1before=this.signupForm.value.test1before;
    this.test2before=this.signupForm.value.test2before;
    this.test3before=this.signupForm.value.test3before;
    this.test4before=this.signupForm.value.test4before;

    this.test1after=this.signupForm.value.test1after;
    this.test2after=this.signupForm.value.test2after;
    this.test3after=this.signupForm.value.test3after;
    this.test4after=this.signupForm.value.test4after;
   
    if(this.test1before!=0)
    {
     this.collectionbefore.push(this.signupForm.value.test1before);
       this.countbefore=this.countbefore+1;
    }
    if(this.test2before!=0)
    {
     this.collectionbefore.push(this.signupForm.value.test2before);
       this.countbefore=this.countbefore+1;
    }
    if(this.test3before!=0)
    {
     this.collectionbefore.push(this.signupForm.value.test3before);
       this.countbefore=this.countbefore+1;
    }
    if(this.test4before!=0)
    {
     this.collectionbefore.push(this.signupForm.value.test4before);
       this.countbefore=this.countbefore+1;
    }  

    var sumbefore = this.collectionbefore.reduce((acc, cur) => acc + cur, 0);
    console.log(sumbefore);
    this.avgbefore= sumbefore/this.countbefore;







    if(this.test1after!=0)
    {
     this.collectionafter.push(this.signupForm.value.test1after);
       this.countafter=this.countafter+1;
    }
    if(this.test2after!=0)
    {
     this.collectionafter.push(this.signupForm.value.test2after);
       this.countafter=this.countafter+1;
    }if(this.test3after!=0)
    {
     this.collectionafter.push(this.signupForm.value.test3after);
       this.countafter=this.countafter+1;
    }if(this.test4after!=0)
    {
     this.collectionafter.push(this.signupForm.value.test4after);
       this.countafter=this.countafter+1;
    }

    var sumafter = this.collectionafter.reduce((acc, cur) => acc + cur, 0);
      console.log(sumafter);
      this.avgafter= sumafter/this.countbefore;
      if(this.avgafter<this.avgbefore){
        this.compressionavg=(this.avgbefore-this.avgafter)/this.avgafter
        this.sub=true;
        this.signupForm.reset();
      }
      else
      {
        alert("average after is greater so unable to display compression average try again");
          this.signupForm.reset();
      }
      

    console.log(this.countafter);
    console.log(this.collectionafter);
  }
  // // onSubmit(){
   
  // //  if(val.test1before.value!='null' && val.test1before!='')
  //  {
  //   this.collectionbefore.push(parseInt(val.test1before));
  //     this.countbefore=this.countbefore+1;
  //  }
  //  if(val.test2before.value!='null' && val.test2before!='')
  //  {
  //   this.collectionbefore.push(parseInt(val.test2before));
  //     this.countbefore=this.countbefore+1;
  //  }
  //  if(val.test3before.value!='null' && val.test3before!='')
  //  {
  //   this.collectionbefore.push(parseInt(val.test3before));
  //     this.countbefore=this.countbefore+1;
  //  }
  //  if(val.test4before.value!='null' && val.test4before!='')
  //  {
  //   this.collectionbefore.push(parseInt(val.test4before));
  //     this.countbefore=this.countbefore+1;
  //  }


  //  var sumbefore = this.collectionbefore.reduce((acc, cur) => acc + cur, 0);
  //  console.log(sumbefore);
  //  this.avgbefore= sumbefore/this.countbefore;

   
  //  if(val.test1after.value!='null' && val.test1after!=''){
  //    this.collectionafter.push(parseInt(val.test1after));
  //    this.countafter=this.countafter+1;
  //  }
  //  if(val.test2after.value!='null' && val.test2after!=''){
  //   this.collectionafter.push(parseInt(val.test2after));
  //   this.countafter=this.countafter+1;
  // }
  // if(val.test3after.value!='null' && val.test3after!=''){
  //   this.collectionafter.push(parseInt(val.test3after));
  //   this.countafter=this.countafter+1;
  // }
  // if(val.test4after.value!='null' && val.test4after!=''){
  //   this.collectionafter.push(parseInt(val.test4after));
  //   this.countafter=this.countafter+1;
  // }

  //  var sumafter = this.collectionafter.reduce((acc, cur) => acc + cur, 0);
  //  console.log(sumafter);
  //  this.avgafter= sumafter/this.countbefore;

  // this.compressionavg=(this.avgbefore-this.avgafter)/this.avgafter;
   

  //   console.log(this.collectionbefore);
  //   console.log(this.collectionafter);
  //   console.log(this.countbefore);
  //   console.log(this.countafter);

    
  //   console.log(this.avgbefore);
  //   console.log(this.compressionavg);
  // }  
}
