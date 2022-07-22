import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DownloadInformeComponent } from '../download-informe.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-observaciones',
  templateUrl: './dialog-observaciones.component.html',
  styleUrls: ['./dialog-observaciones.component.css']
})
export class DialogObservacionesComponent implements OnInit {

  

  dataForm: FormGroup = this.fb.group({
    observacionEvaluador1: [this.data.observacionEvaluador1,[]],
    observacionEvaluador2: [this.data.observacionEvaluador2,[]],
  })

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DownloadInformeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }
  ngOnInit(): void {
    console.log(this.data)
  }

  

  guardar(): void{
    this.dialogRef.close(this.dataForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
