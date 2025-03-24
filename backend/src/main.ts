import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	// await app.listen(process.env.PORT ?? 3000)

	const port = process.env.PORT || 3000
	await app.listen(port, "0.0.0.0") // <- Isso é essencial para o Railway
	console.log(`🚀 Server running on port ${port}`)
}
bootstrap()
