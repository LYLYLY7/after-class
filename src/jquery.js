window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    return {
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)

            }
            return this
        },
        find(selector) {

            let array = []
            for (let i = 0; i < elements.length; i++) {
                const elements2 = elements[i].querySelectorAll(selector)
                const elements3 = Array.from(elements2)
                array = array.concat(elements3)
            }
            return jQuery(array)
        }
    }
}