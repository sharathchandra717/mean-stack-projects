"use strict";
var Display = /** @class */ (function () {
    function Display() {
        var _this = this;
        this.table = document.getElementById("main");
        this.tbody = document.getElementById("tab");
        this.btn = document.getElementById("add");
        this.btn.addEventListener("click", function (e) { return _this.insert(); });
    }
    Display.prototype.create = function (data) {
        var thead = ["Roll No", "Name", "Section"];
        var tr = document.createElement('TR');
        this.tbody.appendChild(tr);
        for (var _i = 0, thead_1 = thead; _i < thead_1.length; _i++) {
            var head = thead_1[_i];
            var th = document.createElement('TH');
            th.appendChild(document.createTextNode(head));
            tr.appendChild(th);
        }
        for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
            var pupil = data_1[_a];
            var tr = document.createElement('TR');
            var td1 = document.createElement('TD');
            var td2 = document.createElement('TD');
            var td3 = document.createElement('TD');
            td1.appendChild(document.createTextNode(pupil.rno.toString()));
            td2.appendChild(document.createTextNode(pupil.name.toString()));
            td3.appendChild(document.createTextNode(pupil.sec.toString()));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            this.tbody.appendChild(tr);
        }
        this.table.appendChild(this.tbody);
    };
    Display.prototype.insert = function () {
        if ((document.getElementById("rno").value).length > 0 && (document.getElementById("name").value).length > 0 && (document.getElementById("sec").value).length > 0) {
            var tr = document.createElement('TR');
            var td1 = document.createElement('TD');
            var td2 = document.createElement('TD');
            var td3 = document.createElement('TD');
            td1.appendChild(document.createTextNode((document.getElementById("rno").value).toString()));
            td2.appendChild(document.createTextNode((document.getElementById("name").value).toString()));
            td3.appendChild(document.createTextNode((document.getElementById("sec").value).toString()));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            this.tbody.appendChild(tr);
            this.table.appendChild(this.tbody);
            document.getElementById("rno").value = "";
            document.getElementById("name").value = "";
            document.getElementById("sec").value = "";
        }
        else {
            alert("Enter details");
        }
    };
    return Display;
}());
var students = [{ rno: 15, name: "Sharath", sec: "A" },
    { rno: 17, name: "Sravan", sec: "A" },
    { rno: 8, name: "Srikanth", sec: "A" },];
var foo = new Display();
foo.create(students);
