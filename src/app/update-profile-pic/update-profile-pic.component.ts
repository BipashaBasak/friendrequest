import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { BackendService } from '../services/backend.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-update-profile-pic',
  templateUrl: './update-profile-pic.component.html',
  styleUrls: ['./update-profile-pic.component.scss']
})
export class UpdateProfilePicComponent implements OnInit {

  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;  
  title = 'Excel';  
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');  
  }  
  team: any = [{  
    Sno: 1,  
    Team: 'India',  
    Match: 8,  
    Win: 7,  
    Loss: 0,  
    Cancel: 1,  
    Point: 15  
  
  }, {  
    Sno: 2,  
    Team: 'NewZeland',  
    Match: 8,  
    Win: 6,  
    Loss: 1,  
    Cancel: 1,  
    Point: 13  
  
  },  
  {  
    Sno: '3',  
    Team: 'Aus',  
    Match: 8,  
    Win: 6,  
    Loss: 1,  
    Cancel: 1,  
    Point: 13  
  
  },  
  {  
    Sno: '4',  
    Team: 'England',  
    Match: 8,  
    Win: 5,  
    Loss: 2,  
    Cancel: 1,  
    Point: 11  
  },  
  {  
    Sno: '5',  
    Team: 'S.Africa',  
    Match: 8,  
    Win: 4,  
    Loss: 3,  
    Cancel: 1,  
    Point: 9  
  },  
  {  
    Sno: '6',  
    Team: 'Pak',  
    Match: 8,  
    Win: 4,  
    Loss: 4,  
    Cancel: 1,  
    Point: 9  
  
  },  
  {  
    Sno: '7',  
    Team: 'SriLanka',  
    Match: 8,  
    Win: 3,  
    Loss: 3,  
    Cancel: 2,  
    Point: 8  
  
  },  
  {  
    Sno: '8',  
    Team: 'Bdesh',  
    Match: 8,  
    Win: 2,  
    Loss: 4,  
    Cancel: 2,  
    Point: 6  
  
  }  
  ];  

  imageSrc: any;
  uploadForm!: FormGroup;

  productForm!: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private backendService: BackendService,
    private authService: AuthService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      profile: [''],
    });

    this.productForm = this.fb.group({  
      name: '',  
      quantities: this.fb.array([]) ,  
    });  

  }

  onFileSelect(event) {
    // console.log(event)

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile')?.setValue(file);
    }

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        return this.imageSrc = reader.result;
      }

      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    const formData = new FormData;
    formData.append('sendimage', this.uploadForm.get('profile')?.value);
    //  console.log(formData);

    this.backendService.imageUpload(formData).subscribe((data: any) => {
      // this.posts = data.data;
      // console.log(this.posts);
    }, err => {
      console.log(err)
    });

  }


  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      qty: '',  
      price: '',  
    })  
  }  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  

  onSubmit1() {  
    console.log(this.productForm.value);  
  }  


}
