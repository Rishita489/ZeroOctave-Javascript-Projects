var cal_btn=document.querySelector('.calculate_btn');
var reset_btn=document.querySelector('.reset_btn');

/*calculation function for BMI Value*/
function BMI(){
    var weight=document.querySelector('#weight').value;
    var height=document.querySelector('#height').value; 
    var converted_height=height/100;
    var new_converted_height=converted_height*converted_height;
    var bmi_value=(weight/new_converted_height);
    return bmi_value=bmi_value.toFixed(2);
    // console.log(bmi_value);
}

/*functionality of calculate button*/
cal_btn.addEventListener("click",()=>{
    var bmi=document.querySelector('.BMI_Result');
    var bmi_value=document.querySelector('.BMI_Value');
    var result=BMI();
    bmi_value.style.display='block';
    bmi.style.display='block';
    bmi_value.innerText="BMI Value is:"+result;
     if(result<18.5){
         bmi.innerText="You are Underweight";
      }
      else if(result>=18.5 && result<=24.9){
        bmi.innerText="You are Normal";
      }
      else if(result>25.0 && result<=29.0){
        bmi.innerText="You are Overheight";
      }  
      else if(result>=30){
        bmi.innerText="You are Obese";
      }
    
    
});

/*Functionality of Reset Button*/
reset_btn.addEventListener("click",()=>{
  var bmi=document.querySelector('.BMI_Result');
  var bmi_value=document.querySelector('.BMI_Value');
  document.querySelector('.weight_class').value='';
  document.querySelector('.height_class').value='';
  bmi_value.style.display='none';
  bmi.style.display='none';
});
