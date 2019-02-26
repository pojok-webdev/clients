replace this
<ion-item [routerDirection]="'root'" [routerLink]="[client.name]">
with
<ion-item>


        <ion-button [color]="getButtonColor(client.clientcategory,1)" (click)="updateCategory(client.id,'1',$event)">
          FFR
        </ion-button>
        <ion-button [color]="getButtonColor(client.clientcategory,2)" (click)="updateCategory(client.id,'2',$event)">
          Platinum
        </ion-button>
        <ion-button [color]="getButtonColor(client.clientcategory,3)" (click)="updateCategory(client.id,'3',$event)">
          Gold
        </ion-button>
        <ion-button [color]="getButtonColor(client.clientcategory,4)" (click)="updateCategory(client.id,'4',$event)">
          Silver
        </ion-button>
        <ion-button [color]="getButtonColor(client.clientcategory,5)" (click)="updateCategory(client.id,'5',$event)">
          Bronze
        </ion-button>
