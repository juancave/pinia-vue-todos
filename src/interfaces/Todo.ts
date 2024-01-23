export interface Todo {
  id: string
  text: string
  status: Status
}

export enum Status {
  created = 'created',
  in_progress = 'in_progress',
  completed = 'completed'
}
