import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'bypassSecurityTrustUrl', pure: false })
export class BypassSecurityTrustUrlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(content) {
        return this.sanitizer.bypassSecurityTrustUrl(content);
    }
}
