import { Component, OnInit, Inject } from '@angular/core';
import { ApiproductsService } from 'src/app/services/apiproducts.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  term: any;
  public productList:any;
  constructor(private api: ApiproductsService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(res=>{
      this.productList =res;
    })

    
  }

  

}
