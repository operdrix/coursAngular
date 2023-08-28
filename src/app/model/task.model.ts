export class Task {
  constructor(
    public title: string,
    public description: string,
    public status: TaskStatus,
  ) { }
}

export enum TaskStatus {
  A_FAIRE = 'A_FAIRE',
  EN_COURS = 'EN_COURS',
  TERMINEE = 'TERMINEE',
}
