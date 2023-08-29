export class Task {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public status: TaskStatus,
    public createdAt: Date,
  ) {
  }
}

export enum TaskStatus {
  A_FAIRE = 'A faire',
  EN_COURS = 'En cours',
  TERMINEE = 'Terminée',
}
