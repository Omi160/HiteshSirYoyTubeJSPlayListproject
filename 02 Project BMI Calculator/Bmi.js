const form = document.querySelector(`form`);

form.addEventListener(`submit`, function (e) {
    e.preventDefault(); 

    const height = parseInt(document.querySelector(`#height`).value);
    const weight = parseInt(document.querySelector(`#weight`).value);
    const results = document.querySelector(`#results`);

        if (height === `` || height < 1 || isNaN(height)) {
            results.innerHTML = `Please provide correct ${height}`;

        } else if (weight === `` || weight < 1 || isNaN(weight)) {
            results.innerHTML = `Please provide correct ${weight}`;
        }
        else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
        const note = document.querySelector(`#weight-guide`)
        
            if (bmi < 18.6 ){
                note.innerHTML = (`Under`);
            } else if (bmi >= 18.6 && bmi < 24.9){
                note.innerHTML = (`Normal`);
            } else if (bmi > 24.9){
                note.innerHTML = (`Overweight`);
            }
      
}
});