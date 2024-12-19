import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

user: UserForAuth | undefined;
USER_KEY = '[user]';
  // isLogged: boolean;

get isLoggged(): boolean {
  return !!this.user;
}

  constructor() {
   try {
    const locUser = localStorage.getItem(this.USER_KEY) || '';
    this.user = JSON.parse(locUser)
    
   } catch (error) {
    this.user = undefined;
    
   }
   }

  login() {
    this.user = {
      id: '5fa64b162183ce1728ff371d',
      firstnName: 'Ariana',
      email: 'ari@abv.bg',
      password: '123123',
      phoneNumber: '456-456-456-456',

    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY)
  }
}
