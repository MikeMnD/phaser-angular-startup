import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'bypassSecurityTrustHtml', pure: false })
export class BypassSecurityTrustHTMLPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
