import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";

class PetsService {
  async getAllPets() {
    const Pets = await dbContext.Pets.find()
    return Pets
  }

  async getPetsById(petId) {
    const pet = await dbContext.Pets.findById(petId)
    if (pet == null) {
      throw new BadRequest(`${petId} is not a valid pet Id`)

    }
    return pet
  }
}

export const petsService = new PetsService()