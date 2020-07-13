import { fromEvent, Observable } from "rxjs";
import { select, classList } from "./dom";

function initStickyHeader(
    queryString = ".c-header",
    className = "is-active"
): Observable<Event> {
    const header = select(queryString);
    const onWindowScroll = fromEvent(window, "scroll");

    const changeElementOnScroll = (element: HTMLElement) => {
        const elementClassList = classList(element);

        if (window.scrollY > 10) elementClassList.add(className);
        else elementClassList.remove(className);
    };

    if (header) {
        changeElementOnScroll(header);
        onWindowScroll.subscribe(() => changeElementOnScroll(header));
    }

    return onWindowScroll;
}

export default initStickyHeader;
