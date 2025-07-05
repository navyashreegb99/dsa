function pattern1(n) {
    for (let i = 0; i < n; i++)//0,1,2,3
    {
        let row = "";
        for (let j = 0; j < n; j++)//0,1,2,3
        {
            row = row + "*";
        }
        console.log(row);
    }
}
pattern1(4);
console.log("-----------------------------------------")

function pattern2(n) {
    for (let i = 0; i < n; i++)//0,1,2,3
    {
        let row = "";
        for (let j = 0; j <= i; j++)//0,1,2,3
        {
            row = row + "*";
        }
        console.log(row);
    }
}

pattern2(10);
console.log("-----------------------------------------")

function pattern3(n) {
    for (let i = 0; i <= n; i++)//0,1,2,3
    {
        let row = "";
        for (let j = 1; j < i + 1; j++)//0,1,2,3
        {
            row = row + j;
        }
        console.log(row);
    }
}

pattern3(4);
console.log("-----------------------------------------")
function pattern4(n) {
    for (let i = 0; i < n; i++)//0,1,2,3
    {
        let row = "";
        for (let j = 0; j < i + 1; j++)//0,1,2,3
        {
            row = row + (i + 1);
        }
        console.log(row);
    }
}

pattern4(5);
console.log("-----------------------------------------")

function pattern5(n) {
    for (let i = 1; i <= n; i++)//0,1,2,3
    {
        let row = "";
        for (let j = 1; j <= (n + 1 - i); j++)//0,1,2,3
        {
            row = row + (j);
        }
        console.log(row);
    }
}

pattern5(5);

console.log("-----------------------------------------")
function pattern6(n) {
    for (let i = 1; i <= n; i++)//0,1,2,3
    {
        let row = "";
        for (let j = 1; j <= (n + 1 - i); j++)//0,1,2,3
        {
            row = row + (j);
        }
        console.log(row);
    }
}

pattern6(5);

console.log("-----------------------------------------")

function pattern7(n) {
    for (let i = 0; i < n; i++)//0,1,2,3
    {
        let row = "";
        for (let j = 0; j < n - i; j++)//0,1,2,3
        {
            row = row + "*";
        }
        console.log(row);
    }
}

pattern7(5)


console.log("-----------------------------------------")

function pattern8(n) {
    for (let i = 0; i < n; i++)//0,1,2,3
    {
        let row = "";
        for (let j = 0; j < n - i - 1; j++)//0,1,2,3
        {
            row = row + " ";
        }
        for (let k = 0; k <= i; k++)//0,1,2,3
        {
            row = row + "*";
        }
        console.log(row);
    }
}

pattern8(5)


console.log("-----------------------------------------")

function pattern9(n) {
    for (let i = 0; i < n; i++)//0,1,2,3
    {
        let row = "";
        for (let j = 0; j <= i; j++)//0,1,2,3
        {
            row += j % 2 === 0 ? "1" : "0";
        }
        console.log(row);
    }
}

pattern9(5)


console.log("-----------------------------------------")

function pattern9logic2(n) {
    for (let i = 0; i < n; i++)//0,1,2,3
    {
        let row = "";
        let toggle = 1;
        for (let j = 0; j <= i; j++)//0,1,2,3
        {
            row = row + toggle;
            if (toggle == 1) toggle = 0;
            else toggle = 1;
        }
        console.log(row);
    }
}

pattern10(5)

console.log("-----------------------------------------")

let toggle = 1;
function pattern10(n) {
    for (let i = 0; i < n; i++)//0,1,2,3
    {
        let row = "";
        for (let j = 0; j <= i; j++)//0,1,2,3
        {
            row = row + toggle;
            if (toggle == 1) toggle = 0;
            else toggle = 1;
        }
        console.log(row);
    }
}

pattern10(5)