import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IWord } from 'src/app/models/IWord';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit , OnDestroy{

  word: IWord;
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) { }

  ngOnInit() {
  
    // const {snapshot} = this.activatedRoute;
    // const key = snapshot.paramMap.get('key');
    // const meaning = this.dictionaryService.search(key);
    // this.word = {
    //   key: key,
    //   meaning: meaning,
    // }

    this.subscription = this.activatedRoute
    .paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {
        key: key,
        meaning: meaning,
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
