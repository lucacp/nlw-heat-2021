import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController }    from "./controllers/CreateMessageController";
import { Get3LastMessageController } from "./controllers/Get3LastMessageController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/Authenticate";
const router = Router();


router.post("/authenticate", 
  new AuthenticateUserController().handle
);

router.post("/messages",
  ensureAuthenticated, 
  new CreateMessageController().handle
);

router.get("/messages/last3",new Get3LastMessageController().handle);

router.get("/profile",ensureAuthenticated, new ProfileUserController().handle);



export { router };