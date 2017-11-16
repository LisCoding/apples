export class Question {
  constructor(
  public _id: string = "",
  public title: string = "",
  public description: string = "",
  public answers: Array<Object> = [],
  public createdAt: Date = new Date(),
  ){}
}
