const {sum,difference,multiply,divide} = require('./Calculator.js')

test ("test sum", () => {
    expect(sum(1,2)).toBe(3)
}
);

test ("test difference", () => {
    expect(difference(5,1)).toBe(4)
}
);

test ("test multiply", () => {
    expect(multiply(1.5,2)).toBe(3)
}
);

test ("test divide case1", () => {
    expect(divide(7,3.5)).toBe(2)
}
);

// test ("test divide case2", () => {
//     expect(divide(7,0)).toBe('infinite')
// }
// );


