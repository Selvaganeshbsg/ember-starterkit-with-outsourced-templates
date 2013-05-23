/*
 This is the place where you can specify all your templates you will load in your app!
 All you have to do is make a HTML-file for your template under ../templates/ and 
 load it via templateLoader.js.
 
 For example we have 
    ../templates/myTemplate.html

 then here have to write 
    $.ajax({url: 'templates/myTemplate.html', success: function(data){addTemplate(data, 'templatename in ember');}, async: false });
*/

/*expand this line with your templates*/
$.ajax({url: 'templates/index_template.html', success: function(data){addTemplate(data, 'index');}, async: false });
$.ajax({url: 'templates/about_template.html', success: function(data){addTemplate(data, 'about');}, async: false });

function addTemplate(data, name){
  Ember.TEMPLATES[name] = Ember.Handlebars.compile(data);
}