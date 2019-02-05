import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplyNewServiceService } from '../service/apply-new-service.service';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-apply-new-service',
  templateUrl: './apply-new-service.component.html',
  styleUrls: ['./apply-new-service.component.css']
})

export class emailDetailsModel {
  myEmailDetails: Array<emailList>;
  myECCareType: string;
  myExecutedBy: string;
}

export class emailList {
  Name: string;
  Value: string;
}


export class ApplyNewServiceComponent implements OnInit {


  details: emailDetailsModel;
  applyService: FormGroup;
  submitted = false;
  test: any;
  body: any = '{"myExecutedBy":"E177"}';

  constructor(private  formBuilder:  FormBuilder,
    private service: ApplyNewServiceService
    ) { }


  ngOnInit() {
    this.createCustomer();

    this.details.myEmailDetails = [];

    var obj: emailList;
    obj.Name = 'test';
    obj.Value = 'tes';

    this.details.myEmailDetails.push(obj);


    this.service.sendInformation(this.body).subscribe(res => {console.log(res.IsResponseSuccess)})

  }

  createCustomer(){
    this.applyService= this.formBuilder.group({
    customerName: ['', Validators.required],
    requestService: ['', Validators.required],
    inputProductname: ['', Validators.required],
    })
  }

    get customerName() {
      return this.applyService.get('customerName');
      }
    
    get requestService() {
        return this.applyService.get('requestService');
      }

    get inputProductname() {
      return this.applyService.get('inputProductname');
      }
        


 onSubmit(model:any) { 
  this.service.sendInformation('')
  .subscribe(
  err => console.log(err)
  ) 
   
 }



}
