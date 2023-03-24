import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchvar : undefined|any
  constructor(private actroute:ActivatedRoute, private prodserv:ProductService){}
  ngOnInit(): void {
    let val = this.actroute.snapshot.paramMap.get('query')
    console.warn(val)
    this.prodserv.searchProducts(val).subscribe((result)=>{
      if(result){
        this.searchvar=result
 
      }
    })
  }
   
  

}
