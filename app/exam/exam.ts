export class Exam {
    Id: string;
    Text: string;
    Marks: number;
    AnswerId: number;
    Answers: [
      {
        Id: number;
        Text: string;
        Completed: boolean;
      }
    ];
  }
