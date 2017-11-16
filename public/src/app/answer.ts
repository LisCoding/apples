export class Answer {
  constructor(
public _id: string = "",
public _question: Object = {},
public content: string = "",
public details: string = "",
public author: string = "",
public likes: number = 0,
public createdAt: Date = new Date(),
){}
}
