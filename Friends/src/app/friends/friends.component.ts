import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friend : Friend = {
    id : 1,
    name : "Venura"
  };

  constructor() { }

  ngOnInit() {
  }

}
