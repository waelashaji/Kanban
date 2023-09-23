import { User } from "./User";

export class Issue {
  title: string = "";
  category: string = "";
  dueDate: string = new Date().toDateString();
  estimate: string = "";
  importance: string = "";
  status: string = "todo"
}
