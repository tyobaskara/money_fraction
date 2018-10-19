export const getNumber = string => {
    let value = string;

    return value.replace(/^[0]+|[a-zA-Z.\s]/gm , '').replace(',','.');
}

export const getFraction = value => {
    var currencyFraction = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50];
    var value = value;

    var index= 0;
    var stack = [];
    do {
        if(currencyFraction[index] && value - currencyFraction[index] < 0){
            index++
        } else {
            value = value - currencyFraction[index];

            stack.push(currencyFraction[index]);
        }
    }
    while(currencyFraction[index]);

    return stack;
}

export const getCountFraction = stack => {
    var countFraction = 1;
    var fraction = 0;
    var result = [];

    if(stack.length > 1) {
        for(var i = 0; i<stack.length; i++){
            if(stack[i+1] && stack[i] == stack[i+1]) {
                fraction = stack[i];
                countFraction++;
            } else {
                result.push({
                    count: countFraction,
                    value: stack[i]
                });
                countFraction = 1;
            }
        }
    } else {
        result.push({
            count: 1,
            value: stack[0]
        });
    }


    return result;
}