const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'shubhamgupta240999@gmail.com',
		pass: 'your access pass value'
	}
});

let mailDetails = {
	from: 'shubham240999gupta@gmail.com',
	to: 'shubhamgupta240999@gmail.com',
	subject: 'Test mail',
	text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs',err);
	} else {
		console.log('Email sent successfully');
	}
});
