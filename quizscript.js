function pressedBtn()
{
  target = document.getElementById('quizForm');
  v1 = target.radios1.value;
  v2 = target.radios2.value;
  console.log(v1, v2);
  report = document.getElementById('quizReport');
  report.innerHTML = v1+'<br>'+v2;
  console.log(v1+'<br>'+v2);
}
