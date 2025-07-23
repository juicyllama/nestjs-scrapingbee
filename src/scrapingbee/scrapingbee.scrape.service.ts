import { Injectable } from '@nestjs/common'
import { SpbConfig, ScrapingBeeClient } from 'scrapingbee'
import { InjectScrapingbee } from './scrapingbee.constants'

@Injectable()
export class ScrapingBeeScrapeService {
	constructor(
		@InjectScrapingbee() private readonly client: ScrapingBeeClient,
	) {}

	async scrape(options: SpbConfig): Promise<any> {

		try {
			const response = await this.client.get(options)
			const decoder = new TextDecoder()
			const text = decoder.decode(response.data)
			return text
		} catch (err) {
			const e = err as Error
			console.error(`Error during scraping: ${e.message}`, e)
		}
	}
}
