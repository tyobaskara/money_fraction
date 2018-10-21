const currencyFormat  = string => {;
    return string.match( /^(([a-zA-Z][\d])|([a-zA-Z]+[\s]{0,1}[\d])|(([\d]{1,3})*[.]*[\d]{3}))*[,\d]{0,3}$/gm);
}

export { currencyFormat };