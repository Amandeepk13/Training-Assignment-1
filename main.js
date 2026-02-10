const cardHolder = document.getElementById('card-holder');

function displayClasses() {
    const presentClasses = JSON.parse(localStorage.getItem('uClasses')) || [];
    
    presentClasses.forEach(data => {
        const card = `
           <div class="card" data-startDate="${data.startDate}" data-endDate="${data.endDate}">
                    <div class="card-header">
                        <div class="left-header">
                            <input type="checkbox" name="checkbox" id="checkbox-1">
                            <h4>${data.name}</h4>
                        </div>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="card-body">
                        <div class="card-add">
                            <div class="add-box">
                                <div class="add-box-icon">+</div>
                                <div class="add-box-text">Add</div>
                            </div>
                            

                        </div>
                        <div class="course-info">
                            <div class="card-icons">
                                <div class="icon-item data">
                                    <i class="fas fa-chart-bar"></i>
                                    <span>Class Data</span>
                                </div>
                                <div class="icon-item">
                                    <i class="fas fa-tasks"></i>
                                    <span>Assignments</span>
                                </div>
                                <div class="icon-item">
                                    <i class="fas fa-book"></i>
                                    <span>Materials</span>
                                </div>
                            </div>

                        </div>

                    </div>
             </div>
         `;
         cardHolder.insertAdjacentHTML('beforeend', card);
    });
}
displayClasses();

document.addEventListener('DOMContentLoaded', () => {
    const storedUsername = localStorage.getItem('loggedUser');
    const usertypeSelect = document.getElementById('user-type');

    if(storedUsername){
        const welcomeMsg = document.querySelector('.welcome-msg');

        welcomeMsg.textContent = `Hi ${storedUsername}!`;
        
        usertypeSelect.options[0].textContent = storedUsername;
    }

    usertypeSelect.addEventListener('change', (e) => {
         if(e.target.value === 'logout'){
            localStorage.removeItem('loggedUser');
            window.location.href = 'login.html';
         }
    });

});


cardHolder.addEventListener('click',  (e) => {
    const addBtn = e.target.closest('.btn-to-add');

    if(addBtn){
        const parentEle = addBtn.parentElement;
        const newBox = document.createElement('div');
        newBox.classList = 'add-box';
        newBox.innerHTML = `
            <div class="add-box-icon">
               <i class="fas fa-book"></i>
            </div>
            <div class="add-box-text">Course</div>
        `;

        parentEle.insertBefore(newBox, addBtn);
    }
});
