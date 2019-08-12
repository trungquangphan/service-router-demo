import { Component, OnInit } from '@angular/core';
import { IWord } from 'src/app/models/IWord';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  listWord: IWord[];
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.listWord = this.dictionaryService.getAll();
  }

}
