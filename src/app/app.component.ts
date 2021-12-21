import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-mateiral';
  formBuilder: any;
  profileForm: any;

  constructor(private dialogRef : MatDialog,formBuilder:FormBuilder){}
  
  
  openDialog(){
    this.dialogRef.open(PopUpComponent,{
      data:{
        first_Name:[''],
        last_Name:[''],
        email:[''],
      }
      });

    }
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }
 
}

  
function openDialog() {
  throw new Error('Function not implemented.');
}

function saveForm() {
  throw new Error('Function not implemented.');
}

