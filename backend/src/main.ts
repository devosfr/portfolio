import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// Usar a variável de ambiente PORT do Railway ou 4000 se estiver local
	const port = process.env.PORT || 4000 // 4000 como fallback para o ambiente local

	await app.listen(port, "0.0.0.0") // Escute em 0.0.0.0 para permitir conexões externas
	console.log(`🚀 Server running on port ${port}`)
}
bootstrap()
