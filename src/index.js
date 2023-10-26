import m from "mithril";

m.render(document.body, "hello world");

/**
 *
 * @param {string} message just a string
 */
function helloWorld (message) {
    console.log(message);
}

helloWorld("Hello World");