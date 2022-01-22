var password = "password";
var passwordCorrect = false

$("#submitPassword").on("click", function(){
	if($("#inputPassword6").val() === password){
		$("#passwordModal").modal("hide");
		$("#optionsModal").modal("show");
	} else {
		setTimeout(function(){
			$("#wrongPassword").addClass("hidden");	
			},1000)
			$("#wrongPassword").removeClass("hidden");	
		}
})

$(".card-image").on("click", function(event){
	var imgID = event.currentTarget.id;
	switch (imgID) {
		case "scheduleImg":
			$("#scheduleModal").modal("show");
			break;
		case "crewImg":
			$("#crewModal").modal("show");
			break;
		case "kingairImg":
			$("#aircraftModal").modal("show");
			break;
		case "scalesImg":
			$("#formFModal").modal("show");
			break;
		case "headsetImg":
			$("#formFModal").modal("show");
			break;
		case "fuelImg":
			$("#formFModal").modal("show");
			break;
	}
})





















