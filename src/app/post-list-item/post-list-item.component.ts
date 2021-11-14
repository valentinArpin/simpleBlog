import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() {
  }

  ngOnInit() {
  }

  onDontLoveIt(id: number) {
    /*  const index = this.posts.indexOf(id);
      this.posts[index].loveIts--;
      console.log('Not love ' + this.loveIts); */
  }

  onLoveIt(index: number) {
    /*  this.posts[index].loveIts++;
      console.log('love ' + this.loveIts);
    } */
  }
}
