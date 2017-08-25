# dostudy
do some study! 

```javascript
let arr = [1,2,3,4,5,6,7,8,9];
const ops = ['', '+', '-'];

function prt_all_cases() {
    let ops_len = arr.length - 1;
    let ops_kind = ops.length;
    let cases = Math.pow(ops_kind, ops_len);
    for (var i = 0; i < cases; i++) {
        let ops_state = get_ops_state(i, ops_len);
        console.log(calc_result(ops_state));
    }
}

function get_ops_state(num, ops_len) {
    let rtn = [];
    let ternary = num.toString(3);
    for (var i = 0; i < ternary.length; i++) {
        let n = Number(ternary[i]);
        rtn.push(n);
    }
    for (var i = 0; i < ops_len - ternary.length; i++) {
        rtn.unshift(0);
    }
    return rtn;
}

function calc_result(ops_state) {
    let sum = 0;
    let left = arr[0];
    let str_out = null;
    let o = '+';
    function resolve() {
        sum = o == '+' ? sum + left : sum - left;
        str_out = str_out == null ? left.toString() : str_out + o + left;
    }
    for (var i = 0; i < ops_state.length; i++) {
        let t_o = ops[ops_state[i]];
        if (t_o == '') {
            left = left * 10 + arr[i + 1];                
        }
        else {
            resolve();
            left = arr[i + 1];
            o = t_o;
        }
    }
    resolve();
    return str_out + '=' + sum;
}

prt_all_cases();
```
