interface Data{
    rno:Number,
    name:String,
    sec:String
}
class Display{
    table: HTMLTableElement = <HTMLTableElement> document.getElementById("main");
    tbody: HTMLTableElement = <HTMLTableElement> document.getElementById("tab");
    btn:HTMLButtonElement = <HTMLButtonElement>document.getElementById("add");
    constructor(){
        this.btn.addEventListener("click", (e:Event) => this.insert());
    }
    create(data:Array<Data>){
        var thead:string[]=["Roll No","Name","Section"];
        var tr = document.createElement('TR');
        this.tbody.appendChild(tr);
        for (var head of thead) {
            var th = document.createElement('TH')
            th.appendChild(document.createTextNode(head));
            tr.appendChild(th);
        }
        for (var pupil of data) {
            var tr = document.createElement('TR');
            
                let td1 = document.createElement('TD');
                let td2 = document.createElement('TD');
                let td3 = document.createElement('TD');
                td1.appendChild(document.createTextNode(pupil.rno.toString()));
                td2.appendChild(document.createTextNode(pupil.name.toString()));
                td3.appendChild(document.createTextNode(pupil.sec.toString()));
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
          
            this.tbody.appendChild(tr);
        }
        this.table.appendChild(this.tbody);
        
    }
    
    insert() {
        if(((<HTMLInputElement>document.getElementById("rno")).value).length>0 && ((<HTMLInputElement>document.getElementById("name")).value).length>0 && ((<HTMLInputElement>document.getElementById("sec")).value).length>0){
            var tr = document.createElement('TR');
            let td1 = document.createElement('TD');
            let td2 = document.createElement('TD');
            let td3 = document.createElement('TD');
            td1.appendChild(document.createTextNode(((<HTMLInputElement>document.getElementById("rno")).value).toString()));
            td2.appendChild(document.createTextNode(((<HTMLInputElement>document.getElementById("name")).value).toString()));
            td3.appendChild(document.createTextNode(((<HTMLInputElement>document.getElementById("sec")).value).toString()));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            this.tbody.appendChild(tr);
            this.table.appendChild(this.tbody);
            (<HTMLInputElement>document.getElementById("rno")).value="";
            (<HTMLInputElement>document.getElementById("name")).value="";
            (<HTMLInputElement>document.getElementById("sec")).value="";
        }
        else{
            alert("Enter details");
        }
    }
}
var students:Data[] =[  {rno:15,name:"Sharath",sec:"A"},
                        {rno:17,name:"Sravan",sec:"A"},
                        {rno:8,name:"Srikanth",sec:"A"}, ];

var foo = new Display();
foo.create(students);
