
let id="";

//localStorage.clear();
selectData();

function saveData(){
    document.getElementById('msg').innerHTML = "" ;
       let name = document.getElementById('name').value;
       if(name == ''){
        document.getElementById('msg').innerHTML = 'please enter your name';
       }
       else{
        if(id == ''){
            let  arr = JSON.parse(localStorage.getItem('crud'));
            if( arr == null){
                let data= [name] ;
                localStorage.setItem('crud',JSON.stringify(data));
            }
            else{
                arr.push(name);
                
                localStorage.setItem('crud',JSON.stringify(data));
            }
            document.getElementById('name').value = '';
            document.getElementById('msg').innerHTML = 'data added';
        }
        else{

        }
        selectData();
       }
      
}

function deleteData(){
    let  arr = JSON.parse(localStorage.getItem('crud'));
    if(arr !==null){
        let html ='';
        let sno =1;
        for(let k in arr){
            
            html= html+`<tr><td>${sno}</td><td>${arr[k]}</td><td><a href="javascript:void(0)" onclick=" deleteData(${k})">Delete</a</td></tr>`; 
            sno++;
        }
        document.getElementById('root').innerHTML = html ;

    }

}

function selectData(){

}

function editData(){

}