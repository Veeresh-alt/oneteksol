function inputName(inputtxt)
      { 
    
      var letters = document.getElementById('name').innerHTML= /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      
      return true;
      }
      else if(inputtxt.value == "")
      {
      alert('Please enter your name');
      }
      else
      {
        document.getElementById('name1').innerHTML="use a-z"
        return false;
      }
      }


      function mobileNo(inputNo)
        {
            var numbers =document.getElementById('mobile').innerHTML= /^[0-9]+$/;
            if(inputNo.value.match(numbers))
            {
            //document.form1.mobile1.focus()
            alert('correct')
            return true;
            }
            else
            {
            //document.form1.mobile1.focus()
                alert('Enter your mobile number')
                return false;
            }
        }