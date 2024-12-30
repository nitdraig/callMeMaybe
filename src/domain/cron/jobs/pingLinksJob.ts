import cron from "node-cron";
import axios from "axios";
import LinkModel from "../../links/models/linkModels";

// Función principal del job
const pingLinksJob = () => {
  // Programa el cron job para ejecutarse cada 15 minutos
  cron.schedule("*/15 * * * *", async () => {
    console.log("PingLinksJob: Comenzando a verificar URLs...");

    try {
      // Obtén todas las URLs de la base de datos
      const links = await LinkModel.find();

      if (!links || links.length === 0) {
        console.log("PingLinksJob: No hay URLs registradas.");
        return;
      }

      for (const link of links) {
        try {
          const response = await axios.get(link.url);
          console.log(
            `PingLinksJob: URL ${link.url} respondió con código ${response.status}`
          );
        } catch (error) {
          console.error(
            `PingLinksJob: Error al acceder a ${link.url}: ${error}`
          );
        }
      }
    } catch (error) {
      console.error(`PingLinksJob: Error al obtener las URLs: ${error}`);
    }
  });

  console.log(
    "PingLinksJob: Cron job programado para ejecutarse cada 15 minutos."
  );
};

export default pingLinksJob;
