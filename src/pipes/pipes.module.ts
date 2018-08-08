import { NgModule } from '@angular/core';
import { NumeralPipe } from './numeral/numeral';
@NgModule({
	declarations: [NumeralPipe],
	imports: [],
	exports: [NumeralPipe]
})
export class PipesModule {}
