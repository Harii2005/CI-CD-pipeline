import sum from "./sum";

//for 2 +ve numbers
test("adds 2+2 to equal 4" , () => {
    // expect().toBe();
    expect(sum(2,2)).toBe(4);
});

//for 2 -ve numbers
test("adds -3 + -5 to equal -" , () => {
    // expect().toBe();
    expect(sum(-3 , -5)).toBe(-8);
});

//for one +ve and one -ve number
test("adds -5 + 4 to equal 1" , () => {
    // expect().toBe();
    expect(sum(-5,4)).toBe(-1);
});

