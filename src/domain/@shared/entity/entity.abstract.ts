import { v4 as uuid } from 'uuid';

export default abstract class Entity {
  protected _id: string;

  constructor() {
    this._id = uuid();
  }

  
    get id(): string {
      return this._id;
    }
  
  }