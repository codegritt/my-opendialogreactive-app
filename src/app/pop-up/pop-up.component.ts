import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){}

  profileForm = this.formBuilder.group({
    first_name:[''],
    last_name:[''],
    email:[''],
    
  });

  ngOnInit(): void {
  }
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }

}
