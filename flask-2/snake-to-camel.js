function snakeToCamel(variableName) {
    return variableName.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  }
  