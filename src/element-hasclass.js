/**
 * @description check if element(s) has class - support pre `classList`
 * @param {Element|Element[]} elem
 * @param {String} className
 * @returns {Boolean}
 */
export default function hasClass(elem, className) {
    if (elem && typeof elem.length === 'number') {
        for (let i = 0, l = elem.length; i < l; i += 1) {
            if (hasClass(elem[i], className)) {
                return true;
            }
        }
        return false;
    }

    // make sure first argument is an element
    if (!elem || !elem.nodeType) {
        return false;
    }

    const cur = (elem.getAttribute && elem.getAttribute('class')) || '';
    return ` ${cur} `.indexOf(` ${className} `) > -1;
}
