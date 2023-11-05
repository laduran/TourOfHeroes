**Angular Tour of Heroes++**

This is a refresher project to re-learn the latest versions of Angular.
My last experience with Angular was Angular v5.x and quite out of date in 2023
So this is just an attempt to re-learn the framework.

Started with the Tour of Heroes example and modified to make use of new features
and newer 7.x RXjs library. Last time I used RXjs it was version 5.x

Some changes from default Tour of Heroes:

- Use Angular Material UX
- Update All libraries to latest versions as of 10/2023
- Display Heroes component using Angular Material Table
- Update Hero class with additional properties
- Update Hero detail and Hero edit with new properties

**RXjs**

Common RXjs operators (KNOW THESE!) [from here](https://www.youtube.com/watch?v=Byttv3YpjQk)):

`Map and Filter`

`Tap`

`switchMap, concatMap`

`combineLatest`

`startWith, distinctUntilChanged, debounceTime`

`catchError`

TODO: Look into how to use RXjs streams when getting items from the HeroService.

[Good Fireship.io Tutorial on RxJS](https://github.com/fireship-io/175-code-this-not-that-rxjs)