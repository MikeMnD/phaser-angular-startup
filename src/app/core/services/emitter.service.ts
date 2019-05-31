import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedEmitterService {

    @Output() npaReady = new EventEmitter<string>();
    @Output() toggleMenuEmitter = new EventEmitter();

    toggleMenu() {
        this.toggleMenuEmitter.emit({});
    }
}
