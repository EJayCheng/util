import { BehaviorSubject } from "rxjs";

export class rxToggle {
  public state$: BehaviorSubject<boolean>;

  public constructor(initState: boolean = false) {
    this.state$ = new BehaviorSubject(initState);
  }

  public on(): void {
    this.state$.next(true);
  }

  public off(): void {
    this.state$.next(false);
  }

  public toggle(): void {
    this.state$.next(!this.state$.value);
  }

  public set(state: boolean): void {
    this.state$.next(state);
  }

  public get state(): boolean {
    return this.state$.value;
  }

  public set state(value: boolean) {
    this.set(value);
  }
}
