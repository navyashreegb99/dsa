// print n to 1 using recursion

function fun(num) {
    if (num === 0) return;
    console.log(num)
    num = num - 1;
    fun(num);
}

fun(1000);

//print 1 to n using recursion

function fun1(num, i = 1) {
    if (i === num) return;
    console.log(i)
    i = i + 1;
    fun1(num, i);
}


fun1(10);