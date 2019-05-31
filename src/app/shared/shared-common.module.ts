import {NgModule} from '@angular/core';
import {BypassSecurityTrustUrlPipe} from '../core/pipes/bypass-security-trust-url.pipe';
import {BypassSecurityTrustHTMLPipe} from '../core/pipes/bypass-security-trust-html.pipe';
import {AppSharedLibsModule} from './shared-libs.module';

@NgModule({
  imports: [AppSharedLibsModule],
  declarations: [
    BypassSecurityTrustUrlPipe,
    BypassSecurityTrustHTMLPipe
  ],
  exports: [
    AppSharedLibsModule,
    BypassSecurityTrustUrlPipe,
    BypassSecurityTrustHTMLPipe
  ]
})
export class AppSharedCommonModule {
}
