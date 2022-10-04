import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../admin/shared/models/post.interface";
@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(posts: Post[], searchInput: '', field = 'title'): Post[]{
    if(!searchInput) {
      return posts;
    }
    return posts.filter(post => {
      return post[field].toLowerCase().includes(searchInput);
    })
  }
}
