import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { CarSchema } from '../models/Car.js';
import { PetsSchema } from '../models/Pets.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Cars = mongoose.model('Car', CarSchema)
  Pets = mongoose.model(`Pet`, PetsSchema)
}

export const dbContext = new DbContext()
