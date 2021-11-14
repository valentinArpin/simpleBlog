import {Component, OnInit} from '@angular/core';
import {Post} from "./post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  post: Post[] = [];

  ngOnInit(): void {
    const post = new Post(1, 'coucou', 'bonjour je', 21,  '12/12/21');
    const post2 = new Post(2, 'slt', 'bonjour je', 21,  '12/12/21');

    this.post.push(post);
    this.post.push(post2);
  }
}
