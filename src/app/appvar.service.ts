import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppvarService {
  server
  port = '2119'
  constructor() {
    this.server = '192.168.0.117'
  }
}
