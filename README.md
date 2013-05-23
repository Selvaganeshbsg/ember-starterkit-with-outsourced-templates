ember-starterkit-with-outsourced-templates
==========================================

I searched a long time for a easy solution to get embers templates out of the index.html.
Now this is the standard ember-starter-kit with the easiest modification I could find to do this.

Under the templates-folder you have all templates as html-files and under the js-folder you can find
the templateLoader.js, were you have to specify what templates should be loaded.


Example:
We have a template like ../templates/myTemplate.html with conten:
  <h1>hello world</h1>

Then you will have to add the following line in templateLoader.js to load it on startup.
  $.ajax({url: 'templates/myTemplate.html', success: function(data){addTemplate(data, 'templatename in ember');}, async: false });

which is the same as if you wrote it in index.html like ...
  <script type="text/x-handlebars" data-template-name="index">
    <h1>hello world</h1>
  </script>
  
-----------------------------------------------------------------------------

As i wrote, it is realy easy, but i couldn't find that solution anywhere on the internet,
so i thought i should fork a little example for beginners and anyone who have the same problem
as i had.
Have fun with it!
