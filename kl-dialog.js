
/**
 * The global object 
 * **/


 Dialog = {

 	currentView : false,
 	defaultOptions : {
 		size : "dialog-sm",
 		title : false,
 		static : false,
 		entry : false,
 		exit : false,
 		dark : false
 	},
 	options : false,
 	parent : false,
 	wrapper : false,



 	/**
 	 * Render a template into the dialog
 	 * 
 	 * @param templateName - the name of the template
 	 * @param data - any data to pass along into the template
 	 * @param options (object) - a range of options to control the visual appearance of the dialog
 	 * 
 	 * */
 	render : function(templateName, data = false, options){

 		let self = this;

 		if(!this.parent)
 			this.parent = document.getElementById("dialogHolder");

 		// Handle the options
 		this.options = _.extend(self.defaultOptions,options);

 		// Check to see if the parent holder has the active class, apply if it doesn't
 		if(_.indexOf(self.parent.classList,"active") < 0){
 			this.parent.classList.add("active");
 		}else{
 			this.clear(); // The dialog module is already open so we need to clean it out ready for the fresh template
 		}

 		// Handle whether to make the dialog backdrop dark
 		if(this.options.dark)
 			this.parent.classList.add("dark");

 		if(this.options.static)
 			this.parent.classList.add("static");

		// Now we handle animations by adding a wrapper element
		this.wrapper = document.createElement("div");
		this.wrapper.className = 'dialog-wrapper';
		this.wrapper = this.parent.appendChild(this.wrapper);

 		if(data !== false){

 			this.currentView = Blaze.renderWithData(Template[templateName], data, this.wrapper);
 		}else{
 			this.currentView = Blaze.render(Template[templateName], this.wrapper);
 		}

 	},

 	clear : function(force = false){

 		let self = this;

 		if(self.currentView){

 			// Run the exit animation for the dialog
	
 			Blaze.remove(self.currentView);
			self.wrapper.parentNode.removeChild(self.wrapper);
			self.wrapper = false;
			self.currentView = false;
 		}

 		if(force){
 			self.options = self.defaultOptions;

 			self.parent.classList.remove("active");
			self.parent.classList.remove("static");
			self.parent.classList.remove("dark");
			pageWrapper.classList.remove("blur");
 		}

 	}

 };

