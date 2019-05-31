import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppSharedLibsModule} from './shared-libs.module';
import {AppSharedCommonModule} from './shared-common.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppSharedLibsModule,
        AppSharedCommonModule,
        RouterModule,
    ],
    declarations: [

    ],
    providers: [],
    entryComponents: [],
    exports: [
        AppSharedCommonModule,

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppSharedModule {
    static forRoot() {
        return {
            ngModule: AppSharedModule
        };
    }
}
