import { fromEvent } from "rxjs";
import { selectAll, classList } from "./dom";

type ClassStates = {
    active: string;
    success: string;
    danger: string;
};

function initFields(
    queryString = ".c-field__input",
    classNames: ClassStates = {
        success: "is-success",
        danger: "is-danger",
        active: "is-active",
    }
): void {
    const fieldInputs = selectAll(queryString);

    const onFieldInputFocus = fromEvent(fieldInputs, "focus");
    const onFieldInputBlur = fromEvent(fieldInputs, "blur");

    const focusField = (focusEvent: FocusEvent) => {
        const input = <HTMLElement>focusEvent.target;
        const field = input.parentElement;

        if (field && input) {
            classList(field).add(classNames.active);
        }
    };

    const blurField = (focusEvent: FocusEvent) => {
        const input = <HTMLInputElement>focusEvent.target;
        const field = input.parentElement;

        if (field && input && !input.value) {
            classList(field).remove(classNames.active);
        }
    };

    if (fieldInputs.length) {
        onFieldInputFocus.subscribe((event) => focusField(<FocusEvent>event));
        onFieldInputBlur.subscribe((event) => blurField(<FocusEvent>event));
    }
}

export default initFields;
