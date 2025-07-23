//import 'module-alias/register'
import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config';

import { SandboxModule } from './sandbox.module'

async function bootstrap() {
	const app = await NestFactory.create(SandboxModule, {
		cors: true,
	})

	const configService = app.get(ConfigService);
  	await app.listen(configService.get('PORT') ?? 3000);
}

try {
	bootstrap()
} catch (err) {
	const e = err as Error
	console.error(`Error during bootstrap: ${e.message}`)
}
