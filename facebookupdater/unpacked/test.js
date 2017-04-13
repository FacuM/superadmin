var oldCuate="";
var minTime=15552000;	//6 months since account creation.
console.log("=============================");
console.log("Waiting 5 seconds to begin...");
console.log("=============================");
setTimeout(function(){
    function recursiveApproval(){
		var  a=document.getElementsByName("approve button")[0];
		if(typeof(a)!='undefined' && a!=null){
			var currentCuate=processUserData(a);
			if(currentCuate.name!=oldCuate){
				oldCuate=currentCuate.name;
				console.log("----------------------------------------");
				console.log("Name : "+currentCuate.name);
				console.log("Account creation date: "+currentCuate.date.printDate);
				var time=new Date();
					time=time.getTime();
				var deltaTime=time-currentCuate.date.timestamp;
				if(deltaTime>(minTime*1000)){
					console.log("Added to the group.");
				}else{
					console.log("Request denied: too new account.");
					a=getDeclineUser(a);	//Replace the button that's going to be clicked by "Decline".
				}
				a.dispatchEvent(new MouseEvent("click",{cancelable:false, bubbles: true, view: window}));	//Clickeo.
				var tTime=3000+Math.random()*2000;
				console.log("----------");
				console.log("Next account in "+Math.round(tTime/1000)+ " seconds...");
				setTimeout(function(){
					recursiveApproval();
				},tTime);
			}else{
				//Look for any close button if the person was already in the group
				var cancelbutton = document.getElementsByClassName('autofocus layerCancel _4jy0 _4jy3 _4jy1 _51sy selected _42ft');
				var cancelbutton1st = cancelbutton[0];
				if(typeof(cancelbutton1st)!='undefined' && cancelbutton1st!=null){
					console.log('|--> Found "Close" button, clicking...');
					cancelbutton1st.click();
				}
				console.log(currentCuate.name+" repeated, retrying in one second (1 second).");
				setTimeout(function(){
					recursiveApproval();
				},1000);
			}
		}else{
			console.log("No more accounts found.");
			
		}
	
}
	//////Gets the DOM's name and creation date.
	function processUserData(elm){
		var _element=elm.parentNode.parentNode;
		_element=_element.childNodes[1];
		var _obj={};
		_obj.name=getName(_element);
		_obj.date=getDate(_element);
		return _obj;
		//Name:
		function getName(p){
			var auxDiv=document.createElement("div");
				auxDiv.innerHTML=p.innerHTML;
			var n=auxDiv.getElementsByTagName("a")[0]
		return n.innerText;
		}
		//Creation date:
		function getDate(e){
			var calendar={
			"enero":"01",
			"febrero":"02",
			"marzo":"03",
			"abril":"04",
			"mayo":"05",
			"junio":"06",
			"julio":"07",
			"agosto":"08",
			"septiembre":"09",
			"octubre":"10",
			"noviembre":"11",
			"diciembre":"12"
			};
			var dateString=e.getElementsByClassName("timestampContent")[0].innerText;
			var splitDate=dateString.split(" de ");
				splitDate[1]=calendar[splitDate[1]];
			var firstDate=new Date(splitDate[2],(splitDate[1]-1),splitDate[0],0,0,0);
				firstDate=firstDate.getTime();
			return {printDate:dateString, timestamp: firstDate};
		}
	}

	// Gets the button to decline a request over the Approval button.
	function getDeclineUser(e){
		var    _element=e.parentNode
			_element=_element.childNodes[1];
		return _element;
	}
	
	setTimeout(function(){
		window.location.reload(1);
	}, 60000);

	recursiveApproval();
}, 5000);