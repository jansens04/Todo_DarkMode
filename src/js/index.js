window.addEventListener('load', (e) => {
  const form = document.querySelector('#form_input');
  const txtDays = document.querySelector('#txt_days');
  const txtText = document.querySelector('#txt_text');
  const list_todo = document.querySelector('#list_todo');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskDays = txtDays.value;
    const taskText = txtText.value;

    const list_wrap = document.createElement('div');
    list_wrap.classList.add('list_wrap');

    const list_days = document.createElement('div');
    const list_days_h3 = document.createElement('h3');
    list_days_h3.classList.add('list_days_h3');
    list_days_h3.innerHTML = `${taskDays}`;

    list_days.appendChild(list_days_h3);

    const inputs_todo = document.createElement('input');
    inputs_todo.type = 'text';
    inputs_todo.classList.add('inputs_todo');
    inputs_todo.value = `${taskText}`;

    const icons_todo = document.createElement('div');
    icons_todo.classList.add('icons_todo');

    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit');
    buttonEdit.innerHTML = 'Edit';

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete');
    buttonDelete.innerHTML = 'Delete';

    icons_todo.appendChild(buttonEdit);
    icons_todo.appendChild(buttonDelete);

    list_wrap.appendChild(list_days);
    list_wrap.appendChild(inputs_todo);
    list_wrap.appendChild(icons_todo);

    list_todo.appendChild(list_wrap);

    txtDays.value = '';
    txtText.value = '';

    buttonDelete.addEventListener('click', (e) => {
      e.preventDefault();
      list_todo.removeChild(list_wrap);
    });

    buttonEdit.addEventListener('click', (e) => {
      if (buttonEdit.innerText == 'Edit') {
        buttonEdit.innerHTML = 'Save';
        // inputs_todo.removeAttribute('readonly');
      } else {
        buttonEdit.innerHTML = 'Edit';
        buttonDelete.setAttribute('readonly', 'readonly');
      }
    });
  });

  // DarkMode
  const darkMode = document.querySelector('.icons_darkMode .darkMode');
  const lightMode = document.querySelector('.icons_darkMode .lightMode');
  const container = document.querySelector('.container');
  darkMode.addEventListener('click', (e) => {
    container.classList.toggle('darks');
    lightMode.style.display = 'inline-block';
    darkMode.style.display = 'none';
  });

  lightMode.addEventListener('click', (e) => {
    container.classList.toggle('darks');
    lightMode.style.display = 'none';
    darkMode.style.display = 'inline-block';
  });
});
