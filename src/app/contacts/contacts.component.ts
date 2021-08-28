import { Component, OnInit } from '@angular/core';
import {Validators , FormControl , FormGroup} from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsForm = new FormGroup({

    clientName : new FormControl('',[Validators.required , Validators.minLength(2) , Validators.maxLength(8)]),
    clientAge: new FormControl('' , [Validators.min(10) , Validators.max(80)]),
    clientMail: new FormControl('' , [Validators.email]),
    messageTitle: new FormControl('' , Validators.pattern(/^[A-Z]/)),
    messageBody: new FormControl(''),


  });
  saveForm()
  {
    console.log(this.contactsForm)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
