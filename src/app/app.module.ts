import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    ExpenseListComponent,
    
],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe
],  
})
export class AppModule {}  // or ExpenseFormModule {}
