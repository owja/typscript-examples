import {container} from "./container";
import {TYPE} from "./types";

import {MyService, IMyService} from "../my-service";
import {MyOtherService, IMyOtherService, myOtherServiceFactory} from "../my-other-service";

// this Services will only instantiated once
container
    .bind<IMyService>(TYPE.MyService)
    .to(MyService)
    .inSingletonScope();
container
    .bind<IMyOtherService>(TYPE.MyOtherService)
    .to(MyOtherService)
    .inSingletonScope();

// this service is build only once but with an initial value
container
    .bind<IMyOtherService>(TYPE.MyFactoryService)
    .toFactory(myOtherServiceFactory)
    .inSingletonScope();

// this service will renew every time it is requested
container.bind<number>(TYPE.MyRandomService).toFactory(() => Math.random());

// this is just a value - you can inject everything this way
container.bind<string>(TYPE.MyValue).toValue("hello world");
