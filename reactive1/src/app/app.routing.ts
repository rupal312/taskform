import { Routes, RouterModule } from "@angular/router";
import { FormtaskComponent } from "./formtask/formtask.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { ShowdataComponent } from "./formtask/showdata/showdata.component";
import { EditdataComponent } from "./formtask/editdata/editdata.component";
const arr : Routes=[

{path:'', component: FormtaskComponent },
{path:'showdata', component: ShowdataComponent },
{path:'editdata', component: EditdataComponent },
{path :'pagenotfound',component: PagenotfoundComponent},


{path:'**',redirectTo: 'pagenotfound' },

];
export const arrRouting = RouterModule.forRoot(arr);
