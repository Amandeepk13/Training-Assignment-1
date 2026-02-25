const classForm = document.querySelector('.class-form');

classForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const className = document.getElementById('form-class-title').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    const newClass = {
        name: className,
        startDate: startDate,
        endDate: endDate

    };
    const classes = JSON.parse(localStorage.getItem('uClasses')) || [];

    classes.push(newClass);

    localStorage.setItem('uClasses', JSON.stringify(classes));

    window.location.href = '../main.html';
});