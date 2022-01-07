import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {

  /**
   * Display text for the loader
   */
  @Input() text: string = 'Loading...';

  /**
   * Controls full height display
   */
  @Input() fullHeight = true;

  /**
   * LoaderComponent Constructor
   */
  constructor() { }

  /**
   * OnInit LifeCycle Hook
   */
  ngOnInit() {}
}
