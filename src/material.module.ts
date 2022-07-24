import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
    exports: [
        DragDropModule,
        MatButtonModule,
        MatDialogModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class MaterialModule { }
