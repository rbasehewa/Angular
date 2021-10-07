import { Injectable } from '@angular/core';
import { Friend } from './friend';
import { FRIENDS } from './mock-friends';

@Injectable()
export class FriendService {

  constructor() { }

  getFriends(): Friend[] {
    return FRIENDS;
  }

}

