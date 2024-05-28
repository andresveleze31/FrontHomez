import { Component } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { ChatMessage } from '../../models/ChatMessage';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Message } from '../../models/Message';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  messageInput: string = '';
  userId: string = '';
  messageList: any[] = [];
  idRoom : string = '';

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idRoom = localStorage.getItem('chat') || "aaa";
    this.userId = localStorage.getItem('userId') || "0";
    console.log(this.userId)
    this.chatService.joinRoom(this.idRoom);
    this.cargarMessages();
    this.listenterMessage();
  }
  sendMessage() {
    const chatMessage: ChatMessage = {
      message: this.messageInput,
      user: this.userId,
    };
    this.chatService.sendMessage(this.idRoom, chatMessage);


    const newMessage = new Message();
    newMessage.message = this.messageInput;
    newMessage.user = this.userId;
    newMessage.room = this.idRoom;
    console.log(newMessage);
    this.chatService.insertarMessage(newMessage);

    this.messageInput = '';
    console.log(this.messageList);

  }
  async cargarMessages(){
    this.messageList = await this.chatService.getMessagesByRoom(this.idRoom);
    this.messageList = this.messageList.map((item: any) => ({
      ...item,
      message_side: item.user === this.userId ? 'sender' : 'receiver',
    }));
  }

  listenterMessage() {
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages.map((item: any) => ({
        ...item,
        message_side: item.user === this.userId ? 'sender' : 'receiver',
      }));
    });
  }
}
