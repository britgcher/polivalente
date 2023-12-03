// src/app/services/accordion.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  private isAccordionOpenSubject = new BehaviorSubject<boolean>(false);
  isAccordionOpen$ = this.isAccordionOpenSubject.asObservable();

  toggleAccordion() {
    const currentValue = this.isAccordionOpenSubject.value;
    this.isAccordionOpenSubject.next(!currentValue);
  }

  setAccordionState(isOpen: boolean) {
    this.isAccordionOpenSubject.next(isOpen);
  }
}