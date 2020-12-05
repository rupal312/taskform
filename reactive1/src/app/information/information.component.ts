import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  Basic!: FormGroup;
  AddressDetails!: FormGroup;


  //flag1:boolean=true;       //Basic Information
  //flag2:boolean=false;      //Address Details
  age!: number;

  City: any;
  Address: any;
  Country: any;
  State: any;
  District: any;
  Pin: any;


  constructor() { }

  ngOnInit(): void {
    // Bacis Information below

    this.Basic! =new FormGroup ({
     Employee_no: new FormControl(null,[ Validators.required,]),
     Title: new FormControl(null, [Validators.required,]),
     Addressed_as: new FormControl(null,[Validators.required,]),
     First_Name: new FormControl(null,[Validators.required,Validators.minLength(5),]),
     Middle_Name: new FormControl(null, [Validators.required, ]),
     Last_Name: new FormControl(null,[Validators.required, ]),
     Initials: new FormControl(null,[Validators.required,]),
      user_gender: new FormControl("Male"),
      dob: new FormControl(),
      Employee_Age: new FormControl(null,[Validators.required,]),
      Official_Phone: new FormControl(null,[Validators.required,]),
      Personal_Mobile: new FormControl(null,[Validators.required,]),
      Fax: new FormControl(null,[Validators.required,]),
      Official_Email: new FormControl(null,[Validators.required,]),
      Personal_Email: new FormControl(null,[Validators.required,]),
      Personal_Email_2: new FormControl(null,[Validators.required,]),
      Personal_Email_3: new FormControl(null,[Validators.required,]),
      file: new FormControl(null,[Validators.required, ]),

  });
  //this.Basic.get('dob').valueChanges.subscribe((x) => this.setAge(x));



  //Address Details Below
  this.AddressDetails! =new FormGroup ({
    Permanent_Address: new FormControl(null,[ Validators.required,]),
    City: new FormControl(null,[ Validators.required,]),
    Country: new FormControl("India",Validators.required),
    State: new FormControl("Mumbai",Validators.required),
    District: new FormControl("thane",Validators.required),
    Pin: new FormControl(null,[ Validators.required,]),
    Phone1: new FormControl(null,[ Validators.required,]),
    Phone2: new FormControl(null,[ Validators.required,]),
    Fax_Mobile: new FormControl(null,[ Validators.required,]),
    form: new FormControl(),

    PpAddress: new FormControl(null,[ Validators.required,]),
    PCity: new FormControl(null,[ Validators.required,]),
    PCountry: new FormControl(null,[ Validators.required,]),
    PState: new FormControl(null,[ Validators.required,]),
    PDistrict: new FormControl(null,[ Validators.required,]),

  })


}
  setAge(x: any): void {
    throw new Error('Method not implemented.');
  }



OnBasicInformation(){
  console.log(this.Basic);
  }

  OnAddressDetails(){
    console.log(this.AddressDetails);
   }
   //setAddress(val:boolean){
    //if(val){
      //this.Address=this.AddressDetails.get('PAddress').value;
      //this.City=this.AddressDetails.get('PCity').value;
      //this.Country=this.AddressDetails.get('PCountry').value;                    //Address from Address Details
      //this.State=this.AddressDetails.get('PState').value;
      //this.District=this.AddressDetails.get('PDistrict').value;
      //this.Pin=this.AddressDetails.get('PPin').value;
         // }
    //else{
     // this.Address=null;
      //this.City=null;
      //this.Country=null;
      //this.State=null;
      ////this.District=null;
      //this.Pin=null;
      //  }
     // }
     onPreviousClick(){
      //this.flag1=true;
      //this.flag2=false;
    }

    onNextClick(){
      //this.flag1=false;
      //this.flag2=true;
      console.log(this.Basic.value);
   }

   onNextClick1(){
    //this.flag2=false;
    //this.flag3=true;
    console.log(this.AddressDetails.value);
   }
}





