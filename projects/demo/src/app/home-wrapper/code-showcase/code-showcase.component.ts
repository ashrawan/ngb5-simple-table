import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {HighlightService} from '../../services/highlight.service';

@Component({
  selector: 'app-code-showcase',
  templateUrl: './code-showcase.component.html',
  styleUrls: ['./code-showcase.component.scss']
})
export class CodeShowcaseComponent implements OnInit, AfterViewChecked {

  // Codes to Highlight
  @Input() CS_TYPESCRIPT = ``;
  @Input() CS_HTML_TEMPLATE = '';
  @Input() CS_JSON_DATA = '';

  constructor(
    private highlightService: HighlightService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

}
