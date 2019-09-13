import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public set(key: string, object: any): void {
    localStorage.setItem(key, JSON.stringify(object));
  }

  public get(key: string): Promise<Array<any>> {
    return new Promise((resolve) => {
      let datas: Array<any> = [];

      if (localStorage.getItem(key) !== null ) {
        datas =  JSON.parse(localStorage.getItem(key));
      }

      resolve(datas);
    });

  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }
}
