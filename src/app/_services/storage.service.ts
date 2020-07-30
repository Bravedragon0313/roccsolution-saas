import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    public set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public get(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    public remove(key) {
        localStorage.removeItem(key);
    }

    public clear() {
        localStorage.clear();
    }
}
