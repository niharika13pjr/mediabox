import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mediaItems = [
    {
      id: 1,
      name: 'The Shawshank Redemption',
      medium: 'Movies',
      category: 'Drama',
      year: 1994,
      watchedOn: null,
      isFavorite: false
    },
    {
      id: 2,
      name: 'The Dark Knight',
      medium: 'Movies',
      category: 'Drama',
      year: 2008,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 3,
      name: 'Breaking Bad',
      medium: 'Series',
      category: 'Thriller',
      year: 2008,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: 'Game of Thrones',
      medium: 'Series',
      category: 'Action',
      year: 2011,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 5,
      name: 'Inception',
      medium: 'Movies',
      category: 'Sci-Fi',
      year: 2010,
      watchedOn: null,
      isFavorite: false
    }
  ];

  onMediaItemDelete(mediaItem) { }
}
