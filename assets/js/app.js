// Homework_22   

function IMT() {

    //Ро́берт Пе́ршинг Уо́длоу (2,72м) -самый высокий зарегистрированный человек в истории, согласно Книге рекордов Гиннесса.
    
    let height = +heightInput.value;
    
    //Джон Миннок-был самым тяжёлым человеком в истории медицины (по разным оценкам от 600 до 635кг при росте 185см)
    
    let mass = +massInput.value;
    
    if(height > 2.8) 
    { 
        BMI = Math.round ((mass /((height/100) ** 2)) * 10) / 10 ;
        document.style.color = "red"
    }
    
    else
    {
        BMI = Math.round ((mass /(height ** 2)) * 10) / 10 ;
    }
    
    
    bmi_index.innerHTML = BMI;
    
    if (BMI <= 16.5)
    { 
        meaning.innerHTML = ('Выраженный дефицит массы тела');
    } 
    
    else if (BMI > 16.5 && BMI <= 18.5) 
    {
        meaning.innerHTML = ('Недостаточная масса тела');
    }
    
    else if (BMI > 18.5 && BMI <= 25) 
    {
        meaning.innerHTML = ('Нормальная масса тела');
    }
    
    else if (BMI > 25 && BMI <= 30) 
    {
        meaning.innerHTML = ('Избыточная масса тела');
    }
    
    else if (BMI > 30 && BMI <= 35) 
    {
        meaning.innerHTML = ('Ожирение 1 степени');
    }
    
    else if (BMI > 35 && BMI <= 40) {
        meaning.innerHTML = ('Ожирение 2 степени');
    }
    
    else if (BMI > 40) 
    {
        meaning.innerHTML = ('Ожирение 3 степени');
    }
    
    }
    

    /*
    $('form').get(0).reset()

    $(':input').val(''); */
    