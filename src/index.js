import { app } from "./app.js";
import { PORT,settingRoles } from "./config.js";
import { connectDB } from "./db.js";

async function main() {
  try {
    await connectDB();
    settingRoles();
    app.listen(PORT);
    console.log(`Listening on port http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
  } catch (error) {
    console.error(error);
  }
}

main();
