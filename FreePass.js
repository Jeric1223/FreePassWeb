  let locationForm = document.getElementById('inputM')
  let input = document.querySelector('input')
  let messageOne = document.querySelector('#testBox')

  window.onload = function(){
    locationForm.addEventListener('submit', (e) => {
      e.preventDefault() //refresh되는 것을 막는다
      let location = input.value
      if(location < 1 || location > 100){
        alert('1에서 100까지 입력해주세요');
      }
      else if(location < 60)
      {
        
      }
    })
  
  }
 