function alertMsg() {
    document.getElementById("id1").innerHTML = "загрузите проект из github и выполните первое задание. Задание №1  https://github.com/agentpavel/JS_TASK.git";
    //document.body.appendChild(document.createTextNode(produceMessage()));
};

function addMsg() {
    var current_datetime = new Date();
    const newDiv = document.createElement("div");
    
    var v_year = current_datetime.getFullYear(); //2019
    var v_month = current_datetime.getMonth(); // 10
    var v_day = current_datetime.getDate(); // 11
    var t_hours = current_datetime.getHours(); // 10
    var t_minutes = current_datetime.getMinutes(); // 0
    let a=10;
    let b=20;
    let c=a+b;
  
    var current_datetime_txt = v_year+'.'+v_month+"."+v_day+"   " +t_hours+":"+t_minutes;
    const newContent = document.createTextNode(current_datetime_txt + " " + "Cумма чисел 10 и 20 =" + " " + c);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv,currentDiv);

}

function showArray() {
    
    let bookIdiot = {     // объект
        name: "Idiot",  // под ключом "name" хранится значение "John"
        author: "Dostoevskii Fedor",        // под ключом "age" хранится значение 30
        year: 1920
      };
      let bookWarAndPeace = {     // объект
        name: "War and Peace ",  // под ключом "name" хранится значение "John"
        author: "Tolstoi Lion",        // под ключом "age" хранится значение 30
        year: 1945
      };
      let arrayBooks=[bookIdiot, bookWarAndPeace, "Отцы и дети", "Гранатовый браслет", "Горе от ума", "Тарас Бульба", "Анна Каренина", "Гордость и предубеждение", "Преступление и наказание", "Герой нашего времени"]
    for (let i = 0; i < arrayBooks.length; i++) {
        const newDiv = document.createElement("div");
        if (i<2) {
            const newContent = document.createTextNode(i+1+") Массив книг "+ arrayBooks[i].author+ "-" +arrayBooks[i].name);
            newDiv.appendChild(newContent);
            const currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv,currentDiv);
        } 
        else {
            const newContent = document.createTextNode(i+1+") Массив книг "+ arrayBooks[i]);
            newDiv.appendChild(newContent);
            const currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv,currentDiv);
        }
        

        
    }
}

function showTenTimes() {
    document.getElementById("buttonLi").innerHTML = "Бла-бла";
    // for (let i = 0; i < 10; i++) {
    //     showArray();    
    // }
    
    
}


