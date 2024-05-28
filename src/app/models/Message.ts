export class Message {
  constructor(
    public id?: number | null,
    public message?: string | null,
    public user?: string | null,
    public room?: string | null
  ) {}
}
