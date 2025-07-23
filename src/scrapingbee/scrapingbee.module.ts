import { Module } from '@nestjs/common'
import { ConfigValidationModule } from '../config/config.module'
import { getConfigToken } from '../config/config.provider'
import { ScrapingBeeClient } from 'scrapingbee'
import { ScrapingbeeConfigDto } from '../config/scrapingbee.config.dto'
import { ScrapingbeeClientToken } from './scrapingbee.constants'
import { ScrapingBeeScrapeService } from './scrapingbee.scrape.service'
import { ScrapingBeeService } from './scrapingbee.service'

@Module({
	imports: [ConfigValidationModule.register(ScrapingbeeConfigDto)],
	controllers: [],
	providers: [
		ScrapingBeeService,
		ScrapingBeeScrapeService,
		{
			provide: ScrapingbeeClientToken,
			inject: [getConfigToken(ScrapingbeeConfigDto)],
			useFactory: (config: ScrapingbeeConfigDto) => new ScrapingBeeClient(config.SCRAPINGBEE_API_KEY),
		},
	],
	exports: [ScrapingBeeService],
})
export class ScrapingBeeModule {}
