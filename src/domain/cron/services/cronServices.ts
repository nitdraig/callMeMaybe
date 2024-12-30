import cron from "node-cron";
import axios from "axios";
import { User } from "../../auth/models/userModel";

const startCronJob = () => {
  cron.schedule("*/15 * * * *", async () => {
    console.log("Ejecutando ping a URLs...");
    const users = await User.find();

    for (const user of users) {
      for (const url of user.links!) {
        try {
          await axios.get(url);
          console.log(`Ping exitoso a ${url}`);
        } catch (err) {
          console.error(`Error al hacer ping a ${url}: ${err}`);
        }
      }
    }
  });
};

export default startCronJob;
