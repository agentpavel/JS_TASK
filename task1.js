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
  
    var current_datetime_txt = v_year+'.'+v_month+"."+v_day+"   " +t_hours+":"+t_minutes;
    const newContent = document.createTextNode(current_datetime_txt+") Здесь должно быть значение a + b");
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv,currentDiv);

}