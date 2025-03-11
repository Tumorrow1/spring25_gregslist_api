import { Schema } from "mongoose";

export const PetsSchema = new Schema(
  {
    name: { type: String, minLength: 1, maxLength: 100, required: true },
    imgUrl: { type: String, minLength: 1, maxLength: 100, required: true },
    isVaccinated: { type: Boolean, required: true },
    age: { type: Number, minLength: 0, maxLength: 5000, required: true },
    species: { type: String, enum: [`cat`, `dog`, `bird`, `capybara`], required: true, default: `unknown` },
    status: { type: String, enum: [`adopted`, `adoptable`,], required: true, default: `unknown` },
    likes: [{ type: String, required: true, default: `unknown` }],
    creatorId: { type: Schema.ObjectId, required: true, ref: `Account` }
  },

  {
    timestamps: true,
    toJSON: { virtuals: true }
  },
)

PetsSchema.virtual(`creator`, {
  ref: `Account`,
  localField: `creatorId`,
  foreignField: `_id`,
})