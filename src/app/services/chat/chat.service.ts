import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { ChatMessage } from '../../models/ChatMessage';
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
import { Message } from '../../models/Message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private stompClient: any;
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<
    ChatMessage[]
  >([]);

  private chatRoom: string = 'aaa';
  messageList: any[] = [];

  changeChat(idRoom: any) {
    this.joinRoom(idRoom);
  }

  getChatStatus(): string {
    return this.chatRoom;
  }

  constructor() {
    this.initConnectionSocket();
  }

  initConnectionSocket() {
    const url = 'https://gruposjaveriana.dynaco.co/api/homez/chat-socket';
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
  }

  joinRoom(roomId: string) {
    this.disconnect();
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: any) => {
        const messageContent = JSON.parse(messages.body);
        const currentMessage = this.messageSubject.getValue();
        currentMessage.push(messageContent);

        this.messageSubject.next(currentMessage);
      });
    });
  }

  disconnect() {
    this.stompClient.disconnect(() => {
      console.log('Disconnected');
    });
  }

  sendMessage(roomId: String, chatMessage: ChatMessage) {
    this.stompClient.send(
      `/app/chat/${roomId}`,
      {},
      JSON.stringify(chatMessage)
    );
  }

  insertarMessage(message: Message): Promise<Message> {
    const token =
      localStorage.getItem('idHomezArrendador') ||
      localStorage.getItem('idHomezArrendatario');

    return axios
      .post<Message>('https://gruposjaveriana.dynaco.co/api/homez/message', message, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data);
  }

  async getMessagesByRoom(room: String): Promise<Message[]> {
    const token =
      localStorage.getItem('idHomezArrendador') ||
      localStorage.getItem('idHomezArrendatario');

    return await axios
      .get<Message[]>(`https://gruposjaveriana.dynaco.co/api/homez/message/${room}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        return response.data
      });
  }

  getMessageSubject() {
    return this.messageSubject.asObservable();
  }
}
