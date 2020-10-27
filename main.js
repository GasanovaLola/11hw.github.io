// 1
/*var obj = { 
    x:10, 
    y: 20,
    renderObject() {
        renderObject();
    }
};

function renderObject() {
    for (var key in this.obj) {
        if (key == 'renderObject') {
            break;
        }
        
        document.write(key + ": " + obj[key] + "<br>");
    }
}

obj.renderObject();*/

// 2

/*var mass = [1, 2, 3, 6];

var obj = {
    elem: 0,
    m1() {
        ++this.elem;
        return this;
    },
    m2() {
        --this.elem;
        return this;
    },
    m3() {
        console.log(this.elem);
        return this;
    }
}

obj.m1().m2().m3();
obj.m2().m1().m3();
obj.m2().m1().m3().m1().m1();*/

// 3

/*data = {
    addRecord: function(o) {
        for (let i = 0, size = arguments.length; i < size; i++) {
            for (var key in arguments[i]) {
                this[key] = arguments[i][key];
            }
        }
    },
    p: 600,
    str: 'hello',
    y: -50
}

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});

console.log(data.x); // 50
console.log(data.y); // 20
console.log(data.z); // 30
console.log(data.p); // 600
console.log(data.str); // 'hello'*/

// 4

data = {
    addRecord: function(o) {
        for (let i = 0, size = arguments.length; i < size; i++) {
            for (var key in arguments[i]) {
                if (arguments[size - 1] == true) {
                    if (this[key] === undefined) {
                        data[key] = arguments[i][key];
                    }
                }
                else {
                    data[key] = arguments[i][key];
                }
            }
        }
    },
    p: 600,
    str: 'hello',
    y: -50
}

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, true);

console.log(data.x); // 50
console.log(data.y); // 20
console.log(data.z); // 30
console.log(data.p); // 600
console.log(data.str); // 'hello'
