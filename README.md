<p align="center">
  <a href="https://juicyllama.com/" target="_blank">
    <img src="https://juicyllama.com/assets/images/icon.png" width="100" alt="JuicyLlama Logo" />
  </a>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>



<p align="center">
A NestJS app for integrating with ScrapingBee API
</p>

## Install

```bash
npm i @juicyllama/nestjs-scrapingbee
```

## Usage

1. Add your `SCRAPINGBEE_API_KEY` to your .env file
2. Add the module to your NestJs App

```ts
import { ScrapingBeeModule } from '@juicyllama/nestjs-scrapingbee'

@Module({
	imports: [ScrapingBeeModule]
})
```

3. Add the service to your code

```ts
import { ScrapingBeeService } from '@juicyllama/nestjs-scrapingbee'

export class ExampleClass {
  constructor(private readonly scrapingBeeService: ScrapingBeeService) {}

  async message(options: SpbConfig) {
    try {
      return await this.scrapingBeeService.scrape(options);
    } catch (e) {
      console.log(e);
    }
  }
}
```
