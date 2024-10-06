function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
  
  
    errorDiv.style.display = 'none';
    resultDiv.innerHTML = '';
  

    if (!day || !month || !year) {
      errorDiv.innerHTML = "Please fill in all fields.";
      errorDiv.style.display = 'block';
      return;
    }
  
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
      errorDiv.innerHTML = "Please enter a valid date.";
      errorDiv.style.display = 'block';
      return;
    }
  
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 
    const currentDay = currentDate.getDate();

    let age = currentYear - year;
  
  
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
      age--;
    }
  
 
    resultDiv.innerHTML = `You are ${age} years old.`;
    resultDiv.style.color = '#28a745';
  }
  
