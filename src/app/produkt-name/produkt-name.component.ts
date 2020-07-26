import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogServiceService } from '../catalog-service.service';

@Component({
  selector: 'app-produkt-name',
  templateUrl: './produkt-name.component.html',
  styleUrls: ['./produkt-name.component.scss']
})
export class ProduktNameComponent implements OnInit {
  id: any;
  product: any;

  constructor(private ActivatedRoute: ActivatedRoute,
              private CatalogService: CatalogServiceService) { }

  ngOnInit(): void {
    this.id = +this.ActivatedRoute.snapshot.paramMap.get("id");
    this.product = this.CatalogService.getProducts().filter(elem => elem.id === this.id);
    this.product = this.product[0];
    // console.log(this.product)
  }


}
