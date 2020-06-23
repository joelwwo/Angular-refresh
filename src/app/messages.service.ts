import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: string[] = []

  addMessage(message: string): void {
    this.messages.push(message)
  }

  clear(): void {
    this.messages.length = 0
  }

}
