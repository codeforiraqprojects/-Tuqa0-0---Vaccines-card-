import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { Data } from '../model/data';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  

 private user : firebase.User
private babycard = this.db.list<Data>('card')
private bcard = this.db.list<Data>('bbcard')



  constructor(public db:AngularFireDatabase,public afAuth:AngularFireAuth,private router: Router) { 
  
   afAuth.authState.subscribe(user => {
      this.user = user
    })

  
    

  }


   signInWithEmail(credentials: { email: any; password: any; }){
    console.log('sign in with email')
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }


  signUpWithEmail(credentials: { email: any; password: any; }){
    console.log('register   with email')
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }
  
  babyList()
  {
    return this.babycard
  }

   addbaby(data:Data){
    return this.babycard.push(data)

  }

   deletecard(data){
    return this.babycard.remove(data )
  }




  chick(data)
  {

  if(data.age == null || data.age == " "){

    console.log('null')
    this.router.navigateByUrl('tabs/tab1')
  } 
  else{
    console.log('nut null')
  }
 
  }
  
  
  
  vacsDataList = { 
    vacs:[ 
        { 
          "vac":" لقاح بي سي جي(بعد اسبوع من الولادة)/لقاح التهاب الكبد الفايروسي نمط ب  *الجرعة الاولى/لقاح شلل الاطفال الفموي (بعد اسبوع من الولادة) *جرعة الصفر", 
          "numOfVac":"خلال الاسبوع الاول بعد الولادة", 
          "addWhat":1, 
          "addAmount":7 
        }, 
        { 
          "vac":"لقاح شلل الاطفال الفموي *الجرعة الاولى/للقاح الفايروسي الدوار *الجرعة الاولى/اللقاح السداسي الاخلوي *الجرعة الاولى/لقاح المكورات الرئوية المتقرن *الجرعة الاولى", 
          "numOfVac":"عمر شهرين", 
          "addWhat":1, 
          "addAmount":60 
        }, 
        { 
          "vac":"لقاح شلل الاطفال الفموي *الجرعة الثانية/اللقاح الفايروسي الدوار *الجرعة الثانية/اللقاح السداسي الاخلوي *الجرعة الثانية/لقاح المكورات الرئوية المتقرن *الجرعة الثانية", 
          "numOfVac":"عمر اربعة اشهر", 
          "addWhat":1, 
          "addAmount":120 
        }, 
        { 
          "vac":"لقاح شلل الاطفال الفموي *الجرعة الثالثة/اللقاح الفايروسي الدوار *الجرعة الثالثة/اللقاح السداسي الاخلوي *الجرعة الثالثة/لقاح المكورات الرئوية المتقرن *الجرعة الثالثة", 
          "numOfVac":"عمر ستة اشهر", 
          "addWhat":1, 
          "addAmount":181 
        }, 
        { 
          "vac":"  فيتامين A مئة وحدة عالمية /لقاح الحصبة المنفردة   ", 
          "numOfVac":"عمر تسعة اشهر", 
          "addWhat":1, 
          "addAmount":243 
        }, 
        { 
          "vac":"لقاح الحصبة المختلطة", 
          "numOfVac":"عمر خمسة عشر شهرا", 
          "addWhat":2, 
          "addAmount":15 
        }, 
        { 
          "vac":"لقاح شلل الاطفال الفموي *الجرعة المنشطة الاولى/اللقاح الخماسي الاخلوي *الجرعة المنشطة الاولى/فيتامين A مائتين الف وحدة عالمية", 
          "numOfVac":"عمر ثمانية عشر شهرا", 
          "addWhat":2, 
          "addAmount":17 
        }, 
        { 
          "vac":"لقاح شلل الاطفال الفموي *الجرعة المنشطة الثانية/اللقاح الرباعي الاخلوي *الجرعة المنشطة الثانية/لقاح الحصبة المختلطة MMR *الجرعة المنشطة الثانية/فيتامين A مائتين الف وحدة عالمية", 
          "numOfVac":"عمر اربعة - ستة سنوات", 
          "addWhat":1, 
          "addAmount":1461 
        }
      ] 
    };


  

 
  
  vacsData = this.vacsDataList;



//adding certain amount of days to any date
  countResult(dateForCount: Date, days: number){
  let dateRes = dateForCount;
  dateRes.setDate(dateForCount.getDate() + days);
  return dateRes;
}

//adding certain amount of month to any date
 countResultByMonth(dateForCount: Date, months: number){
  let dateRes1 = dateForCount;
  dateRes1.setMonth(dateForCount.getMonth() + months);
  return dateRes1;
}

 options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
 // weekday: 'short',
};

 


  co(data:Data){
 

    if(data.age == ''){

      console.log('null')
      this.router.navigateByUrl('tabs/tab1')
    } 
    else {
      console.log('not null')
    
    

  //creating rows with vaccines
  let DateOfVac = new Date(data.age);

  let countOfRows =this. vacsData.vacs.length;
  //console.log(countOfRows);
  for (var i = 0; i< countOfRows;i++){
    

  DateOfVac = new Date(data.age); //تاريخ الولادة
  // console.log(DateOfVac);
let v1 =this. vacsData.vacs[i].vac;//اللقاحات
//console.log( data.vacc);
let n1 =this. vacsData.vacs[i].numOfVac;//عمر التلقيح
// console.log(  data.numOfVacc);


  let amountt = this.vacsData.vacs[i].addAmount;
   if ((+(this.vacsData.vacs[i].addWhat)) === 1){
     DateOfVac =this. countResult(new Date(data.age), amountt);
    
   }
 
   else if ((+(this.vacsData.vacs[i].addWhat)) === 2){
     DateOfVac =this. countResultByMonth(new Date(data.age),  amountt);
   }
   else{
       console.log("بيانات خاطئة في الجدول الأولي مع اللقاحات");
       //return false;
   }
   let date= DateOfVac.toLocaleString("ru", this.options);
  
  //console.log (v1+"---"+n1+"---"+ DateOfVac);
  
  
   console.log(date)

switch(i)
{
  case i=0:
    data.d1=date;
    break;
  case i=1:
    data.d2=date;
    break;
    case i=2:
        data.d3=date;
        break;
    case i=3:
        data.d4=date;
        break; 
        case i=4:
            data.d5=date;
            break;
          case i=5:
            data.d6=date;
            break; 
            case i=6:
                data.d7=date;
                break;
              case i=7:
                data.d8=date;
                break;

}

}



    return  this.babycard.push(data);
}
}
  
}

    

  

    
    
    
 

 

 


  
