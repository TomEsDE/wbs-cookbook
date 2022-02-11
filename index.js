/**
 * wird aufgerufen wenn Seite geladen ist
 */
window.addEventListener("load", function(event) {
    console.log('seite fertig geladen');

    // accordion step-1 'clicken'
    // this.document.getElementById('btn-step-1').click()
    // mit jquery
    $('#btn-step-1').click()
    
    // cookie auslesen und ausgewaehltes Farbschema anwenden
    if(Cookies.get("colors")) changeColor(Cookies.get("colors")); 
})

/**
 * Wechseln des Farb-Schemas => über JavaScript eine CSS-Datei im Dokument einbinden
 * 
 * @param {*} cssFileName Dateiname der Css-Datei
 */
function changeColor(cssFileName) {
    console.log(`changeColor : ${cssFileName}`);

    loadFile(`./color-schemes/${cssFileName}.css`, 'css')
    
    // merken im Cookie
    Cookies.set("colors", cssFileName); 
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

  /**
   * Alert bei Click auf Login
   * @param 
   * @output 
   */

   const login = document.querySelector("#loginAlert");
console.log(login);

   login.addEventListener("click", function (event)
   {
     alert('A balanced diet is a cookie in each hand.');
   }
   )

   const greating = () => {
    alert('A balanced diet is a cookie in each hand.');
   }