	var cnQuizAnswers = {
    q1: "11.255.255.255",
    q2: "False",
	q3: "protocol",
	q4: "source",
	q5: "Eight",
	q6: "It will be dropped.",
	q7: "TCP",
	q8: "1 - 1023",
	q9: "3rd and 4th",
};

	var ieQuizAnswers = {
    q1: "Cascading Style Sheets",
    q2: "Dynamic HTML",
	q3: "Netscape",
	q4: "Common Gateway Interface",
	q5: "Color picker",
	q6: "False",
	q7: "required",
	q8: "link",
	q9: "True",
	q10: "JavaScript"
};

	var drmQuizAnswers = {
    q1: "The design, construction, and maintenance of a database.",
    q2: "None of the above",
	q3: "All of the above",
	q4: "you can insert, update, and delete data in the underlying base table(s) through a synonym",
	q5: "A DOS-based user interface",
	q6: "Oracle SQL Developer",
	q7: "All of the above",
	q8: "It is used to retrieve data into multiple records from a PL/SQL program.",
};

	var misQuizAnswers = {
    q1: "Confidentiality, Integrity, and Availability",
    q2: "Security policy",
	q3: "Biometric authentication",
	q4: "Detective, deterrent, preventive, corrective, recovery, and compensating",
	q5: "They use techniques to hide themselves",
	q6: "Pharming attack",
	q7: "Document review, walkthrough, simulation, parallel test, cutovertest",
	q8: "Business Continuity Planning",
	q9: "Asymmetric cryptography",
	q10: "Decryption"
};

function myFunction() {
	
	var score = 0;
    var list = document.getElementById("lstQuestions");
	
	var temp;
	var length=list.getElementsByTagName("ol").length;
	var numberOfCheckedRadio = $('input:radio:checked').length;
	var resultSection = document.getElementById("Result");

	
	if(length==numberOfCheckedRadio)
	{
	 var quizId = document.getElementById("quizId").value;
	 	 
	 
	 if(quizId=="cn_quiz")
	 {
		var objAns=cnQuizAnswers;
	
	 }

	 
	 if(quizId=="ie_quiz")
	 {
		var objAns=ieQuizAnswers;
	
	 }

	 if(quizId == "mis_quiz")
	 {
		var objAns=misQuizAnswers;
	 }

	 if(quizId == "drm_quiz")
	 {
		var objAns=drmQuizAnswers;
	 }
	 
	 
	 for(var i=0; i<length; i++){
	
		var id=i+1;
		temp = document.getElementsByName("q"+id);
		for(var rcnt=0;rcnt<temp.length;rcnt++)
		{
		if(temp[rcnt].checked)
		{

	if( temp[rcnt].value == objAns["q"+id]){

	score = score+1;
		 
		}
		break;
		}
		}
		 
	}
	
	var gpa = score/length;


	
	if(gpa>=0.9)
	{
	resultSection.innerHTML="Grade: A";
	resultSection.style.color="green";
	}
	else if(gpa >=0.8 && gpa<0.9)
	{
	resultSection.innerHTML="Grade: B";
	resultSection.style.color="green";
	}	

	else if(gpa >=0.7 && gpa<0.8)
	{
	resultSection.innerHTML="Grade: C";
	resultSection.style.color="green";	
	}
	else if(gpa >=0.6 && gpa<0.7)
	{
	resultSection.innerHTML="Grade: D";	
	resultSection.style.color="red";	
	}
	else
	{
	resultSection.innerHTML="Grade: F";	
	resultSection.style.color="red";	
	}
	
	resultSection.innerHTML += "<br>Score: " + score ;
	resultSection.innerHTML += "<br>For Grade details click <a href='grade.html' target='_blank'>here</a>" ;
}
else
{
	resultSection.style.color="red";
	resultSection.innerHTML="Answer all the Questions";
}

}
function resetForm()
{
	document.getElementById("formQuiz").reset();
	var resultSection = document.getElementById("Result");
	resultSection.innerHTML="";
}