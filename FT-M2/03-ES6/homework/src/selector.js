var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  //! classlist, classname, tagname y id
  if (selector.charAt(0)==="#") {
    return "id";
  } else if (selector.charAt(0)===".") {
    return "class";
  } else if (selector.indexOf('.') !== -1) {
    return "tag.class";
  } else if (selector.charAt(0) !== "#" && selector.charAt(0) !== ".") {
    return "tag";
  }
};




// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  if (selectorType === "id") { 
    return function(){
      return true;
    }
  } else if (0) {
    
  } else if (selectorType === "class") {
    return function(){
      console.log("class");
      return true;
    }
  } else if (selectorType === "tag.class") {
    return function(){
      return true;
    }
  } else if (selectorType === "tag") {
    return function(){
      return true;
    }
  }
};

console.log(matchFunctionMaker("#price")());

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

console.log();
