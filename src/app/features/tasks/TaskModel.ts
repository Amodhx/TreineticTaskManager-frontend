export class Task {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  user_id:string

  constructor(id: number, title: string, description: string, status: string, createdAt: string,user_id:string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
    this.user_id = user_id;
  }
}
