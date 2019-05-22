import {inject, TYPE} from "./ioc";
import {IMyOtherService} from "./my-other-service";

export interface IMyService {
    count(): number;
    value(): number;
}

export class MyService implements IMyService {
    @inject(TYPE.MyOtherService)
    private other!: IMyOtherService;

    count() {
        return this.other.count();
    }

    value() {
        return this.other.value();
    }
}
