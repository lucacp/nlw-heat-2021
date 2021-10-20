import { Request, Response } from "express";

import { Get3LastMessageService } from "../services/Get3LastMessageService";


class Get3LastMessageController {
  async handle(request: Request, response: Response){

    const services = new Get3LastMessageService();

    const result = await services.execute();

    return response.json(result);
  }
}

export { Get3LastMessageController };