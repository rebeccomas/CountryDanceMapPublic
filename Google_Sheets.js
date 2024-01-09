const scriptURL = 'https://script.google.com/macros/s/AKfycbxENEjcwVg_cS0qvBsLTxG2hptBn7jt_Cq5VpS1seyA9HZLaB1Kt22nsRZ7xuUV8efF/exec'

const form = document.forms['request-form']

form.addEventListener('submit', e => {
  if(valid){
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    // .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.href = 'https://www.countrydancemap.com/NewLocationsThankYou.html'; })
    .catch(error => console.error('Error!', error.message))
  }else{
    e.preventDefault()
  }
})