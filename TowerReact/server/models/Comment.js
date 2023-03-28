import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const CommentSchema = new Schema({
  body: {type: String, required: true},
  eventId: {type: ObjectId, required: true, ref: 'TowerEvent'},
  creatorId: {type: ObjectId, required: true, ref: 'Account'}
},{
  timestamps: true, toJSON: {virtuals: true}
})

CommentSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})

CommentSchema.virtual('towerEvent',{
  localField: 'eventId',
  foreignField: '_id',
  ref: 'TowerEvent',
  justOne: true
})