import { petsService } from "../services/PetsService.js";
import BaseController from "../utils/BaseController.js";

export class PetsController extends BaseController {
  constructor() {
    super(`api/pet`)
    this.router
      .get(``, this.getAllPets)
      .get(`/:petId`, this.getPetsById)
  }


  /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */

  async getAllPets(request, response, next) {
    try {
      const pets = await petsService.getAllPets()
      response.send(pets)
    } catch (error) {
      next(error)
    }
  }


  /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */
  async getPetsById(request, response, next) {
    try {
      const petId = request.params.petId
      const pet = await petsService.getPetsById(petId)
      response.send(pet)
    } catch (error) {
      next(error)
    }
  }

}