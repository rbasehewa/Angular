import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends : Friend[] = [];
  selectedFriend? : Friend;

/**
 * 
 * @param friendservice inject the service
 */

  constructor(private friendservice: FriendService) { }

  ngOnInit() {
    this.getFriends();
  }


  onSelect(friend: Friend): void{
    this.selectedFriend = friend;
  }

  /**
   * Add getFriends method tp to retrive the friends from the service
   */

  getFriends(): void {
    this.friends = this.friendservice.getFriends();
  }

}
