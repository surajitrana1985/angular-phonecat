import { Component, OnInit } from '@angular/core';
import { PhoneListService } from './phone-list.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
  providers: [PhoneListService]
})
export class PhoneListComponent implements OnInit {

  phoneList: Array<string>;

  constructor(private phonelistService: PhoneListService) { }

  ngOnInit() {
    this.phonelistService.getAllPhones().subscribe(phones => {
      this.phoneList = phones;
    }, error => {
      console.error(error);
    })
  }

}
