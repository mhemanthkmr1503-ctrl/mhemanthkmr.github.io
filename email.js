function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "m.hemanthkmr143@gmail.com",
	Password : "Murali123$",
	To : "m.hemanthkmr143@gmail.com",
	From : document.getElementById("email"),
	Subject : document.getElementById("subject") ,
	Body : document.getElementById("message"),
	}).then(
		message => alert("Mail Sent Successfully")
	);
}