import { HttpModuleOptions, HttpModuleOptionsFactory, Injectable } from '@nestjs/common';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
  createHttpOptions(): Promise<HttpModuleOptions> | HttpModuleOptions {
    const followRedirects = require('follow-redirects');
    followRedirects.maxBodyLength = 500 * 1024 * 1024 * 1024;
    return {
      maxRedirects: 10,
    };
  }
}
