type domElement = HTMLElement | null;

export const select = (queryString: string): domElement => {
    return document.querySelector(queryString);
};

export const selectAll = (queryString: string): NodeListOf<HTMLElement> => {
    return document.querySelectorAll(queryString);
};

export const classList = (element: HTMLElement): DOMTokenList => {
    return element.classList;
};

export const addClass = (element: HTMLElement) => (className: string): void => {
    return classList(element).add(className);
};

export const removeClass = (element: HTMLElement) => {
    return (className: string): void => classList(element).remove(className);
};

export const toggleClass = (element: HTMLElement) => {
    return (className: string): boolean => classList(element).toggle(className);
};

export const dataset = (element: HTMLElement): DOMStringMap => element.dataset;

export default {
    select,
    selectAll,
    classList,
    addClass,
    removeClass,
    toggleClass,
    dataset,
};
