function validateForm() {
    var name = document.forms["applicationForm"]["name"].value;
    var phone = document.forms["applicationForm"]["phone"].value;
    var comment = document.forms["applicationForm"]["comment"].value;

    if (name == "") {
      alert("Пожалуйста, введите ваше имя");
      return false;
    }

    if (phone == "") {
      alert("Пожалуйста, введите ваш номер телефона");
      return false;
    }

    if (comment == "") {
      alert("Пожалуйста, введите ваш комментарий");
      return false;
    }


    return true;
  }