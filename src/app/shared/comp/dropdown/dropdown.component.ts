import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  
  @Input()
  title = ''

  @Input()
  active = false

  selectSignal = signal('')

  select = ''

  options = input([''])

  sinalizar(){
    this.selectSignal.set(this.select)
  }
}
