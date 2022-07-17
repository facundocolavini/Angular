import { Pipe, PipeTransform } from '@angular/core';
import { Courses } from './models/courses';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform
      
  (courses: Courses[], searchResults: string) {
    if(courses.length === 0 || searchResults === ''){
      return courses;
    }else{
      console.log(courses.filter(course => course.name.toLocaleLowerCase().includes(searchResults.toLocaleLowerCase())))
      return courses
    }
  }
}
