function birthDayDate() {
    
    var day = parseInt(document.getElementById('birth_day').value);
    var month = parseInt(document.getElementById('birth_month').value);
    var year = parseInt(document.getElementById('birth_year').value);

    var requiredDateError = document.getElementById('required_date');
    var validDateError = document.getElementById('valid_date');
    var requiredMonthError = document.getElementById('required_month');
    var validMonthError = document.getElementById('valid_month');
    var requiredYearError = document.getElementById('required_year');
    var validYearError = document.getElementById('valid_year');

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
    
    var age = currentYear - year;
    var months = currentMonth - month;
    if (months < 0 || (months === 0 && currentDay < day)) {
        age--;
        months += 12;
    }
    var days = currentDay - day;
    if (days < 0) {
        months--;
        var tempDate = new Date(currentYear, currentMonth - 1, 0);
        days += tempDate.getDate();
    }


    // display date
    if(document.getElementById('birth_day').value === ''){
        requiredDateError.classList.add('show');
        document.querySelector('.input-day').classList.add('input-error');
        document.getElementById('days').innerText = '--';
    }else if(document.getElementById('birth_day').value >= 31){
        requiredDateError.classList.remove('show');
        validDateError.classList.add('show');
        document.querySelector('.input-day').classList.add('input-error');
        document.getElementById('days').innerText = '--';
    }else{
        requiredDateError.classList.remove('show');
        validDateError.classList.remove('show');
        document.querySelector('.input-day').classList.remove('input-error');
        document.getElementById('days').innerText = days;
    }



    // display month
    if(document.getElementById('birth_month').value === ''){
        requiredMonthError.classList.add('show');
        document.querySelector('.input-month').classList.add('input-error');
        document.getElementById('months').innerText = '--';
    }else if(document.getElementById('birth_month').value >= 13){
        requiredMonthError.classList.remove('show');
        validMonthError.classList.add('show');
        document.querySelector('.input-month').classList.add('input-error');
        document.getElementById('months').innerText = '--';
    }else{
        requiredMonthError.classList.remove('show');
        validMonthError.classList.remove('show');
        document.querySelector('.input-month').classList.remove('input-error');
        document.getElementById('months').innerText = months;
    }
    


    // display year
    if(document.getElementById('birth_year').value === ''){
        requiredYearError.classList.add('show');
        document.querySelector('.input-year').classList.add('input-error');
        document.getElementById('years').innerText = '--';
    }else if(document.getElementById('birth_year').value >= currentYear){
        requiredYearError.classList.remove('show');
        validYearError.classList.add('show');
        document.querySelector('.input-year').classList.add('input-error');
        document.getElementById('years').innerText = '--';
    }else{
        requiredYearError.classList.remove('show');
        validYearError.classList.remove('show');
        document.querySelector('.input-year').classList.remove('input-error');
        document.getElementById('years').innerText = age;
    }

    //globale
    if((document.getElementById('birth_day').value === '') || (document.getElementById('birth_month').value === '') || (document.getElementById('birth_year').value === '')){
        document.getElementById('days').innerText = '--';
        document.getElementById('months').innerText = '--';
        document.getElementById('years').innerText = '--';
    }else if((document.getElementById('birth_day').value >= 31) || (document.getElementById('birth_month').value >= 13) || (document.getElementById('birth_year').value >= currentYear)){
        document.getElementById('days').innerText = '--';
        document.getElementById('months').innerText = '--';
        document.getElementById('years').innerText = '--';
    }else{
        document.getElementById('days').innerText = days;
        document.getElementById('months').innerText = months;
        document.getElementById('years').innerText = age;
    }

    
    

}
