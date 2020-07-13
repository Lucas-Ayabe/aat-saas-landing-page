import { fromEvent } from "rxjs";
import { select, classList, dataset } from "./dom";

function initMenuTrigger(
    queryString = ".c-menu-trigger",
    className = "is-active"
): void {
    const menuTrigger = select(queryString);

    const toggleMenu = (trigger: HTMLElement): void => {
        const { target } = dataset(trigger);

        if (target) {
            const targetElement = select(target);

            if (targetElement) {
                classList(trigger).toggle(className);
                classList(targetElement).toggle(className);
            }
        }
    };

    if (menuTrigger) {
        const onMenuTriggerClick = fromEvent(menuTrigger, "click");
        onMenuTriggerClick.subscribe(() => toggleMenu(menuTrigger));
    }
}

export default initMenuTrigger;
