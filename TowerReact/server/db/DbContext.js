import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { TowerEventSchema } from '../models/TowerEvent.js';
import { ValueSchema } from '../models/Value'
import { TicketSchema } from '../models/Ticket.js';
import { CommentSchema } from '../models/Comment.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  TowerEvent = mongoose.model('TowerEvent', TowerEventSchema)
  Tickets = mongoose.model('Ticket', TicketSchema);
  Comments = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()
