// menu list for visualization

var result = [];


(function(){
  // toggle for motion

  var moact = function(){

    $(".motion").show();
  }
  var modeact = function(){
    node.on('mousedown.drag', null);
    node.on('click', null);
    $(".motion").hide();
  }


  // toggle for highlight protein targets
  var targetact = function(){
    $(".stat").show();
  }
  var targetdeact = function(){
    $(".stat").hide();
  }

  var menuitems = ["Disable Movement", "Highlight Target Proteins", "Brush Statistics"];
  var funcselect = [ moact, targetact ];
  var funcunselect = [ modeact, targetdeact ];

  var table = d3.select('.menu').append('ul')
      .selectAll('li')
      .data(menuitems)
  .enter()
      .append('li')
      .text(function(d) { return d});

  $(function() {
    $( ".menu" ).bind("mousedown", function(e){
      e.metaKey = true;
    }).selectable({
      filter:'li',
      create: function() {
        $(".menu li").each(function(){
          $(this).addClass('ui-selected');
        });
      },
      selected: function( e, u ) {
        var idx = menuitems.indexOf(u.selected.innerHTML);
        result = u.selected;
        funcselect[idx]();
      },
      unselected: function( e, u ) {
        var idx = menuitems.indexOf(u.unselected.innerHTML);
        result = funcunselect[idx];
        funcunselect[idx]();
      }
    });
  });
})()
