/**
 * wird aufgerufen wenn Seite geladen ist
 */
window.addEventListener("load", function(event) {
    console.log('seite fertig geladen');

    this.document.getElementById('btn-step-1').click()
})

/**
 * Wechseln des Farb-Schemas => über JavaScript eine CSS-Datei im Dokument einbinden
 * 
 * @param {*} cssFileName Dateiname der Css-Datei
 */
function changeColor(cssFileName) {
    console.log(`changeColor : ${cssFileName}`);
    loadFile(`./color-schemes/${cssFileName}.css`, 'css')
}

/**
 * von hier kopiert: https://www.seancdavis.com/posts/dynamically-add-javascript-and-css-files-to-your-website-using-javascript/
 * 
 * @param {*} path 
 * @param {*} type 
 */
function loadFile(path, type) {
    if (type == "js") {
      var fileref = document.createElement("script");
      fileref.setAttribute("type", "text/javascript");
      fileref.setAttribute("src", path);
    } else if (type == "css") {
      var fileref = document.createElement("link");
      fileref.setAttribute("rel", "stylesheet");
      fileref.setAttribute("type", "text/css");
      fileref.setAttribute("href", path);
    }
    document.getElementsByTagName("head")[0].appendChild(fileref);
  }