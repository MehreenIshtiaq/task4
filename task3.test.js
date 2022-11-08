const {power, round, ceiling} = require('./task3.js');

test ("testing power", () => {
    expect(power(3, 2)).toBe(9);
}
);

// test ("testing power case2", () => {
//     expect(power(3, 2)).toBe(10);
// }
// );

test ("testing round", () => {
    expect(round(4.8)).toBe(5);
}
);

// test ("testing round case2", () => {
//     expect(round(4.8)).toBe(6);
// }
// );

test ("testing ceiling", () => {
    expect(ceiling(4.5)).toBe(5);
}
);

// test ("testing ceiling case2", () => {
//     expect(ceiling(4.5)).toBe(4);
// }
// );