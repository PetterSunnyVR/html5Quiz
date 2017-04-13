function submitAnswers(){
    var total = 3;
    var score = 0;
    
    //get result (selected redio button value)
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;

    //validate the results
    for(var i=1; i<=total; i++){
        if(eval('q'+i)==null || eval('q'+i)==''){
            alert('You missed question '+(i));
            return false;
        }
    }  
    
    var answersArr = ["a","b","d"];
    for(var i=1; i<=total; i++){
        if(eval('q'+i)===answersArr[i-1]){
            score++;
        }
    }
    
    alert(score);
    var results = document.getElementById("results");
    
    results.innerHTML = '<h3> You have scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
    return false;
}

