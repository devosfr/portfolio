import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// Use process.env.PORT para a variável que o Railway usa
	const port = process.env.PORT || 8080 // Se process.env.PORT não estiver definida, usará a porta 8080

	await app.listen(port, "0.0.0.0") // Certifique-se de ouvir na porta 0.0.0.0
	console.log(`🚀 Server running on port ${port}`)
}
bootstrap()
