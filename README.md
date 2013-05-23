ember-starterkit-with-outsourced-templates
==========================================

<p>I searched a long time for a easy solution to get embers templates out of the index.html.
Now this is the standard ember-starter-kit with the easiest modification I could find to do this.</p>

<p>Under the templates-folder you have all templates as html-files and under the js-folder you can find
the templateLoader.js, were you have to specify what templates should be loaded.</p>


<h3>Example:</h3>
<p>We have a template like ../templates/myTemplate.html with content.</p>
`<h1>hello world</h1>`
<p>Then you will have to add the following line in templateLoader.js to load it on startup.</p>
`
  $.ajax({url: 'templates/myTemplate.html', success: function(data){addTemplate(data, 'templatename in ember');}, async: false });
`
<p>which is the same as if you wrote it in index.html like ...</p>
`
  <script type="text/x-handlebars" data-template-name="index">
    <h1>hello world</h1>
  </script>
`

<p>As i wrote, it is realy easy, but i couldn't find that solution anywhere on the internet,
so i thought i should fork a little example for beginners and anyone who has the same problem
as i had.</p>
<p>I can not guarantee that it is a good solution, but for me it worked perfectly.</p>
<p>Have fun with it!</p>
