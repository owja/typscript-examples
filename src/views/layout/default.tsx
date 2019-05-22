import {Component, h} from "preact";
import {Link} from "preact-router/match";

import styles from "./default.css";

export class Layout extends Component {

    public render(props: {children: Element}) {
        return (
            <div class={styles.main}>
                <header>
                    <h1>OWJA! IoC Example</h1>
                </header>
                <nav>
                    <ul>
                        <li><Link activeClassName={styles.active} href={"/"}>Hello World</Link></li>
                        <li><Link activeClassName={styles.active} href={"/counter"}>Counter</Link></li>
                        <li><Link activeClassName={styles.active} href={"/passed"}>Passed Counter</Link></li>
                        <li><Link activeClassName={styles.active} href={"/initial"}>Counter from Factory</Link></li>
                        <li><Link activeClassName={styles.active} href={"/random"}>Random Value</Link></li>
                    </ul>
                </nav>
                {props.children}
            </div>
        );
    }

}