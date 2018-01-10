
Template.KL_Dialog.events({
	'click [data-action="dialogDismiss"]': function(e,tmpl){
		Dialog.clear(true);
	},
});

Template.KL_Dialog.helpers({
	title : () => {
		return ((Object.prototype.toString.call(Dialog.options.title) === "[object Function]") ? Dialog.options.title() : Dialog.options.title);
	},
});