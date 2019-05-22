export interface IMyOtherService {
    value(): number;
    count(): number;
    listen(listener: Listener): Unsubscribe;
}

export class MyOtherService implements IMyOtherService {
    private countValue = 0;
    private listener: Listener[] = [];

    constructor(initValue?: number) {
        this.countValue = initValue || 0;
    }

    value() {
        return this.countValue;
    }

    count() {
        this.countValue++;
        this.listener.forEach((cb) => cb());
        return this.countValue;
    }

    listen(listener: Listener): Unsubscribe {
        if (this.listener.indexOf(listener) !== -1) {
            throw "you cannot subscribe more than once";
        }

        this.listener.push(listener);

        return () => {
            const idx = this.listener.indexOf(listener);
            if (idx !== -1) {
                this.listener.splice(idx, 1);
            }
        };
    }
}

export function myOtherServiceFactory() {
    return new MyOtherService(500);
}
