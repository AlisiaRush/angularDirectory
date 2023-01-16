import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  public courses = [
    {
      id: 1,
      title: 'Data Sharing',
      description:
        'Used to share data between components. You can use Parent to Child, Child to Parent or use Subject and Service.',
      link: '/data-sharing',
      name: 'Data Sharing',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 2,
      title: 'NgClass',
      description:
        'Used to style HTML elements based on a className and condition',
      link: '/ngClass',
      name: 'NgClass',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 3,
      title: 'NgStyle',
      description:
        'Used to change the look & behavior of HTML Elements based on a condition',
      link: '/ngStyle',
      name: 'NgStyle',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 4,
      title: 'NgIf',
      description:
        'Used to add or remove HTML Elements based on a given condition',
      link: '/ngIf',
      name: 'NgIf',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 5,
      title: 'Renderer2',
      description:
        'Used to manipulate DOM Elements without using native element.',
      link: '/renderer2',
      name: 'Renderer2',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 6,
      title: '@HostListener',
      description:
        ' Listens to the DOM event on the host element and it reacts to that event by executing an event handler method.',
      link: '/hostListener',
      name: 'HostListener',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 7,
      title: '@HostBinding',
      description:
        ' Binds the host element property to a variable in the directive orcomponent.',
      link: '/hostBinding',
      name: '@HostBinding',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 8,
      title: 'Services',
      description:
        'Services are re-usable TypeScript Classes that can be used in multiple components across your Angular Application.',
      link: '/services',
      name: 'Services',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 9,
      title: 'Dependency Injection',
      description:
        'Allows components, decorators, classes, pipes, and injectables to configure the dependencies they need.',
      link: '/dependencyInjection',
      name: 'Dependency Injection',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 10,
      title: 'Data Services',
      description:
        'An instance of a class that you can make available to any part of your application using dependency injection system',
      link: '/dataServices',
      name: 'Data Services',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 11,
      title: 'Component Interaction with Services',
      description: 'Sharing services between two or more components',
      link: '/componentInteraction',
      name: 'Component Interaction with Services',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 12,
      title: 'Observables',
      description:
        'Preform asynchronous operations and handle asynchronous data',
      link: '/observables',
      name: 'Observables',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 13,
      title: 'Operators',
      description:
        'Operators are used to manipulate the observable data stream.',
      link: '/operators',
      name: 'Operators',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 14,
      title: 'Unsubscribe to Observable',
      description: 'Stops data from emitting.',
      link: '/unsubscribe',
      name: 'Unsubscribe to Observable',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 15,
      title: 'Routing',
      description:
        'Routing from one part of the app to another from one view to another view.',
      link: '/routing',
      name: 'Routing',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 16,
      title: 'Custom Pipes',
      description: 'Learn how to create your own custom pipes.',
      link: '/custom-pipes',
      name: 'Custom Pipes',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
    {
      id: 16,
      title: 'Pure Pipes',
      description: 'Learn how to use Pure Pipes in Angular.',
      link: '/pure-pipes',
      name: 'Pure Pipes',
      image: '../../../../assets/images/courses/angularPlaceholder.jpg',
      author: 'Alisia Rush',
      duration: '20 hours',
      type: 'Premium',
      price: '$120.00',
    },
  ];

  public getAllCourses(): any {
    const courseLister = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.courses);
      }, 1000);
    });
    return courseLister;
  }
}
