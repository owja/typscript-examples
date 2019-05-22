import {h, render} from "preact";
import Router from "preact-router";

import {NotFound} from "./elements/notfound";
import {HelloWorld} from "./elements/hello-world";
import {Layout} from "./layout/default";
import {Counter} from "./elements/counter";
import {PassedCounter} from "./elements/passed-counter";
import {FactoryCounter} from "./elements/factory-counter";
import {Random} from "./elements/random";

const root: Element = document.body;

export function init() {
    render((
        <Layout>
            <Router>
                <HelloWorld path={"/"}/>
                <Random path={"/random"}/>
                <Counter path={"/counter"}/>
                <PassedCounter path={"/passed"}/>
                <FactoryCounter path={"/initial"}/>
                <NotFound default/>
            </Router>
        </Layout>
    ), root, root.lastChild as Element);
}