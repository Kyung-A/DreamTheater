import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const okServer = () => console.log(`✅ OK ${process.env.PORT}`);

app.listen(PORT, okServer);
