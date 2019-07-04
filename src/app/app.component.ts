import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';

  articleArray: any = []
  // buttonPressCounterLimit: number = 0;

  constructor() {}

  ngOnInit() {
    let newArticle1 = {
      articleText:" Some article goes here ",
      like:10,
      dislike:10,
      userLikeCounter : true,
      userDislikeCounter : true
    }

    let newArticle2 = {
      articleText:" Some article goes here ",
      like:20,
      dislike:20,
      userLikeCounter : true,
      userDislikeCounter : true
    }

    let newArticle3 = {
      articleText:" Some article goes here ",
      like:30,
      dislike:30,
      userLikeCounter : true,
      userDislikeCounter : true
    }

    this.articleArray.push( newArticle1, newArticle2, newArticle3 )
  }

  likeArticle(i) {

    if(this.articleArray[i].userDislikeCounter) {
      if(this.articleArray[i].userLikeCounter) {
        this.articleArray[i].like +=1
        this.articleArray[i].userLikeCounter = false
      }
    } else {
      this.articleArray[i].dislike -=1
      this.articleArray[i].userDislikeCounter = true;
      this.articleArray[i].userLikeCounter = true;
    }
  }

  dislikeArticle(i) {

    if(this.articleArray[i].userLikeCounter) {
      if(this.articleArray[i].userDislikeCounter) {
        this.articleArray[i].dislike +=1
        this.articleArray[i].userDislikeCounter = false
      }
    } else {
      this.articleArray[i].like -=1
      this.articleArray[i].userDislikeCounter = true;
      this.articleArray[i].userLikeCounter = true;
    }
  }

}
