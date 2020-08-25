var mongoose = require("mongoose"),
	Campground = require("./models/campground"),
	Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest", 
		image: "https://images.unsplash.com/photo-1485289284810-303162a4add7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est purus, pulvinar pretium tellus ac, blandit lobortis diam. Ut quis volutpat turpis. Etiam tristique varius sollicitudin. Etiam eget maximus nunc. Curabitur semper scelerisque justo, quis tincidunt leo. Cras leo sem, ullamcorper a mi vel, vestibulum eleifend turpis. Vivamus pellentesque urna odio, nec gravida est imperdiet sit amet. Nullam euismod tellus eu nibh eleifend, dapibus mollis lectus tempor.",
	},
	{
		name: "Desert Mesa", 
		image: "https://images.unsplash.com/photo-1535645872228-bdd9e6603a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
		description: "In aliquam blandit augue, in mollis turpis tincidunt non. Cras tincidunt tempus ultrices. Pellentesque turpis metus, dignissim ut enim et, euismod convallis erat. Pellentesque eu imperdiet ex. Nulla facilisi. Morbi auctor enim neque, vitae ultrices ex suscipit eget. Donec semper a nibh nec sollicitudin. Morbi varius sodales nibh, eu sodales magna. Sed ut arcu dolor. Sed pellentesque eros nec libero pharetra sollicitudin. Aenean sed feugiat ipsum, vitae hendrerit augue. Donec tincidunt enim ut tempor tincidunt. Sed leo neque, molestie vel eros nec, iaculis egestas magna.",
	},
	{
		name: "Forrest Floor", 
		image: "https://images.unsplash.com/photo-1571205041578-9dabfcd7e9f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
		description: "Fusce aliquet sed velit nec fermentum. Pellentesque vitae tellus ex. Aenean bibendum dignissim felis, quis consectetur neque pretium vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae pulvinar metus, at euismod mi. Aliquam pharetra mattis imperdiet. Aliquam at interdum risus. Vestibulum ligula erat, vehicula laoreet elit ut, pretium ornare nibh.",
	},
];


function seedDB(){
	//Remove all campgrounds
	Campground.remove({}, function(err){
		if(err){ 
			console.log(err);
		} else{
			console.log("removed campgrounds!");
			//add a few campgrounds
			data.forEach(function(seed){
				Campground.create(seed, function(err, campground){
					if(err){
						console.log(err);
					} else {
						console.log("added a campground");
						//create a comment
						Comment.create({
							text: "This place is great, but I wish there was internet!",
							author: "Homer",
						}, function(err, comment){
							if(err){
								console.log(err);
							} else{
								campground.comments.push(comment);
								campground.save();
								console.log("Created new Comment");
							};
						});
					};
				});
			});
		};
	});
};

module.exports = seedDB;