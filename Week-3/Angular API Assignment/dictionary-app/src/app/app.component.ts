import { Component,OnInit  } from '@angular/core';
import { SearchService } from './search.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public key:String;
  public data:String[]=[];
  public mname:String='';
  public audio:String='';
  constructor(private searchService:SearchService,public snackBar: MatSnackBar){}
  ngOnInit(){
    setTimeout(() => {
      document.getElementById("find").focus();
    }, 1000);
  }

  search(){
    
    document.getElementById('displayData').style.display="none";
    document.getElementById('loading').style.display="block";
    this.searchService.search(this.key.toLowerCase()).subscribe((res:any)=>{
      
      //console.log(res.results[0].lexicalEntries[0].lexicalCategory);
      this.audio=res.results[0].lexicalEntries[0].pronunciations[0].audioFile;
      this.data=res.results[0].lexicalEntries;
      this.mname=res.results[0].id;
      document.getElementById('loading').style.display="none";
      document.getElementById('displayData').style.display="block";
      
      // for(let i=0;i<Object.values(res.results[0].lexicalEntries).length;i++){

      //   console.log((i+1)+" == "+res.results[0].lexicalEntries[i].lexicalCategory +" ==\n");
       
      //   for (let j = 0,c=1; j < Object.values(res.results[0].lexicalEntries[i].entries).length; j++) {

      //       for (let k = 0; k < Object.values(res.results[0].lexicalEntries[i].entries[j].senses).length; k++,c++) {
      //           console.log((c)+")"+res.results[0].lexicalEntries[i].entries[j].senses[k].definitions[0]+"\n");
               
      //       }
            
      //   }
      // }     
    },(error)=>{
      document.getElementById('loading').style.display="none";
      console.log(error.status);
      //this.mname="Word not found";
      this.openSnackBar("Word not found", "Error");
    });
    this.key='';
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
