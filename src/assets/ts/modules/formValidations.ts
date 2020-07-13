import { fromEvent } from "rxjs";
import { selectAll, classList } from "./dom";

type ClassStates = {
    active: string;
    success: string;
    danger: string;
};

function initFormValidations(
    queryString = ".c-form[data-validate]",
    classNames: ClassStates = {
        success: "is-success",
        danger: "is-danger",
        active: "is-active",
    }
): void {
    const forms = selectAll(queryString);
    const onFormChange = fromEvent(forms, "change");

    const changeFieldInput = (changeEvent: Event) => {
        const input = <HTMLInputElement>changeEvent.target;
        const field = input.parentElement;

        if (input && field) {
            const fieldClassList = classList(field);

            if (input.checkValidity()) {
                fieldClassList.remove(classNames.danger);
                fieldClassList.add(classNames.success);
            } else {
                fieldClassList.remove(classNames.success);
                fieldClassList.add(classNames.danger);
            }
        }
    };

    if (forms.length) {
        onFormChange.subscribe((event) => changeFieldInput(event));
    }
}

export default initFormValidations;
