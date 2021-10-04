import { makeAutoObservable } from "mobx";

export class TodoItemViewModel {
    constructor(
        public text: string,
        public done: boolean, // this.done = done 해줌
    ) {
        makeAutoObservable(this);
    }

    setText(text: string) {
        this.text = text;
    }

    setDone(done: boolean) {
        this.done = done;
    }
}