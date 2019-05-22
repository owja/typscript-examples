import "services/ioc/bindings";
import {init} from "./views/app";

init();

if (module.hot) {
    module.hot.accept();
}
